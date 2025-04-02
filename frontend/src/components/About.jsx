import React from "react";
import swaraat from "../assets/swaraat.jpeg";
import aditya from "../assets/aditya.png";
import nabeel from "../assets/nabeel.png";
import syed from "../assets/syed.png";
import Button from "./Button";

function About() {
	return (
		<div className="about-section background">
			<div className="team-heading">Tutorial Video</div>
			<div className="video">
				<iframe
					src="https://www.youtube.com/embed/r-80MlJG5wI?si=Xspnd6tDtwt9aVVk&autoplay=1&mute=1&loop=1&playlist=r-80MlJG5wI"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<div className="video-details">
					Anonify is a powerful tool designed to protect your privacy by
					securely masking or redacting sensitive information in documents,
					text, and files. To get started, upload the file or text you want to
					safeguard. Choose the level of masking you need, from minimal to
					extensive coverage. Anonify uses advanced NLP technology to
					automatically identify and conceal personal data such as names,
					emails, and addresses. After processing, review the document to ensure
					all sensitive information is appropriately masked and make any
					necessary adjustments. Finally, save or export your secure document,
					knowing Anonify has kept your data private and protected, whether
					you’re working online or offline.
				</div>
			</div>
		</div>
	);
}

export default About;
