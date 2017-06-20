import router from './apiRouter';
import path from 'path';

router.get('/admin_control', (req, res) => {
    res.sendFile(path.resolve('./src/admin.html'));
});

export default router;