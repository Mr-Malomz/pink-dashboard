import { account } from '@/components/utils';
import '@appwrite.io/pink';
import '@appwrite.io/pink-icons';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
	useEffect(() => {
		account
			.get()
			.then()
			.catch((_) => account.createAnonymousSession());
		return () => {};
	}, []);
	return <Component {...pageProps} />;
}
