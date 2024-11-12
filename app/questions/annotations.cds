using SupportService as service from '../../srv/services';
annotate service.Questions with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Question}',
                Value : question,
            },
            {
                $Type : 'UI.DataField',
                Value : answer_ID,
                Label : 'ID ответа',
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.CollectionFacet',
            Label : '{i18n>Overview}',
            ID : 'i18nOverview',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    ID : 'GeneratedFacet1',
                    Label : 'General Information',
                    Target : '@UI.FieldGroup#GeneratedGroup',
                },
            ],
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>Answer}',
            ID : 'i18nAnswer',
            Target : '@UI.Identification',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Value : question,
            Label : '{i18n>Question}',
        },
        {
            $Type : 'UI.DataField',
            Value : modifiedBy,
            Label : 'Изменено',
        },
    ],
    UI.HeaderInfo : {
        Title : {
            $Type : 'UI.DataField',
            Value : question,
        },
        TypeName : '',
        TypeNamePlural : '',
        Description : {
            $Type : 'UI.DataField',
            Value : modifiedAt,
        },
        TypeImageUrl : 'sap-icon://question-mark',
    },
    UI.FieldGroup #Details : {
        $Type : 'UI.FieldGroupType',
        Data : [
        ],
    },
    UI.FieldGroup #i18nAnswerDetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : answer_ID,
                Label : 'Answer_ID',
            },
            {
                $Type : 'UI.DataField',
                Value : answer.answer,
                Label : '{i18n>Answer}',
            },
        ],
    },
    UI.Identification : [
        {
            $Type : 'UI.DataField',
            Value : answer.answer,
            Label : 'Ответ',
        },
        {
            $Type : 'UI.DataField',
            Value : answer.modifiedAt,
            Label : 'Дата изменения',
        },
        {
            $Type : 'UI.DataField',
            Value : answer.modifiedBy,
            Label : 'Изменено',
        },
    ],
);

annotate service.Questions with {
    answer @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Answers',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : answer_ID,
                    ValueListProperty : 'ID',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'answer',
                },
            ],
        },
        Common.ValueListWithFixedValues : false,
        )};

annotate service.Questions with {
    questionVector @Common.FieldControl : #ReadOnly
};


annotate service.Answers with {
    answer @Common.FieldControl : #ReadOnly
};

