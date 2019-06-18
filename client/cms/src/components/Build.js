import React from 'react';
import Features from './Features.js';
import Nav from './Nav';
import HeaderNav from './HeaderNav';
import Markets from './Markets';
import { BrowserRouter as Route } from 'react-router-dom';

const Build = () => {
	return (
		<span className={'build-container-inner'}>
			<HeaderNav />
			<Nav />
			<div className={'features-container'}>
				<Features />
			</div>
		</span>
	);
};
export default Build;
