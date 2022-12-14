# 🦉 Owl's Bar 🦉

<p align="center" width="100%">
<img src="./src/assets/imgReadme.png"/>
</p>

 <div align='center'>
 <a href='#-tecnologias'>Tecnologias</a> •
 <a href='#-escolhas-no-desenvolvimento'>Escolhas no desenvolvimento</a> • 
 <a href='#%EF%B8%8F-instalando-o-projeto'>Instalando o projeto</a> •
 <a href='#%EF%B8%8F-rotas'>Rotas</a> •
 <a href='#-como-contribuir'>Como contribuir</a> •
 <a href='#%EF%B8%8F-autores'>Autores</a>
</div>

<br>
Esse é um site construido com `React`, seguindo as diretrizes do projeto de módulo final do bootcamp da Resilia Educação. O objetivo do site é consumir a <a href="https://github.com/Digoassun/APIRest_Pub/blob/master/readme.md"> **REST API** </a> (clique para verificar documentação) criada no módulo 4. Para desenvolver a aplicação também utilizamos react-router-dom, grid, styled-components e afins.
<br>

## 🌐 Tecnologias:

<img alt="Javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img alt="styled-components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />

## 🧠 Escolhas no desenvolvimento:

### Layout

O layout foi inspirado em uma temática de faroeste, a intenção foi buscar uma identidade visual singular e que passasse a imagem de um pub moderno, mas ao mesmo tempo respeitando caracteristicas clássicas.

Também utilizamos o ```FIGMA``` no primeiro momento de desenvolvimento do layout. Segue o link das versões iniciais do site no figma: <a href="https://www.figma.com/proto/TMSCHbUTJK3l3R9YUIhiaz/Owl's-Bar-team-library?node-id=778%3A1412&scaling=scale-down-width&page-id=411%3A2">Link 1</a>, <a href="https://www.figma.com/proto/TMSCHbUTJK3l3R9YUIhiaz/Owl's-Bar-team-library?node-id=450%3A10&scaling=scale-down-width&page-id=449%3A158">Link 2</a>, <a href="https://www.figma.com/proto/TMSCHbUTJK3l3R9YUIhiaz/Owl's-Bar-team-library?node-id=465%3A245&scaling=scale-down-width&page-id=465%3A244">Link 3</a>.

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="" title="" src="https://user-images.githubusercontent.com/102765815/188917693-062e3eed-a1a1-4207-89fe-ab78a66fc868.gif">
</p>



### Material UI

A biblioteca de componentes ```Material UI``` foi escolhida pois facilita o uso de componentes dinâmicos e acessíveis. </br>
Acesse a documentação: https://mui.com/

### Headless UI

A biblioteca de componentes ```Headless UI```  foi utilizado para fazer o modal do site. </br>
Acesse a documentação: https://headlessui.com/

### React-Toastify

A biblioteca de notificações ```React-Toastify```  foi utilizado para estilizar notifcações do usuário.</br>
Acesse a documentação: https://fkhadra.github.io/react-toastify/introduction

### Swiper

A biblioteca de coponentes ```Swiper```  foi utilizado para criação de carrossel. </br>
Acesse a documentação: https://swiperjs.com/react

### React Icons

A biblioteca de coponentes ```React Icons```  foi utilizado para adicionar icons ao projeto. </br>
Acesse a documentação: https://react-icons.github.io/react-icons/


## 📚 Pré-requisitos  
- NPM v.8.11.0

## 🛠️ Instalando o projeto:

Para clonar o projeto, execute o comando:
```bash
git clone https://github.com/Digoassun/owlsBar.git
```
Depois mude seu terminal para o diretório que foi criado o projeto com o comando:
```bash
cd owlsBar
```
E execute:
```bash
npm install
```
Para instalar as dependências do projeto. Em seguida execute:

```bash
npm start
```
Para rodar o projeto.

## 🛣️ Rotas:

* Rota ```'/'``` para página Home: Está é a primeira página com a qual o usuário se depara. Nela temos uma galeria com fotos do bar e o menu header onde o usuário pode navegar pelas outras páginas do site.

* Rota ```'/cardapio'``` para página de Cárdapio: Na página de cardápio o usuário comum pode ver todos os itens servidos no bar ou pesquisar um específico. Caso uma pessoa logada com permissões maiores de acesso entre nessa página, ela também pode utilizar as funcionalidades de adicionar, deletar ou editar produtos.

* Rota ```'/edit/:produto'``` para página de Edição de Produto: Nesta página temos um formulário para edição das propriedades de cada produto. O usuário pode editar somente uma propriedade ou todas.

* Rota ```'/adicionar'``` para página de Adição de Produto: Nesta página temos um formulário para adiçao das propriedades de cada produto. O usuário deve preencher todas as propriedades do produto que será adicionado ao cardápio.

* Rota ```'/login'``` para página de Login de Usuário: A página de login de usuário contém um formulário para que um funcionário do bar possa se logar no site, e também um link para cadastro de novos funcionários. Já existe um perfil cadastrado, com ```usuário = gestora``` e ```senha = Gestora@123```

* Rota ```'/cadastro'``` para página de Cadastro de Novos Funcinários: Na página de cadastro de novo funcionário, existe um formulário para preenchimento do nome, cargo e senha do novo usuário em questão. Também é necessário colocar uma senha de ADMIN que é igual a ```admin```, para que o usuário sera inserido.

* Rota ```'/funcionarios'``` para página de Funcionários: Na página é possível ver todos os funcionários cadastrados, assim como seus respectivos nomes, usuários e senhas. Também é possível deletar usuários, mas para isso é necessário estar logado com o usuário gestora. Para logar use: ```usuário = gestora``` e ```senha = Gestora@123```.

* Rota ```'/contato'``` para página de Contato: Nessa página é possível conhecer nosso time de desenvolvimento através de links para seus respectivos perfis no linkedin e github.

## 📫 Como contribuir:

Para contribuir com nosso projeto, siga estas etapas:

- Faça um fork este repositório.
- Crie um branch: `git checkout -b <nome_branch>`.
- Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
- Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
- Crie a solicitação de pull.
 _Consulte a documentação do GitHub em_ [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
 
## 📝 To-Do:

- Executar testes utilizando o jest e a react-testing-library.
- Refatoração de funções usando hooks customizados.
 
## 🖊️ Autores: 

<table align="center">
 <tr>
   <td align="center">
     <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102766893?v=4" width="100px;"><br>
     Lisandra de Cássia <br>
     <a href="https://www.linkedin.com/in/lisandradecassia/">
     <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a><br>
    <a href="https://github.com/Lisandradecassia">
     <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
   </td>
  <td align="center">
     <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102765815?v=4" width="100px;"><br>
     Rachelle Santolin <br>
     <a href="https://www.linkedin.com/in/rachelle-santolin/">
     <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a><br>
     <a href="https://github.com/rachellesdev">
     <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
   </td>
   <td align="center">
     <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102702258?v=4" width="100px;"><br>
     Rodrigo Assunção <br>
     <a href="https://www.linkedin.com/in/rodrigo-assun/">
     <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a><br>
    <a href="https://github.com/Digoassun">
     <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
   </td>
   </tr>
 </table>
 
