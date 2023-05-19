
import { createSlice,configureStore} from '@reduxjs/toolkit';
const initial = {
    conut:0,
    myname:"elpahr",
    phone:"01111278011"
};

const controlslice = createSlice(
    {
        name:"counter",
        initialState:initial,
        reducers:{
            maxcount:(state,action)=>{state.conut+=action.payload},
            setname:(state,action)=>{state.myname = action.payload},
            stphone:(state,action)=>{state.phone = action.payload},
            }
        
        
    }
);

export const {maxcount,setname,stphone} = controlslice.actions;
const store = configureStore(controlslice);
export default store;