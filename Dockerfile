# Étape 1 : Base
FROM node:22-alpine AS base

# Étape 2 : Dépendances
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Étape 3 : Builder (C'est l'étape qui vous manquait)
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Désactiver la télémétrie durant le build
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Étape 4 : Runner (Production)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# On copie uniquement les fichiers nécessaires (mode standalone)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

USER nextjs

EXPOSE 3000

ENV PORT 3000
# On écoute sur toutes les interfaces pour que Docker mappe le port correctement
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]