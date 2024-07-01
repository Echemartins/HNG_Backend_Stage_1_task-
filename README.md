HNG Internship Task - Backend Track
Overview
This project is a basic web server built with Node.js and TypeScript. It exposes an API endpoint that returns a greeting message along with the client's IP address, location, and current temperature in the visitor's city.

Features
Endpoint to greet visitors by name.
Fetches and displays the client's IP address.
Determines the client's city based on the IP address.
Fetches and displays the current temperature in the client's city.
Endpoint
GET /api/hello
Query Parameters:
visitor_name: The name of the visitor.

To test the API, you can use the following URL: http://localhost:3000/api/hello?visitor_name=Martins.
This will return a JSON response with the client's IP address, location, and a greeting message including the current temperature in the client's city.

For more information about the HNG Internship, visit:

https://hng.tech/premium
https://hng.tech/hire
https://hng.tech/premium