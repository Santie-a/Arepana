import React, { useState } from 'react';
import './Contacts.css';
import { contacts } from '../../data/contacts';

const Contacts = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="contacts-container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Buscar contacto..."
                className="search-input"
            />
            <ul className="contacts-list">
                {filteredContacts.length > 0 ? (
                    filteredContacts.map(contact => (
                        <li key={contact.id} className="contact-item">
                            <div className="contact-info">
                                <strong>{contact.name}</strong>
                                <span>{contact.email}</span>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="no-results">No se encontraron contactos.</li>
                )}
            </ul>
        </div>
    );
};

export default Contacts;
