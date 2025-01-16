const condition = (req, res, next) => {
  console.log(req.body);
  const isAuth = true;
  if (isAuth) {
    next();
    return;
  }
  return res.send("Not authorized");
};

module.exports = condition;
