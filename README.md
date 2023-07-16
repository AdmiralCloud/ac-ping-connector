# AdmiralCloud Ping Connector
The ac-ping-connector launches a simple HTTP server on a given port so uptime services can ping your service.

# Breaking change version 1
The function still behaves the same way in terms of functionality: it starts a server and logs an error if one occurs. 

The difference is that it now allows for better error handling and can be used with async/await syntax, which can make your code more readable and easier to reason about. 

# Installation
```
  yarn add ac-ping-connector
```

# Usage
``````
const acpc = require('./index')
try {
  const con = await acpc()
  // con -> { port: 40000 }
}
catch(e) {
  // handle error
}
``````

You can now send requests against the IP and port to check if the service is alive.


# License & Contributing

## Links
- [Website](https://www.admiralcloud.com/)
- [Facebook](https://www.facebook.com/MediaAssetManagement/)

## License
[MIT License](https://opensource.org/licenses/MIT) Copyright © 2009-present, AdmiralCloud AG, Mark Poepping

## Contributing
If you want to contribute, please make sure to add tests and have code coverage of 100% when running *yarn run test*.