import React from "react";
import { render } from "@testing-library/react";

import ChatFilter from "./ChatFilter";

describe("ChatFilter", () => {
  it("matches snapshot", () => {
    const { container } = render(<ChatFilter />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding: 10px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c1 {
        position: relative;
        display: inline;
      }

      .c2 {
        padding: 10px;
        border-radius: 5px;
        border-color: #e1e3e8;
        width: 100px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-image: url("./icons/dropdown.png");
        background-size: 13px 10px;
        background-repeat: no-repeat;
        background-position: center right 15px;
        cursor: pointer;
      }

      .c2:focus-visible {
        outline: none;
      }

      .c3 {
        display: block;
        margin: 0;
        text-align: left;
        cursor: pointer;
        background: #fff;
        padding: 0 15px;
        border-radius: 5px;
        border: 1px solid #e1e3e8;
        font-size: 1.2rem;
      }

      <div>
        <div
          class="c0"
        >
          <div
            class="c1"
          >
            <select
              class="c2"
              data-testid="chat-filter"
            >
              <option
                value="active"
              >
                Active
              </option>
              <option
                value="archived"
              >
                Archived
              </option>
              <option
                value="all"
              >
                All
              </option>
            </select>
          </div>
          <button
            class="c3"
          >
            +
          </button>
        </div>
      </div>
    `);
  });
});
