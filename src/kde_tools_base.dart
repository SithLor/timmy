typedef MessageTittle = String;
typedef MessageBody = String;
typedef MessageIcon = String;
const int debug = 1;

void CreateMessage(MessageTittle tittle, MessageBody body, MessageIcon icon) {
  // ignore: avoid_print
  if (debug == 1){
    print('Function:CreateMessage Tittle: $tittle Body: $body Icon: $icon');
  }

}