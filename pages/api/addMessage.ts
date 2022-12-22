// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { serverPusher } from '../../pusher';
import redis from '../../redis';
import { Message } from '../../typings';

type Data = {
  message: Message;
};

type ErrorData = {
    body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
    if(req.method !== 'POST') {
        // Do something
        res.status(405).json({ body: 'Method Not Allowed' })
        return;
    }

    const {message} = req.body;

    const newMessage = {
        ...message,
        // Replace the timestamp of the user with the server timestamp
        created_at: Date.now()
    };

    // Push to database
    await redis.hset('messages', message.id, JSON.stringify(newMessage));
    serverPusher.trigger('messages', 'new-message', newMessage);

    res.status(200).json({ message: newMessage });
}
