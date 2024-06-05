/* eslint-disable node/no-unsupported-features/es-syntax */
// eslint-disable-next-line import/no-useless-path-segments
import AppError from "./../utils/appError";

//TODO: #2 Complete error logging

// eslint-disable-next-line no-unused-vars
const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

// eslint-disable-next-line no-unused-vars
const sendErrorDev = (err, req, res) => {
  // A) API
  if (req.originalUrl.startsWith("/api")) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  }

  // B) RENDERED WEBSITE
  console.error("ERROR 💥", err);
  return res.status(err.statusCode).render("error", {
    title: "Something went wrong!",
    msg: err.message
  });
};
