import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "country/:countryCode",
        element: <Detail />
      }
    ]
  },
  {
    path: "*",
    element: <div>404 Not Found</div>
  }
])

/*
country code: cca2
name: name.common
native: name.nativeName.
population
sub region
capital
top level domain
currencies
languages
border countries
*/
