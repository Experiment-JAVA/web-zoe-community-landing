import { combineReducers } from 'redux';
import contact from './contact';
import promo from './promo';
import quote from './quote';
import login from './login';
import signup from './signup';
import resetPassword from './resetPassword';
import changePassword from './changePassword';
import subscribe from './subscribe';
import search from './search';
import comment from './comment';

export default combineReducers({
    subscribe,
    contact,
    promo,
    quote,
    login,
    signup,
    resetPassword,
    changePassword,
    search,
    comment,
});
