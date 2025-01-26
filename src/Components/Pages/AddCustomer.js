import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function AddCustomer() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const saveData = data => {
        const customerData = {
            customer: {
                name: {
                    title: data.title,
                    first: data.first,
                    initials: data.initials,
                    last: data.last
                },
                address: {
                    streetAddress: data.streetAddress,
                    streetAddress2: data.streetAddress2,
                    city: data.city,
                    region: data.region,
                    postalCode: data.postalCode,
                    country: data.country
                },
                phone: data.phone,
                email: data.email,
                dob: data.dob
            }
        };
        axios.post('http://localhost:5000/customer', customerData);
        navigate('/show');
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(saveData)} className='jumbotron mt-4'>
                <label htmlFor='title'><b>Customer Name</b></label>
                <select id='title' className='form-control' {...register('title')}>
                    <option value=''>Title</option>
                    <option value='Mr'>Mr</option>
                    <option value='Ms'>Ms</option>
                    <option value='Mrs'>Mrs</option>
                    <option value='Dr'>Dr</option>
                </select>
                <input id='first' type='text' className='form-control' placeholder='First' {...register('first')} />
                <input id='middle' type='text' className='form-control' placeholder='Middle' {...register('middle')} />
                <input id='last' type='text' className='form-control' placeholder='Last' {...register('last')} />
                <br/><br/>

                <label htmlFor='streetAddress'><b>Customer Address</b></label>
                <input id='streetAddress' type='text' className='form-control' placeholder='Street Address' {...register('streetAddress')} />
                <input id='streetAddress2' type='text' className='form-control' placeholder='Street Address Line 2' {...register('streetAddress2')} />
                <input id='city' type='text' className='form-control' placeholder='City' {...register('city')} />
                <input id='region' type='text' className='form-control' placeholder='Region' {...register('region')} />
                <input id='postalCode' type='text' className='form-control' placeholder='Postal / Zip Code' {...register('postalCode')} />
                <select id='country' className='form-control' {...register('country')}>
                    <option value=''>Country</option>
                    <option value='USA'>USA</option>
                    <option value='Canada'>Canada</option>
                    <option value='UK'>UK</option>
                    <option value='Australia'>Australia</option>
                </select>
                <br/><br/>

                <label htmlFor='phone'><b>Customer Phone</b></label>
                <input id='phone' type='text' className='form-control' placeholder='### ### ####' {...register('phone')} />
                <br/><br/>

                <label htmlFor='email'><b>Customer ID/Email</b></label>
                <input id='email' type='text' className='form-control' placeholder='Customer ID/Email' {...register('email')} />
                <br/><br/>

                <label htmlFor='dob'><b>Customer Date of Birth</b></label>
                <input id='dob' type='text' className='form-control' placeholder='MM/DD/YYYY' {...register('dob')} />
                <br/><br/>

                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
}
