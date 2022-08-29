import React, {useContext} from 'react'
import { MainContext } from '../context'

function Portfolio() {
    
const {portfolio} = useContext(MainContext)
    
  return (
    <div className='container mt-4'>
      <div className='row m-0'>
        <div className='col-12'>
          <table className='table w-100'>
            <thead>
              <tr>
                  <th>#</th>
                  <th>Firma Adı</th>
                  <th>Hisse Alınan Tutar</th>
                  <th>Adet</th>
                  <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((item,idx)=>{
                return(
                  <tr key={idx}> 
                      <td>{idx+1}</td>
                      <td>{item.name}</td>
                      <td>{item.current_price}</td>
                      <td>{item.counter}</td>
                      <td>{item.total}</td>
                  </tr>
                  )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Portfolio