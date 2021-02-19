import { NowRequest, NowResponse, NowRequestBody, VercelRequestQuery } from '@vercel/node';

const pingHandler = (request: NowRequest, response: NowResponse) => {
  const { take }: VercelRequestQuery = request.query;
  const { data = 'to the World' }: NowRequestBody = request.body;
  console.log({ take });

  response.status(200).send(`Pong ${data}!`);
};

export default pingHandler;
