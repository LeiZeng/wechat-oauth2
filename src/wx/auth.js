const DOMAIN = process.env.DOMAIN
const APPID = process.env.APPID
const APPSECRET = process.env.APPSECRET
const REDIRECT_URI = `${DOMAIN}/callback`
const SCOPE = 'snsapi_userinfo'
const STATE = 'testtest'

export default {
  STATE,
  getOauthPath() {
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&state=${STATE}#wechat_redirect`
  },
  getTokenPath(CODE, state) {
    if (!CODE || state !== STATE) {
      return null
    }
    return `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${APPID}&secret=${APPSECRET}&code=${CODE}&grant_type=authorization_code`
  },
  refreshTokenPath(refreshToken) {
    return `https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=${APPID}&grant_type=refresh_token&refresh_token=${refreshToken}`
  },
  checkTokenPath(token, openid) {
    return `https://api.weixin.qq.com/sns/auth?access_token=${token}&openid=${openid}`
  },
  getUserInfoPath(token, openid) {
    return `https://api.weixin.qq.com/sns/userinfo?access_token=${token}&openid=${openid}`
  }
}
