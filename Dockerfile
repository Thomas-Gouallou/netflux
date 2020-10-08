FROM debian
RUN apt-get update -yq && apt-get upgrade -yq
RUN apt-get install nodejs -yq
RUN apt-get install npm -yq
WORKDIR /netflux
ADD . .
RUN npm install
