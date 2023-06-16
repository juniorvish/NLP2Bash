# NLP2Bash

A webapp that takes in natural human language command and converts it into a bash command using the OpenAI API.

## Prerequisites

- Python 3.x
- Node.js
- npm

## Installation

1. Clone the repository:

```
git clone https://github.com/juniorvish/NLP2Bash.git
```

2. Change to the project directory:

```
cd NLP2Bash
```

3. Install the required Python packages:

```
pip install -r backend/requirements.txt
```

4. Install the required Node.js packages:

```
npm install
```

5. Add your OpenAI API key to the `.env` file:

```
OPENAI_API_KEY=your_api_key_here
```

## Usage

1. Start the backend server:

```
python backend/app.py
```

2. Start the frontend development server:

```
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000` to use the webapp.