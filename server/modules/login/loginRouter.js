import loginHandler from './loginHandler';

export default (router) => {

    router.post('/login', async(req, res, next) => {
        try {
            const isUserValid = loginHandler.login(req.body.user_id, req.body.pwd);
            if (isUserValid) {
                res.status(200).send({ user_id: 'abinash', role: 'Author', email_id: 'Abinash.Patra@jaitra.com' });
            } else {
                next({ status: 500, message: 'invalid user' });
            }
        } catch (error) {
            next({ status: 500, message: error.message });
        }
    });

};