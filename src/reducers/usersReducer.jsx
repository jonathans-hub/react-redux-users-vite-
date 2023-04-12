const initialState = {
    users: [
        {
          name: "Uta James",
          email: "utajam@aol.com",
          gen: "20",
          id: "dfsdjkvnsdjkfnskf",
        },
        {
          name: "Chris Alton",
          email: "chrisal@aol.com",
          gen: "18",
          id: "45fsdsjkvnsdjkfnskf",
        },
        {
          name: "Berus Sama",
          email: "berus@aol.com",
          gen: "22",
          id: "weonbfjkvnwvnsdjkfnskf",
        },
      ],
}

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_USER":
    const newUser = {
      name:  payload.name,
      email: payload.email,
      gen: payload.gen,
    }   
    return { ...state, users:[...state.users, newUser ] }

  default:
    return state
  }
}
