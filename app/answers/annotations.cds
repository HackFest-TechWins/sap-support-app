using SupportService as service from '../../srv/services';
annotate service.Answers with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Answer}',
                Value : answer,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
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
            Label : '{i18n>Answer}',
            Value : answer,
        },
        {
            $Type : 'UI.DataField',
            Value : modifiedBy,
        },
    ],
    UI.HeaderInfo : {
        TypeName : 'New Answer',
        TypeNamePlural : 'New Answer',
    },
);

annotate service.Answers with {
    answer @UI.MultiLineText : true
};

