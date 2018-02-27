---
title: H4 OSC Install
layout: default
---

# Install and Setup Instructions

## Prerequisites

* Install [Node.js](https://nodejs.org/en/)
* Be comfortable in the command line

## Instructions for installing

### Install bower

Open terminal and run this command:
`npm install -g bower`

### Get the source code

There are two ways to get the source code.

1. If you don’t have GitHub and don’t want to learn how to use Git, download the [zip file](https://github.com/maeganjwilson/hog4-osc/archive/master.zip) and extract it.
2. Clone the GitHub Repo using this [link](https://github.com/maeganjwilson/hog4-osc.git)

### Install dependencies

1. In the terminal, change your working directory to the source folder
2. Run `npm install`
3. `cd web`
4. Run `bower install`

## Instructions for running the app on the computer

5. Open the terminal and change your working directory to the source folder
6. Run `node .`
7. Open the `index.html` file in your browser

## Setting up Hog

1. Set the HogNet IP address to 192.168.0.100
2. Open the network window, tap on console, tap on settings, and open the Open Sound Control Tab
3. Set the incoming port number to 7001

#hog4-osc
