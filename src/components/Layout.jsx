import React from 'react';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
    <div className='empty'></div>
    <NavBar />
      <section id="banner">
        {/* <img /> */}
        <div className="banner-text">
          <h1>Learn Quran</h1>
          <p>my web</p>
          <div className="banner-btn">
            <a href="#">
              <span ></span>Find Out
            </a>
            <a href="#">
              <span ></span>Read More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
export default Layout
