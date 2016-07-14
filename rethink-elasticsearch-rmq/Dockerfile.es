FROM elasticsearch:2.3.3

RUN echo "elasticsearch soft memlock unlimited" >> /etc/security/limits.conf
RUN echo "elasticsearch hard memlock unlimited" >> /etc/security/limits.conf

RUN /usr/share/elasticsearch/bin/plugin install -b lmenezes/elasticsearch-kopf/2.0

EXPOSE 9200 9300
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["elasticsearch"]


