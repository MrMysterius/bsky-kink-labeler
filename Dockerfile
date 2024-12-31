FROM oven/bun:alpine

RUN apk add nodejs=22.12.0

RUN mkdir /app /app/data
WORKDIR /app

COPY package.json .
RUN bun install

COPY . .

RUN chmod +x launch.sh

CMD ["bun", "start"]
