const exampleController = (req,res) => {
  res.send({
    message: 'welcome to the api'
  })
}

module.exports = function (router) {
  router.get('/', exampleController);
};