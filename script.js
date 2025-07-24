function startGame() {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert("Please enter your username.");
    return;
  }
  alert("Starting game for " + username);
  // Game initialization logic here
}
