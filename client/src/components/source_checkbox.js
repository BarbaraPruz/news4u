import React from 'react';
import styled from 'styled-components';

const TableData1 = styled.td`
    margin: 2px;
    text-align: center;
`;



const SourceCheckbox =  (props) => {
    return (
        <React.Fragment>
            <tr>
                <TableData1>
                    <input className="formCheckInput" type="checkbox" onChange={props.onChange} checked={props.checkVal} value={props.val} />
                </TableData1>
                <td>{props.source.name}</td>
                <td>{props.source.category}</td>
                <td>{props.source.description}</td>
                <td><a href={props.source.url} target="_blank" rel="noopener noreferrer">{props.source.url}</a></td>
            </tr>
        </React.Fragment>
    );}

export default SourceCheckbox;
