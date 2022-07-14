import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <>
      <div className='footer-container'>

        <div className='home-cont'>
          <img src='/images/Home.png' alt='' className='home_img' />
          <span>Home</span>
        </div>

        <div className='home-cont'>
          <img src='/images/candidates.png' alt='' className='home_img' />
          <span>Candidates</span>
        </div>

        <div className='home-cont'>
          <img src='/images/explore.png' alt='' className='home_img' />
          <span>Explore</span>
        </div>

        <div className='home-cont'>
          <img src='/images/marketplace.png' alt='' className='home_img' />
          <span>Marketplace</span>
        </div>

        <div className='home-cont'>
          <img src='/images/profile.png' alt='' className='home_img' />
          <span>Profile</span>
        </div>



      </div>
    </>
  )
}

export default Footer