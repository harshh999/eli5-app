Explain Like I'm 5 (ELI5) 🧸


A simple web application that uses the power of generative AI to explain complex text in simple, easy-to-understand terms, as if you were talking to a five-year-old.

Features
Simple Interface: A clean and intuitive UI with one input box for your text and one output box for the explanation.
AI-Powered Explanations: Leverages OpenAI's GPT models to provide clear and creative simplifications.
Responsive Design: Looks great on both desktop and mobile browsers.
How to Use
Paste Your Text: Copy any complex text you want to understand and paste it into the input box.
Click Explain: Press the "Explain!" button.
Get the Simple Version: The simplified explanation will appear in the output box below.
Tech Stack
Frontend: HTML5, CSS3, Vanilla JavaScript
AI: OpenAI API (gpt-3.5-turbo)
Setup for Local Development
To run this project on your own machine, follow these steps:
Clone the repository:
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

Navigate to the project directory:
cd YOUR_REPOSITORY_NAME

Get an OpenAI API Key:
Go to platform.openai.com and create an account.
Navigate to the "API keys" section and create a new secret key.
Add Your API Key:
Open the script.js file.
Find the line: const API_KEY = "YOUR_API_KEY_GOES_HERE";
Replace "YOUR_API_KEY_GOES_HERE" with your actual OpenAI secret key.
Run the Application:
The easiest way is to use a live server extension in your code editor (like "Live Server" for VS Code). Right-click on index.html and select "Open with Live Server".
⚠️ Security Note
Do not commit or push your API key to a public GitHub repository. The script.js file in this repository has the key removed for security. You must add it locally for the application to work.
