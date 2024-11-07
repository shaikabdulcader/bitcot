import React, { useState, useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const AddContact = ({ onClose }) => {
    const { addContact } = useContext(ContactContext);
    const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(contact);
        onClose();
    };

    return (
        <div className="container">
            <h3>Add Contact</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} className="form-control my-2" required />
                <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} className="form-control my-2" />
                <input type="text" name="phone" placeholder="Enter Phone Number" onChange={handleChange} className="form-control my-2" required />
                <input type="text" name="address" placeholder="Enter Address" onChange={handleChange} className="form-control my-2" />
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default AddContact;
