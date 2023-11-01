import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { BiSolidPencil, BiUserPin } from 'react-icons/bi';
import { BiSolidTrash } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';
import css from './Contact.module.css';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [inEditMode, setInEditMode] = useState(false);
  const [oldName, setNewName] = useState(contact.name);
  const [oldNumber, setNewNumber] = useState(contact.number);

  return (
    <div className={css.container}>
      <BiUserPin
        style={{ color: 'lightgreen', width: '100px', height: '100px' }}
      ></BiUserPin>
      {inEditMode === false ? (
        <div className={css.infoMode}>
          <div className={css.info}>
            <span className={css.data}>{contact.name}</span>
            <span className={css.data}>{contact.number}</span>
          </div>
          <div className={css.actions}>
            <BiSolidPencil
              onClick={() => {
                setInEditMode(true);
              }}
              style={{
                color: 'lightgreen',
                marginRight: '0px',
                width: '50px',
                height: '50px',
              }}
            ></BiSolidPencil>
            <BiSolidTrash
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
              style={{
                color: 'lightgreen',
                marginRight: '15px',
                width: '50px',
                height: '50px',
              }}
            >
              Delete
            </BiSolidTrash>
          </div>
        </div>
      ) : (
        <>
          <form className={css.editForm}>
            <input
              type="text"
              name="editName"
              value={oldName}
              onChange={evt => {
                setNewName(evt.target.value);
              }}
            ></input>
            <input
              type="text"
              name="editNumber"
              value={oldNumber}
              onChange={evt => {
                setNewNumber(evt.target.value);
              }}
              className={css.lastInput}
            ></input>
          </form>
          <AiFillCheckCircle
            onClick={() => {
              setInEditMode(false);
              dispatch(
                updateContact({
                  id: contact.id,
                  name: oldName,
                  number: oldNumber,
                })
              );
            }}
            style={{
              color: 'lightgreen',
              marginRight: '15px',
              width: '50px',
              height: '50px',
            }}
          ></AiFillCheckCircle>
        </>
      )}
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
