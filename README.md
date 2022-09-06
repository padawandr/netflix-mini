# Netflix Mini

Esta aplicação é uma versão da Netflix em formato mini. Você pode acessar a aplicação com diversos usuários diferentes, e tudo o que você assiste (na teoria) fica gravado nas métricas do site.

Caso o usuário não saiba a senha, ele não conseguirá logar na aplicação, e uma vez logado, os dados da aplicação ficam guardados no local storage do navegador e são atualizados sempre que uma ação de assistir filme for realizada no site.

A aplicação, quando é acessada por outro usuário (no mesmo computador e navegador) consegue mostrar as métricas anteriores e sempre que um novo filme é acessado, atualiza seu conteúdo.

Uma amostra da aplicação pode ser acessada no seguinte endereço:\
https://netflix-mini-padawandr.vercel.app/

A aplicação contém as seguintes páginas para acesso:

- Login
- Seleção de filmes principal
- Play
- Perfil do usuário
- Métricas do site

### Credenciais de Acesso

- Usuários do Brasil (BRA)

```
email: curupira@folclore.com
senha: curupira

email: saci@folclore.com
senha: saci

email: boitata@folclore.com
senha: boitata
```

- Usuários da China (CHN)

```
email: brucelee@kungfu.com
senha: brucelee

email: jackiechan@kungfu.com
senha: jackiechan

email: chunli@kungfu.com
senha: chunli
```

- Usuários do Japão (JPN)

```
email: goku@dbz.com
senha: goku

email: gohan@dbz.com
senha: gohan

email: vegeta@dbz.com
senha: vegeta
```

- Usuários dos Estados Unidos (USA)

```
email: batman@justiceleague.com
senha: batman

email: superman@justiceleague.com
senha: superman

email: wonderwoman@justiceleague.com
senha: wonderwoman
```

### Pré-requisitos

- Possuir o Docker e o Docker Compose instalados, OU
- Possuir o Node e o NPM instalados

### Como utilizar o projeto via Docker + Docker Compose

- Clone o repositório
- Docker
  - Acesse o diretório raíz do projeto
  - Execute o comando do Docker Compose\
    `docker compose up`
  - Para interromper a execução\
    `ctrl+c`

### Como utilizar o projeto via Node + NPM

- Clone o repositório
- Client
  - Acesse o diretório raíz do projeto
  - Instale as dependências e execute o client\
    `npm install`\
    `npm start`
  - Para interromper a execução\
    `ctrl+c`

### Portas de acesso

- Client (ReactJS): http://localhost:5173

### Imagens da aplicação

![netflix-mini-1](https://user-images.githubusercontent.com/48874386/188670611-a5b1df10-769d-4ffb-b9fe-7048b7752386.png)

![netflix-mini-1](https://user-images.githubusercontent.com/48874386/188670635-7a5a83dc-7166-41d2-a450-4ae93208f5c6.png)
