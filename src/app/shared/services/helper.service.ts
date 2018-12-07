import { Injectable } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from "../shared-components/confirmation-dialog/confirmation-dialog.component";
import { FirebaseService } from "./firebase.service";
import { first } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { Category } from "src/app/main/models/category.model";
import { Store } from "@ngrx/store";

import * as fromRoot from '../../app.reducer';

declare var PNotify: any;
declare var $: any;
@Injectable()
export class HelperService {
    categoriesList = new Subject<Category[]>();

    constructor(private modalService: NgbModal, private firebaseService: FirebaseService, private store: Store<fromRoot.State>) { }

    public recipe_level = [
        {
            id: 1,
            title: 'Easy'
        },
        {
            id: 2,
            title: 'Medium'
        },
        {
            id: 3,
            title: 'Hard'
        }
    ];

    public ingredient_unit = [
        {
            id: 1,
            title: 'Kg(s)'
        },
        {
            id: 2,
            title: 'Gram(s)'
        },
        {
            id: 3,
            title: 'mL'
        },
        {
            id: 4,
            title: 'L'
        }
    ];

    public categories = [];

    public showPNotify(title, message, type) {
        new PNotify({
            target: document.body,
            data: {
                title: title,
                text: message,
                type: type
            }
        });
    }

    public confirmDialogComponent(title: string,
        message: string,
        btnOkText: string = 'OK',
        btnCancelText: string = 'Cancel',
        dialogSize: 'sm' | 'lg' = 'sm'): Promise<boolean> {
        const modalRef = this.modalService.open(ConfirmationDialogComponent, { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;

        return modalRef.result;
    }

    public updateRecipeQuantityToApp(id: string, flag: boolean) {
        if (flag) {
            this.firebaseService.getDocument('availableApps', id).pipe(first())
                .subscribe(res => {
                    let updatedRecipeQuantity = res['recipeQuantity'] + 1;
                    this.firebaseService.updateDocument({ recipeQuantity: updatedRecipeQuantity }, 'availableApps', id);
                })
        } else {
            this.firebaseService.getDocument('availableApps', id).pipe(first())
                .subscribe(res => {
                    let updatedRecipeQuantity = res['recipeQuantity'] - 1;
                    this.firebaseService.updateDocument({ recipeQuantity: updatedRecipeQuantity }, 'availableApps', id);
                })
        }
    }

    convertLevelId(id: string): string {
        let result = this.recipe_level.filter(element => element.id == +id);
        return result[0].title;
    }

    convertUnitId(id: string): string {
        let result = this.ingredient_unit.filter(element => element.id === +id);
        return result[0].title;
    }

    updateCategories() {
        this.store.select(fromRoot.getCategoryList).subscribe(categories => {
            this.categories = categories;
            this.categoriesList.next(this.categories);
        });
    }

    convertCategoryId(id: string): string {
            let result = this.categories.filter(element => element.id === +id);
            return result[0].category;
    }
}