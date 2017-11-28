const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
// app.use(async (ctx, next) => {
//     let tstart = new Date().getTime();
//     await next();
//     let tend = new Date().getTime();
//     ctx.response.type = 'text/html';
//     ctx.response.body = `<h1>Hello world</h1>`;
//     console.log(`请求地址：${ctx.path},响应时间：${tend - tstart}`)
// });
// app.use(async (ctx, next) => {
//     console.log('中间件1， dosomething');
//     await next();
//     console.log('中间件1 end')
// });
// app.use(async (ctx, next) => {
//     console.log('中间件2， dosomething');
//     // await next();
//     console.log('中间件2 end')
// });
// app.use(async (ctx, next) => {
//     console.log('中间件3， dosomething');
//     await next();
//     console.log('中间件3， end')
// })
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`;
});
router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>';
});

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>';
});
app.use(router.routes())
app.listen(3000, () => {
    console.log('server on 3000')
});