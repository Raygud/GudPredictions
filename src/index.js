import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Prediction from "./routes/Prediction";
import CurrentUrl from "./routes/CurrentUrl"
import './Predictions.css';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />}>
    <Route path="Prediction" element={<Prediction />}>
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>Your Url is</p>
          <CurrentUrl/>
        </main>
      }
    />
  </Route>
</Routes>
  </BrowserRouter>,
  
  rootElement
);