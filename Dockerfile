# Use the official Bun image as the base
FROM oven/bun:1.1.22-slim

ENV PORT=3000

# Set the working directory
WORKDIR /app

# Add curl for healthcheck
RUN apt-get update && apt-get install curl -y

# Copy package.json and bun.lockb for faster installs
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the project
RUN bun run build

# Expose the development server port
EXPOSE $PORT

# Start the Astro development server
CMD bun run ./dist/server/entry.mjs
