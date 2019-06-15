import React from 'react';
import Nav from './Nav';
import HeaderNav from './HeaderNav';
import styles from '../styles.css';

const Dashboard = () => {
	return (
		<div className={'dashboard-container'}>
			<HeaderNav />
			<Nav />
			<div className={'overview-container'}>Overview</div>
			<div className={'analytics-container'}>
				<img
					className="analytics-placeholder"
					src={'https://maricopa-healthy.s3-us-west-2.amazonaws.com/cms/analytics-placeholder-dashboard.jpg'}
				/>
				<img
					className="analytics-placeholder-apptype"
					src={'https://maricopa-healthy.s3-us-west-2.amazonaws.com/cms/analytics-placeholder-apptype.jpg'}
				/>
				<img
					className="analytics-placeholder-push"
					src={
						'https://maricopa-healthy.s3-us-west-2.amazonaws.com/cms/analytics-placeholder-pushnotifications.jpg'
					}
				/>
			</div>
		</div>
	);
};
export default Dashboard;
