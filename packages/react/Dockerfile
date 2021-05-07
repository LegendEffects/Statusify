# Build stage
FROM node:16 as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN yarn global add lerna
RUN lerna bootstrap

WORKDIR /app/packages/react
RUN yarn build

# Production stage
FROM nginx:stable-alpine
COPY --from=build /app/packages/react/build /usr/share/nginx/html
# new
COPY packages/react/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]