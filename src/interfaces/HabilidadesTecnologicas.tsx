export interface IHabilidades {
    title: string;
    sections: string[];
    tecnologias: Tecnologia[];
}

interface Tecnologia {
    nombre: string;
    link: string;
    section: TypesSection;
}

export enum TypesSection {
    "frameworksLibraries" = "framewors_libraries",
    "languages" = "languages",
    "databases" = "databases",
    "others" = "others",
    vanilla = "Vanilla"
}