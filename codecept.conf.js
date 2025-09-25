require('dotenv').config();


exports.config = {
    plugins: {
  allure: {
    enabled: true,
    require: '@codeceptjs/allure-legacy',
  }
},
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://ridervolt.app',   // URL app bạn muốn test
      show: true,
      browser: 'chromium'
    }
  },
  include: {},
  name: 'CODECEPTJS_AI_TESTING',
  ai: {
    request: async (messages) => {
      const fetch = require('node-fetch');
      const res = await fetch(
        `${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT}/chat/completions?api-version=${process.env.AZURE_OPENAI_API_VERSION}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.AZURE_OPENAI_KEY
          },
          body: JSON.stringify({
            messages: messages,
            temperature: 0.2,
            max_tokens: 1024
          })
        }
      );
      const data = await res.json();
      return data.choices?.[0]?.message?.content || "";
    }
  }
};
