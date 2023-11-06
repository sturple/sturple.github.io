
FROM nginx
# Changes port 80 to 8080 as port 80 is a privaleged port, which will not run on platfroms like OpenShift.
RUN ["/bin/bash", "-c", "sed -i 's/80/8080/g' /etc/nginx/conf.d/default.conf"]