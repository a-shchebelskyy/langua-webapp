import { clerkClient } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  const { data, type } = await req.json();

  if (type === 'user.created') {
    const { id } = data;
    // Update user metadata with a default role
    await clerkClient.users.updateUserMetadata(id, {
      publicMetadata: { role: 'member' }
    });
  }
  return new Response('Webhook received', { status: 200 });
}