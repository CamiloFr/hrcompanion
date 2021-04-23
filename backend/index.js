const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
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

app.use('/', require('./router/task.routes'));

//Importando rutas
app.use('/api/users', require('./router/users.routes'));

app.use('/api/hotels', require('./router/hotels.routes'));

app.use('/api/auth', require('./router/auth.routes'));

// import request from 'request';
// import async from 'async';
// import mongoose from 'mongoose';
// import Shows from './models/shows';

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})