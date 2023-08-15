import { createPortal } from 'react-dom';
import React from 'react';
import './Modal.scss';
function Modal({ children, visible }){

    return createPortal(
        <div className={'modal ' + (visible ? 'open' : '')}>
            { children } 
        </div>
        ,
        document.getElementById('modal')
    );
}

export { Modal };