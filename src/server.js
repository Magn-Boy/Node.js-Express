const app = require('./app.js');

const { PORT } = require('./common/config.js');

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
