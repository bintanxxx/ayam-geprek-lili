# Menggunakan base image Node.js versi LTS yang ringan
FROM node:20-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies murni untuk development
RUN npm install

# Copy seluruh source code
COPY . .

# Expose port Next.js
EXPOSE 3000

# Jalankan server development
CMD ["npm", "run", "dev"]