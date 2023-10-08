import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
      
    case 'add' :
      const nUser = {
        id: uuidv4(),
        name: action.name,
      }
      //const nBalance = action.balance + 10;
      action.setBalance((e) => e + 10);
      return {
        balance: action.balance,
        users: [...state.users, nUser],
      };

    case 'fuel' :
      if(state.balance >= 50) {
        //const nBalanceFuel = action.balance - 50;
        action.setBalance((e) => e - 50);
        return {
          ...state,
          balance: action.balance,
        };
      }
      return state;

      default : 
        return state;
};

export default reducer;
