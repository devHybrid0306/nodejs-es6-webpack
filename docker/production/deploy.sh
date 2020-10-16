#!/usr/bin/env bash

set -e
set -v

# Extract Service Account from GOOGLE_AUTH ENV
echo ${GOOGLE_AUTH} | base64 -i --decode > ${HOME}/gcp-key.json

gcloud auth activate-service-account --key-file ${HOME}/gcp-key.json
gcloud --quiet config set project ${GOOGLE_PROJECT_ID}
gcloud --quiet config set compute/zone ${GOOGLE_COMPUTE_ZONE}
gcloud --quiet container clusters get-credentials ${GOOGLE_CLUSTER_NAME}

docker tag gateway "asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway:${CIRCLE_SHA1}"
docker tag gateway "asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway:${CIRCLE_BRANCH}"
docker tag gateway-nginx "asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway-nginx:${CIRCLE_SHA1}"
docker tag gateway-nginx "asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway-nginx:${CIRCLE_BRANCH}"

gcloud docker -- push "asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway:${CIRCLE_SHA1}"
gcloud docker -- push "asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway:${CIRCLE_BRANCH}"
gcloud docker -- push "asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway-nginx:${CIRCLE_SHA1}"
gcloud docker -- push "asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway-nginx:${CIRCLE_BRANCH}"

kubectl set image deployment/gateway \
  gateway="asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway:${CIRCLE_SHA1}"

#kubectl set image deployment/gateway-frontend \
#  gateway="asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway:${CIRCLE_SHA1}" \
#  gateway-nginx="asia.gcr.io/${GOOGLE_PROJECT_ID}/gateway-nginx:${CIRCLE_SHA1}"