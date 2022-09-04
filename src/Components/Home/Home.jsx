import React, { Component } from 'react'
import avatarPhoto from '../Images/avataaars.svg'
export default class Home extends Component {
  render() {
    return (
      <>
      <header className='d-flex justify-content-center align-items-center bg-success vh-100 text-white'>
        <div className='text-center'>
          <img src={avatarPhoto} alt="" className='w-75'/>
          <h2 className='fs-4 mt-3'> START REACT</h2>
          <p className='fs-4 mt-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
      </>
    )
  }
}
