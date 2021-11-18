interface IProduct {
  name: string;
  brand: string;
  price: number;
  quantity: number;
  stock: boolean;
}

class Product {
  constructor(private name: string, private brand: string, private price: number, private quantity: number, private stock: boolean) {}
}

const product1 = new Product('Producto1', 'demo', 10, 5, true);
const product2 = new Product('Producto2', 'demo2', 20, 0, false);
const product3 = new Product('Producto3', 'demo3', 30, 2, true);
const product4 = new Product('Producto4', 'demo4', 40, 20, true);
