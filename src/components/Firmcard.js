import React, {useContext} from 'react'
import { MainContext } from '../context'
import './firmcard.css'

function Firmcard({firm}) {

  class New_item{
    constructor(firm_name, current_price, counter, total){
      this.name = firm_name;
      this.current_price = current_price;
      this.counter = counter;
      this.total = total
    }
  }
  const updateOldInvest = (data, current_price, firm_name, counter, total, idx) =>{
    let new_item =new New_item(firm_name, current_price, counter, total);
    data.splice(idx,1);
    data.unshift(new_item)
    setPortfolio(data)
  }
  const addingNewInvest = (data, current_price, firm_name) =>{
    let new_item =new New_item(firm_name, current_price, 1, current_price);
    data.push(new_item);
    setPortfolio(data);
  }


  const {balance,portfolio, setBalance, setPortfolio} = useContext(MainContext);

   const adding_portfolio = (e) =>{
      var firm_name = e.target.dataset.name
      var current_price = e.target.dataset.value
        if(balance < current_price){
          alert('Yeterli bakiye bulunmamaktadır')
        }
        else{
          let data = [...portfolio]
          var counter, total, current_price
          var is_available = false;
            if (data.length > 0) {
              data.forEach((element, idx) =>{
                if(firm_name === element.name){
                  counter = element.counter + 1;
                  total = current_price * counter
                  updateOldInvest(data, current_price, firm_name, counter ,total, idx);
                  is_available = true;
                }
                if(data.length-1 === idx && is_available=== false){
                  addingNewInvest(data, current_price, firm_name)
                }
              })

            }
            else{
                addingNewInvest(data,current_price, firm_name)
            }

            setBalance(balance -current_price)
            }



   }
    return (
    <div className='col-4 my-4'>
        <div className='card d-flex justify-content-around'>
          <div className='card_header'>
            <img src={firm.logo}></img>
            
            </div>
          <div className='card_body'>
            <div className='firm_title'>{firm.title}</div>
            <div className='firm_value'>{firm.value}</div>
          </div>
          <div className='card_footer'>
            <button className='w-100 py-2 text-center' data-name={firm.title} data-value={firm.value} onClick={e => {adding_portfolio(e)}}>Buy</button>
          </div>
        </div>
    </div>
  )
}

export default Firmcard