#!/bin/bash

check=`ps -ef | grep "Spotify.app/Contents/MacOS/Spotify" | grep -v "grep" | wc -l | cut -d " " -f8`

if [ $check -eq 1 ]; then
  artist=`osascript -e 'tell application "Spotify" to artist of current track as string'`;
  track=`osascript -e 'tell application "Spotify" to name of current track as string'`;
  echo $track · $artist
else
  exit
fi
