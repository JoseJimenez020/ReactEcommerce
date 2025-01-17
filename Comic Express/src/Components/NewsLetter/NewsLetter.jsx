import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
    return (
        <div className='newsLetter'>
            <h1>Get Exclussive Offers on your Email</h1>
            <p>Subscribe to our newsLetter and stay updated</p>
            <div>
                <input type='email' placeholder='Please enter a valid email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default NewsLetter