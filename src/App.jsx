import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import Shop from "./components/Shop/Shop";
import ProductandCart from "./Loader/ProductandCart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivetRouter from "./PrivetRouter/PrivetRouter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>,
          loader: () => fetch("products.json"),
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
          loader: () => fetch("products.json"),
        },
        {
          path: "/order",
          element: (
            <PrivetRouter>
              <Order></Order>
            </PrivetRouter>
          ),
          loader: ProductandCart,
        },
        {
          path: "/inventory",
          element: (
            <PrivetRouter>
              <Inventory></Inventory>
            </PrivetRouter>
          ),
        },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
      ],
    },
  ]);
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
