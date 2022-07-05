import Modal from 'react-modal';

function ModalForm ({modalIsOpen, modalIsNew, openModal}) {

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
    

    return <>
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h4>{ modalIsNew ? 'New Album' : 'Edit Album'} </h4>
            <button onClick={openModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
        </Modal>
    </>
}

export default ModalForm;