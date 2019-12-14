'use strict';

var React = require("react");
var Mutable$ReUse = require("./Mutable.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function call(param) {
  var mounted = Mutable$ReUse.call(false);
  IsomorphicEffect$ReUse.call((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    return /* () */0;
                  });
        }));
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then((function (value) {
                                        if (mounted.contents) {
                                          resolve(value);
                                        }
                                        return Promise.resolve(value);
                                      })).catch((function (error) {
                                      if (mounted.contents) {
                                        reject(error);
                                      }
                                      return Promise.reject(error);
                                    }));
                              return /* () */0;
                            }));
              }));
}

function call0(param) {
  var mounted = Mutable$ReUse.call(false);
  IsomorphicEffect$ReUse.call0((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    return /* () */0;
                  });
        }));
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then((function (value) {
                                        if (mounted.contents) {
                                          resolve(value);
                                        }
                                        return Promise.resolve(value);
                                      })).catch((function (error) {
                                      if (mounted.contents) {
                                        reject(error);
                                      }
                                      return Promise.reject(error);
                                    }));
                              return /* () */0;
                            }));
              }), ([]));
}

function call1(deps) {
  var mounted = Mutable$ReUse.call(false);
  IsomorphicEffect$ReUse.call1((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    return /* () */0;
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then((function (value) {
                                        if (mounted.contents) {
                                          resolve(value);
                                        }
                                        return Promise.resolve(value);
                                      })).catch((function (error) {
                                      if (mounted.contents) {
                                        reject(error);
                                      }
                                      return Promise.reject(error);
                                    }));
                              return /* () */0;
                            }));
              }), deps);
}

function call2(deps) {
  var mounted = Mutable$ReUse.call(false);
  IsomorphicEffect$ReUse.call2((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    return /* () */0;
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then((function (value) {
                                        if (mounted.contents) {
                                          resolve(value);
                                        }
                                        return Promise.resolve(value);
                                      })).catch((function (error) {
                                      if (mounted.contents) {
                                        reject(error);
                                      }
                                      return Promise.reject(error);
                                    }));
                              return /* () */0;
                            }));
              }), deps);
}

function call3(deps) {
  var mounted = Mutable$ReUse.call(false);
  IsomorphicEffect$ReUse.call3((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    return /* () */0;
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then((function (value) {
                                        if (mounted.contents) {
                                          resolve(value);
                                        }
                                        return Promise.resolve(value);
                                      })).catch((function (error) {
                                      if (mounted.contents) {
                                        reject(error);
                                      }
                                      return Promise.reject(error);
                                    }));
                              return /* () */0;
                            }));
              }), deps);
}

function call4(deps) {
  var mounted = Mutable$ReUse.call(false);
  IsomorphicEffect$ReUse.call4((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    return /* () */0;
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then((function (value) {
                                        if (mounted.contents) {
                                          resolve(value);
                                        }
                                        return Promise.resolve(value);
                                      })).catch((function (error) {
                                      if (mounted.contents) {
                                        reject(error);
                                      }
                                      return Promise.reject(error);
                                    }));
                              return /* () */0;
                            }));
              }), deps);
}

function call5(deps) {
  var mounted = Mutable$ReUse.call(false);
  IsomorphicEffect$ReUse.call5((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    return /* () */0;
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then((function (value) {
                                        if (mounted.contents) {
                                          resolve(value);
                                        }
                                        return Promise.resolve(value);
                                      })).catch((function (error) {
                                      if (mounted.contents) {
                                        reject(error);
                                      }
                                      return Promise.reject(error);
                                    }));
                              return /* () */0;
                            }));
              }), deps);
}

function call6(deps) {
  var mounted = Mutable$ReUse.call(false);
  IsomorphicEffect$ReUse.call6((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    return /* () */0;
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then((function (value) {
                                        if (mounted.contents) {
                                          resolve(value);
                                        }
                                        return Promise.resolve(value);
                                      })).catch((function (error) {
                                      if (mounted.contents) {
                                        reject(error);
                                      }
                                      return Promise.reject(error);
                                    }));
                              return /* () */0;
                            }));
              }), deps);
}

function call7(deps) {
  var mounted = Mutable$ReUse.call(false);
  IsomorphicEffect$ReUse.call7((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    return /* () */0;
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then((function (value) {
                                        if (mounted.contents) {
                                          resolve(value);
                                        }
                                        return Promise.resolve(value);
                                      })).catch((function (error) {
                                      if (mounted.contents) {
                                        reject(error);
                                      }
                                      return Promise.reject(error);
                                    }));
                              return /* () */0;
                            }));
              }), deps);
}

exports.call = call;
exports.call0 = call0;
exports.call1 = call1;
exports.call2 = call2;
exports.call3 = call3;
exports.call4 = call4;
exports.call5 = call5;
exports.call6 = call6;
exports.call7 = call7;
/* react Not a pure module */
