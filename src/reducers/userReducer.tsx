import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    name: "Jhon Doe",
    age: 30,
}

const userReducer = createReducer(initialState, (builder) =>{
    builder.addCase('UPDATE_NAME_SUCCESS', (state, action: any) => {
            // console.log('action', action)
        state.name = action.payload
    })
});

export default userReducer;