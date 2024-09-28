// Usamos store de pinia que nos permite pasar un fn que 
// defina propiedades y métodos reactivos para devolver
// un obj con lo que queremos mostrar
import { defineStore } from "pinia";
// traemos el modelo
import type { LoginData } from "@/models/LoginModel";

// Definimos store user
export const useUserStore = defineStore('user', {
  // state devuelve obj representando estado INICIAL
  state: () => ({
    /* userInfo se define como estrutura tipo logindata(interfaz)
    Guarda info del user despues de login */
    userInfo: {} as LoginData, // Inicia como obj vacío
  }),
  // actions son métodos que permiten modificar el state de store
  actions: {
    /* setUserInfo actualiza info del usuario
    Recibe el objeto userInfo de tipo logindata */
    setUserInfo(userInfo: LoginData) {
      // Actualizamos el state de userInfo con los datos ingresados
      this.userInfo = userInfo;
    },
  },
});
