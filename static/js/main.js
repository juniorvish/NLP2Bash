document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const submitButton = document.getElementById("submit");
  const output = document.getElementById("output");

  submitButton.addEventListener("click", async () => {
    const userPrompt = input.value;
    const systemPrompt = "Convert the following natural language command to a bash command: ";

    const message = [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ];

    const response = await fetch("http://127.0.0.1:5000/api/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: message }),
    });

    if (response.ok) {
      const data = await response.json();
      const gptMessage = data.bash_command;
      output.textContent = gptMessage;
    } else {
      output.textContent = "Error: Unable to convert command";
    }
  });
});
