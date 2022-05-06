import React from 'react';

function SignupFormUser() {
  return (
    <div className="row justify-content-center p-5 main">
  <form className="col-5 border rounded-3 p-3 signup-user">
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
  <button type="submit" className="btn btn-secondary mt-2">Submit</button>
</form>
    </div>
  )
}

export default SignupFormUser;