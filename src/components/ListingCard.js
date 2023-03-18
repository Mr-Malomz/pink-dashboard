import React from 'react';

const ListingCard = ({
	firstname,
	lastname,
	projectTitle,
	courses,
	status,
}) => {
	return (
		<div
			className='card u-flex u-main-space-between'
			style={{
				boxShadow: 'var(--shadow-small)',
				paddingTop: '11px',
				paddingBottom: '11px',
				paddingLeft: '30px',
				paddingRight: '30px',
				borderRadius: 'var(--border-radius-small)',
				marginBottom: '15px',
			}}
		>
			<section className='u-flex u-cross-center'>
				<div
					className='u-flex u-main-center u-cross-center'
					style={{
						height: '40px',
						width: '40px',
						backgroundColor: '#E084A9',
						borderRadius: 'var(--border-radius-circular)',
						marginRight: '30px',
					}}
				>
					<p
						className='u-bold'
						style={{
							color: 'hsl(var(--color-neutral-0))',
							letterSpacing: '4.5%',
						}}
					>
						{`${firstname.charAt(0)} ${lastname.charAt(0)}`}
					</p>
				</div>
				<div>
					<p
						className='u-bold text '
						style={{
							color: 'hsl(var(--color-neutral-500))',
							marginBottom: '7px',
						}}
					>
						{`${firstname} ${lastname}`}
					</p>
					<p className='text' style={{ marginBottom: '7px' }}>
						{projectTitle}
					</p>
				</div>
			</section>
			<section>
				<div
					className='u-flex u-cross-center'
					style={{ marginBottom: '8px' }}
				>
					<p
						className='icon-book-open'
						style={{ marginRight: '15px' }}
					></p>
					<h5 className='u-bold'>{`${courses} courses`}</h5>
				</div>
				<div
					className='u-bold'
					style={{
						paddingTop: '4px',
						paddingBottom: '4px',
						paddingLeft: '18px',
						paddingRight: '18px',
						backgroundColor: '#DDDDFB',
						color: '#5D5FEF',
						textTransform: 'uppercase',
						borderRadius: 'var(--border-radius-medium)',
						fontSize: '10px',
					}}
				>
					{status}
				</div>
			</section>
		</div>
	);
};

export default ListingCard;
