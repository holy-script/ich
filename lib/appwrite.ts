export const config = {
    endpoint: process.env.EXPO_PUBLIC_ENDPOINT,
    project: process.env.EXPO_PUBLIC_PROJECT,
    platform: process.env.EXPO_PUBLIC_PLATFORM,
};

import { Account, AppwriteException, Client } from 'react-native-appwrite';

const { endpoint, project, platform } = config;

const client = new Client()
    .setEndpoint(endpoint)
    .setProject(project)
    .setPlatform(platform);

const account = new Account(client);

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) {
            throw new Error('Failed to get logged in user');
        }

        return currentAccount;
    }
    catch (error) {
        console.error(error as AppwriteException);
        throw new Error((error as AppwriteException).message);
    }
};