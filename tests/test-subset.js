var subset = require('../index.js')
var test = require('tape')

var object1 = {
  "properties": {
    "description": "my description is here",
    "location_type": "observation",
    "private-submitter_email": "email@email.com",
    "name": "hey Joe",
    "user_token": "user:7",
    "visible": true
  },
  "geometry": {
    "coordinates": [
        -122.5,
      47.5195
    ],
    "type": "Point"
  },
  "type": "Feature"
}
var object2 = {
  geometry: { type: "Point", coordinates: [ -122.5, 47.5195 ] },
  type: "Feature",
  properties:
  { attachments: [],
    name: "hey Joe",
    updated_datetime: "2015-10-12T22:24:59.391016+00:00",
    url: "http://myhappyurl.com",
    id: 346,
    submission_sets: {},
    visible: true,
    dataset: 48,
    submitter:
    { username: "admin",
      provider_id: null,
      name: "",
      avatar_url: "",
      id: 7,
      provider_type: "" },
    created_datetime: "2015-10-12T22:24:59.387264+00:00",
    user_token: "user:7",
    location_type: "observation",
    "private-submitter_email": "email@email.com",
    description: "my description is here" },
  id: 346 }
test('Test object1 is subset of object 2:', function (t) {
  t.ok(subset(object1, object2))
  t.end()
})
     
test('Test object1 is NOT a subset of object 2:', function (t) {
  t.notOk(subset(object2, object1))
  t.end()
})
