const errorHandler = (error, req, res, next) => {
  console.log("Shftwoo ", error);
  return res.status(error.status || 500).json(error.message);
};

module.exports = errorHandler;
