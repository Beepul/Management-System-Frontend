import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import useTitle from "./hooks/useTitle";

function App() {

  useTitle({title:'Management System'})
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
