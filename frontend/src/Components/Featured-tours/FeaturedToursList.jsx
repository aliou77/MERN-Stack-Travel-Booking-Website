import TourCard from "../TourCard";
import TourData from "../../assets/data/tours";

function FeaturedToursList() {

  

  return (
    <>
    {
        TourData?.map((tour) =>{
            return <TourCard tour={tour} />;
        })
    }
    </>
  )
}

export default FeaturedToursList; 
