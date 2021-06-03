import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Contact from "./components/pages/contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
