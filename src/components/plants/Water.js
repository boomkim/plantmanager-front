import React, { useState, useEffect } from "react";


function Water (props) {
    const waters = props.waters;
    let waterItems = <li>never</li>
    if (waters){
        waterItems = waters.map((water)=> <li key={water.toString()}>{water}</li>)
    }
    
    return (
    <div>
        언제줬더라
        <ul>{waterItems}</ul>
    </div>)
}


export default Water;