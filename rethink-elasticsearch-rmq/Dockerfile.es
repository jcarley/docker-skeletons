FROM elasticsearch:2.3.3

RUN /usr/share/elasticsearch/bin/plugin install -b lmenezes/elasticsearch-kopf/2.0

EXPOSE 9200 9300
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["elasticsearch"]

