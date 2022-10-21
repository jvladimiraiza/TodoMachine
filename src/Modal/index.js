import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='col-sm-6'>
            { children }
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }