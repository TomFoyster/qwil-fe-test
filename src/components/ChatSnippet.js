import { format } from "date-fns";
import styled from "styled-components";
import PropTypes from "prop-types";

const SelectChat = styled.button`
  display: block;
  border: none;
  margin: 0;
  padding: 0;
  text-align: left;
  cursor: pointer;
`;

const Section = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 315px;
  padding: 10px 5px;
  background-color: #${(props) => (props.active ? "e1e3e8" : "fff")};

  &:hover {
    background-color: #f0f1f5;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px 0 0;
`;

const Details = styled.div`
  flex-grow: 1;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  width: auto;
`;

const Title = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Time = styled.time`
  font-size: 0.7rem;
  color: #8f8f8f;
`;

const Author = styled.p`
  color: #8f8f8f;
  margin: 0 0 5px 0;
`;

const Content = styled.p`
  color: #706d75;
  margin: 0;
`;

const ChatSnippet = ({ details, active = false, setActiveChat = () => {} }) => {
  const { id, title, message } = details;
  const { timestamp, authorName, content, authorId } = message;

  const date = new Date(timestamp);
  const messageSent = format(date, "E do MMM 'at' h:mm aaa");
  return (
    <SelectChat data-testid="chat-button" onClick={() => setActiveChat(id)}>
      <Section active={active} data-testid={active ? "active-chat" : null}>
        <Image src={`icons/${authorId}.png`} alt={authorName} />
        <Details>
          <Heading>
            <Title>{title}</Title>
            <Time>{messageSent}</Time>
          </Heading>
          <Author>{authorName}</Author>
          <Content>{content}</Content>
        </Details>
      </Section>
    </SelectChat>
  );
};

ChatSnippet.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.shape({
      authorName: PropTypes.string,
      authorId: PropTypes.string,
      content: PropTypes.string,
      timestamp: PropTypes.number,
    }),
    archived: PropTypes.bool,
    participants: PropTypes.array,
  }).isRequired,
  active: PropTypes.bool,
  setActiveChat: PropTypes.func,
};

export default ChatSnippet;
