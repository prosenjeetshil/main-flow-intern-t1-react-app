import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className='container mt-5'>
            <div className='d-flex flex-column align-items-center'>
                <button className='btn btn-primary my-2' onClick={() => navigate('/add')}>Add Customer</button>
                <button className='btn btn-success my-2' onClick={() => navigate('/show')}>Show Customer</button>
                <button className='btn btn-warning my-2' onClick={() => navigate('/update')}>Update Customer</button>
                <button className='btn btn-danger my-2' onClick={() => navigate('/delete')}>Delete Customer</button>
            </div>
        </div>
    );
}
