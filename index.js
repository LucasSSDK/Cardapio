const routes = require('./src/routes/menu.Route');
const connectToDatabase = require('./src/database/mongodb');


app.use('/menu', routes);

connectToDatabase();
