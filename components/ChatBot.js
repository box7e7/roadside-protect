import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  console.log(messages)

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
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify([...messages, { content: inputValue, role: 'user' }]),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        res.json().then((data) => {
          setMessages([...messages, userMessage, { content: data.response, role: 'system' }]);
        });
      })
      .catch((e) => console.log(e));
  };

  const toggleModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className={`fixed right-4 bottom-4 p-4 bg-blue-500 text-white rounded-full shadow-lg ${
          isAnimating ? 'scale-100' : 'scale-100'
        }`}
      >
        Open Chatbot
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 w-screen">
          <div className="bg-white rounded-xl shadow-xl w-[95%] md:w-[500px] h-[600px] overflow-hidden flex flex-col">
            <div className="w-full bg-[#2B75BE] flex items-center justify-between text-white text-lg font-bold">
              <div className="w-full h-18 bg-[#2B75BE] text-center text-white text-lg py-5 font-bold">
                Messages
              </div>
              <button
                onClick={toggleModal}
                className="px-4 py-1 text-white hover:text-slate-300 rounded-full focus:outline-none"
              >
                X
              </button>
            </div>

            <div className="flex-grow p-3 overflow-auto">
              <div className="chatbot-messages">
                {messages.map((message, index) => (
                  <div key={index} className="m-1 p-1">
                    {message.role}: {message.content}
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
  );
};

export default Chatbot;

