# 💇‍♀️ SaaS para Salões de Beleza
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

Sistema SaaS completo para gestão de salões de beleza. A plataforma oferece recursos para agendamentos, gerenciamento de profissionais, serviços, controle financeiro e muito mais. Pensado para ser acessível tanto via web quanto via aplicativo móvel.

---

## ✨ Funcionalidades
- Cadastro de clientes, profissionais e serviços
- Agenda com horários disponíveis
- Agendamento e histórico de atendimentos
- Controle financeiro do salão
- Painel administrativo
- Aplicativo mobile para clientes
- Design responsivo e moderno

---

## 🧩 Tecnologias Utilizadas

### 🔹 Frontend Web
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Figma](https://img.shields.io/badge/-Figma-F24E1E?style=flat&logo=figma&logoColor=white)

### 🔸 Backend
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/-Fastify-000000?style=flat&logo=fastify&logoColor=white)
![Prisma](https://img.shields.io/badge/-Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=white)
![Zod](https://img.shields.io/badge/-Zod-3e5b9a?style=flat)

### 📱 Mobile
![React Native](https://img.shields.io/badge/-React%20Native-61DAFB?style=flat&logo=react&logoColor=black)

---

## 📱 Plataforma
- **Web App:** Para salões gerenciarem toda a operação.
- **Mobile App:** Para os clientes agendarem serviços e acompanharem seus históricos.

---

## 🚀 Como Rodar o Projeto

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/repositorio.git
```

### 2. Instale as Dependências
```bash
# backend
cd backend
npm install

# frontend
cd ../frontend
npm install

# mobile
cd ../mobile
npm install
```

### 3. Configure o Banco de Dados
- Crie um banco MySQL
- Defina as variáveis de ambiente (.env) conforme o exemplo fornecido
- Rode as migrations do Prisma:
```bash
npx prisma migrate dev
```

### 4. Executando o Projeto
```bash
# backend
cd backend
npm run dev

# frontend
cd ../frontend
npm run dev

# mobile
cd ../mobile
npx expo start
```
