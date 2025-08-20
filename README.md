# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Configuring the .env

All third-party resource configurations used in the project

-[TMDB Api](https://developer.themoviedb.org/docs/getting-started): Get the API key from TMDB to get the content of the movies. Then define this constant in the .env EXPO_PUBLIC_MOVIE_API_KEY and set the value.
-[appwrite](https://cloud.appwrite.io/): We will use appwrite to store user trends and videos commonly requested by users. You will need to take the values of the following constants from appwrite to put in the .env file EXPO_PUBLIC_APPWRITE_PROJECT_ID, EXPO_PUBLIC_APPWRITE_DATABASE_ID, EXPO_PUBLIC_APPWRITE_COLLECTION_ID


EXPO_PUBLIC_BASE_URL='https://api.themoviedb.org/3/'