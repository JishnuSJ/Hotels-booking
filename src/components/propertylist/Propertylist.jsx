import "./propertylist.css"
import im from "../../images/kl1.jpg"
import alp from "../../images/apl.jpg"
import klm from "../../images/klm.jpg"
import kochi from "../../images/kochi.jpg"
import kozhikode from "../../images/kozhikode.jpg"
import jad from "../../images/jadyu.jpg"
import bus from "../../images/bus.jpg"
import tr from "../../images/tr.png"
import fli from "../../images/fl.png"
import path from "../../images/path.jpg"
import rock from "../../images/rock.png"

import { Link } from "react-router-dom"
 const Propertylist = ()=>{
    return(
        <div>
          <div className="vechile">
          <div className="bus">
              <img src={bus} alt="Eiffel Tower" style={{ width: '350px' }} /><br/>
              <Link to="https://www.onlineksrtcswift.com/">
              <button className="headerBtn">BOOK YOUR KERALA BUS</button></Link>
          </div>
          <div className="Train">
              <img src={tr} alt="Eiffel Tower" style={{ width: '350px' }} /><br/>
              <Link to="https://www.irctc.co.in/nget/train-search">
              <button className="headerBtn">BOOK YOUR TRAIN</button></Link>
          </div>
          <div className="flight">
              <img src={fli} alt="Eiffel Tower" style={{ width: '350px' }} /><br/>
              <Link to="https://www.booking.com/index.html?aid=2278700&pagename=en-in-hotels&label=msn-pZ3aRm9tNGNJ2P6UnpqJQg-79989662145881:tikwd-79989814206033:loc-90:neo:mtp:lp1661:dec:qsflight%20booking%20official%20website&utm_campaign=English_India%20EN%20IN&utm_medium=cpc&utm_source=bing&utm_term=pZ3aRm9tNGNJ2P6UnpqJQg&msclkid=58db24582b5d1a1afabe435f03ada2aa">
              
              <button className="headerBtn">BOOK YOUR FLIGHT</button></Link>
          </div>
         </div> 
         <div className="imagecard">
            <img src={rock} alt="Eiffel Tower" style={{ width: '550px' }} />
            
            
          </div>
          <div className="tourist-images">
        <h2>Explore Popular Tourist Destinations</h2>
        <div className="images-container">
          <div className="imagecard">
            <img src={kozhikode} alt="Eiffel Tower" style={{ width: '550px' }} />
            <h4>Kozhikode</h4>
            <p>Visit Kappad Beach, where Vasco da Gama landed, the bustling SM Street, and Kozhikode Beach.</p>
          </div>
          <div className="imagecard">
            <img src={jad} alt="Statue of Liberty" style={{ width: '620px' }} />
            <h4>Kollam</h4>
            <p>Known for Ashtamudi Lake's backwaters, Thangassery Lighthouse, and the scenic Palaruvi Waterfalls.</p>
          
          </div>
          <div className="imagecard">
            <img src={path} alt="Great Wall of China" style={{ width: '550px' }} />
            <h4>Thiruvananthapuram</h4>
            <p>Visit the iconic Kovalam Beach, the historic Padmanabhaswamy Temple, and the serene hill station of Ponmudi.</p>
          </div>
          
          {/* Add more images as desired */}
        </div>
      </div>
      
        <div className="tourist-images">
        <div className="images-container">
          <div className="imagecard">
            <img src={alp} alt="Eiffel Tower" style={{ width: '650px' }} />
            <h4>Alappuzha</h4>
            <p>Popular for its houseboat cruises on the backwaters, Alappuzha Beach, and the tranquil Vembanad Lake.</p>
          </div>
          <div className="imagecard">
            <img src={im} alt="Statue of Liberty" style={{ width: '350px' }} />
            <h4>Palakkad</h4>
            <p>Known for the historic Palakkad Fort, the Silent Valley National Park, and Malampuzha Dam and Gardens.</p>
          </div>
          <div className="imagecard">
            <img src={kochi} alt="Great Wall of China" style={{ width: '550px' }} />
            <h4>Kochi</h4>
            <p>Visit Fort Kochi for its heritage, the vibrant Marine Drive, and the beautiful Cherai Beach. </p>
          </div>
          
          {/* Add more images as desired */}
        </div>
      </div>
            
        </div>
    )
 }
 export default Propertylist