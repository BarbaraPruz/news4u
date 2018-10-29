import React from 'react'

const SourceCheckbox =  (props) => {
    console.log("CB", props.checkVal);
    return (
    <div className="checkbox">
        <label><input type="checkbox" onChange={props.onChange} checked={props.checkVal} value={props.val}  />{props.source.name}</label>
    </div>
    );}

export default SourceCheckbox;
