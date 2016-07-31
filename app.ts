namespace MyApp {
    // Angular Module
    angular.module("MyApp", []);
    // Class that will be added as a controller
    class HomeController {
        // public field that will be exposed to the view
        public message = "Welcome!";
    }
    // Add HomeController class to the controller while naming it homeController
    angular.module("MyApp").controller("homeController", HomeController);
}
