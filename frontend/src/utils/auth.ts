
export const AUTH_PRIVY_TOKEN_KEY = 'privy:token';
export const PRESSPASS_USER = 'presspass:userId';

export class Auth {
    static get isAuthenticated() {
        return localStorage.getItem(AUTH_PRIVY_TOKEN_KEY) ? true : false;
    }

    static get accessToken() {
        return localStorage.getItem(AUTH_PRIVY_TOKEN_KEY);
    }

    static setAccessToken(token: string) {
        return localStorage.setItem(AUTH_PRIVY_TOKEN_KEY, token);
    }

    static clearAccessToken() {
        return localStorage.removeItem(AUTH_PRIVY_TOKEN_KEY);
    }

    static setUser(userId: string) {
        return localStorage.setItem(PRESSPASS_USER, userId);
    }

    static get getUser() {
        return localStorage.getItem(PRESSPASS_USER);
    }



}
