# Desafio Técnico - Automação Cypress

Projeto desenvolvido para automação de testes da aplicação Swag Labs.

## Aplicação utilizada

https://www.saucedemo.com/

## Cenários automatizados

| Feature             | Cenário                                          |
| ------------------- | ------------------------------------------------ |
| Login               | CT-001 - Realizar login com sucesso              |
| Login               | CT-003 - Validar login com usuário bloqueado     |
| Carrinho de Compras | CT-004 - Adicionar produto ao carrinho           |
| Checkout            | CT-009 - Validar campos obrigatórios no checkout |
| Checkout            | CT-011 - Finalizar compra com sucesso            |

## Justificativa da escolha

Os cenários foram selecionados por representarem o fluxo principal da jornada de compra e pontos de maior risco funcional, contemplando autenticação, carrinho, validação de campos obrigatórios no checkout e finalização da compra.

Esses fluxos possuem maior valor para execução recorrente em testes de regressão e smoke test.

## Tecnologias utilizadas

* Cypress
* JavaScript
* Node.js
* GitHub Actions

## Como instalar o projeto

```bash
npm install
```

## Como executar os testes em modo interativo

```bash
npm run cy:open
```

## Como executar os testes em modo headless

```bash
npm run cy:run
```

## Pipeline

O projeto possui pipeline configurado com GitHub Actions para execução automática dos testes a cada push ou pull request na branch `main`.
