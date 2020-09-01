import { ProxyState } from "../AppState.js";
import HousesService from "../Services/HousesService.js";

function _drawHouses() {
  let houses = ProxyState.houses
  let templates = ''
  // @ts-ignore
  houses.forEach(c => templates += c.HouseTemplate)
  document.getElementById('draw-houses').innerHTML = templates
}

export default class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses();
  }

  getHouses() {
    try {
      HousesService.getHouses();
    } catch (error) {
      console.log(error);
    }
  }

  createHouse() {
    event.preventDefault();
    let form = event.target
    let rawHouse = {
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: form.price.value
    }
    try {
      HousesService.createHouse(rawHouse)
    } catch (error) {
      console.error(error)
    }
  }

  removeHouse(id) {
    try {
      HousesService.removeHouse(id)
    } catch (error) {
      console.error(error)
    }
  }
  bid(id) {
    try {
      HousesService.bid(id)
    } catch (error) {
      console.error(error)
    }
  }

}


