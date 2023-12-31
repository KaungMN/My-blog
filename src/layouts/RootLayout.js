import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <h1>KMN's Blog</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
