import { hideElement, showElement } from "./elementToggle"

class MobileMenu {
  constructor() {
    this.layout = document.querySelector(".dark-layout")
    this.loginButton = document.querySelector(".primary-nav__login-mobile")
    this.mobileMenu = document.querySelector(".primary-nav")
    this.hamburger = document.querySelector(".hamburger")
    this.catalogSection = document.querySelector(".page-section--catalog")
    this.sideFilter = document.querySelector(".side-filter")
    this.events()
  }

  events() {
    this.hamburger.addEventListener("click", e => this.toggleMenu(e))
    this.loginButton.addEventListener("click", e => this.toggleMenu(e))
    this.layout.addEventListener("click", e => hideElement(e, this.mobileMenu, "primary-nav--is-visible", true, true))
    window.addEventListener("keyup", e => hideElement(e, this.mobileMenu, "primary-nav--is-visible", true, true))
  }

  toggleMenu(e) {
    if (e.target.classList.contains("primary-nav__login-mobile")) {
      hideElement(e, this.mobileMenu, "primary-nav--is-visible", false)
      return
    }
    if (!this.mobileMenu.classList.contains("primary-nav--is-visible")) {
      if (this.sideFilter) {
        if (this.sideFilter.classList.contains("side-filter--is-visible")) {
          this.sideFilter.classList.remove("side-filter--is-visible")
          this.catalogSection.classList.remove("z-index-top")
        }
      }
      showElement(this.mobileMenu, "primary-nav--is-visible", true, true)
    } else {
      hideElement(e, this.mobileMenu, "primary-nav--is-visible", true, true)
    }
  }
}

export default MobileMenu
