import { Client, Databases, Account } from 'appwrite';

const PROJECT_ID = 'REPLACE WITH PROJECT ID';
const DATABASE_ID = 'REPLACE WITH DATABASE ID';
const COLLECTION_ID = 'REPLACE WITH COLLECTION ID';

const client = new Client();

const databases = new Databases(client);

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);

export const account = new Account(client);

export const getProjectListing = () =>
	databases.listDocuments(DATABASE_ID, COLLECTION_ID);
