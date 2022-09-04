import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <section className='bg-success text-white' id='about'>
        <div className='my-5'>
         <h2 className='fs-1 text-center py-5'>About</h2>
         <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex w-75 m-auto pb-3">
<p className='w-50 px-3'>
Freelancer is a free bootstrap created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
</p>
<p className='w-50 px-3'>
You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
</p>
                </div>
            </div>
         </div>
        </div>
      </section>
    )
  }
}
