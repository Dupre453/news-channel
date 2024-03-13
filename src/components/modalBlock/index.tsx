import React from 'react';
import '../../scss/components/Modal.scss'


interface ModalBlockProps {
    title: string;
    children: React.ReactNode;
    visible?: boolean;
    onClose: () => void
}



export const ModalBlock:React.FC<ModalBlockProps> = ({
    title,
    children,
    onClose,

    visible= false,
}: ModalBlockProps):React.ReactElement | null => {
 if (!visible) {
     return null
 }

    // @ts-ignore
    return (
        <div open={visible} onClose={onClose} className='modal'>
            <div className='modal-title'>
                <button onClick={onClose}>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect width="14" height="14" fill="white"/>
                        <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
                {title}
            </div>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    );
};

