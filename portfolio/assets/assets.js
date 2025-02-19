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
    copilot
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
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Top Languages and Frameworks', description: 'Python,  JavaScript,  Vue.js,  React,  HTML/CSS' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Work Experience', description: 'FOX Sports: Software Engineer Intern\nThe Cincinnati Insurance Companies: Software Developer Intern' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'The University of Cincinnati - Bachelors of Science in Computer Science' },
];

export const toolsData = [
    assets.vscode, assets.chatgpt, assets.azure, assets.github, assets.copilot, assets.git
];

export const summary = "        I am a senior at the University of Cincinnati, set to graduate in May 2025 with a Bachelor of Science in Computer Science. I have gained practical experience as a Software Engineer Intern at FOX Sports—developing and maintaining UI components using JavaScript and Vue.js—and at The Cincinnati Insurance Companies, where I assisted in developing contract processing systems and implemented unit tests in C#. I am now looking to begin my career as a backend software engineer.";