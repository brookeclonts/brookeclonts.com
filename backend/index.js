// Handle promises with no catch statements
// This should produce errors to prevent potential memory leaks
// https://github.com/mcollina/make-promises-safe
import 'make-promises-safe';
// Support Source Maps
import 'source-map-support/register';
import Service from './service';
import runService from './runService';

// Kick off server!
runService(Service());