import { Injectable } from "@angular/core";
import { HelperService } from "src/app/shared/services/helper.service";
import { FirebaseService } from "src/app/shared/services/firebase.service";
import { Store } from "@ngrx/store";

import * as fromRoot from '../../../app.reducer';
import * as Apps from '../apps.actions';
import { Recipe } from "../../models/recipe.model";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";

import * as _ from 'lodash';

@Injectable()

export class RecipeEditService {
    constructor(
        private helperService: HelperService, 
        private firebaseService: FirebaseService, 
        private store: Store<fromRoot.State>,
        private afStorage: AngularFireStorage,
        private afStore: AngularFirestore) { }

    getRecipe(appId: string, id: string) {
        this.firebaseService.getDocumentInCollectionOfDocument('availableApps', appId, 'recipeList', id).subscribe(res => {
            this.store.dispatch(new Apps.SendingRecipe(res));
        })
    }

    updateRecipe(fileArr: any, recipeObj: Recipe, appId: string, callback, callbackError) {
        let downloadURLs: string[] = [];
        const fileList = fileArr;
        let uploads = [];
        if (fileList && fileList.length > 0) {
            console.log('Uploading with file');
            for (let file of fileList) {
                const fileName = file.name;
                const path = `files/${fileName}`;
                const ref = this.afStorage.ref(path);
                const task = this.afStorage.upload(path, file);
                const percentage$ = task.percentageChanges();
    
                const uploadFile = {
                    fileName: fileName,
                    percentage: percentage$
                }
    
                uploads.push(uploadFile);
                this.store.dispatch(new Apps.UploadingRecipe(uploads));
    
                // get notified when the download URL is available
                task.snapshotChanges().pipe(
                    finalize(() => {
                        ref.getDownloadURL().subscribe(res => {
                            downloadURLs.push(res);
                            if (downloadURLs.length == fileArr.length) {
                                let recipeObject: Recipe = {
                                    ...recipeObj,
                                    recipeImages: _.concat(recipeObj.recipeImages, downloadURLs)
                                }
                                this.store.dispatch(new Apps.DownloadingURLs(recipeObject.recipeImages));
                                this.firebaseService.updateDocumentOfCollectionInDocument('availableApps', appId, 'recipeList', recipeObject).then(res => {
                                    this.store.dispatch(new Apps.UnUploadingRecipe());
                                    callback('Updating recipe successfully');
                                })
                                    .catch(error => {
                                        callbackError('Unable to add recipe');
                                    });
                            }
                        })
                    })
                ).subscribe()
            }
        } else {
            console.log('Uploading without file');
            this.store.dispatch(new Apps.UploadingRecipe(null));
            let recipeObject: Recipe = {
                ...recipeObj,
                recipeImages: recipeObj.recipeImages
            }
            this.firebaseService.updateDocumentOfCollectionInDocument('availableApps', appId, 'recipeList', recipeObject).then(res => {
                this.store.dispatch(new Apps.UnUploadingRecipe());
                callback('Updating recipe successfully');
            })
                .catch(error => {
                    callbackError('Unable to add recipe');
                });
        }
        
    }
}