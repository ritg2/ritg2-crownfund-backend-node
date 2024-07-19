const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation error",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbiden",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
    default:
      res.status(500).json({
        title: "Error, Something Went Wrong!",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
  }
};

module.exports = errorHandler;
