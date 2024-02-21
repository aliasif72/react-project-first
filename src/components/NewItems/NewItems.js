import Card from "../../UI/Card/Card";
import ListItems from "../LisItems/ListItems";

function NewItems(props){
    
    if(props.data.length>0)
    {
return(
<Card className="order-container">
<h1>Orders</h1>
    <h3>Table 1</h3>
    <ul>
    {props.data.map((ele)=>{
    if(ele.inputTable==='Table 1') {
        return <ListItems uid= {ele.inputOrderId} deleteOrder={props.delete}  table={ele.inputTable} price={ele.inputPrice} dish={ele.inputDish}></ListItems>
    }
    })}
    </ul>

    <h3>Table 2</h3>
    <ul>
    {
    props.data.map((ele)=>{
    if(ele.inputTable==='Table 2') {
       return <ListItems uid= {ele.inputOrderId} deleteOrder={props.delete} table={ele.inputTable} price={ele.inputPrice} dish={ele.inputDish}></ListItems>
    }
    })
    }
    </ul>

   <h3>Table 3</h3>
   <ul>
   {props.data.map((ele)=>{
    if(ele.inputTable==='Table 3') {
        return <ListItems uid= {ele.inputOrderId} deleteOrder={props.delete}  table={ele.inputTable} price={ele.inputPrice} dish={ele.inputDish}></ListItems>
    }
    })}
    </ul>
</Card>
)}
}

export default NewItems;