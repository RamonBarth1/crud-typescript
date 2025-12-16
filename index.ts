//@ts-ignore

import promptSync from "prompt-sync"; // Executar o código sem o npx
const prompt = promptSync();

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

// lista pra armazenar os usuários na memória
const users: User[] = [];

let incremnetId = 1;

// Função para adicionar um novo usuário
function addUser(): void {
  const name = prompt("Digite o seu nome completo: ") ?? "";
  const email = prompt("Digite o seu email: ") ?? "";
  const age = Number(prompt("Digite a sua idade: ") ?? "0");

  const newUser: User = {
    id: incremnetId++,
    name,
    email,
    age,
  };
  users.push(newUser);
  console.log("Usuário adicionado com sucesso!");
  console.log(newUser);
}

// Função para listar todos os usuários
function listUsers(): void {
  console.log("Lista de usuários:");

  if (users.length === 0) {
    console.log("Nenhum usuário cadastrado.");
    return;
  } else {
    users.forEach((user) => {
      console.log(
        `ID: ${user.id}, Nome: ${user.name}, Email: ${user.email}, Idade: ${user.age}`
      );
    });
  }
}

// Função para atualizar um usuário existente
function updateUser(): void {
  const id = Number(
    prompt("Digite o ID do usuário que deseja atualizar: ") ?? "0"
  );
  const user = users.find((u) => u.id === id);
  if (!user) {
    console.log("Usuário não encontrado, verifique e digite novamente.");
    return;
  }

  const newname = prompt(`Digite o novo nome completo`) ?? "";
  const newemail = prompt(`Digite o novo email`) ?? "";
  const newage = Number(prompt(`Digite a nova idade`) ?? "0");

  if (newname) user.name = newname;
  if (newemail) user.email = newemail;
  if (newage) user.age = newage;

  console.log("Usuário atualizado com sucesso!");
}

// Função para deletar um usuário
function deleteUser(): void {
  const id = Number(
    prompt("Digite o ID do usuário que deseja deletar: ") ?? ""
  );
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    console.log("Usuário não encontrado, verifique e digite novamente.");
    return;
  }

  users.splice(userIndex, 1);
  console.log("Usuário deletado com sucesso!");
}

function main(): void {
  while (true) {
    console.log("\nMenu Completo:");
    console.log("1. Adicionar usuário");
    console.log("2. Listar usuários");
    console.log("3. Atualizar usuário");
    console.log("4. Deletar usuário");
    console.log("5. Sair");

    const choice = prompt("Escolha uma opção (1-5): ") ?? "";
    switch (choice) {
      case "1":
        addUser();
        break;
      case "2":
        listUsers();
        break;
      case "3":
        listUsers();
        updateUser();
        break;
      case "4":
        listUsers();
        deleteUser();
        break;
      case "5":
        console.log("Saindo do programa. Até mais!");
        return;
      default:
        console.log("Opção inválida, por favor tente novamente.");

    }
  }
}

main();
