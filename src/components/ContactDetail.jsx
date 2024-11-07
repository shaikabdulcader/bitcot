import React from 'react';

const ContactDetail = ({ contact, onClose }) => {
    return (
        <div>
            <h4>Contact Details</h4>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Address:</strong> {contact.address}</p>
            <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>
    );
};

export default ContactDetail;
