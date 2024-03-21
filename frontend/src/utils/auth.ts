import Cookies from "universal-cookie";

export const STORAGE_PRIVY_TOKEN = 'privy:token';
export const STORAGE_PRIVY_REFRESH = 'privy:refresh_token';
export const COOKIE_PRIVY_TOKEN = 'privy-token';
export const COOKIE_PRIVY_SESSION = 'privy-session';
export const COOKIE_PRIVY_REFRESH = 'privy-refresh-token';

export const PRESSPASS_USER = 'presspass:userId';

const cookies = new Cookies()
/* export const getCookie = () => {
    return cookies.get("currentUser")
}

export const setCookie = async (currentUser: { username: string; vault_id: string }) => {
    return cookies.set("currentUser", currentUser)
}

export const clearCookie = async () => {
    return cookies.remove("currentUser")
} */

export class Auth {
    static get isAuthenticated() {
        return localStorage.getItem(STORAGE_PRIVY_TOKEN) ? true : false;
    }

    static get accessToken() {
        return localStorage.getItem(STORAGE_PRIVY_TOKEN);
    }

    static setAccessToken(token: string) {
        return localStorage.setItem(STORAGE_PRIVY_TOKEN, token);
    }

    static clearAccessToken() {
        cookies.remove(COOKIE_PRIVY_TOKEN)
        cookies.remove(COOKIE_PRIVY_REFRESH)
        cookies.remove(COOKIE_PRIVY_SESSION)
        localStorage.removeItem(STORAGE_PRIVY_REFRESH);
        localStorage.removeItem(STORAGE_PRIVY_TOKEN);
        return true
    }

    static setUser(userId: string) {
        return localStorage.setItem(PRESSPASS_USER, userId);
    }

    static get getUser() {
        return localStorage.getItem(PRESSPASS_USER);
    }

    static removeUser() {
        return localStorage.removeItem(PRESSPASS_USER);
    }



}
