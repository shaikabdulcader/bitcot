import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

const ContactList = ({ onEdit, onView }) => {
    const { contacts, deleteContact, filterContacts, setSearchQuery } = useContext(ContactContext);

    // Handle search query change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="container">
            <h3 className="text-center">All Contacts</h3>
            <input
                type="text"
                placeholder="Search by name or contact number"
                onChange={handleSearchChange}
                className="form-control my-2"
            />
            <div className="list-group">
                {filterContacts().map(contact => (
                    <div key={contact.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                            <strong>{contact.id}. {contact.name}</strong><br />
                            {contact.phone}
                        </span>
                        <span>
                            <button className="btn btn-outline-primary btn-sm" onClick={() => onView(contact)}><FontAwesomeIcon icon={faEye}/></button>
                            <button className="btn btn-outline-secondary btn-sm mx-2" onClick={() => onEdit(contact)}><FontAwesomeIcon icon={faPencil}/></button>
                            <button className="btn btn-outline-danger btn-sm" onClick={() => deleteContact(contact.id)}><FontAwesomeIcon icon={faTrash}/></button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;
