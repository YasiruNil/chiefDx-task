import { get } from "./backendClient"

export const getUserDetails = () => get("jsonplaceholder.typicode.com/users")
