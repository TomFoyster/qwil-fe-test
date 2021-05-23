const filterChatsBy = (filterBy) => (chat) => {
  const { archived } = chat;

  switch (filterBy) {
    case "active":
      if (!archived) return true;
      return false;
    case "archived":
      if (archived) return true;
      return false;
    case "all":
    default:
      return true;
  }
};

export default filterChatsBy;
