import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        باز کردن مودال
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>عنوان مودال</Modal.Title>
        </Modal.Header>
        <Modal.Body>سلام! این یه موداله با React-Bootstrap 😍</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
