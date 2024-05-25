
import React ,{useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {
     const[data,setData]=useState({});
    const[location ,setLocation] =useState('');

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d4ab53499908fe0a08ab8feae990cf74`

    const searchLocation =(event)=>{
      if(event.key === 'Enter'){
                axios.get(url).then((response) =>{
                  setData(response.data)
                  console.log(response.data)
                })
                setLocation('')
              }
       }
  return (
    <div className="app">
                <div className="search">
                    <input type='text'
                    value={location}
                    onChange={event => setLocation (event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Enter Location'
                    className='input'
                    />
                </div>
        <div className='container'>
              <div className='top'>
                <div className='location'>
                     <p >{data.name}</p>
                   {/* <p>Dallas</p> */}
                </div>
                <div className="temp">
                    {/* <h1>60°F</h1> */}
                    {data.main ? <h1 className='h1'>{data.main.temp.toFixed()}°F</h1> :null}
                </div>
                <div className="des">
                {data.weather ? <p className='bold'>{data.weather[0].main}</p> :null}
                </div>  
              </div>
              {/* calldata */}
            {data.name != undefined &&
           
              <div className='bottom'> 
                  <div className='feels'>
                  {data.main ? <p className='bold'>{data.main.feels_like}°F</p> :null}
                      <p >Feel Like</p> 
                  </div>
                  <div className='humidity'>
                    {data.main ? <p className='bold'>{data.main.humidity}%</p> :null}
                    <p >Humidity</p>
                  </div>
                  <div className="winds" >
                  {data.wind ? <p className='bold'>{data.wind.speed}MPH</p> :null}
                      <p > Wind Speed</p> 
                  </div> 
              </div>
          }
            </div>   
    </div> 
  );
}




export default App;
