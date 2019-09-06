#pull base image
FROM node:10-alpine

LABEL version="1.0" 

LABEL author="quantianchao"

LABEL email="304033826@qq.com"

RUN node -v

ADD *.tar.gz /usr/opt/reactwebapp

WORKDIR /usr/opt/reactwebapp

CMD [ "/usr/bin/npm","start"]

EXPOSE 3000



