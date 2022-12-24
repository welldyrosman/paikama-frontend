/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_APP_TITLE: string,
    VITE_CDN_URL: string
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}