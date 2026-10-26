import { AuthContext } from "../hooks/useAuth";

export function AuthContextProvider({ children }) {

    const profileInfo = "Chandu";

    const value = {
        profileInfo,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

};