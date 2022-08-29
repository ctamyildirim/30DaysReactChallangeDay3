import React, {useState} from 'react';
import {MainContext} from './context';

/* Components */
import Header from './components/Header';
import Wallet from './components/Wallet';
import Portfolio from './components/Portfolio';
import Companies from './components/Companies';


function App() {


const [firms , setFirms] = useState([
  {
    id : 0,
    title : 'Arçelik',
    value : 34,
    currency : 'TL',
    logo : 'https://sagliklimarkalar.com/wp-content/uploads/2021/01/maxresdefault.jpg' 
  },
  {
    id : 1,
    title : 'Vestel',
    value : 43,
    currency : 'TL',
    logo : 'https://www.izmir-onlineservis.com/wp-content/uploads/2017/10/vestel-logo-banner.jpg' 
  },
  {
    id : 2,
    title : 'LG',
    value : 53,
    currency : 'TL',
    logo : 'https://gunesyilmaz.com/wp-content/uploads/2021/07/LG-Logo.jpg' 
  },
  {
    id : 3,
    title : 'Siemens',
    value : 45,
    currency : 'TL',
    logo : 'https://eitrawmaterials.eu/wp-content/uploads/2018/10/Siemens-Logo.png' 
  },
  {
    id : 4,
    title : 'Samsung',
    value : 34,
    currency : 'TL',
    logo : 'https://ipa.news/tr/wp-content/uploads/2018/12/Samsung-Logo-1.jpg' 
  },
  {
    id : 5,
    title : 'Bosch',
    value : 23,
    currency : 'TL',
    logo : 'https://marka-logo.com/wp-content/uploads/2020/08/Bosch-Logo-1981-2001.jpg' 
  },
])

const [balance , setBalance] = useState(1000);
const [portfolio, setPortfolio] = useState([]);


const data = {
  firms, setFirms,
  balance, setBalance,
  portfolio, setPortfolio,

}

  return (
      <MainContext.Provider value={data}>
        <Header></Header>
        <Wallet></Wallet>
        <Portfolio></Portfolio>
        <Companies></Companies>
      </MainContext.Provider>
  );
}

export default App;
