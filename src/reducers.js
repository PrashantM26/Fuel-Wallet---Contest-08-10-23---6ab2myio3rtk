import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
      
    case 'add' :
      const newUser = {
        id: uuidv4(),
        name: action.name,
      }
      return {
        ...state,
        walletBalance: state.walletBallance + 10,
        users: [...state.users, newUser],
      };

    case 'fuel' :
      if(state.walletBalance >= 50) {
        return {
          ...state,
          walletBalance: state.walletBalance - 50,
        };
      }
      return state;

      default : 
        return state;
};

export default reducer;
