import { createBrowserRouter } from "react-router";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/products";
import { ProductsPage } from "./pages/productsPage";


const router = createBrowserRouter([{
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/products',
      element: <Products />
    },
    {
      path: '/products/:id',
      element: <ProductsPage />
    }
  ]
}])


export default router;