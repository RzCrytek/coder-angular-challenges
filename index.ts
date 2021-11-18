interface IProduct {
  name: string;
  brand: string;
  price: number;
  quantity: number;
  stock: boolean;
}

const products: IProduct[] = [];
class Product {
  constructor(private name: string, private brand: string, private price: number, private quantity: number, private stock: boolean) {}

  registerProduct(): void {
    products.push({ name: this.name, brand: this.brand, price: this.price, quantity: this.quantity, stock: this.stock });
  }

  static listProductByStock(stock: boolean): IProduct[] {
    return products.filter((product) => product.stock === stock);
  }
}

const product1 = new Product('Producto1', 'demo', 10, 5, true);
const product2 = new Product('Producto2', 'demo2', 20, 0, false);
const product3 = new Product('Producto3', 'demo3', 30, 2, true);
const product4 = new Product('Producto4', 'demo4', 40, 20, true);

product1.registerProduct();
product2.registerProduct();
product3.registerProduct();
product4.registerProduct();

console.log('Productos registrados:', products);
console.log('Los Productos con stock son:', Product.listProductByStock(true));
