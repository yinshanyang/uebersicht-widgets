tell application "Spotify"
  if it is running then
    set _artist to artist of current track as string
    set _track to name of current track as string
    set _state to player state of application "Spotify"
    return _track & "\n" & _artist & "\n" & _state
  else
  end if
end tell
