# 🤖 AICostMonitor

Professional AI cost monitoring for developers. Track token usage and estimate costs across multiple providers (OpenAI, Anthropic, Google Gemini) in real-time or via logs.

[![npm version](https://img.shields.io/npm/v/aicostmonitor.svg)](https://www.npmjs.com/package/aicostmonitor)
[![Downloads](https://img.shields.io/npm/dm/aicostmonitor.svg)](https://www.npmjs.com/package/aicostmonitor)

## 🚀 Features

- **Multi-Provider Support**: Supports GPT-4o, GPT-4o-mini, Claude 3.5 Sonnet, Gemini 1.5 Pro/Flash, and more.
- **Real-time Tracking**: Easily integrate into your application to track costs per request.
- **CLI Tool**: Analyze existing log files to get a detailed cost report.
- **Beautiful Reports**: Clean, colorized terminal output with tabular data.
- **Lightweight**: Zero fluff, focused purely on cost estimation.

## 📦 Installation

```bash
npm install aicostmonitor
```

## 🛠️ Usage

### 1. Programmatic Usage (Recommended)

Track AI usage directly in your code:

```javascript
import { AICostMonitor, MODELS } from 'aicostmonitor';

const monitor = new AICostMonitor();

// After an AI call
monitor.track(MODELS.GPT_4O, {
  prompt_tokens: 150,
  completion_tokens: 200
});

// Print the summary whenever you want
monitor.printSummary();
```

### 2. CLI Usage

Analyze a JSON log file:

```bash
aicostmonitor logs.json
```

The log file should be an array of objects:
```json
[
  { "model": "gpt-4o", "input_tokens": 1000, "output_tokens": 500 },
  { "model": "claude-3-5-sonnet", "input_tokens": 200, "output_tokens": 100 }
]
```

## 📊 Supported Models

- **OpenAI**: `gpt-4o`, `gpt-4o-mini`, `gpt-3.5-turbo`
- **Anthropic**: `claude-3-5-sonnet`, `claude-3-opus`, `claude-3-haiku`
- **Google**: `gemini-1.5-pro`, `gemini-1.5-flash`

## 🗺️ Roadmap

- [ ] Token estimation for prompts before execution.
- [ ] Cost comparison tool across different providers.
- [ ] Automated budget alerts.
- [ ] VS Code Extension for real-time cost views.

## 🤝 Contributing

This is an open-source project. Feel free to open issues or submit PRs to add more models or features!

## 📄 License

ISC © Ankit Kumar