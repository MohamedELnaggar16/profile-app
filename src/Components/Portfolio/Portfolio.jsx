import React, { Component } from 'react'
import styles from './Portfolio.module.css'
import img1 from '../Images/cabin.png'
import img2 from '../Images/cake.png'
import img3 from '../Images/circus.png'
import img4 from '../Images/game.png'
import img5 from '../Images/safe.png'
import img6 from '../Images/submarine.png'

export default class Portfolio extends Component {
  render() {
    return (
      <>
      
      <section className='my-5' id='portfolio'>

        <h2 className='fs-1 text-center'> PORTFOLIO </h2>

        <div className="container">
          <div className="row">
           <div className="col-md-4 my-3">
             <div className={styles.box}>
                <img src={img1} alt="" />
                  <div className={styles.boxLayer}>
                    <div className={styles.plusIcon}>
                     <i className="fa-solid fa-plus fa-xl " data-bs-toggle="modal" data-bs-target="#exampleModal1"></i>
                    </div>                 
                  </div>
             </div>
           </div>
           <div className="col-md-4 my-3">
             <div className={styles.box}>
                <img src={img2} alt="" />
                  <div className={styles.boxLayer}>
                    <div className={styles.plusIcon}>
                     <i className="fa-solid fa-plus fa-xl"data-bs-toggle="modal" data-bs-target="#exampleModal2"></i>
                    </div>                
                  </div>
             </div>
           </div>
           <div className="col-md-4 my-3">
             <div className={styles.box}>
                <img src={img3} alt="" />
                  <div className={styles.boxLayer}>
                    <div className={styles.plusIcon}>
                     <i className="fa-solid fa-plus fa-xl "data-bs-toggle="modal" data-bs-target="#exampleModal3"></i>
                    </div>                
                  </div>
             </div>
           </div>
           <div className="col-md-4 my-3">
             <div className={styles.box}>
                <img src={img4} alt="" />
                  <div className={styles.boxLayer}>
                    <div className={styles.plusIcon}>
                     <i className="fa-solid fa-plus fa-xl "data-bs-toggle="modal" data-bs-target="#exampleModal4"></i>
                    </div>                 
                  </div>
             </div>
           </div>
           <div className="col-md-4 my-3">
             <div className={styles.box}>
                <img src={img5} alt="" />
                  <div className={styles.boxLayer}>
                    <div className={styles.plusIcon}>
                     <i className="fa-solid fa-plus fa-xl "data-bs-toggle="modal" data-bs-target="#exampleModal5"></i>
                    </div>                 
                  </div>
             </div>
           </div>
           <div className="col-md-4 my-3">
             <div className={styles.box}>
                <img src={img6} alt="" />
                  <div className={styles.boxLayer}>
                    <div className={styles.plusIcon}>
                     <i className="fa-solid fa-plus fa-xl "data-bs-toggle="modal" data-bs-target="#exampleModal6"></i>
                    </div>
                  </div>
             </div>
           </div>
         </div>
        </div>
      </section>

     <section>
     {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
  
        <h2 className="modal-title ms-auto" id="exampleModalLabel">Capin</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">
       <img src={img1} alt="" className='w-100'/>
  <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat ratione dolores dignissimos molestias deserunt, corporis quibusdam, debitis, beatae quasi earum! Nesciunt sed saepe .</p>
      </div>
      <div className="text-center my-2">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
  
        <h2 className="modal-title ms-auto" id="exampleModalLabel">Cake</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">
       <img src={img2} alt="" className='w-100'/>
  <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat ratione dolores dignissimos molestias deserunt, corporis quibusdam, debitis, beatae quasi earum! Nesciunt sed saepe .</p>
      </div>
      <div className="text-center my-2">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
  
        <h2 className="modal-title ms-auto" id="exampleModalLabel">Circus</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">
       <img src={img3} alt="" className='w-100'/>
  <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat ratione dolores dignissimos molestias deserunt, corporis quibusdam, debitis, beatae quasi earum! Nesciunt sed saepe .</p>
      </div>
      <div className="text-center my-2">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
  
        <h2 className="modal-title ms-auto" id="exampleModalLabel">Game</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">
       <img src={img4} alt="" className='w-100'/>
  <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat ratione dolores dignissimos molestias deserunt, corporis quibusdam, debitis, beatae quasi earum! Nesciunt sed saepe .</p>
      </div>
      <div className="text-center my-2">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
  
        <h2 className="modal-title ms-auto" id="exampleModalLabel">Safe</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">
       <img src={img5} alt="" className='w-100'/>
  <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat ratione dolores dignissimos molestias deserunt, corporis quibusdam, debitis, beatae quasi earum! Nesciunt sed saepe .</p>
      </div>
      <div className="text-center my-2">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
  
        <h2 className="modal-title ms-auto" id="exampleModalLabel">Submarine</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">
       <img src={img6} alt="" className='w-100'/>
  <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat ratione dolores dignissimos molestias deserunt, corporis quibusdam, debitis, beatae quasi earum! Nesciunt sed saepe .</p>
      </div>
      <div className="text-center my-2">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
     </section>

      
      </>
    )
  }
}
