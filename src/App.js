import { BrowserRouter, Routes } from "react-router-dom";
import Table from "./Components/CRUDOperations/Table";
import ChangeProducts from "./Components/Hooks/useEffect/TaskShiftProducst";
import NavigationStack from "./Navigation/navigation";
import RedirectTask from "./Components/Routing/Redirect";


function App() {
  return (
    <div>
      <NavigationStack/>
      {/* <RedirectTask/> */}
    </div>
  );
}

export default App;
