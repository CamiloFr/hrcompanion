const express = require('express');
const morgan = require('morgan');
const app = express();
const connectDB = require('./config/db')
const cors = require('cors');

app.set('port', process.env.PORT || 3000);

// Ver en consola
app.use(morgan('dev'));

// conectar a la base de datos
connectDB();

app.use(cors());

// parsear sin necesidad del bodyparser
app.use(express.json({extended: true}));

//Importando rutas
app.use('/api/allusers', require('./router/allusers.routes'));

app.use('/api/users', require('./router/users.routes'));

app.use('/api/hotels', require('./router/hotels.routes'));

app.use('/api/auth', require('./router/auth.routes'));

app.use('/api/curriculum', require('./router/curriculum.routes'));

app.use('/api/allcurriculums', require('./router/allcurriculums.routes'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})