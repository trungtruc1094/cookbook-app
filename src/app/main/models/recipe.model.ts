import { Category } from "./category.model";
import { Ingredient } from "./ingredient.model";
import { Level } from "./level.model";
import { Step } from "./step.model";

export interface Recipe {
    id?: string;
    appId: string;
    recipeName: string;
    recipeCategory: string;
    recipeSubtitle: string;
    recipeIngredients: Ingredient[];
    recipeDuration: string;
    recipeLevel: string;
    recipePrep: string;
    recipeServing: string;
    recipeSteps: Step[];
    recipeImages?: string[];
    isLoadingImage?: boolean;
    searchString?: string;
}
