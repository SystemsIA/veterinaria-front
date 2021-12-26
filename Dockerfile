FROM node:16-alpine as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json jsconfig.json ./
COPY ./src ./src
COPY ./public ./public
COPY .env ./

RUN npm update -g npm
RUN npm update -g
RUN npm install
RUN npm run build

# Build step #2, build on nginx container
FROM nginx:stable-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
COPY deployment/deploy.conf /etc/nginx/conf.d/default.conf
