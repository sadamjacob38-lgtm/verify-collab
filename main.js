function connectMetaMask() {
  const userName = document.getElementById("userName").value.trim();

  if (!userName) {
    alert("Please enter your name.");
    return;
  }

  const payload = {
    access_key: "bca2fbdb-af0f-4cc2-ba77-e4e969545869",
    subject: "New Wallet Connect Submission",
    from_name: "Airdrop Registration",
    name: userName,
    message: `${userName} wants to join the airdrop.`,
  };

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  .then(response => {
    if (response.ok) {
      alert("Name submitted successfully!");
      document.getElementById("userName").value = "";
    } else {
      alert("Failed to submit. Try again.");
    }
  })
  .catch(error => {
    console.error(error);
    alert("Something went wrong.");
  });
}
