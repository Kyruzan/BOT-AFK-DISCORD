FROM node:20-slim

# Install dependencies bawaan Linux untuk kompilasi modul voice/audio
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]