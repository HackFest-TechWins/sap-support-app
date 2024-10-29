sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'an.answers',
            componentId: 'AnswersObjectPage',
            contextPath: '/Answers'
        },
        CustomPageDefinitions
    );
});