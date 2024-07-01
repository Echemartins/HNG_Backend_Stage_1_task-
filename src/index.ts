import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', async (req: Request, res: Response) => {
  const visitorName = req.query.visitor_name as string
  const clientIp = req.socket.remoteAddress || req.ip;
  const apiKey = 'f7604e9038003f77b30925b6d3a7b62e'

  try {
    const locationResponse = await axios.get('http://ip-api.com/json/');
    const city = locationResponse.data.city;
    const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const temp = weatherResponse.data.main.temp;

    res.status(200).json({
      client_ip: clientIp,
      location: city,
      greeting: `Hello, ${visitorName}!, the temperature is ${temp} degrees Celsius in ${city}`
    });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch location data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
