const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler")
const { doutor } = require("./../../app");

let patientList = []
let result = null;

Given('um Doctor de nome {string}', function (string) {
    doutor.name = string;
});

Given('o passageiro de nome <name> que está com saúde <isHealthy>', function (dataTable) {
    let data = dataTable.hashes();

    data.forEach(patient => {
        let values = Object.values(patient)
        let newPatient   = new Traveler(...values);
        
        patientList.push(newPatient);
    })
  });

  When('o Doctor cura o Traveler {string}', function (string) {
    let examined = patientList.find(patient => patient.name === string);
    result = doutor.heal(examined);
  });

  When('o Doctor tenta curar a Traveler {string};', function (string) {
    let examined = patientList.find(patient => patient.name === string);
    result = doutor.heal(examined);
  });


  Then('ele volta a estar saudável.', function () {
    assert.strictEqual(result,true);
  });

  Then('ela permanece saudável.', function () {
    assert.strictEqual(result,true);
  });