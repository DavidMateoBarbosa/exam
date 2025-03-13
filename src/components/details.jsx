import Carousel from "./carousel";
import {useState, useEffect} from "react";
import Cards from "./cards";

export default function Details({type}) {
    const [dataset, setDataset] = useState([]);

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/food.json?key=19f449d0")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                setDataset(json);
                console.log(json);  // Log updated dataset
            })
            .catch(error => console.error("Failed to fetch data:", error));
    }, []);

    const icons = {
        menu: "📋",
        stores: "🏬",
        cart: "🛒"
    }

    return (
        <div style={{padding: "20px", backgroundColor: "#f8f9fa"}}>
            <h1 className="banner" style={{color: "#F1F1F1", textAlign: "center", backgroundColor: "#233d3e"}}>{icons[type]} {type.toUpperCase()} {icons[type]}</h1>
            <div className="small-carousel" style={{margin: "0 auto", maxWidth: "600px"}}>
                <Carousel data={dataset}/>
            </div>
            <div>
                <Cards data={dataset}/>
            </div>
        </div>
    );
}