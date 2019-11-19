var React = require('react');

var useIsomorphicEffect = typeof window === 'undefined'
  ? React.useEffect
  : React.useLayoutEffect
;

module.export = useIsomorphicEffect;