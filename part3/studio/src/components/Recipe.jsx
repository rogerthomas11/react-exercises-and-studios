import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.punchfork.com/recipe/Morgans-Veggie-Patties-Food-Network";
   let authorPhoto = "https://i.insider.com/5bf3369348eb123aa64e5d65?width=1136&format=jpeg";
   let authorName = "Guy Fieri";

   return (
      <div>
         <img src={authorPhoto} alt = "Guy Fieri" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Diced Red Onion", "Chickpeas", "Black Beans","Red Bell Peppers", "White Beans"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Morgan's Veggie Patties</h1>
            <p>A veggie burger like no other! This patty is packed with big flavor and a great kick of heat. Sure to become a favorite of any burger lover!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://d1yfn1dfres2va.cloudfront.net/008/73/f4/73f42ac691cd513f0cb741168e914b9d_640m.jpg" alt="Photo of 'Morgan's veggie patty on plate" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
