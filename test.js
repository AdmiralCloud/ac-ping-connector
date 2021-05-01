const acpc = require('./index')
const http = require('http');
const os = require('os')
const _  = require('lodash');
const { expect } = require('chai');

describe('Run test', () => {
  let ip
  let port = 40400

  it('Init connector with enabled false', (done) => {
    acpc({ enabled: false })
    return done()
  })

  it('Test port', done => {
    http.get('http://localhost:40000').on("error", (error) => {
      expect(error).to.have.property('code', 'ECONNREFUSED')
      return done()
    })
  })


  it('Init Connector on default port', (done) => {
    acpc({ ip: '127.0.0.1' })
    return done()
  })

  it('Test default port', done => {
    http.get('http://localhost:40000', (resp) => {
      expect(resp).to.have.property('statusCode', 200)
      return done()
    })
  })

  it(`Init Connector on port ${port} and detected IP`, (done) => {
    let ifaces = os.networkInterfaces()
    let eth = ifaces['en0'] || ifaces['eth0']
    ip = _.find(eth, { family: 'IPv4' }) && _.find(eth, { family: 'IPv4' }).address  

    acpc({ port })
    return done()
  })

  it(`Test port ${port}`, done => {
    http.get(`http://${ip}:${port}`, (resp) => {
      expect(resp).to.have.property('statusCode', 200)
  
      let message = ''
      resp.on('data', (chunk) => {
        message += chunk;
      })
      resp.on('end', () => {
        expect(message.toString()).to.contain('I am alive')
        return done()
      });
    })
  })

})
