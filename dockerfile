# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install pnpm globally
RUN npm install -g pnpm

# Install the dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 80
EXPOSE 80

# Specify the command to run the Next.js application in development mode
CMD ["npm", "run", "dev"]