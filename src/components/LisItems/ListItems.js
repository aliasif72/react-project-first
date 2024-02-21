import Button from "../../UI/Button/Button";

function ListItems(props){


  function resetList(){
    let orderArray= localStorage.getItem('key');
    orderArray=JSON.parse(orderArray);
    const newList = orderArray.filter((item) => item.inputOrderId !== props.uid);
    props.deleteOrder(newList);
    localStorage.setItem('key', JSON.stringify(newList));
  
  }
  
    return (   
      
  <li key={props.uid}> {props.price}  - {props.table} -  {props.dish}<Button className="delete" type="button" onClick={resetList} text="Delete Order"  ></Button></li>

    )
}

export default ListItems;