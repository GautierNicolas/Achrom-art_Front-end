const saveToken = (token) => {
    localStorage.setItem('jwt')
}

const logout = () => {
    localStorage.removeItem('jwt')
}

const isLogged = () => {
    const token = localStorage.getItem('token');
    return !!token
}

export const AccountService = {
    saveToken,
    logout,
    isLogged
}