import React from 'react'
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients, mealType, cuisineType}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <center>
            <ul>
                    {ingredients.map(ingredient => (
                        <li className={style.li}>{ingredient.text}</li>
                    ))}
                </ul>
                <p>{calories}</p>
                <img src={image} alt="" style={{borderRadius: '50%', width: '100px', height: '100px'}}/>
                <p>{mealType}</p>
                <p>{cuisineType}</p>
            </center>
        </div>
    );
};

export default Recipe
