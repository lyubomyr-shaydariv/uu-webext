#!/bin/bash

set -e

BASE_DIR="$(dirname "$0")"

for DOMAIN in $@; do
	DOMAIN="${DOMAIN%.*}"
	echo "processing $DOMAIN... " >&2
	TEMP_FILE="$BASE_DIR/$DOMAIN"
	curl --location --silent "https://www.google.com/s2/favicons?domain=$DOMAIN&sz=16" > "$TEMP_FILE"
	FILE_TYPE="$(file "$TEMP_FILE")"
	case "$FILE_TYPE" in
	*'JPEG image data'*)
		mogrify -strip "$TEMP_FILE"
		mv "$TEMP_FILE" "$BASE_DIR/$DOMAIN.jpg"
		;;
	*'PNG image data'*)
		mogrify -strip "$TEMP_FILE"
		mv "$TEMP_FILE" "$BASE_DIR/$DOMAIN.png"
		;;
	*)
		echo "cannot determine file type of $BASE_DIR/$DOMAIN" >&2
		echo "$FILE_TYPE" >&2
		continue
		;;
	esac
done
