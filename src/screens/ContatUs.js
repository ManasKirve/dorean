import React, { useEffect } from 'react';
import ContactUsNavbar from '../components/ContactUsNavbar'
import ContactUsForm from '../components/ContactUsForm'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContatUs = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh();
    };
  }, []);


  return (
    <div>
      <div className='background_gradient' ><ContactUsNavbar/></div>
      <div ><ContactUsForm/></div>
    </div>
  )
}

export default ContatUs
