import Head from 'next/head';
import { Inter } from 'next/font/google';
import DashboardCard from '@/components/DashboardCard';
import ListingCard from '@/components/ListingCard';
import { useState, useEffect } from 'react';
import { getProjectListing } from '@/components/utils';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [data, setData] = useState(null);

	useEffect(() => {
		getProjectListing()
			.then((res) => setData(res))
			.catch((err) => alert('Error loading dashboard data'));
		return () => {};
	}, []);
console.log(data)
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

				<DashboardCard data={data} />
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
						{data &&
							data.documents.map((list) => (
								<ListingCard
									key={list.$id}
									firstname={list.firstname}
									lastname={list.lastname}
									projectTitle={list.projectTitle}
									courses={list.courses}
									status={list.status}
								/>
							))}
					</section>
				</section>
			</main>
		</>
	);
}
