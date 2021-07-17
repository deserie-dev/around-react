import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  return(
    <PopupWithForm name="avatar" title="Change Profile Picture" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose}>
      <input id="avatar-url" className="modal__form-control modal__form-control_avatar" type="url" placeholder="Image Link" name="avatarInput" required/>
      <span id="avatar-url-error" className="modal__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;