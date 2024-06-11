FROM node:alpine AS preparation
WORKDIR /app
RUN npm i -g pnpm

COPY ./nx.json ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./tsconfig.base.json ./
COPY ./packages/entities ./packages/entities
COPY ./apps/auth ./apps/auth

ARG PORT=3000
EXPOSE ${PORT}

FROM preparation AS dev
RUN pnpm install
RUN npx nx build auth
CMD [ "npx", "nx", "start:dev", "auth" ]

FROM preparation AS install-production
RUN pnpm install -P --ignore-scripts

FROM alpine AS production
WORKDIR /app
RUN apk add --no-cache nodejs

COPY --from=install-production /app/node_modules /app/node_modules

COPY --from=install-production /app/packages/entities/node_modules /app/packages/entities/node_modules
COPY --from=dev /app/packages/entities/dist /app/packages/entities/dist
COPY ./packages/entities/package.json /app/packages/entities/package.json

COPY --from=install-production /app/apps/auth/node_modules /app/apps/auth/node_modules
COPY --from=dev /app/apps/auth/dist /app/apps/auth/dist

CMD [ "node", "apps/auth/dist/main" ]
