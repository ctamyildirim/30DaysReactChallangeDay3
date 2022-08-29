import React, {useContext} from 'react'
import { MainContext } from '../context'
import Firmcard from './Firmcard'


function Companies() {

const {firms} = useContext(MainContext)

  return (
    <div className='container'>
      <div className='row m-0'>
        {
          firms.map((firm,idx) => {
            return(
              <Firmcard firm={firm} key={idx}></Firmcard>
            )
          })
        }
      </div>
    </div>
  )
}

export default Companies