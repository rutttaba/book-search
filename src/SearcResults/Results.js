import React, { Component } from 'react';
import './Results.css';
import Result from './Result';

function Results(props){

    

        return(
            <div className="results">
                {/* props.books. */}
                <Result/>
            </div>
        )
    
}

export default Results;

// export default function Messages(props) {
//     const badge = props.unread
//         ? <div className="unread_count">{props.unread}</div> //if no unread messages, don't show the badge
//         : null;
//     return (
//         <div className="messages">
//             {props.name}
//             {badge}
//         </div>
//     );
// }