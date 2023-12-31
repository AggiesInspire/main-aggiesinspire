# base image

FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./ 
RUN yarn install --frozen-lockfile
RUN yarn run partytown

COPY ./ ./

EXPOSE 3000
CMD ["yarn", "dev"]
