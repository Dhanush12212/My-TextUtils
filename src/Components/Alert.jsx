import React from 'react'; 

function Alert(props) { 
const capitalize=(word)=>
{
  const lower=word.toLowerCase();
  //slice will consider the next all elements
  return lower.charAt(0).toUpperCase()+lower.slice(1);
}

  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mb-0 absolute w-full`} role="alert"> 
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" clasNames="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert