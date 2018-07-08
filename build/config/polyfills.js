import Map from 'babel-runtime/core-js/map';
import Set from 'babel-runtime/core-js/set';
import Promise from 'babel-runtime/core-js/promise';

if (typeof window.Set === 'undefined') {
  window.Set = Set;
}

if (typeof window.Map === 'undefined') {
  window.Map = Map;
}

if (typeof window.Promise === 'undefined') {
  window.Promise = Promise;
}