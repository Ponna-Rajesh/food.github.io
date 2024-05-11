const CitiesInfo = (props) => {
    const {dta} = props
    console.log(dta)
    return(
        <>
        <div id="citiesName">
        <h2>Other cities that we deliver:</h2>
        <ul>
            {dta.map((city, index) => (
                    <li key={index}>
                        <a href={city.link}>
                            <div>{city.text}</div>
                        </a>
                    </li>
                ))}
        </ul>

    </div>
        </>

    )
}

export default CitiesInfo