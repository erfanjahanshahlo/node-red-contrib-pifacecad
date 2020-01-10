import pifacecad
import sys

def pin_status_changed(event):
    print("true")
    exit()

cad = pifacecad.PiFaceCAD()
listener = pifacecad.SwitchEventListener(chip=cad)
listener.register(int(sys.argv[1]), pifacecad.IODIR_FALLING_EDGE, pin_status_changed)
listener.activate()