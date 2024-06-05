// const path = require("path");
const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// Start express app
const app = express();

// 1) GLOBAL MIDDLEWARES
// Implement CORS
// app.use(cors());
// Access-Control-Allow-Origin *
// api.lms.com, front-end lms.com
// app.use(cors({
//   origin: ''
// }))

// Serving static files
// app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
//TODO:Setup #1 Robust Security Measures

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from same API

// Stripe webhook.

// Data sanitization against NoSQL query injection
// app.use(mongoSanitize());

// Data sanitization against XSS
// app.use(xss());

// Prevent parameter pollution

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 3) ROUTES

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
