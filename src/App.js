import { BrowserRouter, Routes } from "react-router-dom";
import Table from "./Components/CRUDOperations/Table";
import ChangeProducts from "./Components/Hooks/useEffect/TaskShiftProducst";
import NavigationStack from "./Navigation/navigation";
import RedirectTask from "./Components/Routing/Redirect";
import RegistrationForm from "./Components/Hooks/useRef/RegistrationForm";


function App() {
  return (
    <div>
      <NavigationStack/>
      {/* <RedirectTask/> */}
      {/* <RegistrationForm/> */}
    </div>
  );
}

export default App;
