import React from 'react';
import '../styles/signupUser.css';

function SignupFormUser() {
  return (
    <div className="row d-flex justify-content-around p-3 main">
    <div className="col-10 col-sm-5">
    <h1>Creat a new account</h1>
  <form className="border rounded-3 p-3 signup-user">
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" name='email_address' required className="form-control email" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="form-group mt-2">
    <label htmlFor="exampleFormControlInput2">Username</label>
    <input type="username" name="username" required className="form-control" id="exampleFormControlInput2" placeholder="Enter your username" />
  </div>
  <div className="form-group mt-2">
    <label htmlFor="exampleFormControlInput2">Password</label>
    <input type="password" name="password" required className="form-control" id="exampleFormControlInput3" placeholder="Enter your password" />
  </div>
  <button id='submit-button' type="submit" className="btn btn-secondary mt-2">Submit</button>
</form>
</div>
<img className='col-12 col-sm-6 p-0' id="background-signup" src={require('../images/blake.jpg')} alt="background" />
    </div>
    
  )
}

export default SignupFormUser;