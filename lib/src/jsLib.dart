import 'dart:io';

typedef Auto = dynamic;
Auto GetTermialLength() {
  stdout.terminalColumns;
}

Auto GetTermialHieght() {
  stdout.terminalLines;
}

Auto alert(String msg) {
  if (Platform.isWindows) {
    //clear the console screen
    stdout.write('\x1B[2J\x1B[0;0H');
    //write the message to center of the screen
    stdout.write('\x1B[10;10H$msg');
    //wait for user to press enter
    stdout.write('\x1B[11;10HPress Enter to continue');
    stdin.readLineSync();
  }
  if (Platform.isLinux) {
    //clear the console screen
    stdout.write('\x1B[2J\x1B[0;0H');
    //write the message to center of the screen
    stdout.write('\x1B[10;10H$msg');

    //wait for user to press enter
    stdout.write('\x1B[11;10HPress Enter to continue');
    stdin.readLineSync();
  }
}
