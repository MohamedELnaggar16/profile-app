import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <>
      
     <section id='contact'>
        <h2 className='fs-1 text-center my-5'>Contact Me</h2>
        <form>
          <input type="text" className='form-control w-50 m-auto py-3 my-2' placeholder='Name'/>
          <input type="email" className='form-control w-50 m-auto py-3 my-2' placeholder='Email'/>
          <input type="number" className='form-control w-50 m-auto py-3 my-2' placeholder='Phone Number'/>
          <textarea type="textarea" className='form-control w-50 m-auto py-3 my-2' placeholder='Message'/>
        </form>
     </section>
        </>
    )
  }
}
