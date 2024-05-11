import { useState, useEffect } from "react"
import { CAUROSAL_URL } from "../utils/contants"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Caurosal = () => {
    const [slide, setSlide] = useState(0)
    const [caurosalTop, setCaurosalTop] = useState([])

    const fetchData = async () =>{ 
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6771579&lng=78.1015599&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            )
        const json = await data.json()
        setCaurosalTop(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    }

    useEffect(() => {
        fetchData();
    },[])

    function prevSlide(){
        if(slide === 0) return false
        setSlide( slide - 3)
    }

    function nextSlide(){
        if(caurosalTop.length - 8 === slide) return false
        setSlide( slide + 3)
    }


return (

    <>
     <div className="caruosal-info">
            <h1>What's on your mind?</h1>
            <div className="btn-arrow">
                <div className="btn-arrow-left"
                onClick={prevSlide}
                >
                    {<FaArrowLeft />}
                </div>
                <div className="btn-arrow-right"
                onClick={nextSlide}

                >
                    {<FaArrowRight />}
                </div>
            </div>
        </div>

        <div className="caur-box">
         {caurosalTop.map(dta => (
                <img key={dta.id} className="caurosal-img" style={{
                    transform: `translateX(-${slide * 130}%)`,
                    transitionDuration: "0.55s"
                }} src={ CAUROSAL_URL + dta.imageId } />
                ))
               } 
        </div>

        <hr />
         
    </>
)
}

export default Caurosal