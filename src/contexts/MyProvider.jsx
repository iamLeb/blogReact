import {createContext, useContext, useState} from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    // format date time
    const format = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const [showModal, setShowModal] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
        setTimeout(() => setShowModal(true), 10);
    };
    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => setModalVisible(false), 300);
    };

    return (
        <MyContext.Provider value={{ format, openModal, closeModal, modalVisible, showModal}}>
            {children}
        </MyContext.Provider>
    );
};
const useMycontext = () => { return useContext(MyContext); };

export {
    MyProvider, useMycontext
};