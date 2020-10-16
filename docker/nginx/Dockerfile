FROM nginx:1.13.3-alpine
RUN rm -f /etc/nginx/conf.d/*
ADD docker/nginx/nginx.conf /etc/nginx/conf.d/app.conf
RUN mkdir -p /var/www
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf