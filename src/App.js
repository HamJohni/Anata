import './components/sass/style.scss'
import Header from "./components/Header/Header";
import First from "./components/Main/First/First";
import Special from "./components/Main/Special/Special";
import Live from "./components/Main/Live/Live";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
        <Header/>
        <First/>
        <Special/>
        <Live/>
        <Footer/>
    </div>
  );
}

export default App;
