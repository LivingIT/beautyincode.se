#!/bin/bash
export PUBLIC_BUILD_TIME="$(date)"
export PUBLIC_GIT_HASH="$(git rev-parse --short HEAD)"
