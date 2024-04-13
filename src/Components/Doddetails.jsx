import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit'


function Doddetails() {
  const { id } = useParams();
  console.log(id);
  const base_url = 'https://doctor-booking-backend-y7or.onrender.com/doctors';
  const [docData, setdocData] = useState({});
  
  const viewdocData = async () => {
    const {data} = await axios.get(`${base_url}/${id}`)
    console.log(data);
    setdocData(data);
  };
  
  console.log(docData);
  
  useEffect(() => {
    viewdocData();
  }, []);
  
  return (
    <div>
        <div>
        <div className='bg-image' style={{height:'350px'}}>
      <img src='https://img.freepik.com/free-photo/metal-treatment-device-background-diagnostic_1232-4186.jpg?w=996&t=st=1710667908~exp=1710668508~hmac=7572517d981d487aa0dfb1e21b9d782370670d207a7e641e7af64f3ef1dea75d' className='img-fluid' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <h1 className='text-white mb-0' style={{textShadow:'2px 3px 4px black'}}>{docData.name}</h1>
        </div>
      </div>
    </div>
        </div>
        <MDBCard className='mt-2' alignment='center'>
      <MDBCardHeader><h2>{docData.hospital}</h2></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{docData.name}</MDBCardTitle>
        <MDBCardText>⭐{docData.rating}</MDBCardText>
        <MDBCardText>Specialty : {docData.specialty}</MDBCardText>
        <MDBCardText>Address : {docData.address}</MDBCardText>
        <MDBCardText>Contact Number : {docData.phone}</MDBCardText>
        <MDBCardText>Email ID : {docData.email}</MDBCardText>
        <hr className="hr" />
        <MDBCardTitle><h4>Consultation Timings:</h4></MDBCardTitle>
        <MDBCardText> {docData.available_hours}</MDBCardText>
        <MDBCardText>                    {
                      docData.available_days?.map(item => (
                        <p className='d-inline'>| {item} |</p>
                      ))
                    }</MDBCardText>
                    <hr className="hr" />
      </MDBCardBody>
    </MDBCard>
    <h3 style={{color:'darkblue'}} className='m-4'>Insightful Doctor Reviews</h3>
    <hr className="hr" />
    <div className='m-5'>

      {
        docData.reviews?.map(item=>(
          <MDBCard background='light' className='mb-3'>
          <MDBCardHeader>{item.patient_name} | {item.date}</MDBCardHeader>
          <MDBCardBody>
            <MDBCardText className='text-center'>
              {item.comments} <br />
              -⭐Rating : {item.rating}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        ))
      }
    </div>
    </div>
  );
}

export default Doddetails;
