#!/bin/bash
##how make variables work
rm -f ./out/main

gcc -o ./out/main ./src/main.c
chmod +x ./out/main
./out/main