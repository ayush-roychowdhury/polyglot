import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      console.log('File uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
      <div className="App">
        <h1>Upload Audio File</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
  );
}

export default App;

