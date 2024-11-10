//@ui5-bundle qs/questions/Component-preload.js
sap.ui.require.preload({
	"qs/questions/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("qs.questions.Component",{metadata:{manifest:"json"}})});
},
	"qs/questions/i18n/i18n.properties":'# This is the resource bundle for qs.questions\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Questions Table\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,27\nflpTitle=Questions\n\n#XFLD,45\nflpSubtitle=Questions table\n',
	"qs/questions/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"qs.questions","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.2","toolsId":"e70423df-2705-4d0d-9e10-7a0978f9efd5"},"dataSources":{"mainService":{"uri":"odata/v4/support/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"Questions-show":{"semanticObject":"Questions","action":"show","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.129.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"qs.questions.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"QuestionsList","target":"QuestionsList"},{"pattern":"Questions({key}):?query:","name":"QuestionsObjectPage","target":"QuestionsObjectPage"}],"targets":{"QuestionsList":{"type":"Component","id":"QuestionsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Questions","variantManagement":"Page","navigation":{"Questions":{"detail":{"route":"QuestionsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"QuestionsObjectPage":{"type":"Component","id":"QuestionsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Questions"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
});
//# sourceMappingURL=Component-preload.js.map
