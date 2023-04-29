import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import { makeRedirectUri } from "expo-auth-session";

interface AuthContextType {
    authUser: User | null;
    login: () => void;
    logout: () => void;
}

interface Props {
    children: ReactNode;
}

WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    if (!authContext)
        throw new Error("AuthContext has to be used within <AuthContext.Provider>")


    return authContext;
}

export function AuthProvider(props: Props) {
    const [authUser, setAuthUser] = useState<User | null>(null);
    const [token, setToken] = useState("");

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: Constants.expoConfig?.extra?.expo_client_id,
        // androidClientId: Constants.expoConfig?.extra?.android_client_id,
        // redirectUri: makeRedirectUri({
        //     scheme: "hdmicontrol"
        // })
    });

    const login = async () => {
        promptAsync();
    }

    const logout = () => {

    }

    useEffect(() => {
        if (response?.type === "success") {
            setToken(response.authentication!.accessToken);
            getUserInfo();
        }
    }, [response, token]);

    const getUserInfo = async () => {
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            setAuthUser(user);
        } catch (error) {
            // Add your own error handler here
        }
    };

    return (
        <AuthContext.Provider value={{ authUser, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}