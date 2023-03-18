import React from 'react';

const DashboardCard = ({ data }) => {
	const getTotal = () =>
		data.documents
			.map((list) => list.courses)
			.reduce((prev, next) => prev + next);

	return (
		<div
			className='card u-flex'
			style={{
				boxShadow: 'var(--shadow-small)',
				paddingTop: '0px',
				paddingBottom: '0px',
			}}
		>
			<section
				style={{
					marginLeft: '40px',
					borderRightStyle: 'solid',
					borderRightWidth: '1px',
					borderRightColor: 'hsl(var(--color-neutral-30))',
					paddingTop: '33px',
					paddingBottom: '20px',
					width: '100%',
				}}
			>
				<div className='u-flex u-cross-center'>
					<p
						className='icon-academic-cap'
						style={{ marginRight: '15px' }}
					></p>
					<h5 className='u-bold'>Total project courses</h5>
				</div>
				<h1
					className='u-bold'
					style={{ fontSize: '80px', color: '#5D5FEF' }}
				>
					{data ? getTotal() : 0}
				</h1>
			</section>
			<section
				style={{
					marginLeft: '80px',
					paddingTop: '33px',
					paddingBottom: '20px',
					width: '100%',
				}}
			>
				<div className='u-flex u-cross-center'>
					<p
						className='icon-user'
						style={{ marginRight: '15px' }}
					></p>
					<h5 className='u-bold'>Total students</h5>
				</div>
				<h1
					className='u-bold'
					style={{ fontSize: '80px', color: '#5D5FEF' }}
				>
					{data ? data.total : 0}
				</h1>
			</section>
		</div>
	);
};

export default DashboardCard;
