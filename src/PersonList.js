import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class PersonList extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=10`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const persons = data.results;
            this.setState({ persons });
        })
        .catch(error => console.error('Error:', error));
    }

    render() {
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px',
        width: '100%'
    };

    const tableStyle = {
        backgroundColor: 'turquoise',
        color: 'black',
        height: '100%'
    };

    const headerStyle = {
        backgroundColor: 'green',
        color: 'black',
        textAlign: 'center'
    };

    const imageStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block',
        margin: '0 auto'
    };

    return (
        <div>
            <h2 style={{color: 'black', textAlign: 'center'}}>User List</h2>
            <div style={containerStyle}>
                {this.state.persons.map((person, index) => (
                    <Table striped bordered hover key={index} style={tableStyle}>
                        <thead>
                            <tr>
                                <th colSpan="2" style={headerStyle}>User {index + 1}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="2" style={{textAlign: 'center'}}>
                                    <img
                                        src={person.picture.large}
                                        alt={`${person.name.first} ${person.name.last}`}
                                        style={imageStyle}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{`${person.name.first} ${person.name.last}`}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{person.email}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}`}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{person.gender}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{person.phone}</td>
                            </tr>
                        </tbody>
                    </Table>
                ))}
            </div>
        </div>
    )
}
}

export default PersonList;
