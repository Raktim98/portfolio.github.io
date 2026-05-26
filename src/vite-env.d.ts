/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DATABASE: string
  readonly VITE_AUTH_TOKEN: string
  readonly VITE_BASE_URL: string
  readonly VITE_FQ_LOCAL_SERVER_PORT: string
  readonly VITE_FQ_LOCAL_SERVER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}