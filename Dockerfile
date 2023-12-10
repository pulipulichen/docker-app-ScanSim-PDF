FROM pudding/docker-app:docker-app-pdf-to-crop-svg-app-20231111.200031

RUN apt-get update --fix-missing

RUN apt-get install -y \
    poppler-utils

RUN apt-get install -y \
    unzip unoconv zip

RUN apt-get install -y \
    poppler-utils imagemagick ghostscript

# COPY package.json /
# RUN npm install

#CMD ["bash"]