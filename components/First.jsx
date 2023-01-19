import React from 'react';
import { useState } from 'react';

function First() {
  let [array, setArray] = useState([
    { name: 'first', isEdit: false },
    { name: 'second', isEdit: false },
    { name: 'third', isEdit: false },
  ]);

  let result = array.map((note, index) => {
    let elem;

    function Edit(index) {
      let copy = Object.assign([], array);
      copy[index].isEdit = !copy[index].isEdit;
      setArray(copy);
    }

    function changeNote(index, event) {
      let copy = Object.assign([], array);
      copy[index].name = event.target.value;
      setArray(copy);
    }
    if (!note.isEdit) {
      elem = (
        <li key={index}>
          {note.name} <button onClick={() => Edit(index)}>Изменить</button>
        </li>
      );
    } else {
      elem = (
        <div>
          <input type="text" value={note.name} onChange={(event) => changeNote(index, event)} />
          <button onClick={() => Edit(index)}>Сохранить изменения</button>
        </div>
      );
    }

    return elem;
  });

  return (
    <div>
      <ul>{result}</ul>
    </div>
  );
}
export default First;
