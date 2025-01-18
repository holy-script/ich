declare global {
    namespace NodeJS {
        interface ProcessEnv {
            EXPO_PUBLIC_ENDPOINT: string;
            EXPO_PUBLIC_PROJECT: string;
            EXPO_PUBLIC_PLATFORM: string;
        }
    }
}

export { };
