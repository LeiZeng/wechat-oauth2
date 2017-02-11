import wxAuth from './auth'

export default (opt) => (req, res, next) => {
  if (req.path === '/callback') {
    return next()
  }
  if (!req.cookies.wxt) {
    return res.redirect(wxAuth.getOauthPath())
  }
  next()
}
