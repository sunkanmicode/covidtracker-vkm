import Totalcase from "./pages/Totalcase";
import "./app.css"
import { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import Cases from "./pages/Cases";

const URL = "https://covidnigeria.herokuapp.com/api"


function App() {
  const [loading, setLoading] = useState(true)
  const [covidList, setCovidList] = useState([]);
  const [data, setData] = useState({})

  const fetchCovidData = async()=>{
    setLoading(true)
    try {
      const response =await fetch(URL);
      const covidData = await response.json();
      setLoading(false);
      setCovidList(covidData.data.states)
      setData(covidData.data)
      console.log(covidData.data.states);
      console.log(covidData.data.totalSamplesTested);
      console.log(covidData.data.totalConfirmedCases);
      console.log(covidData.data.discharged);



    } catch (error) {
      console.log(error);
    }
  }
useEffect(()=>{
  fetchCovidData()
},[])

if(loading){
  <div>
    <Loading />
  </div>
}

  return (
    <div className="app">
     <Totalcase  data={data}/>
     <Cases covidList={covidList} />
    </div>
  );
}

export default App;
