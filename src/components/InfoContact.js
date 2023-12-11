import React, { useState } from 'react';
import { CONTACT_IMAGE } from "../utils/constants";

const InfoContact = () => {
  // Create state variables for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Event handler functions to update the state when input values change
  const handleNameChange = (e) => {
    setName(e.target.value);
    
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  console.log(name,email,message)

  // Event handler for the submit button
  const handleSubmit = () => {
    // Perform any necessary submit logic here
    // Clear the input fields by setting their state to empty strings
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <div className='flex  justify-between'>
        <div className='ml-7 mt-5'>
          <div className='text-3xl font-bold'>Visit Us Or Call Us Today</div>
          <div className='text-3xl mt-6 mb-6'>Opening Hours</div>
          <div className='ml-3'>Mon:9am-8pm</div>
          <div className='ml-3'>Tues-Thurs: 9am-10pm</div>
          <div className='ml-3'>Fri:9am-7pm/Sat:8am-9pm</div>
          <div className='ml-3'>Sunday:Closed</div>
          <div className='mt-9 mb-4'>Contact:Catering@123</div>
          {/* Input fields with value prop and event handlers */}
          <input
            className="border border-black p-3 w-[50rem] mb-5 rounded-lg"
            placeholder='Name'
            value={name}
            onChange={handleNameChange}
          />
          <br></br>
          <input
            className="border border-black p-3 w-[50rem] mb-5 rounded-lg"
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
          <br></br>
          <input
            className="border border-black p-3 w-[50rem] mb-5 rounded-lg"
            placeholder='Message'
            value={message}
            onChange={handleMessageChange}
          />
          <br></br>
          <button className='bg-black text-white p-3 rounded-lg w-36' onClick={handleSubmit}>Submit</button>
        </div>
        {/* <div>Ye</div> */}
        <img className='mr-12 mt-5 w-[29rem]' src={CONTACT_IMAGE}/>
      </div>
    </div>
  )
}

export default InfoContact;
