const Koa = require('koa');
// 创建一个Koa对象表示web app本身:
const bodyParser = require('koa-bodyparser');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
// 导入controller middleware:
const controller = require('./controller');
const app = new Koa();
// 使用middleware:
app.use(controller());


app.use(bodyParser());
// add router middleware:
app.use(router.routes());

// 在端口3000监听:
app.listen(3008);
console.log('app started at port 3000...');