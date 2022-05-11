import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER_PETOWNER } from '../utils/mutations';

function SignupFormUser() {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [addPetOwnerUser] = useMutation(ADD_USER_PETOWNER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addPetOwnerUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        role: "PetOwner"
      },
    });
    const token = mutationResponse.data.addPetOwnerUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  return (
    <div className="row d-flex justify-content-around p-3 main">
      <Link to="/login-user">← Go to Login</Link>
    <div className="col-10 col-sm-5">
    <h1>Create a new account</h1>
  <form onSubmit={handleFormSubmit}  className="border rounded-3 p-3 signup-user">
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" name='email' required className="form-control email" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange}  />
  </div>
  <div className="form-group mt-2">
    <label htmlFor="exampleFormControlInput2">Username</label>
    <input type="username" name="username" required className="form-control" id="exampleFormControlInput2" placeholder="Enter your username"  onChange={handleChange} />
  </div>
  <div className="form-group mt-2">
    <label htmlFor="exampleFormControlInput2">Password</label>
    <input type="password" name="password" required className="form-control" id="exampleFormControlInput3" placeholder="Enter your password" onChange={handleChange}  />
  </div>
  <button id='submit-button' type="submit" className="btn btn-secondary mt-2">Submit</button>
</form>
</div>
<img className='col-12 col-sm-6 p-0' id="background-signup" src={require('../images/blake.jpg')} alt="background" />
    </div>
    
  )
}

export default SignupFormUser;