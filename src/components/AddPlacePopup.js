import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    return (
        <PopupWithForm name="create" title="New place" buttonText="Create" isOpen={props.isOpen} onClose={props.onClose}>
          <input id="placeTitle" className="modal__form-control modal__form-control_input_title" type="text"
            placeholder="Title" name="titleInput" required minLength="1" maxLength="30"/>
          <span id="placeTitle-error" className="modal__error"></span>
          <input id="placeLink" className="modal__form-control modal__form-control_input_image" type="url"
            placeholder="Image Link" name="imageLinkInput" required/>
          <span id="placeLink-error" className="modal__error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;