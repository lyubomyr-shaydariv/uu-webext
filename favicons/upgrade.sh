#!/bin/bash

set -euo pipefail

BASE_DIR="$(dirname -- $(readlink -f -- "$0"))"

for FAVICON in "$@"; do
	DOMAIN="${FAVICON%.*}"
	echo "processing $DOMAIN... " >&2
	TEMP_FILE="$BASE_DIR/$DOMAIN"
	curl --location --silent "https://www.google.com/s2/favicons?domain=$DOMAIN&sz=16" > "$TEMP_FILE"
	FILE_TYPE="$(file "$TEMP_FILE")"
	case "$FILE_TYPE" in
	*'JPEG image data'*)
		echo "$DOMAIN provided a JPEG favicon" >&2
		mogrify -strip "$TEMP_FILE"
		mv "$TEMP_FILE" "$BASE_DIR/$DOMAIN.jpg"
		;;
	*'PNG image data'*)
		mogrify -strip "$TEMP_FILE"
		mv "$TEMP_FILE" "$BASE_DIR/$DOMAIN.png"
		;;
	*)
		echo "cannot determine file type of $BASE_DIR/$DOMAIN ($FILE_TYPE)" >&2
		continue
		;;
	esac
done
