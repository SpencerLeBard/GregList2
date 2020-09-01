import carsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  carsController = new carsController();
  housesController = new HousesController();
  JobsController = new JobsController();
}

window["app"] = new App();
