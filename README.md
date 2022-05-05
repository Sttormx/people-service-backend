# People Service

Aplicação que permita gerenciar desenvolvedores da Areopagus, associar a projetos. Cadastrar os repositórios e os canais do slack associados aos projetos.

## Tecnologias
- Node.JS
- Express.JS
- Sequelize

## Requisitos
- Node.JS em LTS
- MySQL

## Instalacao

Instale o projeto pelo comando `git clone`;

Em seguida, renomeie o arquivo `.env.example` para `.env` e realize as configuracoes das variaveis de ambiente;

Para instalar as dependencias do node, utilize:
```
npm i
```

Em seguida, para aplicar as migrations e as seeds utilize os comandos:
```
npm run db:migrate
npm run db:seed
```

Finalmente, para iniciar o projeto utilize
```
npm run start
```