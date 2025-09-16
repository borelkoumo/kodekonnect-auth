import { createOrUpdateUser, deleteUser } from '@/lib/actions/user';
import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    console.log(`Webhook payload:`, evt.data);

    let message: string = '';
    if (evt.data?.id && evt?.type) {
      switch (evt.type) {
        case 'user.created':
        case 'user.updated':
          const user = await createOrUpdateUser({
            id: evt.data.id,
            email: evt.data.email_addresses[0]?.email_address ?? '',
            first_name: evt.data.first_name ?? '',
            last_name: evt.data.last_name ?? '',
            image_url: evt.data.image_url ?? '',
            username: evt.data.username ?? '',
          });
          message = 'User created/updated';
          break;

        case 'user.deleted':
          await deleteUser(evt.data.id);
          message = 'User deleted';
          break;

        default:
          message = `${evt.type} not yet handled`;
          break;
      }
    }

    return new Response(message, { status: 200 });
  } catch (err) {
    console.error('Error verifying webhook', err);
    return new Response('Error verifying wehbook', { status: 400 });
  }
}
