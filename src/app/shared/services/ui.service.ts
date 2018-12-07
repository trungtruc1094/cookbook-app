import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { MoApp } from "../moapp.model";
import { Observable, Subject } from "rxjs";
import { Store } from "@ngrx/store";

import * as Ui from '../ui.actions';
import * as fromRoot from '../../app.reducer';
import { FirebaseService } from "./firebase.service";

@Injectable()
export class UiService {
    moAppArr: MoApp[];
    // appsChanged = new Subject<MoApp[]>();

    constructor(private afStore: AngularFirestore, private store: Store<fromRoot.State>, private firebaseService: FirebaseService) { }

    getAppList() {
        this.store.dispatch(new Ui.IsloadingApp());
        this.firebaseService.getCollection('availableApps').subscribe(apps => {
            this.store.dispatch(new Ui.IsunloadingApp(apps));
        },
            err => {
                this.store.dispatch(new Ui.IsunloadingApp(null));
            });
        // this.afStore.collection('availableApps').snapshotChanges()
        //     .pipe(
        //         map(docArray => {
        //             return docArray.map(doc => {
        //                 return {
        //                     id: doc.payload.doc.id,
        //                     appName: doc.payload.doc.data()["appName"],
        //                     createdDate: doc.payload.doc.data()["createdDate"],
        //                     recipeQuantity: doc.payload.doc.data()["recipeQuantity"],
        //                     url: doc.payload.doc.data()["url"]
        //                 };
        //             });
        //             // throw Error();
        //         })
        //     )
        //     .subscribe(
        //         (apps) => {
        //             // this.appsChanged.next([...apps]);
        //             this.store.dispatch(new Ui.IsunloadingApp(apps));
        //         },
        //         error => {
        //             // this.appsChanged.next(null);
        //             this.store.dispatch(new Ui.IsunloadingApp(null));
        //         }
        //     );
    }

    public changeToPlainText(name: string) {
        let url = name.toLowerCase();
        url = url.replace(/\s+/g, '');

        return url;
    }
}