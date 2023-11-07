# Dockerfile.sed - used to create an Nginx image with new port 8080
FROM nginx
# Using sed to change port 80 to 8080 as port 80 is a privileged port.
RUN ["/bin/bash", "-c", "sed -i 's/80/8080/g' /etc/nginx/conf.d/default.conf"]