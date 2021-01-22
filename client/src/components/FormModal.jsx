import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    width: '900px',
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
        <div className="formSideBar" />
        <div className="formContainer">
          <button className="closeModal" type="submit" onClick={closeModal}>close</button>
          <h1 className="productOverviewDiv"><span>Title</span></h1>
          <div className="productRatingDiv">
            <span className="productRatingSpan">Product Rating</span>
          </div>
          <div className="reviewTitleContainer">
            <div className="reviewTitleDiv">
              <span className="reviewTitleForm">Review Title*</span>
              <input className="reviewTitleInput" placeholder="Example: Great on the Trails" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FormModal;
