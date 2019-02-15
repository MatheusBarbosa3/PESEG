# PESEG 

 A metodologia **PESEG** é um modelo de auxílio para a elaboração e manutenção de um planejamento estratégico voltado para o ambiente de segurança da informação, baseado nas normas NBR ISO/IEC 27001:2013, NBR ISO/IEC 27002:2013, NBR ISO/IEC 27005:2011. Para fazer esse planejamento é dado o **Questionário de Maturidade de Requisitos**, que é a ferramenta criada nesta metodologia para auxiliar o levantamento da situação atual de segurança da informação de uma empresa, calculando a maturidade das áreas seguindo o mesmo esquema de estrutura do CMMI (*Capabilty Maturity Model Integration*). 

## Pré-requisitos:
Para dar continuidade nesta documentação é necessário ter intalado na sua máquina a versão mais recente do Node.Js e do NPM, e por fim instale o Ionic Framework versão 3.9.2 CLI, e algum editor de código-fonte de sua preferência, para fins de desenvolvimento e teste.

## Instalação:

Para download e instalação do Node.Js clique no link [Download Node.Js](https://nodejs.org/en/). Após instalado o Node, executando o comando abaixo fará com que seja instalado o Ionic CLI globalmente com o npm.
```
npm install -g ionic
```
> Para o Windows, é recomendável abrir um prompt de comando do administrador. Para Mac / Linux, execute o comando com sudo.

## Execução do projeto:
Para rodar a aplicação no seu computador, basta executar o seguinte comando abaixo.
```
ionic serve
```
> Com esse comando será dado um localhost onde poderá visualizar no seu navegador web de preferência o Google Chrome ou Mozilla Firefox, a aplicação por completa.

## Características básicas do projeto:
**Telas:**

Tela principal com acesso ao menu, para navegação da aplicação.
![](https://github.com/MatheusBarbosa3/PESEG/blob/master/src/assets/Prints/TelaPrincipal.png)

O questionário de requisitos.  
![](https://github.com/MatheusBarbosa3/PESEG/blob/master/src/assets/Prints/TelaQuestionario.png)

A página do resultado obtido.
![](https://github.com/MatheusBarbosa3/PESEG/blob/master/src/assets/Prints/TelaResultado.png)

Tela de ações de melhoria após o resultado.
![](https://github.com/MatheusBarbosa3/PESEG/blob/master/src/assets/Prints/TelaAcoesMelhoria.png)






