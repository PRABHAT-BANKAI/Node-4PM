const auth = (req, res, next) => {
  if (true) {
    next();
  }
  res.status(401).json({ message: "Unauthorized" });
};

module.exports = auth;
