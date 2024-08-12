# Use the official Bun image as the base
FROM oven/bun:1.1.22-alpine

ENV PORT=3000

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb for faster installs
COPY package*.json ./

# Install dependencies
RUN bun install

# Build the project
RUN bun run build

# Copy the rest of the application code
COPY ./dist ./

# Expose the development server port
EXPOSE $PORT

# Start the Astro development server
CMD ["bun", "run", "./server/entry.mjs"]
