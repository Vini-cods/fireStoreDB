# Firebase Firestore App

Um aplicativo React Native desenvolvido com Expo que demonstra operações básicas com Firebase Firestore, incluindo leitura e escrita de dados em tempo real.

## 📱 Sobre o Projeto

Este app demonstra três formas diferentes de interagir com o Firestore:
- **getDoc()**: Busca um documento específico
- **onSnapshot()**: Escuta mudanças em tempo real
- **getDocs()**: Busca uma coleção completa

O aplicativo gerencia dados de aparelhos domésticos (TV, Geladeira, Fogão) armazenados no Firestore.

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **Firebase Firestore** - Banco de dados NoSQL em tempo real
- **JavaScript** - Linguagem de programação

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

```bash
# Node.js (versão 16 ou superior)
node --version

# npm ou yarn
npm --version

# Expo CLI
npm install -g @expo/cli
```

## 🔧 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd fireStoreDB
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o Firebase**
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Ative o Firestore Database
   - Copie as configurações do seu projeto
   - Substitua as configurações em `firebaseConnection.js`

4. **Execute o projeto**
```bash
npx expo start
```

## 🗂️ Estrutura do Projeto

```
📦 fireStoreDB
├── 📄 App.js                 # Componente principal
├── 📄 firebaseConnection.js  # Configuração do Firebase
├── 📄 index.js              # Ponto de entrada da aplicação
├── 📄 app.json              # Configurações do Expo
├── 📄 metro.config.js       # Configurações do Metro bundler
└── 📁 assets/               # Recursos da aplicação
```

## 🔥 Funcionalidades Firebase

### Leitura de Dados

#### getDoc()
```javascript
const referencia = doc(bancoExterno, "aparelhos", "1")
getDoc(referencia).then((snap) => {
  console.log(snap.data()?.TV)
})
```

#### onSnapshot() - Tempo Real
```javascript
onSnapshot(doc(bancoExterno, "aparelhos", "1"), (snap) => {
  setNome2(snap.data()?.Geladeira)
})
```

#### getDocs() - Coleção Completa
```javascript
const referencia2 = collection(bancoExterno, "aparelhos");
getDocs(referencia2).then((snap) => {
  let lista = [];
  snap.forEach((doc) => {
    lista.push({
      id: doc.id,
      tv: doc.data()?.TV,
      geladeira: doc.data()?.Geladeira,
      fogao: doc.data()?.Fogão
    })
  })
})
```

### Escrita de Dados

#### setDoc() - Documento com ID específico
```javascript
await setDoc(doc(bancoExterno, "aparelhos", "3"), {
  TV: "Sony",
  Geladeira: "Continental", 
  Fogão: "Consul"
})
```

#### addDoc() - Documento com ID automático
```javascript
await addDoc(collection(bancoExterno, "aparelhos"), {
  TV: "AOC",
  Geladeira: "Dako",
  Fogão: "Dako"
})
```

## 🎯 Como Usar

1. **Inicie o aplicativo** - Os dados serão carregados automaticamente
2. **Visualize os dados** - Três campos mostram diferentes métodos de leitura
3. **Adicione dados** - Use os botões para inserir novos registros
4. **Observe as mudanças** - O campo "OnSnapshot" atualiza em tempo real

## 📊 Estrutura dos Dados no Firestore

```javascript
// Coleção: "aparelhos"
// Documento exemplo:
{
  TV: "Samsung",
  Geladeira: "Brastemp",
  Fogão: "Electrolux"
}
```

## 🛠️ Configuração do Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative o Firestore Database
4. Configure as regras de segurança:

```javascript
// Regras básicas para teste (NÃO use em produção)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

5. Copie as configurações e cole em `firebaseConnection.js`

## 📱 Plataformas Suportadas

- ✅ **iOS** - Suporte completo
- ✅ **Android** - Suporte completo  
- ✅ **Web** - Suporte completo

## 🚨 Segurança

⚠️ **Importante**: Este projeto usa configurações básicas para demonstração. Para produção:

- Configure regras de segurança adequadas no Firestore
- Implemente autenticação de usuários
- Valide dados no frontend e backend
- Use variáveis de ambiente para credenciais

## 📝 Scripts Disponíveis

```bash
# Iniciar em modo desenvolvimento
npx expo start

# Executar no iOS
npx expo start --ios

# Executar no Android  
npx expo start --android

# Executar na Web
npx expo start --web

# Build para produção
npx expo build
