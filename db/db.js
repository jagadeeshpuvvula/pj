export default {
	bio: {
		about: {
			text: [
			],
		},
		contact: {
			text: [
				"Feel free to connect with me on Twitter, LinkedIn or ResearchGate from below",
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
			skillName: "Time series, high-dimension (metabolome, epigenome, and microbiome), correlated, spatial, hierarchical data analysis",
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
			skillName: "R, Python, Linux, Bash, JavaScript ",
			color: "1",
			percentage: "80",
		},
		{
			title: "Softwares",
			skillName: "Tableau, ArcGIS Pro, Endnote",
			color: "1",
			percentage: "40",
		},
		{
			title: "Version Control",
			skillName: "Git, Slurm, Docker",
			color: "1",
			percentage: "75",
		},
		{
			title: "Editor",
			skillName: "VS Code",
			color: "1",
			percentage: "55",
		},
	],
	projects: {
		web1: [
			{
				projectName: "Global metabolomic changes associated with Polycyclic Aromatic Hydrocarbons",
				image: "images/chem.png",
				summary:
					"Maternal and newborn metabolomic changes associated with urinary polycyclic aromatic hydrocarbon metabolite concentrations at delivery: an untargeted approach.",
				preview: "https://doi.org/10.1007/s11306-023-02074-y",
				techStack: ["Untargeted metabolomics","Gestational PAH exposures", "Biomarkers", "Global metabolome", "R"],
			},
			{
				projectName: "Global metabolomic alterations associated with Endocrine Disrupting Chemicals",
				image: "images/wc.png",
				summary:
					"Global metabolomic alterations associated with endocrine-disrupting chemicals among pregnant individuals and newborns.",
				preview: "Internal review",
				techStack: ["37 biomarkers of Phenols, Phthalates, DINCH", "Serum metabolome", "Untargeted metabolomics"],
			},
			{
				projectName: "Epigenetic changes associated with Endocrine Disrupting Chemicals",
				image: "images/wc.png",
				summary:
					"Gestational exposure to environmental chemicals and epigenetic alterations in the placenta and cord blood mononuclear cells",
				preview: "Revision submitted to Epigenetic communications",
				techStack: ["Illumina 450K methylation", "Global epigenome", "mono nuclear cells and placenta methylation", "minfi", "R"],
			},
		],
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
				image: "images/sneez.png",
				summary:
					"Joint association between ambient air pollutant mixture and pediatric asthma exacerbations.",
				preview: "https://doi.org/10.1097/EE9.0000000000000225",
				techStack: ["Criteria pollutants", "Pollen & Mold", "gWQS", "qgcomp"],
			},
			{
				projectName: "Occupational respiratory exposure - Midwestern US",
				image: "images/farm.png",
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
				image: "images/hw.png",
				summary:
					"Evaluating the sensitivity of heat wave definitions among North Carolina physiographic regions.",
				preview: "https://doi.org/10.3390/ijerph191610108",
				techStack: ["HeatWaves", "GLM-NB"],
			},
			{
				projectName: "Drought - Human vulnerability index - CONUS",
				image: "images/dro.png",
				summary:
					"Evaluating Changes in Health Risk from Drought over the Contiguous United States.",
				preview: "https://doi.org/10.3390/ijerph19084628",
				techStack: ["Vulnerability index", "Spatial statistics"],
			},
		],
		android: [
			{
				projectName: "Endocrine disrupting chemicals - Pediatric cancer - Nebraska",
				image: "images/chem.png",
				summary:
					"Association between Aqueous Atrazine and Pediatric Cancer in Nebraska.",
				preview: "https://doi.org/10.3390/w13192727",
				techStack: ["SQL","Web APIs", "Tableau", "ArcGIS Pro", "GLN-NB"],
			},
			{
				projectName: "Agrichemicals - Pediatric Cancer",
				image: "images/wc.png",
				summary:
					"Geospatial Distribution of Age-Adjusted Incidence of the Three Major Types of Pediatric Cancers and Waterborne Agrichemicals in Nebraska.",
				preview: "https://doi.org/10.1029/2021GH000419",
				techStack: ["Atrazine & Nitrates", "GLM-NB"],
			},
		],
		freelance: [
			{
				projectName: "Occupational injuries - Musculoskeletal disorders",
				image: "images/pain.png",
				summary:
					"Factors Associated with Musculoskeletal Discomfort in Farmers and Ranchers in the U.S. Central States.",
				preview: "https://doi.org/10.1080/1059924X.2021.1893880",
				techStack: ["SAS", "Survey data", "GEE"],
			},
			{
				projectName: "Phase-4 - Novel Cephalosporin outcomes in Solid organ transplant recipients",
				image: "images/epi.png",
				summary:
					"Treatment of Pseudomonas Infection with Beta-Lactams Including Ceftolozane-Tazobactam in Solid Organ Transplant Recipients.",
				preview: "https://doi.org/10.1080/1059924X.2021.1893880",
				techStack: ["EPIC", "Tableau", "OneChart"],
			},
			{
				projectName: "Onco-nephrology - Exploratory data analysis",
				image: "images/kid.png",
				summary:
					"Incidence of Cancer among chronic kidney disease patients.",
				preview:
					"",
				techStack: ["i2b2", "SQL", "EHR"],
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
				"DNAmethylation",
				"Repeated exposure/outcomes"
			],
			icon: "child",
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
			icon: "group",
		},
		{
			title: "Daugherty Water for Food Global Institute",
			duration: "January 2019 - June 2021",
			subtitle: "Student researcher",
			details: [
				"Worked on water quality and health research.",
			],
			tags: ["Environmental health", "Science communication"],
			icon: "group",
		},
				{
			title: "UnitedWay of Midlands",
			duration: "March 2017 - September 2017",
			subtitle: "Student researcher",
			details: [
				"Community needs assessment - Douglas County, NE.",
			],
			tags: ["Food deserts", "Environmental justice"],
			icon: "group",
		},
				{
			title: "Bioclinica - For Merck KGaA",
			duration: "December 2014 - November 2016",
			subtitle: "Scientist - Pharmacoepidemiology",
			details: [
				"Drug safety monitoring - Phase III/IV clinical trails - US & EU.",
			],
			tags: ["Multiple sclerosis", "Cancer"],
			icon: "group",
		},
	],
	education: [
		{
			title: "Doctor of Philosophy - Environmental Health & Toxicology",
			duration: "",
			subtitle: "University of Nebraska Medical Center",
			details: [
				"Thesis: Environmental exposures and human health challenges: Evidence based insights from health surveillance systems.",
			],
			tags: [
				"Environmental epidemiology",
				"Advanced epidemiological methods",
				"Applied biostatistics",
				"Statistical programming",
			],
			icon: "graduation-cap",
		},
		{
			title: "Master of Public Health - Epidemiology",
			duration: "",
			subtitle: "University of Nebraska Medical Center",
			details: [
				"Thesis: Characterization of cancer risk among chronic kidney disease patients.",
			],
			tags: [
				"Clinical epidemiology",
				"Epidemiology methods",
				"Applied biostatistics",
				"Statistical programming",
			],
			icon: "graduation-cap",
		},
				{
			title: "Doctor of Pharmacy",
			duration: "",
			subtitle: "Rajiv Gandhi University of Health Sciences, India",
			details: [
				"Thesis: Drug-Drug and Drug-food interactions among stem cell transplant recipients.",
			],
			tags: [
				"Clinical research",
				"Pharmacology & Toxicology",
			],
			icon: "graduation-cap",
		},
		{
			title: "Bachelors in Pharmaceutical Sciences",
			duration: "",
			subtitle: "TamilNadu Dr. M.G.R. Medical University, India",
			details: [
				"Thesis: Effect of sodium channel modulator pre-treatment on animal models of epilepsy.",
			],
			tags: [
				"Analytical chemistry",
				"Pharmacology",
				"Toxicology",
				"Clinical research",
			],
			icon: "graduation-cap",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/jagadeeshpuvvula",
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
					link: "https://github.com/jagadeeshpuvvula.github.io/pj/",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/drjpuvvula",
				},
				{
					text: "Twitter",
					link: "https://mobile.twitter.com/j_puvvula",
				},
				{
					text: "ResearchGate",
					link: "https://www.researchgate.net/profile/Jagadeesh-Puvvula-2",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Compiled by Jagadeesh Puvvula.",
				"&copy; No Copyrights declared."
			],
		},
	],
};
