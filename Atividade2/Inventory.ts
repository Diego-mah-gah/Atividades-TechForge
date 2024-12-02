abstract class Inventory {
    protected items: Record<string, number> = {};
  
    abstract addItem(item: string, quantity: number): void;

    abstract removeItem(item: string): void;

    getInventory(): Record<string, number> {
      return this.items;
    }
  }

  class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
      if (this.items[item]) {
        this.items[item] += quantity;
      } else {
        this.items[item] = quantity;
      }
    }
  
    removeItem(item: string): void {
      if (this.items[item]) {
        delete this.items[item];
      } else {
        console.log(`O item "${item}" não existe no inventário.`);
      }
    }
  }
  
  class StoreInventory extends Inventory {
    private readonly MAX_QUANTITY = 10;
  
    addItem(item: string, quantity: number): void {
      if (this.items[item]) {
        const currentQuantity = this.items[item];
        const newQuantity = currentQuantity + quantity;
  
        if (newQuantity > this.MAX_QUANTITY) {
          console.log(
            `Quantidade excede o limite de ${this.MAX_QUANTITY}. Ajustado para o máximo permitido.`
          );
          this.items[item] = this.MAX_QUANTITY;
        } else {
          this.items[item] = newQuantity;
        }
      } else {
        if (quantity > this.MAX_QUANTITY) {
          console.log(
            `Quantidade inicial excede o limite de ${this.MAX_QUANTITY}. Adicionado apenas ${this.MAX_QUANTITY}.`
          );
          this.items[item] = this.MAX_QUANTITY;
        } else {
          this.items[item] = quantity;
        }
      }
    }
  
    removeItem(item: string): void {
      if (this.items[item]) {
        delete this.items[item];
      } else {
        console.log(`O item "${item}" não existe no inventário.`);
      }
    }
  }
  
  
  const warehouse = new WarehouseInventory();
  warehouse.addItem("Transformers", 100);
  warehouse.addItem("Optimus Prime", 50);
  console.log("Warehouse Inventory:", warehouse.getInventory());
  warehouse.removeItem("Optimus Prime");
  console.log("Warehouse Inventory após remoção:", warehouse.getInventory());
  
const store = new StoreInventory();

store.addItem("Transformers", 5);
console.log("Store Inventory:", store.getInventory());

store.addItem("Transformers", 7);
console.log("Store Inventory:", store.getInventory());

store.addItem("Optimus Prime", 12);
console.log("Store Inventory:", store.getInventory());

store.removeItem("Transformers");
console.log("Store Inventory:", store.getInventory());

  