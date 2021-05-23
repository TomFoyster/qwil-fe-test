import React from 'react';
import { fireEvent, queryByTestId, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

/*
  This test performs as a typical UI test would, to test the functionality
  of the actual UI. I believe Unit Tests should be atomic - I break that pattern 
  here so we can test the behaviour. 
*/

describe("App", () => {

  beforeEach(() => {
    fetch.mockOnce(
      JSON.stringify([
        {
          id: "1",
          title: "Invoice - 18633",
          message: {
            authorName: "Carrie Edwards",
            authorId: "2",
            content: "Just checking it over now.",
            timestamp: 1620155003723,
          },
          archived: true,
          participants: ["John Stevens", "Carrie Edwards"],
        },
        {
          id: "2",
          title: "Investment Strategy",
          message: {
            authorName: "Carrie Edwards",
            authorId: "2",
            content: "We will send it over",
            timestamp: 1620133889345,
          },
          archived: false,
          participants: ["Sarah Phillips", "Carrie Edwards"],
        },
      ])
    );
  });

  it('Changes the active chat when a chat is clicked', async () => {
    render(<App />);
    
    const chatButtons = await waitFor(() => screen.getAllByTestId("chat-button"));
    
    expect(queryByTestId(chatButtons[0], "active-chat")).toBeInTheDocument();
    expect(queryByTestId(chatButtons[1], "active-chat")).not.toBeInTheDocument();
    
    act(() => {
      chatButtons[1].click();
    })
    
    expect(queryByTestId(chatButtons[0], "active-chat")).not.toBeInTheDocument();
    expect(queryByTestId(chatButtons[1], "active-chat")).toBeInTheDocument();
  });

  it('Changes the visible chats when the filter dropdown is used', async () => {
    render(<App />);
    
    let chatButtons;
    chatButtons = await waitFor(() => screen.getAllByTestId("chat-button"));    
    expect(chatButtons).toHaveLength(2);

    act(() => {
      fireEvent.change(screen.getByTestId('chat-filter'), { target: { value: "archived" } });
    });

    chatButtons = await waitFor(() => screen.getAllByTestId("chat-button"));
    expect(chatButtons).toHaveLength(1);
    
  });
})
  