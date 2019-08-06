import lscache from 'lscache'

// enable warnings
if (process.env.NODE_ENV !== 'production') {
  lscache.enableWarnings(true)
}

/** For "cachear" data */
const tokenKey = 'seosemapi'
const tokenService = {
  set: token => lscache.set(tokenKey, { token },600),
  get: () => lscache.get(tokenKey),
  delete: () => lscache.flush()
}

export default tokenService
