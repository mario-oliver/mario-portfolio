import './ChatGPTDashboard.css';
import chatgptlogo from '../assets/images/ChatGPT.svg';
import mlogo from '../assets/images/m_logo.svg';
import mopenai_logo from '../assets/images/MOpenAI.svg';
import { useState } from 'react';

// import dotenv from 'dotenv';
// dotenv.config();

function App() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([
    {
      user: 'gpt',
      message: 'How can I help you today?',
    },
  ]);

  const clearChat = () => {
    setChatLog([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: 'me', message: input }];
    setChatLog(chatLogNew);
    setInput('');

    const message = chatLogNew.map((message) => message.message).join('\n');
    // const response = await fetch(process.env.REACT_APP_BACKEND_URL, {
    const response = await fetch('http://localhost:3080/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
      }),
    });
    const data = await response.json();
    console.log(data.message);
    setChatLog([...chatLogNew, { user: 'gpt', message: `${data.message}` }]);
  };

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button" onClick={clearChat}>
          <span>+ </span>New Chat
        </div>

        <img className="mopenai_logo" src={mopenai_logo} alt="chatgpt" />
      </aside>

      <section className="chatbox">
        <div className="chat-area">
          <div className="chat-log">
            {chatLog.map((chat, index) => {
              return (
                <div
                  key={index}
                  className={`chat-message ${chat.user === 'gpt' && 'chatgpt'}`}
                >
                  <div className="chat-message-center">
                    <div
                      className={`avatar ${chat.user === 'gpt' && 'chatgpt'}`}
                    >
                      {chat.user === 'gpt' ? (
                        <img
                          className="avatar_img"
                          src={chatgptlogo}
                          alt="chatgpt"
                        />
                      ) : (
                        <img
                          className="avatar_img"
                          src={mlogo}
                          alt="mario gpt"
                        />
                      )}
                    </div>
                    <div className="message">{chat.message}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input-textarea"
              rows="1"
              placeholder="Type your message here"
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
