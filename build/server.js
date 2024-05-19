import app from './app.js';
import logger from './utils/logger.js';
process.on('uncaughtException', (error) => {
    logger.error(`Uncaught Exception: ${error.message}`, { stack: error.stack });
    process.exit(1);
});
process.on('unhandledRejection', (reason) => {
    logger.error(`Unhandled Rejection: ${reason.message}`, { stack: reason.stack });
    process.exit(1);
});
app.listen(4000, () => { console.log(`App is running on http://localhost:4000`); });
setTimeout(() => {
    Promise.reject(new Error('Oops! unhandledRejection'));
}, 2000);
//# sourceMappingURL=server.js.map