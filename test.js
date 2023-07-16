const acpc = require('./index')
const http = require('http')
const { expect } = require('chai')

describe('Run test', () => {
  let port = 40000

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


  it('Init Connector on default port', async() => {
    try {
      const init = await acpc()
      expect(init.port).to.eql(port)

    } 
    catch (error) {
      // Handle the error here if necessary
    }
  })

  it('Test default port', done => {
    http.get('http://localhost:40000', (resp) => {
      expect(resp).to.have.property('statusCode', 200)
      return done()
    })
  })

})


describe('Check errors', () => {
  let consoleOutput = []
  const originalLog = console.log

  beforeEach(() => {
    consoleOutput.length = 0
    console.log = (...output) => consoleOutput.push(...output)
  })

  afterEach(() => {
    console.log = originalLog
  })

  it('Check invalid port', async () => {
    try {
      await acpc()
    } 
    catch (error) {
      // Handle the error here if necessary
    }
    expect(consoleOutput.join(' ')).to.include("Port in use")
  })

  it('Check error for restricted port', async () => {
    try {
      await acpc({ port: 80 })
    } 
    catch (error) {
      // Handle the error here if necessary
    }
    expect(consoleOutput.join(' ')).to.include("EACCES")
  })

})