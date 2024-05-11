import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdRadioButtonOn } from "react-icons/io";
import { TbSquareLetterVFilled } from "react-icons/tb";
import Shimmer from "../../shimmer";
import { MENU_URL } from "../../../utils/contants";

const RestaurantMenu = () => {
    const [resRec, setResRec] = useState(null)
    const recItems = resRec?.cards[2]?.card?.card?.itemCards;
    console.log(recItems)

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6539243&lng=78.0922911&restaurantId=116103&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
        const json = await data.json()
        setResRec(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)
    }       

    useEffect(()=>{
        fetchData()
    },[])
    if(resRec === null) return <Shimmer />
return(
        <>
       
        <div>
            <div className="res-menu-Info">
                <div className="res-menu-name">
                    <h3>Monginis</h3>
                    <p>Indian,Bakery</p>
                    <p>Puhlong Xroad</p>
                </div>
                <div className="res-menu-rating">
                    <div className="starMenu">
                        <span><FaStar /></span>
                        <span>4.3</span>
                    </div>
                    <div className="rateMenu">
                        10K+ Ratings
                    </div>
                </div>
            </div>
        </div>

        <hr />
       <div className="recTitle"><h2>Recommended ({recItems.length})</h2></div> 
       <div className="btnMenudish">
        <div className="iconDish">
        <span className="btnVeg" 
        onClick={() => {
        const vegItems = recItems.filter((e) => e.card.info.itemAttribute.vegClassifier === "VEG");
        setResRec(vegItems);
         }}
    >Veg: <IoMdRadioButtonOn /></span>
        </div>
        <span className="btnNon">Non-Veg: <IoMdRadioButtonOn /></span>
        
       </div>

            <div className="Rec-box">
                {recItems.map((dta) => (
                    <div key={dta.card.info.id} className="rec-Info">
                        <div>
                            <span><TbSquareLetterVFilled /></span>
                            <h3>{dta.card.info.name}</h3>
                            <p>${dta.card.info.price /100}</p>
                            <span><FaStar /></span>
                            <span>{dta.card.info.ratings.aggregatedRating.rating}</span>
                        </div>
                        <div className="rec-img">
                       { dta.card.info.imageId ? <img src={ MENU_URL + dta.card.info.imageId} alt="" />: <></>}
                            <div className="addBtn">ADD</div>
                        </div>
                    </div>
                ))}
            </div>
            </>
    )
}

export default RestaurantMenu