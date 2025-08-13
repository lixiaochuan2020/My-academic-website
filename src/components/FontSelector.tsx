'use client';

import { useState, useEffect } from 'react';

const fonts = [
  {
    name: 'Lato',
    value: 'lato',
    import: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
    family: 'Lato, system-ui, sans-serif'
  },
  {
    name: 'Maple Mono',
    value: 'maple-mono',
    import: 'https://font.subf.dev/css/maple-mono.css',
    family: 'Maple Mono, monospace'
  },
  {
    name: 'Inter',
    value: 'inter',
    import: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap',
    family: 'Inter, system-ui, sans-serif'
  },
  {
    name: 'Source Sans Pro',
    value: 'source-sans',
    import: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap',
    family: 'Source Sans Pro, system-ui, sans-serif'
  },
  {
    name: 'Roboto',
    value: 'roboto',
    import: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
    family: 'Roboto, system-ui, sans-serif'
  },
  {
    name: 'JetBrains Mono',
    value: 'jetbrains-mono',
    import: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap',
    family: 'JetBrains Mono, monospace'
  },
  {
    name: 'Fira Code',
    value: 'fira-code',
    import: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap',
    family: 'Fira Code, monospace'
  },
  {
    name: 'Georgia (Current)',
    value: 'georgia',
    import: '', // System font, no import needed
    family: 'Georgia, serif'
  }
];

export default function FontSelector() {
  const [selectedFont, setSelectedFont] = useState('georgia');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const currentFont = fonts.find(font => font.value === selectedFont);
    if (currentFont) {
      // Remove existing font imports
      const existingLinks = document.querySelectorAll('link[data-font-selector]');
      existingLinks.forEach(link => link.remove());

      // Add new font import only if import URL is provided
      if (currentFont.import) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = currentFont.import;
        link.setAttribute('data-font-selector', 'true');
        document.head.appendChild(link);
      }

      // Apply font to body
      document.body.style.fontFamily = currentFont.family;
    }
  }, [selectedFont]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-shadow"
        >
          🎨 Font: {fonts.find(f => f.value === selectedFont)?.name}
        </button>
        
        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
            <div className="p-2">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Choose a Font</h3>
              {fonts.map((font) => (
                <button
                  key={font.value}
                  onClick={() => {
                    setSelectedFont(font.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    selectedFont === font.value
                      ? 'bg-blue-100 text-blue-700'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {font.name}
                </button>
              ))}
            </div>
            <div className="border-t border-gray-200 p-3">
              <div className="text-xs text-gray-500">
                <p style={{ fontFamily: fonts.find(f => f.value === selectedFont)?.family }}>
                  Preview: The quick brown fox jumps over the lazy dog. 
                  I am a research scientist interested in ML and NLP.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
