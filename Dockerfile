FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN echo "deb ftp://ftp.us.debian.org/debian/ stable main non-free" >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get install ffmpeg -y

RUN npm install

# Bundle app source
COPY . .

# Start the bot
CMD [ "node", "index.js" ]