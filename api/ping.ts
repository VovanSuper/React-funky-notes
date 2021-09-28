import { VercelRequestQuery, VercelRequest, VercelResponse, VercelRequestBody } from '@vercel/node';

const pingHandler = (request: VercelRequest, response: VercelResponse) => {
  const { take }: VercelRequestQuery = request.query;
  const { data = 'to the World' }: VercelRequestBody = request.body;

  response.status(200).send(`Pong ${data} to ${take}`);
};

export default pingHandler;
