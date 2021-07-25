FROM node:10
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY . .
RUN ls -a
RUN npm install
EXPOSE 3000
CMD ["npm","run","dev"]