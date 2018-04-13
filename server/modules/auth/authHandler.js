import userModel from './userModel';
import { isUndefined } from 'util';

export default {
    authenticate
};

const User = (user) => { return {fname: user.first_name, mname: user.middle_name, lname: user.last_name, email: user.email, status: user.status}};

async function authenticate(user_id, pwd) {
    let query = userModel.findOne({user_id:user_id}); 
    let result = null;
    await query.exec(function(err, user) {
        if (err) {
            result = {status:2, message: err};
            return;
        }
        if (user != null) {
            if (user.password === pwd) {
                result = {status: 1, message: 'login success', user: new User(user)};
                return;
            }  
        } 
        result = {status: 0, message: 'username or password is invalid'}; 
    });
    return result;    
} 

