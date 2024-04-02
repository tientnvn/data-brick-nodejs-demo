FROM node:14.18-alpine

# Install bash
RUN apk update && apk add bash

# Install python3 and pip3
RUN apk add --no-cache python3 py3-pip

# Install make and g++
RUN apk add --update make g++\
   && rm -rf /var/cache/apk/*

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]
