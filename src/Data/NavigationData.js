const NavigationData = [
    {
        id: 1,
        label: 'Inicio',
        url: '/',
        submenu: [
            { id: 10, label: "Quem Somos", url: "#quemsomos" },
            { id: 11, label: "Equipe", url: "#equipe" },
            { id: 12, label: "Missão", url: "#missao" },
            { id: 13, label: "Objetivo", url: "#objetivo" }
        ]
    },
    {
        id: 2,
        label: 'Projetos',
        url: '/projetos',
        submenu: [
            { id: 20, label: "Karatê", url: "#project1" },
            { id: 21, label: "Capoeira", url: "#project2" },
            { id: 22, label: "Teatro", url: "#project3" },
            { id: 23, label: "Musica", url: "#project4" },
            { id: 24, label: "Esporte e Atividade Física", url: "#project5" },
            { id: 25, label: "Corte Solidário", url: "#project6" }
        ]
    },
    {
        id: 3,
        label: 'Contato',
        url: '/contato',
        submenu: [
            { id: 30, label: "Localização", url: "#mapa" },
            { id: 31, label: "Perguntas Frequentes", url: "#perguntas" },
            { id: 32, label: "Formulario de Iscrição", url: "#formulario" },
        ]
    },
    {
        id: 4,
        label: 'Como Ajudar?',
        url: '/doe'
    }
    // Adicione mais objetos de menu conforme necessário
];

export default NavigationData;