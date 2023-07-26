import { IHabilidades, TypesSection } from "../interfaces/HabilidadesTecnologicas";

export const tecFront: IHabilidades = {
    title: `Front-end`,
    sections: [
        TypesSection.vanilla, TypesSection.frameworksLibraries
    ],
    tecnologias: [
        { nombre: "html", section: TypesSection.vanilla , link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" },
        { nombre: "css", section: TypesSection.vanilla , link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" },
        { nombre: "javascript", section: TypesSection.vanilla , link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { nombre: "react", section: TypesSection.frameworksLibraries , link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { nombre: "redux", section: TypesSection.frameworksLibraries , link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { nombre: "sass", section: TypesSection.frameworksLibraries , link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { nombre: "bootstrap", section: TypesSection.frameworksLibraries , link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" },
        { nombre: "material ui", section:TypesSection.frameworksLibraries , link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { nombre: "next.js", section:TypesSection.frameworksLibraries , link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
    ]
}

export const tecBack: IHabilidades = {
    title: "Back-end",
    sections: [
        TypesSection.languages,
        TypesSection.frameworksLibraries,
        TypesSection.databases,
        TypesSection.others
    ],
    tecnologias: [
        { nombre: "javascript", section: TypesSection.languages, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { nombre: "typescript", section: TypesSection.languages, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { nombre: "java", section: TypesSection.languages, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" },
        { nombre: "python", section: TypesSection.languages, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" },
        { nombre: "node.js", section: TypesSection.frameworksLibraries, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { nombre: "nest.js", section: TypesSection.frameworksLibraries, link: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nestjs_icon_130355.png"},
        { nombre: "express", section: TypesSection.frameworksLibraries, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" },
        { nombre: "django", section: TypesSection.frameworksLibraries, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { nombre: "socket.io", section: TypesSection.frameworksLibraries, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        { nombre: "jest", section: TypesSection.frameworksLibraries, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
        { nombre: "github", section: TypesSection.others, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" },
        { nombre: "windows", section: TypesSection.others, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
        { nombre: "git", section: TypesSection.others, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { nombre: "linux", section: TypesSection.others, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { nombre: "bash", section: TypesSection.others, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { nombre: "mysql", section: TypesSection.databases, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
        { nombre: "mongodb", section: TypesSection.databases, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" },
        { nombre: "redis", section: TypesSection.databases, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg" },
        { nombre: "spring boot", section: TypesSection.frameworksLibraries, link: "https://e7.pngegg.com/pngimages/330/684/png-clipart-spring-framework-software-framework-model-view-controller-web-framework-java-pepper-robot-text-logo-thumbnail.png"},
    ]
}

export const herramientasAssets = [
    { nombre: "Android Studio", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { nombre: "Atom", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg" },
    { nombre: "Visual Studio Code", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
    { nombre: "Slack", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
]