const ProductManager = require('./ProductManager');

const productManager = new ProductManager('productos.json');


productManager.addProduct({
    title: 'Remera Manga Corta',
    price: 29.99,
    thumbnail: 'ruta/remera.jpg',
    code: 'ABC456',
    stock: 100
});

console.log(productManager.getProducts());

const productId = 1;
const updatedFields = {
    title: 'Remera Actualizada',
    price: 24.99,
};

if (productManager.updateProduct(productId, updatedFields)) {
    console.log(`Producto con ID ${productId} actualizado correctamente.`);
} else {
    console.log(`No se encontró un producto con ID ${productId}.`);
}

console.log(productManager.getProducts());

const productIdToDelete = 1;
if (productManager.deleteProduct(productIdToDelete)) {
    console.log(`Producto con ID ${productIdToDelete} eliminado correctamente.`);
} else {
    console.log(`No se encontró un producto con ID ${productIdToDelete}.`);
}

console.log(productManager.getProducts());
