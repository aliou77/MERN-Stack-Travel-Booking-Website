import { createContext, useEffect, useReducer } from "react"


const initial_state = {
    user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
    loading: false,
    error: null,
}

const AuthContext = createContext(initial_state);

export {
    AuthContext
}

const authReducer = (state, action) =>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            }
        case "REGISTER_SUCCESS":
            return {
                user: null,
                loading: false,
                error: null,
            }
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null,
            }
        default:
            return state;

    }
}

export const AuthContextProvider = ({ children })=>{
    const [state, dispatch] = useReducer(authReducer, initial_state);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user])

    // return the provider for this context
    return <AuthContext.Provider value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
    }}>
        { children }
    </AuthContext.Provider>
}

