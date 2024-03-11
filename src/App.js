import Table from "./Components/CRUDOperations/Table";
import CrudOperations from "./Components/Hooks/useReducer/CRUD-Operations";
import CrudTable from "./Components/Hooks/useReducer/CRUD-Operations";
import Spinner from "./Components/spinners/spinner";
import NavigationStack from "./Navigation/navigation";


function App() {
  return (
    <div>
      <NavigationStack/>
      {/* <CrudOperations/> */}
    </div>
  );
}

export default App;
