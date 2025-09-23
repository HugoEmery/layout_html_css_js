document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulação de login (sem autenticação real)
  if (username && password) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("content-section").classList.remove("hidden");
  } else {
    alert("Preencha todos os campos!");
  }
});

