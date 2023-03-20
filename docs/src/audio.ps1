#https://stackoverflow.com/a/73367897
$MediaPlayer = [Windows.Media.Playback.MediaPlayer, Windows.Media, ContentType = WindowsRuntime]::New()
$MediaPlayer.Source = [Windows.Media.Core.MediaSource]::CreateFromUri('https://github.com/SithLor/timmy/raw/main/timmy.mp3')
$MediaPlayer.Play()
