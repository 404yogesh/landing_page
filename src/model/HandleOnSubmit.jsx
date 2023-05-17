import Swal from 'sweetalert2'

  const HandleOnSubmit=({data,oneway})=>{
      
      const HandleSubmit=(e)=>{
        e.preventDefault();
    if(oneway==="active"){
   if(data.Date && data.Time && data.Drop_Location && data.Pickup_Address){
      data.trip="Oneway-Trip"
    Swal.fire({
      title: `\nTrip: ${data.trip}\n\nPickup_Address: \n${data.Pickup_Address} 
        \nDrop_Location : \n${data.Drop_Location} 
        \nDate :${data.Date} \nTime: ${data.Time}`,
      
        showCancelButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: `Cancel`,
    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire('Booked', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Ride Cancel', '', 'info')
      }
    })
  console.log("my_data= "+data.trip)}else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Fill all the fields!',
      
    })
  }
}else{
  if(data.Date && data.Time && data.Drop_Location && data.Pickup_Address && data.Return_Date && data.Return_Time){
    if(data.Return_Date>=data.Date && data.Return_Time>data.Time){
    data.trip="Round-Trip"
    Swal.fire({
      title: `\nTrip: ${data.trip} \n\nPickup_Address: \n${data.Pickup_Address} 
        \nDrop_Location : \n${data.Drop_Location} 
        \nDate :${data.Date} \nTime: ${data.Time}
        \nReturn_Date:${data.Return_Date}
        \nReturn_Time:${data.Return_Time}`,
      
        showCancelButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: `Cancel`,
    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire('Booked', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Ride Cancel', '', 'info')
      }
    })
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Check Return-Date & Return-Time',
      text: 'Return-Date should be greater then or equals to the pickup date & Return-Time should be greater then the pickup Time ',
      
    })
  }}else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Fill all the fields!',
      
    })
  }
  console.log("my_data= "+data.trip)}
}


return(
  <>
  <button className="btn btn-primary mt-5 fs-4 fw-bolder p-2" onClick={(e)=>HandleSubmit(e)} type="button">Book A Ride</button>
  </>
)

}

export default HandleOnSubmit;