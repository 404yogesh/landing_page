import React, { useState } from 'react'
import HandleOnSubmit from '../model/HandleOnSubmit'
import './Main.css'


function Main() {
      const [roundtrip, setRoundtrip]=useState({display:"d-none",select:""});
      const [oneway, setOneway]=useState({select:"active"})

      const [data, setData]= useState({
        Pickup_Address:"",
        Drop_Location:"",
        Date:"",
        Time:"",
        Return_Date:"",
        Return_Time:"",
        trip:""
      });

      const handleRoundTrip=()=>{
        setRoundtrip({display:"row",select:"active"});
        setOneway({select:""});
      console.log(roundtrip,oneway);
      }

        const handleOneWay=()=>{
          
          setRoundtrip({display:"d-none",select:""});
          setOneway({select:"active"});
        
        console.log(roundtrip,oneway);
        }

        const handleOnChange=(e)=>{
          setData({
            ...data,
            [e.target.name]:e.target.value,
            
          })
          console.log(data)
        }
   


  return (
    <>
      <div className="main">
        <form id='main_form'>
        <div className="form">
          <div className="container d-flex mb-2">
          <button type="button"  onClick={()=>handleOneWay()} name='oneway' className={`btn btn-outline-success me-2 ${oneway.select}`} data-bs-toggle="button" >One-way</button>
        <button type="button" onClick={()=>handleRoundTrip()} name='roundtrip' className={`btn btn-outline-danger me-2 ${roundtrip.select}`} data-bs-toggle="button" >Round-trip</button>
        </div>
        <div className="input-wrap" id="abc">
          <label htmlFor="Pickup_Address">Pickup Address</label>
          <input type="text" id='Pickup_Address' onChange={handleOnChange} name="Pickup_Address"   autoComplete="off" className="pac-target-input" placeholder="Enter a location" required />
         </div>
        <div className="input-wrap" id="def">
          <label htmlFor="Drop_Location">Drop Location</label>
          <input type="text" id='Drop_Location' onChange={handleOnChange} name="Drop_Location"   autoComplete="off" className="pac-target-input" placeholder="Enter a location" required />
         </div>
         <div className='row'>
        <div className="input-wrap me-2 col" id="ghi">
          <label htmlFor="Date">Date</label>
          <input type="date" id='Date' onChange={handleOnChange} name="Date"  autoComplete="off" className="pac-target-input" placeholder="Enter a location" required />
         </div>
        <div className="input-wrap col" id="jkl">
          <label htmlFor="Time">Time</label>
          <input type="time" id='Time' onChange={handleOnChange} name="Time"   autoComplete="off" className="pac-target-input" placeholder="Enter a location" required />
         </div>
         </div>
        
         <div className={`${roundtrip.display}`}>
        <div className="input-wrap me-2 col" id="mno">
          <label htmlFor="Return_Date">Return Date</label>
          <input type="date" id='Return_Date' onChange={handleOnChange} name="Return_Date"   autoComplete="off" className="pac-target-input" placeholder="Enter a location" required />
         </div>
        <div className="input-wrap col" id="pqr">
          <label htmlFor="Return_Time">Return Time</label>
          <input type="time" id='Return_Time' onChange={handleOnChange} name="Return_Time"  autoComplete="off" className="pac-target-input" placeholder="Enter a location" required />
         </div>
         </div>
       
         {/* <HandleOnSubmit Date={data.Date}  Time={data.Time}  Drop_Location={data.Drop_Location}  Pickup_Address={data.Pickup_Address} oneway={oneway.select} Return_Date={data.Return_Date} Return_Time={data.Return_Time}/> */}
         <HandleOnSubmit data={data} oneway={oneway.select} />
         
       


           
        </div>
        </form>
      </div>

    </>
  )
}

export default Main
