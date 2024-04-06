import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ImageSet from "./components/ImageSet/ImageSet";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Navbar />
                <ImageSet />
            </div>
            <Footer />
        </div>
    );
}

export default App
