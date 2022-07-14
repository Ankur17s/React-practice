import React from 'react'
import '../Styles/Header.css'

function Header() {
  return (
    <>
      <div className='header-container'>

        <div className='image-container'>
          <img src='/images/ankur (2).png' alt='' className='logo_img' />
        </div>

        <div className='input-cont'>
          <input type="text" placeholder="Candidates search..." />
          <div className='line-cont'>
            <img src='/images/lines.png' alt='' className='line'/>
          </div>
        </div>

        <div className='msg-cont'>
          <img src='/images/msg.png' alt='' className='msg_img' />
          <span>Message</span>
        </div>

        <div className='notification-cont'>
          <img src='/images/notification.png' alt='' className='noti_img' />
          <span>Notification</span>
        </div>

        <div className='setting-cont'>
          <img src='/images/settings-icon.png' alt='' className='setting_img' />
          <span>Setting</span>
        </div>

      </div>
    </>
  )
}

export default Header