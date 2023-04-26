import React from 'react';

function Button(props: any) {
   
   return (
      <button onClick={props.logout} className={props.style}>{props.title}</button>
   );
}
 
export default Button;
 