// Usamos store de pinia que nos permite pasar un fn que 
// defina propiedades y métodos reactivos para devolver
// un obj con lo que queremos mostrar
import { defineStore } from "pinia";
// traemos el modelo
import type { User } from "@/models/UserModel";

// Definimos store user
export const useUserStore = defineStore('user', {
  // state devuelve obj representando estado INICIAL
  state: () => ({
    /* user se define como estrutura tipo User(interfaz)
    Guarda info del user despues de login */
    user: {} as User, // Inicia como obj vacío
  }),
  // actions son métodos que permiten modificar el state de store
  actions: {
    /* setUserInfo actualiza info del usuario
    Recibe el objeto userInfo de tipo logindata */
    setUser(user: User) {
      // Actualizamos el state de userInfo con los datos ingresados
      this.user = user;
    },
  },
});
