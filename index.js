//	Visit localhost:3000 to view readout from the server
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
	http.get('http://jsonplaceholder.typicode.com/users?id=1', (res) => {
		res.on('data', (d) => {
			//process.stdout.write(d);
			response.end(d);
		});
	}).on('error', (e) => {
		console.error(e);
	});
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('Error, check your stuff!', err);
	}
	console.log(`Server is listening on ${port}`);
})