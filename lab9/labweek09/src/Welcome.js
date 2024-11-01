import React from 'react';

const Welcome = (props) => {
    return (
        <div>
            <h1>Welcome to FullStack Development - I</h1>
            <h2>React JS Programming Week09 Lab exercise</h2>
            <h3>{props.studentId}</h3>
            <h4>{props.studentName}</h4>
            <h5>{props.school}</h5>
        </div>
    )
}

export default Welcome;