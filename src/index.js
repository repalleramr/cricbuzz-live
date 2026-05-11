const { App } = require('./config/app');
const { env } = require('./config/env');

// 1. Create the express app instance
const app = new App().create();

// 2. SECURE PROXY FIX (Required for Vercel & express-rate-limit)
// This tells Express to trust the Vercel middleman so it can see your real IP.
app.set('trust proxy', 1);

// 3. CRITICAL: Export the app for Vercel's engine
module.exports = app;

// 4. Local compatibility
if (require.main === module) {
    const port = env.APP_PORT || 3000;
    app.listen(port, () => {
        console.log(`Server active locally on port ${port}`);
    });
}
