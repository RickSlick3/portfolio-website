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
        title: 'CBT GPT (in-progress)',
        description: 'React, Django, OpenAI API, Prompt Engineering',
        bgImage: '/cbtgpt.png',
        link: 'https://github.com/thavishkagamage/Integrated-Therapy-Software',
    },
    {
        title: 'Customer Churn',
        description: 'Azure, Flask, Python, Pandas, Sklearn',
        bgImage: '/churn.png',
        link: 'https://github.com/RickSlick3/CustomerChurn-AzureWebApp',
    },
    {
        title: 'Sockets Chat App',
        description: 'Python, Websockets, TCP protocol',
        bgImage: '/sockets-chat.png',
        link: 'https://github.com/RickSlick3/SocketsChatApp',
    },
    {
        title: 'Covid 19 Analysis',
        description: 'Jupyter Notebook, PySpark',
        bgImage: '/covidAnalysis.png',
        link: 'https://github.com/RickSlick3/Databricks-COVID19',
    },
];

// export const infoList = [
//     { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Top Languages and Frameworks', description: 'Python,  JavaScript,  Vue.js,  React,  HTML/CSS' },
//     { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Work Experience', description: 'FOX Sports: Software Engineer Intern\nThe Cincinnati Insurance Companies: Software Developer Intern' },
//     { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'The University of Cincinnati - Bachelors of Science in Computer Science' },
// ];

export const skillsData = [
    assets.python, assets.javascript, assets.react, assets.vue, assets.html, assets.css
];

export const toolsData = [
    assets.vscode, assets.chatgpt, assets.azure, assets.github, assets.copilot, assets.git
];

export const summary = "        I am a senior at the University of Cincinnati, set to graduate in May 2025 with a Bachelor of Science in Computer Science. I have gained practical experience as a Software Engineer Co-op at FOX Sports, developing and maintaining UI components using JavaScript and Vue.js, and at The Cincinnati Insurance Companies, where I assisted in developing backend contract processing systems and implemented unit tests in C#. I am now looking to begin my career as a backend software engineer.";

export const educationData = [
    { 
        year: 'Aug 2020  -  May 2025',
        school: 'The University of Cincinnati  -  Computer Science',
        degree: 'Bachelors of Science, Computer Science (Graduation: May 2025)',
        technologies: ['C++', 'Python', 'JavaScript', 'React', 'D3.js', 'Flask', 'Azure', 'AWS', 'GCP', 'Django', 'CUDA', 'OpenAI API', 'GitHub'],
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
        role: 'Software Engineer Co-op',
        company: 'FOX Sports',
        description: "I implemented solutions for more than 20 user stories on foxsports.com and increased the site's SEO by up to 14%. I led over 15 intern meetings to enhance interns' product knowledge and understanding of other teams' responsibilities.",
        technologies: ['Vue.js','JavaScript', 'HTML', 'CSS', 'VS Code', 'GitHub'],
    },
    { 
        year: 'Aug 2023  -  Dec 2023',
        role: 'Software Engineer Co-op',
        company: 'FOX Sports',
        description: "I improved the user experience on foxsports.com for over 20 million monthly users by implementing bug fixes and developing new views and features, resulting in a 15% increase in team output.",
        technologies: ['Vue.js','JavaScript', 'HTML', 'CSS', 'VS Code', 'GitHub'],
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
        description: "I engineered database scripts to create new data columns and developed reusable SQL queries to optimize testing for insurance policy creation.",
        technologies: ['C#','Visual Basic', 'SQL', 'Visual Studio', 'SQL Server Management Studio', '.NET'],
    },
    { 
        year: 'Aug 2021  -  Dec 2021',
        role: 'Software Developer Intern',
        company: 'The Cincinnati Insurance Companies',
        description: "I validated the insurance policy creation process using SQL, refactored and removed over 1,000 lines of C# code to reduce technical debt, and updated configuration files across multiple developer environments.",
        technologies: ['C#', 'SQL', 'Visual Studio', 'SQL Server Management Studio', '.NET'],
    },
];