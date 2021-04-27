export const injectDarkLayout = () => {
  document.querySelector("body").insertAdjacentHTML("beforeend", "<div class='dark-layout'></div>")
}

export const showElement = (el, className, showLayout = false, disableScroll = false) => {
  const layout = document.querySelector(".dark-layout")
  const body = document.querySelector("body")

  if (showLayout) {
    layout.classList.add("is-visible")
  }
  if (disableScroll) {
    body.classList.add("no-scroll")
  }
  el.classList.add(className)
}

export const hideElement = (e, el, className, removeLayout = false, enableScroll = false) => {
  const layout = document.querySelector(".dark-layout")
  const body = document.querySelector("body")

  if ((e.type === "keyup" && e.code === "Escape") || e.type === "click") {
    if (el.classList.contains(className)) {
      el.classList.remove(className)
    }
    if (removeLayout) {
      layout.classList.remove("is-visible")
    }
    if (enableScroll) {
      body.classList.remove("no-scroll")
    }
  }
}
