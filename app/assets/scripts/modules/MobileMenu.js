import { hideElement, showElement } from "./elementToggle"

class MobileMenu {
  constructor() {
    this.body = document.querySelector("body")
    this.layout = document.querySelector(".dark-layout")
    this.loginButton = document.querySelector(".primary-nav__login-mobile")
    this.mobileMenu = document.querySelector(".primary-nav")
    this.hamburger = document.querySelector(".hamburger")
    this.popup = document.querySelector(".login-popup")
    this.events()
  }

  events() {
    this.hamburger.addEventListener("click", e => this.toggleMenu(e))
    this.loginButton.addEventListener("click", e => this.toggleMenu(e))
    this.layout.addEventListener("click", e => hideElement(e, this.layout))
    window.addEventListener("keyup", e => hideElement(e, this.mobileMenu))
  }

  toggleMenu(e) {
    if (!this.mobileMenu.classList.contains("primary-nav--is-visible")) {
      showElement(this.layout)
      hideElement(e, this.popup)
      this.mobileMenu.classList.add("primary-nav--is-visible")
      this.body.classList.add("no-scroll")
      return
    } else {
      if (this.popup.classList.contains("is-visible")) {
        this.mobileMenu.classList.remove("primary-nav--is-visible")
        this.body.classList.remove("no-scroll")
        return
      }
      hideElement(e, this.layout)
      this.mobileMenu.classList.remove("primary-nav--is-visible")
      this.body.classList.remove("no-scroll")
      return
    }
  }
}

export default MobileMenu
