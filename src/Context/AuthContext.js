import authService from "../services/AuthService";

const context = {
    login: (email, password) => {
        if (!email || !password) return false;

    const asyncFetchUser = async () => {
        try {
            let response = await authService.login(email, password);
            let token = response.data.data.token;

            if (response.status !== 200) return false;

            localStorage.removeItem("content");
            localStorage.removeItem("hasLoggedIn");

            localStorage.setItem("content", token);
            localStorage.setItem("hasLoggedIn", "true");

            return { status: response.status };
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            return false;
        }
    };
    return asyncFetchUser();
    },
    logout: function() {
        localStorage.removeItem("content");
        localStorage.removeItem("hasLoggedIn");
    },
    getToken: function() {
        return localStorage.getItem("content");
    },
    isUserLogged: () => {
        return !!localStorage.getItem("hasLoggedIn")
    },
    register: (token) => {
        localStorage.removeItem("content");
        localStorage.removeItem("hasLoggedIn");

        localStorage.setItem("content", token);
        localStorage.setItem("hasLoggedIn", "true");
    }
}
export default context;