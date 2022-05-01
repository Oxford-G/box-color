import './App.css';

const Button = ({handle, name, color}) => {
  let buttonn = 'button'
  buttonn = color === 'red' ? `${buttonn} redd` : `${buttonn}`;
  buttonn = color === 'blue' ? `${buttonn} bluee` : `${buttonn}`;
  buttonn = color === 'brown' ? `${buttonn} brownn` : `${buttonn}`;
  return (
  <button type='button' className={buttonn} onClick={()=>{handle(color)}}>{name}</button>
)}

export default Button;
