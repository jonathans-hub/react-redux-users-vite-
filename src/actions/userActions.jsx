export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const removeUser = (user_id) => {
  return {
    type: "REMOVE_USER",
    payload: user_id, 
  };
};

export const editUser =(user_id, new_user)=>{
  return{
    type: "EDIT_USER",
    payload: {user_id, new_user},
    }
}