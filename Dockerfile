FROM nginx:1.15.8-alpine
# COPY dist/ /etc/nginx/html
COPY dist/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf