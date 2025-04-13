import user_image from './user-image.png';
import code_icon from './code-icon.png';
import edu_icon from './edu-icon.png';
import project_icon from './project-icon.png';
import vscode from './vscode.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import menu_white from './menu-white.png';
import close_white from './close-white.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import github from './github.png';
import github_white from './github-white.png';
import email from './email.png';
import linkedin from './linkedin.png';
import chatgpt from './chatgpt.png';
import azure from './azure.png';
import folder from './folder.png';
import copilot from './copilot.png';
import python from './python.png';
import javascript from './javascript.png';
import vue from './vue.png';
import react from './react.png';
import html from './html.png'; 
import css from './css.png';

export const assets = {
    user_image,
    code_icon,
    edu_icon,
    project_icon,
    vscode,
    git,
    right_arrow_white,
    mail_icon_dark,
    profile_img,
    menu_white,
    close_white,
    right_arrow_bold_dark,
    github,
    github_white,
    email,
    linkedin,
    chatgpt, 
    azure,
    folder,
    copilot,
    python,
    javascript,
    vue,
    react,
    html,
    css
};

export const projectData = [
    {
        title: 'TheraThrive',
        skills: 'React, Django, Python, OpenAI API, PostgreSQL',
        problem: 'Major Depressive Disorder is a serious mental health condition that affects approximately 280 million people globally. Depression is characterized by long-lasting feelings of sadness, hopelessness, and a loss of interest in everyday activities. Arising from a mix of biological, psychological, environmental, and social factors, depression leaves patients lacking motivation to do everyday activities and withdrawing from the people close to them.',
        description: 'This is a React-based chat bot that delivers guided Cognitive Behavioral Therapy (CBT) sessions using the OpenAI API. The goal is to increase accessibility to mental health resources by providing an online CBT platform that allows users to engage in therapy from home, free of financial barriers and scheduling constraints.',
        bgImage: '/therathrive.png',
        link: 'https://github.com/thavishkagamage/Integrated-Therapy-Software',
        cta: 'View Source Code',
    },
    {
        title: 'Health is Wealth Dashboard',
        skills: 'Next.js, JavaScript, D3.js, Tailwind CSS',
        problem: 'The CDC Atlas of Heart Disease and Stroke provides a wide range of data for individual U.S. counties. However, the data and provided visualizations are not easily interpretable or easy to use for the general public.',
        description: 'This web app provides an interactive platform for exploring the relationship between economic status and health outcomes across U.S. counties. The dashboard allows users to navigate linked visualizations that provide a multidimensional view of the data. Interactions such as hovering and clicking allow users to highlight specific counties, observe cross-visualization relations, and gain deeper insights into the distribution of data attributes. Ultimately, the application highlights the trend that counties with the lowest incomes often experience the highest rates of health issues.',
        bgImage: '/data-in-the-usa.png',
        link: 'https://health-is-wealth-gray.vercel.app/',
        cta: 'View Web App',
    },
    {
        title: 'Earthquake Data Visualization',
        skills: 'JavaScript, D3.js, Leaflet.js',
        problem: 'Earthquakes occur every day across the world, creating an abundance of data, but only the most impactful ones are published in the media. This scarcity of representation makes it difficult to notice any trends. Earthquake data is also typically dowlnoaded in CSV format, which is not easily interpretable.',
        description: 'This is an interactive vanilla JS web app that visualizes multiple years of earthquake data using D3.js and Leaflet.js motivated by the need to make earthquake data more accessible, interpretable, and interactive for the general public.',
        bgImage: '/earthquakes.png',
        link: 'https://rickslick3.github.io/earth-beneath-us/',
        cta: 'View Web App',
    },
    {
        title: 'Customer Churn Analysis',
        skills: 'Azure, Flask, Python, Pandas, Sklearn',
        problem: 'A common problem across industries is customer retainment, and how to predict churn effectively given customer data.',
        description: 'This is a Flask app that fetches data from Azure Blob Storage and uses machine learning to predict customer churn and displays results. Data for this project is hosted in an Azure SQL Server, and copied into an Azure SQL Database using a Data Factory Pipeline to be fetched by the app.',
        bgImage: '/churn.png',
        link: 'https://github.com/RickSlick3/CustomerChurn-AzureWebApp',
        cta: 'View Source Code',
    },
    {
        title: 'My Portfolio Website',
        skills: 'Next.js, Tailwind CSS, JavaScript',
        problem: 'This is the website you are currently on!',
        description: 'I built my portfolio with Next.js and hosted it on Vercel to share my interests, skills, experience, and projects.',
        bgImage: '/portfolio.png',
        link: 'https://portfolio-richard-roberts.vercel.app/',
        cta: 'View Source Code',
    },
];

