import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//components
import Characters from './Characters';
import Locations from './locations';
import Episodes from "./Episodes";
import Homepage from "./Homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homepage />}>
      <Route path='Characters' element={< Characters/>}/>
      <Route path="Episodes" element={<Episodes/>} />
      <Route path='Locations' element = {<Locations/>}/>
    </Route>
  )
);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
