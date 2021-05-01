const _ = require('lodash')

const os = require('os')
const http = require('http')

const pingConnector = (params) => {
  const enabled = _.get(params, 'enabled', true)
  if (!enabled) return

  const port = _.get(params, 'port', 40000)
  let ip = _.get(params, 'ip')
  if (!ip) {
    // determine from interface
    let ifaces = os.networkInterfaces()
    let eth = ifaces['en0'] || ifaces['eth0']
    if (eth) ip = _.find(eth, { family: 'IPv4' }) && _.find(eth, { family: 'IPv4' }).address  
  }

  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('I am alive\n')
  }).listen(port, ip)
}

module.exports = pingConnector
