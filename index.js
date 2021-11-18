var products = [];
var Product = /** @class */ (function () {
    function Product(name, brand, price, quantity, stock) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.quantity = quantity;
        this.stock = stock;
    }
    Product.prototype.registerProduct = function () {
        products.push({ name: this.name, brand: this.brand, price: this.price, quantity: this.quantity, stock: this.stock });
    };
    return Product;
}());
var product1 = new Product('Producto1', 'demo', 10, 5, true);
var product2 = new Product('Producto2', 'demo2', 20, 0, false);
var product3 = new Product('Producto3', 'demo3', 30, 2, true);
var product4 = new Product('Producto4', 'demo4', 40, 20, true);
product1.registerProduct();
product2.registerProduct();
product3.registerProduct();
product4.registerProduct();
console.log('Productos registrados:', products);
