import noUiSlider from "nouislider"
import "nouislider/distribute/nouislider.css"

class RangeSlider {
  constructor() {
    this.slider = document.querySelector("#range-slider")
    this.events()
  }

  events() {
    noUiSlider.create(this.slider, {
      start: [3000, 7000],
      connect: true,
      tooltips: [true, true],
      range: {
        min: 1000,
        max: 9000
      },
      format: {
        to: v => parseFloat(v).toFixed(0) + " руб.",
        from: v => parseFloat(v).toFixed(0)
      },
      step: 250
    })

    let line = document.querySelector(".noUi-connect")
    let rightHandle = document.querySelector(".noUi-handle-upper .noUi-tooltip")

    this.slider.noUiSlider.on("update", () => {
      setTimeout(() => {
        if (line.getBoundingClientRect().width.toFixed(0) < 65) {
          rightHandle.classList.add("noUi-tooltip--top")
        } else {
          rightHandle.classList.remove("noUi-tooltip--top")
        }
      }, 200)
    })
  }
}

export default RangeSlider
