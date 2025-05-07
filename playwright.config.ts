import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on-first-retry',
  },
  reporter: [['html', { open: 'never' }]],
});
