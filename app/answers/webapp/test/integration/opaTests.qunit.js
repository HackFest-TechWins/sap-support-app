sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'an/answers/test/integration/FirstJourney',
		'an/answers/test/integration/pages/AnswersList',
		'an/answers/test/integration/pages/AnswersObjectPage'
    ],
    function(JourneyRunner, opaJourney, AnswersList, AnswersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('an/answers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAnswersList: AnswersList,
					onTheAnswersObjectPage: AnswersObjectPage
                }
            },
            opaJourney.run
        );
    }
);