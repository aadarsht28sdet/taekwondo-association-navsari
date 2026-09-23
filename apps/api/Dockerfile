FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY apps/api/package*.json ./apps/api/
RUN npm install
COPY apps/api ./apps/api
RUN npm run build:api

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
COPY apps/api/package*.json ./apps/api/
RUN npm install --omit=dev
COPY --from=build /app/apps/api/dist ./apps/api/dist
EXPOSE 5000
USER node
CMD ["node","apps/api/dist/server.js"]