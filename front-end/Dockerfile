# Latest LTS Node image 
FROM node:16

# App directory
WORKDIR /app

# Copying the necessary packages to root directory
COPY package*.json ./

# Installing the packages
RUN ["npm", "i"]

# Copying the whole project to the container
COPY . .

# Exposing the port where the app will run
EXPOSE 5173

# Starting the application
CMD ["npm", "run", "dev"]