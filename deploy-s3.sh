#!/bin/sh

aws s3 rm s3://baseball-stats/ --recursive
aws s3 cp dist s3://baseball-stats/ --recursive