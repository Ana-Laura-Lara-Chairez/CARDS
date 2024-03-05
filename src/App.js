import "./App.css";
import 'react-bootstrap';
import 'mdb-react-ui-kit';
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      <Footer />
      
    </div>
  );
}

export default App;