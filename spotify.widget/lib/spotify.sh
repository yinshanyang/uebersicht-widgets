#!/bin/bash
PWD=`pwd`
echo $PWD

echo $PWD/spotify.applescript

# check=`ps -ef | grep "Spotify.app/Contents/MacOS/Spotify" | grep -v "grep" | wc -l | cut -d " " -f8`

# if [ $check -eq 1 ]; then
#   state=`osascript -e 'tell application "Spotify" to player state as string'`
#   artist=`osascript -e 'tell application "Spotify" to artist of current track as string'`;
#   track=`osascript -e 'tell application "Spotify" to name of current track as string'`;
#   if [ $state = "playing" ]; then
#     echo $track
#     echo $artist
#   else
#     exit
#   fi
# else
#   exit
# fi
