sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
    function (Controller, UIComponent) {
      "use strict";
      return Controller.extend(
        "slaterates.controller.SecondScreen",
        {
          onInit: function () {
            // Initialization logic if needed
          },
  
          onGoBack: function () {
            // Navigate back to the first screen (Assuming the first screen is named "FirstScreen")
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteToFirstScreen");
          },
        }
      );
    }
  );
  