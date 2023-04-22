interface ImportMetaEnv {
  readonly PUBLIC_WHATSAPP: string;
  readonly PUBLIC_SHARED_TITLE: string;
  readonly PUBLIC_SHARED_TEXT: string;
  readonly PUBLIC_SHARED_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
