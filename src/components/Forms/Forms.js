import Card from "../../UI/Card/Card"
import Button from "../../UI/Button/Button";
import {useEffect, useState} from 'react';
import './Forms.css';

function Forms(props){
 
    const[red,setRed]=useState({
        id:'a',
        dish:'a',
        price:'a',
        table:'a'
       });

    const[isValid,setisValid]=useState(false);

    useEffect(()=>{
        checkValid();
    })
    
    const[data,setData]=useState({
    inputOrderId:'',
    inputPrice:'',
    inputDish:'',
    inputTable:''
    })

    function checkValid(){
    const isTrue = Object.values(red).every(value => value === 'false')
    if(isTrue) 
    {
    setisValid(true)
    }
    else{
    setisValid(false)
     }
    }


function orderIdHandler(event){
      (event.target.value < 1) ?  setRed((prevRed)=> {
         return { ...prevRed,id:'true' }}) : setRed((prevRed)=> {
            return { ...prevRed,id:'false' }});
     setData((prevData)=> {
        return { ...prevData,inputOrderId:event.target.value }
           })
}

function priceHandler(event){
   (event.target.value < 50) ? setRed((prevRed)=> {
    return { ...prevRed,price:'true'}}) : setRed((prevRed)=> {
        return { ...prevRed,price:'false' }});
setData((prevData)=> {
    return { ...prevData,inputPrice:event.target.value }
})

}

function dishHandler(event){
    (event.target.value.trim().length<3)  ? setRed((prevRed)=> {
        return { ...prevRed,dish:'true' }}) : setRed((prevRed)=> {
            return { ...prevRed,dish:'false'}});
    setData((prevData)=> {
        return { ...prevData,inputDish:event.target.value }
    })

    }

function tableHandler(event){
    (event.target.value.trim().length===0) ? setRed((prevRed)=> {
        return { ...prevRed,table:'true' }}) :  setRed((prevRed)=> {
            return { ...prevRed,table:'false' }}) ;
        setData((prevData)=> {
        return { ...prevData,inputTable:event.target.value }
        })

        }

function submitHandler(event){
    event.preventDefault();
     props.data(data);
     setData({
        inputOrderId:'',
        inputPrice:'',
        inputDish:'',
        inputTable:''
     })
}

return(
<Card className="form-container">
<form  onSubmit={submitHandler}>
<label>Unique Order ID:</label>
<input className={red.id} type="number" name="orderID" value={data.inputOrderId}  onChange={orderIdHandler} />
<label>Choose Price:</label>
<input  className={red.price} type="number"  name="price" value={data.inputPrice} onChange={priceHandler}/>
<label>Choose Dish:</label>
<input  className={red.dish} type="text"  name="dish" value={data.inputDish}  onChange={dishHandler}/>
<label>Choose a Table:</label>
<select value={data.inputTable} className={red.table} name="tables" onChange={tableHandler}>
<option value="" >  </option>    
<option value="Table 1">Table 1</option>
<option value="Table 2">Table 2</option>
<option value="Table 3">Table 3</option>
</select>
<Button className="submit" type="submit" text="Add Bill" disabled={!isValid}/>
</form>
</Card>
)
}

export default Forms