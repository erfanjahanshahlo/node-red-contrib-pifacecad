# About
This module is PiFace CAD node for [node red](https://nodered.org/).
# Install via Git
Run the following code in your raspberry pi terminal
```
cd /home/pi/.node-red/node_modules
git clone https://github.com/erfanjahanshahlo/node-red-contrib-pifacecad.git
```
and restart your node red server or reboot your raspberry pi.
# Install via npm
Run the following code in your raspberry pi terminal
```
cd /home/pi/.node-red/node_modules
npm install node-red-contrib-pifacecad
```
and restart your node red server or reboot your raspberry pi.
# Install via Download
in step one download this repository and rename main folder to ```node-red-contrib-pifacecad``` like the schematic below and copy to ```/home/pi/.node-red/node_modules``` path in your raspberry pi and restart your node red server or reboot your raspberry pi.
<br/>
-node-red-pifacecad-lcd<br/>
---package.json<br/>
---pfc_lcd.py<br/>
---pfc_lcd.js<br/>
---pfc_lcd.html<br/>
# Install Dependencies
For install dependencies, in your raspberry pi terminal run the below command.
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install python{,3}-pifacecad
```
# Enable SPI
To work with PiFace CAD you must enable the SPI protocol on raspberry pi. To do this you need to execute the following commands in the terminal.
```
sudo raspi-config
Interfacing Options -> SPI -> Yes
```
# Getting started
***To work with lcd node:***
Here's how to send data to this node.
```
ROW,COL:YOUR TEXT
```
for clear lcd send ```1,1:``` to the node to clear lcd.
> Be careful not to use any spaces in any of these commands.
