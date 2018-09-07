# x-typeorm

## Setup

```bash
$ yarn install
```

## MySQL

### Run

```bash
$ docker-compose up -d 
```

### Stop

```bash
$ docker-compose down
```

### CLI

```bash
$ mysql -h 127.0.0.1 -u root -p
```

### Create table

```bash
$ yarn db:sync
```

### Drop table

```bash
$ yarn db:drop
``` 

## Run app

```bash
$ yarn start
```

## Test

```bash
$ yarn test
```
