FROM mhart/alpine-node:10

COPY . /root
WORKDIR /root

RUN npm install
RUN npm run build

CMD [ "npm", "run" ,"start" ]