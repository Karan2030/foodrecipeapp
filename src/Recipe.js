import React from 'react'

export default function Recipe(props) {
  return (
    <div className='recipeCard'>
        <h1>{props.title}</h1>
        <ul>
            {props.ingredients.map((ing)=>(
                <li>{ing.text}</li>
            ))}    
        </ul>
        <p>Calories:{props.calories}</p>
        <img className='image' src={props.image} alt="image" />
        
    </div>
  )
}
