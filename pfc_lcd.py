import pifacecad
import sys

try:
    text_splited = sys.argv[1].split(":")
    rowcol = text_splited[0].split(",")
    text = text_splited[1]
    text = text.replace("#/@$%", " ")
except:
    raise TypeError("The sended text is not correct")
cad = pifacecad.PiFaceCAD()
cad.lcd.backlight_on()
cad.lcd.cursor_off()
cad.lcd.set_cursor = (int(rowcol[1])-1, int(rowcol[0])-1)
if (text):
    cad.lcd.write(unicode(text))
else:
    cad.lcd.clear()

