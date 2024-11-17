import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

class PersonList extends Component {
    //Define state default values
    state = {
        persons: []
    }

     //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    
    render() {
        return (
            <div>
                <h2 className='title'>User List</h2>
                <ListGroup>
                    {this.state.persons.map((person, index) => (
                        <ListGroup.Item key={index} className='listUser'>
                            <div className="boldText">{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</div>
                            <div className="person-details">
                                <div className="picture">
                                    <img src={person.picture.large} alt="Person"/>
                                </div>
                                <div className="info">
                                    <div>User Name: <span className='boldText'>{person.login.username}</span></div>
                                    <div>Gender: <span className='uppercase'>{person.gender}</span></div>
                                    <div>Time Zone Description: {person.location.timezone.description}</div>
                                    <div>Address: {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</div>
                                    <div>Email: {person.email}</div>
                                    <div>Birth Date and Age: {person.dob.date} ({person.dob.age})</div>
                                    <div>Register Date: {person.registered.date}</div>
                                    <div>Phone#: {person.phone}</div>
                                    <div>Cell#: {person.cell}</div>
                                </div>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        );
    }
    }

export default PersonList;