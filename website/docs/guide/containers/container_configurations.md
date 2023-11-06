---
title: Container configuration with Nginx
description: Understanding container configurations with environment variables and configurations.
date: 2023-11-5
---

# Container Configurations with Nginx

## Objective
To understand ways that a container can be modified with the use of environment variables, and configuration file mounting.  



## Prerequisites
- Docker
- Terminal program (Mac/Linux)
- [Nginx Image Documentation](https://hub.docker.com/_/nginx)


## Deploy simple Nginx container <Badge text="demo" />
Using the nginx official docker image we are going to run the following command to create a simple Nginx webserver.
```sh
docker run --name learning-nginx --rm  -p 30001:80 nginx
```

This runs a docker container with:
- `--name learning-nginx` name of the container
- `--rm` removes container
- `-p 30001:80` maps your machine port as `30001` but connects to the container at port `80`
- `nginx` the image name

Going to [127.0.0.1:30001](http://127.0.0.1:30001) should show you have connected to Nginx server.

![nginx screenshot](/images/nginx-docker-run.png)

### Understanding env

- in order to see all the environment variables run `docker exec -it learning-nginx env`
 - this command executes an interactive terminal for the container `learning-nginx`
 - then it runs the `env` command, which gets all the environment variables for this container
 - running `env` on your local machine will also give you a list of all these variables
- lets also check the default configuration for Nginx `docker exec -it learning-nginx cat /etc/nginx/conf.d/default.conf`
 - this echo's out your configuration file to the screen.
 - You should note that the ports it is using is port 80

### .env
```sh
# docker exec -it learning-nginx env
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=0c82c4e4108d
TERM=xterm
NGINX_VERSION=1.25.1
NJS_VERSION=0.7.12
PKG_RELEASE=1~bookworm
HOME=/root
```


```sh
docker buildx build -t nginx:port8080 -f Dockerfile.sed --output type=docker https://github.com/sturple/sturple.github.io.git#:docker/nginx
```
## What if I have another application running on port 80.
- Sometimes port 80 is used, and you have to use another port.
- According to the [Nginx Documentation](https://hub.docker.com/_/nginx) there is a environment variable for this `NGINX_PORT`
- We can pass environment variables into our docker run command 
```sh
docker run --name learning-nginx --rm -e NGINX_PORT=8080 -p 30001:8080 nginx:port8080
```

```sh
docker run --name learning-nginx --rm -e NGINX_PORT=8080 -p 30001:8080 nginx:template
```

 - we also have to change the destination port.
 - However this doesn't work, it doesn't work because of the Nginx default.conf configuration.
- We need to mount a new configuration with its ports connect to `8001`, run `docker run --name learning-nginx --rm -e NGINX_PORT=8001 -p 30001:8001 -v ./HowTo/Kubernetes/ConfigMaps/default.conf:/etc/nginx/conf.d/default.conf nginx`
 - the site 127.0.0.1:8080 should now work.
 - check the env again by running `docker exec -it learning-nginx env`, you should notice the variable `NGINX_PORT`
 - check the configuration again by running `docker exec -it learning-nginx cat /etc/nginx/conf.d/default.conf`
- We can also pass our own environment variables `docker run --name learning-nginx --rm -e HELLO=WORLD -p 30001:80 nginx`
 - this will give us access to the env `HELLO`, but Nginx does not use this env.

### .env with NGINX_PORT
```sh
# docker exec -it learning-nginx env
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=6ea0a10b35ee
TERM=xterm
NGINX_PORT=8001 # <-- This is new, it is the env that we passed
NGINX_VERSION=1.25.1
NJS_VERSION=0.7.12
PKG_RELEASE=1~bookworm
HOME=/root

```

## nginx default.conf with ports changed

@[code](../../.vuepress/public/code/2023/11/default.conf)

## Deploy to Kubernetes
In order to deploy this simple Nginx example to kubernetes we have to create a deployment
- [Kubernetes deployment documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- For the deployment we only need some basic information
 - apiVersion
 - kind
 - metadata (name, namespace)
 - containers.
- to run this deployment just run `oc apply -f ./HowTo/Kubernetes/ConfigMaps/deployment-simple.yaml`
 - to view the status of this deployment run `kubectl get pods`, if successful the status should indicate running.
 - Unlike docker you can't access this pod directly, so you have to port-forward.

@[code yaml](../../.vuepress/public/code/2023/11/simple-deployment.yaml)


## Update the configuration

- run `docker run --name des-learning-nginx --rm -e NGINX_PORT=8001 -p 30001:8001 nginx`
 - this probably works, but when you refresh, it no longer works.
 - This is because your nginx file is still looking for requests from 8001 but nginx is not setup.
 - Lets create a file called default.conf and put the contents of below in it.
 - we are now going to use the default.conf to mount as the default.
- run `docker run --name des-learning-nginx --rm -e NGINX_PORT=30001 -p 30001:8001 -v ./HowTo/Kubernetes/ConfigMaps/default.conf:/etc/nginx/conf.d/default.conf nginx`
- this should now work... why.. because you updated the conf.
- we updated an env, we updated a config.


