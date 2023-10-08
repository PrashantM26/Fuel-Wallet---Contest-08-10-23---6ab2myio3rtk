import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
      
    case 'add' :
      const nUser = {
        id: uuidv4(),
        name: action.name,
      }
      const nBalance = action.balance + 10;
      return {
        balance: nBalance,
        users: [...state.users, newUser],
      };

    case 'fuel' :
      if(state.balance >= 50) {
        const nBalanceFuel = action.balance - 50;
        return {
          ...state,
          balance: nBalanceFuel,
        };
      }
      return state;

      default : 
        return state;
};

export default reducer;
