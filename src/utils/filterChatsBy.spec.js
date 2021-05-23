import filterChatsBy from "./filterChatsBy";

describe("filterChatsBy", () => {
  let filterMethod;

  describe("when method is first called with 'all'", () => {
    beforeEach(() => {
      filterMethod = filterChatsBy("all");
    });

    it("returns true when passed a chat that is not archived", () => {
      const chat = {
        archived: false,
      };

      expect(filterMethod(chat)).toBe(true);
    });

    it("returns true when passed a chat that is archived", () => {
      const chat = {
        archived: true,
      };

      expect(filterMethod(chat)).toBe(true);
    });
  });

  describe("when method is first called with 'active'", () => {
    beforeEach(() => {
      filterMethod = filterChatsBy("active");
    });

    it("returns true when passed a chat that is not archived", () => {
      const chat = {
        archived: false,
      };

      expect(filterMethod(chat)).toBe(true);
    });

    it("returns true when passed a chat that is archived", () => {
      const chat = {
        archived: true,
      };

      expect(filterMethod(chat)).toBe(false);
    });
  });

  describe("when method is first called with 'archived'", () => {
    beforeEach(() => {
      filterMethod = filterChatsBy("archived");
    });

    it("returns true when passed a chat that is not archived", () => {
      const chat = {
        archived: false,
      };

      expect(filterMethod(chat)).toBe(false);
    });

    it("returns true when passed a chat that is archived", () => {
      const chat = {
        archived: true,
      };

      expect(filterMethod(chat)).toBe(true);
    });
  });
});
