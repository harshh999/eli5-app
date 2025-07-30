// ** IMPORTANT **
// 1. Replace "YOUR_OPENAI_API_KEY" with your actual secret key.
// 2. Do NOT share this code publicly with your key in it!
const API_KEY = "Your API KEY HERE";

const explainButton = document.getElementById("explainButton");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

async function getExplanation() {
    const complexText = inputText.value;

    if (!complexText) {
        alert("Please enter some text to explain!");
        return;
    }

    // Show a loading message
    outputText.innerText = "Thinking...";
    explainButton.disabled = true;

    try {
        // This is the prompt we send to the AI.
        // It tells the AI exactly what to do.
        const prompt = `
            Your role is to be a friendly and patient teacher.
            Explain the following text to a 5-year-old child using simple words, short sentences, and fun analogies.

            Complex Text: """${complexText}"""

            Simple Explanation:
        `;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.7, // Controls creativity
                max_tokens: 150 // Limits the length of the response
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Display the AI's response
        if (data.choices && data.choices.length > 0) {
            outputText.innerText = data.choices[0].message.content.trim();
        } else {
            outputText.innerText = "Sorry, I couldn't get an explanation. Please try again.";
        }

    } catch (error) {
        console.error("Error:", error);
        outputText.innerText = `An error occurred: ${error.message}`;
    } finally {
        explainButton.disabled = false;
    }
}

explainButton.addEventListener("click", getExplanation);