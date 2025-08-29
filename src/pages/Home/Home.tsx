import './Home.css';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

import { FaPython } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { BsFiletypeSql } from 'react-icons/bs';
import { TbBrandCSharp } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { DiVisualstudio } from 'react-icons/di';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
	useGSAP(() => {
		gsap.from('.language-container', {
			scrollTrigger: {
				trigger: '.language-container',
				toggleActions: 'play none none  none',
			},
			x: -300,
			color: 'transparent',
			duration: 1.5,
		});

		gsap.from('.technology-container', {
			scrollTrigger: {
				trigger: '.technology-container',
				toggleActions: 'play none none  none',
			},
			x: -300,
			color: 'transparent',
			duration: 1.5,
		});

		gsap.from('.tools-container', {
			scrollTrigger: {
				trigger: '.tools-container',
				toggleActions: 'play none none  none',
			},
			x: -300,
			color: 'transparent',
			duration: 1.5,
		});
	});

	function copyEmail() {
		navigator.clipboard.writeText('yrobinbknul@gmail.com');
		var emailAlert = document.getElementById('email-alert');
		emailAlert!.className = 'alert';
		setTimeout(function () {
			emailAlert!.className = 'hide';
		}, 2000);
	}

	function navigateToNemy() {
		window.open('https://nemysiu.netlify.app/');
	}

	function navigateToAqua() {
		window.open('https://aquaspawinston.com/');
	}

	return (
		<>
			<section className='home'>
				<div>ROBIN KNUL</div>
				<div>
					software engineer <span>|</span>
				</div>
				<ul>
					<a href='https://www.linkedin.com/in/rknul'>
						<FaLinkedinIn />
					</a>
					<a href='https://www.github.com/rknul'>
						<IoLogoGithub />
					</a>
					<li id='email' onClick={() => copyEmail()}>
						<MdEmail />
					</li>
				</ul>
				<div id='email-alert' className='hide'>
					Email Copied!
				</div>
			</section>
			<section className='education'>
				<div className='education-header'>EDUCATION</div>
				<div className='education-container'>
					<div>
						<span>University of North Carolina at Charlotte</span>
						<span>B.S. Computer Engineering</span>
						<span>August 2019 - May 2023</span>
					</div>
				</div>
			</section>
			<section className='experience'>
				<div className='experience-header'>EXPERIENCE</div>
				<div className='language-container'>
					<div>Languages</div>
					<ul>
						<li>
							<span>
								<FaPython />
							</span>
							Python
						</li>
						<li>
							<span>
								<TbBrandCSharp />
							</span>
							C#
						</li>
						<li>
							<span className='icon-background'>
								<SiJavascript />
							</span>
							JavaScript
						</li>
						<li>
							<span>
								<SiTypescript />
							</span>
							TypeScript
						</li>
						<li>
							<span>
								<FaHtml5 />
							</span>
							HTML
						</li>
						<li>
							<span>
								<DiCss3 />
							</span>
							CSS
						</li>
						<li>
							<span>
								<BsFiletypeSql />
							</span>
							SQL
						</li>
					</ul>
				</div>
				<div className='technology-container'>
					<div>Technologies</div>
					<ul>
						<li>
							<span>
								<FaReact />
							</span>
							React
						</li>
						<li>
							<span>
								<SiDotnet />
							</span>
							.NET Framework
						</li>
						<li>
							<span>
								<DiMsqlServer />
							</span>
							MS SQL
						</li>
					</ul>
				</div>
				<div className='tools-container'>
					<div>Tools</div>
					<ul>
						<li>
							<span>
								<FaGitAlt />
							</span>
							Git
						</li>
						<li>
							<span>
								<FaGithub />
							</span>
							GitHub
						</li>
						<li>
							<span>
								<DiVisualstudio />
							</span>
							Visual Studio
						</li>
						<li>
							<span>
								<BiLogoVisualStudio />
							</span>
							VS Code
						</li>
					</ul>
				</div>
			</section>
			<section className='work'>
				<div className='work-header'>WORK EXPERIENCE</div>
				<ul>
					<li>
						<div>
							<h1>Industries of the blind</h1>
							<div>Computer Programmer</div>
							<h5>November 2023 - Present</h5>
						</div>
						<div>
							<div>
								Built a full-stack app improving data access for blind
								employees, boosting efficiency by 80%.
							</div>
							<div>
								Automated transformation of 10K+ data points into structured
								Excel files using Python, Pandas, and Openpyxl — cut processing
								time by 40%.
							</div>
							<div>
								Managed help desk support for a DoD-wide clothing requisition
								system.
							</div>
						</div>
					</li>
					<li>
						<div>
							<h1>Goodwill</h1>
							<div>Donation Attendant</div>
							<h5>August 2023 - November 2023</h5>
						</div>
						<div>
							<div>
								Supported donation intake and sorting while maintaining a clean,
								organized workspace.
							</div>
							<div>
								Adapted to fast-paced environments and diverse customer
								interactions.
							</div>
						</div>
					</li>
					<li>
						<div>
							<h1>Lowe's Home Improvement</h1>
							<div>Unloader</div>
							<h5>July 2023 - September 2023</h5>
						</div>
						<div>
							<div>
								Streamlined unloading and delivery processes across departments.
							</div>
							<div>
								Operated forklifts and organized inventory for efficient
								warehouse flow.
							</div>
						</div>
					</li>
				</ul>
			</section>
			<section className='projects'>
				<div className='project-header'>PROJECTS</div>
				<ul>
					<li className='request-img'></li>
					<li>
						<div>
							<h1>Data Acquisition Website</h1>
							<div>HTML, CSS, Typescript, React, MSSQL, C# .NET</div>
							<h5>Full Stack Application</h5>
						</div>
						<div>
							<div>
								A full-stack app that improved data gathering for blind
								employees, boosting efficiency by 80%
							</div>
							<div>
								Implemented JWT authorization to verify user and limit API usage
							</div>
							<div>
								Implemented libraries to enable exporting tables to excel files
							</div>
						</div>
					</li>
					<li className='aqua-img' onClick={() => navigateToAqua()}></li>
					<li>
						<div>
							<h1>Aqua Spa & Nails</h1>
							<div>HTML, CSS, Typescript, React</div>
							<h5>Frontend Application</h5>
						</div>
						<div>
							<div>
								A single page application representing Aqua Spa & Nails in
								Winston Salem, NC
							</div>
							<div>
								Contains basic navigation routes for more information and
								navigation to their online booking system
							</div>
						</div>
					</li>
					<li className='nemy-img' onClick={() => navigateToNemy()}></li>
					<li>
						<div>
							<h1>Personal Trainer Website</h1>
							<div>HTML, CSS, Typescript, React</div>
							<h5>Frontend Application</h5>
						</div>
						<div>
							<div>
								A simple single page application showcasing this personal
								trainer's accomplishments and contact information
							</div>
							<div>
								Implemented a contact form that sends an email to the trainer
								when submitted
							</div>
						</div>
					</li>
					<li className='portfolio-img'></li>
					<li>
						<div>
							<h1>Portfolio</h1>
							<div>HTML, CSS, Typescript, React</div>
							<h5>Frontend Application</h5>
						</div>
						<div>
							<div>Basic portfolio website showcasing my experience</div>
						</div>
					</li>
				</ul>
			</section>
		</>
	);
}
