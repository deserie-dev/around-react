import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    return(
    <PopupWithForm name="edit" title="Edit Profile" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose}>
      <input id="profileName" className="modal__form-control modal__form-control_input_name" type="text"
        placeholder="Name" name="profileNameInput" required minLength="2" maxLength="40"/>
      <span id="profileName-error" className="modal__error"></span>
      <input id="profileOccupation" className="modal__form-control modal__form-control_input_occupation" type="text"
        placeholder="Occupation" name="profileOccupationInput" required minLength="2" maxLength="200"/>
      <span id="profileOccupation-error" className="modal__error"></span>    
    </PopupWithForm>
    );
}

export default EditProfilePopup;