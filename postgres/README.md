# PostgreSQL
The PostgreSQL object-relational database system provides reliability and data integrity.

Futher details about the Postgres image can be found [here](https://hub.docker.com/_/postgres/).

## Overview

Using this docker-compose.yml file you can start up the latest Postgres database server and configure it with a few simple edits.

## Setup

Open the docker-compose.yml file and change the key/value pairs under the environment section.  The values are pretty straight forward.

    POSTGRES_DB       - Name of the database to autocreate
    POSTGRES_USER     - Username used to connect to the database
    POSTGRES_PASSWORD - Password used to connect to the database

## Usage

Change to the directory of the docker-compose.yml file and run the following docker-compose command.

    docker-compose up -d

Docker will start to download the Postgres image from DockerHub if you don’t already have it.  When the download is complete the container will start and configure the database according to the settings from above.