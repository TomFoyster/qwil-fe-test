import PropTypes from "prop-types";
import styled from "styled-components";

const Filter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: inline;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border-color: #e1e3e8;
  width: 100px;
  appearance: none;
  background-image: url("./icons/dropdown.png");
  background-size: 13px 10px;
  background-repeat: no-repeat;
  background-position: center right 15px;
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }
`;

const NewChat = styled.button`
  display: block;
  margin: 0;
  text-align: left;
  cursor: pointer;
  background: #fff;
  padding: 0 15px;
  border-radius: 5px;
  border: 1px solid #e1e3e8;
  font-size: 1.2rem;
`;

const ChatFilter = ({ filterBy, handleFilterChange }) => {
  return (
    <Filter>
      <SelectWrapper>
        <Select
          data-testid="chat-filter"
          value={filterBy}
          onChange={handleFilterChange}
        >
          <option value="active">Active</option>
          <option value="archived">Archived</option>
          <option value="all">All</option>
        </Select>
      </SelectWrapper>
      <NewChat>+</NewChat>
    </Filter>
  );
};

ChatFilter.propTypes = {
  filterBy: PropTypes.oneOf(["active", "archived", "all"]),
  handleFilterChange: PropTypes.func,
};

export default ChatFilter;
