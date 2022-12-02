/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly NEXT_PUBLIC_GATEWAY_URL: string
    readonly NEXT_PUBLIC_API_GATEWAY_URL: string
    readonly PUBLIC_URL: string
    readonly AUTHENTICATOR_TOKEN_ENDPOINT: string
    readonly AUTHENTICATOR_CLIENT_ID: string
    readonly AUTHENTICATOR_CLIENT_SECRET: string
    readonly GOOGLE_RECATPCHA_SITE_KEY: string
    readonly SARRAFEX_BLOG_URL: string
  }
}
