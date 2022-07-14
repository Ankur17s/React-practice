import React from 'react'
import "../Styles/Card.css"
import data from '../Data'

function Card() {
  return (
    <>
    {
      data.map((ele) => {
        return(
          <div className='card-container'>

        <div className='host-image'>
          <img src={`../images/${ele.coverImage}`} className='host' alt='' />
        </div>

        <div className='details'>
          <button>View Details</button>
        </div>

        <div className='heading-cont'>
          <h3>{ele.name}</h3>
          <span>{ele.price}</span>
        </div>

        <div className='present-post'>
          <div className='img-1'>
            <img src={`../images/${ele.logo}`} alt='' className='cric-img' />
          </div>
          <div className='designation'>
            <h4>{ele.title}</h4>
            <span>{ele.experience}</span>
          </div>
        </div>

        <div className='present-post'>
          <div className='img-1'>
            <img src='/images/khel-ratna-1.png' alt='' className='cric-img' />
          </div>
          <div className='designation'>
            <h4>{ele.nick}</h4>
            <span>{ele.award}</span>
          </div>
        </div>

        <div className='present-post'>
          <div className='img-1'>
            <img src='/images/location.png' alt='' className='cric-img' />
          </div>
          <div className='location'>
            <h4>{ele.location}</h4>
          </div>
        </div>

        <div className='description'>
          <p>{ele.descripion}<span>see more</span></p>
        </div>

      </div>
        )
      })
    }

    </>
  )
}

export default Card