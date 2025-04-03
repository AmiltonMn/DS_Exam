import Product from '../models/Product';

class ProductService {

    static async CreateProduct(
        name: string,
        price: number,
        stock: number
    ) {
        const newProduct = new Product({
            name: name,
            price: price,
            stock: stock
        });

        await newProduct.save();

        return newProduct;
    }

    static async GetProducts() {
        const products = await Product.find({});

        return products;
    }

    static async DeleteProduct(id: string) {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return false;
        }

        return true;
    }
}

export default ProductService;