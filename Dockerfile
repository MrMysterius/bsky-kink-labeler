FROM oven/bun:alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN bun install

COPY . .

RUN chmod +x launch.sh

CMD ["bun", "start"]
