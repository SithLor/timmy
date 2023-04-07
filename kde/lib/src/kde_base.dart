// TODO: Put public facing types in this file.
int DebugFlag = 0;

void CreateMsgBox(String title, String message, String icon) {
  if (DebugFlag == 1) {
    print('title: $title');
    print('message: $message');
    print('icon: $icon');
  }
  if (title == null) {
    throw ArgumentError.notNull('title');
  }
  if (message == null) {
    throw ArgumentError.notNull('message');
  }
  if (icon == null) {
    throw ArgumentError.notNull('icon');
  }
  
  if (title == '') {
    throw ArgumentError.value(title, 'title', 'title cannot be empty');
  }
  if (message == '') {
    throw ArgumentError.value(message, 'message', 'message cannot be empty');
  }
  if (icon == '') {
    throw ArgumentError.value(icon, 'icon', 'icon cannot be empty');
  }

}