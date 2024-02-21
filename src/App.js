 import { createContext, useEffect, useState } from 'react';
import './App.css';
import Forms from './components/Forms/Forms';
import NewItems from './components/NewItems/NewItems';
import React from 'react';



function App() {

const [orderArray,setorderArray] = useState([])

  useEffect(()=>{
    let lsData=localStorage.getItem('key')
      if(lsData)
    {
      lsData=JSON.parse(lsData);
      setorderArray(lsData);
    }
  },[])


  function addOrder(data){
  
  if(localStorage.getItem('key'))
  {
    let lsData = localStorage.getItem('key')
    lsData= JSON.parse(lsData);
    lsData=[...lsData,data];
    localStorage.setItem('key', JSON.stringify(lsData));
  }
  else{
    localStorage.setItem('key',JSON.stringify([data]))
  }
  setorderArray((prevorderArray)=>{ return [...prevorderArray, data]})
  }


  function resetList(data){
   setorderArray(data);
  }

  return (
<React.Fragment>
 <Forms data={addOrder}></Forms>
 <NewItems delete={resetList} data={orderArray}></NewItems>
 </React.Fragment>
  )
}

export default App;
