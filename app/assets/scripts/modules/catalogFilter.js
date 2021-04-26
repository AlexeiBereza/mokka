import { hideElement, showElement } from "./elementToggle"

class catalogFilter {
  constructor() {
    this.catalogSection = document.querySelector(".page-section--catalog")
    this.filterButton = document.querySelector(".catalog-filter")
    this.applyButton = document.querySelector(".catalog-filter__apply")
    this.sideFilter = document.querySelector(".side-filter")
    this.events()
  }

  events() {
    this.filterButton.addEventListener("click", () => this.showFilter())
    this.applyButton.addEventListener("click", e => this.hideFilter(e))
    this.catalogSection.addEventListener("click", e => this.hideFilter(e))
    window.addEventListener("keyup", e => this.hideFilter(e))
  }

  showFilter() {
    showElement(this.sideFilter, "side-filter--is-visible", false)
    showElement(this.catalogSection, "z-index-top", false)
  }

  hideFilter(e) {
    if (e.target.closest(".page-section--catalog")) {
      if ((!e.target.classList.contains("catalog-filter") && !e.target.closest(".side-filter")) || e.target.classList.contains("catalog-filter__apply")) {
        hideElement(e, this.sideFilter, "side-filter--is-visible", false)
        hideElement(e, this.catalogSection, "z-index-top", false)
      }
    } else {
      hideElement(e, this.sideFilter, "side-filter--is-visible", false)
      hideElement(e, this.catalogSection, "z-index-top", false)
    }
  }
}

export default catalogFilter
