import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a8cafc0021e69a8341")
  .setKey(
    "3308efe25f1f7a2c6701c81346fcef90a82acb72d94d175ac30a977218ed2d0b08318ff6cb417d195c00d423c62c84eaeb0d96c00dec1249cb3eda5d0809eac30c0478d4e224d63fae73610200299a1ec4f80eaec9cf10cc19bc85d711678911b256fbe0b4754ed869ad68532f7570693ff304719fbc5e2174ebc7e4bd8ab159"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
