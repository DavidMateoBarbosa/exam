import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home";
import Details from "./components/details";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/details/menu" element={<Details type={"menu"}/>}/>
                <Route path="/details/stores" element={<Details type={"stores"}/>}/>
                <Route path="/details/cart" element={<Details type={"cart"}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
