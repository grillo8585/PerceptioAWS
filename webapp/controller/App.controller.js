sap.ui.define([
	"sap/ui/core/mvc/Controller",
	//"jquery.sap.global",
	"sap/ui/model/json/JSONModel"
], function (Controller,JSONModel)
{
	"use strict";

	var Controller =  Controller.extend("ZNMSP.ZTEST_PEDIDOS.controller.App",
	{
		onInit: function ()
		{
	//		var path = $.sap.getModulePath("mocks","/ZCABECERASet.json");
		
		    //var oModel = new JSONModel();
		 
		   
			//var oModel = new JSONModel(sap.ui.require.toUrl("test/mock") + "/ZCABECERASet.json");
			var oModel = new JSONModel($.sap.getModulePath("mocks") + "/ZCABECERASet.json");
			this.getView().setModel(oModel);
			console.log('$.sap.getModulePath("test/mock")');
			console.log($.sap.getModulePath("test/mock"));
			
			console.log('sap.ui.require.toUrl("test/mock")');
			console.log(sap.ui.require.toUrl("test/mock"));
			console.log('sap.ui.require.toUrl("ZNMSP/mocks")');
			console.log(sap.ui.require.toUrl("ZNMSP/mocks"));
			
			console.log('sap.ui.require.toUrl("mocks")');
			console.log(sap.ui.require.toUrl("mocks"));
			
			console.log('$.sap.getModulePath("mocks")');
			console.log($.sap.getModulePath("mocks"));
			
			console.log('sap.ui.require.toUrl("ZNMSP")');
			console.log(sap.ui.require.toUrl("ZNMSP"));
	     }
		
		
		
	});
	
	return Controller;
});