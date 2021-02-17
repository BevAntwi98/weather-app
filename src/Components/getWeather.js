import React, {useState} from 'react';

const api ={

    key:"cc67b19dc916f461ab3e7d8d3c68bb27",
    base:"https://api.openweathermap.org/data/2.5/"
  
  }

  const GetWeather =() => {

const [query, setQuery] = useState('');
const [weather,setWeather] =useState({});

const retrieveResult = (event) => {
  if (event.key === "Enter"){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result => {
          setQuery('');
          setWeather(result);
          console.log(result);         
   })
  }
    };
    const error=()=>{
      return(

        <div className="form-alert" role="alert">
         alert("Please enter a city!!");
        </div>
       
       ) };

       
       <div className="search-box">
       <div>{error? error(): ""}
    <input
     type="text"
     placeholder="Enter a city..."
     autoComplete="off"
     onChange={e => setQuery(e.target.value)}
     onKeyPress= {retrieveResult}
     value= {query}
     />
     </div>
 </div>
}

    export default GetWeather
