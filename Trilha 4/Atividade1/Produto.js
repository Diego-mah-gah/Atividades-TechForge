var ItemLoja = /** @class */ (function () {
    function ItemLoja(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    return ItemLoja;
}());
var item1 = new ItemLoja(1, "Boneco Optimus Prime", 150.00);
var item2 = new ItemLoja(2, "Boneco Bumblebee", 120.00);
console.log(item1);
console.log(item2);
