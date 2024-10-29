sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'qs/questions/test/integration/FirstJourney',
		'qs/questions/test/integration/pages/QuestionsList',
		'qs/questions/test/integration/pages/QuestionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, QuestionsList, QuestionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('qs/questions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheQuestionsList: QuestionsList,
					onTheQuestionsObjectPage: QuestionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);