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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.calcularSalarioComBonus = function () {
        return this.getSalario() + this.calcularBonus();
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario) {
        return _super.call(this, nome, salario) || this;
    }
    Gerente.prototype.calcularBonus = function () {
        return this.getSalario() * 0.1;
    };
    return Gerente;
}(Funcionario));
var Operario = /** @class */ (function (_super) {
    __extends(Operario, _super);
    function Operario(nome, salario) {
        return _super.call(this, nome, salario) || this;
    }
    Operario.prototype.calcularBonus = function () {
        return this.getSalario() * 0.05;
    };
    return Operario;
}(Funcionario));
function calcularSalariosComBonus(funcionarios) {
    funcionarios.forEach(function (funcionario) {
        console.log("Funcion\u00E1rio: ".concat(funcionario.getNome()));
        console.log("Sal\u00E1rio base: R$ ".concat(funcionario.getSalario().toFixed(2)));
        console.log("B\u00F4nus: R$ ".concat(funcionario.calcularBonus().toFixed(2)));
        console.log("Sal\u00E1rio final: R$ ".concat(funcionario.calcularSalarioComBonus().toFixed(2)));
        console.log("----");
    });
}
var gerente = new Gerente("Carlos", 6300);
var operario1 = new Operario("Ana", 2200);
var operario2 = new Operario("João", 3500);
var funcionarios = [gerente, operario1, operario2];
calcularSalariosComBonus(funcionarios);
