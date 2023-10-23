import auth from '@/routes/auth';
import dashboard from '@/routes/dashboard';
import home from '@/routes/home';

export default [...auth, ...home, ...dashboard];
