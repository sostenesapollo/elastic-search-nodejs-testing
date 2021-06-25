# elastic-search-nodejs-testing
1. clone the repo
2. install docker and docker-compose in your machine
3. in the project folder run `docker-compose up -d`
4. `docker ps` shows you the running containers.
5. Kibana should run in `http://localhost:5601/`
6. Install nodejs requirements `npm i` and `node src/server.js` to run nodejs app
7. Use the express endpoints `http://localhost:3000/create` `http://localhost:3000/list` and `http://localhost:3000/delete_last`.