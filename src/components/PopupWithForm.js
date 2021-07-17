import React from 'react';

function PopupWithForm(props) {
  return(
    <>
    <div className={`modal modal_type_${props.name} ${props.isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
            <form className={`modal__form modal__form_type_${props.name}`} name="edit-profile">
              <h3 className="modal__title">{props.title}</h3>
              {props.children}
              <button className="modal__form-submit modal__form-edit" type="submit" aria-label="save button">{props.buttonText}</button>
            </form>
            <button className="modal__close-button modal__close-button_profile" type="button" aria-label="close button" onClick={props.onClose}></button>  
      </div>
    </div>
    </>    
  );
}

export default PopupWithForm;