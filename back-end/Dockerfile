FROM maven:3-jdk-8 as build
WORKDIR /app

COPY . .

RUN ["mvn","package"]


FROM openjdk:8-jdk

WORKDIR /app

COPY --from=build /app/target/*.jar /app/backend.jar

CMD ["java","-jar","/app/backend.jar"]