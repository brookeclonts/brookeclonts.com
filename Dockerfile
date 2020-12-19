FROM node:15-alpine as BASE

FROM BASE as BUILD
WORKDIR /src
# Copy source dir
COPY . .
RUN yarn install

# Build Project
RUN yarn build
# Install only production dependencies for copy
RUN yarn install --production

# Copy .yarnclean to remove unneeded node_module files on install
COPY ./tools/yarn/.yarnclean .yarnclean


# Production Image
FROM node:15-alpine
LABEL maintainer="Brooke Clonts"

WORKDIR /app
EXPOSE 8080

# Copy Backend build
COPY --from=BUILD /app/lib /app/lib
# Copy Frontend build
COPY --from=BUILD /app/public /app/public
# Copy Production Dependencies
COPY --from=BUILD /app/node_modules /app/node_modules
COPY package.json package.json

# Install docker unix init to manage child processes
# (https://github.com/krallin/tini)
RUN apk add --no-cache tini

# Use tini as entry
ENTRYPOINT ["/sbin/tini", "--"]
# Run app!
CMD yarn start
