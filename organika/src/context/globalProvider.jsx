import { useState } from 'react';
import DataContext from './dataContext';

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ id: 123, name: 'Sergio' });

  function addProductToCart(product) {
    setCart([...cart, product]);

//     var copy = [...cart];
//     copy.push(product);
//     setCart(copy);
  }

  function removeProductFromCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;
