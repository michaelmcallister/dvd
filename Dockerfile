FROM nginx:1.21-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY static /usr/share/nginx/html
EXPOSE 80
