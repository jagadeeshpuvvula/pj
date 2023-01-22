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
			title: "Applied statistical methods",
			skillName: "Time series, high-dimension, correlated, spatial, hierarchical data analysis",
			color: "6",
			percentage: "87",
		},
		{
			title: "Special topics",
			skillName: "Causal mediation, environmental mixtures, susceptibility/vulnerability windows",
			color: "6",
			percentage: "80",
		},
		{
			title: "Languages",
			skillName: "R & Python",
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
			percentage: "40",
		},
	],
	projects: {
		Air_quality: [
			{
				projectName: "Environmental justice - Pediatric asthma - Douglas County, NE",
				image:"ap.png",
				summary:
					"Evaluated the Role of social determinants of health in differential respiratory exposure and health outcomes among children.",
				preview: "https://doi.org/10.1186/s12889-022-14964-2",
				techStack: ["SDoH", "Pediatric asthma","Environmental justice","Bayesian spatial autocorrelation"],
			},
			{
				projectName: "Joint effect of air pollutants - Pediatric asthma",
				image:"ap.png",
				summary:
					"Joint association between ambient air pollutant mixture and pediatric asthma exacerbations.",
				preview: "https://doi.org/10.1097/EE9.0000000000000225",
				techStack: ["Criteria pollutants", "Pollen & Mold", "gWQS", "qgcomp"],
			},
			{
				projectName: "Occupational respiratory exposure - Midwestern US",
				image:"ap.png",
				summary:
					"Prevalence and Risk Factors for Pulmonary Conditions among Farmers and Ranchers in the Central United States.",
				preview: "https://doi.org/10.1080/1059924X.2021.2025180",
				techStack: ["Organic dust", "Farmers/Ranchers", "Survey data", "GEE"],
			},

		],
		Climate_change: [
			{
				projectName: "Extreme temperature - climate change - North Carolina",
				image:"cc.png",
				summary:
					"Estimating the Burden of Heat-Related Illness Morbidity Attributable to Anthropogenic Climate Change in North Carolina.",
				preview:
					"https://doi.org/10.1029/2022GH000636",
				techStack: ["Anthropogenic climate change","Climate modeling: CCSM4, GFDL", "RCP4.5, RCP8.5", "GAM", "DLNM"],
			},
			{
				projectName: "Heat waves - ER visits - North Carolina",
				image:"cc.png",
				summary:
					"Evaluating the sensitivity of heat wave definitions among North Carolina physiographic regions.",
				preview: "https://doi.org/10.3390/ijerph191610108",
				techStack: ["HeatWaves", "GLM-NB"],
			},
			{
				projectName: "Drought - Human vulnerability index - CONUS",
				image:"cc.png",
				summary:
					"Evaluating Changes in Health Risk from Drought over the Contiguous United States.",
				preview: "https://doi.org/10.3390/ijerph19084628",
				techStack: ["Vulnerability index", "Spatial statistics"],
			},
		],
		Water_quality: [
			{
				projectName: "Endocrine disrupting chemicals - Pediatric cancer - Nebraska",
				image:"wc.png",
				summary:
					"Association between Aqueous Atrazine and Pediatric Cancer in Nebraska.",
				preview:
					"https://doi.org/10.3390/w13192727",
				techStack: ["SQL","Web APIs", "Tableau", "ArcGIS Pro", "GLN-NB"],
			},
			{
				projectName: "Agrichemicals - Pediatric Cancer",
				image:"wc.png",
				summary:
					"Geospatial Distribution of Age-Adjusted Incidence of the Three Major Types of Pediatric Cancers and Waterborne Agrichemicals in Nebraska.",
				preview: "https://doi.org/10.1029/2021GH000419",
				techStack: ["Atrazine & Nitrates", "GLM-NB"],
			},

		],
		Environmental_Misc: [
			{
				projectName: "Occupational injuries - Musculoskeletal disorders",
				image:"wc.png",
				summary:
					"Factors Associated with Musculoskeletal Discomfort in Farmers and Ranchers in the U.S. Central States.",
				preview: "https://doi.org/10.1080/1059924X.2021.1893880",
				techStack: ["SAS", "Survey data", "GEE"],
			},

		],
		Clinical_epidemiology: [
			{
				projectName: "Onco-nephrology - Exploratory data analysis",
				image:"wc.png",
				summary:
					"Incidence of Cancer among chronic kidney disease patients.",
				preview: "",
				techStack: ["i2b2", "SQL", "EHR"],
			},
			{
				projectName: "Phase-4 - Novel Cephalosporin outcomes in Solid orgran transplant recepients",
				image:"wc.png",
				summary:
					"Treatment of Pseudomonas Infection with Beta-Lactams Including Ceftolozane-Tazobactam in Solid Organ Transplant Recipients",
				preview:
					"",
				techStack: ["EPIC", "Tableau", "OneChart"],
			},
		],
	},
	experience: [
		{
			title: "University of Pennsylvania - Perelman College of Medicine | DBEI | CCEB",
			duration: "August 2022 - Present",
			subtitle: "Postdoctoral researcher | Environmental epidemology",
			details: [
				"Working on environmental mixtures and neurodevelopmental outcomes."
			],
			tags: [
				"Environmental mixtures",
				"Susceptibility window",
				"Causal mediation",
				"Brain imaging",
				"Metabolomics",
			],
		},
		{
			title: "University of Nebraska Medical Center | College of Public Health | EAOH",
			duration: "January 2018 - August 2022",
			subtitle: "Pre-doctoral fellow | Population health",
			details: [
				"Worked on agrichemical exposures and pediatric cancer",
				"Extreme heat and climate change",
				"Air pollution and pediatric asthma",
				"Actively participated in Water Climate and Health center",
			],
			tags: [
				"Web API",
				"EHR",
				"i2b2",
				"Climate attribution",
				"Environmental health",
				"Applied statistics",
			],
		},
		{
			title: "Daugherty Water for Food Global Institute",
			duration: "January 2019 - June 2021",
			subtitle: "Student researcher",
			details: [
				"Worked on water quality and health research.",
			],
			tags: ["Environmental health", "Science communication"],
		},
		{
			title: "UnitedWay of Midlands",
			duration: "March 2017 - September 2017",
			subtitle: "Student researcher",
			details: [
				"Community needs assessment - Douglas County, NE.",
			],
			tags: ["Food deserts", "Environemntal justics"],
		},
		{
			title: "Daugherty Water for Food Global Institute",
			duration: "December 2014 - November 2016",
			subtitle: "Scientist - Pharmacoepidemiology",
			details: [
				"Drug safety monitoring - Phase III/IV clinical trails - US & EU.",
			],
			tags: ["Multiple sclerosis", "Cancer"],
		},
	],
	education: [
		{
			title: "Doctor of Philosophy - Environmental Health & Toxicology",
			duration: "",
			subtitle: "University of Nebraska Medical Center",
			details: [
				"• Thesis: Environmental exposures and human health challenges: Evidence based insights from health surveillance systems.",
			],
			tags: [
				"Environmental epidemiology",
				"Advanced epidemiologic methods",
				"Applied biostatistics",
				"Statistical programming",
			],
		},
		{
			title: "Master of Public Health - Epidemiology",
			duration: "",
			subtitle: "University of Nebraska Medical Center",
			details: [
				"• Thesis: Characterization of cancer risk among chronic kidney disease patients.",
			],
			tags: [
				"Clinical epidemiology",
				"Epidemiology methods",
				"Applied biostatistics",
				"Statistical programming",
			],
		},
		{
			title: "Doctor of Pharmacy",
			duration: "",
			subtitle: "Rajiv Gandhi University of Health Sciences, India",
			details: [
				"• Thesis: Drug-Drug and Drug-food interactions among stem cell transplant recepients.",
			],
			tags: [
				"Clinical research",
				"Pharmacology & Toxicology",
			],
		},
		{
			title: "Bachelors in Pharmaceutical Sciences",
			duration: "",
			subtitle: "TamilNadu Dr. M.G.R. Medical University, India",
			details: [
				"• Thesis: Effect of sodium channel modulator pre-treatment on animal models of epilepsy.",
			],
			tags: [
				"Analytical chemistry",
				"Pharmacology",
				"Toxicology",
				"Clinical research",
			],
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
