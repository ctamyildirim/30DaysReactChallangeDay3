import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header_wrapper pt-4'>
      <div className='container d-flex justify-content-between mx-auto mt-4'>
        <div className='logo_inc d-flex align-items-end'>
          INVESTMENT  
        </div>        
        <div className='menu d-flex align-items-end'>
            <ul className='d-flex justify-content-center'>
              <li><a href='#'>Anasayfa</a></li>
              <li><a href='#'>Hakkımızda</a></li>
              <li><a href='#'>Hizmetlerimiz</a></li>
              <li><a href='#'>Referanslarımız</a></li>
              <li><a href='#'>İletişim</a></li>
            </ul>
        </div>
      </div>


    </div>
  )
}

export default Header