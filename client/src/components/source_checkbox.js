import React from 'react'

const SourceCheckbox =  (props) => {
    return (
    <div className="checkbox">
        <label><input className="formCheckInput" type="checkbox" onChange={props.onChange} checked={props.checkVal} value={props.val} />{props.source.name}</label>
    </div>
    );}

export default SourceCheckbox;
