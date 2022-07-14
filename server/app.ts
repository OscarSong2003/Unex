const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const PORT = 9000;

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// types
import { Request, Response, NextFunction } from 'express';
import { createServer } from 'http';
// mongoose
import mongoose from 'mongoose';

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user1:user1@unex.dbjmtzd.mongodb.net/?retryWrites=true&w=majority";
const userRoute = require('./routes/users');
const addRoute = require('./routes/add');
const expenditureRoute = require('./routes/expenditure')
const monthlyRoute = require('./routes/monthly');

const start = async () => {
  try {
    await mongoose.connect(uri);
    console.log('connected to mongodb');
  } catch (err: any) {
    console.log("error connecting to mongodb", err);
  }
  // basic configs
  const app = express();
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  // Cors
  app.use(cors());
  // routes
  app.use('/user', userRoute);
  app.use('/add', addRoute);
  app.use('/exp', expenditureRoute);
  app.use('/monthly', monthlyRoute);

  app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!'); 
  })

  const httpServer = createServer(app);

  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  } );
   // catch 404 and forward to error handler
   app.use(function(req: Request, res: Response, next: NextFunction) {
    next(createError(404));
  });

  // error handler
  app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}

start();