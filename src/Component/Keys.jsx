import React from "react";

function Keys(props){
    return <input className='key' type="button" value={props.value} onClick={props.onClick} />
}

export default Keys;