import mapProps from '../../utils/jest/mapProps';

const ChatSnippet = (props) => {
        const mappedProps = mapProps(props);        
        return (
                <mock-div data-testid="ChatSnippet" {...mappedProps} >
                </mock-div>
        )
};

export default ChatSnippet;