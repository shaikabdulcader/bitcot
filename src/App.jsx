import React, { useState } from 'react';
import { ContactProvider } from './context/ContactContext';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ContactDetail from './components/ContactDetail';
import Modal from './components/Model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [contactToEdit, setContactToEdit] = useState(null);
    const [contactToView, setContactToView] = useState(null);

    const handleAddClick = () => setShowAddModal(true);
    const handleEditClick = (contact) => {
        setContactToEdit(contact);
        setShowEditModal(true);
    };
    const handleViewClick = (contact) => {
        setContactToView(contact);
        setShowDetailModal(true);
    };

    return (
        <ContactProvider>
            <div className="container">
                <button className="btn btn-success my-3" onClick={handleAddClick}>Add Contact <FontAwesomeIcon icon={faPlus}/></button>
                <ContactList onEdit={handleEditClick} onView={handleViewClick} />
                
                {showAddModal && (
                    <Modal onClose={() => setShowAddModal(false)}>
                        <AddContact onClose={() => setShowAddModal(false)} />
                    </Modal>
                )}

                {showEditModal && contactToEdit && (
                    <Modal onClose={() => setShowEditModal(false)}>
                        <EditContact contactToEdit={contactToEdit} onClose={() => setShowEditModal(false)} />
                    </Modal>
                )}

                {showDetailModal && contactToView && (
                    <Modal onClose={() => setShowDetailModal(false)}>
                        <ContactDetail contact={contactToView} onClose={() => setShowDetailModal(false)} />
                    </Modal>
                )}
            </div>
        </ContactProvider>
    );
};

export default App;
