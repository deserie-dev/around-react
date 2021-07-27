import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main (props) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

  function handleCardDelete(card) {
  api.deleteCard(card._id)
    .then(() => {
      const deleteCard = cards.filter((c) => c._id !== card._id);
      setCards(deleteCard)
    })
  }

  return (
    <main className="content">

    <section className="profile">
        
      <div className="profile__avatar">
        <img className="profile__image" src={currentUser.avatar} alt="Avatar" />
        <button className="profile__image-edit" onClick={props.onEditAvatarClick}></button>
      </div>

      <div className="profile__content">
        <div className="profile__details">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button" aria-label="edit button" className="profile__edit" onClick={props.onEditProfileClick}></button>
        </div>
        <p className="profile__occupation">{currentUser.about}</p>
      </div>
      <button className="profile__add" type="button" aria-label="add button" onClick={props.onAddPlaceClick}></button>
    </section>

    <section className="elements">
      <ul className="elements__container">
        {props.cards.map((card) => {
          return (
            <Card 
              key={card._id} 
              card={card}
              name={card.name} 
              id={card._id} 
              link={card.link} 
              likes={card.likes.length}  
              onCardClick={props.onCardClick}
            />
          )
        })} 
      </ul>  
    </section>
    </main>
  )
}

export default Main;