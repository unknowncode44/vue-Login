import { fetchWrapper } from "@/helpers/fetchWrapper";
import type { User } from "@/models/LoginModel";
import { defineStore } from "pinia";

const baseUrl = `${import.meta.env.VITE_API_URL}/users`

/**
 * @param logout revokes token so it can't be used after logout
 */

export const useAuthStore = defineStore({
    id: 'auth',
    state: () =>({
        auth: {} as { loading: boolean, data?: User | null, refreshTokenTimeout: number | null}
    }),
    actions: {
        logout(){
            fetchWrapper.post(`${baseUrl}/revoke-token`, {}, { credentials: 'include'});
        }
    }
})
