import React, { useEffect, useState } from 'react';

import Modal from '../Modal';
import './Lib.css';

function Lib({ data, setFocus, setData, oldData, setOldData }) {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState('');
  let timer = 0;

  useEffect(() => {
    setFocus({ focusHome: false, focusInfo: true });
  }, []);
  function sortElMin() {
    const str = JSON.stringify(data);
    const arr = JSON.parse(str);
    const newArr = arr.sort((a, b) => a.libraries - b.libraries);
    setData(newArr);
  }
  function sortElMax() {
    const str = JSON.stringify(data);
    const arr = JSON.parse(str);
    const newArr = arr.sort((a, b) => b.libraries - a.libraries);
    setData(newArr);
  }
  function inputChange(event) {
    let newWord = event.target.value;
    setWord(event.target.value);
    console.log('oldData', oldData);
    clearTimeout(timer);
    timer = setTimeout(() => {
      const str = JSON.stringify(data);
      const arr = JSON.parse(str);
      const newArr = arr.filter((el, i) => { return el.territory.toUpperCase() === newWord.toUpperCase() });
      console.log('word', newWord);
      console.log(newArr);
      if (newArr[0]) {
        setData(newArr);
      }
    }, 1000);
  }

  return (
    <>
      {modal && <Modal data={data} setModal={setModal} index={index} />}
      <div className="Lib">
        <span>
          <div><span>Отсортировать по количеству библиотек</span>
            <button onClick={() => { sortElMax() }}>&#9650;</button>
            <button onClick={() => { sortElMin() }}>&#9660;</button>
            <button onClick={() => { setData(oldData) }}>Все</button>
          </div>
          <div><span>Введите регион</span>
            <input onChange={inputChange} value={word} />
          </div>
        </span>
        {data[0] && data.map((el, i) =>
          <div className="element" key={Math.random()}>
            <h3>Имя - {' '}{
              el.fullname
            }</h3>
            <h3>Кол. библиотек - {' '}{
              el.libraries
            }</h3>
            <h3>Регион - {' '}{
              el.territory
            }</h3>
            <button onClick={() => { setModal(true); setIndex(i) }}>Подробнее</button>
          </div>
        ) || <div class="loader">Loading...</div> }

        {/* <pre>
        {JSON.stringify(data, null, 2)}
      </pre> */}
      </div>
    </>
  );
}

export default Lib;
