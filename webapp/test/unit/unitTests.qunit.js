/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZNMSP/ZTEST_PEDIDOS/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});