import React from 'react';

interface ModalWrapperProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const ModalWrapper = ({ children, isOpen, onClose }: ModalWrapperProps) => {
   

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-80"
                onClick={onClose}
            />

            <div
                className="relative z-10 bg-white rounded-[1.25rem] w-[50rem] transform transition-all duration-300 scale-100 opacity-100"
            >
                <button
                    className="absolute top-3 right-7 text-gray-500 hover:text-gray-700 text-[3rem] cursor-pointer"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="p-[3rem]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalWrapper;
