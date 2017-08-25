import Koa from 'koa'
import bugsnag from 'bugsnag';

bugsnag.register('YOUR-API-KEY-HERE', {
    releaseStage: 'development',
    notifyReleaseStages: ['production'],
});

const app = new Koa();
app.on('error', bugsnag.koaHandler);

app.use(async ctx => {
    throw new Error('Some error occured');
    ctx.body = 'Hello World';
});

app.listen(3111);