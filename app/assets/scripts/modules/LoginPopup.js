import { hideElement, showElement } from "./elementToggle"

class LoginPopup {
  constructor() {
    this.layout = document.querySelector(".dark-layout")
    this.body = document.querySelector("body")
    this.injectHTML()
    this.button = document.querySelector(".site-header__login")
    this.mobileButton = document.querySelector(".primary-nav__login-mobile")
    this.popup = document.querySelector(".login-popup")
    this.events()
  }

  events() {
    this.button.addEventListener("click", () => showElement(this.popup, "is-visible", true))
    this.mobileButton.addEventListener("click", () => showElement(this.popup, "is-visible", true))
    this.layout.addEventListener("click", e => hideElement(e, this.popup, "is-visible", true))
    window.addEventListener("keyup", e => hideElement(e, this.popup, "is-visible", true))
  }

  // showLogin() {
  //   showElement(this.layout)
  //   showElement(this.popup)
  // }

  showLogin() {
    showElement(this.popup, "is-visible", true)
  }

  // hideLogin(e) {
  //   hideElement(e, this.layout)
  //   hideElement(e, this.popup)
  // }

  hideLogin(e) {
    hideElement(e, this.popup, "is-visible", true)
  }

  injectHTML() {
    const popup = `
      <div class="login-popup vector vector-block">
        <div class="login-popup__container">
          <h3 class="login-popup__heading">Авторизация</h3>
          <input type="email" class="login-popup__input input input--transparent" placeholder="E-mail" />
          <input type="password" class="login-popup__input input input--transparent" placeholder="Password" />
          <a href="#" class="btn login-popup__btn">Войти</a>
          <a href="#" class="btn login-popup__btn">Зарегистрироваться</a>
        </div>
      </div>
    `
    this.body.insertAdjacentHTML("beforeend", popup)
  }
}

export default LoginPopup
