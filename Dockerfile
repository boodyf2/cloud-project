# Use official Node.js LTS image as the base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy app
COPY cloud-project ./

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["npm","run", "start"]
