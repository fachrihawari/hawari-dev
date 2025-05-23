# Use the official Bun image as the base
FROM oven/bun:1.1.36-alpine

# Set the working directory
WORKDIR /app

# add curl
RUN apk update && apk add curl

# Copy package.json and bun.lockb for faster installs
COPY package.json ./
COPY bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the project
RUN bun run build

# Start the Astro development server
CMD bun run ./dist/server/entry.mjs
