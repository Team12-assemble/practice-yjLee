import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// 열어준 서버 3001번 포트에서 소켓통신
const socket = io("http://localhost:3001");

const Chat = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    //socket
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  });

  const handleMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      //socket으로 메세지 보내기
      socket.emit("message", {
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };
  return (
    <>
      <h1>실시간 채팅</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="사용자 이름을 입력하세요."
      />
      <h2>채팅</h2>
      <div>
        {messages.map((message, index) => {
          return (
            <p key={index}>
              {message.username} : {message.content} - {message.time}
            </p>
          );
        })}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleMessageSubmit}>전송</button>
    </>
  );
};

export default Chat;
