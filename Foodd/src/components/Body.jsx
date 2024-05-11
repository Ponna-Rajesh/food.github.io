import RestaurantCard from "./RestaurantCard"
import { useState , useEffect } from "react"
import Shimmer from "./shimmer"
import Caurosal from "./Caurosal"

const Body = () => {
    const [listOfResturants, setListOfResturants] = useState([])
    const [filteredRest , setFilteredRest] = useState([])
    const [searchText, setSearchText] = useState("")


    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () =>{ 
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6771579&lng=78.1015599&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()

         setListOfResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setFilteredRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listOfResturants.length === 0){
        return <Shimmer />
    }
    
    return(
        <>
    <main>
        <div className="top-container">
            <div className="search">
                <input  
                 type="search"
                 className="serach-info-box"
                 placeholder="search for restaurants"
                 value={searchText}
                 onChange={(e)=> {
                 setSearchText(e.target.value)
                }}
                />

                <button 
                    className="serach-btn"
                    onClick={() => {

                    const filterRestaurnat = listOfResturants.filter((res)=>{
                           return  res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                        });
                       
                        setFilteredRest(filterRestaurnat);

                    }}
                >search</button>
                
        </div>

        <div className = "btn-top">
            <button id="filter" onClick={() => {
                let listFilter = listOfResturants.filter((res) => res.info.avgRating >= 4.3)
                setFilteredRest(listFilter)   
                 }}>Top Rated Restaurants</button>
            </div>
        </div>
        
        <div>
            <Caurosal />
        </div>
            
        <div className ="container-box">
            <h2>Top restaurant chains in Nizamabad</h2>
                {filteredRest.map(resturants => ( 
                <RestaurantCard key={resturants.info.id} resData={resturants}/>
                 ))
                }
        </div>
    </main>
        </>
    )
}

export default Body