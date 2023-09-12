import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>header</h1>
      </header>
      <Outlet />
      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
}

export default Layout;
