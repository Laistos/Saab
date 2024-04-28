import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import Offers from "./components/Offers/Offers";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main_content">
                <Routes>
                    <Route path={'/main'} element={<MainPage />}/>
                    <Route path={'/offers'} element={<Offers />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App
