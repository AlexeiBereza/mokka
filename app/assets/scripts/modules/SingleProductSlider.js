import Swiper from "swiper"
import SwiperCore, { Thumbs } from "swiper/core"
SwiperCore.use([Thumbs])
import "swiper/swiper-bundle.css"

class SingleProductSlider {
  constructor() {
    this.primarySlider
    this.thumbsSlider
    this.events()
  }

  events() {
    this.sliderInit()
  }

  sliderInit() {
    this.thumbsSlider = new Swiper(".swiper-thumbs", {
      spaceBetween: 34,
      slidesPerView: 4,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      shortSwipes: false
    })
    this.primarySlider = new Swiper(".swiper-main", {
      spaceBetween: 10,
      slidesPerView: 1,
      thumbs: {
        swiper: this.thumbsSlider,
        autoScrollOffset: 4
      }
    })
  }
}

export default SingleProductSlider
