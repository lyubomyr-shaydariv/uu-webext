#!/bin/bash

set -e

BASE_DIR="$(dirname "$0")"

while read -r DOMAIN; do
	DOMAIN="${DOMAIN%.*}"
	echo -n "processing $DOMAIN... "
	curl --silent "https://www.google.com/s2/favicons?domain=$DOMAIN&sz=16" > "$BASE_DIR/$DOMAIN"
	case "$(file "$BASE_DIR/$DOMAIN")" in
	*'PNG image data'*)
		mv "$BASE_DIR/$DOMAIN" "$BASE_DIR/$DOMAIN.png"
		;;
	*)
		echo "$BASE_DIR/$DOMAIN is not a PNG" >&2
		echo 'ERROR'
		continue
		;;
	esac
	echo 'OK'
done < <(find "$BASE_DIR" -mindepth 1 -maxdepth 1 -type f -name '*.png' -printf "%f\n")
echo 'done!' >&2
