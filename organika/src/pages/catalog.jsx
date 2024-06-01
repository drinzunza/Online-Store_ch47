import Product from "../components/product";
import "./catalog.css";

function Catalog() {

    let categories = ["fruit", "farm", "merchandise", "vitamins"];

    let products = [
        {
            title: 'Orange',
            category: 'fruit',
            price: 15.9,
            image: 'oranges.png',
            _id: '1',
        },
        {
            title: 'Banana',
            category: 'fruit',
            price: 17.012,
            image: 'banana.png',
            _id: '2',
        },
        {
            title: 'Chesse',
            category: 'farm',
            price: 33.3,
            image: 'chesse.png',
            _id: '3',
        },
        {
            title: 'Coffee',
            category: 'farm',
            price: 73.12,
            image: 'coffee.png',
            _id: '4',
        },
        {
            title: 'Hoodie',
            category: 'merchandise',
            price: 41.92,
            image: 'hoodie.png',
            _id: '5',
        },
        {
            title: 'Milk',
            category: 'farm',
            price: 11.254,
            image: 'milk.png',
            _id: '6',
        },
        {
            title: 'Vitamins',
            category: 'vitamins',
            price: 43.76,
            image: 'vitamins.png',
            _id: '7',
        },
    ];

    return (
        <div className="catalog">
            <h1>Check out catalog!</h1>

            <div className="filters">
                {categories.map(cat => <button className="btn btn-sm btn-dark">{cat}</button>)}
            </div>

            <div className="list">
                {products.map(prod => <Product key={prod._id} data={prod} />)}
            </div>
        </div>
    );
}

export default Catalog;



/**
 * About Page
 * create a About page component
 * render it on app.js below Catalog
 */