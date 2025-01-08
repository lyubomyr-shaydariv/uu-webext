package lsh.uu.core;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE, staticName = "of")
public final class SuffixLiteral
		extends APrimitiveLiteral {

	private final String suffix;

	@Override
	public boolean matches(final String s) {
		return s.endsWith(suffix);
	}

}
