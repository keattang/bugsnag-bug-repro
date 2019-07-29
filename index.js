import Koa from 'koa'
import Bugsnag from '@bugsnag/js';
import bugsnagKoa from '@bugsnag/plugin-koa';

const bugsnag = Bugsnag({
    apiKey: 'YOUR-API-KEY-HERE',
    releaseStage: 'development',
    notifyReleaseStages: ['production'],
});

bugsnag.use(bugsnagKoa);

const middleware = bugsnag.getPlugin('koa')

const app = new Koa();
app.on('error', middleware.errorHandler);

app.use(middleware.requestHandler)
app.use(async ctx => {
    throw new Error('Some error occured');
    ctx.body = 'Hello World';
});

app.listen(3111);