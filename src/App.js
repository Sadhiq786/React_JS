// import ButtonComponents from "./Components/buttons/buttons-components"
// import OrderedList from "./Components/lists/Ordered-list/Ordered-list"
// import UnOrderedList from "./Components/lists/Unordered-list/Unordered-list"
// import TableContent from "./Components/tables/TableCreate"

import Gallery from "./Components/exports-imports/gallery.js";
import RulesofJsx, { Picture as Pic } from "./Components/jsx/Jsx_rules.js";


// function App()
// {

//   return (
//     <div>
//       <h1>Hello World</h1>

//       <ButtonComponents/> 
//       <OrderedList/>    
//       <UnOrderedList/> 
//       <TableContent/>
//     </div>
//   )
// }
// export default App



// import Profile from "./Components/jsx/jsx";
// import TableData from "./Components/jsx/Feb_13.js";
// import { Data, Picture } from "./Components/jsx/Feb_14.js";

// function App()
// {
//   return(
//     <div>
//       <table>
//           <TableData/>
//       </table>
//       <Data/>
//       <Picture/>
//     </div>

//   )
// }
// export default App;


function App()
{

  return(

    <div>
      <h1>Hello Sadhiq</h1>
      <RulesofJsx></RulesofJsx>

      <Gallery/>
      <Pic/>
    </div>
  )
}

export default App;