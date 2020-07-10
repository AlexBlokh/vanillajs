docker build -t dokku/backoffice:latest .
docker save dokku/backoffice:latest | pv | bzip2 | ssh root@178.128.247.99 "bunzip2 | docker load"
ssh root@178.128.247.99 "dokku tags:create backoffice previous; dokku tags:deploy backoffice latest && dokku tags:create backoffice latest"
