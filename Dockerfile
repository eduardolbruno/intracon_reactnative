FROM node:14

# ADB_IP => the IP address Android emulator
ENV ADB_IP="192.168.232.2"

# REACT_NATIVE_PACKAGER_HOSTNAME => the IP address of the PC running the emulator
ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.168.0.19"

EXPOSE 19000 
EXPOSE 19001
EXPOSE 19002

WORKDIR /app

COPY package*.json ./

RUN apt-get update -y && \
    apt-get install android-tools-adb -y

RUN npm install --global expo-cli

RUN npm install

COPY . .

COPY package.json app.json ./

CMD adb connect $ADB_IP && \
    expo start --android