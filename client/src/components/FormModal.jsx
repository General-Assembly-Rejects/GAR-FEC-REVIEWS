import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

function FormModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button type="submit" className="button button1" onClick={openModal}>Write a Review</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button type="submit" onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button type="submit">tab navigation</button>
          <button type="submit">stays</button>
          <button type="submit">inside</button>
          <button type="submit">the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default FormModal;
