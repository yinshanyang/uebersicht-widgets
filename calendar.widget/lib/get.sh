#!/bin/bash

dirname=$(cd "$(dirname "$0")"; pwd)
previous=`touch "${dirname}"/store/ctag && cat "${dirname}"/store/ctag`
current=`/usr/local/bin/http PROPFIND https://me@yinshanyang.com:qdbj-btyx-smcn-qtbo@p52-caldav.icloud.com/296786074/calendars/5F9858E6-3F68-4C62-8AF7-55EE96DA3EA7/ --verbose < "${dirname}"/payloads/get-calendar-information | grep \<getctag | awk '{$1=$1};1'`
month=`date +"%Y%m"`

if [ "$previous" == "$current" ]; then
  #* same
  # - then we will print the previously stored data
  cat "${dirname}"/store/items | grep :${month}
else
  #* different
  # - then we will pull the data again, and
  # - then store the data unto disk
  # - then return the data
  /usr/local/bin/http REPORT https://me@yinshanyang.com:qdbj-btyx-smcn-qtbo@p52-caldav.icloud.com/296786074/calendars/5F9858E6-3F68-4C62-8AF7-55EE96DA3EA7/ Depth:1 --verbose < "${dirname}"/payloads/get-calendar-items | grep DTSTART | grep :20[0-9][0-9] > "${dirname}"/store/items
  cat "${dirname}"/store/items | grep :${month}
fi

echo '***'
cal


# store current state in a file
echo ${current} > "${dirname}"/store/ctag
