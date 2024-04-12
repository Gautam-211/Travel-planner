import Card from "./Card";
import React from "react";

export default function Tours({tours,removeTour}){
    return(
        <div className="container">
            <div>
                <h1 className="title">Travel with Love</h1>
            </div>
            <div className="card-container">
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}/>
                    })
                }
            </div>
        </div>
    )
}