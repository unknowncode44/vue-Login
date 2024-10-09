/**
 * @description Interface allows to define the structure of models to use them later
 */
export interface User{
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    // remember: boolean,
    isAdmin: boolean,
    // jwtToken: string,
    // Array para almacenar
    refreshTokens: string[]
}