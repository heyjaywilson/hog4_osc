# Hog 4 OSC Controller

This is a browser based OSC controller for Hog 4 OS.
To run this “application” without any modification to the code, the Hog must be set to 192.168.0.100 and the port number for OSC input must be 7001.

## Functions of the Controller

* Go cue list 1

## How to use

You will need node, npm, and bower. If you are unfamiliar with these tools, there is a more detailed document here.

### Downloading and installing dependencies

1. Download the zip file or clone the repo

   * If you downloaded the zip folder, extract the files from the folder into their own folder named hog4-osc.

2. Open the terminal and change your directory to your downloads folder

   * You can do this by typing the following `cd downloads/hog4-osc`

3. Type `npm install` and let this process run
4. Now change directories to the web directory by typing the following `cd web`
5. Type `bower install` and let this process run
6. Now go back to the main folder by typing the following into the terminal `cd ..`

### Running the software

Make sure you are in hog4-osc in the terminal

7. Type `node .`
8. Open the index.html file in your browser

## Tests

Platforms tested on:
| Platform | Browsers Tested | Passed | Failed |
| ------------- | --------------- | ---------- | ---------- |
| MacOS 10.13.3 | Chrome | not tested | not tested |
| Windows 10 | Chrome | not tested | not tested |
