import { Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div>
      <h1>Gud Predictions</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Prediction">Prediction</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}