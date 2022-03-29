#!/bin/bash

set -e

BASE_DIR="$(dirname "$0")"

while read -r DOMAIN; do
	DOMAIN="${DOMAIN%.*}"
	echo -n "processing $DOMAIN... "
	TEMP_FILE="$BASE_DIR/$DOMAIN"
	curl --location --silent "https://www.google.com/s2/favicons?domain=$DOMAIN&sz=16" > "$TEMP_FILE"
	case "$(file "$TEMP_FILE")" in
	*'PNG image data'*)
		mv "$TEMP_FILE" "$BASE_DIR/$DOMAIN.png"
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
