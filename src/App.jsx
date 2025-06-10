import "./App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <div className="app">
      <div className="d-flex justify-content-center my-3">
        <h2>Main Menu</h2>
      </div>
      <div className="app-container  ">
        <div className="row-1 ">
          <Link className="Links" to="/billing">
            Billing
          </Link>
          <Link className="Links" to="/inventory">
            Inventory
          </Link>
          <Link className="Links" to="/itemRequest">
            Item Request
          </Link>
        </div>
        <div className="row-2 ">
          <Link className="Links" to="/salesReport">
            Sales Report
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
