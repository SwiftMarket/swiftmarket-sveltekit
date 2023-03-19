import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

export const handle = (async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(PUBLIC_POCKETBASE_URL);

	const response = await resolve(event);
	return response;
}) satisfies Handle;
