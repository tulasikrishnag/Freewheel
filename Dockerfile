# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /opt/freewheel

# add `/app/node_modules/.bin` to $PATH
ENV PATH /freewheel/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]
