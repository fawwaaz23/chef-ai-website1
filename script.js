const submitBtn = document.getElementById("submitBtn");
const aiOutput = document.getElementById("aiOutput");

submitBtn.addEventListener("click", async () => {
    const input = document.getElementById("aiInput").value.trim();
    if (!input) {
        aiOutput.innerText = "Please type something!";
        return;
    }

    aiOutput.innerText = "Thinking... 🤖";

    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": "AIzaSyA_IGkEPJrHuvqrBQB-ZfsRm12h0Cd03C4" // ✅ Your Gemini API Key
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: input }]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        if (data?.candidates?.[0]?.content) {
            aiOutput.innerText = data.candidates[0].content[0].text;
        } else {
            aiOutput.innerText = "No response from AI.";
        }
    } catch (err) {
        console.error(err);
        aiOutput.innerText = "Error connecting to AI.";
    }
});
