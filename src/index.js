const { App } = require('./config/app');
const { env } = require('./config/env');

// 1. Create the express app instance
const app = new App().create();

// 2. CRITICAL: Export the app for Vercel's engine
module.exports = app;

// 3. Local compatibility (Only runs on your PC, not Vercel)
if (require.main === module) {
    const port = env.APP_PORT || 3000;
    app.listen(port, () => {
        console.log(`Server active locally on port ${port}`);
    });
}
