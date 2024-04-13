import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
              <MDBNavbar light bgColor='light' className='fixed-top navbar'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://th.bing.com/th/id/OIP.uYnfKVdkzEcIis1azsNxuQHaHa?rs=1&pid=ImgDetMain'
              height='30'
              alt=''
              loading='lazy'
            />
            <h2 style={{color:'darkblue'}}>MEDCENTER</h2>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Header