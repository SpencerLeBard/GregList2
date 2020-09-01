export default class House {

  constructor({ _id, bedrooms, bathrooms, levels, imgUrl, year, price }) {
    this.id = _id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.imgUrl = imgUrl || "//placehold.it/200x200"
    this.year = year
    this.price = price
  }

  get HouseTemplate() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.imgUrl}" alt="yo">
          <div class="card-body">
              <h4 class="card-title">${this.bedrooms} - ${this.bathrooms} - ${this.year}</h4>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.housesController.removeHouse('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.housesController.bid('${this.id}')">+ $1000</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }
}