export const skillsData = [
    { icon: assets.python, name: 'Python' },
    { icon: assets.javascript, name: 'JavaScript' },
    { icon: assets.react, name: 'React' },
    { icon: assets.vue, name: 'Vue' },
    { icon: assets.html, name: 'HTML' },
    { icon: assets.css, name: 'CSS' },
];

export const toolsData = [
    { icon: assets.vscode, name: 'VS Code' },
    { icon: assets.chatgpt, name: 'ChatGPT' },
    { icon: assets.azure, name: 'Azure' },
    { icon: assets.github, name: 'GitHub' },
    { icon: assets.copilot, name: 'Copilot' },
    { icon: assets.git, name: 'Git' },
];

export const summary = "        I am a senior at the University of Cincinnati, set to graduate in May 2025 with a Bachelor of Science in Computer Science. I have completed five internships, gaining practical experience as a Student Software Engineer at FOX Sports, developing and maintaining UI components using JavaScript and Vue.js, and at The Cincinnati Insurance Companies, where I assisted in developing backend contract processing systems and implemented unit tests in C#. I am now looking to begin my career as a backend software engineer, developing scalable solutions and experimenting with AI integrations.";

export const educationData = [
    { 
        year: 'Aug 2020  -  May 2025',
        school: 'University of Cincinnati CEAS  -  Computer Science Major',
        degree: 'Bachelor of Science, Computer Science (Graduation: May 2025)',
        technologies: ['C++', 'Python', 'JavaScript', 'React', 'Next.js', 'D3.js', 'Leaflet.js', 'Flask', 'Azure', 'AWS', 'GCP', 'Django', 'CUDA', 'OpenAI API', 'GitHub'],
    },
    { 
        year: 'Aug 2016  -  May 2020',
        school: 'Gilmour Academy',
        degree: 'High School Diploma',
        technologies: ['Java','Python', 'Raspberry Pi', 'NetBeans'],
    },
];

export const experienceData = [
    { 
        year: 'May 2024  -  Oct 2024',
        role: 'Student Software Engineer',
        company: 'FOX Sports',
        description: "I implemented solutions for more than 20 user stories on foxsports.com and increased team output by 15%. I participated in daily scrums, ticket sizing, and sprint planning and retrospectives. I led over 15 intern meetings to help others increase their overall product knowledge and understanding of other teams' responsibilities.",
        technologies: ['Vue.js','JavaScript', 'HTML', 'CSS', 'VS Code', 'GitHub', 'Figma', 'Agile', 'Scrum', 'Jira'],
    },
    { 
        year: 'Aug 2023  -  Dec 2023',
        role: 'Student Software Engineer',
        company: 'FOX Sports',
        description: "I taught myself web development through practical aplication, created small features, and implemented bug fixes on foxsports.com for over 20 million monthly users in an Agile development process.",
        technologies: ['Vue.js','JavaScript', 'HTML', 'CSS', 'VS Code', 'GitHub', 'Figma', 'Agile', 'Scrum', 'Jira'],
    },
    { 
        year: 'Jan 2023  -  May 2023',
        role: 'Software Developer Intern',
        company: 'The Cincinnati Insurance Companies',
        description: "I assisted in developing a new contract management system and built unit tests that increased testing code coverage to over 90% within the project. I also optimized production code to call third-party services only when new policies met specific requirements.",
        technologies: ['C#','Visual Basic', 'SQL', 'Visual Studio', 'SQL Server Management Studio', 'C# Unit Testing', 'Mocks', '.NET'],
    },
    { 
        year: 'May 2022  -  Aug 2022',
        role: 'Software Developer Intern',
        company: 'The Cincinnati Insurance Companies',
        description: "I engineered database scripts to create new data columns and developed reusable SQL queries to optimize and validate testing for insurance policy creation.",
        technologies: ['C#','Visual Basic', 'SQL', 'Visual Studio', 'SQL Server Management Studio', '.NET'],
    },
    { 
        year: 'Aug 2021  -  Dec 2021',
        role: 'Software Developer Intern',
        company: 'The Cincinnati Insurance Companies',
        description: "I taught myself the basics of C#, .NET, and SQL through practical application, and debugged and validated insurance policy creation workflows.",
        technologies: ['C#', 'SQL', 'Visual Studio', 'SQL Server Management Studio', '.NET'],
    },
];