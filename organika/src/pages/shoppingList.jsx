import { useState } from 'react';
import "./shoppingList.css";

function ShoppingList() {

    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        name: "",
        quantity: ""
    });

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        var copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }

    function addProduct() {
        setAllProducts([...allProducts, product]);
    }

    return (
        <div className="shopping">
            <h1>Shopping List</h1>

            <div className="form">
                <div>
                    <label className='form-label'>Name</label>
                    <input onChange={handleChange} name="name" type="text" className="form-control" />
                </div>

                <div>
                    <label className='form-label'>Quantity</label>
                    <input onChange={handleChange} name="quantity" type="number" className="form-control" />
                </div>

                <button onClick={addProduct} className='btn btn-outline-primary'>Add Product</button>
            </div>

            <ul>
                {allProducts.map(prod => <li>{prod.name} - {prod.quantity}</li>)}
            </ul>
        </div>
    );
}

export default ShoppingList;



/**
 * ShoppingList
 * the user should add products (name and quantity)
 * to the shopping list
 * 
 * 
 * create the form (for name and quantity)
 * 
 * create the allProds state variable
 * create the prod state variable
 * 
 * create the handleChange function
 * 
 * create the addProd button
 * and the add Function
 * 
 * Map
 */