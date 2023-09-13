import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Design from "./pages/design/Design";
import Location from "./pages/location/Location";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="design" element={<Design />} />
      <Route path="design/:category" element={<Design />} />
      <Route path="location" element={<Location />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
