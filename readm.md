# 🚗 Sistema Automotivo - Gestão de Estoque

![Java](https://img.shields.io/badge/Java-21-orange?style=flat-square&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2.4-brightgreen?style=flat-square&logo=spring)
![H2 Database](https://img.shields.io/badge/H2_Database-Embedded-blue?style=flat-square&logo=databricks)

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como um trabalho acadêmico para o curso de **Análise e Desenvolvimento de Sistemas (ADS)**. O objetivo principal é demonstrar conhecimentos práticos ("mão na massa") no ecossistema **Java**. 

Através da construção deste sistema de ponta a ponta, foram aplicados conceitos fundamentais da engenharia de software, incluindo:
- **Programação Orientada a Objetos (POO):** Classes, métodos, encapsulamento e injeção de dependências.
- **Desenvolvimento Web:** Criação de uma API RESTful completa.
- **Persistência de Dados:** Uso de JPA/Hibernate com banco de dados em memória (H2).
- **Front-End Integrado:** Interface web limpa criada com HTML, CSS e Vanilla JavaScript usando `Fetch API`.

## ⚙️ Funcionalidades (CRUD)

- **Create:** Cadastro de novos veículos (Marca, Modelo, Ano, Preço e Status).
- **Read:** Listagem de todos os veículos disponíveis no estoque e consulta dinâmica no banco.
- **Delete:** Remoção/Venda de veículos do banco de dados com atualização em tempo real na tela.

## 🛠️ Tecnologias Utilizadas

- **Back-End:** Java 21, Spring Boot, Spring Data JPA.
- **Banco de Dados:** H2 Database (modo em memória).
- **Gerenciador de Dependências:** Maven.
- **Front-End:** HTML5, CSS3, JavaScript.

## 🚀 Como Executar e Acessar o Projeto

1. Clone este repositório para a sua máquina:
```bash
git clone [https://github.com/SEU-USUARIO/ADS-projeto-veiculos.git](https://github.com/SEU-USUARIO/ADS-projeto-veiculos.git)

2. Acesse a pasta do projeto e inicie a aplicação via Maven:
```bash
cd ADS-projeto-veiculos
mvn spring-boot:run

🔗 Links de Acesso:

Após iniciar o servidor, você pode acessar o sistema através dos links abaixo:

🖥️ A Tela do Sistema (Front-End): http://localhost:8080

🗄️ O Banco de Dados (Painel H2): http://localhost:8080/h2-console

- JDBC URL: jdbc:h2:mem:estoque_veiculos
- Usuário: sa
- Senha: (deixar em branco)

Desenvolvido por Lucas R. Souza

Depois de atualizar o arquivo no seu VS Code, lembre-se de rodar aqueles 3 comandos mágicos no terminal para mandar essa alteração lá para o seu GitHub:

```bash
git add README.md
git commit -m "Atualiza README com links de acesso"
git push origin main