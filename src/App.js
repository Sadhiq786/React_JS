import './App.css';
import ProductsApi from './Components/axios/products';
import APIData from './Components/class-components/axios/getProductsUI';

import OrderedList from './Components/lists/Ordered-list/Ordered-list';

function App() {
  return (
    <div>
      {/* <OrderedList/> */}

      {/* <ProductsApi/> */}

      <APIData/>
    </div>
  );
}

export default App;
