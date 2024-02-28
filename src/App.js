import './App.css';
import CircleCreate from './Components/class-components/Products/CircleTask/CircleTask';
import CarouselTask from './Components/class-components/CarouselTask/CarouselTask';
import Items from './Components/class-components/axios/TableAxios';
import DataInTable from './Components/class-components/axios/TableAxios';
import ListofAllItems from './Components/class-components/axios/ListAxios';
import CardsTask from './Components/class-components/axios/CardsAxios';

function App() {
  return (
    <div>
      {/* <CircleCreate/> */}
      {/* <CarouselTask/> */}
      {/* <DataInTable/> */}
      {/* <ListofAllItems/> */}
      <CardsTask/>
    </div>
  );
}

export default App;
