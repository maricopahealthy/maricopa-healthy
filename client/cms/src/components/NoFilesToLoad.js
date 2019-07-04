import React from 'react';

const NoFilesToLoad = () => {
	return (
		<React.Fragment>
			<h3 className="empty-file-header">Looks like there's nothing here.</h3>
			<img
				alt="no files found"
				className="empty-file-image"
				src="https://maricopa-healthy.s3-us-west-2.amazonaws.com/cms/maricopa-healthy-no-file.jpg"
			/>
		</React.Fragment>
	);
};

export default NoFilesToLoad;
