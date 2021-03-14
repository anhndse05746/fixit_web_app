
export const userLogin = (status) => {
    return{
        type: 'LOGIN',
        payload: status,
    }
}