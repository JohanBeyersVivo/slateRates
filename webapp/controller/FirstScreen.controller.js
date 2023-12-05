sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/m/Button",
      "sap/m/Input",
      "sap/m/Table",
      "sap/m/Column",
      "sap/m/ColumnListItem",
      "sap/m/Text",
      "sap/m/MessageToast"
    ],
    function (Controller, Button, Input, Table, Column, ColumnListItem, Text, MessageToast) {
      "use strict";
  
      return Controller.extend(
        "slaterates.controller.FirstScreen",
        {
          onInit: function () {
            // Create the necessary controls (Input fields, Buttons, Table)
            this.companyCodeInput = this.getView().byId("companyCode");
            this.periodInput = this.getView().byId("period");
            this.fobPercentageInput = this.getView().byId("fobPercentage");
            this.goButton = this.getView().byId("goButton");
            this.clearButton = this.getView().byId("clearButton");
            this.createPostingButton = this.getView().byId("createPostingButton");
            this.downloadButton = this.getView().byId("downloadButton");
            this.table = this.getView().byId("reportTable");
  
            // Attach event handlers to buttons
            this.goButton.attachPress(this.onGo.bind(this));
            this.clearButton.attachPress(this.onClear.bind(this));
            this.createPostingButton.attachPress(this.onClickCreatePosting.bind(this));
            this.downloadButton.attachPress(this.onPressDownload1.bind(this));
          },
  
          onGo: function () {
            // Handle the 'Go' button press
            this.getSalesOrderFilter();
          },
  
          onClear: function () {
            // Handle the 'Clear' button press
            this.onFilterClear();
          },
  
          // ... (your other functions)
  
          onPressDownload1: function () {
            // Function to download table data (Simulated)
            const tableData = this.table.getItems().map(function (row) {
              return row.getCells().map(function (cell) {
                return cell.getText();
              });
            });
  
            // Simulated download - replace with actual download functionality
            console.log("Downloading table data", tableData);
            MessageToast.show("Simulated download initiated");
          },
        }
      );
    }
  );
  