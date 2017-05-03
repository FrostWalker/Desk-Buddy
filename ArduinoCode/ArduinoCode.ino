
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#include "faces.h"

// If using software SPI (the default case):
#define OLED_MOSI   9
#define OLED_CLK   10
#define OLED_DC    11
#define OLED_CS    12
#define OLED_RESET 8
Adafruit_SSD1306 display(OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);

#define NUMFLAKES 10
#define XPOS 0
#define YPOS 1
#define DELTAY 2
#define LOGO16_GLCD_HEIGHT 16 
#define LOGO16_GLCD_WIDTH  16 

#if (SSD1306_LCDHEIGHT != 64)
#error("Height incorrect, please fix Adafruit_SSD1306.h!");
#endif

int state = -1;

void setup() {
  Serial.begin(9600);

  display.begin(SSD1306_SWITCHCAPVCC);

  setState(0);
}


void loop() {

}

void serialEvent() {
  while (Serial.available()) {

    char val = (char)Serial.read();

    if (val == '0') {
      setState(0);
    } 
    else if (val == '1') {
      setState(1);
    } 
    else if (val == '2') {
      setState(2);
    } 
    else if (val == '3') {
      setState(3);
    }
    else if (val == '4') {
      setState(4);
    }
  }
}

void setState(int newState) {
  if(state == newState) return;
  else state = newState;

  display.clearDisplay();
  if(state == 0) {
    display.drawBitmap(0, 0, faceZero, 128, 64, 1);
  } 
  else if(state == 1) {
    display.drawBitmap(0, 0, faceOne, 128, 64, 1);
  } 
  else if(state == 2) {
    display.drawBitmap(0, 0, faceTwo, 128, 64, 1);
  } 
  else if(state == 3) {
    display.drawBitmap(0, 0, faceThree, 128, 64, 1);
  }
  else if(state == 4) {
    display.drawBitmap(0, 0, faceFour, 128, 64, 1);
  }
  display.display();
}


