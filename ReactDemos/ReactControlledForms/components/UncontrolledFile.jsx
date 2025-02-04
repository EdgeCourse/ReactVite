import React, { useRef, useState } from 'react'; // Import useRef and useState


function UncontrolledFile() {
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected file: ${fileInputRef.current.files[0]?.name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={fileInputRef} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UncontrolledFile;



