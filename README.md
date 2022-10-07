# request-dumper
Small Express server that binds to all paths at a configured port and dumps everything to console.log

1. Clone repo
1. Run `npm i` to get latest packages
1. Run `npm run start` to start the dumper
   1. By default:
      1. It'll bind to localhost:8030.  The port can be configured by setting the environment variable PORT 
      1. Binds to GET, POST, PATCH, DELETE, PUT on any path.  This is not configurable at this time.

# Purpose
Originally I created this as a quick easy way to stand up a webhook that I can control and use for debugging purposes.  Especially in the case of working with PHI and other sensitive information that I cannot send to a thirdparty server.  
