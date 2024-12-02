var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(energiaInicial) {
        if (energiaInicial === void 0) { energiaInicial = 50; }
        this.energia = energiaInicial;
    }
    Animal.prototype.aumentarEnergia = function (valor) {
        this.energia += valor;
    };
    Animal.prototype.reduzirEnergia = function (valor) {
        this.energia -= valor;
        if (this.energia < 0) {
            this.energia = 0;
        }
    };
    Animal.prototype.statusEnergia = function () {
        console.log("Energia atual: ".concat(this.energia));
    };
    Animal.prototype.comer = function () {
        console.log("O animal está comendo...");
        this.aumentarEnergia(10);
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao(energiaInicial) {
        if (energiaInicial === void 0) { energiaInicial = 100; }
        return _super.call(this, energiaInicial) || this;
    }
    Leao.prototype.comer = function () {
        console.log("O leão está caçando...");
        this.reduzirEnergia(30);
        console.log("O leão capturou a presa e está se alimentando!");
        _super.prototype.comer.call(this);
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro(energiaInicial) {
        if (energiaInicial === void 0) { energiaInicial = 30; }
        return _super.call(this, energiaInicial) || this;
    }
    Passaro.prototype.comer = function () {
        console.log("O pássaro está se alimentando de sementes...");
        _super.prototype.comer.call(this);
    };
    return Passaro;
}(Animal));
function interagirComAnimais(animais) {
    animais.forEach(function (animal, index) {
        console.log("Animal ".concat(index + 1, ":"));
        animal.comer();
        animal.statusEnergia();
        console.log("----");
    });
}
var leao = new Leao();
var passaro = new Passaro();
var animais = [leao, passaro];
interagirComAnimais(animais);
