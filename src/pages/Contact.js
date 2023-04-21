import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import './style/page.css'

const Contact = () => {

  const experince = [
    { id: 1, review: 'Good' },
    { id: 2, review: 'Very Good' },
    { id: 3, review: 'Excellent' },
    { id: 4, review: 'Great' },
  ]

  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    message: '',
    expericnce: ''
  })

  function handleChange(event){
       const { name, value } = event.target;
       setFormData({
        ...formData,
        [name]: value,
       })
  }

  const [ errors, setErrors ] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {};

    // Validate name
    if (!formData.name) {
      newErrors.name = "Invalideid Input";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Invalideid Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalideid Email";
    }

    // Validate message
    if (!formData.message) {
      newErrors.message = "Invalideid Message";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form data
      console.log(formData);
    }

    setTimeout(() => {
      setErrors(formData.name, formData.email, formData.message)
    }, 3000);
  }

const [check, setCheck] = useState()  

const handleCheck = (itemId) => {
  setCheck(itemId);

  setTimeout(() => {
    setCheck(null)
  }, 3000);
}

  return (
    <div className='container'>
      <h1 className='heading'>Contact Form</h1>
      <div className="contact-form">
         <div className='contact-image'>
          <img src="../image/contactForm.svg" alt="" />
         </div>
         <div className='contact-validation'>
          <form onSubmit={handleSubmit}>
               <div className='contact-lable-input'>
                   <input className='contact-input' type="text" value={formData.name} name='name' onChange={handleChange} placeholder='Your Name'  />
               </div>
               <div className='contact-lable-input'>
                   <input className='contact-input' type="text" value={formData.email}  name='email' onChange={handleChange}  placeholder='Your Email'/>
               </div>
               <div className='contact-lable-input'>
                   <input className='contact-input' type="text" value={formData.message} name='message' onChange={handleChange}  placeholder='Your Message'/>
               </div>
               <div className='contact-lable-input'>
                  <h5 className='context-lable-title'>Experince</h5>
                   <ul className='contact-experince-list'>
                     {experince.map((list)=> <li className='contact-experince-button' 
                     key={list.id} 
                     onClick={() => handleCheck(list.id)}>
                      {check === list.id ? (<CheckIcon />) : (list.review)}
                      </li> )}
                   </ul>
               </div>
               <button className='contact-lable-button' title='submit'>Share Your Feedback</button>
          </form>
         </div>
         <div className='error-container'>
              <div>
                {errors.name && <span className="error"><ErrorIcon />{errors.name}</span>} 
                {errors.email && <span className="error"><ReportProblemIcon />{errors.email}</span>} 
                {errors.message && <span className="error"><AnnouncementIcon />{errors.message}</span>} 
              </div>
           </div>
      </div>
    </div>
  )
}

export default Contact