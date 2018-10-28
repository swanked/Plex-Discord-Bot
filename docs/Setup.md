# Setup Instructions (Non-Docker)

1. Install Node.js: https://nodejs.org/ and ffmpeg http://ffmpeg.org
2. (Optional) If using Windows, I generally install Cmder as a console emulator to avoid issues: http://cmder.net/
3. Clone the repo or download a zip and unpackage it.
4. Navigate to the root folder and in the console, type `npm install`
    * You should see packages beginning to install
5. Once this is complete, go here: https://discordapp.com/developers/applications/me
    1. Log in or create an account
    2. Click **New App**
    3. Fill in App Name and anything else you'd like to include
    4. Click **Create App**
        * This will provide you with your Client ID and Client Secret, copy these down for later.
    5. Click **Create Bot User**
        * This will provide you with your bot Username and Token, copy these down for later.
6. Take all of the information from step 5 and enter it into the `config/keys.js` file, replacing everything after the `:` with the information from earlier.
7. Navigate to the `config/plex.js` file and replace everything after the `:` with your Plex Server information
    1. The identifier, product, version, and deviceName can be anything you want
8. Once you have the configs set up correctly, you'll need to authorize your bot on a server you have administrative access to.  For documentation, you can read: https://discordapp.com/developers/docs/topics/oauth2#bots.  The steps are as follows:
    1. Go to `https://discordapp.com/api/oauth2/authorize?client_id=[CLIENT_ID]&scope=bot&permissions=1` where `[CLIENT_ID]` is the Discord App Client ID
    2. Select **Add a bot to a server** and select the server to add it to
    3. Click **Authorize**
    4. You should now see your bot in your server listed as *Offline*
9. To bring your bot *Online*, navigate to the root of the app (where `index.js` is located) and in your console, type `node index.js`
    * This will start your server.  The console will need to be running for the bot to run.