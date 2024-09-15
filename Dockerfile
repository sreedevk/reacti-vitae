FROM node:alpine AS builder
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production

WORKDIR /app

RUN apk update
RUN apk add --no-cache libc6-compat

COPY .git ./
COPY package.json package-lock.json ./
COPY tsconfig.json tsconfig.node.json vite.config.ts tailwind.config.js postcss.config.js ./
COPY index.html index.html
COPY src src
COPY public public

RUN npm install -g typescript
RUN npm install --include=dev
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
