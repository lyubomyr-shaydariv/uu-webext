package lsh.uu.core;

import java.util.function.Predicate;

public abstract class ALiteral
		implements Predicate<String> {

	public abstract boolean matches(String s);

	@Override
	public final boolean test(final String s) {
		return matches(s);
	}

}
