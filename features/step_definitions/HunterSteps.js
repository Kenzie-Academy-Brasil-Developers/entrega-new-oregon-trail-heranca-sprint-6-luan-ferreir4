const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("../../models/Traveler");
const { cacador, doutor } = require("./../../app");

let passenger = {};

/* GIVEN */

Given('um Hunter de nome {string}', function (string) {
    cacador.name = string;
});

Given('ele sempre começa a viagem com {int} refeições', function (int) {
    cacador.food = int;
});

Given('um Traveler de nome {string} com {int} refeição', function (string, int) {
    passenger = new Traveler(string,'true',int);
});

/* WHEN */

When('o Hunter sair para caçar {int} vez', function (int) {
    for(let cont = 0; cont < int; cont ++){
        cacador.hunt();
    }
});

When('o Hunter sair para caçar {int} vezes', function (int) {
    for(let cont = 0; cont < int; cont ++){
        cacador.hunt();
    }
});

When('come somente {int} vez', function (int) {
    for(let cont = 0; cont < int; cont ++){
        cacador.eat();
    }
});

When('come {int} vezes', function (int) {
    for(let cont = 0; cont < int; cont ++){
        cacador.eat();
    }
});

When('transfere {int} refeições pra o Traveler', function (int) {
    cacador.giveFood(passenger, int);
});

/* THEN */

Then('a quantidade de refeições deve ser igual a {int}.', function (int) {
    assert.strictEqual(cacador.food,int);
});

Then('a quantidade de refeições deve ser maior ainda e igual a {int}.', function (int) {
    assert.strictEqual(cacador.food,int);
});

Then('ele permaneçe saudável.', function () {
    assert.strictEqual(cacador.isHealthy, 'true');
});

Then('ele ficará doente.', function () {
    assert.strictEqual(cacador.isHealthy, 'false');
});

Then('o Traveler fica com {int} refeições.', function (int) {
    assert.strictEqual(passenger.food, int);
});

Then('o Hunter com {int} refeições.', function (int) {
    assert.strictEqual(cacador.food, int);
});