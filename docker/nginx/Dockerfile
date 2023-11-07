# Dockerfile.template - used to create an Nginx image with templates.
ARG CODE_VERSION=latest
FROM nginx:${CODE_VERSION}
# As of Nginx 1.19 you can use templates
COPY ./default.conf.template /etc/nginx/templates/