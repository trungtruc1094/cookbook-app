import { Unit } from "./unit.model";

export interface Ingredient {
    name: string;
    quantity?: number;
    unit?: string;
}