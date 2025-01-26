import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ShowCustomers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/customer')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customer data:', error));
    }, []);

    return (
        <div className='container mt-4'>
            <h2>Customer List</h2>
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>First Name</th>
                        <th>Initials</th>
                        <th>Last Name</th>
                        <th>Street Address</th>
                        <th>Street Address Line 2</th>
                        <th>City</th>
                        <th>Region</th>
                        <th>Postal / Zip Code</th>
                        <th>Country</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.customer.name.title}</td>
                            <td>{customer.customer.name.first}</td>
                            <td>{customer.customer.name.initials}</td>
                            <td>{customer.customer.name.last}</td>
                            <td>{customer.customer.address.streetAddress}</td>
                            <td>{customer.customer.address.streetAddress2}</td>
                            <td>{customer.customer.address.city}</td>
                            <td>{customer.customer.address.region}</td>
                            <td>{customer.customer.address.postalCode}</td>
                            <td>{customer.customer.address.country}</td>
                            <td>{customer.customer.phone}</td>
                            <td>{customer.customer.email}</td>
                            <td>{customer.customer.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
