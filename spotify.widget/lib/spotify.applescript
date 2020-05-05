tell application "Spotify"
  if it is running then
    set _artist to artist of current track as string
    set _track to name of current track as string
    return _track & "\n" & _artist
  else
  end if
end tell
