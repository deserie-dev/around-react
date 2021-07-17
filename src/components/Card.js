import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return(
    <div className="card">
      <button className="card__delete"></button>
        <img className="card__image" alt={props.name} src={props.link} onClick={handleClick} />
        <div className="card__textblock">
          <h2 className="card__title">{props.name}</h2>
            <div className="card__likes-container">
              <button className="card__heart-icon"></button>
              <p className="card__likes-counter">{props.likes}</p>
            </div>
        </div>
    </div>
  );
}

export default Card;