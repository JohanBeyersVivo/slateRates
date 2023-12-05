/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "slaterates/model/models",
        "sap/ui/core/mvc/Controller",
        "sap/m/Button",
        "sap/m/Input",
        "sap/m/Table",
        "sap/m/Column",
        "sap/m/ColumnListItem"
    ],
    function (UIComponent, Device, models, Controller, Button, Input, Table, Column, ColumnListItem) {
        "use strict";

        return UIComponent.extend("slaterates.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                var companyCodeInput = new Input({
                    placeholder: "Enter Company Code",
                    value: "{/companyCode}",
                  });
                  
                  var periodInput = new Input({
                    placeholder: "Enter Period",
                    value: "{/period}",
                  });
        
                  var fobPercentageInput = new Input({
                    placeholder: "Enter % of FOB",
                    value: "{/fobPercentage}",
                  });
        
                  var goButton = new Button({
                    text: "Go",
                    press: this.getSalesOrderFilter.bind(this),
                  });
        
                  var clearButton = new Button({
                    text: "Clear",
                    press: this.onFilterClear.bind(this),
                  });
        
                  var createPostingButton = new Button({
                    text: "Create Posting",
                    press: this.onClickCreatePosting.bind(this),
                  });
        
                  var downloadButton = new Button({
                    text: "Download",
                    press: this.onPressDownload1.bind(this),
                  });
        
                  var table = new Table({
                    id: "reportTable",
                    columns: [
                      new Column({ header: new Text({ text: "Order ID" }) }),
                      new Column({ header: new Text({ text: "Company Code" }) }),
                      new Column({ header: new Text({ text: "Period" }) }),
                      new Column({ header: new Text({ text: "% of FOB" }) }),
                    ],
                  });
        
                  // Attach the view controls to the view
                  var oPage = this.getView().byId("pageId"); // Assuming you have a page in your view
                  oPage.addContent(companyCodeInput);
                  oPage.addContent(periodInput);
                  oPage.addContent(fobPercentageInput);
                  oPage.addContent(goButton);
                  oPage.addContent(clearButton);
                  oPage.addContent(createPostingButton);
                  oPage.addContent(downloadButton);
                  oPage.addContent(table);
                },
        
                getSalesOrderFilter: function () {
                  // Implement this function to get data based on input fields (similar to previous JavaScript example)
                  // Use this.getView().getModel().setProperty("/propertyPath", value) to set values
                }
            },
            
        });