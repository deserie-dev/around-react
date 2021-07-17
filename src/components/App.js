import React from 'react'; // we must always import this so JSX will work!
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeleteCardClick() {
    setIsDeleteCardOpen(true);
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardOpen(false);
    setSelectedCard();
  }

  return (
    <div className="root">
      <Header />

      <Main
        onEditAvatarClick={handleEditAvatarClick} 
        onEditProfileClick={handleEditProfileClick} 
        onAddPlaceClick={handleAddPlaceClick} 
        onCardDelete={handleDeleteCardClick}
        onCardClick={handleCardClick} 
        onClose={closeAllPopups}
      />

      <Footer />

      <AddPlacePopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <DeleteCardPopup
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

    </div>  
  );
}

export default App;