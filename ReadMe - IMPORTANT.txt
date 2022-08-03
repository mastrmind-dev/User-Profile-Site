Plan:
1.Initialize a local json-server to update, delete, insert data. (Because typicode json server doesn't save data or really update them. They do fake operations.)
2.Fetch data from the typicode API and insert those data to local json sersver.
3.Retrieve data from local json server and show in the webpage.

Important:

Before "npm run server",

"npm install -g json-server && json-server --watch db.json"