import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [paras, setParas] = useState(4);
  const [format, setFormat] = useState('text');
  const [text, setText] = useState('');

  const fetchText = async () => {
    try {
      const response = await axios.get(
        `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`
      );
      setText(response.data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };

  useEffect(() => {
    fetchText();
  }, [paras, format]);

  return (
    <div className="App">
      <header><h1>React sample text generator app</h1></header>
      <div className="container">
        <div className="controls">
          <div className="input-group">
            <label>Paragraphs</label>
            <input type="number" value={paras} onChange={(e) => setParas(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Include HTML</label>
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="text">No</option>
              <option value="html">Yes</option>
            </select>
          </div>
        </div>
        <div className="output">{text}</div>
      </div>
    </div>
  );
}
export default App;