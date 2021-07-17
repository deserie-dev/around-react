import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main (props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res)
      })  
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <main className="content">

    <section className="profile">
        
      <div className="profile__avatar">
        <img className="profile__image" src={userAvatar} alt="Profile Picture" />
        <button className="profile__image-edit" onClick={props.onEditAvatarClick}></button>
      </div>

      <div className="profile__content">
        <div className="profile__details">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" aria-label="edit button" className="profile__edit"></button>
        </div>
        <p className="profile__occupation">{userDescription}</p>
      </div>
      <button className="profile__add" type="button" aria-label="add button" onClick={props.onAddPlaceClick}></button>
    </section>

    <section className="elements">
      <ul className="elements__container">
        {cards.map((card) => {
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