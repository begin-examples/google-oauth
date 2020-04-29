const { http } = require('@architect/functions')

async function logout() {
  return {
    session: {},
    location: '/'
  }
}

exports.handler = http.async(logout)
