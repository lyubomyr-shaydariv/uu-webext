package lsh.uu.core;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE, staticName = "of")
public final class PrefixSplitLiteral
		extends APrimitiveLiteral {

	private final String prefix;

	@Override
	public boolean matches(final String s) {
		return s.startsWith(prefix);
	}

}
