import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Doddetails from './Doddetails';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader
  } from 'mdb-react-ui-kit';
  import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function AllDoc() {

    const base_url=  'https://doctor-booking-backend-y7or.onrender.com/doctors'

    const [DocData, setDocData] = useState([])

    const fetchData = async()=>{
        const response = await axios.get(base_url)
        console.log(response.data);
        setDocData(response.data)
    }
    console.log(DocData);
    useEffect(()=>{fetchData()},[])
  return (
    <div>
                    <MDBCarousel showIndicators showControls fade >
      <MDBCarouselItem itemId={1} >
        <img src='https://img.freepik.com/premium-photo/asian-senior-doctor-uniform-looking-camera-smiling-while-standing-hospital-corridor_1001749-18603.jpg?w=1060' className='d-block w-100' height={'500px'} alt='...' />
        <MDBCarouselCaption>
          <h1>MEDCENTER</h1>
          <p>We prioritize your health.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://img.freepik.com/premium-photo/generative-ai-medical-team-conducting-surgery-modern-operating-room_28914-17469.jpg?w=1060' className='d-block w-100' height={'500px'} alt='...' />
        <MDBCarouselCaption>
          <h1>MEDCENTER</h1>
          <p>Secure your health with the help of medcenter.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

    </MDBCarousel>

    <div className="row m-5">
        <div className="col">
            <img src="https://img.freepik.com/premium-photo/portrait-smiling-nurse-hospital_53419-1056.jpg?w=900" alt="" width={'500px'} height={'360px'} />
        </div>
        <div className="col">
            <h3 style={{color:'darkblue'}}>Welcome to MEDCENTER- Your Trusted Partner in Healthcare!</h3>
            <p>
            At MEDCENTER, we understand the importance of your health and well-being. That's why we've created a seamless and user-friendly platform to simplify the process of booking doctor appointments. Our mission is to connect you with the right healthcare professionals, making your journey to wellness as convenient and efficient as possible.
            </p>
            <h4 style={{color:'darkblue'}}>1. Easy Appointment Booking:</h4>
            <p>Gone are the days of waiting in long queues or spending precious time on the phone. With MEDCENTER, you can effortlessly schedule appointments with your preferred doctors at the click of a button. Our intuitive platform allows you to browse through a diverse range of healthcare providers, view their availability, and secure your appointment without any hassle.</p>
        </div>
        <div>
        <h3 style={{color:'darkblue'}}>2. Comprehensive Healthcare Network:</h3>
            <p>MEDCENTER boasts an extensive network of qualified and experienced healthcare professionals across various specialties. Whether you're looking for a general practitioner, specialist, or allied healthcare provider, we've got you covered. Our platform ensures that you have access to a wide range of medical expertise to address your unique healthcare needs.</p>
            <h3 style={{color:'darkblue'}}>3. Reviews and Ratings:</h3>
            <p>Make informed decisions about your healthcare by exploring reviews and ratings from other MEDCENTER users. We believe in transparency, and the feedback from our community can guide you in choosing the right healthcare professional for your needs.

Join us on the journey to better health with MEDCENTER. We're committed to revolutionizing the way you access healthcare services, making it a convenient and personalized experience. Your well-being is our priority, and we're here to simplify the path to a healthier, happier you. MEDCENTER - Your Health, Your Way!</p>

        </div>
    </div>
    <div className='m-5'>
        <h1 className='mx-3 ' style={{color:'darkblue'}}>Find a Doctor</h1><hr className="hr" />

        <div className='row'>
            {
                DocData.map(item=>(
                    <div className="col m-3">
                                <MDBCard  className='text-white mb-3' style={{width:'320px',height:'250px', boxShadow:'4px,4px,4px'}}>
        <MDBCardHeader><h5 style={{color:'darkblue'}}>{item.hospital}</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle className='text-primary'>{item.name}</MDBCardTitle>
          <MDBCardText>
           <h6 style={{color:'darkblue'}}>{item.specialty}</h6>
           <p className='text-dark'>{item.address}</p>
          </MDBCardText>
          <MDBBtn className='me-1 p-2 m-3 mx-5' color='secondary' ><Link to={`/view/${item.id}`} style={{textDecoration:'none'}}>
        BOOK AN APPOINTMENT→</Link>
      </MDBBtn>{''}
        </MDBCardBody>
      </MDBCard>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
    


  )
}

export default AllDoc