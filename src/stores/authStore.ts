import { fetchWrapper } from "@/helpers/fetchWrapper";
import type { User } from "@/models/UserModel";
import { defineStore } from "pinia";
import router from "@/router";

const baseUrl = `${import.meta.env.VITE_API_URL}/users`

/**
 * @param logout revokes token so it can't be used after logout
 */

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        auth: {} as { loading: boolean, data?: User | null, refreshTokenTimeout: number | null }
    }),
    actions: {
        async login(username: string, password: string) {
            this.auth.data = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password }, { credentials: 'include' });
            this.startRefreshTokenTimer();
        },
        async logout() {
            await fetchWrapper.post(`${baseUrl}/revoke-token`, {}, { credentials: 'include' });
            this.stopRefreshTokenTimer();
            this.auth.data = null;
           
        },
        async refreshToken() {
            this.auth.data = await fetchWrapper.post(`${baseUrl}/refresh-token`, {}, { credentials: 'include' });
            this.startRefreshTokenTimer();
        },
        startRefreshTokenTimer() {
            if (!this.auth.data || !this.auth.data.jwtToken) return;

            // Parse JSON object from base64 encoded JWT token
            const jwtBase64 = this.auth.data.jwtToken.split('.')[1];
            const jwtToken = JSON.parse(atob(jwtBase64));

            // Set a timeout to refresh the token a minute before it expires
            const expires = new Date(jwtToken.exp * 1000);
            const timeout = expires.getTime() - Date.now() - (60 * 1000);

            this.auth.refreshTokenTimeout = setTimeout(() => this.refreshToken, timeout);
        },    
        stopRefreshTokenTimer() {
            if (this.auth.refreshTokenTimeout) {
                clearTimeout(this.auth.refreshTokenTimeout);
                this.auth.refreshTokenTimeout = null;
            }
        }
    }
})
