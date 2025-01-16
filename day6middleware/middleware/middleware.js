const condition = (req, res, next) => {
  const isAuth = false
  if (isAuth) {
    next();
    return;
  }
  return res.send("Not authorized");
};

module.exports = condition;
