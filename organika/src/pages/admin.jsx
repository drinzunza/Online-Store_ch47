import { useState } from 'react';
import "./admin.css";

/**
 * create an state variable array for allProducts
 * 
 * on saveProduct, push the product to the array (3 steps)
 * 
 * map allProducts to li
 */

function Admin() {
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code: '',
        discount: ''
    });

    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        category: ""
    });
    
    function saveCoupon() {               
        setAllCoupons([...allCoupons, coupon]);

        // let copy = [...allCoupons];
        // copy.push(coupon);
        // setAllCoupons(copy);
    }

    function handleCoupon(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        /**
         * create a copy
         * modify the copy
         * set the copy back
         */
        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    }
    
    function handleProduct(e){
        const name = e.target.name;
        const value = e.target.value;

        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }

    function saveProduct() {        
        setAllProducts([...allProducts, product]);
    }

    return (
        <div className="admin">
            <h1>Store Administration</h1>

            <div className="parent">

                <div className="products form">
                    <h3>Register a Product</h3>

                    <div>
                        <label className='form-label'>Title</label>
                        <input onChange={handleProduct} name="title" type="text" className="form-control" />
                    </div>

                    <div>
                        <label className='form-label'>Price</label>
                        <input onChange={handleProduct} name="price" type="number" className="form-control" />
                    </div>

                    <div>
                        <label className='form-label'>Image</label>
                        <input onChange={handleProduct} name="image" type="text" className="form-control" />
                    </div>
                    
                    <div>
                        <label className='form-label'>Category</label>
                        <input onChange={handleProduct} name="category" type="text" className="form-control" />
                    </div>

                    <button onClick={saveProduct} className='btn btn-dark'>Save Product</button>

                    <hr />

                    <ul className='list'>
                        {allProducts.map(prod => <li>{prod.title} - ${prod.price}</li>)}
                    </ul>
                </div>


                <div className="coupons form">
                    <h3>Register a Coupon</h3>
                    
                    <div>
                        <label className='form-label'>Code</label>
                        <input onChange={handleCoupon} name="code" type="text" className="form-control" />
                    </div>

                    <div>
                        <label className='form-label'>Discount</label>
                        <input onChange={handleCoupon} name="discount" type="number" className="form-control" />
                    </div>

                    <button onClick={saveCoupon} className='btn btn-outline-primary'>Save Coupon</button>

                    <hr />

                    <ul className="list">
                        {allCoupons.map(cp => <li>{cp.code} - ${cp.discount}</li>)}
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default Admin;


/**
 * ShoppingList
 * 
 * create the page (jsx and css)
 * register the route /shoppingList on app.js
 * create the navbar item
 * 
 * h1
 * 
 */