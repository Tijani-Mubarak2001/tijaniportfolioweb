import React from 'react';
import Contactitem from '../Components/Contactitem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle'

function ContactPage(){
    return(
        <div>
            <div className="title">
                <Tittle title={'My Contacts'} span={'My Contacts'}/>
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3963.220761094791!2d3.364005349268927!3d6.619474623855753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1621097059153!5m2!1sen!2sng" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <Contactitem icon={phone} text1={'08165747644'} text2={'09059136992'} title={'Phone'}/>
                    <Contactitem icon={email} text1={'tijanimubarak2001@gmail.com'} text2={'mubaraktijani20@gmail.com'} title={'Email'}/>
                    <Contactitem icon={location} text1={'11, Akin Tijani Street Magodo, Lagos, Nigeria'} text2={''} title={'Address'}/>
                </div>
            </div>
        </div>
    )

}

export default ContactPage;