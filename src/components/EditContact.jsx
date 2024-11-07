import React, { useState, useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const EditContact = ({ contactToEdit, onClose }) => {
    const { updateContact } = useContext(ContactContext);
    const [contact, setContact] = useState(contactToEdit);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateContact(contact);
        onClose();
    };

    return (
        <div className="container">
            <h3>Edit Contact</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={contact.name} onChange={handleChange} className="form-control my-2" required />
                <input type="email" name="email" value={contact.email} onChange={handleChange} className="form-control my-2" />
                <input type="text" name="phone" value={contact.phone} onChange={handleChange} className="form-control my-2" required />
                <input type="text" name="address" value={contact.address} onChange={handleChange} className="form-control my-2" />
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EditContact;
