import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([
        { id: 1, name: "Aaron", email: "aaron@example.com", phone: "5785664545", address: "123 Main St" },
        { id: 2, name: "Buincy Henson", email: "buincy@example.com", phone: "5862165454", address: "456 Oak St" },
        { id: 3, name: "Hanna Donovan", email: "hanna@example.com", phone: "6365425254", address: "789 Pine St" }
    ]);

    const [searchQuery, setSearchQuery] = useState("");

    const addContact = (contact) => setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);

    const updateContact = (updatedContact) => {
        setContacts(contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact)));
    };

    const deleteContact = (id) => setContacts(contacts.filter(contact => contact.id !== id));

    const filterContacts = () => {
        if (!searchQuery) {
            return contacts;
        }
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchQuery.toLowerCase())||
            contact.phone.includes(searchQuery)
        );
    };

    return (
        <ContactContext.Provider value={{ contacts, addContact, updateContact, deleteContact, filterContacts, setSearchQuery }}>
            {children}
        </ContactContext.Provider>
    );
};
