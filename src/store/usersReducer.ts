import { IAction } from "../interface";

const defaultState = {
  users: [
    {timer: true, row1: '-', row2: '80', row3: '24', row4: '30%', row5: '3.700.000 руб.'},
    {timer: false, row1: '-', row2: '90', row3: '24', row4: '100%', row5: '3.200.000 руб.'},
    {timer: false, row1: '-', row2: '75', row3: '22', row4: '65%', row5: '2.800.000 руб.'},
    {timer: false, row1: '-', row2: '120', row3: '36', row4: '50%', row5: '2.475.000 руб.'}
  ]
}

const SWITCH_USER = 'SWITCH_USER';

const usersReducer = (state: any = defaultState, action: IAction) => {
  switch(action.type) {
    case SWITCH_USER:
      if(action.payload === state.users.length - 1) {
        state.users[0].timer = true;
        state.users[state.users.length - 1].timer = false;
      } else {
        state.users[action.payload].timer = false;
        state.users[action.payload + 1].timer = true;
      }
      return {...state, users: [...state.users]};

    default: 
      return state;
  }
};

const switchUserAction = (payload: any) => ({type: SWITCH_USER, payload}); 

export {usersReducer, switchUserAction};