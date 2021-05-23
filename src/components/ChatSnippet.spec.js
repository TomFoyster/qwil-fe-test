import React from "react";
import { render } from "@testing-library/react";
import { format } from "date-fns";

import ChatSnippet from "./ChatSnippet";

jest.mock("date-fns");

describe("ChatSnippet", () => {
  it("matches snapshot", () => {
    const props = {
      details: {
        id: 1,
        title: "Test Message",
        message: {
          timestamp: 1620133889345,
          authorName: "Tom",
          content: "Test message content",
          authorId: 1,
        },
      },
      active: true,
    };

    const { container } = render(<ChatSnippet {...props} />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        border: none;
        margin: 0;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }

      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -webkit-justify-content: start;
        -ms-flex-pack: start;
        justify-content: start;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 315px;
        padding: 10px 5px;
        background-color: #e1e3e8;
      }

      .c1:hover {
        background-color: #f0f1f5;
      }

      .c2 {
        width: 50px;
        height: 50px;
        margin: 0 10px 0 0;
      }

      .c3 {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
      }

      .c4 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 5px;
        width: auto;
      }

      .c5 {
        font-weight: bold;
        margin: 0;
      }

      .c6 {
        font-size: 0.7rem;
        color: #8f8f8f;
      }

      .c7 {
        color: #8f8f8f;
        margin: 0 0 5px 0;
      }

      .c8 {
        color: #706d75;
        margin: 0;
      }

      <div>
        <button
          class="c0"
          data-testid="chat-button"
        >
          <section
            class="c1"
            data-testid="active-chat"
          >
            <img
              alt="Tom"
              class="c2"
              src="icons/1.png"
            />
            <div
              class="c3"
            >
              <div
                class="c4"
              >
                <p
                  class="c5"
                >
                  Test Message
                </p>
                <time
                  class="c6"
                />
              </div>
              <p
                class="c7"
              >
                Tom
              </p>
              <p
                class="c8"
              >
                Test message content
              </p>
            </div>
          </section>
        </button>
      </div>
    `);
  });

  it("calls format with the date and correct format pattern", () => {
    const props = {
      details: {
        id: 1,
        title: "Test Message",
        message: {
          timestamp: 1620133889345,
          authorName: "Tom",
          content: "Test message content",
          authorId: 1,
        },
      },
      active: true,
    };

    render(<ChatSnippet {...props} />);

    expect(format).toHaveBeenCalledWith(
      new Date(props.details.message.timestamp),
      "E do MMM 'at' h:mm aaa"
    );
  });
});
