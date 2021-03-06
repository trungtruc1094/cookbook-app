import { Injectable } from "@angular/core";
import { MoApp } from "src/app/shared/moapp.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { UiService } from "src/app/shared/services/ui.service";
import { FirebaseService } from "src/app/shared/services/firebase.service";
import { Category } from "../models/category.model";
import { take } from "rxjs/operators";

@Injectable()
export class DashboardService {
    constructor(private afStore: AngularFirestore,
        private uiService: UiService,
        private firebaseService: FirebaseService) { }

    // Adding new app
    addNewApp(appName: string) {
        const app: MoApp = {
            id: this.afStore.createId(),
            appName: appName,
            createdDate: new Date(),
            appUrl: this.uiService.changeToPlainText(appName),
            recipeQuantity: 0
        }
        this.firebaseService.addDocument(app, 'availableApps')
            .then(result => {
                console.log('Add new app success')
            })
            .catch(error => {
                console.log(error);
            });
    }

    // Adding new category
    addNewCategory(categoryName: string, callback, errCallback) {
        let nextId: number;
        let category: Category;
        let firebaseId: string;

        this.afStore.collection<Category>('availableCategories', ref => ref.orderBy('id', 'desc').limit(1)).valueChanges().pipe(
            take(1)
        ).subscribe(
            (result) => {
                if (result && result.length > 0) {
                    nextId = result[0].id + 1;
                    firebaseId = this.afStore.createId();
                    category = {
                        id: nextId,
                        category: categoryName,
                        createdDate: new Date(),
                        firebaseId: firebaseId
                    }
                } else {
                    nextId = 0;
                    firebaseId = this.afStore.createId();
                    category = {
                        id: nextId,
                        category: categoryName,
                        createdDate: new Date(),
                        firebaseId: firebaseId
                    }
                }
                
            },
            (error) => { },
            () => {
                this.firebaseService.addDocumentWithFirebaseId(category, 'availableCategories')
                    .then(result => {
                        callback(result);
                    })
                    .catch(error => {
                        errCallback(error);
                    });
            }
        );
    }
}