FROM node:latest as build
WORKDIR /app
COPY package*.json /app/
RUN ["npm","install"]
COPY src/ /app/src/
RUN ["ng","build"]

FROM nginx
COPY --from=build /app/front-end/dist/empweb /usr/share/nginx/html/

