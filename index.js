const app = require('./src/app')
const expressListRoutes = require('express-list-routes');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  expressListRoutes(app);
  console.log(`Judge API is running on ${port}`);
});

