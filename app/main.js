import carsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";

class App {
  carsController = new carsController();
  housesController = new HousesController();
}

window["app"] = new App();
