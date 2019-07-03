import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoopingService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients : Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatos", 10),
    ];

    getIngredients() {
        return [ ... this.ingredients ];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit([ ... this.ingredients ]);
    }

    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit([ ... this.ingredients ]);
    }


}