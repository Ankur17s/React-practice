import React from 'react'
import "../Styles/FormContent.css"

function FormContent() {
    return (
        <>

            <div className='parent_container'>
                {/* <div><img src='images/bg-img.png'/></div> */}
                <div className='first_container'>

                    <div className='stack_cont'>
                        <h1><span>Become a </span> Full Stack</h1>
                        <h1>Developer</h1>
                    </div>

                    <div className='learn_cont'>
                        <h2>Learn. Earn. It's Your Turn.</h2>
                        <h2>0% Upfront fee</h2>
                    </div>

                    <div className='guarentee_cont'>
                        <h3>Guaranteed Placement</h3>
                    </div>

                    <div className='btn-cont_1'>
                        <button>APPLY NOW</button>
                    </div>

                </div>


                <div className='form_container'>
                    <div className='form_heading'>
                        <h2>Book a <span>FREE</span> trial class.</h2>
                    </div>
                    <div className='input_cont'>
                        <span>Email ID <star>*</star></span>
                        <br />
                        <input type="text" />
                    </div>

                    <div className='input_cont'>
                        <span>Graduation Year <star>*</star></span>
                        <br />
                        <input type="number" />
                    </div>

                    <div className='input_cont'>
                        <span>Mobile Number <star>*</star></span>
                        <br />
                        <input type="number" />
                    </div>

                    <div className='btn-cont_2'>
                        <button>BOOK YOUR LIVE SESSION</button>
                    </div>
                </div>

                <div className='img_cont'>
                    <img src='images/whatsapp_icon.png' />
                </div>
            </div>
        </>
    )
}

export default FormContent