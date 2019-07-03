import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoopingService } from '../shopping-list/shooping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private _recipes: Recipe[] = [
        new Recipe(
            'Meatball Parmesan Casserole', 
            'I love easy & delicious recipes like this Meatball Parmesan Casserole. You only need 5 ingredients, it’s ready in minutes & it’ll feed a crowd for cheap.',
            'http://www.thechunkychef.com/wp-content/uploads/2016/10/Meatball-Parmesan-Bake-4.jpg',
            [
                new Ingredient('Meatballs', 1),
                new Ingredient('Pasta Sauce', 1 )
            ]
        ),
        new Recipe(
            'Spanish Rice Bake', 
            'This savory rice dish is then baked with Cheddar and garnished with fresh cilantro.', 
            'https://images.media-allrecipes.com/userphotos/560x315/2471.jpg',
            [
                new Ingredient('pound lean ground beef', 1),
                new Ingredient('Cup finely chopped onion', 1.2 )
            ]
        )
    ];  

    constructor(private shoopingService: ShoopingService) {}
    
    getRecipes() {
        return [...this._recipes];
    }

    addIngredientsToShoopingList(ingredients: Ingredient[]) {
        this.shoopingService.addIngredients(ingredients);
    }
}