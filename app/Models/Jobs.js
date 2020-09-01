export default class Jobs {

  constructor({ _id, company, jobTitle, hours, rate }) {
    this.id = _id
    this.company = company
    this.jobTitle = jobTitle
    this.hours = hours
    this.rate = rate
  }

  get JobsTemplate() {
    return `            
    <div class="col-4">
      <div class="card">
        <div class="card" src="${this.company}">
          <div class="card-body">
              <h4 class="card-title">${this.jobTitle} - ${this.hours}</h4>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.JobsController.removeJob('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.JobsController.bid('${this.id}')"> -$1000</button>
                  <p>$${this.rate.toFixed(2)}</p>
              </div>
          </div>
        </div>
      </div>
    </div>`
  }
}