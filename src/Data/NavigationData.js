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
            { id: 20, label: "Caratê", url: "#carate" },
            { id: 21, label: "Capueira", url: "#capoeira" },
            { id: 22, label: "Ingles", url: "#ingles" }
        ]
    },
    {
        id: 3,
        label: 'Contato',
        url: '/contato',
        submenu: [
            { id: 30, label: "Localização", url: "#localizacao" },
            { id: 31, label: "FAQ", url: "#faq" },
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