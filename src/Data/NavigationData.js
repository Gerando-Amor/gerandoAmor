const NavigationData = [
    { 
        id: 1, 
        label: 'Home', 
        url: '/', 
        submenu: [
            {id: 10, label: "Quem Somos", url: "#quemsomos"},
            {id: 11, label: "Como Transformamos", url: "#comotransformamos"},
            {id: 12, label: "Misão", url: "#misao"},
            {id: 13, label: "Objetivo", url: "#objetivo"}
        ]
    },
    { 
        id: 2, 
        label: 'Projetos', 
        url: '/projects', 
        submenu: [
            {id: 20, label: "Caratê", url: "#carate"},
            {id: 21, label: "Capueira", url: "#capoeira"},
            {id: 22, label: "Ingles", url: "#ingles"}
        ]
    },
    { id: 3, label: 'Contato', url: '/contact' },
    { id: 4, label: 'Quero Doar', url: '/doar' }
    // Adicione mais objetos de menu conforme necessário
  ];
  
  export default NavigationData;