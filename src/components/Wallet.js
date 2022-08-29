import React,{useContext} from 'react'
import {MainContext} from '../context'

function Wallet() {

  const {balance} = useContext(MainContext)

    return (
      <div className='container'>
        <div className='display-4'>Hesabınızda bulunan tutar : {balance}</div>
      </div>
  )
}

export default Wallet