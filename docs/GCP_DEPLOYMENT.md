# Deploying to Google Cloud Run

This guide describes how to build the Next.js application into a Docker image, store it in Google Cloud's container registry and deploy it to **Cloud Run**.

## Prerequisites

1. Install the [gcloud CLI](https://cloud.google.com/sdk/docs/install) and authenticate:
   ```bash
   gcloud auth login
   gcloud config set project <PROJECT_ID>
   # Configure docker access for Artifact or Container Registry
   gcloud auth configure-docker <REGION>-docker.pkg.dev
   # or for Container Registry
   gcloud auth configure-docker
   ```

## Build the application

```
npm run build
```

## Build and push the Docker image

For **Artifact Registry**:
```bash
# Build the image
docker build -t <REGION>-docker.pkg.dev/<PROJECT_ID>/art-culture/app:latest .
# Push the image
docker push <REGION>-docker.pkg.dev/<PROJECT_ID>/art-culture/app:latest
```

For **Container Registry**:
```bash
# Build the image
docker build -t gcr.io/<PROJECT_ID>/art-culture:latest .
# Push the image
docker push gcr.io/<PROJECT_ID>/art-culture:latest
```

## Deploy to Cloud Run

```bash
# If using Artifact Registry
gcloud run deploy art-culture \
  --image <REGION>-docker.pkg.dev/<PROJECT_ID>/art-culture/app:latest \
  --region <REGION> \
  --platform managed \
  --allow-unauthenticated

# If using Container Registry
#gcloud run deploy art-culture \
#  --image gcr.io/<PROJECT_ID>/art-culture:latest \
#  --platform managed \
#  --region <REGION> \
#  --allow-unauthenticated
```

Replace `<PROJECT_ID>` with your Google Cloud project identifier and `<REGION>` with the desired region (for example `us-central1`).
