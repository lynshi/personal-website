import React from "react";
import Layout from "../components/layout/layout";

const Resume = () => (
	<Layout pageTitle="Résumé" pageDescription="Lyndon Shi's Resume" transparentAtTop={true}>
		<div className="justify-center p-4">
			<iframe
				className="w-full h-screen"
				src="https://drive.google.com/file/d/1ZPBlG9RXX9-cW5WLZ6PoRG4vQcm1fPRC/preview"
				title="resume"
			></iframe>
		</div>
	</Layout>
);

export default Resume;
