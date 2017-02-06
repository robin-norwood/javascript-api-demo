# Javascript API demo

Doing a live (hopefully) demo showing how to connect to a Javascript API and get data back.


## Goals of demo

1. Make an API request
2. Get the response
3. console.log() response
4. Manipulate page with response data

## Setup

Uses Node and npm:

'''
$ npm install
'''

## API

Uses the yelp fusion API, and the yelp-fusion node module from https://github.com/tonybadguy/yelp-fusion

You will need a client id and client secret from yelp:

https://www.yelp.com/developers/documentation/v3

They will need to be set in your environment like so:

myyelpsecret.sh:
'''
#!/bin/bash

export CLIENT_ID="<your client id from yelp>"
export CLIENT_SECRET="<your client secret from yelp>"
'''

## Running locally

$ source myyelpsecret.sh

$ npm start
