import "./featured.css"
import alp from "../../images/apl.jpg"
import kochi from "../../images/kochi.jpg"
import tri from "../../images/thirssur.jpg"
import bag from "../../images/bag.gif"

 const Featured = ()=>{
    return(

        <div className="featured">
           
            <div className="tourist-images">
        <h2>Explore Popular Tourist Destinations</h2>
        <div className="images-container">
          <div className="image-card">
            <img src={alp} alt="Eiffel Tower" style={{ width: '450px' }} />
            <p>ALP</p>
          </div>
          <div className="image-card">
            <img src={tri} alt="Statue of Liberty" style={{ width: '450px' }} />
            <p>THRISSUR</p>
          </div>
          <div className="image-card">
            <img src={kochi} alt="Great Wall of China" style={{ width: '450px' }} />
            <p>Kochi</p>
          </div>
          {/* Add more images as desired */}
        </div>
      </div>

            
      </div>
      
    )
 }
 export default Featured 