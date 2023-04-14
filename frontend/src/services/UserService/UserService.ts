import UserResponse from "../../model/interfaces/UserResponse";
import User from "../../model/classes/User";
import AuthenticationCredentials from "../../model/interfaces/AuthenticationCredentials";
import DataServiceAPI from "../DataServiceAPI";

export default class UserService {

    public static async authenticateUser(email: string, password: string): Promise<boolean> {

        const credentials: AuthenticationCredentials = {
            email: email,
            password: password,
        };

        try {
            const response = await DataServiceAPI.post('http://localhost:3000/auth/login', credentials);

            if (response.ok) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error(error);
            return false;
        }
    }

    public static async getAllUsers(): Promise<UserResponse> {

        try {
            const response = await DataServiceAPI.get('http://localhost:3000/user/getAll');

            const responseJson = await response.json();

            const userResponse = { data: responseJson.Data, message: responseJson.message, ok: responseJson.Ok };

            return userResponse;
        } catch (error) {
            const response: UserResponse = {
                data: [],
                message: `${error}`,
                ok: false
            };
            return response;
        }
    }

    public static async createUser(user: User): Promise<boolean> {
        try {
            const response = await DataServiceAPI.post('http://localhost:3000/user/createUser', user);

            if (response.ok) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error(error);
            return false;
        }
    }

    public static async getById(id: number): Promise<UserResponse> {

        const requestBody = { id: id };

        try {
            const response = await DataServiceAPI.get('http://localhost:3000/user/findById', requestBody);

            const responseJson = await response.json();

            const userResponse = { data: responseJson.Data, message: responseJson.message, ok: responseJson.Ok };

            return userResponse;
        } catch (error) {
            const response: UserResponse = {
                data: [],
                message: `${error}`,
                ok: false
            };
            return response;
        }
    }

    public static async getUserByEmail(email: string): Promise<UserResponse> {

        const requestBody = { email: email };

        try {
            const response = await DataServiceAPI.get('http://localhost:3000/user/findUserByEmail', requestBody);

            const responseJson = await response.json();

            const userResponse = { data: responseJson.Data, message: responseJson.message, ok: responseJson.Ok };

            return userResponse;
        } catch (error) {
            const response: UserResponse = {
                data: [],
                message: `${error}`,
                ok: false
            };
            return response;
        }
    }

    public static async getUserByCpf(cpf: string): Promise<UserResponse> {

        const requestBody = { cpf: cpf };

        try {
            const response = await DataServiceAPI.get('http://localhost:3000/user/findUserByCpf', requestBody);

            const responseJson = await response.json();

            const userResponse = { data: responseJson.Data, message: responseJson.message, ok: responseJson.Ok };

            return userResponse;
        } catch (error) {
            const response: UserResponse = {
                data: [],
                message: `${error}`,
                ok: false
            };
            return response;
        }
    }

    public static async getUserByUserName(userName: string): Promise<UserResponse> {

        const requestBody = { userName: userName };

        try {
            const response = await DataServiceAPI.get('http://localhost:3000/user/findUserByUserName', requestBody);

            const responseJson = await response.json();

            const userResponse = { data: responseJson.Data, message: responseJson.message, ok: responseJson.Ok };

            return userResponse;
        } catch (error) {
            const response: UserResponse = {
                data: [],
                message: `${error}`,
                ok: false
            };
            return response;
        }
    }

    public static async getUserByFullName(fullName: string) {

        const requestBody = { fullName: fullName };

        try {
            const response = await DataServiceAPI.get('http://localhost:3000/user/findUserByFullName', requestBody);

            const responseJson = await response.json();

            const userResponse = { data: responseJson.Data, message: responseJson.message, ok: responseJson.Ok };

            return userResponse;
        } catch (error) {
            const response: UserResponse = {
                data: [],
                message: `${error}`,
                ok: false
            };
            return response;
        }
    }

    public static async deleteUser(userId: number): Promise<boolean> {

        const requestBody = {
            userId: userId,
        };

        try {
            const response = await DataServiceAPI.delete('http://localhost:3000/user/deleteUser', requestBody);

            if (response.ok) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}