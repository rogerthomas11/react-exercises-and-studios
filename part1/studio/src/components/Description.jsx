import styles from './Description.module.css';
import React from 'react';
import RecipeDescription from './Description.jsx'

const RecipeAuthor = () => {
    let authorLink = "https://altonbrown.com/recipes/baked-macaroni-and-cheese/"
    let authorPhoto = "https://variety.com/wp-content/uploads/2017/02/alton-brown.jpg?w=1000"
    let authorName = "Alton Brown"
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Baked Mac & Cheese</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
};

export default RecipeDescription;