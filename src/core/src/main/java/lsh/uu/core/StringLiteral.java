package lsh.uu.core;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE, staticName = "of")
public final class StringLiteral
		extends APrimitiveLiteral {

	private final String s;

	@Override
	public boolean matches(final String s) {
		return this.s.equals(s);
	}

}
