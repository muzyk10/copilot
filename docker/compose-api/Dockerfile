FROM ramitos/docker-compose-api:1.0.0

RUN apk add --update bash

RUN export CONSUL_VERSION=0.7.0 \
    && export CONSUL_CHECKSUM=b350591af10d7d23514ebaa0565638539900cdb3aaa048f077217c4c46653dd8 \
    && curl --retry 7 --fail -vo /tmp/consul.zip "https://releases.hashicorp.com/consul/${CONSUL_VERSION}/consul_${CONSUL_VERSION}_linux_amd64.zip" \
    && echo "${CONSUL_CHECKSUM}  /tmp/consul.zip" | sha256sum -c \
    && unzip /tmp/consul -d /usr/local/bin \
    && rm /tmp/consul.zip \
    && mkdir /config

# Install Containerpilot
ENV CONTAINERPILOT_VERSION 3.4.2
RUN export CONTAINERPILOT_CHECKSUM=5c99ae9ede01e8fcb9b027b5b3cb0cfd8c0b8b88 \
    && export archive=containerpilot-${CONTAINERPILOT_VERSION}.tar.gz \
    && curl -Lso /tmp/${archive} \
         "https://github.com/joyent/containerpilot/releases/download/${CONTAINERPILOT_VERSION}/${archive}" \
    && echo "${CONTAINERPILOT_CHECKSUM}  /tmp/${archive}" | sha1sum -c \
    && tar zxf /tmp/${archive} -C /bin \
    && rm /tmp/${archive}

# Add Containerpilot configuration
COPY etc/containerpilot.json /etc
ENV CONTAINERPILOT /etc/containerpilot.json
COPY bin /bin

ENTRYPOINT []
CMD ["containerpilot"]
