import React,{ useState } from "react";
import Tours from "./components/Tours";
import { data } from "./data";

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id != id);
    setTours(newTours);
  }

  if (tours.length === 0){
    return(
      <div className="refresh">
        <h2>No more tours left</h2>
        <button className="refresh-btn" onClick = { () => setTours(data)} >Refresh</button>
      </div>
    )
  }
  else{
    return (
      <div className="App">
        <Tours tours={tours} removeTour={removeTour}/>
      </div>
    )
  }
}

export default App;
