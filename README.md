# reactnative_restapi
This is a "Dockerized" APP developed in React Native requested by Intracon

### Dependencies (installed automatically)

> react-native<br>
> expo platform


### Usage

Open terminal and run `docker build . -t api` to build the docker image.

When the build process has ended successfully, you can run:

```
docker run --env ADB_IP=192.168.232.2 --env REACT_NATIVE_PACKAGER_HOSTNAME=192.168.0.19 -p 19000:19000 -p 19001:19001 app 
```

ADB_IP => the IP address Android emulator<br>
REACT_NATIVE_PACKAGER_HOSTNAME => the IP address of the PC running the emulator

