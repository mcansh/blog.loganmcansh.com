/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly VERCEL_ENV: 'production' | 'preview' | 'development';
    readonly NODE_ENV: 'production' | 'test' | 'development';
    readonly SESSION_SECRET: string;
    readonly REPO: string;
    readonly BRANCH: string;
  }
}
