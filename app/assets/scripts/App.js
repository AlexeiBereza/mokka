import "../styles/styles.css"
import { injectDarkLayout } from "./modules/elementToggle"
import catalogFilter from "./modules/catalogFilter"
import LoginPopup from "./modules/LoginPopup"
import MobileMenu from "./modules/MobileMenu"
import RangeSlider from "./modules/RangeSlider"
import SingleProductSlider from "./modules/SingleProductSlider"

injectDarkLayout()
if (document.querySelector("#range-slider")) new RangeSlider()
if (document.querySelector(".catalog-single__slider")) new SingleProductSlider()
if (document.querySelector(".catalog")) new catalogFilter()

new LoginPopup()
new MobileMenu()

if (module.hot) {
  module.hot.accept()
}
