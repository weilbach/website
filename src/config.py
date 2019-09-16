import os

APPLICATION_ROOT = '/'

UPLOAD_FOLDER = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), 'var', 'uploads'
)

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
MAX_CONTENT_LENGTH = 16 * 1024 * 1024
