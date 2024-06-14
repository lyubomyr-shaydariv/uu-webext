const DEFAULT_DOMAIN_RULES = [
  new DomainRule({
    domainMatcher: new DomainMatcher('gitlab.com', {
      endsWith: true,
    }),
    blacklist: ['ref'],
    whitelist: ALL_TRACKERS,
  }),
  new DomainRule({
    domainMatcher: new DomainMatcher('steampowered.com', {
      endsWith: true,
    }),
    blacklist: ['ref'],
    whitelist: ALL_TRACKERS,
  })
];
