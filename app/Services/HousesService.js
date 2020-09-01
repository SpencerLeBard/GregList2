import { ProxyState } from "../AppState.js";
import House from "../Models/Houses.js";
import { api } from "./AxiosService.js";

class HousesService {

  async getHouses() {
    let res = await api.get('houses')
    ProxyState.houses = res.data.data.map(c => new House(c))
  }

  async removeHouse(id) {
    await api.delete(`houses/${id}`)
    ProxyState.houses = ProxyState.houses.filter(c => c.id !== id)
  }

  async bid(id) {
    let house = ProxyState.houses.find(c => c.id === id)
    if (!house) {
      throw new Error("House Not Found")
    }
    house.price += 1000
    let res = await api.put(`houses/${id}`, { price: house.price })
    ProxyState.houses = ProxyState.houses
  }
  async createHouse(rawHouse) {
    let res = await api.post('houses', rawHouse)
    let house = new House(res.data.data)
    ProxyState.houses = [...ProxyState.houses, house]
  }
}

const SERVICE = new HousesService();
export default SERVICE