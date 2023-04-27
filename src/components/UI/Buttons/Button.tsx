import React from 'react';

function Button(props: any) {
   
   return (
      <button onClick={props.action} className={props.style}>{props.title}</button>
   );
}
 
export default Button;
 