function App() {
  return (
<div>
  <header class="header">
    <img class="header__logo" src="#" alt="Logo"/>
  </header>

  <main class="content">

    <section class="profile">
        
      <div class="profile__avatar">
        <img class="profile__image" src="#" alt="Profile Picture"/>
        <button class="profile__image-edit"></button>
      </div>

      <div class="profile__content">
        <div class="profile__details">
          <h1 class="profile__name"></h1>
          <button type="button" aria-label="edit button" class="profile__edit"></button>
        </div>
        <p class="profile__occupation"></p>
      </div>
      <button class="profile__add" type="button" aria-label="add button"></button>
    </section>
    <section class="elements">
      <ul class="elements__container">
      </ul>
    </section>
  </main>
  <footer class="footer">
    <p class="footer__author">&copy; 2021 Around The U.S.</p>
  </footer>

  <div class="modal modal_type_edit">
    <div class="modal__container">
      <form class="modal__form modal__form_type_profile" name="edit-profile">
        <h3 class="modal__title">Edit profile</h3>
        <input id="profileName" class="modal__form-control modal__form-control_input_name" type="text"
          placeholder="Name" name="profileNameInput" required minlength="2" maxlength="40"/>
        <span id="profileName-error" class="modal__error"></span>
        <input id="profileOccupation" class="modal__form-control modal__form-control_input_occupation" type="text"
          placeholder="Occupation" name="profileOccupationInput" required minlength="2" maxlength="200"/>
        <span id="profileOccupation-error" class="modal__error"></span>
        <button class="modal__form-submit modal__form-edit" type="submit" aria-label="save button">Save</button>
      </form>
      <button class="modal__close-button modal__close-button_profile" type="button"
        aria-label="close button"></button>
    </div>
  </div>

  <div class="modal modal_type_create">
    <div class="modal__container">
      <form class="modal__form addCard-form" name="create-form">
        <h3 class="modal__title">New Place</h3>
        <input id="placeTitle" class="modal__form-control modal__form-control_input_title" type="text"
          placeholder="Title" name="titleInput" required minlength="1" maxlength="30"/>
        <span id="placeTitle-error" class="modal__error"></span>
        <input id="placeLink" class="modal__form-control modal__form-control_input_image" type="url"
          placeholder="Image Link" name="imageLinkInput" required/>
        <span id="placeLink-error" class="modal__error"></span>
        <button class="modal__form-submit modal__form-create" type="submit" aria-label="save button">Create</button>
      </form>
      <button class="modal__close-button modal__close-button_place" type="button" aria-label="close button"></button>
    </div>
  </div>

  <div class="modal modal_type_delete">
    <div class="modal__container">
      <form class="modal__form modal__form_type_delete" name="delete-confirmation" novalidate>
        <h3 class="modal__title modal__title_type_delete">Are you sure?</h3>
        <button class="modal__form-submit modal__form-delete" type="submit">Yes</button>
      </form>
      <button class="modal__close-button modal__close-button_delete" type="button" aria-label="close button"></button>
    </div>
  </div>

  <div class="modal modal_type_preview">
    <div class="modal__container modal__container_preview">
      <button class="modal__close-button  modal__close-button_preview" type="button"
        aria-label="close button"></button>
      <figure>
        <img class="modal__image" src="#" alt=" "/>
        <figcaption class="modal__image-title"></figcaption>
      </figure>
    </div>
  </div>

  <div class="modal modal_type_avatar">
    <div class="modal__container">
      <form class="modal__form modal__form_type_avatar" name="avatar-form">
        <h3 class="modal__title">Change profile picture</h3>
        <input id="avatar-url" class="modal__form-control modal__form-control_avatar" type="url"
          placeholder="Image Link" name="avatarInput" required/>
        <span id="avatar-url-error" class="modal__error"></span>
        <button class="modal__form-submit modal__form-avatar" type="submit" aria-label="save button">Save</button>
      </form>
      <button class="modal__close-button modal__close-button_place" type="button" aria-label="close button"></button>
    </div>
  </div>

  <template class="card-template">
    <li id = "cardElement" class="elements__item">
      <img class="elements__image" src="#" alt="Place image"/>
      <button class="elements__delete-button" type="button"></button>
      <div class="elements__heading">
        <h2 class="elements__title"></h2>
        <div class="elements__like-container">
          <button class="elements__like" type="button" aria-label="like button"></button>
          <p class="elements__like-counter"></p>
        </div>
      </div>
    </li>
  </template>
</div>
);
}

export default App;