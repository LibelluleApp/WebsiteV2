# Étape 1 : Build de l'application
FROM node:22-alpine AS builder

WORKDIR /app

# Installer uniquement les deps nécessaires au build
COPY package*.json ./
RUN npm ci

# Copier le code source et build
COPY . .
RUN npm run build

# Étape 2 : Image de production
FROM node:22-alpine

WORKDIR /app

# Copier uniquement les fichiers nécessaires pour exécuter l'app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Installer uniquement les dépendances de production
RUN npm ci --omit=dev

EXPOSE 3002

CMD ["npm", "start"]
