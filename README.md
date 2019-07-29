This repository contains the code the reproduces a bug that I am seeing in bugsnag.

It runs a koa server with the `bugsnag.errorHandler` and throws an uncaught error in one of the middleware. This results in the following terminal output: `Report not sent due to releaseStage/notifyReleaseStages configuration.` which masks the actual error.

To run and start the server install `yarn` and run:
```
yarn
yarn start
```
Then navigate to `http://localhost:3111` in a browser.