import app from './app';
import logger from './utils/logger';

process.on('uncaughtException', (error: Error) => {
    logger.error(`Uncaught Exception: ${error.message}`, { stack: error.stack });
    process.exit(1);
  });
  
  process.on('unhandledRejection', (reason: Error) => {
    logger.error(`Unhandled Rejection: ${reason.message}`, { stack: reason.stack });
    process.exit(1);
  });

app.listen(4000, () => {console.log(`App is running on http://localhost:4000`)});

setTimeout(() => {
    Promise.reject(new Error('Oops! unhandledRejection'));
  }, 2000);