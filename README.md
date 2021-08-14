# nodejs-docker
nodejs server with docker.

Its basic example of how to use nodejs with docker.
Under app folder we have source code in node.
In root, we have Dockerfile, it contain information about docker.

# steps to run

1. docker build -t nodeapp .  ( it create a image with nodeapp name, all commands should run on root level)
2. docker run --name nodeapp -p 9999:9999 nodeapp  (start running the docker container)

# stop docker container
1. docker ps (check the running container, if not found add -a).
2. docker stop CONTAINER_ID

# remove docker images
docker rmi -f CONTAINER_ID

