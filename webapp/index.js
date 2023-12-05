sap.ui.define(["sap/ui/core/ComponentContainer"], function 
(ComponentContainer) { 
    "use strict";
     var oContainer = new ComponentContainer({ 
        id: "container", 
        name: "slaterates", 
        manifest: true, 
        async: true, 
        settings: { id: "slaterates" 
    } 
}); 
oContainer.placeAt("content");
});