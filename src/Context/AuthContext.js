import { createContext, useEffect, useReducer } from "react";

const initial_state = {
    user: JSON.parse(localStorage.getItem("user")) !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
    loading: true,
    error: null
}

const authReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                user: null,
                loading: true,
                error: null
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            }
        case "LOGIN_FAILURE":
            return {
                ...state,
                user: null,
                loading: false,
                error: action.payload
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                user: null,
                loading: false,
                error: null
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
                error: action.payload
            }
        default: return state
    }
}

export const AuthContext = createContext(initial_state);


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initial_state);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return <AuthContext.Provider value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>
}