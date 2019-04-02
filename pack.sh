#!/bin/bash

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
TAG="$(git describe --tags)"

cd src
zip -r ../"just-let-me-go.$BRANCH.$TAG.zip" .
