import React, { useState } from 'react';
import Head from 'next/head';


let texCode=`<div class="bg-black rounded-md mb-4 pb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>Code</span><button class="flex gap-2 items-center absolute top-0 right-0 h-full px-3" onclick="copyCode(this)"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg><span class="text-white">Copy code</span></button></div><pre class="bg-black text-white p-4"  style="overflow-x: auto;"><code>$1</code></pre></div>`
function convertMarkdownToHtml(markdown) {
  // Define regex patterns to match Markdown syntax
  const headingPattern1 = /^#\s(.*)/gm;
  const headingPattern2 = /^##\s(.*)/gm;
  const headingPattern3 = /^###\s(.*)/gm;
  const codeBlockPattern = /```([\s\S]*?)```/gm;
  const boldPattern = /\*\*(.*?)\*\*/g;
  const italicPattern = /\*(.*?)\*/g;
  const linkPattern = /\[(.*?)\]\((.*?)\)/g;

  // Replace Markdown syntax with corresponding HTML tags
  const html = markdown
    .replace(headingPattern1, '<h1>$1</h1>')
    .replace(headingPattern2, '<h2>$1</h2>')
    .replace(headingPattern3, '<h3>$1</h3>')
    // .replace(codeBlockPattern, '<div class="bg-black text-white p-4 rounded-lg"><button class="copy-code" onclick="copyCode(this)">Copy</button><pre><code>$1</code></pre></div>')
    .replace(codeBlockPattern,texCode)
    .replace(boldPattern, '<b>$1</b>')
    .replace(italicPattern, '<i>$1</i>')
    .replace(linkPattern, '<a href="$2">$1</a>')
    .replace(/\n/g, '<br>');

  return html;
}

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  console.log(messages);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;

    let userMessage = { content: inputValue, role: 'user' };
    setMessages([...messages, { content: inputValue, role: 'user' }]);
    setInputValue('');

    let url = 'http://localhost:3000/api/chatGPT';
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify([...messages, { content: inputValue, role: 'user' }]),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      setMessages([...messages, userMessage, { content: data.response, role: 'system' }]);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsAnimating(false);
    }, 300);
  };

  return (
   <>
     <Head>
        <script src="javascript.js" async></script>
    </Head>
    <div style={{ position: 'relative', zIndex: '9999' }}>
      <button
        onClick={isOpen ? closeModal : openModal}
        className={`fixed right-4 bottom-4 p-4 bg-blue-500 text-white rounded-full shadow-lg ${
          isAnimating ? 'scale-100' : 'scale-100'
        }`}
        style={{ zIndex: '10000' }}
      >
        {isOpen ? 'Close Chatbot' : 'Open Chatbot'}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center w-screen"
          style={{ zIndex: '9999' }}
        >
          <div className="bg-white rounded-xl shadow-xl w-[95%] md:w-[500px] h-[600px] overflow-hidden flex flex-col">
            <div className="w-full bg-[#2B75BE] flex items-center justify-between text-white text-lg font-bold">
              <div className="w-full h-18 bg-[#2B75BE] text-center text-white text-lg py-5 font-bold">
                Messages
              </div>
              <button
                onClick={closeModal}
                className="px-4 py-1 text-white hover:text-slate-300 rounded-full focus:outline-none"
              >
                X
              </button>
            </div>

            <div className="flex-grow p-3 overflow-auto">
              <div className="chatbot-messages">
                {messages.map((message, index) => (
                  <div key={index} className="m-1 p-1">
                    <div className='flex flex-row'>
                      <div>{message.role}: </div> 
                      <div className="bg-blue-100 rounded-lg p-8 pt-4 text-[#1A202C] spapce-y-1" dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(message.content) }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="flex pb-6 px-4">
              <input
               
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-grow p-2 border-2 border-lg border-gray-300 rounded-l mr-2 focus:outline-slate-300 focus:outline-2"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r rounded-l"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
   </>
  );
};

export default Chatbot;

