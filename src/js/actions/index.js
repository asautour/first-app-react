export const selectUser = (user) => {
  console.log("You just clicked on user ", user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  }
};