# 🦉 Owl's Bar 🦉

<p align="center" width="100%">
<img src="./src/assets/imgReadme.png"/>
</p>

Esse é um site construido com `React`, seguindo as diretrizes do projeto de módulo final do bootcamp da Resilia Educação. O objetivo do site é consumir a <a href="https://github.com/Digoassun/APIRest_Pub/blob/master/readme.md"> **REST API** </a> (clique para verificar documentação) criada no módulo 4. Para desenvolver a aplicação também utilizamos react-router-dom, grid, styled-components e afins.

## 🌐 Tecnologias:

<img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img alt="Javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img alt="styled-components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
<img alt="MaterialUi" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" />

## 🧠 Escolhas no desenvolvimento:

### Layout

O layout foi inspirado em uma temática de faroeste, a intenção foi buscar uma identidade visual singular e que passasse a imagem de um pub moderno, mas ao mesmo tempo respeitando caracteristicas clássicas.

### Material UI

A biblioteca de componentes ```Material UI``` foi escolhida pois facilita o uso de componentes dinâmicos e acessíveis.

### Styled Components

Pensando em fazer melhor uso das classes evitando possíveis conflitos entre os estilos, melhor aproveitamento do código e maior facilidade em sua manutenção, foi usado ```Styled Components```, uma biblioteca que permite que problemas como estes sejam evitados, e que seja feito melhor uso dos estilos utilizados. 

## 🛠️ Instalação:

Para clonar o projeto, execute o comando:
```bash
git clone https://github.com/Digoassun/owlsBar.git
```
Depois mude seu terminal para o diretório que foi criado do projeto e execute:
```bash
yarn -OU- npm install
```
Para instalar as dependências do projeto. Em seguida execute:

```bash
yarn -OU- npm run dev
```
Para rodar o projeto.

## 🛣️ Rotas:

* Rota ```'/'``` para página Home: Está é a primeira página com a qual o usuário se depara. Nela temos uma galeria com fotos do bar e o menu header onde o usuário pode navegar pelas outras páginas do site.

* Rota ```'/cardapio'``` para página de Cárdapio: Na página de cardápio o usuário comum pode ver todos os itens servidos no bar ou pesquisar um específico. Caso uma pessoa logada com permissões maiores de acesso entre nessa página, ela também pode utilizar as funcionalidades de adicionar, deletar ou editar produtos.

* Rota ```'/edit/:produto'``` para página de Edição de Produto: Nesta página temos um formulário para edição das propriedades de cada produto. O usuário pode editar somente uma propriedade ou todas.

* Rota ```'/adicionar'``` para página de Adição de Produto: Nesta página temos um formulário para adiçao das propriedades de cada produto. O usuário deve preencher todas as propriedades do produto que será adicionado ao cardápio.

* Rota ```'/login'``` para página de Login de Usuário: A página de login de usuário contém um formulário para que um funcionário do bar possa se logar no site, e também um link para cadastro de novos funcionários.

* Rota ```'/cadastro'``` para página de Cadastro de Novos Funcinários: Na página de cadastro de novo funcionário, existe um formulário para preenchimento do nome, cargo e senha do novo usuário em questão.

* Rota ```'/contato'``` para página de Contato: Nessa página é possível conhecer nosso time de desenvolvimento através de links para seus respectivos perfis no linkedin e github.

## 📫 Como contribuir:

Para contribuir com nosso projeto, siga estas etapas:

- Faça um fork este repositório.
- Crie um branch: `git checkout -b <nome_branch>`.
- Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
- Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
- Crie a solicitação de pull.
 _Consulte a documentação do GitHub em_ [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
