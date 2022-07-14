import React from 'react'
import "../Styles/SubHeader.css"

function SubHeader() {
    return (
        <>
            <div className='subHeader-container'>

                <div className='candidate-cont'>
                    <h3>Suggested candidates</h3>
                </div>

                <div className='job-post'>
                    <span>Post a Job</span>
                </div>
                
            </div>
        </>
    )
}

export default SubHeader