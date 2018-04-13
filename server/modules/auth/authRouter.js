import passport from 'passport';

export default (router) => {
    router.post('/authenticate', async(req, res, next) => {
        return passport.authenticate('local-login', (err, token, userData) => {
            if (err) {
                if (err.name === 'IncorrectCredentialsError') {
                  return res.status(400).json({
                    success: false,
                    message: err.message
                  });
                }
          
                return res.status(400).json({
                  success: false,
                  message: 'Could not process the form.'
                });
            }
        
        
            return res.json({
                success: true,
                message: 'You have successfully logged in!',
                token,
                user: userData
            });
          })(req, res, next);
    });
};