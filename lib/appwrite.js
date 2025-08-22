import { Client, Account, Avatars, Databases } from 'appwrite'

import 'react-native-url-polyfill/auto';

const client = new Client();

client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')     // Appwrite Cloud endpoint
  .setProject('687af9c100315b9f4b41');             // Project ID

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client)
