var React = require('react');

var useIsomorphicEffect = typeof window === 'undefined'
  ? React.useLayoutEffect
  : React.useEffect
;

module.export = useIsomorphicEffect;