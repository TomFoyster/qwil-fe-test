import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import ChatList from "./ChatList";

jest.mock("./ChatFilter");
jest.mock("./ChatSnippet");

describe("ChatList", () => {
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
          archived: false,
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

  it("renders a <ChatFilter />", async () => {
    render(<ChatList />);
    await waitFor(() => screen.getAllByTestId("ChatSnippet"));

    const ChatFilter = screen.getAllByTestId("ChatFilter");
    expect(ChatFilter).toMatchInlineSnapshot(`
      Array [
        <mock-div
          data-testid="ChatFilter"
          filterby="all"
        />,
      ]
    `);
  });

  it("renders correct props on correct amount of <ChatSnippet /> components", async () => {
    render(<ChatList />);

    await waitFor(() => screen.getAllByTestId("ChatSnippet"));

    const ChatSnippets = screen.getAllByTestId("ChatSnippet");
    expect(ChatSnippets).toMatchInlineSnapshot(`
      Array [
        <mock-div
          active="true"
          data-testid="ChatSnippet"
          details="{\\"id\\":\\"1\\",\\"title\\":\\"Invoice - 18633\\",\\"message\\":{\\"authorName\\":\\"Carrie Edwards\\",\\"authorId\\":\\"2\\",\\"content\\":\\"Just checking it over now.\\",\\"timestamp\\":1620155003723},\\"archived\\":false,\\"participants\\":[\\"John Stevens\\",\\"Carrie Edwards\\"]}"
        />,
        <mock-div
          active="false"
          data-testid="ChatSnippet"
          details="{\\"id\\":\\"2\\",\\"title\\":\\"Investment Strategy\\",\\"message\\":{\\"authorName\\":\\"Carrie Edwards\\",\\"authorId\\":\\"2\\",\\"content\\":\\"We will send it over\\",\\"timestamp\\":1620133889345},\\"archived\\":false,\\"participants\\":[\\"Sarah Phillips\\",\\"Carrie Edwards\\"]}"
        />,
      ]
    `);
  });
});
