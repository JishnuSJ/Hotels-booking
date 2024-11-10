import React from 'react';
import './hotel.css'
import { useLocation } from 'react-router-dom';
import klmh from "../../images/h1.jpg"
import tvm from "../../images/h2.jpg"
import kochi from "../../images/h3.jpg"
import kochi2 from "../../images/h4.jpg"

//import p1 from "../../images/p4.jpg"
function ResultsPage() {
  const pageLocation = useLocation(); 
  const queryParams = new URLSearchParams(pageLocation.search);

  
  const searchLocation = queryParams.get('location');
  const checkInDate = queryParams.get('checkIn');
  const checkOutDate = queryParams.get('checkOut');
  const adultCount = queryParams.get('adult');
  const childrenCount = queryParams.get('children');
  const roomCount = queryParams.get('room');
  const hotels = [
    { id: 1, name: ' Raviz Hotel', country: 'Kerala', location: 'Kollam',phone:'96337233266', image: klmh },
    { id: 2, name: 'Backwaters Homestay', country: 'Kerala', location: 'Trivandrum',phone:'8439563326', image: tvm },
    { id: 3, name: 'Fort Ayurvedic Resort', country: 'Kerala', location: 'Kochi',phone:'723723326', image: kochi },
    { id: 4, name: 'Lake n River', country: 'Kerala', location: 'Kochi',phone:'9233723326', image: kochi2 },
    { id: 5, name: 'Park Hotel', country: 'Kerala', location: 'kozhikode',phone:'9665723326', image: klmh },
    { id: 6, name: 'Mountain Lodge', country: 'Kerala', location: 'Thrissur',phone:'9453723326', image: tvm },
    
  ];

  
  const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <div>
      <h1 className='avl_hotels'>Available Hotels in {searchLocation}</h1>
      <h4 className='det'>
        Check-In: {checkInDate} <br/> Check-Out: {checkOutDate} <br />Guests: {adultCount} Adults, {childrenCount} Children <br />
        Rooms: {roomCount}
      </h4>
      <div className="hotellist">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <div key={hotel.id} className="hotelcard">
              <img src={hotel.image} alt={`${hotel.name}`} className="hotelimage" style={{ width: '250px' }}/>
              <h2 className='hotname'>{hotel.name}</h2>
              <h5 className='phone'>Call:{hotel.phone}</h5>
              <p className='detailhotel'>Location: {hotel.location}, {hotel.country}</p>
            </div>
          ))
        ) : (
          <p>No hotels found for the given location.</p>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
