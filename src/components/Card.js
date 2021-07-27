import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  //Subscribing to user context
  const currentUser = React.useContext(CurrentUserContext);
  // Checking if the current user is the owner of the current card
  const isOwn = props.card.owner._id === currentUser._id;
  // Check if the card was liked by the current user
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = (
    `elements__delete-button ${isOwn ? 'elements__delete-button_visible' : 'elements__delete-button_hidden'}`
  ); 

  // Create a variable which you then set in `className` for the like button
  const cardLikeButtonClassName = (
    `elements__like ${isLiked ? 'elements__like_active' : ''}`
  )

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return(
    <li className="elements__item">
      <img className="elements__image" alt={props.name} src={props.link} onClick={handleClick} />
        <button className={cardDeleteButtonClassName} type="button"></button>
        <div className="elements__heading">
          <h2 className="elements__title">{props.name}</h2>
          <div className="elements__like-container">
            <button className={cardLikeButtonClassName} type="button" aria-label="like button"></button>
            <p className="elements__like-counter">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;