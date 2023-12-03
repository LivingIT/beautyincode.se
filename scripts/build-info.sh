#!/bin/bash
export PRIVATE_BUILD_TIME="$(date)"
export PUBLIC_GIT_HASH="$(git rev-parse --short HEAD)"
