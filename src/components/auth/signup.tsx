import React, { useState } from 'react';

// Define an interface for the form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

// Define a functional component for the form
function Signup() {

     // Create a state variable for the form data
    const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: ''
  })

  // Create a handler function for the form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the form data, such as sending it to an API
    console.log(formData);
  };

  // Create a handler function for the input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the name and value of the input element
    const { name, value } = event.target;
    // Update the form data state with the new value
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default Signup