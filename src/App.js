import './App.css';
import ProductsApi from './Components/axios/products';

import OrderedList from './Components/lists/Ordered-list/Ordered-list';

function App() {
  return (
    <div>
      {/* <OrderedList/> */}

      <ProductsApi/>
    </div>
  );
}

export default App;
