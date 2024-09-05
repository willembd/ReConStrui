import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { router } from "./Routes/routes";

export default function App() {

  return (
    <>
        <GlobalStyles/>
        <RouterProvider router={router}/>
  
        
    </>
  )
}


