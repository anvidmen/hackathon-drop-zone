export const refresh = () => {
    window.location.reload()
}

export const auth = user => {
    return localStorage.setItem('User', JSON.stringify(user))
}

export const logout = () => {
    window.localStorage.clear()
    refresh()
}