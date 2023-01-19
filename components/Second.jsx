import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';

function Second() {
  const initNotes = [
    {
      id: id(),
      fields: [
        { name: 'prop1', value: 'value11', isEdit: false },
        { name: 'prop2', value: 'value12', isEdit: false },
        { name: 'prop3', value: 'value13', isEdit: false },
      ],
    },

    {
      id: id(),
      fields: [
        { name: 'prop1', value: 'value21', isEdit: false },
        { name: 'prop2', value: 'value22', isEdit: false },
        { name: 'prop3', value: 'value23', isEdit: false },
      ],
    },

    {
      id: id(),
      fields: [
        { name: 'prop1', value: 'value31', isEdit: false },
        { name: 'prop2', value: 'value32', isEdit: false },
        { name: 'prop3', value: 'value33', isEdit: false },
      ],
    },
  ];
  const [notes, setNotes] = useState(initNotes);

  let rows = notes.map((note) => {
    let cells = note.fields.map((field) => {
      let elem;

      if (!field.isEdit) {
        elem = <span onClick={() => Edit(note.id, field.name, false)}>{field.value}</span>;
      } else
        elem = (
          <input
            type="text"
            value={field.value}
            onChange={(event) => {
              Edit(note.id, field.name, event.target.value);
            }}
            onBlur={() => Edit(note.id, field.name)}
          />
        );
      return <td key={field.name}>{elem}</td>;
    });
    return <tr key={note.id}>{cells}</tr>;
  });

  function Edit(id, name, value) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          const fields = note.fields.map((field) => {
            if (field.name == name) {
              if (typeof value == 'string') {
                return { ...field, value: value };
              } else return { ...field, isEdit: !field.isEdit };
            } else return field;
          });
          return { id, fields };
        } else return note;
      }),
    );
  }

  return (
    <div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function id() {
  return uuid();
}

export default Second;
