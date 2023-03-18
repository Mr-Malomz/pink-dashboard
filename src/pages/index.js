import Head from 'next/head';
import { Inter } from 'next/font/google';
import DashboardCard from '@/components/DashboardCard';
import ListingCard from '@/components/ListingCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Student Dashbaord</title>
				<meta
					name='Student Dashboard'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main
				className='u-padding-32'
				style={{ backgroundColor: 'hsl(var(--color-neutral-5))' }}
			>
				<h1
					className='text u-font-size-32 u-bold'
					style={{
						color: 'hsl(var(--color-neutral-500))',
						marginBottom: '30px',
					}}
				>
					Dashboard
				</h1>
				<DashboardCard />
				<section className='' style={{ marginTop: '60px' }}>
					<h5
						className='text u-bold heading-level-7'
						style={{
							color: 'hsl(var(--color-neutral-500))',
							marginBottom: '30px',
						}}
					>
						Project listing
					</h5>
					<section>
						<ListingCard
							firstname='Arnold'
							lastname='Mark'
							projectTitle='Leveraging Appwrite to build SaaS company using serverless architecture'
							courses={35}
							status='in progress'
						/>
					</section>
				</section>
			</main>
		</>
	);
}
