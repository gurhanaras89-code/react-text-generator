import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const helpText = `Heading
=======
Sub-heading
-----------
### Another deeper heading

Paragraphs are separated by a blank line.
Leave 2 spaces at the end of a line to do a line break

Text attributes *italic*, **bold**, \`monospace\`, ~~strikethrough~~.

Shopping list:
  * apples
  * oranges
  * pears`;

function App() {
  const [text, setText] = useState("");

  // Sağ üstteki soru işaretine basınca örnek metni doldurur
  const handleHelpClick = () => {
    setText(helpText);
  };

  return (
    <div className="container">
      <header>
        <h1>Markdown Previewer</h1>
        <button className="help-btn" onClick={handleHelpClick}>?</button>
      </header>

      <div className="editor-wrap">
        {/* Sol Taraf: Giriş Alanı */}
        <textarea
          className="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Markdown yazmaya başla..."
        />

        {/* Sağ Taraf: Önizleme Alanı */}
        <div 
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      </div>
    </div>
  );
}

export default App;