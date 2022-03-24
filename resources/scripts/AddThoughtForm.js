import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = ({target}) => {
    setText(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      // alert('No Thought Post');
      return;
    }
    props.addThought({
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    });
    setText('');
  }
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add"/>
    </form>
  );
}
