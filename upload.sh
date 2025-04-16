#!/bin/bash

# Get the bucket name from Terraform output
BUCKET_NAME=$(terraform -chdir=terraform output -raw website_url | sed 's|https://storage.googleapis.com/\(.*\)/index.html|\1|')

# Upload all files from the out directory
gsutil -m cp -r out/* gs://$BUCKET_NAME/ 