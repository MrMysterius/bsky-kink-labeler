FROM oven/bun:alpine

RUN apk update
RUN apk add nodejs npm

RUN mkdir /app /app/data
WORKDIR /app

COPY package.json .
RUN bun install

COPY . .

RUN chmod +x launch.sh

CMD ["bun", "start"]
