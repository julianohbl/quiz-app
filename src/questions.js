export const questions = [
  // QUIZ 01
  {
    id: 1,
    question:
      "Qual prática recomendada de governança de custos este exemplo mostra?",
    options: [
      { id: "a", text: "Otimização de arquitetura", correct: true },
      { id: "b", text: "Controles de recursos", correct: false },
      { id: "c", text: "Aplicação de marcação", correct: false },
      { id: "d", text: "Alocação de custos", correct: false },
    ],
    explanation:
      "A otimização da arquitetura é a melhor prática para governança de custos que este exemplo mostra. A otimização da arquitetura é o processo de projetar e implementar soluções AWS que sejam eficientes, escaláveis e econômicas. Ao usar serviços específicos da AWS para melhorar a eficiência e reduzir custos, a empresa está seguindo a prática de otimização da arquitetura. Algumas das técnicas para otimização da arquitetura incluem usar o tamanho e tipo certos de recursos, aproveitar a elasticidade e escalabilidade, escolher a classe de armazenamento mais adequada e usar serviços sem servidor e gerenciados.",
  },
  {
    id: 2,
    question:
      "O que a classe de armazenamento Amazon S3 Intelligent-Tiering oferece?",
    options: [
      {
        id: "a",
        text: "Economia automática de custos movendo objetos entre camadas com base nas mudanças nos padrões de acesso",
        correct: true,
      },
      {
        id: "b",
        text: "Flexibilidade de pagamento ao reservar capacidade de armazenamento",
        correct: false,
      },
      {
        id: "c",
        text: "Armazenamento seguro, durável e de menor custo para arquivamento de dados",
        correct: false,
      },
      {
        id: "d",
        text: "Retenção a longo prazo de dados copiando os dados para um volume Amazon Elastic Block Store (Amazon EBS) criptografado",
        correct: false,
      },
    ],
    explanation:
      "A classe de armazenamento Amazon S3 Intelligent-Tiering oferece economia automática de custos ao mover objetos entre camadas com base em mudanças nos padrões de acesso. Esta classe de armazenamento é projetada para dados com padrões de acesso desconhecidos ou em mudança. Possui duas camadas de acesso: acesso frequente e acesso infrequente. Os objetos são armazenados na camada de acesso frequente por padrão e são movidos para a camada de acesso infrequente após 30 dias consecutivos sem acesso. Se um objeto na camada de acesso infrequente for acessado, ele é movido de volta para a camada de acesso frequente. Não há taxas de recuperação no S3 Intelligent-Tiering, nem taxas adicionais de nivelamento quando os objetos são movidos entre as camadas de acesso dentro desta classe de armazenamento.",
  },
  {
    id: 3,
    question:
      "Qual serviço ou ferramenta da AWS fornece recomendações para ajudar os usuários a dimensionar corretamente as instâncias Amazon EC2 com base em dados históricos de uso da carga de trabalho?",
    options: [
      { id: "a", text: "AWS Compute Optimizer", correct: true },
      { id: "b", text: "AWS Pricing Calculator", correct: false },
      { id: "c", text: "AWS Systems Manager", correct: false },
      { id: "d", text: "AWS App Runner", correct: false },
    ],
    explanation:
      "AWS Compute Optimizer é o serviço ou ferramenta da AWS que fornece recomendações para ajudar os usuários a dimensionar corretamente as instâncias do Amazon EC2 com base em dados históricos de uso da carga de trabalho. O AWS Compute Optimizer analisa as características de configuração e desempenho das instâncias EC2 e oferece recomendações para tipos, tamanhos e configurações de instâncias ideais. O AWS Compute Optimizer ajuda os usuários a melhorar o desempenho, reduzir custos e eliminar recursos subutilizados.",
  },
  {
    id: 4,
    question:
      "Qual serviço da AWS deve um engenheiro de nuvem usar para visualizar chamadas de API para serviços da AWS?",
    options: [
      { id: "a", text: "AWS CloudTrail", correct: true },
      { id: "b", text: "AWS Config", correct: false },
      { id: "c", text: "AWS Artifact", correct: false },
      { id: "d", text: "Amazon CloudWatch", correct: false },
    ],
    explanation:
      "AWS CloudTrail é um serviço da AWS que um engenheiro de nuvem pode usar para visualizar chamadas de API para serviços da AWS. O AWS CloudTrail é um serviço que permite aos clientes rastrear a atividade dos usuários e o uso de APIs em sua conta da AWS. O AWS CloudTrail registra os detalhes de cada chamada de API feita para os serviços da AWS, como a identidade do chamador, a hora da chamada, o endereço IP de origem do chamador, os parâmetros e respostas da chamada e mais. Os clientes podem usar o AWS CloudTrail para auditar, monitorar e solucionar problemas de seus recursos e ações da AWS. As outras opções estão incorretas porque não são serviços da AWS que um engenheiro de nuvem pode usar para visualizar chamadas de API para serviços da AWS. O Amazon CloudWatch é um serviço da AWS que permite aos clientes coletar, analisar e visualizar métricas, logs e eventos de seus recursos e aplicativos da AWS. O AWS Config é um serviço da AWS que permite aos clientes avaliar, auditar e avaliar as configurações de seus recursos da AWS. O AWS Artifact é um serviço da AWS que fornece aos clientes acesso sob demanda a relatórios de conformidade da AWS e acordos online selecionados. Referência: AWS CloudTrail FAQs",
  },
  {
    id: 5,
    question:
      "Qual dos seguintes é um princípio de eficiência de custos relacionado à Nuvem AWS?",
    options: [
      {
        id: "a",
        text: "Dimensionar serviços com base nos requisitos de capacidade.",
        correct: true,
      },
      { id: "b", text: "Marcar todos os recursos da AWS.", correct: false },
      {
        id: "c",
        text: "Usar AWS Organizations para combinar as despesas de várias contas em uma única fatura.",
        correct: false,
      },
      {
        id: "d",
        text: "Usar o Painel de Faturamento para acessar informações sobre faturas mensais.",
        correct: false,
      },
    ],
    explanation:
      "Um dos princípios de eficiência de custo relacionados à AWS Cloud é ajustar o tamanho dos serviços com base nos requisitos de capacidade. Isso significa escolher o tipo e tamanho mais apropriados de recursos da AWS para atender às necessidades de desempenho e escalabilidade das aplicações, evitando provisionamento excessivo ou insuficiente. Ao ajustar o tamanho dos serviços, os usuários podem otimizar os custos e os benefícios de usar a AWS Cloud.",
  },
  {
    id: 6,
    question:
      "Um engenheiro de nuvem precisa baixar documentos de segurança e conformidade da AWS para uma auditoria futura. Qual serviço da AWS pode fornecer os documentos?",
    options: [
      { id: "a", text: "AWS Artifact", correct: true },
      { id: "b", text: "AWS Well-Architected Tool", correct: false },
      { id: "c", text: "AWS Systems Manager", correct: false },
      { id: "d", text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "AWS Artifact é o serviço da AWS que pode fornecer documentos de segurança e conformidade para uma auditoria futura. O AWS Artifact é um portal de autoatendimento que permite aos usuários acessar e baixar relatórios de conformidade e acordos da AWS. Esses documentos fornecem evidências da conformidade da AWS com padrões e regulamentações de segurança globais, regionais e específicos da indústria.",
  },
  {
    id: 7,
    question:
      "Uma empresa está hospedando um aplicativo web em um contêiner Docker no Amazon EC2. A AWS é responsável por qual das seguintes tarefas?",
    options: [
      {
        id: "a",
        text: "Realizar manutenção de hardware nas instalações da AWS que executam a Nuvem AWS",
        correct: true,
      },
      {
        id: "b",
        text: "Escalar a aplicação web e os serviços desenvolvidos com Docker",
        correct: false,
      },
      {
        id: "c",
        text: "Gerenciar o sistema operacional convidado, incluindo atualizações e patches de segurança",
        correct: false,
      },
      {
        id: "d",
        text: "Provisionamento ou agendamento de contêineres para executar em clusters e manter sua disponibilidade",
        correct: false,
      },
    ],
    explanation:
      "A AWS é responsável pela manutenção do hardware nas instalações da AWS que executam a AWS Cloud. Isso faz parte do modelo de responsabilidade compartilhada, onde a AWS é responsável pela segurança da nuvem, e o cliente é responsável pela segurança na nuvem. A AWS também é responsável pela infraestrutura global que executa todos os serviços oferecidos na AWS Cloud, incluindo hardware, software, rede e instalações que executam os serviços da AWS. O cliente é responsável pelo sistema operacional convidado, incluindo atualizações e patches de segurança, bem como pela aplicação web e serviços desenvolvidos com Docker.",
  },
  {
    id: 8,
    question:
      "Qual serviço ou recurso da AWS é usado para solucionar problemas de conectividade de rede entre instâncias Amazon EC2?",
    options: [
      { id: "a", text: "VPC Flow Logs", correct: true },
      { id: "b", text: "Internet gateway", correct: false },
      { id: "c", text: "AWS Certificate Manager (ACM)", correct: false },
      { id: "d", text: "AWS CloudHSM", correct: false },
    ],
    explanation:
      "VPC Flow Logs é o serviço ou recurso da AWS usado para solucionar problemas de conectividade de rede entre instâncias Amazon EC2. VPC Flow Logs é um recurso que permite capturar informações sobre o tráfego IP que entra e sai das interfaces de rede na VPC. VPC Flow Logs pode ajudar os usuários a monitorar e diagnosticar problemas relacionados à rede, como tráfego que não chega a uma instância ou uma instância que não responde a solicitações. VPC Flow Logs pode ser publicado no Amazon CloudWatch Logs, Amazon S3 ou Amazon Kinesis Data Firehose para análise e armazenamento.",
  },
  {
    id: 9,
    question:
      "Uma empresa quer gerenciar centralmente políticas de segurança e serviços de cobrança em um ambiente AWS com várias contas. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      { id: "a", text: "AWS Organizations", correct: true },
      {
        id: "b",
        text: "AWS Identity and Access Management (IAM)",
        correct: false,
      },
      {
        id: "c",
        text: "AWS Resource Access Manager (AWS RAM)",
        correct: false,
      },
      { id: "d", text: "AWS Config", correct: false },
    ],
    explanation:
      "AWS Organizations é um serviço que ajuda a gerenciar e governar seu ambiente de forma centralizada à medida que você cresce e escala seus recursos da AWS. Você pode usar o AWS Organizations para criar grupos de contas e aplicar políticas a eles. Você também pode usar o AWS Organizations para consolidar a fatura de várias contas. ",
  },
  {
    id: 10,
    question:
      "Quais opções a AWS disponibiliza para clientes que desejam aprender sobre segurança na nuvem em um ambiente conduzido por instrutor? (Selecione DUAS.)",
    options: [
      { id: "a", text: "Treinamento em Sala de Aula da AWS", correct: true },
      { id: "b", text: "AWS Online Tech Talks", correct: true },
      { id: "c", text: "Fóruns da AWS", correct: false },
      { id: "d", text: "Blog da AWS", correct: false },
      { id: "e", text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "AWS Online Tech Talks e AWS Classroom Training são opções que a AWS disponibiliza para clientes que desejam aprender sobre segurança na nuvem em um ambiente com instrutor. AWS Online Tech Talks são apresentações online ao vivo que cobrem uma ampla gama de tópicos em vários níveis técnicos. AWS Online Tech Talks são ministradas por especialistas da AWS e apresentam sessões de perguntas e respostas ao vivo com o público. AWS Classroom Training são cursos presenciais ou virtuais liderados por instrutores credenciados da AWS. AWS Classroom Training oferecem laboratórios práticos, exercícios e melhores práticas para ajudar os clientes a ganhar confiança e habilidades na AWS. As outras opções estão incorretas porque não são opções que a AWS disponibiliza para clientes que desejam aprender sobre segurança na nuvem em um ambiente com instrutor. AWS Trusted Advisor é um serviço da AWS que fornece orientações em tempo real para ajudar os clientes a seguir as melhores práticas da AWS para segurança, desempenho, otimização de custos e tolerância a falhas. AWS Blog é um recurso da AWS que fornece notícias, anúncios e insights de especialistas e clientes da AWS. AWS Forums são recursos da AWS que permitem que os clientes interajam com outros usuários da AWS e obtenham feedback e suporte. Referência: AWS Online Tech Talks, AWS Classroom Training",
  },
  {
    id: 11,
    question: "Quais fatores afetam os custos na Nuvem AWS? (Selecione DUAS.)",
    options: [
      {
        id: "a",
        text: "Transferências de dados de saída sem aceleração",
        correct: true,
      },
      {
        id: "b",
        text: "Recursos de computação que estão atualmente em uso",
        correct: true,
      },
      {
        id: "c",
        text: "Transferências de dados de entrada sem aceleração",
        correct: false,
      },
      {
        id: "d",
        text: "O número de buckets Amazon S3 configurados",
        correct: false,
      },
    ],
    explanation:
      "Transferências de dados de saída sem aceleração e recursos de computação que estão atualmente em uso são os fatores que afetam os custos na AWS Cloud. Transferências de dados de saída sem aceleração referem-se à quantidade de dados transferidos da AWS para a internet, sem usar nenhum serviço que possa otimizar a velocidade e o custo da transferência de dados, como o AWS Global Accelerator ou Amazon CloudFront. As transferências de dados de saída são cobradas em taxas diferentes, dependendo das regiões de origem e destino da AWS e do volume de dados transferidos. Recursos de computação que estão atualmente em uso referem-se aos serviços e recursos da AWS que fornecem capacidade de computação, como instâncias Amazon EC2, funções AWS Lambda ou tarefas Amazon ECS. Os recursos de computação são cobrados com base no tipo, tamanho e configuração dos recursos, bem como na duração e frequência de seu uso.",
  },
  {
    id: 12,
    question:
      "Uma empresa quer hospedar seus bancos de dados relacionais na AWS. Os bancos de dados têm esquemas predefinidos que a empresa precisa replicar na AWS. Quais serviços da AWS a empresa poderia usar para os bancos de dados? (Selecione DUAS.)",
    options: [
      { id: "a", text: "Amazon RDS", correct: true },
      { id: "b", text: "Amazon Aurora", correct: true },
      { id: "c", text: "Amazon Neptune", correct: false },
      { id: "d", text: "Amazon DynamoDB", correct: false },
      {
        id: "e",
        text: "Amazon DocumentDB (com compatibilidade com MongoDB)",
        correct: false,
      },
    ],
    explanation:
      "Amazon Aurora e Amazon RDS são serviços da AWS que a empresa poderia usar para os bancos de dados relacionais. Amazon Aurora é um banco de dados relacional compatível com MySQL e PostgreSQL. Amazon Aurora é um serviço totalmente gerenciado, escalável e de alto desempenho que oferece até cinco vezes o rendimento do MySQL padrão e até três vezes o rendimento do PostgreSQL padrão. Amazon RDS é um serviço que permite aos usuários configurar, operar e escalar bancos de dados relacionais na nuvem. Amazon RDS suporta seis mecanismos de banco de dados populares: MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Amazon Aurora. As outras opções estão incorretas porque não são serviços da AWS que a empresa poderia usar para os bancos de dados relacionais. Amazon DocumentDB (compatível com MongoDB) é um banco de dados de documentos compatível com MongoDB. Amazon Neptune é um banco de dados de grafos que suporta modelos de grafos de propriedade e RDF. Amazon DynamoDB é um banco de dados de chave-valor e documentos. Referência: Amazon Aurora, Amazon RDS",
  },
  {
    id: 13,
    question: "Uma Zona de Disponibilidade consiste em:",
    options: [
      {
        id: "a",
        text: "um ou mais data centers em uma única localização.",
        correct: true,
      },
      {
        id: "b",
        text: "dois ou mais hosts físicos em múltiplos data centers.",
        correct: false,
      },
      {
        id: "c",
        text: "dois ou mais data centers em várias localizações.",
        correct: false,
      },
      {
        id: "d",
        text: "um ou mais hosts físicos em um único data center.",
        correct: false,
      },
    ],
    explanation:
      "Zona de Disponibilidade consiste em um ou mais data centers em um único local. Uma Zona de Disponibilidade é um local isolado dentro de uma Região da AWS que possui energia, resfriamento e rede independentes. Cada Zona de Disponibilidade tem um ou mais data centers que hospedam os servidores físicos e dispositivos de armazenamento que executam os serviços da AWS. As outras opções estão incorretas porque não são descrições precisas de uma Zona de Disponibilidade. Dois ou mais data centers em várias localizações não são uma Zona de Disponibilidade, mas sim várias Zonas de Disponibilidade dentro de uma Região da AWS. Um ou mais hosts físicos em um único data center não são uma Zona de Disponibilidade, mas sim os componentes de um data center dentro de uma Zona de Disponibilidade. Dois ou mais hosts físicos em vários data centers não são uma Zona de Disponibilidade, mas sim os componentes de vários data centers dentro de uma ou mais Zonas de Disponibilidade. Referência: [Regiões, Zonas de Disponibilidade e Zonas Locais]",
  },
  {
    id: 14,
    question:
      "Quais são as vantagens de migrar para a nuvem da AWS? (Selecione DUAS.)",
    options: [
      {
        id: "a",
        text: "A capacidade de usar o modelo pay-as-you-go.",
        correct: true,
      },
      {
        id: "b",
        text: "Não precisar mais adivinhar a capacidade que será necessária.",
        correct: true,
      },
      {
        id: "c",
        text: "A capacidade de transferir a responsabilidade de toda a segurança para a AWS.",
        correct: false,
      },
      {
        id: "d",
        text: "A capacidade de ter controle total sobre a infraestrutura física.",
        correct: false,
      },
      {
        id: "e",
        text: "Não se preocupar mais com controles de acesso dos usuários.",
        correct: false,
      },
    ],
    explanation:
      "As vantagens de migrar para a AWS Cloud são a capacidade de usar o modelo pay-as-you-go e não precisar mais adivinhar qual capacidade será necessária. O modelo pay-as-you-go permite que o usuário pague apenas pelos recursos que usa, sem compromissos antecipados ou de longo prazo. Isso reduz o custo e o risco de superprovisionar ou subprovisionar recursos. Não precisar mais adivinhar qual capacidade será necessária significa que o usuário pode dimensionar seus recursos para cima ou para baixo conforme a demanda, sem gastar dinheiro em recursos ociosos ou perder clientes devido à capacidade insuficiente.",
  },
  {
    id: 15,
    question:
      "Qual opção é uma vantagem da computação em nuvem da AWS que minimiza os custos variáveis?",
    options: [
      { id: "a", text: "Economias de escala", correct: true },
      { id: "b", text: "Alcance global", correct: false },
      { id: "c", text: "Alta disponibilidade", correct: false },
      { id: "d", text: "Agilidade", correct: false },
    ],
    explanation:
      "Uma das vantagens da computação em nuvem da AWS é que ela minimiza os custos variáveis ao aproveitar as economias de escala. Isso significa que a AWS pode alcançar custos mais baixos por unidade de recursos de computação ao distribuir os custos fixos de construção e manutenção dos data centers por um grande número de clientes. Como resultado, a AWS pode oferecer preços mais baixos e previsíveis para seus clientes, que pagam apenas pelos recursos que consomem.",
  },
  {
    id: 16,
    question:
      "Qual dos seguintes é um benefício de desacoplar uma arquitetura de nuvem da AWS?",
    options: [
      {
        id: "a",
        text: "Capacidade de atualizar componentes independentemente",
        correct: true,
      },
      { id: "b", text: "Menos componentes para gerenciar", correct: false },
      { id: "c", text: "Latência reduzida", correct: false },
      { id: "d", text: "Custos reduzidos", correct: false },
    ],
    explanation:
      "Uma vantagem de desacoplar uma arquitetura na AWS Cloud é a capacidade de atualizar componentes de forma independente. Desacoplar é uma maneira de projetar sistemas para reduzir interdependências e minimizar o impacto das mudanças. O desacoplamento permite que os componentes interajam entre si por meio de interfaces bem definidas, em vez de referências diretas. Isso reduz o risco de falhas e erros se propagarem pelo sistema, e permite maior escalabilidade, disponibilidade e manutenibilidade. Ao desacoplar uma arquitetura na AWS Cloud, o usuário pode atualizar ou modificar um componente sem afetar os outros componentes.",
  },
  {
    id: 17,
    question:
      "Amazon Elastic File System (Amazon EFS) e Amazon FSx oferecem que tipo de armazenamento?",
    options: [
      { id: "a", text: "Armazenamento de arquivos", correct: true },
      { id: "b", text: "Armazenamento de objetos", correct: false },
      { id: "c", text: "Armazenamento de instâncias", correct: false },
      { id: "d", text: "Armazenamento em bloco", correct: false },
    ],
    explanation:
      "Amazon Elastic File System (Amazon EFS) e Amazon FSx oferecem armazenamento de arquivos. O armazenamento de arquivos é um tipo de armazenamento que organiza dados em arquivos e pastas, permitindo que vários usuários ou aplicações acessem e compartilhem os mesmos arquivos em uma rede. O Amazon EFS é um sistema de arquivos totalmente gerenciado, escalável e elástico que suporta o protocolo Network File System (NFS) e pode ser usado com instâncias Amazon EC2 e funções AWS Lambda. O Amazon FSx é um serviço totalmente gerenciado que fornece duas opções de sistemas de arquivos: Amazon FSx para Windows File Server, que suporta o protocolo Server Message Block (SMB) e é compatível com aplicações Microsoft Windows; e Amazon FSx para Lustre, que é um sistema de arquivos de alto desempenho otimizado para cargas de trabalho intensivas em computação.",
  },
  {
    id: 18,
    question:
      "Uma empresa recentemente migrou para a Nuvem AWS. A empresa precisa determinar se suas instâncias Amazon EC2 recém-importadas são do tamanho e tipo apropriados. Quais serviços da AWS podem fornecer essas informações para a empresa? (Selecione DUAS.)",
    options: [
      { id: "a", text: "AWS Trusted Advisor", correct: true },
      { id: "b", text: "AWS Compute Optimizer", correct: true },
      { id: "c", text: "Amazon Forecast", correct: false },
      { id: "d", text: "AWS Control Tower", correct: false },
      { id: "e", text: "AWS Auto Scaling", correct: false },
    ],
    explanation:
      "AWS Trusted Advisor e AWS Compute Optimizer são os serviços da AWS que podem fornecer informações à empresa sobre se as instâncias do Amazon EC2 recém-importadas são do tamanho e tipo apropriados. O AWS Trusted Advisor é uma ferramenta online que fornece recomendações de melhores práticas em cinco categorias: otimização de custos, desempenho, segurança, tolerância a falhas e limites de serviço. O AWS Trusted Advisor pode ajudar os usuários a identificar instâncias EC2 subutilizadas ou ociosas e sugerir maneiras de reduzir custos e melhorar o desempenho. O AWS Compute Optimizer é um serviço que analisa a configuração e os dados de utilização das instâncias EC2 e fornece recomendações para tipos, tamanhos e configurações de instâncias ideais. O AWS Compute Optimizer ajuda os usuários a melhorar o desempenho, reduzir custos e eliminar recursos subutilizados.",
  },
  {
    id: 19,
    question:
      "Um desenvolvedor precisa criar um aplicativo para uma empresa de varejo. O aplicativo deve fornecer recomendações de produtos em tempo real com base em aprendizado de máquina. Qual serviço da AWS o desenvolvedor deve usar para atender a esse requisito?",
    options: [
      { id: "a", text: "Amazon Personalize", correct: true },
      { id: "b", text: "AWS Health Dashboard", correct: false },
      { id: "c", text: "Amazon Forecast", correct: false },
      { id: "d", text: "Amazon Transcribe", correct: false },
    ],
    explanation:
      "O Amazon Personalize é um serviço de machine learning totalmente gerenciado que os clientes podem usar para gerar recomendações personalizadas para seus usuários. Ele também pode gerar segmentos de usuários com base na afinidade dos usuários por determinados itens ou metadados de itens. O Amazon Personalize usa os dados dos clientes para treinar e implantar modelos de recomendação personalizados que podem ser integrados em suas aplicações.",
  },
  {
    id: 20,
    question:
      "Quando um usuário quer utilizar suas licenças de software existentes por soquete, por núcleo ou por máquina virtual para um servidor Microsoft Windows em execução na AWS, qual tipo de instância do Amazon EC2 é necessário?",
    options: [
      { id: "a", text: "Hosts Dedicados", correct: true },
      { id: "b", text: "Instâncias Reservadas", correct: false },
      { id: "c", text: "Instâncias Dedicadas", correct: false },
      { id: "d", text: "Instâncias Spot", correct: false },
    ],
    explanation:
      "Dedicated Hosts são instâncias Amazon EC2 que são necessárias quando um usuário deseja utilizar suas licenças de software existentes por soquete, por núcleo ou por máquina virtual para um servidor Microsoft Windows executado na AWS. Os Dedicated Hosts são servidores físicos dedicados a um único cliente. Os Dedicated Hosts permitem que os clientes usem suas licenças de software vinculadas ao servidor, como Windows Server, SQL Server e SUSE Linux Enterprise Server, sujeito aos termos de suas licenças. As outras opções estão incorretas porque não são instâncias Amazon EC2 que são necessárias quando um usuário deseja utilizar suas licenças de software existentes por soquete, por núcleo ou por máquina virtual para um servidor Microsoft Windows executado na AWS. As Spot Instances são instâncias Amazon EC2 sobressalentes que estão disponíveis com até 90% de desconto em comparação aos preços On-Demand. As Spot Instances são adequadas para cargas de trabalho sem estado, tolerantes a falhas e flexíveis que podem se recuperar facilmente de interrupções. As Dedicated Instances são instâncias Amazon EC2 que são executadas em hardware dedicado a um único cliente, mas não a um servidor físico específico. As Dedicated Instances não permitem que os clientes usem suas licenças de software vinculadas ao servidor. As Reserved Instances são instâncias Amazon EC2 que são reservadas por um período específico (um ou três anos) em troca de uma taxa horária mais baixa. As Reserved Instances são adequadas para cargas de trabalho de estado constante ou previsíveis que são executadas por um longo período. As Reserved Instances não permitem que os clientes usem suas licenças de software vinculadas ao servidor. Referência: Dedicated Hosts, Opções de Compra de Instâncias Amazon EC2",
  },
  {
    id: 21,
    question:
      "A base de usuários de uma empresa precisa acessar remotamente computadores de desktop virtual da internet. Qual serviço da AWS fornece essa funcionalidade?",
    options: [
      { id: "a", text: "Amazon Workspaces", correct: true },
      { id: "b", text: "Amazon Upstream 2.0", correct: false },
      { id: "c", text: "Amazon Cognito", correct: false },
      { id: "d", text: "Amazon Connect", correct: false },
    ],
    explanation:
      "Amazon Workspaces é o serviço da AWS que fornece a funcionalidade de acessar remotamente desktops virtuais da internet. O Amazon Workspaces é uma solução de desktop como serviço (DaaS) totalmente gerenciada e segura que permite aos usuários provisionar desktops virtuais baseados em nuvem e acessá-los de qualquer lugar, usando qualquer dispositivo compatível. O Amazon Workspaces ajuda os usuários a reduzir a complexidade e o custo de gerenciar e manter desktops físicos, além de proporcionar uma experiência de usuário consistente e segura.",
  },
  {
    id: 22,
    question:
      "Uma empresa tem armazenado relatórios mensais em um bucket do Amazon S3. A empresa exporta os dados dos relatórios para arquivos de valores separados por vírgulas (.csv). Um desenvolvedor deseja escrever uma consulta simples que possa ler todos esses arquivos e gerar um relatório resumido. Qual serviço ou recurso da AWS o desenvolvedor deve usar para atender a esses requisitos com a MENOR quantidade de esforço operacional?",
    options: [
      { id: "a", text: "Amazon Athena", correct: true },
      { id: "b", text: "Amazon S3 Select", correct: false },
      { id: "c", text: "Amazon Redshift", correct: false },
      { id: "d", text: "Amazon EC2", correct: false },
    ],
    explanation:
      "Amazon Athena é o serviço da AWS que o desenvolvedor deve usar para escrever uma consulta simples que pode ler todos os arquivos .csv armazenados em um bucket do Amazon S3 e gerar um relatório de resumo. O Amazon Athena é um serviço de consulta interativa que permite aos usuários analisar dados no Amazon S3 usando SQL padrão. O Amazon Athena não requer configuração ou gerenciamento de servidor, e os usuários pagam apenas pelas consultas que executam. O Amazon Athena pode lidar com vários formatos de dados, incluindo .csv, e pode ser integrado com outros serviços da AWS, como Amazon QuickSight, para visualização de dados.",
  },
  {
    id: 23,
    question: "Qual motor de banco de dados é compatível com o Amazon RDS?",
    options: [
      { id: "a", text: "PostgreSQL", correct: true },
      { id: "b", text: "Apache Cassandra", correct: false },
      { id: "c", text: "MongoDB", correct: false },
      { id: "d", text: "Neo4j", correct: false },
    ],
    explanation:
      "O Amazon RDS suporta seis mecanismos de banco de dados: Amazon Aurora, MySQL, MariaDB, PostgreSQL, Oracle e SQL Server. Apache Cassandra, MongoDB e Neo4j não são compatíveis com o Amazon RDS. Você pode saber mais sobre o Amazon RDS e seus mecanismos de banco de dados suportados nesta página.",
  },
  {
    id: 24,
    question:
      "Uma empresa tem uma plataforma de mídia social onde os usuários enviam e compartilham fotos com outros usuários. A empresa quer identificar e remover fotos inadequadas. A empresa não tem cientistas de aprendizado de máquina (ML) e deve construir essa capacidade de detecção sem expertise em ML. Qual serviço da AWS a empresa deve usar para construir essa capacidade?",
    options: [
      { id: "a", text: "Amazon Rekognition", correct: true },
      { id: "b", text: "Amazon Comprehend", correct: false },
      { id: "c", text: "Amazon SageMaker", correct: false },
      { id: "d", text: "Amazon Textract", correct: false },
    ],
    explanation:
      "Amazon Rekognition é o serviço da AWS que a empresa deve usar para desenvolver a capacidade de identificar e remover fotos inadequadas. O Amazon Rekognition é um serviço que usa tecnologia de deep learning para analisar imagens e vídeos para diversos fins, como detecção de rostos, reconhecimento de objetos, extração de texto e moderação de conteúdo. O Amazon Rekognition pode ajudar os usuários a detectar conteúdo inseguro ou inadequado em imagens e vídeos, como nudez, violência ou drogas, e fornecer pontuações de confiança para cada rótulo. O Amazon Rekognition não requer nenhuma expertise em machine learning, e os usuários podem integrá-lo facilmente com outros serviços da AWS.",
  },
  {
    id: 25,
    question:
      "Qual das seguintes é uma vantagem que os usuários experimentam ao mover cargas de trabalho on-premises para a Nuvem AWS?",
    options: [
      {
        id: "a",
        text: "Eliminação de despesas para operar e manter data centers",
        correct: true,
      },
      { id: "b", text: "Eliminação de despesas operacionais", correct: false },
      {
        id: "c",
        text: "Descontos de preço que são idênticos aos descontos de provedores de hardware",
        correct: false,
      },
      {
        id: "d",
        text: "Distribuição de todos os controles operacionais para a AWS",
        correct: false,
      },
    ],
    explanation:
      "A vantagem que os usuários experimentam ao mover workloads on-premises para a AWS Cloud é: eliminação de despesas para executar e manter data centers. Ao mover workloads on-premises para a AWS Cloud, os usuários podem reduzir ou eliminar os custos associados à propriedade e operação de servidores físicos, armazenamento, equipamentos de rede e instalações. Esses custos incluem compra de hardware, manutenção, reparo, energia, refrigeração, segurança e pessoal. Os usuários também podem se beneficiar do modelo de precificação pay-as-you-go da AWS, que permite pagar apenas pelos recursos usados e escalar conforme necessário.",
  },
  {
    id: 26,
    question:
      "Uma empresa planeja migrar para a AWS e quer criar estimativas de custo para seus casos de uso da AWS. Qual serviço ou ferramenta da AWS a empresa pode usar para atender a esses requisitos?",
    options: [
      { id: "a", text: "AWS Pricing Calculator", correct: true },
      { id: "b", text: "AWS Budgets", correct: false },
      { id: "c", text: "Amazon CloudWatch", correct: false },
      { id: "d", text: "AWS Cost Explorer", correct: false },
    ],
    explanation:
      "O AWS Pricing Calculator é uma ferramenta de planejamento baseada na web que os clientes podem usar para criar estimativas para seus casos de uso da AWS. Eles podem usá-lo para modelar suas soluções antes de construí-las, explorar os pontos de preço dos serviços da AWS e revisar os cálculos por trás de suas estimativas. ",
  },
  {
    id: 27,
    question:
      "Uma empresa implanta seu aplicativo em várias Regiões da AWS e configura failover automático entre essas Regiões. Qual conceito de nuvem essa arquitetura representa?",
    options: [
      { id: "a", text: "Confiabilidade", correct: true },
      { id: "b", text: "Otimização de custos", correct: false },
      { id: "c", text: "Escalabilidade", correct: false },
      { id: "d", text: "Segurança", correct: false },
    ],
    explanation:
      "Confiabilidade é o conceito de nuvem que essa arquitetura representa. Confiabilidade é a capacidade de um sistema de se recuperar de interrupções de infraestrutura ou serviço, adquirir dinamicamente recursos de computação para atender à demanda e mitigar interrupções, como configurações incorretas ou problemas transitórios de rede. Implantar uma aplicação em várias regiões da AWS e configurar failover automático entre essas regiões aumenta a confiabilidade da aplicação, reduzindo o impacto de falhas regionais e aumentando a disponibilidade da aplicação.",
  },
  {
    id: 28,
    question:
      "Qual dos seguintes promove as melhores práticas de arquitetura da Nuvem AWS para projetar e operar sistemas confiáveis, seguros, eficientes e econômicos?",
    options: [
      { id: "a", text: "AWS Well-Architected Framework", correct: true },
      { id: "b", text: "Princípio do menor privilégio", correct: false },
      {
        id: "c",
        text: "AWS Serverless Application Model framework",
        correct: false,
      },
      { id: "d", text: "Suporte Empresarial AWS", correct: false },
    ],
    explanation:
      "AWS Well-Architected Framework promove as melhores práticas de arquitetura na AWS Cloud para projetar e operar sistemas confiáveis, seguros, eficientes e econômicos. AWS Well-Architected Framework é um conjunto de diretrizes e melhores práticas que ajudam o usuário a avaliar e melhorar a arquitetura de suas aplicações e workloads na AWS. O AWS Well-Architected Framework consiste em cinco pilares: excelência operacional, segurança, confiabilidade, eficiência de desempenho e otimização de custos. Cada pilar fornece um conjunto de princípios de design, perguntas e melhores práticas que ajudam o usuário a alcançar os resultados desejados para seus sistemas.",
  },
  {
    id: 29,
    question:
      "Uma empresa tem duas contas AWS em uma organização no AWS Organizations para faturamento consolidado. Todos os recursos da AWS da empresa estão hospedados em uma Região AWS. A Conta A comprou cinco Instâncias Reservadas Padrão (RIs) da Amazon EC2 e tem quatro instâncias EC2 em execução. A Conta B não comprou nenhuma RI e também tem quatro instâncias EC2 em execução. Qual declaração é verdadeira sobre o preço dessas oito instâncias?",
    options: [
      {
        id: "a",
        text: "Quatro instâncias serão cobradas como RIs, e quatro serão cobradas como instâncias regulares.",
        correct: true,
      },
      {
        id: "b",
        text: "As oito instâncias serão cobradas como instâncias regulares.",
        correct: false,
      },
      {
        id: "c",
        text: "As oito instâncias serão cobradas como RIs.",
        correct: false,
      },
      {
        id: "d",
        text: "Cinco instâncias serão cobradas como RIs, e três serão cobradas como instâncias regulares.",
        correct: false,
      },
    ],
    explanation:
      "A afirmação verdadeira em relação ao preço dessas oito instâncias é: quatro instâncias serão cobradas como RIs e quatro serão cobradas como instâncias regulares. As Reservas de Instâncias (RIs) do Amazon EC2 são um modelo de precificação que permite aos usuários reservar instâncias EC2 por um período específico e beneficiar-se de taxas horárias com desconto e reserva de capacidade. As RIs são compradas para uma região específica da AWS e podem ser compartilhadas entre várias contas em uma organização no AWS Organizations para cobrança consolidada. No entanto, as RIs são aplicadas por ordem de chegada e não há garantia de que todas as instâncias na organização serão cobradas à taxa de RI. Neste caso, a Conta A comprou cinco RIs e tem quatro instâncias em execução, então todas as quatro instâncias serão cobradas à taxa de RI. A Conta B não comprou nenhuma RI e também tem quatro instâncias em execução, então todas as quatro instâncias serão cobradas à taxa regular. A RI restante na Conta A não será aplicada a nenhuma instância na Conta B e será desperdiçada.",
  },
  {
    id: 30,
    question:
      "Qual recurso da Nuvem AWS dá aos usuários a capacidade de pagar com base nas necessidades atuais em vez das necessidades previstas?",
    options: [
      {
        id: "a",
        text: "Preços pay-as-you-go (pague conforme o uso)",
        correct: true,
      },
      { id: "b", text: "Savings Plans", correct: false },
      { id: "c", text: "AWS Budgets", correct: false },
      { id: "d", text: "Descontos por volume", correct: false },
    ],
    explanation:
      "A precificação pay-as-you-go é uma característica da AWS Cloud que permite aos usuários pagar com base nas necessidades atuais, em vez de necessidades previstas. Isso significa que os usuários pagam apenas pelos serviços e recursos da AWS que utilizam, sem compromissos antecipados ou de longo prazo. Isso permite que os usuários escalem seu uso conforme necessário, evitando pagar por capacidade ociosa ou não utilizada. A precificação pay-as-you-go também permite que os usuários se beneficiem das economias de escala e dos custos mais baixos da AWS à medida que seus negócios crescem.",
  },
  {
    id: 31,
    question:
      "Uma grande empresa tem uma carga de trabalho que requer que o hardware permaneça no local. A empresa quer usar os mesmos serviços de gerenciamento e controle que atualmente usa na AWS. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      { id: "a", text: "AWS Outposts", correct: true },
      { id: "b", text: "AWS Fargate", correct: false },
      { id: "c", text: "AWS Device Farm", correct: false },
      { id: "d", text: "AWS Ground Station", correct: false },
    ],
    explanation:
      "AWS Outposts é um serviço da AWS que permite à empresa atender aos requisitos. O AWS Outposts é um serviço totalmente gerenciado que estende a infraestrutura, serviços, APIs e ferramentas da AWS para praticamente qualquer datacenter, espaço de co-localização ou instalação local. O AWS Outposts permite que os clientes executem suas cargas de trabalho no mesmo hardware e software que a AWS usa em sua nuvem, mantendo o acesso e controle locais. As outras opções estão incorretas porque não são serviços da AWS que permitem à empresa atender aos requisitos. O AWS Device Farm é um serviço da AWS que permite aos clientes testar seus aplicativos móveis e web em dispositivos reais na nuvem da AWS. O AWS Fargate é um serviço da AWS que permite aos clientes executar contêineres sem precisar gerenciar servidores ou clusters. O AWS Ground Station é um serviço da AWS que permite aos clientes se comunicar com satélites e fazer o download de dados de órbita. Referência: AWS Outposts FAQs",
  },
  {
    id: 32,
    question:
      "Qual tarefa requer o uso das credenciais do usuário root da conta AWS?",
    options: [
      {
        id: "a",
        text: "A criação de uma organização no AWS Organizations",
        correct: true,
      },
      {
        id: "b",
        text: "A mudança para um plano de Suporte AWS diferente",
        correct: false,
      },
      { id: "c", text: "A exclusão de instâncias Amazon EC2", correct: false },
      { id: "d", text: "A exclusão de usuários IAM", correct: false },
    ],
    explanation:
      "A criação de uma organização no AWS Organizations requer o uso das credenciais do usuário root da conta AWS. O usuário root da conta AWS é o endereço de e-mail usado para criar a conta AWS. O usuário root tem acesso completo a todos os serviços e recursos da AWS na conta e pode executar tarefas sensíveis, como alterar as configurações da conta, fechar a conta ou criar uma organização. As credenciais do usuário root devem ser usadas com moderação e segurança, e apenas para tarefas que não podem ser realizadas por usuários ou funções do IAM.",
  },
  {
    id: 33,
    question:
      "Uma empresa está configurando seu ambiente na Nuvem AWS. Os administradores da empresa precisam agrupar usuários e aplicar permissões ao grupo. Qual serviço ou recurso da AWS a empresa pode usar para atender a esses requisitos?",
    options: [
      {
        id: "a",
        text: "AWS Identity and Access Management (IAM)",
        correct: true,
      },
      { id: "b", text: "AWS Organizations", correct: false },
      { id: "c", text: "Marcação de recursos", correct: false },
      { id: "d", text: "Grupos de recursos", correct: false },
    ],
    explanation:
      "O serviço ou recurso da AWS que a empresa pode usar para agrupar usuários e aplicar permissões ao grupo é o AWS Identity and Access Management (IAM). O AWS IAM é um serviço que permite aos usuários criar e gerenciar usuários, grupos, funções e permissões para serviços e recursos da AWS. Os usuários podem usar grupos do IAM para organizar vários usuários que têm requisitos de acesso semelhantes e anexar políticas aos grupos que definem as permissões para os usuários no grupo. Isso simplifica a gestão e administração do acesso dos usuários.",
  },
  {
    id: 34,
    question:
      "Uma empresa implanta seu aplicativo em instâncias do Amazon EC2. O aplicativo ocasionalmente experimenta aumentos súbitos na demanda. A empresa quer garantir que seu aplicativo possa responder a mudanças na demanda ao menor custo possível. Qual serviço ou ferramenta da AWS atenderá a esses requisitos?",
    options: [
      { id: "a", text: "AWS Auto Scaling", correct: true },
      { id: "b", text: "AWS Cost Explorer", correct: false },
      { id: "c", text: "AWS Compute Optimizer", correct: false },
      { id: "d", text: "AWS Well-Architected Framework", correct: false },
    ],
    explanation:
      "O AWS Auto Scaling é o serviço ou ferramenta da AWS que atenderá aos requisitos de garantir que a aplicação possa responder a mudanças na demanda ao menor custo possível. O AWS Auto Scaling permite que os usuários ajustem automaticamente o número de instâncias Amazon EC2 com base nas necessidades de desempenho e disponibilidade da aplicação. O AWS Auto Scaling também pode otimizar custos ajudando os usuários a selecionar as instâncias EC2 mais econômicas para sua aplicação.",
  },
  {
    id: 35,
    question:
      "Uma empresa armazena dados em um bucket do Amazon S3. A empresa deve controlar quem tem permissão para ler, escrever ou excluir objetos que a empresa armazena no bucket do S3. Qual tarefa é responsabilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      {
        id: "a",
        text: "Garantir a segurança e a proteção ambiental da infraestrutura da AWS que hospeda Workspaces.",
        correct: true,
      },
      {
        id: "b",
        text: "Fornecer segurança para contas de usuário do Workspaces através do AWS Identity and Access Management (IAM).",
        correct: false,
      },
      {
        id: "c",
        text: "Configurar o AWS CloudTrail para registrar chamadas de API e atividade de usuários.",
        correct: false,
      },
      {
        id: "d",
        text: "Configurar autenticação multifator (MFA) para cada conta de usuário do Workspaces.",
        correct: false,
      },
    ],
    explanation:
      "Garantir a segurança ambiental e a segurança da infraestrutura da AWS que hospeda o Workspaces é responsabilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS. O modelo de responsabilidade compartilhada da AWS é uma estrutura que define a divisão de responsabilidades entre a AWS e o cliente para segurança e conformidade. A AWS é responsável pela segurança da nuvem, que inclui a infraestrutura global, como as regiões, zonas de disponibilidade e locais de borda; o hardware, software, rede e instalações que executam os serviços da AWS; e a camada de virtualização que separa as instâncias e o armazenamento do cliente. O cliente é responsável pela segurança na nuvem, que inclui os dados do cliente, os sistemas operacionais convidados, os aplicativos, o gerenciamento de identidade e acesso, a configuração de firewall e a criptografia. As outras opções estão incorretas porque são responsabilidades do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS. Configurar a autenticação multifator (MFA) para cada conta de usuário do Workspaces, fornecer segurança para contas de usuário do Workspaces por meio do AWS Identity and Access Management (IAM), configurar o AWS CloudTrail para registrar chamadas de API e atividade de usuários, e criptografar dados em repouso e em trânsito são todas tarefas que o cliente deve realizar para proteger seu ambiente do Workspaces.",
  },
  {
    id: 36,
    question:
      "Qual princípio de design deve ser considerado ao arquitetar na Nuvem AWS?",
    options: [
      {
        id: "a",
        text: "Projetar componentes fracamente acoplados.",
        correct: true,
      },
      {
        id: "b",
        text: "Usar integração síncrona de serviços.",
        correct: false,
      },
      {
        id: "c",
        text: "Pensar nos servidores como recursos não descartáveis.",
        correct: false,
      },
      {
        id: "d",
        text: "Implementar as regras menos permissivas para grupos de segurança.",
        correct: false,
      },
    ],
    explanation:
      "Projetar componentes acoplados de forma frouxa é um princípio de design que deve ser considerado ao arquitetar na AWS Cloud. O acoplamento frouxo é uma maneira de projetar sistemas para reduzir interdependências e minimizar o impacto das mudanças. O acoplamento frouxo permite que os componentes interajam entre si por meio de interfaces bem definidas, em vez de referências diretas. Isso reduz o risco de falhas e erros se propagarem pelo sistema e permite maior escalabilidade, disponibilidade e manutenção.",
  },
  {
    id: 37,
    question:
      "Qual serviço ou recurso da AWS pode ser usado para estimar custos antes da implantação?",
    options: [
      { id: "a", text: "AWS Pricing Calculator", correct: true },
      { id: "b", text: "Relatório de Custo e Uso da AWS", correct: false },
      { id: "c", text: "AWS Billing and Cost Management", correct: false },
      { id: "d", text: "AWS Free Tier", correct: false },
    ],
    explanation:
      "AWS Pricing Calculator pode ser usado para estimar custos antes da implantação. AWS Pricing Calculator é uma ferramenta que ajuda o usuário a comparar o custo dos serviços da AWS para diferentes casos de uso e configurações. O usuário pode criar estimativas para vários serviços da AWS, como Amazon EC2, Amazon S3, Amazon RDS e mais. O usuário também pode ajustar os parâmetros, como região, tipo de instância, tamanho do armazenamento e duração, para ver como eles afetam o custo. O AWS Pricing Calculator fornece uma discriminação detalhada do custo estimado, bem como um resumo dos principais fatores que influenciam o custo.",
  },
  {
    id: 38,
    question:
      "Uma empresa está usando um serviço de terceiros para fazer backup de 10 TB de dados em uma biblioteca de fitas. O servidor de backup local está ficando sem espaço. A empresa quer usar os serviços da AWS para os backups sem alterar seus fluxos de trabalho de backup existentes. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      { id: "a", text: "AWS Storage Gateway", correct: true },
      { id: "b", text: "AWS Lambda", correct: false },
      {
        id: "c",
        text: "Amazon Elastic Block Store (Amazon EBS)",
        correct: false,
      },
      {
        id: "d",
        text: "Amazon Elastic Container Service (Amazon ECS)",
        correct: false,
      },
    ],
    explanation:
      "AWS Storage Gateway é um serviço que deve ser usado pela empresa para atender aos requisitos. AWS Storage Gateway é um serviço que conecta aplicações de software locais com armazenamento baseado em nuvem. AWS Storage Gateway suporta três tipos de gateways: gateway de arquivos, gateway de volumes e gateway de fitas. O tipo de gateway de fitas permite que os usuários façam backup e arquivem dados em fitas virtuais na AWS sem alterar seus fluxos de trabalho de backup existentes. Os usuários podem usar suas aplicações de backup e bibliotecas de fitas existentes para armazenar dados em fitas virtuais no Amazon S3 ou Amazon S3 Glacier. As outras opções estão incorretas porque não são serviços que devem ser usados pela empresa para atender aos requisitos. Amazon Elastic Block Store (Amazon EBS) é um serviço que fornece volumes de armazenamento em bloco para instâncias do Amazon EC2. Amazon Elastic Container Service (Amazon ECS) é um serviço que permite aos usuários executar, escalar e proteger aplicações conteinerizadas na AWS. AWS Lambda é um serviço que permite aos usuários executar código sem provisionar ou gerenciar servidores. Referência: AWS Storage Gateway FAQs",
  },
  {
    id: 39,
    question:
      "Qual serviço ou ferramenta da AWS ajuda a gerenciar centralmente o faturamento e permitir o acesso controlado a recursos entre contas da AWS?",
    options: [
      { id: "a", text: "AWS Organizations", correct: true },
      {
        id: "b",
        text: "AWS Identity and Access Management (IAM)",
        correct: false,
      },
      { id: "c", text: "AWS Budgets", correct: false },
      { id: "d", text: "AWS Cost Explorer", correct: false },
    ],
    explanation:
      "AWS Organizations ajuda a gerenciar centralmente a cobrança e permitir acesso controlado a recursos entre contas da AWS. AWS Organizations é um serviço que permite ao usuário consolidar várias contas da AWS em uma organização que pode ser gerenciada como uma unidade única. O AWS Organizations permite que o usuário crie grupos de contas e aplique políticas a eles, como políticas de controle de serviço (SCPs) que especificam os serviços e ações que usuários e funções podem acessar nas contas. O AWS Organizations também permite que o usuário use cobrança consolidada, que combina o uso e as cobranças de todas as contas da organização em uma única fatura.",
  },
  {
    id: 40,
    question:
      "Quais são as características das Zonas de Disponibilidade? (Selecione DUAS.)",
    options: [
      {
        id: "a",
        text: "Zonas de Disponibilidade dentro de uma região da AWS compartilham energia redundante, rede e conectividade.",
        correct: true,
      },
      {
        id: "b",
        text: "Todas as Zonas de Disponibilidade em uma Região da AWS são interconectadas com uma rede de alta largura de banda e baixa latência.",
        correct: true,
      },
      {
        id: "c",
        text: "As Zonas de Disponibilidade são fisicamente separadas por uma distância mínima de 150 km (100 milhas).",
        correct: false,
      },
      {
        id: "d",
        text: "Todo o tráfego entre as Zonas de Disponibilidade é criptografado.",
        correct: false,
      },
      {
        id: "e",
        text: "Cada Zona de Disponibilidade contém um único data center.",
        correct: false,
      },
    ],
    explanation:
      "As Zonas de Disponibilidade são locais fisicamente separados dentro de uma Região da AWS que são projetados para serem isolados de falhas. Cada Zona de Disponibilidade possui energia, refrigeração e segurança física independentes e está conectada a outras Zonas de Disponibilidade na mesma Região por uma rede de baixa latência.",
  },
  {
    id: 41,
    question:
      "Uma empresa precisa executar código em resposta a uma notificação de evento que ocorre quando objetos são carregados em um bucket do Amazon S3. Qual serviço da AWS se integrará diretamente com a notificação de evento?",
    options: [
      { id: "a", text: "AWS Lambda", correct: true },
      { id: "b", text: "Amazon EC2", correct: false },
      { id: "c", text: "AWS Elastic Beanstalk", correct: false },
      {
        id: "d",
        text: "Amazon Elastic Container Registry (Amazon ECR)",
        correct: false,
      },
    ],
    explanation:
      "O AWS Lambda é um serviço que permite executar código sem provisionar ou gerenciar servidores. Você pode usar o Lambda para processar notificações de eventos do Amazon S3 quando objetos são carregados ou excluídos. O Lambda se integra diretamente com a notificação de eventos e invoca seu código automaticamente.",
  },
  {
    id: 42,
    question:
      "Um aplicativo está sendo executado em várias instâncias do Amazon EC2. A empresa quer tornar o aplicativo altamente disponível configurando um balanceador de carga com solicitações encaminhadas para as instâncias do EC2 com base nos caminhos de URL. Qual balanceador de carga da AWS atenderá a esses requisitos e exigirá o MENOR esforço para implantar?",
    options: [
      { id: "a", text: "Application Load Balancer", correct: true },
      { id: "b", text: "Network Load Balancer", correct: false },
      {
        id: "c",
        text: "Load Balancer personalizado no Amazon EC2",
        correct: false,
      },
      { id: "d", text: "AWS OpsWorks Load Balancer", correct: false },
    ],
    explanation:
      "Application Load Balancer é um balanceador de carga da AWS que atenderá aos requisitos e exigirá o menor esforço para implantar. O Application Load Balancer é um tipo de Elastic Load Balancing que opera na camada de aplicação (camada 7) do modelo OSI e roteia solicitações para alvos com base no conteúdo da solicitação. O Application Load Balancer suporta recursos avançados, como roteamento baseado em caminho, roteamento baseado em host e roteamento baseado em cabeçalho HTTP. As outras opções estão incorretas porque não são balanceadores de carga da AWS que atenderão aos requisitos e exigirão o menor esforço para implantar. O Network Load Balancer é um tipo de Elastic Load Balancing que opera na camada de transporte (camada 4) do modelo OSI e roteia solicitações para alvos com base no endereço IP de destino e na porta. O Network Load Balancer não suporta roteamento baseado em caminho. O AWS OpsWorks Load Balancer não é um balanceador de carga da AWS, mas sim um recurso do AWS OpsWorks que permite aos usuários anexar um balanceador de carga do Elastic Load Balancing a uma camada de sua pilha. O Custom Load Balancer no Amazon EC2 não é um balanceador de carga da AWS, mas sim um balanceador de carga definido pelo usuário que é executado em uma instância Amazon EC2. O Custom Load Balancer no Amazon EC2 exige mais esforço para implantar e manter do que um balanceador de carga da AWS. Referência: Elastic Load Balancing",
  },
  {
    id: 43,
    question:
      "Uma empresa quer proteger suas informações, sistemas e ativos na Nuvem AWS enquanto realiza tarefas de avaliação e mitigação de riscos. Qual pilar do AWS Well-Architected Framework é suportado por esses objetivos?",
    options: [
      { id: "a", text: "Segurança", correct: true },
      { id: "b", text: "Confiabilidade", correct: false },
      { id: "c", text: "Excelência operacional", correct: false },
      { id: "d", text: "Eficiência de desempenho", correct: false },
    ],
    explanation:
      "O pilar do AWS Well-Architected Framework que é apoiado pelos objetivos de proteger informações, sistemas e ativos da AWS Cloud enquanto realiza avaliações de risco e tarefas de mitigação é segurança. Segurança é a capacidade de proteger informações, sistemas e ativos enquanto entrega valor de negócio por meio de avaliações de risco e estratégias de mitigação. O pilar de segurança cobre tópicos como gerenciamento de identidade e acesso, proteção de dados, proteção de infraestrutura, controles de detecção, resposta a incidentes e conformidade.",
  },
  {
    id: 44,
    question:
      "Uma empresa usa Amazon Workspaces. O que um usuário pode realizar usando o AWS CloudTrail?",
    options: [
      {
        id: "a",
        text: "Registrar chamadas de API feitas para os serviços da AWS.",
        correct: true,
      },
      {
        id: "b",
        text: "Avaliar a conformidade das configurações dos recursos da AWS com políticas e diretrizes.",
        correct: false,
      },
      {
        id: "c",
        text: "Garantir que as instâncias Amazon EC2 estejam atualizadas com os últimos patches de segurança.",
        correct: false,
      },
      {
        id: "d",
        text: "Gerar um relatório de credenciais de usuários IAM.",
        correct: false,
      },
    ],
    explanation:
      "O AWS CloudTrail é um serviço da AWS que permite aos usuários realizar a tarefa de registrar chamadas de API feitas para serviços da AWS. O AWS CloudTrail é um serviço que rastreia a atividade dos usuários e o uso de APIs em toda a conta da AWS. O AWS CloudTrail registra os detalhes de cada chamada de API feita para os serviços da AWS, como a identidade do chamador, a hora da chamada, o endereço IP de origem do chamador, os parâmetros e respostas da chamada e mais. Os usuários podem usar o AWS CloudTrail para auditar, monitorar e solucionar problemas de seus recursos e ações da AWS. As outras opções estão incorretas porque não são tarefas que os usuários podem realizar usando o AWS CloudTrail. Gerar um relatório de credenciais de usuário do IAM é uma tarefa que os usuários podem realizar usando o IAM, que é um serviço da AWS que permite aos usuários gerenciar acesso e permissões a recursos e serviços da AWS. Avaliar a conformidade das configurações dos recursos da AWS com políticas e diretrizes é uma tarefa que os usuários podem realizar usando o AWS Config, que é um serviço da AWS que permite aos usuários avaliar, auditar e avaliar as configurações de seus recursos da AWS. Garantir que as instâncias do Amazon EC2 estejam atualizadas com as últimas atualizações de segurança é uma tarefa que os usuários podem realizar usando o AWS Systems Manager, que é um serviço da AWS que permite aos usuários automatizar tarefas operacionais, gerenciar configuração e conformidade e monitorar a saúde e o desempenho do sistema. Referência: AWS CloudTrail FAQs",
  },
  {
    id: 45,
    question:
      "Qual serviço da AWS um profissional de nuvem deve usar para receber orientações em tempo real para provisionamento de recursos, com base nas melhores práticas da AWS relacionadas à segurança, otimização de custos e limites de serviço?",
    options: [
      { id: "a", text: "AWS Trusted Advisor", correct: true },
      { id: "b", text: "AWS Security Hub", correct: false },
      { id: "c", text: "AWS Config", correct: false },
      { id: "d", text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "AWS Trusted Advisor é o serviço da AWS que fornece orientação em tempo real para provisionar recursos, com base nas melhores práticas da AWS relacionadas à segurança, otimização de custos e limites de serviço. O AWS Trusted Advisor examina o ambiente da AWS do usuário e fornece recomendações para melhorar o desempenho, segurança e confiabilidade, reduzir custos e seguir as melhores práticas. O AWS Trusted Advisor também alerta o usuário quando eles estão se aproximando ou excedendo seus limites de serviço, e os ajuda a solicitar aumentos de limite.",
  },
  {
    id: 46,
    question:
      "Qual pilar do AWS Well-Architected Framework se concentra na capacidade de executar cargas de trabalho de forma eficaz, obter insights sobre operações e melhorar continuamente os processos e procedimentos de suporte?",
    options: [
      { id: "a", text: "Excelência operacional", correct: true },
      { id: "b", text: "Otimização de custos", correct: false },
      { id: "c", text: "Eficiência de desempenho", correct: false },
      { id: "d", text: "Confiabilidade", correct: false },
    ],
    explanation:
      "O AWS Well-Architected Framework é um conjunto de melhores práticas e diretrizes para projetar e operar sistemas na nuvem. O framework consiste em cinco pilares: excelência operacional, segurança, confiabilidade, eficiência de desempenho e otimização de custos. O pilar da excelência operacional foca na capacidade de executar cargas de trabalho de forma eficaz, obter insights sobre operações e melhorar continuamente os processos e procedimentos de suporte.",
  },
  {
    id: 47,
    question:
      "Uma empresa precisa usar painéis e gráficos para analisar insights a partir de dados de negócios. Qual serviço da AWS fornecerá os painéis e gráficos para esses insights?",
    options: [
      { id: "a", text: "Amazon QuickSight", correct: true },
      { id: "b", text: "AWS CloudTrail", correct: false },
      { id: "c", text: "Amazon Macie", correct: false },
      { id: "d", text: "Amazon Aurora", correct: false },
    ],
    explanation:
      "Amazon QuickSight é um serviço da AWS que fornecerá os painéis e gráficos para os insights dos dados de negócios. O Amazon QuickSight é um serviço de inteligência de negócios totalmente gerenciado, escalável e sem servidor que permite aos usuários criar e compartilhar painéis e gráficos interativos. O Amazon QuickSight pode se conectar a várias fontes de dados, como Amazon S3, Amazon RDS, Amazon Redshift e mais. O Amazon QuickSight também fornece aos usuários insights de aprendizado de máquina, como detecção de anomalias, previsão e narrativas em linguagem natural. As outras opções estão incorretas porque não são serviços da AWS que fornecerão os painéis e gráficos para os insights dos dados de negócios. O Amazon Macie é um serviço da AWS que ajuda os usuários a descobrir, classificar e proteger dados confidenciais armazenados no Amazon S3. O Amazon Aurora é um serviço da AWS que fornece um banco de dados relacional compatível com MySQL e PostgreSQL. O AWS CloudTrail é um serviço da AWS que permite aos usuários rastrear a atividade dos usuários e o uso de APIs em sua conta da AWS. Referência: Amazon QuickSight FAQs",
  },
  {
    id: 48,
    question:
      "Quais são algumas vantagens de usar instâncias do Amazon EC2 para hospedar aplicativos na Nuvem AWS em vez de localmente? (Selecione DUAS.)",
    options: [
      {
        id: "a",
        text: "EC2 integra-se com Amazon VPC, AWS CloudTrail e AWS Identity and Access Management (IAM).",
        correct: true,
      },
      {
        id: "b",
        text: "EC2 possui um modelo de preços flexível, pay-as-you-go.",
        correct: true,
      },
      {
        id: "c",
        text: "EC2 tem otimização automática de custo de armazenamento.",
        correct: false,
      },
      {
        id: "d",
        text: "O EC2 inclui gerenciamento de patches do sistema operacional.",
        correct: false,
      },
      {
        id: "e",
        text: "EC2 tem um acordo de nível de serviço (SLA) de 100%.",
        correct: false,
      },
    ],
    explanation:
      "Algumas das vantagens de usar instâncias Amazon EC2 para hospedar aplicações na AWS Cloud, em vez de no local, são: EC2 se integra com Amazon VPC, AWS CloudTrail e AWS Identity and Access Management (IAM). O Amazon VPC permite provisionar uma seção logicamente isolada da AWS Cloud onde você pode lançar recursos da AWS em uma rede virtual que você define. O AWS CloudTrail possibilita a governança, conformidade, auditoria operacional e auditoria de risco da sua conta da AWS. O AWS IAM permite gerenciar o acesso aos serviços e recursos da AWS de forma segura.",
  },
  {
    id: 49,
    question:
      "Uma empresa precisa de uma rede de entrega de conteúdo que forneça entrega segura de dados, vídeos, aplicativos e APIs para usuários globalmente com baixa latência e altas velocidades de transferência. Qual serviço da AWS atende a esses requisitos?",
    options: [
      { id: "a", text: "Amazon CloudFront", correct: true },
      { id: "b", text: "Amazon Elastic Transcoder", correct: false },
      { id: "c", text: "Elastic Load Balancing", correct: false },
      { id: "d", text: "Amazon S3", correct: false },
    ],
    explanation:
      "Amazon CloudFront é um serviço da AWS que fornece entrega segura de dados, vídeos, aplicativos e APIs para usuários globalmente com baixa latência e altas velocidades de transferência. A Amazon CloudFront é uma rede de entrega de conteúdo (CDN) rápida que se integra a outros serviços da AWS, como Amazon S3, Amazon EC2, AWS Lambda e AWS Shield. A Amazon CloudFront entrega conteúdo por meio de uma rede mundial de locais de borda que estão próximos aos usuários finais. As outras opções estão incorretas porque não são serviços da AWS que fornecem entrega segura de dados, vídeos, aplicativos e APIs para usuários globalmente com baixa latência e altas velocidades de transferência. O Elastic Load Balancing é um serviço da AWS que distribui o tráfego de entrada por vários alvos, como instâncias Amazon EC2, contêineres e endereços IP. O Amazon S3 é um serviço da AWS que fornece armazenamento de objetos para dados de qualquer tamanho e tipo. O Amazon Elastic Transcoder é um serviço da AWS que converte arquivos de mídia de seu formato original para diferentes formatos que serão reproduzidos em vários dispositivos. Referência: Amazon CloudFront FAQs",
  },
  {
    id: 50,
    question:
      "Qual serviço ou recurso da AWS é usado para enviar mensagens de texto e e-mail a partir de aplicativos distribuídos?",
    options: [
      {
        id: "a",
        text: "Amazon Simple Notification Service (Amazon SNS)",
        correct: true,
      },
      {
        id: "b",
        text: "Amazon Simple Email Service (Amazon SES)",
        correct: false,
      },
      { id: "c", text: "Alertas do Amazon CloudWatch", correct: false },
      {
        id: "d",
        text: "Amazon Simple Queue Service (Amazon SQS)",
        correct: false,
      },
    ],
    explanation:
      "Amazon Simple Notification Service (Amazon SNS) é o serviço da AWS usado para enviar mensagens de texto e e-mail de aplicativos distribuídos. O Amazon SNS é um serviço de mensagens pub/sub totalmente gerido que permite ao usuário enviar mensagens para vários assinantes ou endpoints, como endereços de e-mail, números de telefone, endpoints HTTP, funções AWS Lambda e mais. O Amazon SNS pode ser usado para enviar notificações, alertas, confirmações e lembretes de aplicativos para usuários ou outros aplicativos.",
  },
  {
    id: 51,
    question:
      "Uma empresa está projetando um aplicativo web que será executado em instâncias do Amazon EC2. Quais serviços e recursos da AWS melhorarão a disponibilidade e reduzirão o impacto de falhas para este aplicativo? (Selecione DUAS.)",
    options: [
      {
        id: "a",
        text: "Recursos distribuídos por várias Zonas de Disponibilidade",
        correct: true,
      },
      {
        id: "b",
        text: "Amazon EC2 Auto Scaling para as instâncias EC2",
        correct: true,
      },
      {
        id: "c",
        text: "ACLs de sub-rede VPC para verificar a integridade de um serviço",
        correct: false,
      },
      {
        id: "d",
        text: "Configuração do AWS Server Migration Service (AWS SMS) para mover as instâncias EC2 para uma região diferente da AWS",
        correct: false,
      },
      {
        id: "e",
        text: "Recursos que estão distribuídos em vários pontos de presença da AWS",
        correct: false,
      },
    ],
    explanation:
      "Amazon EC2 Auto Scaling e recursos distribuídos em várias Zonas de Disponibilidade são serviços e recursos da AWS que melhoram a disponibilidade e reduzem o impacto de falhas para a aplicação web. Amazon EC2 Auto Scaling é um serviço que permite aos usuários ajustar automaticamente o número de instâncias do Amazon EC2 em resposta a mudanças na demanda ou desempenho. Amazon EC2 Auto Scaling ajuda os usuários a manter a disponibilidade e o desempenho ideais de suas aplicações, adicionando ou removendo instâncias conforme necessário. Recursos distribuídos em várias Zonas de Disponibilidade são recursos da AWS que permitem aos usuários aumentar a tolerância a falhas e a resiliência de suas aplicações. Zonas de Disponibilidade são locais isolados dentro de uma Região da AWS que possuem energia, resfriamento e rede independentes. Os usuários podem lançar seus recursos, como instâncias do Amazon EC2, em várias Zonas de Disponibilidade para proteger suas aplicações contra a falha de um único local. As outras opções estão incorretas porque não são serviços e recursos da AWS que melhoram a disponibilidade e reduzem o impacto de falhas para a aplicação web. ACLs de sub-rede do VPC são recursos da AWS que permitem aos usuários controlar o tráfego de entrada e saída de suas sub-redes dentro de um VPC. ACLs de sub-rede do VPC não verificam a saúde de um serviço, mas sim filtram o tráfego de rede com base em regras. A configuração do AWS Server Migration Service (AWS SMS) é um serviço da AWS que permite aos usuários migrar seus servidores locais para a AWS. A configuração do AWS SMS não ajuda a mover as instâncias do Amazon EC2 para uma região diferente da AWS, mas sim a migrar os servidores do ambiente de origem para a AWS. Recursos distribuídos em vários pontos de presença da AWS são recursos da AWS que permitem aos usuários entregar conteúdo para seus usuários finais com baixa latência e alto desempenho. Pontos de presença da AWS são locais de borda que fazem parte da Infraestrutura Global da AWS. Os usuários podem usar serviços como Amazon CloudFront e AWS Global Accelerator para distribuir seu conteúdo em vários pontos de presença da AWS. Referência: Amazon EC2 Auto Scaling, [Regiões, Zonas de Disponibilidade e Zonas Locais]",
  },
  {
    id: 52,
    question:
      "Qual plano de suporte da AWS oferece aos clientes acesso a um gerente de conta técnica (TAM) da AWS?",
    options: [
      { id: "a", text: "Suporte Empresarial AWS", correct: true },
      { id: "b", text: "Suporte Básico AWS", correct: false },
      { id: "c", text: "Suporte ao Desenvolvedor AWS", correct: false },
    ],
    explanation:
      "Enterprise Support é o plano de suporte que fornece aos clientes acesso a um gerente técnico de contas da AWS (TAM). AWS Enterprise Support é o nível mais alto de plano de suporte oferecido pela AWS, e fornece aos clientes a experiência de suporte mais abrangente e personalizada. Um TAM da AWS é um recurso técnico dedicado que trabalha de perto com os clientes para entender suas necessidades de negócios e técnicas, fornecer orientações proativas e coordenar o suporte entre as equipes da AWS. As outras opções estão incorretas porque não são planos de suporte que fornecem aos clientes acesso a um TAM da AWS. AWS Basic Support é o plano de suporte padrão e gratuito que fornece aos clientes acesso à documentação online, fóruns e informações da conta. AWS Developer Support é o nível mais baixo de plano de suporte pago que fornece aos clientes acesso ao suporte técnico durante o horário comercial, orientação geral e recomendações de melhores práticas. AWS Business Support é o nível intermediário de plano de suporte pago que fornece aos clientes acesso ao suporte técnico 24/7, verificações de saúde do sistema, orientação arquitetônica e gerenciamento de casos. Referência: AWS Support Plans",
  },
  {
    id: 53,
    question:
      "Qual atividade as empresas podem realizar usando AWS Organizations?",
    options: [
      {
        id: "a",
        text: "Gerenciar políticas de controle de serviço (SCPs).",
        correct: true,
      },
      {
        id: "b",
        text: "Migrar aplicativos para microservices.",
        correct: false,
      },
      {
        id: "c",
        text: "Monitorar o desempenho de aplicativos.",
        correct: false,
      },
      {
        id: "d",
        text: "Solucionar problemas de desempenho de aplicativos.",
        correct: false,
      },
    ],
    explanation:
      "Gerenciar políticas de controle de serviço (SCPs) é uma atividade que as empresas podem realizar usando o AWS Organizations. AWS Organizations é um serviço que permite ao usuário consolidar várias contas da AWS em uma organização que pode ser gerenciada como uma única unidade. O AWS Organizations permite que o usuário crie grupos de contas e aplique políticas a eles, como políticas de controle de serviço (SCPs) que especificam os serviços e ações aos quais os usuários e funções podem acessar nas contas. O AWS Organizations também permite ao usuário usar a cobrança consolidada, que combina o uso e as cobranças de todas as contas na organização em uma única fatura.",
  },
  {
    id: 54,
    question:
      "De acordo com o modelo de responsabilidade compartilhada da AWS, quais das seguintes opções são responsabilidades da AWS? (Selecione DUAS.)",
    options: [
      {
        id: "a",
        text: "Infraestrutura de rede e virtualização de infraestrutura",
        correct: true,
      },
      { id: "b", text: "Segurança física do hardware", correct: true },
      { id: "c", text: "Segurança dos dados da aplicação", correct: false },
      { id: "d", text: "Sistemas operacionais convidados", correct: false },
      { id: "e", text: "Credenciais e políticas", correct: false },
    ],
    explanation:
      "Infraestrutura de rede e virtualização da infraestrutura e segurança física do hardware são responsabilidades da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS. O modelo de responsabilidade compartilhada da AWS é um framework que define a divisão de responsabilidades entre a AWS e o cliente para segurança e conformidade. A AWS é responsável pela segurança da nuvem, o que inclui a infraestrutura global, como regiões, zonas de disponibilidade e locais de borda; o hardware, software, redes e instalações que executam os serviços da AWS; e a camada de virtualização que separa as instâncias e o armazenamento dos clientes. O cliente é responsável pela segurança na nuvem, o que inclui os dados do cliente, os sistemas operacionais convidados, as aplicações, a gestão de identidade e acesso, a configuração de firewall e a criptografia. As outras opções estão incorretas porque não são responsabilidades da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS. Segurança dos dados da aplicação, sistemas operacionais convidados, e credenciais e políticas são responsabilidades do cliente, segundo o modelo de responsabilidade compartilhada da AWS. Referência: [AWS Shared Responsibility Model]",
  },
  {
    id: 55,
    question:
      "Qual benefício está incluído em um plano de Suporte Empresarial da AWS?",
    options: [
      {
        id: "a",
        text: "Suporte designado de um gerente técnico de conta (TAM) da AWS",
        correct: true,
      },
      {
        id: "b",
        text: "Suporte à Rede de Parceiros AWS (APN) sem custo",
        correct: false,
      },
      {
        id: "c",
        text: "Suporte no local de engenheiros da AWS",
        correct: false,
      },
      {
        id: "d",
        text: "Conformidade gerenciada como código com AWS Config",
        correct: false,
      },
    ],
    explanation:
      "A AWS oferece diferentes planos de suporte para atender às necessidades de diferentes clientes. O plano AWS Enterprise Support é o nível mais alto de suporte que oferece aos clientes um serviço semelhante a um concierge, onde o foco principal é ajudar a alcançar seus resultados e encontrar sucesso na nuvem. Um dos benefícios do plano AWS Enterprise Support é que os clientes recebem suporte designado de um gerente técnico de conta (TAM) da AWS, que fornece orientação consultiva arquitetônica e operacional com base em suas aplicações e casos de uso.",
  },
  {
    id: 56,
    question: "Qual das seguintes opções descreve uma Região da AWS?",
    options: [
      {
        id: "a",
        text: "Uma localização específica dentro de uma área geográfica que fornece alta disponibilidade",
        correct: true,
      },
      {
        id: "b",
        text: "Um conjunto de data centers abrangendo vários países",
        correct: false,
      },
      {
        id: "c",
        text: "Uma visão global do ambiente de computação em nuvem de um usuário",
        correct: false,
      },
      {
        id: "d",
        text: "Uma coleção de bancos de dados que podem ser acessados apenas a partir de uma área geográfica específica",
        correct: false,
      },
    ],
    explanation:
      "Uma Região da AWS é uma localização específica dentro de uma área geográfica que oferece alta disponibilidade. Uma Região da AWS consiste em duas ou mais Zonas de Disponibilidade, que são locais isolados dentro da mesma Região. Cada Zona de Disponibilidade possui energia, resfriamento e segurança física independentes, e está conectada às outras Zonas de Disponibilidade na mesma Região por meio de uma rede de baixa latência, alta largura de banda e altamente redundante. Os serviços da AWS estão disponíveis em várias Regiões ao redor do mundo, permitindo ao usuário escolher onde executar suas aplicações e armazenar seus dados.",
  },
  {
    id: 57,
    question:
      "A equipe de TI de uma empresa está gerenciando clusters de servidores de banco de dados MySQL. A equipe de TI precisa aplicar patches no banco de dados e tirar snapshots de backup dos dados nos clusters. A empresa quer mover essa carga de trabalho para a AWS para que essas tarefas sejam realizadas automaticamente. O que a empresa deve fazer para atender a esses requisitos?",
    options: [
      {
        id: "a",
        text: "Usar Amazon RDS com um banco de dados MySQL.",
        correct: true,
      },
      {
        id: "b",
        text: "Implantar clusters de servidor de banco de dados MySQL em instâncias Amazon EC2.",
        correct: false,
      },
      {
        id: "c",
        text: "Usar um template do AWS CloudFormation para implantar servidores de banco de dados MySQL em instâncias Amazon EC2.",
        correct: false,
      },
      {
        id: "d",
        text: "Migrar todos os dados do banco de dados MySQL para o Amazon S3.",
        correct: false,
      },
    ],
    explanation:
      "A empresa deve usar o Amazon RDS com um banco de dados MySQL para atender aos requisitos de mover sua carga de trabalho para a AWS, de modo que as tarefas de aplicação de patches no banco de dados e a criação de snapshots de backup dos dados nos clusters sejam concluídas automaticamente. O Amazon RDS é um serviço gerenciado que simplifica a configuração, operação e escalabilidade de bancos de dados relacionais na AWS Cloud. O Amazon RDS automatiza tarefas comuns de administração de banco de dados, como aplicação de patches, backup e recuperação. O Amazon RDS também suporta MySQL e outros motores de banco de dados populares.",
  },
  {
    id: 58,
    question:
      "Qual serviço da AWS oferece aos usuários a capacidade de provisionar uma conexão de rede dedicada e privada da sua rede interna para a AWS?",
    options: [
      { id: "a", text: "AWS Direct Connect", correct: true },
      { id: "b", text: "AWS CloudHSM", correct: false },
      { id: "c", text: "AWS VPN", correct: false },
      { id: "d", text: "Amazon Connect", correct: false },
    ],
    explanation:
      "AWS Direct Connect dá aos usuários a capacidade de provisionar uma conexão de rede dedicada e privada de sua rede interna para a AWS. O AWS Direct Connect liga a rede interna do usuário a um local AWS Direct Connect por meio de um cabo Ethernet de fibra óptica padrão. Uma extremidade do cabo está conectada ao roteador do usuário, e a outra a um roteador AWS Direct Connect. Com essa conexão em vigor, o usuário pode criar interfaces virtuais diretamente para a nuvem AWS e Amazon Virtual Private Cloud (Amazon VPC), evitando provedores de serviços de internet no caminho da rede.",
  },
  {
    id: 59,
    question:
      "Quais dos seguintes são benefícios que uma empresa recebe ao mover uma carga de trabalho de produção local para a AWS? (Selecione DUAS.)",
    options: [
      { id: "a", text: "A AWS fornece economias de escala.", correct: true },
      { id: "b", text: "A AWS oferece alta disponibilidade.", correct: true },
      {
        id: "c",
        text: "A AWS gerencia toda a segurança na nuvem.",
        correct: false,
      },
      {
        id: "d",
        text: "A AWS treina a equipe da empresa sobre o uso de todos os serviços da AWS.",
        correct: false,
      },
      {
        id: "e",
        text: "A AWS oferece suporte gratuito de gerentes técnicos de conta (TAMs).",
        correct: false,
      },
    ],
    explanation:
      "AWS oferece alta disponibilidade e a AWS proporciona economias de escala são benefícios que uma empresa recebe ao mover uma carga de trabalho de produção local para a AWS. Alta disponibilidade significa que a AWS possui uma infraestrutura global que permite aos clientes implantar suas aplicações e dados em várias regiões e zonas de disponibilidade. Isso aumenta a tolerância a falhas e a resiliência de suas aplicações e reduz o impacto de falhas. Economias de escala significa que a AWS pode alcançar custos variáveis mais baixos do que os clientes conseguem obter sozinhos. Isso permite que os clientes paguem apenas pelos recursos que usam e escalem para cima ou para baixo conforme necessário. As outras opções estão incorretas porque não são benefícios que uma empresa recebe ao mover uma carga de trabalho de produção local para a AWS. A AWS treina a equipe da empresa no uso de todos os serviços da AWS não é um benefício que uma empresa recebe ao mover uma carga de trabalho de produção local para a AWS. A AWS fornece vários recursos de aprendizagem e cursos de treinamento para clientes, mas não treina a equipe da empresa no uso de todos os serviços da AWS. A AWS gerencia toda a segurança na nuvem não é um benefício que uma empresa recebe ao mover uma carga de trabalho de produção local para a AWS. A AWS é responsável pela segurança da nuvem, mas o cliente é responsável pela segurança na nuvem. A AWS oferece suporte gratuito de gerentes técnicos de contas (TAMs) não é um benefício que uma empresa recebe ao mover uma carga de trabalho de produção local para a AWS. A AWS oferece suporte de TAMs, mas apenas para clientes que possuem o plano de suporte AWS Enterprise, que não é gratuito. Referência: O que é Computação em Nuvem?, [Modelo de Responsabilidade Compartilhada da AWS], [Planos de Suporte da AWS]",
  },
  {
    id: 60,
    question:
      "Qual serviço ou ferramenta da AWS o AWS Control Tower usa para criar recursos?",
    options: [
      { id: "a", text: "AWS CloudFormation", correct: true },
      { id: "b", text: "AWS Trusted Advisor", correct: false },
      { id: "c", text: "AWS Cost Explorer", correct: false },
      { id: "d", text: "AWS Directory Service", correct: false },
    ],
    explanation:
      "O AWS Control Tower usa o AWS CloudFormation para criar recursos na sua zona de aterrissagem. O AWS CloudFormation é um serviço que ajuda a modelar e configurar seus recursos da AWS usando templates. O AWS Control Tower suporta a criação de recursos AWS::ControlTower::EnabledControl no AWS CloudFormation.",
  },
  {
    id: 61,
    question:
      "Uma empresa quer usar um serviço gerenciado para simplificar a configuração, operação e escalabilidade de seu banco de dados MySQL na Nuvem AWS. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      { id: "a", text: "Amazon RDS", correct: true },
      { id: "b", text: "Amazon DynamoDB", correct: false },
      { id: "c", text: "Amazon EMR", correct: false },
      { id: "d", text: "Amazon Redshift", correct: false },
    ],
    explanation:
      "Amazon RDS é o serviço da AWS que atenderá aos requisitos de usar um serviço gerenciado para simplificar a configuração, operação e escalabilidade de um banco de dados MySQL na AWS Cloud. O Amazon RDS é um serviço de banco de dados relacional que suporta MySQL e outros motores de banco de dados populares. O Amazon RDS lida com tarefas rotineiras de banco de dados, como provisionamento, aplicação de patches, backup, recuperação e escalabilidade. O Amazon RDS também oferece alta disponibilidade, segurança e recursos de compatibilidade.",
  },
  {
    id: 62,
    question:
      "Uma empresa refinou sua carga de trabalho para usar serviços específicos da AWS para melhorar a eficiência e reduzir custos. Qual tarefa é responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      {
        id: "a",
        text: "Gerenciamento dos sistemas operacionais convidados",
        correct: true,
      },
      {
        id: "b",
        text: "Gerenciamento dos sistemas operacionais host e virtualização",
        correct: false,
      },
      {
        id: "c",
        text: "Manutenção do software que alimenta as Zonas de Disponibilidade",
        correct: false,
      },
      {
        id: "d",
        text: "Manutenção da configuração de dispositivos de infraestrutura",
        correct: false,
      },
    ],
    explanation:
      "O gerenciamento dos sistemas operacionais convidados é uma responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS. O modelo de responsabilidade compartilhada da AWS define as diferentes responsabilidades de segurança e conformidade da AWS e do cliente. A AWS é responsável pela segurança da nuvem, que inclui a infraestrutura física, hardware, software e instalações que executam a AWS Cloud. O cliente é responsável pela segurança na nuvem, que inclui a configuração e o gerenciamento dos sistemas operacionais convidados, aplicações, dados e proteção do tráfego de rede.",
  },
  {
    id: 63,
    question:
      "O gerenciamento dos sistemas operacionais convidados é uma responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS. O modelo de responsabilidade compartilhada da AWS define as diferentes responsabilidades de segurança e conformidade da AWS e do cliente. A AWS é responsável pela segurança da nuvem, que inclui a infraestrutura física, hardware, software e instalações que executam a AWS Cloud. O cliente é responsável pela segurança na nuvem, que inclui a configuração e o gerenciamento dos sistemas operacionais convidados, aplicações, dados e proteção do tráfego de rede.",
    options: [
      { id: "a", text: "Amazon Cognito", correct: true },
      {
        id: "b",
        text: "AWS Identity and Access Management (IAM)",
        correct: true,
      },
      { id: "c", text: "AWS CodeStar", correct: false },
      { id: "d", text: "AWS Lambda", correct: false },
      { id: "e", text: "AWS License Manager", correct: false },
    ],
    explanation:
      "Os serviços de autenticação de usuário gerenciados pela AWS são: Amazon Cognito e AWS Identity and Access Management (IAM). Esses serviços ajudam os usuários a gerenciar e controlar de forma segura o acesso aos seus recursos e aplicações AWS. O Amazon Cognito é um serviço que fornece cadastro de usuário, login e controle de acesso para aplicações web e móveis. O Amazon Cognito suporta vários provedores de identidade, como Facebook, Google e Amazon, bem como pools de usuários personalizados. O AWS IAM é um serviço que permite aos usuários criar e gerenciar usuários, grupos, funções e permissões para serviços e recursos da AWS. O AWS IAM suporta vários métodos de autenticação, como senhas, chaves de acesso e autenticação multifator (MFA).",
  },
  {
    id: 64,
    question:
      "Quais princípios de design suportam o pilar de confiabilidade do AWS Well-Architected Framework? (Selecione DUAS.)",
    options: [
      { id: "a", text: "Recuperar automaticamente de falhas.", correct: true },
      {
        id: "b",
        text: "Escalar automaticamente para atender à demanda.",
        correct: true,
      },
      {
        id: "c",
        text: "Implantar recursos globalmente para melhorar o tempo de resposta.",
        correct: false,
      },
      { id: "d", text: "Executar operações como código.", correct: false },
      { id: "e", text: "Habilitar rastreabilidade.", correct: false },
    ],
    explanation:
      "Os princípios de design que apoiam o pilar de confiabilidade do AWS Well-Architected Framework são: escalabilidade automática para atender à demanda e recuperação automática de falhas. Esses princípios ajudam os usuários a projetar sistemas que podem lidar com mudanças na carga, evitar interrupções e retomar operações normais rapidamente. Escalar automaticamente para atender à demanda significa ajustar a capacidade do sistema com base na carga de trabalho atual e antecipada, usando serviços como AWS Auto Scaling, Amazon EC2 e AWS Lambda. Recuperar automaticamente de falhas significa detectar e resolver problemas, usando serviços como Amazon CloudWatch, AWS CloudFormation e AWS CloudTrail.",
  },
  {
    id: 65,
    question:
      "Uma empresa quer garantir que duas instâncias do Amazon EC2 estejam em centros de dados separados com latência mínima de comunicação entre os centros de dados. Como a empresa pode atender a esse requisito?",
    options: [
      {
        id: "a",
        text: "Coloque as instâncias EC2 em duas Zonas de Disponibilidade separadas dentro da mesma Região da AWS.",
        correct: true,
      },
      {
        id: "b",
        text: "Coloque ambas as instâncias EC2 em um grupo de colocação para largura de banda dedicada.",
        correct: false,
      },
      {
        id: "c",
        text: "Coloque as instâncias EC2 em duas Regiões da AWS separadas, conectadas com uma conexão de peering VPC.",
        correct: false,
      },
      {
        id: "d",
        text: "Coloque uma instância EC2 on-premises e a outra em uma Região da AWS. Em seguida, conecte-as usando uma conexão VPN da AWS.",
        correct: false,
      },
    ],
    explanation:
      "Colocar as instâncias do EC2 em duas Zonas de Disponibilidade separadas dentro da mesma Região da AWS é a melhor maneira de atender ao requisito. Zonas de Disponibilidade são locais isolados dentro de uma Região da AWS que possuem energia, resfriamento e rede independentes. Os usuários podem lançar seus recursos, como instâncias do Amazon EC2, em várias Zonas de Disponibilidade para aumentar a tolerância a falhas e a resiliência de suas aplicações. As Zonas de Disponibilidade dentro da mesma Região da AWS estão conectadas com rede de baixa latência, alta capacidade e altamente redundante. As outras opções estão incorretas porque não são as melhores maneiras de atender ao requisito. Colocar as instâncias do EC2 em duas Regiões da AWS separadas conectadas com uma conexão de emparelhamento de VPC não é a melhor maneira de atender ao requisito porque as Regiões da AWS são geograficamente dispersas e podem ter maior latência de comunicação entre elas do que as Zonas de Disponibilidade dentro da mesma Região da AWS. A conexão de emparelhamento de VPC é uma conexão de rede entre dois VPCs que permite aos usuários rotear o tráfego entre eles usando endereços IP privados. Colocar uma instância do EC2 no local e a outra em uma Região da AWS, e depois conectá-las usando uma conexão de VPN da AWS não é a melhor maneira de atender ao requisito porque o local e a Região da AWS são geograficamente dispersos e podem ter maior latência de comunicação entre eles do que as Zonas de Disponibilidade dentro da mesma Região da AWS. A conexão de VPN da AWS é uma conexão segura e criptografada entre uma rede do usuário e seu VPC. Colocar ambas as instâncias do EC2 em um grupo de posicionamento para largura de banda dedicada não é a melhor maneira de atender ao requisito porque um grupo de posicionamento é uma agrupamento lógico de instâncias dentro de uma única Zona de Disponibilidade que permite aos usuários lançar instâncias com características específicas de desempenho. Um grupo de posicionamento não garante que as instâncias estejam em data centers separados, e não fornece comunicação de baixa latência entre instâncias em diferentes Zonas de Disponibilidade",
  },
  //================================================================================================================================
  // QUIZ 02
  //================================================================================================================================
  {
    id: 66,
    question:
      "Como a empresa deve implantar a aplicação para atender a esses requisitos?",
    options: [
      { id: "a", text: "Em múltiplas Zonas de Disponibilidade", correct: true },
      { id: "b", text: "Em uma única Zona de Disponibilidade", correct: false },
      { id: "c", text: "Em Instâncias Reservadas", correct: false },
      { id: "d", text: "On AWS Direct Connect", correct: false },
    ],
    explanation:
      "Implantar a aplicação em várias Zonas de Disponibilidade é a melhor maneira de garantir alta disponibilidade. Zonas de Disponibilidade são locais isolados dentro de uma região AWS, projetados para serem tolerantes a falhas e fornecer alta disponibilidade.",
  },
  {
    id: 67,
    question:
      "Qual serviço da AWS fornece um serviço de busca empresarial altamente preciso e fácil de usar, alimentado por machine learning (ML)?",
    options: [
      { id: "a", text: "Amazon Kendra", correct: true },
      { id: "b", text: "Amazon Augmented AI (Amazon A2I)", correct: false },
      { id: "c", text: "Amazon SageMaker", correct: false },
      { id: "d", text: "Amazon Polly", correct: false },
    ],
    explanation:
      "O Amazon Kendra é um serviço que fornece uma busca empresarial altamente precisa e fácil de usar, baseada em aprendizado de máquina, permitindo que os usuários encontrem informações dentro de grandes volumes de conteúdo espalhados pela empresa.",
  },
  {
    id: 68,
    question:
      "Qual solução da AWS oferece a capacidade de uma empresa executar serviços da AWS no data center local da empresa?",
    options: [
      { id: "a", text: "AWS Outposts", correct: true },
      { id: "b", text: "AWS Direct Connect", correct: false },
      { id: "c", text: "AWS Storage Gateway", correct: false },
      {
        id: "d",
        text: "Ativações híbridas do AWS Systems Manager",
        correct: false,
      },
    ],
    explanation:
      "AWS Outposts é um serviço totalmente gerenciado que estende a infraestrutura, serviços, APIs e ferramentas da AWS para praticamente qualquer data center, espaço de co-location ou instalação local, proporcionando uma experiência híbrida verdadeiramente consistente.",
  },
  {
    id: 39,
    question:
      "Qual princípio de design está incluído no pilar de excelência operacional do AWS Well-Architected Framework?",
    options: [
      { id: "a", text: "Criar documentação anotada.", correct: true },
      { id: "b", text: "Otimizar custos.", correct: false },
      { id: "c", text: "Garantir a eficiência do desempenho.", correct: false },
      { id: "d", text: "Anticipate failure.", correct: false },
    ],
    explanation:
      "Criar documentação anotada é o princípio de design incluído no pilar de excelência operacional do AWS Well-Architected Framework. Significa documentar sua carga de trabalho para que a equipe entenda a arquitetura, como operar a carga de trabalho e como ela entrega valor aos clientes.",
  },
  {
    id: 70,
    question:
      "Quais princípios de design uma empresa deve aplicar às cargas de trabalho da AWS Cloud para maximizar a sustentabilidade e minimizar o impacto ambiental? (Selecione DOIS.)",
    options: [
      {
        id: "a",
        text: "Reduzir a necessidade de reinstalações de aplicativos pelos usuários.",
        correct: true,
      },
      {
        id: "b",
        text: "Maximizar a utilização das instâncias do Amazon EC2.",
        correct: true,
      },
      {
        id: "c",
        text: "Minimizar o uso de serviços gerenciados.",
        correct: false,
      },
      {
        id: "d",
        text: "Minimize utilization of Amazon EC2 instances.",
        correct: false,
      },
      {
        id: "e",
        text: "Forçar reinstalações frequentes de aplicativos pelos usuários.",
        correct: false,
      },
    ],
    explanation:
      "Para maximizar a sustentabilidade e minimizar o impacto ambiental, uma empresa deve aplicar os seguintes princípios de design aos workloads na AWS Cloud: maximizar a utilização das instâncias Amazon EC2 e reduzir a necessidade de reinstalações frequentes de aplicativos pelos usuários. Maximizar a utilização das instâncias Amazon EC2 significa otimizar o desempenho e a eficiência dos recursos de computação, evitando desperdícios de energia e dinheiro com instâncias ociosas ou subutilizadas. A empresa pode usar recursos como Amazon EC2 Auto Scaling, Amazon EC2 Spot Instances e AWS Compute Optimizer para ajustar automaticamente o número e o tipo de instâncias com base na demanda, custo e desempenho. Reduzir a necessidade de reinstalações frequentes de aplicativos significa minimizar a quantidade de dados e largura de banda necessários para entregar seus aplicativos aos usuários, evitando downloads e atualizações desnecessários que consomem energia e recursos. A empresa pode usar serviços como Amazon CloudFront, AWS AppStream 2.0 e AWS Amplify para entregar seus aplicativos de forma mais rápida, segura e eficiente aos usuários em todo o mundo.",
  },
  {
    id: 71,
    question:
      "Uma empresa quer mover suas atividades de desenvolvimento e compilação de aplicativos iOS para a AWS. Qual serviço ou recurso da AWS a empresa deve usar para essas atividades?",
    options: [
      { id: "a", text: "Amazon EC2 M1 Mac instances", correct: true },
      { id: "b", text: "AWS App Runner", correct: false },
      { id: "c", text: "AWS Amplify", correct: false },
      { id: "d", text: "AWS CodeCommit", correct: false },
    ],
    explanation:
      "Instâncias Amazon EC2 M1 Mac são o recurso AWS que a empresa deve usar para suas atividades de desenvolvimento e construção de aplicações iOS, pois permitem executar macOS na AWS e acessar um conjunto amplo e crescente de serviços AWS. O AWS CodeCommit oferece um serviço de controle de código-fonte totalmente gerenciado que hospeda repositórios Git seguros. O AWS Amplify fornece um conjunto de ferramentas e serviços para desenvolver aplicações web e móveis full-stack. O AWS App Runner facilita a implantação rápida de aplicações web e APIs conteinerizadas.",
  },
  {
    id: 72,
    question:
      "Uma empresa precisa de um repositório que armazene código-fonte. A empresa precisa de uma maneira de atualizar o software em execução quando o código for alterado. Qual combinação de serviços da AWS atenderá a esses requisitos? (Selecione DUAS.)",
    options: [
      { id: "a", text: "AWS CodeDeploy", correct: true },
      { id: "b", text: "AWS CodeCommit", correct: true },
      { id: "c", text: "Amazon S3", correct: false },
      { id: "d", text: "Amazon DynamoDB", correct: false },
      {
        id: "e",
        text: "Amazon Elastic Container Service (Amazon ECS)",
        correct: false,
      },
    ],
    explanation:
      "AWS CodeCommit é o serviço AWS que fornece um serviço de controle de código-fonte totalmente gerenciado que hospeda repositórios Git seguros, e AWS CodeDeploy é o serviço AWS que automatiza implantações de código para qualquer instância, incluindo instâncias Amazon EC2 e servidores locais. Esses dois serviços podem ser usados juntos para armazenar código-fonte e atualizar o software em execução quando o código é alterado. C está incorreto porque Amazon DynamoDB é um serviço de banco de dados NoSQL totalmente gerenciado, que não está relacionado ao armazenamento de código-fonte ou à atualização de software. D está incorreto porque Amazon S3 é um serviço de armazenamento de objetos que pode ser usado para armazenar código-fonte, mas não fornece recursos de controle de código-fonte ou atualização de software. E está incorreto porque Amazon ECS é um serviço que permite executar, escalar e proteger aplicativos de contêiner Docker, mas não armazena código-fonte nem atualiza software.",
  },
  {
    id: 73,
    question:
      "Quais opções são perspectivas que incluem capacidades fundamentais do AWS Cloud Adoption Framework (AWS CAF)? (Selecione DUAS.)",
    options: [
      { id: "a", text: "Eficiência de desempenho", correct: true },
      { id: "b", text: "Operações", correct: true },
      { id: "c", text: "Confiabilidade", correct: false },
      { id: "d", text: "Sustentabilidade", correct: false },
      { id: "e", text: "Security", correct: false },
    ],
    explanation:
      "As perspectivas que incluem capacidades fundamentais do AWS Cloud Adoption Framework (AWS CAF) são operações e eficiência de desempenho. O AWS CAF organiza o processo de adoção da nuvem em seis áreas de foco: negócios, pessoas, governança, plataforma, segurança e operações. Cada perspectiva é dividida em capacidades que são ainda subdivididas em habilidades e responsabilidades. A perspectiva de operações foca na gestão e monitoramento dos recursos e aplicações na nuvem, bem como na automação e otimização dos processos operacionais. A perspectiva de eficiência de desempenho foca na seleção e configuração dos recursos de nuvem certos para atender aos requisitos de desempenho das aplicações, além da melhoria contínua e inovação das soluções na nuvem.",
  },
  {
    id: 74,
    question:
      "Quais ações são exemplos do esforço de uma empresa para dimensionar corretamente seus recursos AWS para controlar os custos da nuvem? (Selecione DUAS.)",
    options: [
      {
        id: "a",
        text: "Basear a seleção de tipos de instâncias Amazon EC2 em padrões de utilização passada.",
        correct: true,
      },
      {
        id: "b",
        text: "Usar políticas do ciclo de vida do Amazon S3 para mover objetos que os usuários acessam com pouca frequência para camadas de armazenamento de menor custo.",
        correct: true,
      },
      {
        id: "c",
        text: "Substituir instâncias existentes do Amazon EC2 pelo AWS Elastic Beanstalk.",
        correct: false,
      },
      {
        id: "d",
        text: "Mudar de Amazon RDS para Amazon DynamoDB para acomodar conjuntos de dados NoSQL.",
        correct: false,
      },
      {
        id: "e",
        text: "Usar implantações Multi-AZ para o Amazon RDS.",
        correct: false,
      },
    ],
    explanation:
      "Basear a seleção de tipos de instâncias Amazon EC2 em padrões de utilização passada é uma maneira de dimensionar corretamente os recursos AWS e otimizar o desempenho e o custo. Usar políticas de ciclo de vida do Amazon S3 para mover objetos que os usuários acessam com pouca frequência para camadas de armazenamento de menor custo é outra maneira de reduzir os custos de armazenamento e alinhá-los com o valor dos dados para o negócio. Essas ações são recomendadas pelo Pilar de Otimização de Custos da AWS. Trocar do Amazon RDS para o Amazon DynamoDB não necessariamente economiza custos, pois depende do caso de uso e do modelo de dados. Usar implantações Multi-AZ para o Amazon RDS melhora a disponibilidade e durabilidade do banco de dados, mas também aumenta o custo. Substituir instâncias existentes do Amazon EC2 pelo AWS Elastic Beanstalk simplifica a implantação e gestão da aplicação, mas não afeta o custo das instâncias EC2 subjacentes.",
  },
  {
    id: 75,
    question:
      "Qual serviço da AWS está sempre disponível gratuitamente para os usuários?",
    options: [
      {
        id: "a",
        text: "AWS Identity and Access Management (IAM)",
        correct: true,
      },
      { id: "b", text: "Amazon Athena", correct: false },
      { id: "c", text: "Amazon ElastiCache", correct: false },
      { id: "d", text: "AWS Secrets Manager", correct: false },
    ],
    explanation:
      "AWS Identity and Access Management (IAM) é um serviço web que ajuda a controlar de forma segura o acesso aos recursos AWS para seus usuários. IAM está sempre disponível gratuitamente para os usuários.",
  },
  {
    id: 76,
    question:
      "Uma empresa de manufatura tem uma aplicação crítica que é executada em um local remoto que tem uma conexão de internet lenta. A empresa quer migrar a carga de trabalho para a AWS. A aplicação é sensível à latência e interrupções na conectividade. A empresa quer uma solução que possa hospedar essa aplicação com a menor latência possível. Qual serviço ou recurso da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      { id: "a", text: "AWS Outposts", correct: true },
      { id: "b", text: "AWS Local Zones", correct: false },
      { id: "c", text: "Zonas de Disponibilidade", correct: false },
      { id: "d", text: "AWS Wavelength", correct: false },
    ],
    explanation:
      "O AWS Outposts é um serviço que oferece racks de computação e armazenamento totalmente gerenciados e configuráveis, construídos com hardware projetado pela AWS, permitindo que você execute suas cargas de trabalho localmente e se conecte de forma integrada aos serviços AWS na nuvem. O AWS Outposts é ideal para cargas de trabalho que exigem baixa latência, processamento local de dados ou armazenamento local de dados. Com o AWS Outposts, você pode usar as mesmas APIs, ferramentas e infraestrutura da AWS tanto localmente quanto na nuvem, proporcionando uma experiência híbrida verdadeiramente consistente.",
  },
  {
    id: 77,
    question:
      "Qual princípio de design da AWS Cloud uma empresa segue ao usar o AWS CloudTrail?",
    options: [
      { id: "a", text: "Garantir a rastreabilidade.", correct: true },
      { id: "b", text: "Perform operations as code.", correct: false },
      { id: "c", text: "Medir a eficiência.", correct: false },
      { id: "d", text: "Recuperar automaticamente.", correct: false },
    ],
    explanation:
      "A empresa segue o princípio de design da AWS Cloud de garantir a rastreabilidade usando o AWS CloudTrail. O AWS CloudTrail é um serviço que registra as chamadas de API e eventos feitos pelo ou em nome da conta AWS. A empresa pode usar o AWS CloudTrail para monitorar, auditar e analisar a atividade e as mudanças em seus recursos e aplicativos AWS. O AWS CloudTrail ajuda a empresa a alcançar conformidade, segurança, governança e eficiência operacional.",
  },
  {
    id: 78,
    question:
      "Uma grande empresa tem vários departamentos. Cada departamento tem sua própria conta AWS. Cada departamento comprou instâncias reservadas Amazon EC2. Alguns departamentos não usam todas as instâncias reservadas que compraram, e outros departamentos precisam de mais instâncias reservadas do que compraram. A empresa precisa gerenciar as contas AWS de todos os departamentos para que os departamentos possam compartilhar as instâncias reservadas. Qual serviço ou ferramenta AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      { id: "a", text: "AWS Organizations", correct: true },
      { id: "b", text: "AWS Trusted Advisor", correct: false },
      { id: "c", text: "AWS Systems Manager", correct: false },
      { id: "d", text: "Cost Explorer", correct: false },
    ],
    explanation:
      "O AWS Organizations é um serviço que permite consolidar várias contas AWS em uma organização que você cria e gerencia centralmente. Com o AWS Organizations, você pode aplicar políticas de controle de serviço (SCPs) em várias contas AWS para restringir os serviços e ações que usuários e funções podem acessar. Também é possível usar o AWS Organizations para habilitar recursos como faturamento consolidado, regras e pacotes de conformidade do AWS Config e AWS CloudFormation StackSets em várias contas. Um dos benefícios de usar o AWS Organizations é que você pode compartilhar suas Reserved Instances (RIs) com todas as contas da organização, aproveitando os benefícios de faturamento das RIs sem precisar especificar qual conta as usará.",
  },
  {
    id: 79,
    question:
      "Quais serviços da AWS uma empresa pode usar para hospedar e executar um banco de dados MySQL? (Selecione DUAS.)",
    options: [
      { id: "a", text: "Amazon EC2", correct: true },
      { id: "b", text: "Amazon RDS", correct: true },
      { id: "c", text: "Amazon DynamoDB", correct: false },
      { id: "d", text: "Amazon S3", correct: false },
      { id: "e", text: "Amazon MQ", correct: false },
    ],
    explanation:
      "Amazon RDS e Amazon EC2 são dois serviços AWS que você pode usar para hospedar e executar um banco de dados MySQL. O Amazon RDS facilita a configuração, operação e escalabilidade de um banco de dados relacional na nuvem, gerenciando tarefas comuns como backups, patches, escalonamento e replicação. O Amazon EC2 fornece capacidade de computação redimensionável na nuvem, permitindo que você instale o software MySQL em um servidor virtual e tenha controle total sobre a configuração do banco de dados.",
  },
  {
    id: 80,
    question:
      "Qual serviço ou recurso da AWS pode ser usado para controlar o tráfego de entrada e saída em uma instância Amazon EC2?",
    options: [
      { id: "a", text: "Grupos de Segurança", correct: true },
      {
        id: "b",
        text: "AWS Identity and Access Management (1AM)",
        correct: false,
      },
      { id: "c", text: "Internet gateways", correct: false },
      { id: "d", text: "ACLs de rede", correct: false },
    ],
    explanation:
      "Grupos de segurança são o serviço ou recurso AWS que pode ser usado para controlar o tráfego de entrada e saída em uma instância Amazon EC2. Grupos de segurança atuam como um firewall virtual para a instância EC2, permitindo que os usuários especifiquem quais protocolos, portas e endereços IP de origem ou destino são permitidos ou negados. A está incorreto porque gateways de internet permitem comunicação entre instâncias em uma VPC e a internet. B está incorreto porque AWS Identity and Access Management (IAM) gerencia o acesso aos serviços e recursos AWS de forma segura. C está incorreto porque listas de controle de acesso de rede (network ACLs) fornecem uma camada opcional de segurança para a VPC, agindo como um firewall para controlar o tráfego dentro e fora de uma ou mais sub-redes.",
  },
  {
    id: 81,
    question:
      "Uma empresa está executando uma aplicação que está hospedada em instâncias Amazon EC2. O uso das instâncias EC2 é maior durante o dia do que durante a noite. A empresa quer otimizar o número de instâncias EC2 com base nesse padrão de uso. Qual serviço ou opção de compra de instância da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      { id: "a", text: "AWS Auto Scaling", correct: true },
      { id: "b", text: "Spot Instances", correct: false },
      { id: "c", text: "Reserved Instances", correct: false },
      { id: "d", text: "AWS CloudFormation", correct: false },
    ],
    explanation:
      "O AWS Auto Scaling é o serviço AWS que permite otimizar o número de instâncias EC2 com base no padrão de uso, ajustando automaticamente a capacidade para manter um desempenho estável e previsível ao menor custo possível. Instâncias Spot reduzem o custo das instâncias EC2 ao licitar capacidade EC2 não utilizada, mas não são adequadas para aplicações que requerem desempenho constante e confiável. Instâncias Reservadas reduzem o custo das instâncias EC2 ao comprometer-se com um determinado uso por um período de tempo, mas não são flexíveis para ajustar ao padrão de uso. O AWS CloudFormation automatiza a criação e gestão de recursos AWS, mas não otimiza o número de instâncias EC2 com base no padrão de uso.",
  },
  {
    id: 82,
    question:
      "Qual é a responsabilidade da AWS sob o modelo de responsabilidade compartilhada da AWS?",
    options: [
      {
        id: "a",
        text: "Garantir a segurança da rede interna nos data centers da AWS.",
        correct: true,
      },
      {
        id: "b",
        text: "Configurar as regras do grupo de segurança que determinam quais portas estão abertas em uma instância Amazon EC2 Linux.",
        correct: false,
      },
      {
        id: "c",
        text: "Ativar a criptografia no lado do servidor para buckets do Amazon S3.",
        correct: false,
      },
      {
        id: "d",
        text: "Aplicar os patches de segurança mais recentes no sistema operacional convidado no Amazon EC2.",
        correct: false,
      },
    ],
    explanation:
      "No modelo de responsabilidade compartilhada da AWS, a AWS é responsável por garantir a segurança da rede interna nos data centers da AWS, bem como a segurança física do hardware e das instalações que executam os serviços AWS. Os clientes da AWS são responsáveis por configurar as regras do grupo de segurança, aplicar patches no sistema operacional convidado e ativar a criptografia no lado do servidor para buckets do S3.",
  },
  {
    id: 83,
    question:
      "Uma empresa deve armazenar gravações de chamadas por 6 anos. O sistema de armazenamento deve ser altamente durável e econômico. Qual serviço da AWS atende a esses requisitos?",
    options: [
      { id: "a", text: "Amazon S3", correct: true },
      { id: "b", text: "Amazon Kinesis", correct: false },
      { id: "c", text: "AWS Storage Gateway", correct: false },
      { id: "d", text: "AWS Snowball", correct: false },
    ],
    explanation:
      "O Amazon S3 é um serviço que fornece armazenamento de objetos altamente durável e econômico, ideal para backup, arquivamento, análise de big data, recuperação de desastres e aplicativos na nuvem. Oferece várias classes de armazenamento com diferentes características de preço e desempenho.",
  },
  {
    id: 84,
    question:
      "Qual serviço ou ferramenta da AWS fornece acesso sob demanda a relatórios de segurança e conformidade da AWS e acordos online da AWS?",
    options: [
      { id: "a", text: "AWS Artifact", correct: true },
      { id: "b", text: "Console de Faturamento da AWS", correct: false },
      { id: "c", text: "Amazon Inspector", correct: false },
      { id: "d", text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "O AWS Artifact é o serviço ou ferramenta AWS que fornece acesso sob demanda a relatórios de segurança e conformidade da AWS e acordos online da AWS. O AWS Trusted Advisor fornece orientação em tempo real para ajudar os usuários a provisionar seus recursos seguindo as melhores práticas da AWS. O Amazon Inspector ajuda a melhorar a segurança e conformidade das aplicações. O console de faturamento da AWS ajuda a gerenciar os custos e o uso da AWS.",
  },
  {
    id: 85,
    question:
      "Uma empresa tem um site hospedado na AWS localizado atrás de um Application Load Balancer. A empresa quer proteger o site contra injeção de SQL ou scripting entre sites. Qual serviço da AWS a empresa deve usar?",
    options: [
      { id: "a", text: "AWS WAF", correct: true },
      { id: "b", text: "AWS Trusted Advisor", correct: false },
      { id: "c", text: "Amazon Inspector", correct: false },
      { id: "d", text: "Amazon GuardDuty", correct: false },
    ],
    explanation:
      "A empresa deve usar o AWS WAF para proteger o site contra injeção de SQL ou scripting entre sites. O AWS WAF é um firewall de aplicação web que ajuda a proteger aplicativos web contra exploits comuns que podem afetar a disponibilidade, comprometer a segurança ou consumir recursos excessivos.",
  },
  {
    id: 86,
    question:
      "Um usuário descobriu que uma instância Amazon EC2 está sem um volume de dados Amazon Elastic Block Store (Amazon EBS). O usuário quer determinar quando o volume EBS foi removido. Qual serviço da AWS fornecerá essa informação?",
    options: [
      { id: "a", text: "AWS Config", correct: true },
      { id: "b", text: "Amazon Timestream", correct: false },
      { id: "c", text: "AWS Trusted Advisor", correct: false },
      { id: "d", text: "Amazon QuickSight", correct: false },
    ],
    explanation:
      "O AWS Config é um serviço que permite avaliar, auditar e avaliar as configurações dos recursos AWS. Ele monitora e registra continuamente as configurações dos recursos AWS e permite automatizar a avaliação das configurações registradas em relação às configurações desejadas. Pode ajudar a determinar quando um volume EBS foi removido de uma instância EC2 fornecendo uma linha do tempo das mudanças de configuração.",
  },
  {
    id: 87,
    question:
      "Uma empresa fornece uma aplicação de software como serviço (SaaS). A empresa tem um novo cliente baseado em um país diferente. Os dados do novo cliente precisam ser hospedados nesse país. Qual serviço ou componente de infraestrutura da AWS a empresa deve usar para atender a esse requisito?",
    options: [
      { id: "a", text: "Regiões da AWS", correct: true },
      { id: "b", text: "AWS Shield", correct: false },
      { id: "c", text: "Amazon S3 Object Lock", correct: false },
      { id: "d", text: "Grupos de Colocação", correct: false },
    ],
    explanation:
      "As Regiões AWS são áreas geográficas onde a AWS possui clusters de data centers. Ao hospedar os dados do cliente em uma Região AWS específica, a empresa pode atender ao requisito de hospedar os dados no país do cliente.",
  },
  {
    id: 88,
    question:
      "Uma empresa quer criar um chatbot e integrar o chatbot com sua aplicação web atual. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      { id: "a", text: "Amazon Lex", correct: true },
      { id: "b", text: "Amazon Textract", correct: false },
      { id: "c", text: "Amazon Polly", correct: false },
      { id: "d", text: "Amazon Kendra", correct: false },
    ],
    explanation:
      "O serviço AWS que atende aos requisitos da empresa que quer criar um chatbot e integrá-lo à sua aplicação web atual é o Amazon Lex. Este serviço ajuda os clientes a construírem interfaces de conversação usando voz e texto, permitindo criar chatbots que entendem a linguagem natural e respondem às solicitações dos usuários. Outros serviços, como Amazon Kendra, Amazon Textract e Amazon Polly, não são adequados para esta finalidade.",
  },
  {
    id: 89,
    question:
      "Uma empresa quer que sua carga de trabalho tenha um desempenho consistente e correto. Qual benefício da computação em nuvem da AWS esse objetivo representa?",
    options: [
      { id: "a", text: "Confiabilidade", correct: true },
      { id: "b", text: "Elasticity", correct: false },
      { id: "c", text: "Segurança", correct: false },
      { id: "d", text: "Preço de pagamento conforme o uso", correct: false },
    ],
    explanation:
      "Confiabilidade é o benefício da computação em nuvem AWS que garante que a carga de trabalho funcione de maneira consistente e correta. Confiabilidade significa a capacidade de um sistema de se recuperar de interrupções de infraestrutura ou serviço, adquirir dinamicamente recursos de computação para atender à demanda e mitigar interrupções como configurações incorretas ou problemas transitórios de rede.",
  },
  {
    id: 90,
    question:
      "Uma empresa oferece um serviço de comércio eletrônico baseado na web que opera em duas Zonas de Disponibilidade dentro de uma única Região AWS. O serviço web distribui conteúdo armazenado na classe de armazenamento Amazon S3 Standard. A empresa deseja melhorar o desempenho do serviço web globalmente. O que a empresa deve fazer para atender a esse requisito?",
    options: [
      {
        id: "a",
        text: "Implantar uma distribuição do Amazon CloudFront para armazenar em cache o conteúdo do servidor web em locais de borda.",
        correct: true,
      },
      {
        id: "b",
        text: "Mudar a classe de armazenamento do S3 para S3 Intelligent-Tiering.",
        correct: false,
      },
      {
        id: "c",
        text: "Migrar os servidores de ecommerce do site para o Amazon EC2 com rede aprimorada.",
        correct: false,
      },
      {
        id: "d",
        text: "Usar o Amazon API Gateway para o serviço web.",
        correct: false,
      },
    ],
    explanation:
      "Amazon CloudFront é um serviço rápido de rede de entrega de conteúdo (CDN) que entrega dados, vídeos, aplicativos e APIs aos clientes globalmente com baixa latência e altas velocidades de transferência. CloudFront pode armazenar em cache o conteúdo do servidor web em locais de borda, que estão mais próximos dos usuários finais, para melhorar o desempenho global do serviço web.",
  },
  {
    id: 91,
    question:
      "Uma empresa tem uma aplicação que é executada periodicamente em um ambiente on-premises. A aplicação é executada por algumas horas na maioria dos dias, mas é executada por 8 horas por dia durante uma semana no final de cada mês. Qual serviço ou recurso da AWS deve ser usado para hospedar a aplicação na AWS Cloud?",
    options: [
      { id: "a", text: "Amazon EC2 On-Demand Instances", correct: true },
      { id: "b", text: "AWS Wavelength", correct: false },
      {
        id: "c",
        text: "Amazon EC2 Standard Reserved Instances",
        correct: false,
      },
      { id: "d", text: "Application Load Balancer", correct: false },
    ],
    explanation:
      "A opção de instância EC2 mais econômica para a empresa que precisa hospedar uma aplicação com workloads imprevisíveis ou intermitentes são as On-Demand Instances. Esta opção é adequada para aplicações que têm padrões de uso variáveis e permite pagar por segundo, sem compromissos de longo prazo ou pagamentos iniciais.",
  },
  {
    id: 92,
    question:
      "Qual serviço da AWS é projetado para ajudar os usuários a criar interfaces de conversação em aplicativos usando voz e texto?",
    options: [
      { id: "a", text: "Amazon Lex", correct: true },
      { id: "b", text: "Amazon Transcribe", correct: false },
      { id: "c", text: "Amazon Timestream", correct: false },
      { id: "d", text: "Amazon Comprehend", correct: false },
    ],
    explanation:
      "O Amazon Lex é o serviço AWS que ajuda a criar interfaces conversacionais em aplicações usando voz e texto. O Amazon Transcribe converte fala em texto, o Amazon Comprehend analisa texto usando processamento de linguagem natural, e o Amazon Timestream coleta, armazena e processa dados de séries temporais.",
  },
  {
    id: 93,
    question:
      "Quais tarefas são responsabilidade da AWS de acordo com o modelo de responsabilidade compartilhada da AWS? (Selecione DOIS.)",
    options: [
      {
        id: "a",
        text: "Assegurar o acesso físico às instalações da AWS.",
        correct: true,
      },
      {
        id: "b",
        text: "Realizar patches e manutenção da infraestrutura.",
        correct: true,
      },
      {
        id: "c",
        text: "Configurar o AWS Identity and Access Management (IAM).",
        correct: false,
      },
      {
        id: "d",
        text: "Configure security groups on Amazon EC2 instances.",
        correct: false,
      },
      {
        id: "e",
        text: "Aplicar patches em aplicativos que rodam em instâncias do Amazon EC2.",
        correct: false,
      },
    ],
    explanation:
      "As tarefas que são responsabilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS, são garantir o acesso seguro às instalações físicas da AWS e realizar patches e manutenção da infraestrutura. O modelo de responsabilidade compartilhada da AWS define a divisão de responsabilidades entre a AWS e o cliente para segurança e conformidade. A AWS é responsável pela segurança da nuvem, incluindo a segurança física do hardware, software, rede e instalações que executam os serviços AWS. O cliente é responsável pela segurança na nuvem, incluindo a configuração e gerenciamento dos recursos e aplicativos AWS que usa.",
  },
  {
    id: 94,
    question:
      "Uma empresa quer migrar sua aplicação para a AWS. A empresa deseja substituir despesas antecipadas por pagamento variável baseado no uso. O que a empresa deve fazer para atender a esses requisitos?",
    options: [
      { id: "a", text: "Usar preços pay-as-you-go.", correct: true },
      { id: "b", text: "Pague menos usando mais.", correct: false },
      { id: "c", text: "Purchase Reserved Instances.", correct: false },
      {
        id: "d",
        text: "Dimensionar corretamente as instâncias.",
        correct: false,
      },
    ],
    explanation:
      "A precificação pay-as-you-go é um dos principais benefícios da AWS. Com a precificação pay-as-you-go, você paga apenas pelo que usa, quando usa. Não há contratos de longo prazo, taxas de rescisão ou licenças complexas. Você substitui despesas iniciais por custos variáveis mais baixos e paga apenas pelos recursos consumidos.",
  },
  {
    id: 95,
    question:
      "Uma empresa quer orientação para otimizar o custo e o desempenho de seu ambiente AWS atual. Qual serviço ou ferramenta da AWS a empresa deve usar para identificar áreas de otimização?",
    options: [
      { id: "a", text: "AWS Trusted Advisor", correct: true },
      { id: "b", text: "AWS Budgets", correct: false },
      { id: "c", text: "AWS Organizations", correct: false },
      { id: "d", text: "Amazon QuickSight", correct: false },
    ],
    explanation:
      "O AWS Trusted Advisor é o serviço que a empresa deve usar para identificar áreas para otimização. Este serviço fornece orientação em tempo real para ajudar a provisionar recursos seguindo as melhores práticas da AWS, otimizando a infraestrutura AWS, aumentando a segurança e o desempenho, reduzindo os custos e monitorando os limites de serviço.",
  },
  {
    id: 96,
    question:
      "Uma empresa precisa hospedar um servidor web em instâncias Amazon EC2 por pelo menos 1 ano. O servidor web não pode tolerar interrupções. Qual opção de compra de instância EC2 atenderá a esses requisitos de forma mais econômica?",
    options: [
      { id: "a", text: "Reserved Instances parciais", correct: true },
      { id: "b", text: "Instâncias On-Demand", correct: false },
      { id: "c", text: "Instâncias Spot", correct: false },
      {
        id: "d",
        text: "Instâncias Reservadas sem Pagamento Antecipado",
        correct: false,
      },
    ],
    explanation:
      "A opção de compra de instância EC2 mais econômica para a empresa que precisa hospedar um servidor web em instâncias Amazon EC2 por pelo menos 1 ano e não pode tolerar interrupções são as Reserved Instances parciais. As Reserved Instances oferecem descontos significativos em comparação com as instâncias On-Demand em troca de um compromisso de uso de capacidade de computação por um período fixo de tempo (1 ou 3 anos).",
  },
  {
    id: 97,
    question:
      "Uma empresa quer migrar para a AWS Cloud. A empresa precisa da capacidade de adquirir recursos quando necessário. A empresa também precisa da capacidade de liberar esses recursos quando não forem mais necessários. Qual conceito de arquitetura da AWS Cloud atende a esses requisitos?",
    options: [
      { id: "a", text: "Elasticidade", correct: true },
      { id: "b", text: "Availability", correct: false },
      { id: "c", text: "Confiabilidade", correct: false },
      { id: "d", text: "Durabilidade", correct: false },
    ],
    explanation:
      "O conceito de arquitetura da AWS Cloud que atende aos requisitos da empresa que deseja migrar para a AWS Cloud e precisa da capacidade de adquirir e liberar recursos conforme necessário é a elasticidade. Elasticidade significa que os clientes da AWS podem provisionar e dimensionar rapidamente os recursos da AWS conforme a demanda muda, sem custos iniciais ou compromissos de longo prazo.",
  },
  {
    id: 98,
    question:
      "Uma empresa está executando cargas de trabalho para vários departamentos dentro de uma única VPC. A empresa precisa ser capaz de cobrar cada departamento pelo uso de seus recursos. Qual ação a empresa deve realizar para alcançar esse objetivo com o MENOR esforço operacional?",
    options: [
      {
        id: "a",
        text: "Adicionar uma tag de departamento a cada recurso e configurar tags de alocação de custos.",
        correct: true,
      },
      {
        id: "b",
        text: "Usar AWS Organizations para obter um relatório de faturamento para cada departamento.",
        correct: false,
      },
      {
        id: "c",
        text: "Mover cada recurso de departamento para sua própria VPC.",
        correct: false,
      },
      {
        id: "d",
        text: "Mover cada recurso do departamento para sua própria conta AWS.",
        correct: false,
      },
    ],
    explanation:
      "Adicionar uma tag de departamento a cada recurso e configurar tags de alocação de custos é uma ação que pode ajudar a atingir o objetivo de faturar cada departamento pelo uso de recursos com a menor sobrecarga operacional.",
  },
  {
    id: 99,
    question:
      "Qual é uma característica das Reserved Instances (RIs) Convertíveis?",
    options: [
      {
        id: "a",
        text: "Os usuários podem trocar RIs Convertíveis por outras RIs Convertíveis de uma família de instância diferente.",
        correct: true,
      },
      {
        id: "b",
        text: "Os usuários podem encurtar o prazo de suas RIs Convertíveis ao mesclá-las com outras RIs Convertíveis.",
        correct: false,
      },
      {
        id: "c",
        text: "Os usuários podem vender e comprar RIs Convertíveis no AWS Marketplace.",
        correct: false,
      },
      {
        id: "d",
        text: "Users can exchange Convertible RIs for other Convertible RIs in different AWS Regions.",
        correct: false,
      },
    ],
    explanation:
      "Reservas Convertíveis (RIs) são um tipo de Instância Reservada que permite mudar os atributos da RI desde que a troca resulte na criação de Instâncias Reservadas de valor igual ou maior. Você pode trocar RIs Convertíveis por outras RIs Convertíveis de uma família de instâncias, tamanho, plataforma, tenancy ou escopo (Região ou Zona de Disponibilidade) diferentes.",
  },
  {
    id: 100,
    question:
      "Uma empresa desenvolveu uma aplicação distribuída que se recupera de interrupções de forma graciosa. A aplicação processa periodicamente grandes volumes de dados usando várias instâncias Amazon EC2. A aplicação às vezes fica ociosa por meses. Qual opção de compra de instância EC2 é MAIS econômica para esse caso de uso?",
    options: [
      { id: "a", text: "Spot Instances", correct: true },
      { id: "b", text: "Reserved Instances", correct: false },
      { id: "c", text: "Instâncias Sob Demanda", correct: false },
      { id: "d", text: "Instâncias Dedicadas", correct: false },
    ],
    explanation:
      "As Spot Instances são a opção de compra mais econômica para o uso descrito na questão, pois utilizam capacidade EC2 ociosa disponível com descontos de até 90% em relação ao preço das instâncias On-Demand.",
  },
  {
    id: 101,
    question:
      "Quais declarações explicam o valor comercial da migração para a nuvem AWS? (Selecione DUAS.)",
    options: [
      {
        id: "a",
        text: "Empresas que migram para a AWS Cloud reduzem custos de TI relacionados à infraestrutura, liberando orçamento para reinvestimento em outras áreas.",
        correct: true,
      },
      {
        id: "b",
        text: "A disponibilidade e segurança da AWS permitem que os clientes melhorem seus SLAs enquanto reduzem riscos e tempos de inatividade não planejados",
        correct: true,
      },
      {
        id: "c",
        text: "Empresas que migram para a AWS Cloud eliminam a necessidade de planejar para alta disponibilidade e recuperação de desastres.",
        correct: false,
      },
      {
        id: "d",
        text: "Aplicativos são modernizados porque a migração para a AWS Cloud exige que as empresas re-arquitetem e reescrevam todos os aplicativos empresariais.",
        correct: false,
      },
      {
        id: "e",
        text: "A migração de aplicações empresariais para a AWS Cloud torna essas aplicações automaticamente disponíveis em dispositivos móveis.",
        correct: false,
      },
    ],
    explanation:
      "A disponibilidade e segurança da AWS permitem que os clientes melhorem seus SLAs enquanto reduzem riscos e tempos de inatividade não planejados, e a AWS reduz os custos de TI relacionados à infraestrutura, permitindo que os clientes reinvistam em outras áreas. Migrar para a AWS Cloud não torna automaticamente as aplicações disponíveis em dispositivos móveis, pois depende do design e compatibilidade da aplicação. As empresas ainda precisam planejar para alta disponibilidade e recuperação de desastres. Migrar para a AWS Cloud não requer re-arquitetura e reescrita de todas as aplicações empresariais, pois a AWS oferece diferentes estratégias de migração dependendo da complexidade da aplicação e objetivos de negócios.",
  },
  {
    id: 102,
    question:
      "Uma empresa quer mover sua aplicação de data warehouse para a AWS Cloud. A empresa quer executar e dimensionar seus serviços de análise sem precisar provisionar e gerenciar clusters de data warehouse. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      { id: "a", text: "Amazon Redshift Serverless", correct: true },
      { id: "b", text: "Amazon S3", correct: false },
      {
        id: "c",
        text: "Armazém de dados provisionado do Amazon Redshift",
        correct: false,
      },
      { id: "d", text: "Amazon Athena", correct: false },
    ],
    explanation:
      "O Amazon Redshift Serverless é o serviço AWS que atenderá aos requisitos da empresa que deseja mover seu aplicativo de data warehouse para a AWS Cloud e executar e escalar seus serviços de análise sem precisar provisionar e gerenciar clusters de data warehouse. O Amazon Redshift Serverless escala automaticamente os recursos de computação e armazenamento com base na demanda do workload, e os clientes pagam apenas pelos recursos que consomem.",
  },
  {
    id: 103,
    question:
      "Uma empresa quer usar instâncias Amazon EC2 para uma carga de trabalho de produção estável que será executada por 1 ano. Qual opção de compra de instância atende a esses requisitos de forma mais econômica?",
    options: [
      { id: "a", text: "Reserved Instances", correct: true },
      { id: "b", text: "Dedicated Hosts", correct: false },
      { id: "c", text: "Instâncias Spot", correct: false },
      { id: "d", text: "Instâncias On-Demand", correct: false },
    ],
    explanation:
      "As Instâncias Reservadas são a opção de compra de instâncias que oferece a maneira mais econômica de usar instâncias Amazon EC2 para uma carga de trabalho de produção estável que será executada por 1 ano, pois fornecem descontos significativos em comparação com as Instâncias Sob Demanda em troca de um compromisso de uso por um período de tempo. As Instâncias Dedicadas permitem o uso de servidores físicos dedicados, mas são mais caras e menos flexíveis. As Instâncias Sob Demanda são pagas por hora ou segundo sem compromissos de longo prazo, adequadas para cargas de trabalho de curto prazo e imprevisíveis. As Instâncias Spot permitem licitar capacidade EC2 não utilizada, adequadas para cargas de trabalho flexíveis e tolerantes a falhas que podem tolerar interrupções.",
  },
  {
    id: 104,
    question:
      "Quais serviços da AWS permitem que os usuários monitorem e mantenham registros das atividades da conta, incluindo governança, conformidade e auditoria? (Selecione DUAS.)",
    options: [
      { id: "a", text: "AWS CloudTrail", correct: true },
      { id: "b", text: "Amazon CloudWatch", correct: true },
      { id: "c", text: "Amazon GuardDuty", correct: false },
      { id: "d", text: "AWS Shield", correct: false },
      { id: "e", text: "AWS WAF", correct: false },
    ],
    explanation:
      "Amazon CloudWatch e AWS CloudTrail são os serviços AWS que permitem monitorar e reter registros de atividades da conta, incluindo governança, conformidade e auditoria. O Amazon CloudWatch coleta e rastreia métricas, monitora arquivos de log e define alarmes. O AWS CloudTrail permite governança, conformidade, auditoria operacional e auditoria de risco da conta AWS. Amazon GuardDuty, AWS Shield e AWS WAF fornecem segurança e proteção para recursos AWS, mas não monitoram e retêm registros de atividades da conta.",
  },
  {
    id: 105,
    question:
      "Uma empresa quer executar suas cargas de trabalho de produção na AWS. A empresa precisa de um serviço de concierge, um gerente técnico de contas (TAM) designado pela AWS e suporte técnico disponível 24 horas por dia, 7 dias por semana. Qual plano de suporte da AWS atenderá a esses requisitos?",
    options: [
      { id: "a", text: "AWS Enterprise Support", correct: true },
      { id: "b", text: "AWS Business Support", correct: false },
      { id: "c", text: "AWS Basic Support", correct: false },
      { id: "d", text: "AWS Developer Support", correct: false },
    ],
    explanation:
      "AWS Enterprise Support é o plano de suporte AWS que fornece serviço de concierge, um gerente técnico de contas (TAM) designado e suporte técnico disponível 24 horas por dia, 7 dias por semana. Este plano é projetado para clientes que executam cargas de trabalho críticas na AWS e precisam do mais alto nível de suporte. A está incorreto porque AWS Basic Support fornece suporte ao cliente e para questões de faturamento e conta, aumentos de limites de serviço e suporte técnico para um conjunto limitado de serviços AWS. C está incorreto porque AWS Business Support fornece suporte ao cliente e para questões de faturamento e conta, aumentos de limites de serviço e suporte técnico para todos os serviços AWS, além de acesso ao AWS Trusted Advisor e à API de suporte AWS. D está incorreto porque AWS Developer Support fornece suporte ao cliente e para questões de faturamento e conta, aumentos de limites de serviço e suporte técnico para todos os serviços AWS, além de acesso ao AWS Trusted Advisor.",
  },
  {
    id: 106,
    question:
      "Qual serviço da AWS fornece a maneira MAIS SIMPLES para a empresa estabelecer um site na AWS?",
    options: [
      { id: "a", text: "Amazon Lightsail", correct: true },
      { id: "b", text: "AWS Elastic Beanstalk", correct: false },
      {
        id: "c",
        text: "Amazon Elastic File System (Amazon EFS)",
        correct: false,
      },
      { id: "d", text: "AWS Lambda", correct: false },
    ],
    explanation:
      "Amazon Lightsail é uma plataforma em nuvem fácil de usar que oferece tudo o necessário para construir um aplicativo ou website, além de um plano mensal econômico. Lightsail é a maneira mais simples para a empresa estabelecer um website na AWS.",
  },
  {
    id: 107,
    question:
      "Uma empresa precisa hospedar uma aplicação altamente disponível na AWS Cloud. A aplicação é executada infrequentemente por curtos períodos de tempo. Qual serviço da AWS atenderá a esses requisitos com o MENOR esforço operacional?",
    options: [
      { id: "a", text: "AWS Lambda", correct: true },
      { id: "b", text: "AWS Fargate", correct: false },
      { id: "c", text: "Amazon EC2", correct: false },
      { id: "d", text: "Amazon Aurora", correct: false },
    ],
    explanation:
      "O serviço AWS que atende aos requisitos de hospedar uma aplicação altamente disponível que roda infrequentemente por curtos períodos de tempo com a menor sobrecarga operacional é o AWS Lambda. O AWS Lambda é um serviço de computação serverless que permite aos clientes executar código sem provisionar ou gerenciar servidores, escalando automaticamente os recursos de computação com base na demanda e cobrando apenas pelo tempo de computação consumido. Amazon EC2, AWS Fargate e Amazon Aurora não são os melhores serviços para esta finalidade específica.",
  },
  {
    id: 108,
    question:
      "Um usuário está movendo uma carga de trabalho de um data center local para uma arquitetura distribuída entre o data center local e a nuvem AWS. Que tipo de migração é essa?",
    options: [
      { id: "a", text: "De local para híbrido", correct: true },
      { id: "b", text: "Nativo da nuvem para híbrido", correct: false },
      { id: "c", text: "Do local para nativo da nuvem", correct: false },
      { id: "d", text: "Híbrido para nuvem nativo", correct: false },
    ],
    explanation:
      "Mover uma carga de trabalho de um data center local para uma arquitetura distribuída entre o data center local e a AWS Cloud é um exemplo de migração híbrida. A nuvem híbrida é um ambiente de computação em nuvem que usa uma mistura de serviços locais, nuvem privada e nuvem pública com orquestração entre as plataformas. A está incorreto porque a migração de local para a nuvem nativa é o processo de mover uma carga de trabalho de um data center local para uma arquitetura totalmente hospedada e gerenciada na AWS Cloud. B está incorreto porque a migração de híbrida para a nuvem nativa é o processo de mover uma carga de trabalho de uma arquitetura distribuída entre o data center local e a AWS Cloud para uma arquitetura totalmente hospedada e gerenciada na AWS Cloud. D está incorreto porque a migração de nuvem nativa para híbrida é o processo de mover uma carga de trabalho de uma arquitetura totalmente hospedada e gerenciada na AWS Cloud para uma arquitetura distribuída entre o data center local e a AWS Cloud.",
  },
  {
    id: 109,
    question:
      "Uma empresa gerencia máquinas de fábrica em tempo real. A empresa quer usar a tecnologia da AWS para implantar suas aplicações de monitoramento o mais próximo possível das máquinas de fábrica. Qual solução da AWS atenderá a esses requisitos com a MENOR latência?",
    options: [
      { id: "a", text: "AWS Outposts", correct: true },
      { id: "b", text: "AWS Batch", correct: false },
      { id: "c", text: "AWS App Runner", correct: false },
      { id: "d", text: "Amazon EC2", correct: false },
    ],
    explanation:
      "AWS Outposts é um serviço totalmente gerenciado que estende a infraestrutura, serviços, APIs e ferramentas da AWS para praticamente qualquer data center, espaço de co-location ou instalação local, proporcionando uma experiência híbrida verdadeiramente consistente.",
  },
  {
    id: 110,
    question:
      "Uma empresa de comércio eletrônico quer projetar uma aplicação altamente disponível que será hospedada em várias instâncias Amazon EC2. Como a empresa deve implantar as instâncias EC2 para atender a esses requisitos?",
    options: [
      { id: "a", text: "Em várias Zonas de Disponibilidade", correct: true },
      { id: "b", text: "Em várias contas da AWS", correct: false },
      { id: "c", text: "Através de múltiplos VPCs", correct: false },
      { id: "d", text: "Em várias localizações de borda", correct: false },
    ],
    explanation:
      "A empresa deve implantar as instâncias EC2 em várias Zonas de Disponibilidade para projetar um aplicativo altamente disponível. Zonas de Disponibilidade são locais isolados dentro de uma Região AWS que são projetados para serem tolerantes a falhas e operarem independentemente umas das outras. Ao implantar as instâncias EC2 em várias Zonas de Disponibilidade, a empresa garante que seu aplicativo possa resistir à falha de uma Zona de Disponibilidade inteira e continuar a operar com mínima interrupção.",
  },
  {
    id: 111,
    question:
      "Qual perspectiva do AWS Cloud Adoption Framework (AWS CAF) conecta tecnologia e negócios?",
    options: [
      { id: "a", text: "Governança", correct: true },
      { id: "b", text: "Operações", correct: false },
      { id: "c", text: "Segurança", correct: false },
      { id: "d", text: "People", correct: false },
    ],
    explanation:
      "A perspectiva de governança do AWS Cloud Adoption Framework (AWS CAF) conecta tecnologia e negócios. Esta perspectiva foca no alinhamento da estratégia e processos de TI com a estratégia e objetivos de negócios, bem como na gestão do orçamento de TI, riscos e conformidade. As capacidades da perspectiva de governança são gerenciamento de portfólio, gerenciamento de desempenho de negócios e governança de TI. As outras perspectivas do AWS CAF (operações, pessoas e segurança) não conectam diretamente tecnologia e negócios da mesma forma.",
  },
  {
    id: 112,
    question:
      "Uma empresa está planejando uma migração para a AWS Cloud e quer examinar os custos associados a diferentes cargas de trabalho. Qual ferramenta da AWS atenderá a esses requisitos?",
    options: [
      { id: "a", text: "AWS Pricing Calculator", correct: true },
      { id: "b", text: "AWS Budgets", correct: false },
      { id: "c", text: "Relatório de Custos e Uso da AWS", correct: false },
      { id: "d", text: "AWS Cost Explorer", correct: false },
    ],
    explanation:
      "A ferramenta AWS que atende aos requisitos da empresa que está planejando uma migração para a AWS Cloud e quer examinar os custos associados a diferentes workloads é o AWS Pricing Calculator. Esta ferramenta ajuda os clientes a estimarem os custos de usar serviços AWS com base em seus requisitos e preferências, comparando os custos de diferentes serviços e configurações AWS, e fornecendo detalhamentos dos componentes de custo.",
  },
  {
    id: 113,
    question:
      "Uma empresa possui uma única instância Amazon EC2. A empresa quer adotar uma arquitetura altamente disponível. O que a empresa pode fazer para atender a esse requisito?",
    options: [
      {
        id: "a",
        text: "Escalar horizontalmente em várias Zonas de Disponibilidade",
        correct: true,
      },
      {
        id: "b",
        text: "Mudar a família de instâncias do EC2 para uma instância otimizada para computação.",
        correct: false,
      },
      {
        id: "c",
        text: "Comprar uma Instância Dedicada do EC2.",
        correct: false,
      },
      {
        id: "d",
        text: "Escalar verticalmente para um tamanho maior de instância EC2.",
        correct: false,
      },
    ],
    explanation:
      "Escalar horizontalmente em várias Zonas de Disponibilidade é uma maneira de adotar uma arquitetura altamente disponível, pois aumenta a tolerância a falhas e a resiliência da aplicação. Escalar verticalmente para um tamanho maior de instância EC2 melhora o desempenho, mas não a disponibilidade. Comprar uma Instância Dedicada EC2 isola a instância de outros clientes AWS, mas não melhora a disponibilidade. Mudar a família de instâncias EC2 para uma instância otimizada para computação otimiza o tipo de instância para a carga de trabalho, mas não melhora a disponibilidade.",
  },
  {
    id: 114,
    question:
      "Uma empresa precisa de ajuda para gerenciar várias contas AWS vinculadas que são relatadas em uma fatura consolidada. Qual plano de suporte da AWS inclui um concierge da AWS a quem a empresa pode pedir assistência?",
    options: [
      { id: "a", text: "AWS Enterprise Support", correct: true },
      { id: "b", text: "AWS Business Support", correct: false },
      { id: "c", text: "AWS Basic Support", correct: false },
      { id: "d", text: "AWS Developer Support", correct: false },
    ],
    explanation:
      "O AWS Enterprise Support é o plano de suporte AWS que inclui um concierge da AWS que a empresa pode solicitar assistência. Este plano oferece um Gerente Técnico de Conta (TAM) dedicado que fornece orientação para ajudar a planejar e construir soluções usando as melhores práticas, coordenar o acesso a especialistas e manter o ambiente AWS operacionalmente saudável.",
  },
  {
    id: 115,
    question:
      "Uma empresa está executando um sistema de processamento de pedidos em instâncias Amazon EC2. A empresa quer migrar para uma aplicação baseada em microsserviços. Qual combinação de serviços da AWS a aplicação pode usar para atender a esses requisitos? (Selecione DOIS.)",
    options: [
      {
        id: "a",
        text: "Amazon Simple Queue Service (Amazon SQS)",
        correct: true,
      },
      { id: "b", text: "AWS Lambda", correct: true },
      { id: "c", text: "AWS AppSync", correct: false },
      { id: "d", text: "AWS Migration Hub", correct: false },
      { id: "e", text: "AWS Application Migration Service", correct: false },
    ],
    explanation:
      "A combinação de serviços AWS que o aplicativo pode usar para migrar para uma aplicação baseada em microservices são Amazon Simple Queue Service (Amazon SQS) e AWS Lambda. O Amazon SQS é um serviço de filas de mensagens totalmente gerenciado que permite aos clientes desacoplar e escalar microservices, sistemas distribuídos e aplicativos serverless. O AWS Lambda é um serviço de computação serverless que permite aos clientes executar código sem provisionar ou gerenciar servidores.",
  },
  {
    id: 116,
    question:
      "Quais serviços ou ferramentas da AWS são projetados para proteger uma carga de trabalho contra injeções de SQL, cross-site scripting e ataques DDoS? (Selecione DUAS.)",
    options: [
      { id: "a", text: "AWS WAF", correct: true },
      { id: "b", text: "AWS Shield Standard", correct: true },
      { id: "c", text: "Endpoint VPC", correct: false },
      { id: "d", text: "Virtual private gateway", correct: false },
      { id: "e", text: "AWS Config", correct: false },
    ],
    explanation:
      "AWS Shield Standard e AWS WAF são os serviços projetados para proteger uma carga de trabalho contra injeções SQL, scripts entre sites e ataques DDoS. O AWS Shield fornece proteção contra DDoS, enquanto o AWS WAF ajuda a proteger aplicações web ou APIs contra exploits comuns que podem afetar a disponibilidade, comprometer a segurança ou consumir recursos excessivos.",
  },
  {
    id: 117,
    question:
      "Uma empresa está hospedando uma aplicação web em instâncias Amazon EC2. A empresa quer implementar condições personalizadas para filtrar e controlar o tráfego web de entrada. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      { id: "a", text: "AWS WAF", correct: true },
      { id: "b", text: "Amazon Macie", correct: false },
      { id: "c", text: "AWS Shield", correct: false },
      { id: "d", text: "Amazon GuardDuty", correct: false },
    ],
    explanation:
      "O serviço AWS que atende aos requisitos da empresa que está hospedando uma aplicação web em instâncias Amazon EC2 e quer implementar condições personalizadas para filtrar e controlar o tráfego de entrada é o AWS WAF. Este firewall de aplicação web ajuda a proteger aplicações web contra exploits comuns que podem afetar a disponibilidade, comprometer a segurança ou consumir recursos excessivos. Outros serviços, como Amazon GuardDuty, Amazon Macie e AWS Shield, não são os melhores para esta finalidade.",
  },
  {
    id: 118,
    question:
      "Qual serviço ou ferramenta da AWS fornece recomendações para ajudar os usuários a dimensionar corretamente as instâncias Amazon EC2 com base nos dados históricos de uso da carga de trabalho?",
    options: [
      { id: "a", text: "AWS Compute Optimizer", correct: true },
      { id: "b", text: "AWS Pricing Calculator", correct: false },
      { id: "c", text: "AWS App Runner", correct: false },
      { id: "d", text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "O serviço AWS que fornece recomendações para ajudar os usuários a dimensionarem corretamente as instâncias Amazon EC2 com base em dados históricos de uso é o AWS Compute Optimizer. Este serviço analisa a configuração e o desempenho dos recursos AWS e oferece recomendações para tipos e tamanhos ideais de recursos com base nos padrões e métricas de carga de trabalho. O AWS Compute Optimizer ajuda os usuários a melhorar o desempenho, a disponibilidade e a eficiência de custos de seus recursos AWS. Outros serviços, como AWS Pricing Calculator, AWS App Runner e AWS Systems Manager, não são os melhores para essa finalidade específica.",
  },
  {
    id: 119,
    question:
      "Qual serviço da AWS exige que o cliente faça o patch do sistema operacional convidado?",
    options: [
      { id: "a", text: "Amazon EC2", correct: true },
      { id: "b", text: "Amazon ElastiCache", correct: false },
      { id: "c", text: "AWS Lambda", correct: false },
      { id: "d", text: "Amazon OpenSearch Service", correct: false },
    ],
    explanation:
      "O serviço AWS que exige que o cliente aplique patches no sistema operacional convidado é o Amazon EC2. O Amazon EC2 é um serviço que fornece capacidade de computação escalável na nuvem e permite que os clientes iniciem e executem servidores virtuais com uma variedade de sistemas operacionais, configurações e especificações. O cliente é responsável por aplicar patches e atualizar o sistema operacional convidado e qualquer aplicativo que seja executado nas instâncias EC2.",
  },
  {
    id: 120,
    question:
      "Uma empresa executa um banco de dados no Amazon Aurora na região us-east-1. A empresa tem um requisito de recuperação de desastres de que o banco de dados esteja disponível em outra região. Qual solução atende a esse requisito com mínima interrupção nas operações do banco de dados?",
    options: [
      {
        id: "a",
        text: "Implantar réplicas de leitura Aurora cross-Region.",
        correct: true,
      },
      {
        id: "b",
        text: "Criar snapshots de volumes do Amazon Elastic Block Store (Amazon EBS) para o Aurora e copiá-los para outra Região.",
        correct: false,
      },
      { id: "c", text: "Implantar Réplicas Aurora.", correct: false },
      {
        id: "d",
        text: "Realizar uma implantação Multi-AZ do Aurora.",
        correct: false,
      },
    ],
    explanation:
      "A solução que atende ao requisito da empresa que executa um banco de dados no Amazon Aurora na região us-east-1 e tem um requisito de recuperação de desastres de que o banco de dados esteja disponível em outra região com mínima interrupção das operações do banco de dados é implantar réplicas de leitura Aurora cross-Region.",
  },
  {
    id: 121,
    question:
      "Uma empresa está usando o Amazon RDS. Uma empresa está lançando uma aplicação de negócios crítica em uma região AWS. Como a empresa pode aumentar a resiliência dessa aplicação?",
    options: [
      {
        id: "a",
        text: "Implantar a aplicação usando múltiplas Zonas de Disponibilidade.",
        correct: true,
      },
      {
        id: "b",
        text: "Implantar uma cópia da aplicação em outra conta da AWS.",
        correct: false,
      },
      {
        id: "c",
        text: "Implantar a aplicação usando múltiplas sub-redes.",
        correct: false,
      },
      {
        id: "d",
        text: "Deploy the application by using multiple VPCs.",
        correct: false,
      },
    ],
    explanation:
      "Implantar a aplicação usando várias Zonas de Disponibilidade é a melhor maneira de aumentar a resiliência da aplicação. O Amazon RDS, por exemplo, oferece suporte a alta disponibilidade e failover para instâncias de banco de dados usando implantações Multi-AZ, replicando sincronicamente a instância principal para uma réplica em uma Zona de Disponibilidade diferente.",
  },
  {
    id: 122,
    question:
      "Uma empresa está revisando o design de uma aplicação que será migrada de on-premises para uma única instância Amazon EC2. O que a empresa deve fazer para tornar a aplicação altamente disponível?",
    options: [
      {
        id: "a",
        text: "Provisionar instâncias adicionais do EC2 em outras Zonas de Disponibilidade.",
        correct: true,
      },
      {
        id: "b",
        text: "Usar uma Amazon Machine Image (AMI) para criar a instância EC2.",
        correct: false,
      },
      {
        id: "c",
        text: "Provisionar a aplicação usando uma Instância Spot do EC2.",
        correct: false,
      },
      {
        id: "d",
        text: "Configurar um Application Load Balancer (ALB). Atribuir a instância EC2 como destino do ALB.",
        correct: false,
      },
    ],
    explanation:
      "Provisionar instâncias EC2 adicionais em outras Zonas de Disponibilidade é uma forma de tornar a aplicação altamente disponível, reduzindo o impacto de falhas e aumentando a tolerância a falhas.",
  },
  {
    id: 123,
    question:
      "Uma empresa quer desenvolver um aplicativo de compras que registre pedidos de clientes. O aplicativo precisa usar um serviço de banco de dados gerenciado pela AWS para armazenar dados. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      { id: "a", text: "Amazon RDS", correct: true },
      { id: "b", text: "Amazon Neptune", correct: false },
      { id: "c", text: "Amazon ElastiCache", correct: false },
      { id: "d", text: "Amazon Redshift", correct: false },
    ],
    explanation:
      "O Amazon RDS é o serviço AWS que fornece um serviço gerenciado de banco de dados relacional que suporta vários mecanismos de banco de dados, como MySQL, PostgreSQL, Oracle e SQL Server. O Amazon Redshift é um serviço de data warehouse gerenciado otimizado para consultas analíticas, o Amazon ElastiCache oferece um serviço gerenciado de armazenamento de dados em memória que suporta Redis e Memcached, e o Amazon Neptune oferece um serviço gerenciado de banco de dados gráfico.",
  },
  {
    id: 124,
    question:
      "Qual benefício da AWS Cloud ajuda as empresas a alcançar custos de uso mais baixos devido ao uso agregado de todos os usuários da AWS?",
    options: [
      { id: "a", text: "Economias de escala", correct: true },
      {
        id: "b",
        text: "Sem necessidade de adivinhar a capacidade",
        correct: false,
      },
      { id: "c", text: "Maior velocidade e agilidade", correct: false },
      { id: "d", text: "Ability to go global in minutes", correct: false },
    ],
    explanation:
      "O benefício da AWS Cloud que ajuda as empresas a obterem custos de uso mais baixos devido ao uso agregado de todos os usuários da AWS são as economias de escala. As economias de escala significam que a AWS pode alcançar custos mais baixos e maior eficiência operando em uma escala maciça e repassando as economias aos clientes.",
  },
  {
    id: 125,
    question:
      "Qual serviço da AWS é projetado para ajudar os usuários a orquestrar um processo de fluxo de trabalho para um conjunto de funções AWS Lambda?",
    options: [
      { id: "a", text: "AWS Step Functions", correct: true },
      { id: "b", text: "Amazon DynamoDB", correct: false },
      { id: "c", text: "AWS CodePipeline", correct: false },
      { id: "d", text: "AWS Batch", correct: false },
    ],
    explanation:
      "O serviço AWS projetado para ajudar os usuários a orquestrarem um processo de workflow para um conjunto de funções AWS Lambda é o AWS Step Functions. Este serviço permite coordenar múltiplos serviços AWS em workflows serverless que podem ser acionados por eventos. Ele permite criar e visualizar workflows complexos, incluindo execução paralela, tratamento de erros, retries e timeouts, integrando-se com o AWS Lambda para orquestrar sequências de funções Lambda. Outros serviços, como Amazon DynamoDB, AWS CodePipeline e AWS Batch, não são adequados para essa finalidade.",
  },
  {
    id: 126,
    question:
      "Um novo usuário da AWS que tem pouca experiência em nuvem quer construir uma aplicação usando os serviços da AWS. O usuário quer aprender como implementar serviços específicos da AWS a partir de exemplos de outros clientes. O usuário também quer fazer perguntas aos especialistas da AWS. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
    options: [
      { id: "a", text: "AWS Online Tech Talks", correct: true },
      { id: "b", text: "AWS documentation", correct: false },
      { id: "c", text: "AWS Marketplace", correct: false },
      { id: "d", text: "AWS Health Dashboard", correct: false },
    ],
    explanation:
      "Os AWS Online Tech Talks são apresentações online que cobrem uma ampla gama de tópicos em vários níveis técnicos e oferecem uma sessão de perguntas e respostas ao vivo com especialistas da AWS, sendo um ótimo recurso para novos usuários aprenderem como implementar serviços AWS específicos a partir de exemplos de outros clientes.",
  },
  {
    id: 127,
    question:
      "Em quais categorias a AWS Trusted Advisor fornece ações recomendadas? (Selecione DUAS.)",
    options: [
      { id: "a", text: "Cotas de serviço", correct: true },
      { id: "b", text: "Otimização de custos", correct: true },
      { id: "c", text: "Registros de atividade da conta", correct: false },
      { id: "d", text: "Patches do sistema operacional", correct: false },
      { id: "e", text: "Tarefas repetitivas", correct: false },
    ],
    explanation:
      "O AWS Trusted Advisor fornece recomendações em cinco categorias: otimização de custos, desempenho, segurança, tolerância a falhas e limites de serviço. Ajudando a reduzir custos, aumentar a segurança e o desempenho, monitorar e gerenciar limites de serviço.",
  },
  {
    id: 128,
    question:
      "Qual serviço da AWS é usado para fornecer temporariamente credenciais de segurança federadas para um usuário ou aplicação?",
    options: [
      { id: "a", text: "AWS Simple Token Service (AWS STS)", correct: true },
      { id: "b", text: "AWS Secrets Manager", correct: false },
      { id: "c", text: "AWS Certificate Manager", correct: false },
      { id: "d", text: "Amazon GuardDuty", correct: false },
    ],
    explanation:
      "O serviço AWS usado para fornecer temporariamente credenciais de segurança federadas a um usuário é o AWS Security Token Service (AWS STS). Este serviço permite aos clientes solicitarem credenciais temporárias com privilégios limitados para usuários IAM ou usuários autenticados (usuários federados).",
  },
  {
    id: 129,
    question:
      "Uma empresa quer acessar um relatório sobre o impacto ambiental estimado do uso da AWS pela empresa. Qual serviço ou recurso da AWS a empresa deve usar para atender a esse requisito?",
    options: [
      { id: "a", text: "Console de Faturamento da AWS", correct: true },
      {
        id: "b",
        text: "Amazon Simple Notification Service (Amazon SNS)",
        correct: false,
      },
      { id: "c", text: "IAM policy", correct: false },
      { id: "d", text: "AWS Organizations", correct: false },
    ],
    explanation:
      "A empresa deve usar o console de faturamento da AWS para acessar um relatório sobre o impacto ambiental estimado do uso da AWS pela empresa. O console de faturamento da AWS fornece várias ferramentas e relatórios para gerenciar e monitorar os custos e o uso da AWS. Um dos relatórios disponíveis é o Painel de Sustentabilidade da AWS, que mostra a pegada de carbono estimada e a mistura de energia do uso da AWS pelo cliente.",
  },
  {
    id: 130,
    question:
      "Quais opções são partes interessadas comuns para a perspectiva de plataforma do AWS Cloud Adoption Framework (AWS CAF)? (Selecione DOIS.)",
    options: [
      { id: "a", text: "Engenheiros", correct: true },
      { id: "b", text: "IT architects", correct: true },
      { id: "c", text: "Diretores financeiros (CFOs)", correct: false },
      { id: "d", text: "Diretores de Informação (CIOs)", correct: false },
      { id: "d", text: "Diretores de Dados (CDOs)", correct: false },
    ],
    explanation:
      "Os stakeholders comuns para a perspectiva de plataforma do AWS Cloud Adoption Framework (AWS CAF) são arquitetos e engenheiros de TI. O AWS CAF é uma orientação que ajuda as organizações a projetar e seguir um caminho acelerado para a adoção bem-sucedida da nuvem. A perspectiva de plataforma se concentra no provisionamento e gerenciamento da infraestrutura e serviços na nuvem que suportam os aplicativos de negócios.",
  },
];
