import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./Layouts/MainLayout";
import RoutesC from "./Routes";

function App() {
  return (
    <Router>
      <MainLayout>
        <RoutesC />
      </MainLayout>
    </Router>
  );
}

export default App;
