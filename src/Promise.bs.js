'use strict';

var React = require("react");
var Mutable$ReUse = require("./Mutable.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function use(param) {
  var mounted = Mutable$ReUse.use(false);
  IsomorphicEffect$ReUse.use(function (param) {
        mounted.contents = true;
        return (function (param) {
                  mounted.contents = false;
                  
                });
      });
  return React.useCallback(function (promise) {
              return new Promise((function (resolve, reject) {
                            promise.then(function (value) {
                                    if (mounted.contents) {
                                      resolve(value);
                                    }
                                    return Promise.resolve(value);
                                  }).catch(function (error) {
                                  if (mounted.contents) {
                                    reject(error);
                                  }
                                  return Promise.reject(error);
                                });
                            
                          }));
            });
}

function use0(param) {
  var mounted = Mutable$ReUse.use(false);
  IsomorphicEffect$ReUse.use0(function (param) {
        mounted.contents = true;
        return (function (param) {
                  mounted.contents = false;
                  
                });
      });
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then(function (value) {
                                      if (mounted.contents) {
                                        resolve(value);
                                      }
                                      return Promise.resolve(value);
                                    }).catch(function (error) {
                                    if (mounted.contents) {
                                      reject(error);
                                    }
                                    return Promise.reject(error);
                                  });
                              
                            }));
              }), []);
}

function use1(deps) {
  var mounted = Mutable$ReUse.use(false);
  IsomorphicEffect$ReUse.use1((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then(function (value) {
                                      if (mounted.contents) {
                                        resolve(value);
                                      }
                                      return Promise.resolve(value);
                                    }).catch(function (error) {
                                    if (mounted.contents) {
                                      reject(error);
                                    }
                                    return Promise.reject(error);
                                  });
                              
                            }));
              }), deps);
}

function use2(deps) {
  var mounted = Mutable$ReUse.use(false);
  IsomorphicEffect$ReUse.use2((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then(function (value) {
                                      if (mounted.contents) {
                                        resolve(value);
                                      }
                                      return Promise.resolve(value);
                                    }).catch(function (error) {
                                    if (mounted.contents) {
                                      reject(error);
                                    }
                                    return Promise.reject(error);
                                  });
                              
                            }));
              }), deps);
}

function use3(deps) {
  var mounted = Mutable$ReUse.use(false);
  IsomorphicEffect$ReUse.use3((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then(function (value) {
                                      if (mounted.contents) {
                                        resolve(value);
                                      }
                                      return Promise.resolve(value);
                                    }).catch(function (error) {
                                    if (mounted.contents) {
                                      reject(error);
                                    }
                                    return Promise.reject(error);
                                  });
                              
                            }));
              }), deps);
}

function use4(deps) {
  var mounted = Mutable$ReUse.use(false);
  IsomorphicEffect$ReUse.use4((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then(function (value) {
                                      if (mounted.contents) {
                                        resolve(value);
                                      }
                                      return Promise.resolve(value);
                                    }).catch(function (error) {
                                    if (mounted.contents) {
                                      reject(error);
                                    }
                                    return Promise.reject(error);
                                  });
                              
                            }));
              }), deps);
}

function use5(deps) {
  var mounted = Mutable$ReUse.use(false);
  IsomorphicEffect$ReUse.use5((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then(function (value) {
                                      if (mounted.contents) {
                                        resolve(value);
                                      }
                                      return Promise.resolve(value);
                                    }).catch(function (error) {
                                    if (mounted.contents) {
                                      reject(error);
                                    }
                                    return Promise.reject(error);
                                  });
                              
                            }));
              }), deps);
}

function use6(deps) {
  var mounted = Mutable$ReUse.use(false);
  IsomorphicEffect$ReUse.use6((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then(function (value) {
                                      if (mounted.contents) {
                                        resolve(value);
                                      }
                                      return Promise.resolve(value);
                                    }).catch(function (error) {
                                    if (mounted.contents) {
                                      reject(error);
                                    }
                                    return Promise.reject(error);
                                  });
                              
                            }));
              }), deps);
}

function use7(deps) {
  var mounted = Mutable$ReUse.use(false);
  IsomorphicEffect$ReUse.use7((function (param) {
          mounted.contents = true;
          return (function (param) {
                    mounted.contents = false;
                    
                  });
        }), deps);
  return React.useCallback((function (promise) {
                return new Promise((function (resolve, reject) {
                              promise.then(function (value) {
                                      if (mounted.contents) {
                                        resolve(value);
                                      }
                                      return Promise.resolve(value);
                                    }).catch(function (error) {
                                    if (mounted.contents) {
                                      reject(error);
                                    }
                                    return Promise.reject(error);
                                  });
                              
                            }));
              }), deps);
}

exports.use = use;
exports.use0 = use0;
exports.use1 = use1;
exports.use2 = use2;
exports.use3 = use3;
exports.use4 = use4;
exports.use5 = use5;
exports.use6 = use6;
exports.use7 = use7;
/* react Not a pure module */
