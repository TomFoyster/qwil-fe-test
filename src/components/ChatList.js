import { useEffect, useState } from "react";
import styled from "styled-components";

import ChatFilter from "./ChatFilter";
import ChatSnippet from "./ChatSnippet";
import filterChatsBy from "../utils/filterChatsBy";

const ChatMenu = styled.div`
  width: 325px;
`;

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState("1");
  const [filterBy, setFilterBy] = useState("all");

  useEffect(() => {
    const fetchChats = async () => {
      const response = await fetch(`http://localhost:3001/chats`);
      const data = await response.json();

      setChats(data);
    };

    fetchChats();
  }, []);

  const filteredChats = chats.filter(filterChatsBy(filterBy));

  const handleFilterChange = ({ target: { value } = {} }) => {
    setFilterBy(value);
  };

  return (
    <ChatMenu>
      <ChatFilter filterBy={filterBy} handleFilterChange={handleFilterChange} />
      {filteredChats.map((chat) => {
        const { id } = chat;
        return (
          <ChatSnippet
            details={chat}
            setActiveChat={setActiveChat}
            active={id === activeChat}
            key={id}
          />
        );
      })}
    </ChatMenu>
  );
};

export default ChatList;
