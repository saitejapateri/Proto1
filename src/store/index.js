import {createSlice, configureStore} from '@reduxjs/toolkit'


const initialLoginState = {login : false}
const initialUnitState = {selectedUnitId : 0}
const initialProfileState = {name : null , email : null, profileImg : null};
const initialPdfState = {isOpen : false, pdfUrl : null, pdfName : null};

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

const pdfSlice = createSlice({
    name : 'pdfSlice',
    initialState : initialPdfState,
    reducers : {
        setPdf(state,action){
            const {isOpen,pdfUrl,pdfName} = action.payload;
            state.isOpen = isOpen;
            state.pdfUrl = pdfUrl;
            state.pdfName = pdfName;
        },
        unSetPdf(state){
            state.isOpen = false;
            state.url = null;
        }
    }
})



export const store = configureStore({
    reducer : {
        login : loginSlice.reducer,
        unit : unitSlice.reducer,
        profile : profileSlice.reducer,
        pdf : pdfSlice.reducer
    }
});

export const loginActions = loginSlice.actions
export const unitActions = unitSlice.actions
export const profileActions = profileSlice.actions
export const pdfActions = pdfSlice.actions

