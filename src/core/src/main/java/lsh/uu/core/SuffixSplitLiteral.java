package lsh.uu.core;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE, staticName = "of")
public final class SuffixSplitLiteral
		extends APrimitiveLiteral {

	@Override
	public boolean matches(final String s) {
		throw new AssertionError("what was this for?");
	}

}
