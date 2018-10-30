import React from 'react'
// todo table row and not just checkbox!
const SourceCheckbox =  (props) => {
    return (
        <React.Fragment>
            <tr>
                <td>
                    <input className="formCheckInput" type="checkbox" onChange={props.onChange} checked={props.checkVal} value={props.val} />
                </td>
                <td>{props.source.name}</td>
                <td>{props.category}</td>
                <td>{props.description}</td>
                <td><a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a></td>
            </tr>
        </React.Fragment>
    );}

export default SourceCheckbox;
