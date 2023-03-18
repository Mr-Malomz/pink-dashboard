import React from 'react';

const ListingCard = ({
	firstname,
	lastname,
	projectTitle,
	courses,
	status,
}) => {
	const bgColorHelper = (statusState) =>
		statusState == 'inProgress'
			? '#DDDDFB'
			: statusState == 'completed'
			? '#F0FEF7'
			: '#FFF4F5';

	const textColorHelper = (statusState) =>
		statusState == 'inProgress'
			? '#5D5FEF'
			: statusState == 'completed'
			? '#01754A'
			: '#B51212';

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
							textTransform: 'capitalize',
						}}
					>
						{`${firstname.charAt(0)} ${lastname.charAt(0)}`}
					</p>
				</div>
				<div>
					<p
						className='u-bold text'
						style={{
							color: 'hsl(var(--color-neutral-500))',
							marginBottom: '7px',
							textTransform: 'capitalize',
						}}
					>
						{`${firstname} ${lastname}`}
					</p>
					<p className='text' style={{ marginBottom: '7px' }}>
						{projectTitle}
					</p>
				</div>
			</section>
			<section className='u-flex u-flex-vertical u-cross-end'>
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
						backgroundColor: bgColorHelper(status),
						color: textColorHelper(status),
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
