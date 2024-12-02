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
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    Pagamento.prototype.processar = function () {
        throw new Error("O método processar() deve ser implementado.");
    };
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao) {
        var _this = _super.call(this) || this;
        _this.numeroCartao = numeroCartao;
        return _this;
    }
    PagamentoCartao.prototype.validarCartao = function () {
        var regex = /^\d{16}$/;
        return regex.test(this.numeroCartao);
    };
    PagamentoCartao.prototype.mascararCartao = function () {
        return this.numeroCartao.slice(0, -4).replace(/\d/g, "*") + this.numeroCartao.slice(-4);
    };
    PagamentoCartao.prototype.processar = function () {
        if (this.validarCartao()) {
            console.log("Pagamento com cart\u00E3o ".concat(this.mascararCartao(), " processado com sucesso!"));
        }
        else {
            console.log("Número do cartão inválido.");
        }
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codigoBoleto = null;
        return _this;
    }
    PagamentoBoleto.prototype.gerarCodigoBoleto = function () {
        return Math.random().toString().slice(2, 28);
    };
    PagamentoBoleto.prototype.processar = function () {
        this.codigoBoleto = this.gerarCodigoBoleto();
        console.log("Boleto gerado com sucesso! C\u00F3digo: ".concat(this.codigoBoleto));
    };
    return PagamentoBoleto;
}(Pagamento));
function processarPagamentos(pagamentos) {
    pagamentos.forEach(function (pagamento, index) {
        console.log("Processando pagamento ".concat(index + 1, ":"));
        pagamento.processar();
        console.log("----");
    });
}
var pagamentoCartao = new PagamentoCartao("1234567812345678");
var pagamentoCartaoInvalido = new PagamentoCartao("12345");
var pagamentoBoleto = new PagamentoBoleto();
var pagamentos = [pagamentoCartao, pagamentoCartaoInvalido, pagamentoBoleto];
processarPagamentos(pagamentos);
