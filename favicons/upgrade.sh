#!/bin/bash

set -e

BASE_DIR="$(dirname "$0")"

for DOMAIN in $@; do
	DOMAIN="${DOMAIN%.*}"
	echo "processing $DOMAIN... " >&2
	TEMP_FILE="$BASE_DIR/$DOMAIN"
	curl --location --silent "https://www.google.com/s2/favicons?domain=$DOMAIN&sz=16" > "$TEMP_FILE"
	case "$(file "$TEMP_FILE")" in
	*'PNG image data'*)
		mogrify -strip "$TEMP_FILE"
		mv "$TEMP_FILE" "$BASE_DIR/$DOMAIN.png"
		;;
	*)
		echo "$BASE_DIR/$DOMAIN is not a PNG" >&2
		continue
		;;
	esac
done
