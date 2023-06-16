import React from 'react'
import { NavLink } from 'react-router-dom'
const NotePage = () => {
    return (
        <div className='text-center pb-2' style={{ backgroundColor: 'black' }}>
            <img className='d-flex m-auto img-thumbnail' style={{ height: '70vh', paddingTop: '30px', paddingBottom: '24px' }} src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" />
            <NavLink className='text-white text-decoration-none' to="/main/home">
                BackToHomePage
            </NavLink>
        </div>

    )
}

export default NotePage