/**
 * formDataService
 * Returns .form, .schema, and .preview
 */
app.service('formDataService', function ($q) {

  var saneForm = {}; // one day.




  var insaneForm = {
    "form": [{
      "type": "fieldset",
      "items": [{
        "type": "tabs",
        "tabs": [{
          "title": "Basic",
          "items": [{
            "type": "fieldset",
            "items": [{
              "key": "Basic_Name",
              "title": "What is the Client's Name?"
            }, {
              "key": "Basic_Size",
              "title": "How large is the client?",
              "titleMap": [{
                "name": "Small",
                "value": "Small"
              }, {
                "name": "Medium",
                "value": "Medium"
              }, {
                "name": "Large",
                "value": "Large"
              }],
              "type": "radios-inline"
            }, {
              "key": "Basic_Service",
              "title": "What level of service does the client require?",
              "condition":"model.Basic_Size === 'Large'",
              "titleMap": [{
                "name": "Low",
                "value": "Low"
              }, {
                "name": "High",
                "value": "High"
              }],
              "type": "radios-inline"
            }, {
              "key": "Basic_Billing",
              "title": "How frequently is the client billed?",
              "titleMap": [{
                "name": "Monthly",
                "value": "Monthly"
              }, {
                "name": "Quarterly",
                "value": "Quarterly"
              }, {
                "name": "Annually",
                "value": "Annually"
              }],
              "type": "radios-inline"
            }]
          }]
        }, {
          "title": "Extra",
          "items": [{
            "type": "fieldset",
            "items": [{
              "key": "Extra_Single",
              "title": "Does the client belong to a single division only?"
            }, {
              "key": "Extra_Division",
              "condition": "model.Extra_Single === true",
              "title": "Which division does the client belong to?",
              "titleMap": [{
                "name": "DivisionA",
                "value": "DivisionA"
              }, {
                "name": "DivisionB",
                "value": "DivisionB"
              }, {
                "name": "DivisionC",
                "value": "DivisionC"
              }, {
                "name": "DivisionD",
                "value": "DivisionD"
              }, {
                "name": "DivisionE",
                "value": "DivisionE"
              }],
              "type": "select"
            }, {
              "key": "array",
              "items": [{
                "key": "array[].Extra_FeeItem",
                "title": "Fee Driver"
              }, {
                "key": "array[].Extra_FeeRate",
                "title": "Rate per"
              }]
            }]
          }]
        }]
      }]
    }],
    "schema": {
      "type": "object",
      "properties": {
        "Basic_Name": {
          "type": "string",
          "comment": "What is the Client's Name?"
        },
        "Basic_Size": {
          "type": "string",
          "comment": "How large is the client?"
        },
        "Basic_Service": {
          "type": "string",
          "comment": "What level of service does the client require?"
        },
        "Basic_Billing": {
          "type": "string",
          "comment": "How frequently is the client billed?"
        },
        "Extra_Single": {
          "type": "boolean",
          "comment": "Does the client belong to a single division only?"
        },
        "Extra_Division": {
          "type": "string",
          "comment": "Which division does the client belong to?"
        },
        "array": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "Extra_FeeItem": {
                "type": "string"
              },
              "Extra_FeeRate": {
                "type": "string",
                "pattern": "^\\d+($|\\.\\d{1,2}$)"
              }
            }
          }
        }
      }
    },
    "preview":'<p ng-show="model.Basic_Name">The client\'s name is <span class="Basic_Name">{{model.Basic_Name}}</span><span ng-show="!model.Basic_Size">.</span><span ng-show="model.Basic_Size" class="Basic_Size"> and it should be considered a<span ng-show="model.Basic_Size===\'Small\'"> small client.</span><span ng-show="model.Basic_Size===\'Medium\'"> medium sized client.</span><span ng-show="model.Basic_Size===\'Large\'"> large sized client<span ng-show="model.Basic_Service" class="Basic_Service"> which requires a {{model.Basic_Service}} level of service</span>.</span></span><span ng-show="model.Basic_Billing" class="Basic_Billing"> The client is billed {{model.Basic_Billing}}.</span></p><p ng-show="model.Extra_Single === true">This client belongs to <span ng-show="!model.Extra_Division">a single division.</span><span ng-show="model.Extra_Division" class="Extra_Division">{{model.Extra_Division}}</span><div ng-repeat="lineitem in model.array"><span ng-show="model.array[$index].Extra_FeeItem">For every {{lineitem.Extra_FeeItem}}, {{model.Basic_Name}} must pay {{lineitem.Extra_FeeRate | currency}}.</span></div></p>'
    
  };


  function sfToSchema(saneForm) {
    return saneForm.schema;
  }

  function sfToForm(saneForm) {
    return saneForm.form;
  }

  function sfToPreview(saneForm) {
    return saneForm.preview;
  }




  this.form = sfToForm(insaneForm);
  this.schema = sfToSchema(insaneForm);
  this.preview = sfToPreview(insaneForm);

}); //end service
