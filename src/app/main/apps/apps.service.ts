import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { BehaviorSubject } from "rxjs";

import { Recipe } from '../models/recipe.model';
import { Store } from "@ngrx/store";

import * as fromRoot from '../../app.reducer';
import * as Apps from './apps.actions';
import { Category } from "../models/category.model";
import { FirebaseService } from "src/app/shared/services/firebase.service";
import { HelperService } from "src/app/shared/services/helper.service";

import * as _ from 'lodash';
import { UiService } from "src/app/shared/services/ui.service";

@Injectable()
export class AppsService {
    uploads: any[];

    // Pagination
    appId: string;
    recipes: any;
    offset = 8;
    nextKey: any; // for next button
    prevKeys: any[] = []; // for prev button
    nextKey$ = new BehaviorSubject<any>(null);
    prevKeys$ = new BehaviorSubject<any>([]);

    constructor(private afStore: AngularFirestore,
        private afStorage: AngularFireStorage,
        private store: Store<fromRoot.State>,
        private firebaseService: FirebaseService,
        private helperService: HelperService,
        private uiService: UiService) { }


    // Adding new recipe
    addNewRecipe(fileArr: any, recipeObj: Recipe, appId: string, callback, callbackError) {
        let downloadURLs = [];
        const fileList = fileArr;
        let uploads = [];
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
                                id: this.afStore.createId(),
                                recipeImages: downloadURLs,
                                searchString: this.uiService.changeToPlainText(recipeObj.recipeName)
                            }
                            this.store.dispatch(new Apps.DownloadingURLs(recipeObject.recipeImages));
                            this.firebaseService.addDocumentToCollectionInDocument('availableApps', appId, 'recipeList', recipeObject).then(res => {
                                this.store.dispatch(new Apps.UnUploadingRecipe());
                                this.helperService.updateRecipeQuantityToApp(recipeObject.appId, true);
                                callback('Adding recipe successfully');
                            })
                                .catch(error => {
                                    callbackError('Unable to add recipe');
                                });
                        }
                    })
                })
            ).subscribe()
        }
    }
    
    // Get Recipe List based on search
    getRecipeListOnSearch(appId: string, searchValue: string) {
        this.firebaseService.getCollectionOnQuery('availableApps', appId, 'recipeList', ref => ref.orderBy('searchString').startAt(this.uiService.changeToPlainText(searchValue)).endAt(this.uiService.changeToPlainText(searchValue) + "\uf8ff").limit(10)).subscribe(recipes => {
            this.processPaginationFields(recipes);
            this.store.dispatch(new Apps.SendingRecipes(this.recipes));
        })
    }

    // Get Recipe List and Pagination
    getRecipeListFirst(appId: string, key?: any) {
        if (appId) {
            this.appId = appId;
            this.getRecipeList(appId, this.offset);
        } else {
            this.store.dispatch(new Apps.SendingRecipes(null));
        }
    }

    getRecipeList(appId: string, offset?: number, key?: any) {
        if (key) {
            this.firebaseService.getCollectionOnQuery('availableApps', appId, 'recipeList', ref => ref.orderBy('id').startAt(key).limit(offset + 1)).subscribe(recipes => {
                this.processPaginationFields(recipes);
                this.store.dispatch(new Apps.SendingRecipes(this.recipes));
            })
        } else {
            this.firebaseService.getCollectionOnQuery('availableApps', appId, 'recipeList', ref => ref.orderBy('id').limit(offset + 1)).subscribe(recipes => {
                this.processPaginationFields(recipes);
                this.store.dispatch(new Apps.SendingRecipes(this.recipes));
            })
        }
    }

    processPaginationFields(recipes: Recipe[]) {
        this.recipes = _.slice(recipes, 0, this.offset);
        this.nextKey = _.get(recipes[this.offset], 'id');
        this.nextKey$.next(this.nextKey);
    }

    nextPage() {
        this.prevKeys.push(_.first(this.recipes)['id']); // set current key as pointer for previous page
        this.prevKeys$.next(this.prevKeys);
        this.getRecipeList(this.appId, this.offset, this.nextKey);
    }

    prevPage() {
        const prevKey = _.last(this.prevKeys); // use last key in array
        this.prevKeys = _.dropRight(this.prevKeys); // then remove the last key in the array
        this.prevKeys$.next(this.prevKeys);
        this.getRecipeList(this.appId, this.offset, prevKey);
    }

    // Get Category List
    getCategoryList() {
        this.store.dispatch(new Apps.IsloadingCate());
        this.afStore.collection<Category>('availableCategories', ref => ref.orderBy('id')).valueChanges()
            .subscribe(categories => {
                this.store.dispatch(new Apps.IsunloadingCate(categories));
                this.helperService.updateCategories();

            }, error => {
                this.store.dispatch(new Apps.IsunloadingCate(null));
            })
    }

    // Remove Recipe
    removeRecipe(id: string, appId: string, callback, errorCallback) {
        this.firebaseService.removeDocumentInCollectionOfDocument('availableApps', appId, 'recipeList', id)
            .then(res => {
                if (res) {
                    this.helperService.updateRecipeQuantityToApp(appId, false);
                    callback('Remove recipe successfully');
                }
            })
            .catch(error => {
                errorCallback('Remove recipe unsuccessfully');
            })
    }
}