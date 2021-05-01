# AdmiralCloud Ping Connector
The ac-ping-connector launches a simple HTTP server on a given port so uptime services can ping your service.


# Installation
```
  yarn add ac-osticket
  npm install ac-osticket --save
```

# Usage
Create API Key in OSTicket and instanciate OSTicket with your OSTicket URL and those API keys.

## Init
```
const ost = require('osticket')
ost.init({
  baseUrl: 'https://myOSTicketURL',
  apiKey: 'abc-123', 
  apiSecret: 'abc-secret' // optional if you have tweaked OSTicket
})

// see below for payload
let response = await ost.createTicket(ticket)
{ ticketId: 123456 }
```

# License & Contributing

## Links
- [Website](https://www.admiralcloud.com/)
- [Twitter (@admiralcloud)](https://twitter.com/admiralcloud)
- [Facebook](https://www.facebook.com/MediaAssetManagement/)

## License
[MIT License](https://opensource.org/licenses/MIT) Copyright © 2009-present, AdmiralCloud AG, Mark Poepping

## Contributing
If you want to contribute, please make sure to add tests and have code coverage of 100% when running *yarn run test*.