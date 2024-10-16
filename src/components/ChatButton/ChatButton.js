import React from 'react';
import './ChatButton.css';

const ChatButton = ({ onClick }) => {
    return (
        <button className="chat-button" onClick={onClick}>
            Chat 💬
        </button>
    );
};

export default ChatButton;
