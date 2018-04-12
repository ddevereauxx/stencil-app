#!/bin/bash

path=$(dirname "$0")

rm -rf $path/../node_modules/\@ionic/core/dist

cp -r $path/core/dist $path/../node_modules/\@ionic/core/
