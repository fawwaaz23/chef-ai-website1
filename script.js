function runAI() {
    const input = document.getElementById('aiInput').value;
    const output = document.getElementById('aiOutput');

    if(input.trim() === "") {
        output.innerText = "Please type something to get AI response.";
        return;
    }

    // Demo response (replace with real AI later)
    output.innerText = "Chief AI says: 🤖 This is a demo response for '" + input + "'";
}
