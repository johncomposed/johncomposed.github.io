
  var insaneForm = {
    "form": [{
      "type": "fieldset",
      "items": [
        {
          "type": "fieldset",
          "key": "fields",
          "items": [

            {
              "key": "lists.List1",
              "title": "Service1",
              "titleMap": [{
                "name": "G1",
                "value": "G1"
                    }, {
                "name": "G2",
                "value": "G2"
                    }, {
                "name": "G3",
                "value": "G3"
                    }],
              "type": "select"
                }, {
              "key": "lists.List2",
              "title": "Service2",
              "titleMap": [{
                "name": "G1",
                "value": "G1"
                    }, {
                "name": "G2",
                "value": "G2"
                    }, {
                "name": "G3",
                "value": "G3"
                    }],
              "type": "select"
                }, {
              "key": "lists.List3",
              "title": "Service3",
              "titleMap": [{
                "name": "G1",
                "value": "G1"
                    }, {
                "name": "G2",
                "value": "G2"
                    }, {
                "name": "G3",
                "value": "G3"
                    }],
              "type": "select"
                }

                ]
              },
        {
          "type": "fieldset",
          "items": [{
            "type": "tabs",
            "tabs": [
              {
                "title": "G1",
                "items": [
                  {
                    "key": "G1",
                    "type": "template",
                    "template": '<div class="bucket"><span ng-repeat="(key, value) in model.lists" ng-show="value === form.key[0]" >{{key}} {{$last ? "" : ",  " }} </span></div><br>'
                    }
                  ]
                },
              {
                "title": "G2",
                "items": [
                  {
                    "key": "G2",
                    "type": "template",
                    "template": '<div class="bucket"><span ng-repeat="(key, value) in model.lists" ng-show="value === form.key[0]" >{{key}} {{$last ? "" : ",  " }}</span></div><br>'
                    }
                  ]
                },
              {
                "title": "G3",
                "items": [
                  {
                    "key": "G3",
                    "type": "template",
                    "template": '<div class="bucket"><span ng-repeat="(key, value) in model.lists" ng-show="value === form.key[0]" >{{key}} {{$last ? "" : ",  " }}</span></div><br>'
                    }
                  ]
                }
              ]
            }]
           }]
    }],
    "schema": {
      "type": "object",
      "properties": {
        "List1": {
          "type": "string",
          "comment": "Service1"
        },
        "List2": {
          "type": "string",
          "comment": "Service2"
        },
        "List3": {
          "type": "string",
          "comment": "Service3"
        },
        "Picker": {
          "type": "string",
          "comment": "Pick a group"
        },
        "Template1": {
          "type": "string"
        },
        "Template2": {
          "type": "string"
        },
        "Template3": {
          "type": "string"
        }
      }
    },
    "preview": {}
  };

