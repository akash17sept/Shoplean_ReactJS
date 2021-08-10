import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Footbar from './component/Footer';
import Topbar from './component/Topbar';
import Home from './component/Home';
import Product from './component/Product';
import OrderConfirm from './component/OrderConfirm/index.js';
import Cart from './component/Cart';


const App = () => {
  return (
    <BrowserRouter>
      <Topbar />

      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/orderconfirm" component={OrderConfirm} />
      </switch>
      
      <Footbar />
    </BrowserRouter>
  );
}

export default App;