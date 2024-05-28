import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import Offers from "./components/Offers/Offers";
import ModelsContainer from "./components/Models/ModelsContainer";
import ServiceSignUp from "./components/ServiceSignUp/ServiceSignUp";
import TestSignUp from "./components/TestSignUp/TestSignUp";
import Accessories from "./components/Accessories/Accessories";
import LegalInfo from "./components/LegalInfo/LegalInfo";
import BodyRepair from "./components/BodyRepair/BodyRepair";
import {accessories} from "./state/accessories";
import {legal_info} from "./state/legal_info";
import {offers} from "./state/offers";

function App(props) {
    return (
        <div className="App">
            <Header />
            <div className="main_content">
                <Routes>
                    <Route path={'/main'} element={<MainPage />}/>
                    <Route path={'/offers'} element={<Offers offers={props.offers} />}/>
                    <Route path={'/models'} element={<ModelsContainer models={props.models}/>}/>
                    <Route path={'/repair'} element={<BodyRepair body_repair={props.body_repair}/>}/>
                    <Route path={'/subscribe'} element={<ServiceSignUp />}/>
                    <Route path={'/test'} element={<TestSignUp />}/>
                    <Route path={'/service'} element={<Accessories accessories={props.accessories}/>}/>
                    <Route path={'/legal'} element={<LegalInfo legal_info={props.legal_info}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App
