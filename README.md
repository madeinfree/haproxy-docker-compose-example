# Haproxy Docker Compose Example

嘗試 Docker compose 啟用 haproxy demo

```
$ cd nodes
$ docker build -t my-node .
$ cd ..

$ cd haproxy
$ docker build -t mhop .
$ cd ..

$ cd example
$ docker-compose up -d
```

Open web server [http://localhost:8080](http://localhost:8080)

Open HAProxy
Statistics Report for pid 7 [http://localhost:8999/](http://localhost:8999/)

Refresh web and look `Statistics Report`
