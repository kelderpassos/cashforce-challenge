# Latest LTS Node image 
FROM node:16

# App directory
WORKDIR /api

# Copying the necessary packages to root directory
COPY package*.json ./

# Installing the packages
RUN ["npm", "i"]

# Copying the whole project to the container
COPY . .

# Exposing the port where the app will run
EXPOSE 3333

# Compiling the app
RUN npx tsc

# Starting the application
CMD ["npm", "run", "dev"]