export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Vinay Somawat. I’m currently working as a Software Engineer at Biofourmis India specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
				"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
				"I love to read, listen to music, and travel.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: vinaysomawat40@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Applied skills",
			skillName: "Applied epidemiology and biostatistics",
			color: "6",
			percentage: "90",
		},
		{
			title: "Applied statistical methods",
			skillName: "Time series, high-dimension, correlated, spatial, hierarchical data analysis",
			color: "6",
			percentage: "85",
		},
		{
			title: "Special topics",
			skillName: "Causal mediation, environmental mixtures, susceptibility/vulnerability windows",
			color: "6",
			percentage: "80",
		},
		{
			title: "Languages",
			skillName: "R, Python, Bash, Slurm",
			color: "1",
			percentage: "90",
		},
		{
			title: "Softwares",
			skillName: "Tableau, ArcGIS Pro, Endnote",
			color: "1",
			percentage: "40",
		},
		{
			title: "Version Control",
			skillName: "GitHub",
			color: "1",
			percentage: "85",
		},
		{
			title: "Editor",
			skillName: "VS Code",
			color: "1",
			percentage: "55",
		},
	],
	projects: {
		web: [
			{
				projectName: "Environmental justice - Pediatric asthma - Douglas County, NE",
				image: "images/ap.png",
				summary:
					"Evaluated the Role of social determinants of health in differential respiratory exposure and health outcomes among children.",
				preview: "https://doi.org/10.1186/s12889-022-14964-2",
				techStack: [
					"SDoH",
					"Pediatric asthma",
					"Environmental justice",
					"Bayesian spatial autocorrelation",
				],
			},
			{
				projectName: "Joint effect of air pollutants - Pediatric asthma",
				image: "images/ap.png",
				summary:
					"Joint association between ambient air pollutant mixture and pediatric asthma exacerbations.",
				preview: "https://doi.org/10.1097/EE9.0000000000000225",
				techStack: ["Criteria pollutants", "Pollen & Mold", "gWQS", "qgcomp"],
			},
			{
				projectName: "Occupational respiratory exposure - Midwestern US",
				image: "images/ap.png",
				summary:
					"Prevalence and Risk Factors for Pulmonary Conditions among Farmers and Ranchers in the Central United States.",
				preview: "https://doi.org/10.1080/1059924X.2021.2025180",
				techStack: ["Organic dust", "Farmers/Ranchers", "Survey data", "GEE"],
			},
		],
		software: [
			{
				projectName: "Extreme temperature - climate change - North Carolina",
				image: "images/cc.png",
				summary:
					"Estimating the Burden of Heat-Related Illness Morbidity Attributable to Anthropogenic Climate Change in North Carolina.",
				preview:
					"https://doi.org/10.1029/2022GH000636",
				techStack: ["Anthropogenic climate change","Climate modeling: CCSM4, GFDL", "RCP4.5, RCP8.5", "GAM", "DLNM"],
			},
			{
				projectName: "Heat waves - ER visits - North Carolina",
				image: "images/cc.jpg",
				summary:
					"Evaluating the sensitivity of heat wave definitions among North Carolina physiographic regions.",
				preview: "https://doi.org/10.3390/ijerph191610108",
				techStack: ["HeatWaves", "GLM-NB"],
			},
			{
				projectName: "Drought - Human vulnerability index - CONUS",
				image: "images/cc.png",
				summary:
					"Evaluating Changes in Health Risk from Drought over the Contiguous United States.",
				preview: "https://doi.org/10.3390/ijerph19084628",
				techStack: ["Vulnerability index", "Spatial statistics"],
			},
		],
		android: [
			{
				projectName: "NITW-CSE",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance: [
			{
				projectName: "SnylloAir.com",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Delivery+",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
	},
	experience: [
		{
			title: "Biofourmis India Pvt. Ltd.",
			duration: "April 2022 - Present",
			subtitle: "Software Engineer",
			details: [
				"Working on the products in the healthcare/digital therapeutics domain."
			],
			tags: [
				"JavaScript",
				"Angular",
				"Bootstrap",
				"Nodejs",
				"Jenkins",
			],
			icon: "heartbeat",
		},
		{
			title: "Novopay Solutions Pvt. Ltd.",
			duration: "June 2020 - April 2022",
			subtitle: "Software Engineer",
			details: [
				"Implemented Aadhaar Enabled Payment services such as Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements, and Money transfer; completed more than 20 story points in each sprint.",
				"Integrated QR Code and reduced the effective time by 50 percent to load money into wallet, Clevertap events to track user actions, Freshdesk ticketing service and chat-bot services. Worked on user onboarding, approval, and finance interfaces.",
				"Co-ordinated closely with the product team, backend team, android team, and QA team to deliver the product builds before deadlines.",
			],
			tags: [
				"JavaScript",
				"Angular",
				"React",
				"Bootstrap",
				"Nodejs",
				"Jenkins",
			],
			icon: "qrcode",
		},
		{
			title: "ThinkPedia LLP",
			duration: "May 2019 - June 2019",
			subtitle: "SDE Intern",
			details: [
				"Worked as a full stack developer to support tech team.",
				"Developed a customer Web Application from scratch for social media management.",
			],
			tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
			icon: "group",
		},
	],
	education: [
		{
			title: "Bachelors in Computer Science and Engineering",
			duration: "",
			subtitle: "National Institute of Technology, Warangal",
			details: [
				"Qualified GATE-2020.",
				"Active Competitive Programmer with CodeChef Rating 1841*.",
				"Received 500+ stars and 300+ forks on GitHub projects.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Compiler Designing",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		{
			title: "Class 11-12th in Science and Mathematics",
			duration: "",
			subtitle: "Board of Secondary Education, Rajasthan",
			details: [
				"Qualified JEE Advanced, Main & BITSAT.",
				"Secured 99.5 percentile in Class 12th Boards Examinations.",
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Stackoverflow",
					link: "https://stackoverflow.com/users/8461233/vinay-somawat",
				},
				{
					text: "GitHub",
					link: "https://github.com/vinaysomawat",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com/somawatvinay/",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/vinaysomawat/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/thesigmakid",
				},
				{
					text: "Buy me a coffee",
					link: "https://www.buymeacoffee.com/r194dME8y",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Vinay Somawat.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
