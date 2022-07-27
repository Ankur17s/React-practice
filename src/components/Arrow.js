import React from 'react'
import "../Styles/Arrow.css"
function Arrow() {
    return (
        <>
            <div className='main_div'>

                <div className='arr_div'>
                    <img src='images/arrow.svg' />
                </div>

                <div className='content_section'>
                    <h1><span>Pay only after getting</span> placed</h1>
                    <p>Get placed in the company and payback to us on the terms and conditions as per ISA.</p>

                    <div className='apply-btn'>
                        <button>APPLY NOW</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Arrow