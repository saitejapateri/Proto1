import {createSlice, configureStore} from '@reduxjs/toolkit'


const initialLoginState = {login : false}
const initialUnitState = {selectedUnitId : 0}
const initialProfileState = {name : null , email : null, profileImg : null};

const loginSlice = createSlice({
    name : 'loginSlice',
    initialState : initialLoginState,
    reducers : {
        login(state) {
            state.login = !state.login;
        },
        logout(state) {
            state.login = !state.login;
        }
    }
})

const unitSlice = createSlice({
    name : 'unitSlice',
    initialState : initialUnitState,
    reducers : {
        selectUnit(state,action){
            state.selectedUnitId = action.payload;
        },
    }
})

const profileSlice = createSlice({
    name : 'profileSlice',
    initialState : initialProfileState,
    reducers : {
        updateProfile(state,action){
            const {name,email,profileImg} = action.payload;
            state.name = name;
            state.email = email;
            state.profileImg = profileImg
        }
    }
})



export const store = configureStore({
    reducer : {
        login : loginSlice.reducer,
        unit : unitSlice.reducer,
        profile : profileSlice.reducer
    }
});

export const loginActions = loginSlice.actions
export const unitActions = unitSlice.actions
export const profileActions = profileSlice.actions

