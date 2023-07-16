const http = require('http')

const pingConnector = async ({ enabled = true, port = 40000 } = {}) => {
  if (!enabled) return { port }

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('I am alive\n')
  })

  try {
    await new Promise((resolve, reject) => {
      server.on('error', reject)
      server.listen(port, 'localhost', resolve)
    })
  } 
  catch (error) {
    if (error.code === 'EADDRINUSE') {
      console.log('PING CONNECTOR | ERROR | Port %s | Port in use', port)
    } 
    else {
      console.log('PING CONNECTOR | ERROR | %j ', error)
    }
    throw error // re-throw the error to handle it in the calling code
  }

  return { port }
}

module.exports = pingConnector
