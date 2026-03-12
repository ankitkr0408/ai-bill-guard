export const MODELS = {
  GPT_4O: "gpt-4o",
  GPT_4O_MINI: "gpt-4o-mini",
  GPT_3_5_TURBO: "gpt-3.5-turbo",
  GEMINI_1_5_PRO: "gemini-1.5-pro",
  GEMINI_1_5_FLASH: "gemini-1.5-flash",
  CLAUDE_3_5_SONNET: "claude-3-5-sonnet",
  CLAUDE_3_OPUS: "claude-3-opus",
  CLAUDE_3_HAIKU: "claude-3-haiku",
} as const;

export const pricing = Object.freeze({
  [MODELS.GPT_4O]: {
    input: 0.005,
    output: 0.015
  },
  [MODELS.GPT_4O_MINI]: {
    input: 0.00015,
    output: 0.0006
  },
  [MODELS.GPT_3_5_TURBO]: {
    input: 0.0005,
    output: 0.0015
  },
  [MODELS.GEMINI_1_5_PRO]: {
    input: 0.0035,
    output: 0.0105
  },
  [MODELS.GEMINI_1_5_FLASH]: {
    input: 0.000075,
    output: 0.0003
  },
  [MODELS.CLAUDE_3_5_SONNET]: {
    input: 0.003,
    output: 0.015
  },
  [MODELS.CLAUDE_3_OPUS]: {
    input: 0.015,
    output: 0.075
  },
  [MODELS.CLAUDE_3_HAIKU]: {
    input: 0.00025,
    output: 0.00125
  }
});