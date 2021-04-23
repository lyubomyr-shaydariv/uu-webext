#!/bin/bash

set -e

BASE_DIR="$(dirname "$0")"

while read -r DOMAIN; do
	echo -n "processing $DOMAIN... "
	curl --silent "https://www.google.com/s2/favicons?domain=$DOMAIN&sz=16" > "$BASE_DIR/$DOMAIN"
	case "$(file "$BASE_DIR/$DOMAIN")" in
	*'PNG image data'*)
		mv "$BASE_DIR/$DOMAIN" "$BASE_DIR/$DOMAIN.png"
		;;
	*)
		echo "TODO: $BASE_DIR/$DOMAIN is not a PNG" >&2
		exit 1
		;;
	esac
	echo 'OK'
done < "$BASE_DIR/favicons.lst"
echo 'done!'
