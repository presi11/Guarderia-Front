import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <MDBFooter bgColor='warning' className='text-white text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow >
          <MDBCol lg='6' md='12' className='text-center mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
              atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
              <a   href="#!" role="button">
                <i  className="fab fa-twitter me-2 " >
                <FontAwesomeIcon icon={faTwitterSquare} size="2x"/> 
                </i>
              Twitter
              </a>
              </li>
              <li>
              <a   href="#!" role="button" color="#55acee">
                <i  className="fab fa-twitter me-2" >
                <FontAwesomeIcon icon={faFacebookSquare} size="2x"/> 
                </i>
              Facebook
              </a>
              </li>
              <li>
              <a   href="#!" role="button">
                <i  className="fab fa-twitter me-2" >
                <FontAwesomeIcon icon={faYoutubeSquare} size="2x" color="#ed302f"/> 
                </i>
              Youtube
              </a>
              </li>
              <li >
              <a   href="#!" role="button"  >
                <i backgroundcolor="#0082ca" className="fab fa-twitter me-2" >
                <FontAwesomeIcon icon={faInstagramSquare} size="2x"/> 
                </i>
              Instagram
              </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundcolor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;