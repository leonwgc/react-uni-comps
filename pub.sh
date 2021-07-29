#!/bin/bash
set -e

if [[ -z $1 ]]; then
  echo "version: "
  read -r ver
else
  ver=$1
fi

  # publish
 git tag "$ver"

if [[ $? != 0 ]]; then
	echo "$ver exists" 
	exit 1
else
	echo "tag $ver created"
fi

 git push origin "$ver"

 if [[ $? != 0 ]]; then
	echo "failed to push tag $ver" 
	exit 1
else
	echo "tag $ver pushed to remote"
fi

npm publish
