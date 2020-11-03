# Spring-5 Rest API Integration with Angular 7 front end

This repository contains TWO projects:

1.  back-end

    A Backend application developed with Java-8, Spring5 and Spring boot 2.1.4
    This application also uses Spring-DATA-JPA for building the DAO Tier.

2.  front-end

    An Angular 7 Project to consume services from `back-end` project.
    Uses HttpModule & FormsModule.

## How to Launch both applications?
Pre-requisites:

   - Java 8 
   - Node v10 
   - Angular/cli 
   - High speed internet for downloading maven and npm modules.

1.   Launch back-end application using apache maven wrapper. 

        ```bash
        cd back-end
        mvnw spring-boot:run
        ```
2.   To Test back-end try visiting this URL from web-browser:

        > http://localhost:8080/employees/1001

3.   Launch front-end application using angular/cli.

        ```
        cd front-end
        ng serve --open
        ```
4.   A Web-browser would be launched with URL:
    
        > http://localhost:4200/


5. Try with docker-compose

   ```
   $ docker-compose up -d
   $ docker-compose ps
   ```

6.  Open TWO Browser windows for URL
        
        http://localhost:8080/

    Try Creating employee 101 in front-end app (8080)

        http://localhost:9000/employees/101

7.  Destroy the instances

    ```
    $ docker-compose down
    ```