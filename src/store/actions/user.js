import { userActions } from "../reducers/userReducers";

export const logout = () => (dispatch) => {
    dispatch(userActions.resetuserInfo());
    localStorage.removeItem('account');
}