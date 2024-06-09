import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {body_repair} from "./state/body_repair";
import {models_state} from "./state/models";
import {accessories} from "./state/accessories";
import {legal_info} from "./state/legal_info";
import {offers} from "./state/offers";
import {cars_for_sale} from "./state/cars_for_sale";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App body_repair={body_repair}
                 models={models_state}
                 accessories={accessories}
                 legal_info={legal_info}
                 offers={offers}
                 сars_for_sale={cars_for_sale}/>
        </React.StrictMode>
    </BrowserRouter>
);


reportWebVitals();
