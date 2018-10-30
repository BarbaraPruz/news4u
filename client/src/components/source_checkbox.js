import React from 'react';
// todo table row and not just checkbox!
const SourceCheckbox =  (props) => {
    console.log ("Source checkbox",props);
    return (
        <React.Fragment>
            <tr>
                <td>
                    <input className="formCheckInput" type="checkbox" onChange={props.onChange} checked={props.checkVal} value={props.val} />
                </td>
                <td>{props.source.name}</td>
                <td>{props.source.category}</td>
                <td>{props.source.description}</td>
                <td><a href={props.source.url} target="_blank" rel="noopener noreferrer">{props.source.url}</a></td>
            </tr>
        </React.Fragment>
    );}

export default SourceCheckbox;
