SHELL := /bin/bash

server:
	virtualenv ./.env -p python2 && \
	source ./.env/bin/activate && \
	pip install -r ./src/pt_backend/requirements.txt && \
	python ./src/pt_backend/manage.py makemigrations && \
	python ./src/pt_backend/manage.py migrate && \
	python ./src/pt_backend/manage.py runserver localhost:8000;

clean:
	rm -r ./.env
