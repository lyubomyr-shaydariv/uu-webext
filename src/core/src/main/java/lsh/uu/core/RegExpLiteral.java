package lsh.uu.core;

import java.util.regex.Pattern;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE, staticName = "of")
public final class RegExpLiteral
		extends APrimitiveLiteral {

	private final Pattern pattern;

	@Override
	public boolean matches(final String s) {
		return pattern.matcher(s)
				.matches();
	}

}
