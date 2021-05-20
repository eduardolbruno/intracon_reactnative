# reactnative_restapi
This is a "Dockerized" APP developed in React Native requested by Intracon
<br><br>
 <p align="center">
 <img src="https://i.postimg.cc/XqbxLBGd/1111111111111111111111.jpg" width="300">
 <img src="https://i.postimg.cc/FscpqZgc/1111111111111111111111.jpg" width="300">
 </p>
 <br><br>
### Dependencies (installed automatically)

> react-native<br>
> expo platform


### Usage

Open terminal and run `docker build . -t api` to build the docker image.

When the build process has ended successfully, you can run:

```
docker run --env ADB_IP=192.168.232.2 --env REACT_NATIVE_PACKAGER_HOSTNAME=192.168.0.19 -p 19000:19000 -p 19001:19001 -p 19002:19002 app 
```

ADB_IP => the IP address of the Android emulator<br>
REACT_NATIVE_PACKAGER_HOSTNAME => the IP address of the PC running the emulator




