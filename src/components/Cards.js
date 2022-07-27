import React from 'react'
import "../Styles/Cards.css"

function Cards() {
    return (
        <div className='wrapper'>

            <div className='card_heading'>
                <h1>How Does It <span>Work?</span></h1>
            </div>

            <div className='card_flex'>

                <div className='card_container'>

                    <div className='flex_card_img'>
                        <div className='card_img'>
                            <img src='images/upFront.png' />
                        </div>
                        <div className='card_head'>
                            <h2>Zero UpFront Fee</h2>
                        </div>
                    </div>

                    <div className='list_items'>
                        <ul>
                            <li>Avail the best programming course towards your upward career path</li>
                            <li>Pay absolutely nothing until you get hired</li>
                        </ul>
                    </div>
                </div>

                <div className='card_container'>

                    <div className='flex_card_img'>
                        <div className='card_img2'>
                            <img src='images/gjp-study.png' />
                        </div>
                        <div className='card_head'>
                            <h2>Study with Guaranteed Job Program</h2>
                        </div>
                    </div>
                    <div className='list_items'>
                        <ul>
                            <li>Get equipped with the highest paying skills in demand</li>
                            <li>Boost your career with the expert mentorship.</li>
                        </ul>
                    </div>
                </div>

                <div className='card_container'>

                    <div className='flex_card_img'>
                        <div className='card_img2'>
                            <img src='images/gjp-assistance.png' />
                        </div>
                        <div className='card_head'>
                            <h2>Guaranteed Placement Assistance.</h2>
                        </div>
                    </div>
                    <div className='list_items'>
                        <ul>
                            <li>Get interviewed by the best recruiters from the tech giants.</li>
                            <li>Stay ahead of the pack by earning a lucrative salary.</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cards