import os
from dotenv import load_dotenv

load_dotenv()
# Replace with your Space access key and secret key


# Set your Space name and the endpoint
AWS_STORAGE_BUCKET_NAME = "managemyexpat"
AWS_S3_ENDPOINT_URL = "https://sgp1.digitaloceanspaces.com"
AWS_S3_OBJECT_PARAMETERS = {"CacheControl": "max-age=86400"}
AWS_LOCATION = "https://managemyexpat.sgp1.digitaloceanspaces.com"

# Static fi

# Media files settings
DEFAULT_FILE_STORAGE = "MME.cdn.backends.MediaRootS3BotoStorage"
STATICFILES_STORAGE = "MME.cdn.backends.StaticRootS3BotoStorage"
AWS_LOCATION = "static"
STATIC_URL = f"{AWS_S3_ENDPOINT_URL}/{AWS_STORAGE_BUCKET_NAME}/{AWS_LOCATION}/"
AWS_MEDIA_LOCATION = "media"
MEDIA_URL = f"{AWS_S3_ENDPOINT_URL}/{AWS_STORAGE_BUCKET_NAME}/{AWS_MEDIA_LOCATION}/"
