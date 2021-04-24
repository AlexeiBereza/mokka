export const injectDarkLayout = () => {
  document.querySelector("body").insertAdjacentHTML("beforeend", "<div class='dark-layout'></div>")
}

export const showElement = el => {
  el.classList.add("is-visible")
}

export const hideElement = (e, el) => {
  if (e.type === "keyup" && e.code === "Escape") {
    if (el.classList.contains("primary-nav--is-visible")) {
      el.classList.remove("primary-nav--is-visible")
      document.querySelector("body").classList.remove("no-scroll")
    }
    el.classList.remove("is-visible")
  }
  if ((e.type === "click" && e.target.classList.contains("dark-layout")) || e.target.classList.contains("hamburger") || e.target.classList.contains("hamburger__middle")) {
    if (document.querySelector(".primary-nav").classList.contains("primary-nav--is-visible")) {
      document.querySelector(".primary-nav").classList.remove("primary-nav--is-visible")
    }
    el.classList.remove("is-visible")
    document.querySelector("body").classList.remove("no-scroll")
  }
}
