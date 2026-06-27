FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY package-lock.json ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN echo 'server { \
    listen 3000; \
    server_name putkasok.ru;  \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(ico|png|webmanifest|xml|json|svg)$ { \
        add_header Cache-Control "public, immutable, max-age=31536000"; \
        try_files $uri =404; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
