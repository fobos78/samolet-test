import React from 'react';

import './Modal.css';

function Modal({ data, setModal, index }) {

  return (
    <div className="Modal">
      <h2>Полная информация по региону</h2>
      <h2>fullname-{data[index].fullname}</h2>
      <h3>kopuk-{data[index].kopuk}</h3>
      <h3>territory-{data[index].territory}</h3>
      <h3>period-{data[index].period}</h3>
      <h3>libraries-{data[index].libraries}</h3>
      <h3>internet-{data[index].internet}</h3>
      <h3>users-{data[index].users}</h3>
      <h3>visits-{data[index].visits}</h3>
      <button onClick={() => setModal(false)}>Закрыть</button>
    </div>
  );
}

export default Modal;
