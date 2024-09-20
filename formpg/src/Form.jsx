
// import React, { useState } from 'react'

// function Form() {
//   const [name,setName]=useState('');
//   const [email,setEmail]=useState('');
//   const [password,setPassword]=useState('');
//   const handleSubmit=(e)=>{
//     e.preventDefult();
//     console.log({name,email,password});
//   }
//   return (
//     <form className="flex flex-col justify-center items-center h-screen space-x-4" onSubmit={handleSubmit}>
//     <div className='mt-2'>
//       <h2>Registration form</h2>
//     </div>
//     <div className='flex flex-col '>
//       <label>
//         Enter your name:
//       <input className="border p-2" type="text" placeholder="Enter your name"
//       value={name} 
//       onChange={(e)=>
//         setName(e.target.value)
//       }
//       required/>
//       </label>
//       <label>
//         Enter your email:
//       <input className="border p-2 mt-2" type="email" placeholder="Enter your email"
//       value={email}
//       onChange={(e)=>
//         setEmail(e.target.value)
//       }
// required
//        />
//        </label>
//        <label>
//         Enter your password:
//       <input className="border p-2 mt-2" type="password" placeholder="Enter your password" 
//       value={password}
//       onChange={(e)=>
//         setPassword(e.target.value)
//       }
// required
//       />
//       </label>
//     </div>
//     <div className='mt-4'>
//       <button className="bg-blue-500 text-white p-2">Submit</button>
//     </div>
//   </form>
  
//   )
// }

// export default Form
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false); // To track form submission

  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed typo here, it's preventDefault not 'preventDefult'
    console.log({ name, email, password });
    
    // Show the success message on submission
    setSubmitted(true);

    // Clear form inputs
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className='mt-2'>
          <h2>Registration Form</h2>
        </div>
        <div className='flex flex-col'>
          <label>
            Enter your name:
            <input
              className="border p-2"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Enter your email:
            <input
              className="border p-2 mt-2"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Enter your password:
            <input
              className="border p-2 mt-2"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div className='mt-4'>
          <button className="bg-blue-500 text-white p-2">Submit</button>
        </div>
      </form>

     
      {submitted && (
        <div className="mt-4 text-green-500">
          Successfully submitted!
        </div>
      )}
    </div>
  );
}

export default Form;

