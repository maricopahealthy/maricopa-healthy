import React from 'react';
import featureList from '../utils/featureList';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Markets from './Markets.js';

const Features = () => {
	return (
		<div>
			<h6 className={'features-heading'}>FEATURES</h6>
			<ul>
				{featureList.map(({ name, id }) => (
					<li key={id}>
						<Link to={`/build/${id}`} className="feature-name">
							{name}
						</Link>
					</li>
				))}
			</ul>
			{/*<Route path={`/build/:id`} component={Markets}/>*/}
		</div>
	);
};

export default Features;
