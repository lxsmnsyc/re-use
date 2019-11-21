var React = require('react');

var useIsomorphicEffect = function (effect, deps) {
  (typeof window === 'undefined'
    ? React.useEffect
    : React.useLayoutEffect)(effect, deps)
}

module.export = useIsomorphicEffect;