import './Button.css';

function Button(props){

return(
    <button className={props.className} disabled={props.disabled} onClick={props.onClick} type={props.type}>{props.text}</button>
)
}

export default Button;