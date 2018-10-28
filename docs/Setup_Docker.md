# Setup Instructions (Docker)

## Discord Bot Setup
1. Go to https://discordapp.com/developers/applications/ and create an app.
    1. Give it whatever name you want.
    2. Save the Client ID and Client Secret from the page.
    3. Head to the Bots tab on the left.
    4. Make a Bot.
    5. Save the Bot Username and Token.
    6. Go to `https://discordapp.com/api/oauth2/authorize?client_id=[CLIENT_ID]&scope=bot&permissions=1` where `[CLIENT_ID]` is the Discord App Client ID to add your bot to a server you admin.
    7. Follow the rest of the setup for your operating system below.

### Windows 10 *Pro* Setup
1. Download Docker CE from here: https://www.docker.com/get-started (Account required)
2. Download the contents of this repo from [here](../../../archive/master.zip) into a folder of your choice.
3. Open a command prompt at that folder. (Shift + Right-click "Open Powershell window here")
4. Run this command to build the image: `docker build --rm -f "Dockerfile" -t plex-discord-bot:latest .`
5. Use the sample.env.config file to create a env.config file with your information filled in.
6. Use this command to start the bot: `docker run --env-file enc.config --rm -it plex-discord-bot:latest`

### Windows 7+ or Windows 10 Home Setup
1. Download and install Docker Toolbox using the instructions [here](https://docs.docker.com/toolbox/overview/)
2. Download the contents of this repo from [here](../../../archive/master.zip) into a folder of your choice.
3. Open a command prompt at that folder. (Shift + Right-click "Open Powershell (Win 10)/command (Win 7) window here")
4. Run this command to build the image: `docker build --rm -f "Dockerfile" -t plex-discord-bot:latest .`
5. Use the sample.env.config file to create a env.config file with your information filled in.
6. Use this command to start the bot: `docker run --env-file enc.config --rm -it plex-discord-bot:latest`

### Mac (2010+ hardware with at least El Capitan 10.11 or newer)
1. Download Docker CE from here: https://www.docker.com/get-started (Account required)
2. Download the contents of this repo from [here](../../../archive/master.zip) into a folder of your choice.
3. Open a terminal window and go to that folder.
4. Run this command to build the image: `docker build --rm -f "Dockerfile" -t plex-discord-bot:latest .`
5. Use the sample.env.config file to create a env.config file with your information filled in.
6. Use this command to start the bot: `docker run --env-file enc.config --rm -it plex-discord-bot:latest`

### Mac (Older)
1. Download and install Docker Toolbox using the instructions [here](https://docs.docker.com/toolbox/overview/)
2. Download the contents of this repo from [here](../../../archive/master.zip) into a folder of your choice.
3. Open a terminal window and go to that folder.
4. Run this command to build the image: `docker build --rm -f "Dockerfile" -t plex-discord-bot:latest .`
5. Use the sample.env.config file to create a env.config file with your information filled in.
6. Use this command to start the bot: `docker run --env-file enc.config --rm -it plex-discord-bot:latest`