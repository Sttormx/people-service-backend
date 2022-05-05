FROM node:16.14

COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT npm start
ENV PORT=8000
EXPOSE 8000
CMD [ "npm", "start"]
