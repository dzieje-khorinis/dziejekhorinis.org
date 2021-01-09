FROM node:12

WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx
COPY --from=0 /usr/src/app/public /usr/share/nginx/html

EXPOSE 80
#CMD [ "node", "server.js" ]
