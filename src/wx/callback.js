import wxAuth from './auth'

export default (opt) => (req, res, next) => {
  if (req.query.code) {
    const { code, state } = req.query
    const tokenURL = wxAuth.getTokenPath(code, state);
    if (tokenURL) {
      fetch(tokenURL).then(data => data.json())
        .then(token => {
            res.cookie('wxt', 'testtest')
        })
    }
  }
  next()
}
