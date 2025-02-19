import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_white from './menu-white.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
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
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    right_arrow_white,
    mail_icon_dark,
    profile_img,
    arrow_icon,
    arrow_icon_dark,
    menu_white,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
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