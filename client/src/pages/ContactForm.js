import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [btnText, setBtnText] = useState('Submit');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zrhgbbw', 'template_pclyt0o', form.current, 'ueI3w2L6G7N_KAGOS')
        .then((result) => {
            setBtnText('Your message has been sent!')
            setTimeout(() => {
                setBtnText('Submit')
            }, 5000);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset();
    };

    return (
    <div className="row justify-content-center main p-5">
    <img className='col-12 col-sm-6' id="background-contact" src={require('../images/5c3d49967e3aa842c876a81d15f01931f8f3644778d57466c0c35f9a143eb8f1df1cb83656335d64f648db9dda63a60828632569629a01a39e55eb_1280.jpg')} alt="background" />
  <form onSubmit={sendEmail} ref={form} className="col-12 col-sm-6 border rounded-3 p-3 contact-form">
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" name='email_address' required className="form-control email" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="form-group mt-2">
    <label htmlFor="exampleFormControlInput1">Full Name</label>
    <input type="name" name="name" required className="form-control" id="exampleFormControlInput1" placeholder="Ex. Fox Mulder" />
  </div>
  <div className="form-group mt-2">
    <label htmlFor="exampleFormControlTextarea1">Send a message</label>
    <textarea className="form-control" required name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-secondary mt-2" id='submit-button'>{btnText}</button>
</form>
    </div>
  )
}

export default Contact