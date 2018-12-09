import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, Subject } from "rxjs";
import { take, finalize } from "rxjs/operators";
import { Recipe } from "src/app/main/models/recipe.model";
import { MoApp } from "../moapp.model";
import { UploadingTask } from "src/app/main/models/uploadingtask.model";


@Injectable()
export class FirebaseService {
    constructor(private afStorage: AngularFireStorage,
        private afStore: AngularFirestore,
        private afAuth: AngularFireAuth) { }

    // ADD, UPDATE, REMOVE DOCUMENT
    addDocument(documentObj: any, collectionName: string) {
        const id = documentObj['id'];
        return this.afStore.collection(`${collectionName}`).doc(id).set(documentObj)
            .then(res => {
                return true;
            })
            .catch(error => {
                throw new Error('Unable to add new document to collection');
            })
    }

    // Modifications for adding new category
    addDocumentWithFirebaseId(documentObj: any, collectionName: string) {
        const id = documentObj['firebaseId'];
        return this.afStore.collection(`${collectionName}`).doc(id).set(documentObj)
            .then(res => {
                return true;
            })
            .catch(error => {
                throw new Error('Unable to add new document to collection');
            })
    }

    updateDocument(documentChangedObj: any, collectionName: string, documentId: string) {
        return this.afStore.doc(`${collectionName}/${documentId}`).update(documentChangedObj)
            .then(result => {
                return true;
            })
            .catch(error => {
                throw new Error('Unable to upload the document');
            });
    }

    getDocument(collectionName: string, documentId: string): Observable<any> {
        return this.afStore.doc(`${collectionName}/${documentId}`).valueChanges();
    }

    // COLLECTION RETRIEVE
    getCollection(collectionName: string): Observable<any[]> {
        return this.afStore.collection(`${collectionName}`).valueChanges();
    }

    // COLLECTION RETRIEVE BASED ON ID
    getCollectionOnQuery(collectionParentName: string, docParentId: string, collectionName: string, queryFn?): Observable<any[]> {
        return this.afStore.doc(`${collectionParentName}/${docParentId}`).collection(`${collectionName}`, queryFn).valueChanges();
    }

    // CONTROL RECIPES INSIDE DOCUMENT 
    addDocumentToCollectionInDocument(collectionNameParent: string, docId: string, collectionName: string, documentObj: any) {
        const id = documentObj['id'];
        return this.afStore.doc(`${collectionNameParent}/${docId}`).collection(`${collectionName}`).doc(id).set(documentObj)
            .then(res => {
                return true;
            })
            .catch(error => {
                throw new Error('Unable to add new document to collection');
            })
    }

    removeDocumentInCollectionOfDocument(collectionNameParent: string, docParentId: string, collectionName: string, docId: any) {
        return this.afStore.doc(`${collectionNameParent}/${docParentId}`).collection(`${collectionName}`).doc(`${docId}`).delete()
            .then(result => {
                return true;
            })
            .catch(error => {
                throw new Error('Unable to remove the document');
            });
    }

    getDocumentInCollectionOfDocument(collectionNameParent: string, docParentId: string, collectionName: string, docId: any): Observable<any> {
        return this.afStore.doc(`${collectionNameParent}/${docParentId}`).collection(collectionName).doc(docId).valueChanges();
    }

    updateDocumentOfCollectionInDocument(collectionNameParent: string, docId: string, collectionName: string, documentObj: any) {
        const id = documentObj['id'];
        return this.afStore.doc(`${collectionNameParent}/${docId}`).collection(`${collectionName}`).doc(id).set(documentObj)
        .then(res => {
            return true;
        })
        .catch(error => {
            throw new Error('Unable to add new document to collection');
        })
    }
}