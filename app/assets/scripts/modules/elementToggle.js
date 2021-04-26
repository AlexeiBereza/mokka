export const injectDarkLayout = () => {
  document.querySelector("body").insertAdjacentHTML("beforeend", "<div class='dark-layout'></div>")
}

// export const showElement = el => {
//   el.classList.add("is-visible")
// }

export const showElement = (el, className, showLayout = false) => {
  const layout = document.querySelector(".dark-layout")
  // console.log(el)
  if (showLayout) {
    //console.log(document.querySelector(".dark-layout"))
    layout.classList.add("is-visible")
  }
  el.classList.add(className)
}

export const hideElement = (e, el, className, removeLayout = false) => {
  const layout = document.querySelector(".dark-layout")

  if ((e.type === "keyup" && e.code === "Escape") || e.type === "click") {
    if (el.classList.contains(className)) {
      el.classList.remove(className)
    }
    if (removeLayout) {
      layout.classList.remove("is-visible")
    }
  }

  // if (e.type === "keyup" && e.code === "Escape") {
  //   if (el.classList.contains("primary-nav--is-visible")) {
  //     el.classList.remove("primary-nav--is-visible")
  //     document.querySelector("body").classList.remove("no-scroll")
  //   }
  //   el.classList.remove("is-visible")
  // }
  // if ((e.type === "click" && e.target.classList.contains("dark-layout")) || e.target.classList.contains("hamburger") || e.target.classList.contains("hamburger__middle")) {
  //   if (document.querySelector(".primary-nav").classList.contains("primary-nav--is-visible")) {
  //     document.querySelector(".primary-nav").classList.remove("primary-nav--is-visible")
  //   }
  //   el.classList.remove("is-visible")
  //   document.querySelector("body").classList.remove("no-scroll")
  // }
}
