# Multiplayer Clicker Game

A real-time multiplayer game using React and Firebase.

## Download Project
```bash
git clone https://github.com/igitiit/games
cd games/multiplayer-clicker
```

## Prerequisites
- Node.js (LTS version) from https://nodejs.org/
- Visual Studio Code from https://code.visualstudio.com/
- Git from https://git-scm.com/downloads
- Google account for Firebase

## Firebase Setup
1. Go to https://console.firebase.google.com/
2. Click "Create a project"
3. Name it "multiplayer-clicker"
4. Click "Create project"
5. Click "Realtime Database" → "Create Database"
6. Choose "Test mode"
7. In Rules tab, paste:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
8. Click Project Overview → Web icon (`</>`)
9. Register app as "multiplayer-clicker-web"
10. Copy `firebaseConfig`

## Project Setup
1. Open in VSCode
2. Open Terminal: `Ctrl+`` or View → Terminal
3. Run: `npm install`
4. Edit `src/firebase.js`
5. Replace `firebaseConfig` with your copied config

## Run the Game
1. Start server: `npm start`
2. Open: http://localhost:3000
3. Enter name → Join Game
4. Click to play!

## Multiplayer
- Share http://localhost:3000 with players on same network
- Each player needs unique name
- Scores update in real-time

## VSCode Live Share
1. Install "Live Share" extension
2. Click Live Share icon → Share
3. Share link with others
4. They can join and code together

## Quick Tips
- Test with multiple browser windows
- Use incognito for extra players
- Scores update automatically
- Each name must be unique

## Troubleshooting
If `npm start` fails:
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

Need help? Contact your instructor!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
