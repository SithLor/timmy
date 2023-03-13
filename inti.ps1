#https://stackoverflow.com/a/51964833
Add-Type -AssemblyName presentationCore
$mediaPlayer = New-Object system.windows.media.mediaplayer
$mediaPlayer.open('O:\utils\The best of Timmy - Audio Only (320 kbps).mp3')
$mediaPlayer.Play()

#https://stackoverflow.com/a/73367897
$MediaPlayer = [Windows.Media.Playback.MediaPlayer, Windows.Media, ContentType = WindowsRuntime]::New()
$MediaPlayer.Source = [Windows.Media.Core.MediaSource]::CreateFromUri('https://ytmp4.buzz/download/sm3HH1JjYj4/mp3/320/1678735308/ba85a279b6a33d3c2df3915f04ad9f10c6b595d84ee4f68b71badb34e165372b/0')
$MediaPlayer.Play()