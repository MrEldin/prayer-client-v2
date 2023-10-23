import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes';

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next();
    }

    const middleware = to.meta.middleware;

    const context = { next, to, from };
    const iterator = (middlewares, middlewareIndex) => {
        const currentMiddleware = middlewares[middlewareIndex];

        if (!currentMiddleware) {
            return next();
        }

        currentMiddleware(to, from, (...args) => {
            if (args.length) {
                return next(...args);
            }

            iterator(middlewares, middlewareIndex + 1);
        });
    };

    iterator(middleware, 0);
});

export default router;
