import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return(
    <li id = "cardElement" className="elements__item">
      <img className="elements__image" alt={props.name} src={props.link} onClick={handleClick} />
        <button className="elements__delete-button" type="button"></button>
        <div className="elements__heading">
          <h2 className="elements__title">{props.name}</h2>
          <div className="elements__like-container">
            <button className="elements__like" type="button" aria-label="like button"></button>
            <p className="elements__like-counter">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;