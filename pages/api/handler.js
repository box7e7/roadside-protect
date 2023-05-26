import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get((req, res) => {
  // Handle GET request logic
  res.json({ message: 'This is a GET request' });
});

handler.post((req, res) => {
  // Handle POST request logic
  res.json({ message: 'This is a POST request' });
});

export default handler;