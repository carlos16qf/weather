import { useEffect, useState } from "react"
import Button from './Button'
const Weather = ()=>{
   
     const [name, setName] = useState('')
     const [country, setCountry] = useState('')
     const [humidity,setHumidity] = useState('')
     const [pressure,setPressure] = useState('')
     const [description,setDescription] = useState('')
     const [icon,setIcon] = useState('')
     const [tempC, setTemp_C] = useState('')
     const [tempF, setTempF] = useState('')
     const [temp, setTemp] = useState('')
     const [cualEsLaTemp, setCualEsLaTemp] = useState('C')

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(position=> {
            
            const lat = position.coords.latitude
            const lon = position.coords.longitude

            
            const weather = async()=>{

                const url=  `https://api.weatherapi.com/v1/current.json?key=4f2dc86c435f4778b07231702210407&q=${lat},${lon}&aqi=no`
                const data = await fetch(url).then(res=> res.json())
                
                
                 setName(data.location.name)
                 setCountry(data.location.country)
                 setTemp(data.current.temp_c)
                 setHumidity(data.current.humidity)
                 setIcon(data.current.condition.icon)
                 setDescription(data.current.condition.text)
                 setPressure(data.current.pressure_in)
                 setTemp_C(data.current.temp_c)
                 setTempF(data.current.temp_f)
            }
            weather()
        }
            
        ) 
        
    },[])

    const temp2 = ()=>{
        if (cualEsLaTemp === 'C') {
            setTemp(tempF)
            setCualEsLaTemp('F')
        } else {
            setTemp(tempC)
            setCualEsLaTemp('C')
        }
    }
    
    return (
        <div>
            <div className=''>
                WEATHER
                <div className='p-3 mb-2  text-dark'>
                    
                     <h3>{name},{country}</h3>
                     
                     <h1>{temp} °{cualEsLaTemp}</h1> 
                    <img className='p-3 mb-2' src={icon} alt={icon}/>
                    <p>{description}</p>
                    <p>pressure: {pressure}</p>
                    <p>humidity: {humidity}</p>
                    <Button className= 'bg-dark' tempC={tempC} temperatureF={temp2} cualEsLaTemp={cualEsLaTemp}/> 
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Weather