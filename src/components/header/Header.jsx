import { Children, useState } from "react";
import "./header.css";
import { useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import bag from "../../images/hou.gif"



// import { DateRange } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
 const Header = (type)=>{
    // const [date,setDate]=useState([
    //     {
    //         startDate:new Date(),
    //         endDate:null,
    //         key:'selection',
    //     },
    // ]);
    const [location, setLocation] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const navigate = useNavigate();
    const [openOptions,setOpenOptions]=useState(false);
    const[options,setOptions]=useState({
        adult:1,
        children:0,
        room:1,
    }); 
    
    

    const handleOption=(name,operation)=>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]:operation==="i" ? options[name] + 1 : options[name] - 1  ,
            };
        });
    };
    const handleSearch = (e) => {
        e.preventDefault();
        const { adult, children, room } = options;
        navigate(`/results?location=${location}&checkIn=${checkInDate}&checkOut=${checkOutDate}&adult=${adult}&children=${children}&room=${room}`);
      };
    return(
        <div className="header">
            
            <div className="headerContainer">
            
                
            
            { type !=="list" &&
                <>
            <h1 className="headerTitle">PACK YOUR BAGS</h1>
            <h4 className="desc">This is your own trip,Discount to make your own trip</h4>
            <img src={bag} alt="Eiffel Tower" style={{ width: '150px' }} className="align"/>
            <button className="headerBtn">Register/Login</button>
            
            <form onSubmit={handleSearch}>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    
                    Location:
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <div className="headerSearchItem">
                Check-In Date:
                <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
                Check-Out Date:
                <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
                    
                    {/* <span className="headerSearchText">{'${format(date[0].endDate,"MM/dd/yyyy)}'}</span> */}
                    {/* <DateRange editableDateInputs={true}
                    onChange={item=>setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date} className='date' />
                     */}
                </div>
                <div className="headerSearchItem">
                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{options.adult}adult . {options.children}children . {options.room}room</span>
                {openOptions &&<div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adults</span>
                        <div className="optionCounter">
                        <button disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button> 
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button> 
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Childern</span>
                        <div className="optionCounter">
                        <button disabled={options.children<=0} className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button> 
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button> 
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                        <button className="optionCounterButton" disabled={options.room<=1} onClick={()=>handleOption("room","d")}>-</button> 
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button> 
                        </div>
                        
                    </div>
                </div>}
                </div>
                <div className="headerSearchItem">
                <button className="searchButton">print</button>
                
                </div>
                
            </div>
            </form>
            </>}       
        
            </div>
            
        </div>
    )
 }
 export default Header 

 