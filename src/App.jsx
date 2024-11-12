import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
