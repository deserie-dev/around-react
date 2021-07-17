import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props) {
  return(
    <PopupWithForm name="deleteConfirmation" title="Are you sure?" buttonText="Yes" isOpen={props.isOpen} onClose={props.onClose}></PopupWithForm>
  );
}

export default DeleteCardPopup;
