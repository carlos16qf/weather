const Button = ({tempC, temperatureF, cualEsLaTemp}) =>{
    
    return(
        <div>
            <button className='btn btn-dark' onClick={temperatureF}>{cualEsLaTemp}</button>
        </div>
    )
}

export default Button