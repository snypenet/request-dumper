# request-dumper
Small Express server that binds to all paths at a configured port and dumps everything to console.log

1. Clone repo
1. Run `npm i` to get latest packages
1. Run `npm run start` to start the dumper
   1. By default:
      1. It'll bind to localhost:8030.  The port can be configured by setting the environment variable PORT 
      1. Binds to GET, POST, PATCH, DELETE, PUT on any path.  This is not configurable at this time.
