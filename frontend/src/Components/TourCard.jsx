import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../utls/calculateAvgRating';

function TourCard({ tour }) {
    const {_id, title, photo, featured, price, reviews, city} = tour;
    const { avgRating, totalRating} = calculateAvgRating(reviews);

  return (
    <div className="tour-item">
      <div className="img relative">
        <img src={photo} alt={title} className='object-cover' />
        { featured 
          ? <span className='featured'>Featured</span> 
          : ""
        }
      </div>
      <div className="body pt-2 px-3 flex flex-col gap-4">
        <div className="notes flex justify-between">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className='text-blue-900' />
            {city}
          </div>
          <div className="rating flex gap-2 items-center">
            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
            {avgRating === 0 ? null : avgRating} { totalRating === 0 ? "No rating" : "("+reviews?.length+")"}
          </div>
        </div>
        <h4 className='font-semibold text-lg'>
          <Link to={`/tours/${_id}`} className='hover:text-blue-900' >{title}</Link>
        </h4>
        <div className="prices flex justify-between">
          <div className="price">
            <span className='text-blue-900 font-semibold'>${price}</span>/per person
          </div>
          <div className="btn-book">
            <Link to={`/tours/${_id}`} className='px-3 py-2 rounded-md bg-blue-900 text-white font-medium'>Book now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourCard;