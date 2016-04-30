/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "../dist/app.bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(6);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	//  Ramda v0.21.0
	//  https://github.com/ramda/ramda
	//  (c) 2013-2016 Scott Sauyet, Michael Hurley, and David Chambers
	//  Ramda may be freely distributed under the MIT license.

	;(function() {

	  'use strict';

	  /**
	     * A special placeholder value used to specify "gaps" within curried functions,
	     * allowing partial application of any combination of arguments, regardless of
	     * their positions.
	     *
	     * If `g` is a curried ternary function and `_` is `R.__`, the following are
	     * equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2, _)(1, 3)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @constant
	     * @memberOf R
	     * @since v0.6.0
	     * @category Function
	     * @example
	     *
	     *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
	     *      greet('Alice'); //=> 'Hello, Alice!'
	     */
	    var __ = { '@@functional/placeholder': true };

	    /* eslint-disable no-unused-vars */
	    var _arity = function _arity(n, fn) {
	        /* eslint-disable no-unused-vars */
	        switch (n) {
	        case 0:
	            return function () {
	                return fn.apply(this, arguments);
	            };
	        case 1:
	            return function (a0) {
	                return fn.apply(this, arguments);
	            };
	        case 2:
	            return function (a0, a1) {
	                return fn.apply(this, arguments);
	            };
	        case 3:
	            return function (a0, a1, a2) {
	                return fn.apply(this, arguments);
	            };
	        case 4:
	            return function (a0, a1, a2, a3) {
	                return fn.apply(this, arguments);
	            };
	        case 5:
	            return function (a0, a1, a2, a3, a4) {
	                return fn.apply(this, arguments);
	            };
	        case 6:
	            return function (a0, a1, a2, a3, a4, a5) {
	                return fn.apply(this, arguments);
	            };
	        case 7:
	            return function (a0, a1, a2, a3, a4, a5, a6) {
	                return fn.apply(this, arguments);
	            };
	        case 8:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	                return fn.apply(this, arguments);
	            };
	        case 9:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	                return fn.apply(this, arguments);
	            };
	        case 10:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                return fn.apply(this, arguments);
	            };
	        default:
	            throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	        }
	    };

	    var _arrayFromIterator = function _arrayFromIterator(iter) {
	        var list = [];
	        var next;
	        while (!(next = iter.next()).done) {
	            list.push(next.value);
	        }
	        return list;
	    };

	    var _arrayOf = function _arrayOf() {
	        return Array.prototype.slice.call(arguments);
	    };

	    var _cloneRegExp = function _cloneRegExp(pattern) {
	        return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
	    };

	    var _complement = function _complement(f) {
	        return function () {
	            return !f.apply(this, arguments);
	        };
	    };

	    /**
	     * Private `concat` function to merge two array-like objects.
	     *
	     * @private
	     * @param {Array|Arguments} [set1=[]] An array-like object.
	     * @param {Array|Arguments} [set2=[]] An array-like object.
	     * @return {Array} A new, merged array.
	     * @example
	     *
	     *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	     */
	    var _concat = function _concat(set1, set2) {
	        set1 = set1 || [];
	        set2 = set2 || [];
	        var idx;
	        var len1 = set1.length;
	        var len2 = set2.length;
	        var result = [];
	        idx = 0;
	        while (idx < len1) {
	            result[result.length] = set1[idx];
	            idx += 1;
	        }
	        idx = 0;
	        while (idx < len2) {
	            result[result.length] = set2[idx];
	            idx += 1;
	        }
	        return result;
	    };

	    var _containsWith = function _containsWith(pred, x, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (pred(x, list[idx])) {
	                return true;
	            }
	            idx += 1;
	        }
	        return false;
	    };

	    var _filter = function _filter(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [];
	        while (idx < len) {
	            if (fn(list[idx])) {
	                result[result.length] = list[idx];
	            }
	            idx += 1;
	        }
	        return result;
	    };

	    var _forceReduced = function _forceReduced(x) {
	        return {
	            '@@transducer/value': x,
	            '@@transducer/reduced': true
	        };
	    };

	    // String(x => x) evaluates to "x => x", so the pattern may not match.
	    var _functionName = function _functionName(f) {
	        // String(x => x) evaluates to "x => x", so the pattern may not match.
	        var match = String(f).match(/^function (\w*)/);
	        return match == null ? '' : match[1];
	    };

	    var _has = function _has(prop, obj) {
	        return Object.prototype.hasOwnProperty.call(obj, prop);
	    };

	    var _identity = function _identity(x) {
	        return x;
	    };

	    var _isArguments = function () {
	        var toString = Object.prototype.toString;
	        return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
	            return toString.call(x) === '[object Arguments]';
	        } : function _isArguments(x) {
	            return _has('callee', x);
	        };
	    }();

	    /**
	     * Tests whether or not an object is an array.
	     *
	     * @private
	     * @param {*} val The object to test.
	     * @return {Boolean} `true` if `val` is an array, `false` otherwise.
	     * @example
	     *
	     *      _isArray([]); //=> true
	     *      _isArray(null); //=> false
	     *      _isArray({}); //=> false
	     */
	    var _isArray = Array.isArray || function _isArray(val) {
	        return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
	    };

	    var _isFunction = function _isNumber(x) {
	        return Object.prototype.toString.call(x) === '[object Function]';
	    };

	    /**
	     * Determine if the passed argument is an integer.
	     *
	     * @private
	     * @param {*} n
	     * @category Type
	     * @return {Boolean}
	     */
	    var _isInteger = Number.isInteger || function _isInteger(n) {
	        return n << 0 === n;
	    };

	    var _isNumber = function _isNumber(x) {
	        return Object.prototype.toString.call(x) === '[object Number]';
	    };

	    var _isObject = function _isObject(x) {
	        return Object.prototype.toString.call(x) === '[object Object]';
	    };

	    var _isPlaceholder = function _isPlaceholder(a) {
	        return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
	    };

	    var _isRegExp = function _isRegExp(x) {
	        return Object.prototype.toString.call(x) === '[object RegExp]';
	    };

	    var _isString = function _isString(x) {
	        return Object.prototype.toString.call(x) === '[object String]';
	    };

	    var _isTransformer = function _isTransformer(obj) {
	        return typeof obj['@@transducer/step'] === 'function';
	    };

	    var _map = function _map(fn, functor) {
	        var idx = 0;
	        var len = functor.length;
	        var result = Array(len);
	        while (idx < len) {
	            result[idx] = fn(functor[idx]);
	            idx += 1;
	        }
	        return result;
	    };

	    // Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	    var _objectAssign = function _objectAssign(target) {
	        if (target == null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	        var output = Object(target);
	        var idx = 1;
	        var length = arguments.length;
	        while (idx < length) {
	            var source = arguments[idx];
	            if (source != null) {
	                for (var nextKey in source) {
	                    if (_has(nextKey, source)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	            idx += 1;
	        }
	        return output;
	    };

	    var _of = function _of(x) {
	        return [x];
	    };

	    var _pipe = function _pipe(f, g) {
	        return function () {
	            return g.call(this, f.apply(this, arguments));
	        };
	    };

	    var _pipeP = function _pipeP(f, g) {
	        return function () {
	            var ctx = this;
	            return f.apply(ctx, arguments).then(function (x) {
	                return g.call(ctx, x);
	            });
	        };
	    };

	    // \b matches word boundary; [\b] matches backspace
	    var _quote = function _quote(s) {
	        var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b')    // \b matches word boundary; [\b] matches backspace
	    .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
	        return '"' + escaped.replace(/"/g, '\\"') + '"';
	    };

	    var _reduced = function _reduced(x) {
	        return x && x['@@transducer/reduced'] ? x : {
	            '@@transducer/value': x,
	            '@@transducer/reduced': true
	        };
	    };

	    /**
	     * An optimized, private array `slice` implementation.
	     *
	     * @private
	     * @param {Arguments|Array} args The array or arguments object to consider.
	     * @param {Number} [from=0] The array index to slice from, inclusive.
	     * @param {Number} [to=args.length] The array index to slice to, exclusive.
	     * @return {Array} A new, sliced array.
	     * @example
	     *
	     *      _slice([1, 2, 3, 4, 5], 1, 3); //=> [2, 3]
	     *
	     *      var firstThreeArgs = function(a, b, c, d) {
	     *        return _slice(arguments, 0, 3);
	     *      };
	     *      firstThreeArgs(1, 2, 3, 4); //=> [1, 2, 3]
	     */
	    var _slice = function _slice(args, from, to) {
	        switch (arguments.length) {
	        case 1:
	            return _slice(args, 0, args.length);
	        case 2:
	            return _slice(args, from, args.length);
	        default:
	            var list = [];
	            var idx = 0;
	            var len = Math.max(0, Math.min(args.length, to) - from);
	            while (idx < len) {
	                list[idx] = args[from + idx];
	                idx += 1;
	            }
	            return list;
	        }
	    };

	    /**
	     * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
	     */
	    var _toISOString = function () {
	        var pad = function pad(n) {
	            return (n < 10 ? '0' : '') + n;
	        };
	        return typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
	            return d.toISOString();
	        } : function _toISOString(d) {
	            return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
	        };
	    }();

	    var _xfBase = {
	        init: function () {
	            return this.xf['@@transducer/init']();
	        },
	        result: function (result) {
	            return this.xf['@@transducer/result'](result);
	        }
	    };

	    var _xwrap = function () {
	        function XWrap(fn) {
	            this.f = fn;
	        }
	        XWrap.prototype['@@transducer/init'] = function () {
	            throw new Error('init not implemented on XWrap');
	        };
	        XWrap.prototype['@@transducer/result'] = function (acc) {
	            return acc;
	        };
	        XWrap.prototype['@@transducer/step'] = function (acc, x) {
	            return this.f(acc, x);
	        };
	        return function _xwrap(fn) {
	            return new XWrap(fn);
	        };
	    }();

	    var _aperture = function _aperture(n, list) {
	        var idx = 0;
	        var limit = list.length - (n - 1);
	        var acc = new Array(limit >= 0 ? limit : 0);
	        while (idx < limit) {
	            acc[idx] = _slice(list, idx, idx + n);
	            idx += 1;
	        }
	        return acc;
	    };

	    var _assign = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

	    /**
	     * Similar to hasMethod, this checks whether a function has a [methodname]
	     * function. If it isn't an array it will execute that function otherwise it
	     * will default to the ramda implementation.
	     *
	     * @private
	     * @param {Function} fn ramda implemtation
	     * @param {String} methodname property to check for a custom implementation
	     * @return {Object} Whatever the return value of the method is.
	     */
	    var _checkForMethod = function _checkForMethod(methodname, fn) {
	        return function () {
	            var length = arguments.length;
	            if (length === 0) {
	                return fn();
	            }
	            var obj = arguments[length - 1];
	            return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, _slice(arguments, 0, length - 1));
	        };
	    };

	    /**
	     * Optimized internal one-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry1 = function _curry1(fn) {
	        return function f1(a) {
	            if (arguments.length === 0 || _isPlaceholder(a)) {
	                return f1;
	            } else {
	                return fn.apply(this, arguments);
	            }
	        };
	    };

	    /**
	     * Optimized internal two-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry2 = function _curry2(fn) {
	        return function f2(a, b) {
	            switch (arguments.length) {
	            case 0:
	                return f2;
	            case 1:
	                return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
	                    return fn(a, _b);
	                });
	            default:
	                return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
	                    return fn(_a, b);
	                }) : _isPlaceholder(b) ? _curry1(function (_b) {
	                    return fn(a, _b);
	                }) : fn(a, b);
	            }
	        };
	    };

	    /**
	     * Optimized internal three-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry3 = function _curry3(fn) {
	        return function f3(a, b, c) {
	            switch (arguments.length) {
	            case 0:
	                return f3;
	            case 1:
	                return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
	                    return fn(a, _b, _c);
	                });
	            case 2:
	                return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
	                    return fn(_a, b, _c);
	                }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
	                    return fn(a, _b, _c);
	                }) : _curry1(function (_c) {
	                    return fn(a, b, _c);
	                });
	            default:
	                return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
	                    return fn(_a, _b, c);
	                }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
	                    return fn(_a, b, _c);
	                }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
	                    return fn(a, _b, _c);
	                }) : _isPlaceholder(a) ? _curry1(function (_a) {
	                    return fn(_a, b, c);
	                }) : _isPlaceholder(b) ? _curry1(function (_b) {
	                    return fn(a, _b, c);
	                }) : _isPlaceholder(c) ? _curry1(function (_c) {
	                    return fn(a, b, _c);
	                }) : fn(a, b, c);
	            }
	        };
	    };

	    /**
	     * Internal curryN function.
	     *
	     * @private
	     * @category Function
	     * @param {Number} length The arity of the curried function.
	     * @param {Array} received An array of arguments received thus far.
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curryN = function _curryN(length, received, fn) {
	        return function () {
	            var combined = [];
	            var argsIdx = 0;
	            var left = length;
	            var combinedIdx = 0;
	            while (combinedIdx < received.length || argsIdx < arguments.length) {
	                var result;
	                if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
	                    result = received[combinedIdx];
	                } else {
	                    result = arguments[argsIdx];
	                    argsIdx += 1;
	                }
	                combined[combinedIdx] = result;
	                if (!_isPlaceholder(result)) {
	                    left -= 1;
	                }
	                combinedIdx += 1;
	            }
	            return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
	        };
	    };

	    /**
	     * Returns a function that dispatches with different strategies based on the
	     * object in list position (last argument). If it is an array, executes [fn].
	     * Otherwise, if it has a function with [methodname], it will execute that
	     * function (functor case). Otherwise, if it is a transformer, uses transducer
	     * [xf] to return a new transformer (transducer case). Otherwise, it will
	     * default to executing [fn].
	     *
	     * @private
	     * @param {String} methodname property to check for a custom implementation
	     * @param {Function} xf transducer to initialize if object is transformer
	     * @param {Function} fn default ramda implementation
	     * @return {Function} A function that dispatches on object in list position
	     */
	    var _dispatchable = function _dispatchable(methodname, xf, fn) {
	        return function () {
	            var length = arguments.length;
	            if (length === 0) {
	                return fn();
	            }
	            var obj = arguments[length - 1];
	            if (!_isArray(obj)) {
	                var args = _slice(arguments, 0, length - 1);
	                if (typeof obj[methodname] === 'function') {
	                    return obj[methodname].apply(obj, args);
	                }
	                if (_isTransformer(obj)) {
	                    var transducer = xf.apply(null, args);
	                    return transducer(obj);
	                }
	            }
	            return fn.apply(this, arguments);
	        };
	    };

	    var _dropLastWhile = function dropLastWhile(pred, list) {
	        var idx = list.length - 1;
	        while (idx >= 0 && pred(list[idx])) {
	            idx -= 1;
	        }
	        return _slice(list, 0, idx + 1);
	    };

	    var _xall = function () {
	        function XAll(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.all = true;
	        }
	        XAll.prototype['@@transducer/init'] = _xfBase.init;
	        XAll.prototype['@@transducer/result'] = function (result) {
	            if (this.all) {
	                result = this.xf['@@transducer/step'](result, true);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XAll.prototype['@@transducer/step'] = function (result, input) {
	            if (!this.f(input)) {
	                this.all = false;
	                result = _reduced(this.xf['@@transducer/step'](result, false));
	            }
	            return result;
	        };
	        return _curry2(function _xall(f, xf) {
	            return new XAll(f, xf);
	        });
	    }();

	    var _xany = function () {
	        function XAny(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.any = false;
	        }
	        XAny.prototype['@@transducer/init'] = _xfBase.init;
	        XAny.prototype['@@transducer/result'] = function (result) {
	            if (!this.any) {
	                result = this.xf['@@transducer/step'](result, false);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XAny.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.any = true;
	                result = _reduced(this.xf['@@transducer/step'](result, true));
	            }
	            return result;
	        };
	        return _curry2(function _xany(f, xf) {
	            return new XAny(f, xf);
	        });
	    }();

	    var _xaperture = function () {
	        function XAperture(n, xf) {
	            this.xf = xf;
	            this.pos = 0;
	            this.full = false;
	            this.acc = new Array(n);
	        }
	        XAperture.prototype['@@transducer/init'] = _xfBase.init;
	        XAperture.prototype['@@transducer/result'] = function (result) {
	            this.acc = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XAperture.prototype['@@transducer/step'] = function (result, input) {
	            this.store(input);
	            return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
	        };
	        XAperture.prototype.store = function (input) {
	            this.acc[this.pos] = input;
	            this.pos += 1;
	            if (this.pos === this.acc.length) {
	                this.pos = 0;
	                this.full = true;
	            }
	        };
	        XAperture.prototype.getCopy = function () {
	            return _concat(_slice(this.acc, this.pos), _slice(this.acc, 0, this.pos));
	        };
	        return _curry2(function _xaperture(n, xf) {
	            return new XAperture(n, xf);
	        });
	    }();

	    var _xdrop = function () {
	        function XDrop(n, xf) {
	            this.xf = xf;
	            this.n = n;
	        }
	        XDrop.prototype['@@transducer/init'] = _xfBase.init;
	        XDrop.prototype['@@transducer/result'] = _xfBase.result;
	        XDrop.prototype['@@transducer/step'] = function (result, input) {
	            if (this.n > 0) {
	                this.n -= 1;
	                return result;
	            }
	            return this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdrop(n, xf) {
	            return new XDrop(n, xf);
	        });
	    }();

	    var _xdropLast = function () {
	        function XDropLast(n, xf) {
	            this.xf = xf;
	            this.pos = 0;
	            this.full = false;
	            this.acc = new Array(n);
	        }
	        XDropLast.prototype['@@transducer/init'] = _xfBase.init;
	        XDropLast.prototype['@@transducer/result'] = function (result) {
	            this.acc = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XDropLast.prototype['@@transducer/step'] = function (result, input) {
	            if (this.full) {
	                result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
	            }
	            this.store(input);
	            return result;
	        };
	        XDropLast.prototype.store = function (input) {
	            this.acc[this.pos] = input;
	            this.pos += 1;
	            if (this.pos === this.acc.length) {
	                this.pos = 0;
	                this.full = true;
	            }
	        };
	        return _curry2(function _xdropLast(n, xf) {
	            return new XDropLast(n, xf);
	        });
	    }();

	    var _xdropRepeatsWith = function () {
	        function XDropRepeatsWith(pred, xf) {
	            this.xf = xf;
	            this.pred = pred;
	            this.lastValue = undefined;
	            this.seenFirstValue = false;
	        }
	        XDropRepeatsWith.prototype['@@transducer/init'] = function () {
	            return this.xf['@@transducer/init']();
	        };
	        XDropRepeatsWith.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](result);
	        };
	        XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
	            var sameAsLast = false;
	            if (!this.seenFirstValue) {
	                this.seenFirstValue = true;
	            } else if (this.pred(this.lastValue, input)) {
	                sameAsLast = true;
	            }
	            this.lastValue = input;
	            return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdropRepeatsWith(pred, xf) {
	            return new XDropRepeatsWith(pred, xf);
	        });
	    }();

	    var _xdropWhile = function () {
	        function XDropWhile(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
	        XDropWhile.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f) {
	                if (this.f(input)) {
	                    return result;
	                }
	                this.f = null;
	            }
	            return this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdropWhile(f, xf) {
	            return new XDropWhile(f, xf);
	        });
	    }();

	    var _xfilter = function () {
	        function XFilter(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XFilter.prototype['@@transducer/init'] = _xfBase.init;
	        XFilter.prototype['@@transducer/result'] = _xfBase.result;
	        XFilter.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
	        };
	        return _curry2(function _xfilter(f, xf) {
	            return new XFilter(f, xf);
	        });
	    }();

	    var _xfind = function () {
	        function XFind(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.found = false;
	        }
	        XFind.prototype['@@transducer/init'] = _xfBase.init;
	        XFind.prototype['@@transducer/result'] = function (result) {
	            if (!this.found) {
	                result = this.xf['@@transducer/step'](result, void 0);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XFind.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.found = true;
	                result = _reduced(this.xf['@@transducer/step'](result, input));
	            }
	            return result;
	        };
	        return _curry2(function _xfind(f, xf) {
	            return new XFind(f, xf);
	        });
	    }();

	    var _xfindIndex = function () {
	        function XFindIndex(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.idx = -1;
	            this.found = false;
	        }
	        XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
	        XFindIndex.prototype['@@transducer/result'] = function (result) {
	            if (!this.found) {
	                result = this.xf['@@transducer/step'](result, -1);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XFindIndex.prototype['@@transducer/step'] = function (result, input) {
	            this.idx += 1;
	            if (this.f(input)) {
	                this.found = true;
	                result = _reduced(this.xf['@@transducer/step'](result, this.idx));
	            }
	            return result;
	        };
	        return _curry2(function _xfindIndex(f, xf) {
	            return new XFindIndex(f, xf);
	        });
	    }();

	    var _xfindLast = function () {
	        function XFindLast(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XFindLast.prototype['@@transducer/init'] = _xfBase.init;
	        XFindLast.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
	        };
	        XFindLast.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.last = input;
	            }
	            return result;
	        };
	        return _curry2(function _xfindLast(f, xf) {
	            return new XFindLast(f, xf);
	        });
	    }();

	    var _xfindLastIndex = function () {
	        function XFindLastIndex(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.idx = -1;
	            this.lastIdx = -1;
	        }
	        XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
	        XFindLastIndex.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
	        };
	        XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
	            this.idx += 1;
	            if (this.f(input)) {
	                this.lastIdx = this.idx;
	            }
	            return result;
	        };
	        return _curry2(function _xfindLastIndex(f, xf) {
	            return new XFindLastIndex(f, xf);
	        });
	    }();

	    var _xmap = function () {
	        function XMap(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XMap.prototype['@@transducer/init'] = _xfBase.init;
	        XMap.prototype['@@transducer/result'] = _xfBase.result;
	        XMap.prototype['@@transducer/step'] = function (result, input) {
	            return this.xf['@@transducer/step'](result, this.f(input));
	        };
	        return _curry2(function _xmap(f, xf) {
	            return new XMap(f, xf);
	        });
	    }();

	    var _xtake = function () {
	        function XTake(n, xf) {
	            this.xf = xf;
	            this.n = n;
	        }
	        XTake.prototype['@@transducer/init'] = _xfBase.init;
	        XTake.prototype['@@transducer/result'] = _xfBase.result;
	        XTake.prototype['@@transducer/step'] = function (result, input) {
	            if (this.n === 0) {
	                return _reduced(result);
	            } else {
	                this.n -= 1;
	                return this.xf['@@transducer/step'](result, input);
	            }
	        };
	        return _curry2(function _xtake(n, xf) {
	            return new XTake(n, xf);
	        });
	    }();

	    var _xtakeWhile = function () {
	        function XTakeWhile(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
	        XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
	        };
	        return _curry2(function _xtakeWhile(f, xf) {
	            return new XTakeWhile(f, xf);
	        });
	    }();

	    /**
	     * Adds two values.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Number}
	     * @see R.subtract
	     * @example
	     *
	     *      R.add(2, 3);       //=>  5
	     *      R.add(7)(10);      //=> 17
	     */
	    var add = _curry2(function add(a, b) {
	        return Number(a) + Number(b);
	    });

	    /**
	     * Applies a function to the value at the given index of an array, returning a
	     * new copy of the array with the element at the given index replaced with the
	     * result of the function application.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig (a -> a) -> Number -> [a] -> [a]
	     * @param {Function} fn The function to apply.
	     * @param {Number} idx The index.
	     * @param {Array|Arguments} list An array-like object whose value
	     *        at the supplied index will be replaced.
	     * @return {Array} A copy of the supplied array-like object with
	     *         the element at index `idx` replaced with the value
	     *         returned by applying `fn` to the existing element.
	     * @see R.update
	     * @example
	     *
	     *      R.adjust(R.add(10), 1, [0, 1, 2]);     //=> [0, 11, 2]
	     *      R.adjust(R.add(10))(1)([0, 1, 2]);     //=> [0, 11, 2]
	     */
	    var adjust = _curry3(function adjust(fn, idx, list) {
	        if (idx >= list.length || idx < -list.length) {
	            return list;
	        }
	        var start = idx < 0 ? list.length : 0;
	        var _idx = start + idx;
	        var _list = _concat(list);
	        _list[_idx] = fn(list[_idx]);
	        return _list;
	    });

	    /**
	     * Returns `true` if all elements of the list match the predicate, `false` if
	     * there are any that don't.
	     *
	     * Dispatches to the `all` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
	     *         otherwise.
	     * @see R.any, R.none, R.transduce
	     * @example
	     *
	     *      var lessThan2 = R.flip(R.lt)(2);
	     *      var lessThan3 = R.flip(R.lt)(3);
	     *      R.all(lessThan2)([1, 2]); //=> false
	     *      R.all(lessThan3)([1, 2]); //=> true
	     */
	    var all = _curry2(_dispatchable('all', _xall, function all(fn, list) {
	        var idx = 0;
	        while (idx < list.length) {
	            if (!fn(list[idx])) {
	                return false;
	            }
	            idx += 1;
	        }
	        return true;
	    }));

	    /**
	     * Returns a function that always returns the given value. Note that for
	     * non-primitives the value returned is a reference to the original value.
	     *
	     * This function is known as `const`, `constant`, or `K` (for K combinator) in
	     * other languages and libraries.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig a -> (* -> a)
	     * @param {*} val The value to wrap in a function
	     * @return {Function} A Function :: * -> val.
	     * @example
	     *
	     *      var t = R.always('Tee');
	     *      t(); //=> 'Tee'
	     */
	    var always = _curry1(function always(val) {
	        return function () {
	            return val;
	        };
	    });

	    /**
	     * Returns `true` if both arguments are `true`; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig * -> * -> *
	     * @param {Boolean} a A boolean value
	     * @param {Boolean} b A boolean value
	     * @return {Boolean} `true` if both arguments are `true`, `false` otherwise
	     * @see R.both
	     * @example
	     *
	     *      R.and(true, true); //=> true
	     *      R.and(true, false); //=> false
	     *      R.and(false, true); //=> false
	     *      R.and(false, false); //=> false
	     */
	    var and = _curry2(function and(a, b) {
	        return a && b;
	    });

	    /**
	     * Returns `true` if at least one of elements of the list match the predicate,
	     * `false` otherwise.
	     *
	     * Dispatches to the `any` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
	     *         otherwise.
	     * @see R.all, R.none, R.transduce
	     * @example
	     *
	     *      var lessThan0 = R.flip(R.lt)(0);
	     *      var lessThan2 = R.flip(R.lt)(2);
	     *      R.any(lessThan0)([1, 2]); //=> false
	     *      R.any(lessThan2)([1, 2]); //=> true
	     */
	    var any = _curry2(_dispatchable('any', _xany, function any(fn, list) {
	        var idx = 0;
	        while (idx < list.length) {
	            if (fn(list[idx])) {
	                return true;
	            }
	            idx += 1;
	        }
	        return false;
	    }));

	    /**
	     * Returns a new list, composed of n-tuples of consecutive elements If `n` is
	     * greater than the length of the list, an empty list is returned.
	     *
	     * Dispatches to the `aperture` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig Number -> [a] -> [[a]]
	     * @param {Number} n The size of the tuples to create
	     * @param {Array} list The list to split into `n`-tuples
	     * @return {Array} The new list.
	     * @see R.transduce
	     * @example
	     *
	     *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
	     *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
	     *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
	     */
	    var aperture = _curry2(_dispatchable('aperture', _xaperture, _aperture));

	    /**
	     * Returns a new list containing the contents of the given list, followed by
	     * the given element.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} el The element to add to the end of the new list.
	     * @param {Array} list The list whose contents will be added to the beginning of the output
	     *        list.
	     * @return {Array} A new list containing the contents of the old list followed by `el`.
	     * @see R.prepend
	     * @example
	     *
	     *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
	     *      R.append('tests', []); //=> ['tests']
	     *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
	     */
	    var append = _curry2(function append(el, list) {
	        return _concat(list, [el]);
	    });

	    /**
	     * Applies function `fn` to the argument list `args`. This is useful for
	     * creating a fixed-arity function from a variadic function. `fn` should be a
	     * bound function if context is significant.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Function
	     * @sig (*... -> a) -> [*] -> a
	     * @param {Function} fn
	     * @param {Array} args
	     * @return {*}
	     * @see R.call, R.unapply
	     * @example
	     *
	     *      var nums = [1, 2, 3, -99, 42, 6, 7];
	     *      R.apply(Math.max, nums); //=> 42
	     */
	    var apply = _curry2(function apply(fn, args) {
	        return fn.apply(this, args);
	    });

	    /**
	     * Makes a shallow clone of an object, setting or overriding the specified
	     * property with the given value. Note that this copies and flattens prototype
	     * properties onto the new object as well. All non-primitive properties are
	     * copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @sig String -> a -> {k: v} -> {k: v}
	     * @param {String} prop the property name to set
	     * @param {*} val the new value
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original except for the specified property.
	     * @see R.dissoc
	     * @example
	     *
	     *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
	     */
	    var assoc = _curry3(function assoc(prop, val, obj) {
	        var result = {};
	        for (var p in obj) {
	            result[p] = obj[p];
	        }
	        result[prop] = val;
	        return result;
	    });

	    /**
	     * Makes a shallow clone of an object, setting or overriding the nodes required
	     * to create the given path, and placing the specific value at the tail end of
	     * that path. Note that this copies and flattens prototype properties onto the
	     * new object as well. All non-primitive properties are copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @sig [String] -> a -> {k: v} -> {k: v}
	     * @param {Array} path the path to set
	     * @param {*} val the new value
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original except along the specified path.
	     * @see R.dissocPath
	     * @example
	     *
	     *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
	     */
	    var assocPath = _curry3(function assocPath(path, val, obj) {
	        switch (path.length) {
	        case 0:
	            return val;
	        case 1:
	            return assoc(path[0], val, obj);
	        default:
	            return assoc(path[0], assocPath(_slice(path, 1), val, Object(obj[path[0]])), obj);
	        }
	    });

	    /**
	     * Creates a function that is bound to a context.
	     * Note: `R.bind` does not provide the additional argument-binding capabilities of
	     * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category Function
	     * @category Object
	     * @sig (* -> *) -> {*} -> (* -> *)
	     * @param {Function} fn The function to bind to context
	     * @param {Object} thisObj The context to bind `fn` to
	     * @return {Function} A function that will execute in the context of `thisObj`.
	     * @see R.partial
	     */
	    var bind = _curry2(function bind(fn, thisObj) {
	        return _arity(fn.length, function () {
	            return fn.apply(thisObj, arguments);
	        });
	    });

	    /**
	     * Restricts a number to be within a range.
	     *
	     * Also works for other ordered types such as Strings and Dates.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Relation
	     * @sig Ord a => a -> a -> a -> a
	     * @param {Number} minimum number
	     * @param {Number} maximum number
	     * @param {Number} value to be clamped
	     * @return {Number} Returns the clamped value
	     * @example
	     *
	     *      R.clamp(1, 10, -1) // => 1
	     *      R.clamp(1, 10, 11) // => 10
	     *      R.clamp(1, 10, 4)  // => 4
	     */
	    var clamp = _curry3(function clamp(min, max, value) {
	        if (min > max) {
	            throw new Error('min must not be greater than max in clamp(min, max, value)');
	        }
	        return value < min ? min : value > max ? max : value;
	    });

	    /**
	     * Makes a comparator function out of a function that reports whether the first
	     * element is less than the second.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a, b -> Boolean) -> (a, b -> Number)
	     * @param {Function} pred A predicate function of arity two.
	     * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`.
	     * @example
	     *
	     *      var cmp = R.comparator((a, b) => a.age < b.age);
	     *      var people = [
	     *        // ...
	     *      ];
	     *      R.sort(cmp, people);
	     */
	    var comparator = _curry1(function comparator(pred) {
	        return function (a, b) {
	            return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
	        };
	    });

	    /**
	     * Returns a curried equivalent of the provided function, with the specified
	     * arity. The curried function has two unusual capabilities. First, its
	     * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	     * following are equivalent:
	     *
	     *   - `g(1)(2)(3)`
	     *   - `g(1)(2, 3)`
	     *   - `g(1, 2)(3)`
	     *   - `g(1, 2, 3)`
	     *
	     * Secondly, the special placeholder value `R.__` may be used to specify
	     * "gaps", allowing partial application of any combination of arguments,
	     * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	     * following are equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @func
	     * @memberOf R
	     * @since v0.5.0
	     * @category Function
	     * @sig Number -> (* -> a) -> (* -> a)
	     * @param {Number} length The arity for the returned function.
	     * @param {Function} fn The function to curry.
	     * @return {Function} A new, curried function.
	     * @see R.curry
	     * @example
	     *
	     *      var sumArgs = (...args) => R.sum(args);
	     *
	     *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	     *      var f = curriedAddFourNumbers(1, 2);
	     *      var g = f(3);
	     *      g(4); //=> 10
	     */
	    var curryN = _curry2(function curryN(length, fn) {
	        if (length === 1) {
	            return _curry1(fn);
	        }
	        return _arity(length, _curryN(length, [], fn));
	    });

	    /**
	     * Decrements its argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @see R.inc
	     * @example
	     *
	     *      R.dec(42); //=> 41
	     */
	    var dec = add(-1);

	    /**
	     * Returns the second argument if it is not `null`, `undefined` or `NaN`
	     * otherwise the first argument is returned.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Logic
	     * @sig a -> b -> a | b
	     * @param {a} val The default value.
	     * @param {b} val The value to return if it is not null or undefined
	     * @return {*} The the second value or the default value
	     * @example
	     *
	     *      var defaultTo42 = R.defaultTo(42);
	     *
	     *      defaultTo42(null);  //=> 42
	     *      defaultTo42(undefined);  //=> 42
	     *      defaultTo42('Ramda');  //=> 'Ramda'
	     *      defaultTo42(parseInt('string')); //=> 42
	     */
	    var defaultTo = _curry2(function defaultTo(d, v) {
	        return v == null || v !== v ? d : v;
	    });

	    /**
	     * Finds the set (i.e. no duplicates) of all elements in the first list not
	     * contained in the second list. Duplication is determined according to the
	     * value returned by applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` that are not in `list2`.
	     * @see R.difference
	     * @example
	     *
	     *      var cmp = (x, y) => x.a === y.a;
	     *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
	     *      var l2 = [{a: 3}, {a: 4}];
	     *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
	     */
	    var differenceWith = _curry3(function differenceWith(pred, first, second) {
	        var out = [];
	        var idx = 0;
	        var firstLen = first.length;
	        while (idx < firstLen) {
	            if (!_containsWith(pred, first[idx], second) && !_containsWith(pred, first[idx], out)) {
	                out.push(first[idx]);
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new object that does not contain a `prop` property.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Object
	     * @sig String -> {k: v} -> {k: v}
	     * @param {String} prop the name of the property to dissociate
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original but without the specified property
	     * @see R.assoc
	     * @example
	     *
	     *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
	     */
	    var dissoc = _curry2(function dissoc(prop, obj) {
	        var result = {};
	        for (var p in obj) {
	            if (p !== prop) {
	                result[p] = obj[p];
	            }
	        }
	        return result;
	    });

	    /**
	     * Makes a shallow clone of an object, omitting the property at the given path.
	     * Note that this copies and flattens prototype properties onto the new object
	     * as well. All non-primitive properties are copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.11.0
	     * @category Object
	     * @sig [String] -> {k: v} -> {k: v}
	     * @param {Array} path the path to set
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object without the property at path
	     * @see R.assocPath
	     * @example
	     *
	     *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
	     */
	    var dissocPath = _curry2(function dissocPath(path, obj) {
	        switch (path.length) {
	        case 0:
	            return obj;
	        case 1:
	            return dissoc(path[0], obj);
	        default:
	            var head = path[0];
	            var tail = _slice(path, 1);
	            return obj[head] == null ? obj : assoc(head, dissocPath(tail, obj[head]), obj);
	        }
	    });

	    /**
	     * Divides two numbers. Equivalent to `a / b`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a / b`.
	     * @see R.multiply
	     * @example
	     *
	     *      R.divide(71, 100); //=> 0.71
	     *
	     *      var half = R.divide(R.__, 2);
	     *      half(42); //=> 21
	     *
	     *      var reciprocal = R.divide(1);
	     *      reciprocal(4);   //=> 0.25
	     */
	    var divide = _curry2(function divide(a, b) {
	        return a / b;
	    });

	    /**
	     * Returns a new list containing the last `n` elements of a given list, passing
	     * each value to the supplied predicate function, skipping elements while the
	     * predicate function returns `true`. The predicate function is passed one
	     * argument: *(value)*.
	     *
	     * Dispatches to the `dropWhile` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.takeWhile, R.transduce, R.addIndex
	     * @example
	     *
	     *      var lteTwo = x => x <= 2;
	     *
	     *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
	     */
	    var dropWhile = _curry2(_dispatchable('dropWhile', _xdropWhile, function dropWhile(pred, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len && pred(list[idx])) {
	            idx += 1;
	        }
	        return _slice(list, idx);
	    }));

	    /**
	     * Returns the empty value of its argument's type. Ramda defines the empty
	     * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
	     * types are supported if they define `<Type>.empty` and/or
	     * `<Type>.prototype.empty`.
	     *
	     * Dispatches to the `empty` method of the first argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Function
	     * @sig a -> a
	     * @param {*} x
	     * @return {*}
	     * @example
	     *
	     *      R.empty(Just(42));      //=> Nothing()
	     *      R.empty([1, 2, 3]);     //=> []
	     *      R.empty('unicorns');    //=> ''
	     *      R.empty({x: 1, y: 2});  //=> {}
	     */
	    // else
	    var empty = _curry1(function empty(x) {
	        return x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
	            return arguments;
	        }() : // else
	        void 0;
	    });

	    /**
	     * Creates a new object by recursively evolving a shallow copy of `object`,
	     * according to the `transformation` functions. All non-primitive properties
	     * are copied by reference.
	     *
	     * A `transformation` function will not be invoked if its corresponding key
	     * does not exist in the evolved object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig {k: (v -> v)} -> {k: v} -> {k: v}
	     * @param {Object} transformations The object specifying transformation functions to apply
	     *        to the object.
	     * @param {Object} object The object to be transformed.
	     * @return {Object} The transformed object.
	     * @example
	     *
	     *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
	     *      var transformations = {
	     *        firstName: R.trim,
	     *        lastName: R.trim, // Will not get invoked.
	     *        data: {elapsed: R.add(1), remaining: R.add(-1)}
	     *      };
	     *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
	     */
	    var evolve = _curry2(function evolve(transformations, object) {
	        var result = {};
	        var transformation, key, type;
	        for (key in object) {
	            transformation = transformations[key];
	            type = typeof transformation;
	            result[key] = type === 'function' ? transformation(object[key]) : type === 'object' ? evolve(transformations[key], object[key]) : object[key];
	        }
	        return result;
	    });

	    /**
	     * Returns the first element of the list which matches the predicate, or
	     * `undefined` if no element matches.
	     *
	     * Dispatches to the `find` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> a | undefined
	     * @param {Function} fn The predicate function used to determine if the element is the
	     *        desired one.
	     * @param {Array} list The array to consider.
	     * @return {Object} The element found, or `undefined`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	     *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
	     *      R.find(R.propEq('a', 4))(xs); //=> undefined
	     */
	    var find = _curry2(_dispatchable('find', _xfind, function find(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (fn(list[idx])) {
	                return list[idx];
	            }
	            idx += 1;
	        }
	    }));

	    /**
	     * Returns the index of the first element of the list which matches the
	     * predicate, or `-1` if no element matches.
	     *
	     * Dispatches to the `findIndex` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Number
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Number} The index of the element found, or `-1`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	     *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
	     *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
	     */
	    var findIndex = _curry2(_dispatchable('findIndex', _xfindIndex, function findIndex(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (fn(list[idx])) {
	                return idx;
	            }
	            idx += 1;
	        }
	        return -1;
	    }));

	    /**
	     * Returns the last element of the list which matches the predicate, or
	     * `undefined` if no element matches.
	     *
	     * Dispatches to the `findLast` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> a | undefined
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Object} The element found, or `undefined`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	     *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
	     *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
	     */
	    var findLast = _curry2(_dispatchable('findLast', _xfindLast, function findLast(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            if (fn(list[idx])) {
	                return list[idx];
	            }
	            idx -= 1;
	        }
	    }));

	    /**
	     * Returns the index of the last element of the list which matches the
	     * predicate, or `-1` if no element matches.
	     *
	     * Dispatches to the `findLastIndex` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Number
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Number} The index of the element found, or `-1`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	     *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
	     *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
	     */
	    var findLastIndex = _curry2(_dispatchable('findLastIndex', _xfindLastIndex, function findLastIndex(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            if (fn(list[idx])) {
	                return idx;
	            }
	            idx -= 1;
	        }
	        return -1;
	    }));

	    /**
	     * Iterate over an input `list`, calling a provided function `fn` for each
	     * element in the list.
	     *
	     * `fn` receives one argument: *(value)*.
	     *
	     * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
	     * arrays), unlike the native `Array.prototype.forEach` method. For more
	     * details on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
	     *
	     * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
	     * the original array. In some libraries this function is named `each`.
	     *
	     * Dispatches to the `forEach` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> *) -> [a] -> [a]
	     * @param {Function} fn The function to invoke. Receives one argument, `value`.
	     * @param {Array} list The list to iterate over.
	     * @return {Array} The original list.
	     * @see R.addIndex
	     * @example
	     *
	     *      var printXPlusFive = x => console.log(x + 5);
	     *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
	     *      //-> 6
	     *      //-> 7
	     *      //-> 8
	     */
	    var forEach = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
	        var len = list.length;
	        var idx = 0;
	        while (idx < len) {
	            fn(list[idx]);
	            idx += 1;
	        }
	        return list;
	    }));

	    /**
	     * Creates a new object out of a list key-value pairs.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig [[k,v]] -> {k: v}
	     * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
	     * @return {Object} The object made by pairing up `keys` and `values`.
	     * @see R.toPairs, R.pair
	     * @example
	     *
	     *      R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); //=> {a: 1, b: 2, c: 3}
	     */
	    var fromPairs = _curry1(function fromPairs(pairs) {
	        var idx = 0;
	        var len = pairs.length;
	        var out = {};
	        while (idx < len) {
	            if (_isArray(pairs[idx]) && pairs[idx].length) {
	                out[pairs[idx][0]] = pairs[idx][1];
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Takes a list and returns a list of lists where each sublist's elements are
	     * all "equal" according to the provided equality function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.21.0
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [[a]]
	     * @param {Function} fn Function for determining whether two given (adjacent)
	     *        elements should be in the same group
	     * @param {Array} list The array to group. Also accepts a string, which will be
	     *        treated as a list of characters.
	     * @return {List} A list that contains sublists of equal elements,
	     *         whose concatenations is equal to the original list.
	     * @example
	     *
	     *    groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	     *    // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]
	     *
	     *    groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	     *    // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
	     *
	     *    R.groupWith(R.eqBy(isVowel), 'aestiou')
	     *    // ['ae', 'st', 'iou']
	     */
	    var groupWith = _curry2(function (fn, list) {
	        var res = [];
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            var nextidx = idx + 1;
	            while (nextidx < len && fn(list[idx], list[nextidx])) {
	                nextidx += 1;
	            }
	            res.push(list.slice(idx, nextidx));
	            idx = nextidx;
	        }
	        return res;
	    });

	    /**
	     * Returns `true` if the first argument is greater than the second; `false`
	     * otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @see R.lt
	     * @example
	     *
	     *      R.gt(2, 1); //=> true
	     *      R.gt(2, 2); //=> false
	     *      R.gt(2, 3); //=> false
	     *      R.gt('a', 'z'); //=> false
	     *      R.gt('z', 'a'); //=> true
	     */
	    var gt = _curry2(function gt(a, b) {
	        return a > b;
	    });

	    /**
	     * Returns `true` if the first argument is greater than or equal to the second;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Boolean}
	     * @see R.lte
	     * @example
	     *
	     *      R.gte(2, 1); //=> true
	     *      R.gte(2, 2); //=> true
	     *      R.gte(2, 3); //=> false
	     *      R.gte('a', 'z'); //=> false
	     *      R.gte('z', 'a'); //=> true
	     */
	    var gte = _curry2(function gte(a, b) {
	        return a >= b;
	    });

	    /**
	     * Returns whether or not an object has an own property with the specified name
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Object
	     * @sig s -> {s: x} -> Boolean
	     * @param {String} prop The name of the property to check for.
	     * @param {Object} obj The object to query.
	     * @return {Boolean} Whether the property exists.
	     * @example
	     *
	     *      var hasName = R.has('name');
	     *      hasName({name: 'alice'});   //=> true
	     *      hasName({name: 'bob'});     //=> true
	     *      hasName({});                //=> false
	     *
	     *      var point = {x: 0, y: 0};
	     *      var pointHas = R.has(R.__, point);
	     *      pointHas('x');  //=> true
	     *      pointHas('y');  //=> true
	     *      pointHas('z');  //=> false
	     */
	    var has = _curry2(_has);

	    /**
	     * Returns whether or not an object or its prototype chain has a property with
	     * the specified name
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Object
	     * @sig s -> {s: x} -> Boolean
	     * @param {String} prop The name of the property to check for.
	     * @param {Object} obj The object to query.
	     * @return {Boolean} Whether the property exists.
	     * @example
	     *
	     *      function Rectangle(width, height) {
	     *        this.width = width;
	     *        this.height = height;
	     *      }
	     *      Rectangle.prototype.area = function() {
	     *        return this.width * this.height;
	     *      };
	     *
	     *      var square = new Rectangle(2, 2);
	     *      R.hasIn('width', square);  //=> true
	     *      R.hasIn('area', square);  //=> true
	     */
	    var hasIn = _curry2(function hasIn(prop, obj) {
	        return prop in obj;
	    });

	    /**
	     * Returns true if its arguments are identical, false otherwise. Values are
	     * identical if they reference the same memory. `NaN` is identical to `NaN`;
	     * `0` and `-0` are not identical.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category Relation
	     * @sig a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @example
	     *
	     *      var o = {};
	     *      R.identical(o, o); //=> true
	     *      R.identical(1, 1); //=> true
	     *      R.identical(1, '1'); //=> false
	     *      R.identical([], []); //=> false
	     *      R.identical(0, -0); //=> false
	     *      R.identical(NaN, NaN); //=> true
	     */
	    // SameValue algorithm
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Step 6.a: NaN == NaN
	    var identical = _curry2(function identical(a, b) {
	        // SameValue algorithm
	        if (a === b) {
	            // Steps 1-5, 7-10
	            // Steps 6.b-6.e: +0 != -0
	            return a !== 0 || 1 / a === 1 / b;
	        } else {
	            // Step 6.a: NaN == NaN
	            return a !== a && b !== b;
	        }
	    });

	    /**
	     * A function that does nothing but return the parameter supplied to it. Good
	     * as a default or placeholder function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig a -> a
	     * @param {*} x The value to return.
	     * @return {*} The input value, `x`.
	     * @example
	     *
	     *      R.identity(1); //=> 1
	     *
	     *      var obj = {};
	     *      R.identity(obj) === obj; //=> true
	     */
	    var identity = _curry1(_identity);

	    /**
	     * Creates a function that will process either the `onTrue` or the `onFalse`
	     * function depending upon the result of the `condition` predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
	     * @param {Function} condition A predicate function
	     * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
	     * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
	     * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
	     *                    function depending upon the result of the `condition` predicate.
	     * @see R.unless, R.when
	     * @example
	     *
	     *      var incCount = R.ifElse(
	     *        R.has('count'),
	     *        R.over(R.lensProp('count'), R.inc),
	     *        R.assoc('count', 1)
	     *      );
	     *      incCount({});           //=> { count: 1 }
	     *      incCount({ count: 1 }); //=> { count: 2 }
	     */
	    var ifElse = _curry3(function ifElse(condition, onTrue, onFalse) {
	        return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
	            return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
	        });
	    });

	    /**
	     * Increments its argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @see R.dec
	     * @example
	     *
	     *      R.inc(42); //=> 43
	     */
	    var inc = add(1);

	    /**
	     * Inserts the supplied element into the list, at index `index`. _Note that
	     * this is not destructive_: it returns a copy of the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.2
	     * @category List
	     * @sig Number -> a -> [a] -> [a]
	     * @param {Number} index The position to insert the element
	     * @param {*} elt The element to insert into the Array
	     * @param {Array} list The list to insert into
	     * @return {Array} A new Array with `elt` inserted at `index`.
	     * @example
	     *
	     *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
	     */
	    var insert = _curry3(function insert(idx, elt, list) {
	        idx = idx < list.length && idx >= 0 ? idx : list.length;
	        var result = _slice(list);
	        result.splice(idx, 0, elt);
	        return result;
	    });

	    /**
	     * Inserts the sub-list into the list, at index `index`. _Note that this is not
	     * destructive_: it returns a copy of the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category List
	     * @sig Number -> [a] -> [a] -> [a]
	     * @param {Number} index The position to insert the sub-list
	     * @param {Array} elts The sub-list to insert into the Array
	     * @param {Array} list The list to insert the sub-list into
	     * @return {Array} A new Array with `elts` inserted starting at `index`.
	     * @example
	     *
	     *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
	     */
	    var insertAll = _curry3(function insertAll(idx, elts, list) {
	        idx = idx < list.length && idx >= 0 ? idx : list.length;
	        return _concat(_concat(_slice(list, 0, idx), elts), _slice(list, idx));
	    });

	    /**
	     * Creates a new list with the separator interposed between elements.
	     *
	     * Dispatches to the `intersperse` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} separator The element to add to the list.
	     * @param {Array} list The list to be interposed.
	     * @return {Array} The new list.
	     * @example
	     *
	     *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
	     */
	    var intersperse = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
	        var out = [];
	        var idx = 0;
	        var length = list.length;
	        while (idx < length) {
	            if (idx === length - 1) {
	                out.push(list[idx]);
	            } else {
	                out.push(list[idx], separator);
	            }
	            idx += 1;
	        }
	        return out;
	    }));

	    /**
	     * See if an object (`val`) is an instance of the supplied constructor. This
	     * function will check up the inheritance chain, if any.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Type
	     * @sig (* -> {*}) -> a -> Boolean
	     * @param {Object} ctor A constructor
	     * @param {*} val The value to test
	     * @return {Boolean}
	     * @example
	     *
	     *      R.is(Object, {}); //=> true
	     *      R.is(Number, 1); //=> true
	     *      R.is(Object, 1); //=> false
	     *      R.is(String, 's'); //=> true
	     *      R.is(String, new String('')); //=> true
	     *      R.is(Object, new String('')); //=> true
	     *      R.is(Object, 's'); //=> false
	     *      R.is(Number, {}); //=> false
	     */
	    var is = _curry2(function is(Ctor, val) {
	        return val != null && val.constructor === Ctor || val instanceof Ctor;
	    });

	    /**
	     * Tests whether or not an object is similar to an array.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.5.0
	     * @category Type
	     * @category List
	     * @sig * -> Boolean
	     * @param {*} x The object to test.
	     * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
	     * @example
	     *
	     *      R.isArrayLike([]); //=> true
	     *      R.isArrayLike(true); //=> false
	     *      R.isArrayLike({}); //=> false
	     *      R.isArrayLike({length: 10}); //=> false
	     *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
	     */
	    var isArrayLike = _curry1(function isArrayLike(x) {
	        if (_isArray(x)) {
	            return true;
	        }
	        if (!x) {
	            return false;
	        }
	        if (typeof x !== 'object') {
	            return false;
	        }
	        if (x instanceof String) {
	            return false;
	        }
	        if (x.nodeType === 1) {
	            return !!x.length;
	        }
	        if (x.length === 0) {
	            return true;
	        }
	        if (x.length > 0) {
	            return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
	        }
	        return false;
	    });

	    /**
	     * Checks if the input value is `null` or `undefined`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Type
	     * @sig * -> Boolean
	     * @param {*} x The value to test.
	     * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
	     * @example
	     *
	     *      R.isNil(null); //=> true
	     *      R.isNil(undefined); //=> true
	     *      R.isNil(0); //=> false
	     *      R.isNil([]); //=> false
	     */
	    var isNil = _curry1(function isNil(x) {
	        return x == null;
	    });

	    /**
	     * Returns a list containing the names of all the enumerable own properties of
	     * the supplied object.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {k: v} -> [k]
	     * @param {Object} obj The object to extract properties from
	     * @return {Array} An array of the object's own properties.
	     * @example
	     *
	     *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
	     */
	    // cover IE < 9 keys issues
	    // Safari bug
	    var keys = function () {
	        // cover IE < 9 keys issues
	        var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
	        var nonEnumerableProps = [
	            'constructor',
	            'valueOf',
	            'isPrototypeOf',
	            'toString',
	            'propertyIsEnumerable',
	            'hasOwnProperty',
	            'toLocaleString'
	        ];
	        // Safari bug
	        var hasArgsEnumBug = function () {
	            'use strict';
	            return arguments.propertyIsEnumerable('length');
	        }();
	        var contains = function contains(list, item) {
	            var idx = 0;
	            while (idx < list.length) {
	                if (list[idx] === item) {
	                    return true;
	                }
	                idx += 1;
	            }
	            return false;
	        };
	        return typeof Object.keys === 'function' && !hasArgsEnumBug ? _curry1(function keys(obj) {
	            return Object(obj) !== obj ? [] : Object.keys(obj);
	        }) : _curry1(function keys(obj) {
	            if (Object(obj) !== obj) {
	                return [];
	            }
	            var prop, nIdx;
	            var ks = [];
	            var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
	            for (prop in obj) {
	                if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
	                    ks[ks.length] = prop;
	                }
	            }
	            if (hasEnumBug) {
	                nIdx = nonEnumerableProps.length - 1;
	                while (nIdx >= 0) {
	                    prop = nonEnumerableProps[nIdx];
	                    if (_has(prop, obj) && !contains(ks, prop)) {
	                        ks[ks.length] = prop;
	                    }
	                    nIdx -= 1;
	                }
	            }
	            return ks;
	        });
	    }();

	    /**
	     * Returns a list containing the names of all the properties of the supplied
	     * object, including prototype properties.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Object
	     * @sig {k: v} -> [k]
	     * @param {Object} obj The object to extract properties from
	     * @return {Array} An array of the object's own and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.keysIn(f); //=> ['x', 'y']
	     */
	    var keysIn = _curry1(function keysIn(obj) {
	        var prop;
	        var ks = [];
	        for (prop in obj) {
	            ks[ks.length] = prop;
	        }
	        return ks;
	    });

	    /**
	     * Returns the number of elements in the array by returning `list.length`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig [a] -> Number
	     * @param {Array} list The array to inspect.
	     * @return {Number} The length of the array.
	     * @example
	     *
	     *      R.length([]); //=> 0
	     *      R.length([1, 2, 3]); //=> 3
	     */
	    var length = _curry1(function length(list) {
	        return list != null && is(Number, list.length) ? list.length : NaN;
	    });

	    /**
	     * Returns `true` if the first argument is less than the second; `false`
	     * otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @see R.gt
	     * @example
	     *
	     *      R.lt(2, 1); //=> false
	     *      R.lt(2, 2); //=> false
	     *      R.lt(2, 3); //=> true
	     *      R.lt('a', 'z'); //=> true
	     *      R.lt('z', 'a'); //=> false
	     */
	    var lt = _curry2(function lt(a, b) {
	        return a < b;
	    });

	    /**
	     * Returns `true` if the first argument is less than or equal to the second;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Boolean}
	     * @see R.gte
	     * @example
	     *
	     *      R.lte(2, 1); //=> false
	     *      R.lte(2, 2); //=> true
	     *      R.lte(2, 3); //=> true
	     *      R.lte('a', 'z'); //=> true
	     *      R.lte('z', 'a'); //=> false
	     */
	    var lte = _curry2(function lte(a, b) {
	        return a <= b;
	    });

	    /**
	     * The mapAccum function behaves like a combination of map and reduce; it
	     * applies a function to each element of a list, passing an accumulating
	     * parameter from left to right, and returning a final value of this
	     * accumulator together with the new list.
	     *
	     * The iterator function receives two arguments, *acc* and *value*, and should
	     * return a tuple *[acc, value]*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.addIndex
	     * @example
	     *
	     *      var digits = ['1', '2', '3', '4'];
	     *      var appender = (a, b) => [a + b, a + b];
	     *
	     *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
	     */
	    var mapAccum = _curry3(function mapAccum(fn, acc, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [];
	        var tuple = [acc];
	        while (idx < len) {
	            tuple = fn(tuple[0], list[idx]);
	            result[idx] = tuple[1];
	            idx += 1;
	        }
	        return [
	            tuple[0],
	            result
	        ];
	    });

	    /**
	     * The mapAccumRight function behaves like a combination of map and reduce; it
	     * applies a function to each element of a list, passing an accumulating
	     * parameter from right to left, and returning a final value of this
	     * accumulator together with the new list.
	     *
	     * Similar to `mapAccum`, except moves through the input list from the right to
	     * the left.
	     *
	     * The iterator function receives two arguments, *acc* and *value*, and should
	     * return a tuple *[acc, value]*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.addIndex
	     * @example
	     *
	     *      var digits = ['1', '2', '3', '4'];
	     *      var append = (a, b) => [a + b, a + b];
	     *
	     *      R.mapAccumRight(append, 0, digits); //=> ['04321', ['04321', '0432', '043', '04']]
	     */
	    var mapAccumRight = _curry3(function mapAccumRight(fn, acc, list) {
	        var idx = list.length - 1;
	        var result = [];
	        var tuple = [acc];
	        while (idx >= 0) {
	            tuple = fn(tuple[0], list[idx]);
	            result[idx] = tuple[1];
	            idx -= 1;
	        }
	        return [
	            tuple[0],
	            result
	        ];
	    });

	    /**
	     * Tests a regular expression against a String. Note that this function will
	     * return an empty array when there are no matches. This differs from
	     * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
	     * which returns `null` when there are no matches.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category String
	     * @sig RegExp -> String -> [String | Undefined]
	     * @param {RegExp} rx A regular expression.
	     * @param {String} str The string to match against
	     * @return {Array} The list of matches or empty array.
	     * @see R.test
	     * @example
	     *
	     *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
	     *      R.match(/a/, 'b'); //=> []
	     *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
	     */
	    var match = _curry2(function match(rx, str) {
	        return str.match(rx) || [];
	    });

	    /**
	     * mathMod behaves like the modulo operator should mathematically, unlike the
	     * `%` operator (and by extension, R.modulo). So while "-17 % 5" is -2,
	     * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
	     * when the modulus is zero or negative.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} m The dividend.
	     * @param {Number} p the modulus.
	     * @return {Number} The result of `b mod a`.
	     * @example
	     *
	     *      R.mathMod(-17, 5);  //=> 3
	     *      R.mathMod(17, 5);   //=> 2
	     *      R.mathMod(17, -5);  //=> NaN
	     *      R.mathMod(17, 0);   //=> NaN
	     *      R.mathMod(17.2, 5); //=> NaN
	     *      R.mathMod(17, 5.3); //=> NaN
	     *
	     *      var clock = R.mathMod(R.__, 12);
	     *      clock(15); //=> 3
	     *      clock(24); //=> 0
	     *
	     *      var seventeenMod = R.mathMod(17);
	     *      seventeenMod(3);  //=> 2
	     *      seventeenMod(4);  //=> 1
	     *      seventeenMod(10); //=> 7
	     */
	    var mathMod = _curry2(function mathMod(m, p) {
	        if (!_isInteger(m)) {
	            return NaN;
	        }
	        if (!_isInteger(p) || p < 1) {
	            return NaN;
	        }
	        return (m % p + p) % p;
	    });

	    /**
	     * Returns the larger of its two arguments.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> a
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.maxBy, R.min
	     * @example
	     *
	     *      R.max(789, 123); //=> 789
	     *      R.max('a', 'b'); //=> 'b'
	     */
	    var max = _curry2(function max(a, b) {
	        return b > a ? b : a;
	    });

	    /**
	     * Takes a function and two values, and returns whichever value produces the
	     * larger result when passed to the provided function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Relation
	     * @sig Ord b => (a -> b) -> a -> a -> a
	     * @param {Function} f
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.max, R.minBy
	     * @example
	     *
	     *      //  square :: Number -> Number
	     *      var square = n => n * n;
	     *
	     *      R.maxBy(square, -3, 2); //=> -3
	     *
	     *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
	     *      R.reduce(R.maxBy(square), 0, []); //=> 0
	     */
	    var maxBy = _curry3(function maxBy(f, a, b) {
	        return f(b) > f(a) ? b : a;
	    });

	    /**
	     * Create a new object with the own properties of the first object merged with
	     * the own properties of the second object. If a key exists in both objects,
	     * the value from the second object will be used.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {k: v} -> {k: v} -> {k: v}
	     * @param {Object} l
	     * @param {Object} r
	     * @return {Object}
	     * @see R.mergeWith, R.mergeWithKey
	     * @example
	     *
	     *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
	     *      //=> { 'name': 'fred', 'age': 40 }
	     *
	     *      var resetToDefault = R.merge(R.__, {x: 0});
	     *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
	     */
	    var merge = _curry2(function merge(l, r) {
	        return _assign({}, l, r);
	    });

	    /**
	     * Merges a list of objects together into one object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig [{k: v}] -> {k: v}
	     * @param {Array} list An array of objects
	     * @return {Object} A merged object.
	     * @see R.reduce
	     * @example
	     *
	     *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
	     *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
	     */
	    var mergeAll = _curry1(function mergeAll(list) {
	        return _assign.apply(null, [{}].concat(list));
	    });

	    /**
	     * Creates a new object with the own properties of the two provided objects. If
	     * a key exists in both objects, the provided function is applied to the key
	     * and the values associated with the key in each object, with the result being
	     * used as the value associated with the key in the returned object. The key
	     * will be excluded from the returned object if the resulting value is
	     * `undefined`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Object
	     * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
	     * @param {Function} fn
	     * @param {Object} l
	     * @param {Object} r
	     * @return {Object}
	     * @see R.merge, R.mergeWith
	     * @example
	     *
	     *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
	     *      R.mergeWithKey(concatValues,
	     *                     { a: true, thing: 'foo', values: [10, 20] },
	     *                     { b: true, thing: 'bar', values: [15, 35] });
	     *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
	     */
	    var mergeWithKey = _curry3(function mergeWithKey(fn, l, r) {
	        var result = {};
	        var k;
	        for (k in l) {
	            if (_has(k, l)) {
	                result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
	            }
	        }
	        for (k in r) {
	            if (_has(k, r) && !_has(k, result)) {
	                result[k] = r[k];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns the smaller of its two arguments.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> a
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.minBy, R.max
	     * @example
	     *
	     *      R.min(789, 123); //=> 123
	     *      R.min('a', 'b'); //=> 'a'
	     */
	    var min = _curry2(function min(a, b) {
	        return b < a ? b : a;
	    });

	    /**
	     * Takes a function and two values, and returns whichever value produces the
	     * smaller result when passed to the provided function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Relation
	     * @sig Ord b => (a -> b) -> a -> a -> a
	     * @param {Function} f
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.min, R.maxBy
	     * @example
	     *
	     *      //  square :: Number -> Number
	     *      var square = n => n * n;
	     *
	     *      R.minBy(square, -3, 2); //=> 2
	     *
	     *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
	     *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
	     */
	    var minBy = _curry3(function minBy(f, a, b) {
	        return f(b) < f(a) ? b : a;
	    });

	    /**
	     * Divides the second parameter by the first and returns the remainder. Note
	     * that this function preserves the JavaScript-style behavior for modulo. For
	     * mathematical modulo see `mathMod`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The value to the divide.
	     * @param {Number} b The pseudo-modulus
	     * @return {Number} The result of `b % a`.
	     * @see R.mathMod
	     * @example
	     *
	     *      R.modulo(17, 3); //=> 2
	     *      // JS behavior:
	     *      R.modulo(-17, 3); //=> -2
	     *      R.modulo(17, -3); //=> 2
	     *
	     *      var isOdd = R.modulo(R.__, 2);
	     *      isOdd(42); //=> 0
	     *      isOdd(21); //=> 1
	     */
	    var modulo = _curry2(function modulo(a, b) {
	        return a % b;
	    });

	    /**
	     * Multiplies two numbers. Equivalent to `a * b` but curried.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a * b`.
	     * @see R.divide
	     * @example
	     *
	     *      var double = R.multiply(2);
	     *      var triple = R.multiply(3);
	     *      double(3);       //=>  6
	     *      triple(4);       //=> 12
	     *      R.multiply(2, 5);  //=> 10
	     */
	    var multiply = _curry2(function multiply(a, b) {
	        return a * b;
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts
	     * exactly `n` parameters. Any extraneous parameters will not be passed to the
	     * supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig Number -> (* -> a) -> (* -> a)
	     * @param {Number} n The desired arity of the new function.
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity `n`.
	     * @example
	     *
	     *      var takesTwoArgs = (a, b) => [a, b];
	     *
	     *      takesTwoArgs.length; //=> 2
	     *      takesTwoArgs(1, 2); //=> [1, 2]
	     *
	     *      var takesOneArg = R.nAry(1, takesTwoArgs);
	     *      takesOneArg.length; //=> 1
	     *      // Only `n` arguments are passed to the wrapped function
	     *      takesOneArg(1, 2); //=> [1, undefined]
	     */
	    var nAry = _curry2(function nAry(n, fn) {
	        switch (n) {
	        case 0:
	            return function () {
	                return fn.call(this);
	            };
	        case 1:
	            return function (a0) {
	                return fn.call(this, a0);
	            };
	        case 2:
	            return function (a0, a1) {
	                return fn.call(this, a0, a1);
	            };
	        case 3:
	            return function (a0, a1, a2) {
	                return fn.call(this, a0, a1, a2);
	            };
	        case 4:
	            return function (a0, a1, a2, a3) {
	                return fn.call(this, a0, a1, a2, a3);
	            };
	        case 5:
	            return function (a0, a1, a2, a3, a4) {
	                return fn.call(this, a0, a1, a2, a3, a4);
	            };
	        case 6:
	            return function (a0, a1, a2, a3, a4, a5) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5);
	            };
	        case 7:
	            return function (a0, a1, a2, a3, a4, a5, a6) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
	            };
	        case 8:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
	            };
	        case 9:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
	            };
	        case 10:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
	            };
	        default:
	            throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
	        }
	    });

	    /**
	     * Negates its argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @example
	     *
	     *      R.negate(42); //=> -42
	     */
	    var negate = _curry1(function negate(n) {
	        return -n;
	    });

	    /**
	     * Returns `true` if no elements of the list match the predicate, `false`
	     * otherwise.
	     *
	     * Dispatches to the `any` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
	     * @see R.all, R.any
	     * @example
	     *
	     *      var isEven = n => n % 2 === 0;
	     *
	     *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
	     *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
	     */
	    var none = _curry2(_complement(_dispatchable('any', _xany, any)));

	    /**
	     * A function that returns the `!` of its argument. It will return `true` when
	     * passed false-y value, and `false` when passed a truth-y one.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig * -> Boolean
	     * @param {*} a any value
	     * @return {Boolean} the logical inverse of passed argument.
	     * @see R.complement
	     * @example
	     *
	     *      R.not(true); //=> false
	     *      R.not(false); //=> true
	     *      R.not(0); => true
	     *      R.not(1); => false
	     */
	    var not = _curry1(function not(a) {
	        return !a;
	    });

	    /**
	     * Returns the nth element of the given list or string. If n is negative the
	     * element at index length + n is returned.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> [a] -> a | Undefined
	     * @sig Number -> String -> String
	     * @param {Number} offset
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      var list = ['foo', 'bar', 'baz', 'quux'];
	     *      R.nth(1, list); //=> 'bar'
	     *      R.nth(-1, list); //=> 'quux'
	     *      R.nth(-99, list); //=> undefined
	     *
	     *      R.nth(2, 'abc'); //=> 'c'
	     *      R.nth(3, 'abc'); //=> ''
	     */
	    var nth = _curry2(function nth(offset, list) {
	        var idx = offset < 0 ? list.length + offset : offset;
	        return _isString(list) ? list.charAt(idx) : list[idx];
	    });

	    /**
	     * Returns a function which returns its nth argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig Number -> *... -> *
	     * @param {Number} n
	     * @return {Function}
	     * @example
	     *
	     *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
	     *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
	     */
	    var nthArg = _curry1(function nthArg(n) {
	        return function () {
	            return nth(n, arguments);
	        };
	    });

	    /**
	     * Creates an object containing a single key:value pair.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Object
	     * @sig String -> a -> {String:a}
	     * @param {String} key
	     * @param {*} val
	     * @return {Object}
	     * @see R.pair
	     * @example
	     *
	     *      var matchPhrases = R.compose(
	     *        R.objOf('must'),
	     *        R.map(R.objOf('match_phrase'))
	     *      );
	     *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
	     */
	    var objOf = _curry2(function objOf(key, val) {
	        var obj = {};
	        obj[key] = val;
	        return obj;
	    });

	    /**
	     * Returns a singleton array containing the value provided.
	     *
	     * Note this `of` is different from the ES6 `of`; See
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Function
	     * @sig a -> [a]
	     * @param {*} x any value
	     * @return {Array} An array wrapping `x`.
	     * @example
	     *
	     *      R.of(null); //=> [null]
	     *      R.of([42]); //=> [[42]]
	     */
	    var of = _curry1(_of);

	    /**
	     * Accepts a function `fn` and returns a function that guards invocation of
	     * `fn` such that `fn` can only ever be called once, no matter how many times
	     * the returned function is invoked. The first value calculated is returned in
	     * subsequent invocations.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a... -> b) -> (a... -> b)
	     * @param {Function} fn The function to wrap in a call-only-once wrapper.
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      var addOneOnce = R.once(x => x + 1);
	     *      addOneOnce(10); //=> 11
	     *      addOneOnce(addOneOnce(50)); //=> 11
	     */
	    var once = _curry1(function once(fn) {
	        var called = false;
	        var result;
	        return _arity(fn.length, function () {
	            if (called) {
	                return result;
	            }
	            called = true;
	            result = fn.apply(this, arguments);
	            return result;
	        });
	    });

	    /**
	     * Returns `true` if one or both of its arguments are `true`. Returns `false`
	     * if both arguments are `false`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig * -> * -> *
	     * @param {Boolean} a A boolean value
	     * @param {Boolean} b A boolean value
	     * @return {Boolean} `true` if one or both arguments are `true`, `false` otherwise
	     * @see R.either
	     * @example
	     *
	     *      R.or(true, true); //=> true
	     *      R.or(true, false); //=> true
	     *      R.or(false, true); //=> true
	     *      R.or(false, false); //=> false
	     */
	    var or = _curry2(function or(a, b) {
	        return a || b;
	    });

	    /**
	     * Returns the result of "setting" the portion of the given data structure
	     * focused by the given lens to the result of applying the given function to
	     * the focused value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> (a -> a) -> s -> s
	     * @param {Lens} lens
	     * @param {*} v
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var headLens = R.lensIndex(0);
	     *
	     *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
	     */
	    // `Identity` is a functor that holds a single value, where `map` simply
	    // transforms the held value with the provided function.
	    // The value returned by the getter function is first transformed with `f`,
	    // then set as the value of an `Identity`. This is then mapped over with the
	    // setter function of the lens.
	    var over = function () {
	        // `Identity` is a functor that holds a single value, where `map` simply
	        // transforms the held value with the provided function.
	        var Identity = function (x) {
	            return {
	                value: x,
	                map: function (f) {
	                    return Identity(f(x));
	                }
	            };
	        };
	        return _curry3(function over(lens, f, x) {
	            // The value returned by the getter function is first transformed with `f`,
	            // then set as the value of an `Identity`. This is then mapped over with the
	            // setter function of the lens.
	            return lens(function (y) {
	                return Identity(f(y));
	            })(x).value;
	        });
	    }();

	    /**
	     * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category List
	     * @sig a -> b -> (a,b)
	     * @param {*} fst
	     * @param {*} snd
	     * @return {Array}
	     * @see R.objOf, R.of
	     * @example
	     *
	     *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
	     */
	    var pair = _curry2(function pair(fst, snd) {
	        return [
	            fst,
	            snd
	        ];
	    });

	    /**
	     * Retrieve the value at a given path.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Object
	     * @sig [String] -> {k: v} -> v | Undefined
	     * @param {Array} path The path to use.
	     * @param {Object} obj The object to retrieve the nested property from.
	     * @return {*} The data at `path`.
	     * @example
	     *
	     *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
	     *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
	     */
	    var path = _curry2(function path(paths, obj) {
	        var val = obj;
	        var idx = 0;
	        while (idx < paths.length) {
	            if (val == null) {
	                return;
	            }
	            val = val[paths[idx]];
	            idx += 1;
	        }
	        return val;
	    });

	    /**
	     * If the given, non-null object has a value at the given path, returns the
	     * value at that path. Otherwise returns the provided default value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Object
	     * @sig a -> [String] -> Object -> a
	     * @param {*} d The default value.
	     * @param {Array} p The path to use.
	     * @param {Object} obj The object to retrieve the nested property from.
	     * @return {*} The data at `path` of the supplied object or the default value.
	     * @example
	     *
	     *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
	     *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
	     */
	    var pathOr = _curry3(function pathOr(d, p, obj) {
	        return defaultTo(d, path(p, obj));
	    });

	    /**
	     * Returns `true` if the specified object property at given path satisfies the
	     * given predicate; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Logic
	     * @sig (a -> Boolean) -> [String] -> Object -> Boolean
	     * @param {Function} pred
	     * @param {Array} propPath
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.propSatisfies, R.path
	     * @example
	     *
	     *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
	     */
	    var pathSatisfies = _curry3(function pathSatisfies(pred, propPath, obj) {
	        return propPath.length > 0 && pred(path(propPath, obj));
	    });

	    /**
	     * Returns a partial copy of an object containing only the keys specified. If
	     * the key does not exist, the property is ignored.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [k] -> {k: v} -> {k: v}
	     * @param {Array} names an array of String property names to copy onto a new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties from `names` on it.
	     * @see R.omit, R.props
	     * @example
	     *
	     *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	     *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
	     */
	    var pick = _curry2(function pick(names, obj) {
	        var result = {};
	        var idx = 0;
	        while (idx < names.length) {
	            if (names[idx] in obj) {
	                result[names[idx]] = obj[names[idx]];
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Similar to `pick` except that this one includes a `key: undefined` pair for
	     * properties that don't exist.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [k] -> {k: v} -> {k: v}
	     * @param {Array} names an array of String property names to copy onto a new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties from `names` on it.
	     * @see R.pick
	     * @example
	     *
	     *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	     *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
	     */
	    var pickAll = _curry2(function pickAll(names, obj) {
	        var result = {};
	        var idx = 0;
	        var len = names.length;
	        while (idx < len) {
	            var name = names[idx];
	            result[name] = obj[name];
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns a partial copy of an object containing only the keys that satisfy
	     * the supplied predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
	     * @param {Function} pred A predicate to determine whether or not a key
	     *        should be included on the output object.
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties that satisfy `pred`
	     *         on it.
	     * @see R.pick, R.filter
	     * @example
	     *
	     *      var isUpperCase = (val, key) => key.toUpperCase() === key;
	     *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
	     */
	    var pickBy = _curry2(function pickBy(test, obj) {
	        var result = {};
	        for (var prop in obj) {
	            if (test(obj[prop], prop, obj)) {
	                result[prop] = obj[prop];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns a new list with the given element at the front, followed by the
	     * contents of the list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} el The item to add to the head of the output list.
	     * @param {Array} list The array to add to the tail of the output list.
	     * @return {Array} A new array.
	     * @see R.append
	     * @example
	     *
	     *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
	     */
	    var prepend = _curry2(function prepend(el, list) {
	        return _concat([el], list);
	    });

	    /**
	     * Returns a function that when supplied an object returns the indicated
	     * property of that object, if it exists.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig s -> {s: a} -> a | Undefined
	     * @param {String} p The property name
	     * @param {Object} obj The object to query
	     * @return {*} The value at `obj.p`.
	     * @example
	     *
	     *      R.prop('x', {x: 100}); //=> 100
	     *      R.prop('x', {}); //=> undefined
	     */
	    var prop = _curry2(function prop(p, obj) {
	        return obj[p];
	    });

	    /**
	     * If the given, non-null object has an own property with the specified name,
	     * returns the value of that property. Otherwise returns the provided default
	     * value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category Object
	     * @sig a -> String -> Object -> a
	     * @param {*} val The default value.
	     * @param {String} p The name of the property to return.
	     * @param {Object} obj The object to query.
	     * @return {*} The value of given property of the supplied object or the default value.
	     * @example
	     *
	     *      var alice = {
	     *        name: 'ALICE',
	     *        age: 101
	     *      };
	     *      var favorite = R.prop('favoriteLibrary');
	     *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
	     *
	     *      favorite(alice);  //=> undefined
	     *      favoriteWithDefault(alice);  //=> 'Ramda'
	     */
	    var propOr = _curry3(function propOr(val, p, obj) {
	        return obj != null && _has(p, obj) ? obj[p] : val;
	    });

	    /**
	     * Returns `true` if the specified object property satisfies the given
	     * predicate; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Logic
	     * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
	     * @param {Function} pred
	     * @param {String} name
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.propEq, R.propIs
	     * @example
	     *
	     *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
	     */
	    var propSatisfies = _curry3(function propSatisfies(pred, name, obj) {
	        return pred(obj[name]);
	    });

	    /**
	     * Acts as multiple `prop`: array of keys in, array of values out. Preserves
	     * order.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [k] -> {k: v} -> [v]
	     * @param {Array} ps The property names to fetch
	     * @param {Object} obj The object to query
	     * @return {Array} The corresponding values or partially applied function.
	     * @example
	     *
	     *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
	     *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
	     *
	     *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
	     *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
	     */
	    var props = _curry2(function props(ps, obj) {
	        var len = ps.length;
	        var out = [];
	        var idx = 0;
	        while (idx < len) {
	            out[idx] = obj[ps[idx]];
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> Number -> [Number]
	     * @param {Number} from The first number in the list.
	     * @param {Number} to One more than the last number in the list.
	     * @return {Array} The list of numbers in tthe set `[a, b)`.
	     * @example
	     *
	     *      R.range(1, 5);    //=> [1, 2, 3, 4]
	     *      R.range(50, 53);  //=> [50, 51, 52]
	     */
	    var range = _curry2(function range(from, to) {
	        if (!(_isNumber(from) && _isNumber(to))) {
	            throw new TypeError('Both arguments to range must be numbers');
	        }
	        var result = [];
	        var n = from;
	        while (n < to) {
	            result.push(n);
	            n += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns a single item by iterating through the list, successively calling
	     * the iterator function and passing it an accumulator value and the current
	     * value from the array, and then passing the result to the next call.
	     *
	     * Similar to `reduce`, except moves through the input list from the right to
	     * the left.
	     *
	     * The iterator function receives two values: *(acc, value)*
	     *
	     * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
	     * arrays), unlike the native `Array.prototype.reduce` method. For more details
	     * on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a,b -> a) -> a -> [b] -> a
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.addIndex
	     * @example
	     *
	     *      var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
	     *      var flattenPairs = (acc, pair) => acc.concat(pair);
	     *
	     *      R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
	     */
	    var reduceRight = _curry3(function reduceRight(fn, acc, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            acc = fn(acc, list[idx]);
	            idx -= 1;
	        }
	        return acc;
	    });

	    /**
	     * Returns a value wrapped to indicate that it is the final value of the reduce
	     * and transduce functions. The returned value should be considered a black
	     * box: the internal structure is not guaranteed to be stable.
	     *
	     * Note: this optimization is unavailable to functions not explicitly listed
	     * above. For instance, it is not currently supported by reduceRight.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category List
	     * @sig a -> *
	     * @param {*} x The final value of the reduce.
	     * @return {*} The wrapped value.
	     * @see R.reduce, R.transduce
	     * @example
	     *
	     *      R.reduce(
	     *        R.pipe(R.add, R.when(R.gte(R.__, 10), R.reduced)),
	     *        0,
	     *        [1, 2, 3, 4, 5]) // 10
	     */
	    var reduced = _curry1(_reduced);

	    /**
	     * Removes the sub-list of `list` starting at index `start` and containing
	     * `count` elements. _Note that this is not destructive_: it returns a copy of
	     * the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.2
	     * @category List
	     * @sig Number -> Number -> [a] -> [a]
	     * @param {Number} start The position to start removing elements
	     * @param {Number} count The number of elements to remove
	     * @param {Array} list The list to remove from
	     * @return {Array} A new Array with `count` elements from `start` removed.
	     * @example
	     *
	     *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
	     */
	    var remove = _curry3(function remove(start, count, list) {
	        return _concat(_slice(list, 0, Math.min(start, list.length)), _slice(list, Math.min(list.length, start + count)));
	    });

	    /**
	     * Replace a substring or regex match in a string with a replacement.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category String
	     * @sig RegExp|String -> String -> String -> String
	     * @param {RegExp|String} pattern A regular expression or a substring to match.
	     * @param {String} replacement The string to replace the matches with.
	     * @param {String} str The String to do the search and replacement in.
	     * @return {String} The result.
	     * @example
	     *
	     *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
	     *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
	     *
	     *      // Use the "g" (global) flag to replace all occurrences:
	     *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
	     */
	    var replace = _curry3(function replace(regex, replacement, str) {
	        return str.replace(regex, replacement);
	    });

	    /**
	     * Returns a new list or string with the elements or characters in reverse
	     * order.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {Array|String} list
	     * @return {Array|String}
	     * @example
	     *
	     *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
	     *      R.reverse([1, 2]);     //=> [2, 1]
	     *      R.reverse([1]);        //=> [1]
	     *      R.reverse([]);         //=> []
	     *
	     *      R.reverse('abc');      //=> 'cba'
	     *      R.reverse('ab');       //=> 'ba'
	     *      R.reverse('a');        //=> 'a'
	     *      R.reverse('');         //=> ''
	     */
	    var reverse = _curry1(function reverse(list) {
	        return _isString(list) ? list.split('').reverse().join('') : _slice(list).reverse();
	    });

	    /**
	     * Scan is similar to reduce, but returns a list of successively reduced values
	     * from the left
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (a,b -> a) -> a -> [b] -> [a]
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {Array} A list of all intermediately reduced values.
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
	     */
	    var scan = _curry3(function scan(fn, acc, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [acc];
	        while (idx < len) {
	            acc = fn(acc, list[idx]);
	            result[idx + 1] = acc;
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns the result of "setting" the portion of the given data structure
	     * focused by the given lens to the given value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> a -> s -> s
	     * @param {Lens} lens
	     * @param {*} v
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
	     *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
	     */
	    var set = _curry3(function set(lens, v, x) {
	        return over(lens, always(v), x);
	    });

	    /**
	     * Returns the elements of the given list or string (or object with a `slice`
	     * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
	     *
	     * Dispatches to the `slice` method of the third argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.4
	     * @category List
	     * @sig Number -> Number -> [a] -> [a]
	     * @sig Number -> Number -> String -> String
	     * @param {Number} fromIndex The start index (inclusive).
	     * @param {Number} toIndex The end index (exclusive).
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
	     *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
	     *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
	     *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
	     *      R.slice(0, 3, 'ramda');                     //=> 'ram'
	     */
	    var slice = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
	        return Array.prototype.slice.call(list, fromIndex, toIndex);
	    }));

	    /**
	     * Returns a copy of the list, sorted according to the comparator function,
	     * which should accept two values at a time and return a negative number if the
	     * first value is smaller, a positive number if it's larger, and zero if they
	     * are equal. Please note that this is a **copy** of the list. It does not
	     * modify the original.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a,a -> Number) -> [a] -> [a]
	     * @param {Function} comparator A sorting function :: a -> b -> Int
	     * @param {Array} list The list to sort
	     * @return {Array} a new array with its elements sorted by the comparator function.
	     * @example
	     *
	     *      var diff = function(a, b) { return a - b; };
	     *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
	     */
	    var sort = _curry2(function sort(comparator, list) {
	        return _slice(list).sort(comparator);
	    });

	    /**
	     * Sorts the list according to the supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord b => (a -> b) -> [a] -> [a]
	     * @param {Function} fn
	     * @param {Array} list The list to sort.
	     * @return {Array} A new list sorted by the keys generated by `fn`.
	     * @example
	     *
	     *      var sortByFirstItem = R.sortBy(R.prop(0));
	     *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
	     *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
	     *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
	     *      var alice = {
	     *        name: 'ALICE',
	     *        age: 101
	     *      };
	     *      var bob = {
	     *        name: 'Bob',
	     *        age: -10
	     *      };
	     *      var clara = {
	     *        name: 'clara',
	     *        age: 314.159
	     *      };
	     *      var people = [clara, bob, alice];
	     *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
	     */
	    var sortBy = _curry2(function sortBy(fn, list) {
	        return _slice(list).sort(function (a, b) {
	            var aa = fn(a);
	            var bb = fn(b);
	            return aa < bb ? -1 : aa > bb ? 1 : 0;
	        });
	    });

	    /**
	     * Splits a given list or string at a given index.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig Number -> [a] -> [[a], [a]]
	     * @sig Number -> String -> [String, String]
	     * @param {Number} index The index where the array/string is split.
	     * @param {Array|String} array The array/string to be split.
	     * @return {Array}
	     * @example
	     *
	     *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
	     *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
	     *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
	     */
	    var splitAt = _curry2(function splitAt(index, array) {
	        return [
	            slice(0, index, array),
	            slice(index, length(array), array)
	        ];
	    });

	    /**
	     * Splits a collection into slices of the specified length.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig Number -> [a] -> [[a]]
	     * @sig Number -> String -> [String]
	     * @param {Number} n
	     * @param {Array} list
	     * @return {Array}
	     * @example
	     *
	     *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
	     *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
	     */
	    var splitEvery = _curry2(function splitEvery(n, list) {
	        if (n <= 0) {
	            throw new Error('First argument to splitEvery must be a positive integer');
	        }
	        var result = [];
	        var idx = 0;
	        while (idx < list.length) {
	            result.push(slice(idx, idx += n, list));
	        }
	        return result;
	    });

	    /**
	     * Takes a list and a predicate and returns a pair of lists with the following properties:
	     *
	     *  - the result of concatenating the two output lists is equivalent to the input list;
	     *  - none of the elements of the first output list satisfies the predicate; and
	     *  - if the second output list is non-empty, its first element satisfies the predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [[a], [a]]
	     * @param {Function} pred The predicate that determines where the array is split.
	     * @param {Array} list The array to be split.
	     * @return {Array}
	     * @example
	     *
	     *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
	     */
	    var splitWhen = _curry2(function splitWhen(pred, list) {
	        var idx = 0;
	        var len = list.length;
	        var prefix = [];
	        while (idx < len && !pred(list[idx])) {
	            prefix.push(list[idx]);
	            idx += 1;
	        }
	        return [
	            prefix,
	            _slice(list, idx)
	        ];
	    });

	    /**
	     * Subtracts its second argument from its first argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a - b`.
	     * @see R.add
	     * @example
	     *
	     *      R.subtract(10, 8); //=> 2
	     *
	     *      var minus5 = R.subtract(R.__, 5);
	     *      minus5(17); //=> 12
	     *
	     *      var complementaryAngle = R.subtract(90);
	     *      complementaryAngle(30); //=> 60
	     *      complementaryAngle(72); //=> 18
	     */
	    var subtract = _curry2(function subtract(a, b) {
	        return Number(a) - Number(b);
	    });

	    /**
	     * Returns all but the first element of the given list or string (or object
	     * with a `tail` method).
	     *
	     * Dispatches to the `slice` method of the first argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @see R.head, R.init, R.last
	     * @example
	     *
	     *      R.tail([1, 2, 3]);  //=> [2, 3]
	     *      R.tail([1, 2]);     //=> [2]
	     *      R.tail([1]);        //=> []
	     *      R.tail([]);         //=> []
	     *
	     *      R.tail('abc');  //=> 'bc'
	     *      R.tail('ab');   //=> 'b'
	     *      R.tail('a');    //=> ''
	     *      R.tail('');     //=> ''
	     */
	    var tail = _checkForMethod('tail', slice(1, Infinity));

	    /**
	     * Returns the first `n` elements of the given list, string, or
	     * transducer/transformer (or object with a `take` method).
	     *
	     * Dispatches to the `take` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n
	     * @param {*} list
	     * @return {*}
	     * @see R.drop
	     * @example
	     *
	     *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
	     *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	     *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.take(3, 'ramda');               //=> 'ram'
	     *
	     *      var personnel = [
	     *        'Dave Brubeck',
	     *        'Paul Desmond',
	     *        'Eugene Wright',
	     *        'Joe Morello',
	     *        'Gerry Mulligan',
	     *        'Bob Bates',
	     *        'Joe Dodge',
	     *        'Ron Crotty'
	     *      ];
	     *
	     *      var takeFive = R.take(5);
	     *      takeFive(personnel);
	     *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
	     */
	    var take = _curry2(_dispatchable('take', _xtake, function take(n, xs) {
	        return slice(0, n < 0 ? Infinity : n, xs);
	    }));

	    /**
	     * Returns a new list containing the last `n` elements of a given list, passing
	     * each value to the supplied predicate function, and terminating when the
	     * predicate function returns `false`. Excludes the element that caused the
	     * predicate function to fail. The predicate function is passed one argument:
	     * *(value)*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.dropLastWhile, R.addIndex
	     * @example
	     *
	     *      var isNotOne = x => x !== 1;
	     *
	     *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
	     */
	    var takeLastWhile = _curry2(function takeLastWhile(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0 && fn(list[idx])) {
	            idx -= 1;
	        }
	        return _slice(list, idx + 1, Infinity);
	    });

	    /**
	     * Returns a new list containing the first `n` elements of a given list,
	     * passing each value to the supplied predicate function, and terminating when
	     * the predicate function returns `false`. Excludes the element that caused the
	     * predicate function to fail. The predicate function is passed one argument:
	     * *(value)*.
	     *
	     * Dispatches to the `takeWhile` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.dropWhile, R.transduce, R.addIndex
	     * @example
	     *
	     *      var isNotFour = x => x !== 4;
	     *
	     *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
	     */
	    var takeWhile = _curry2(_dispatchable('takeWhile', _xtakeWhile, function takeWhile(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len && fn(list[idx])) {
	            idx += 1;
	        }
	        return _slice(list, 0, idx);
	    }));

	    /**
	     * Runs the given function with the supplied object, then returns the object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a -> *) -> a -> a
	     * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
	     * @param {*} x
	     * @return {*} `x`.
	     * @example
	     *
	     *      var sayX = x => console.log('x is ' + x);
	     *      R.tap(sayX, 100); //=> 100
	     *      //-> 'x is 100'
	     */
	    var tap = _curry2(function tap(fn, x) {
	        fn(x);
	        return x;
	    });

	    /**
	     * Calls an input function `n` times, returning an array containing the results
	     * of those function calls.
	     *
	     * `fn` is passed one argument: The current value of `n`, which begins at `0`
	     * and is gradually incremented to `n - 1`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.3
	     * @category List
	     * @sig (Number -> a) -> Number -> [a]
	     * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
	     * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
	     * @return {Array} An array containing the return values of all calls to `fn`.
	     * @example
	     *
	     *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
	     */
	    var times = _curry2(function times(fn, n) {
	        var len = Number(n);
	        var idx = 0;
	        var list;
	        if (len < 0 || isNaN(len)) {
	            throw new RangeError('n must be a non-negative number');
	        }
	        list = new Array(len);
	        while (idx < len) {
	            list[idx] = fn(idx);
	            idx += 1;
	        }
	        return list;
	    });

	    /**
	     * Converts an object into an array of key, value arrays. Only the object's
	     * own properties are used.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.0
	     * @category Object
	     * @sig {String: *} -> [[String,*]]
	     * @param {Object} obj The object to extract from
	     * @return {Array} An array of key, value arrays from the object's own properties.
	     * @see R.fromPairs
	     * @example
	     *
	     *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
	     */
	    var toPairs = _curry1(function toPairs(obj) {
	        var pairs = [];
	        for (var prop in obj) {
	            if (_has(prop, obj)) {
	                pairs[pairs.length] = [
	                    prop,
	                    obj[prop]
	                ];
	            }
	        }
	        return pairs;
	    });

	    /**
	     * Converts an object into an array of key, value arrays. The object's own
	     * properties and prototype properties are used. Note that the order of the
	     * output array is not guaranteed to be consistent across different JS
	     * platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.0
	     * @category Object
	     * @sig {String: *} -> [[String,*]]
	     * @param {Object} obj The object to extract from
	     * @return {Array} An array of key, value arrays from the object's own
	     *         and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
	     */
	    var toPairsIn = _curry1(function toPairsIn(obj) {
	        var pairs = [];
	        for (var prop in obj) {
	            pairs[pairs.length] = [
	                prop,
	                obj[prop]
	            ];
	        }
	        return pairs;
	    });

	    /**
	     * Transposes the rows and columns of a 2D list.
	     * When passed a list of `n` lists of length `x`,
	     * returns a list of `x` lists of length `n`.
	     *
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig [[a]] -> [[a]]
	     * @param {Array} list A 2D list
	     * @return {Array} A 2D list
	     * @example
	     *
	     *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
	     *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	     *
	     * If some of the rows are shorter than the following rows, their elements are skipped:
	     *
	     *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
	     */
	    var transpose = _curry1(function transpose(outerlist) {
	        var i = 0;
	        var result = [];
	        while (i < outerlist.length) {
	            var innerlist = outerlist[i];
	            var j = 0;
	            while (j < innerlist.length) {
	                if (typeof result[j] === 'undefined') {
	                    result[j] = [];
	                }
	                result[j].push(innerlist[j]);
	                j += 1;
	            }
	            i += 1;
	        }
	        return result;
	    });

	    /**
	     * Removes (strips) whitespace from both ends of the string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to trim.
	     * @return {String} Trimmed version of `str`.
	     * @example
	     *
	     *      R.trim('   xyz  '); //=> 'xyz'
	     *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
	     */
	    var trim = function () {
	        var ws = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
	        var zeroWidth = '\u200B';
	        var hasProtoTrim = typeof String.prototype.trim === 'function';
	        if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
	            return _curry1(function trim(str) {
	                var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
	                var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
	                return str.replace(beginRx, '').replace(endRx, '');
	            });
	        } else {
	            return _curry1(function trim(str) {
	                return str.trim();
	            });
	        }
	    }();

	    /**
	     * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
	     * function evaluates the `tryer`; if it does not throw, it simply returns the
	     * result. If the `tryer` *does* throw, the returned function evaluates the
	     * `catcher` function and returns its result. Note that for effective
	     * composition with this function, both the `tryer` and `catcher` functions
	     * must return the same type of results.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Function
	     * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
	     * @param {Function} tryer The function that may throw.
	     * @param {Function} catcher The function that will be evaluated if `tryer` throws.
	     * @return {Function} A new function that will catch exceptions and send then to the catcher.
	     * @example
	     *
	     *      R.tryCatch(R.prop('x'), R.F, {x: true}); //=> true
	     *      R.tryCatch(R.prop('x'), R.F, null);      //=> false
	     */
	    var tryCatch = _curry2(function _tryCatch(tryer, catcher) {
	        return _arity(tryer.length, function () {
	            try {
	                return tryer.apply(this, arguments);
	            } catch (e) {
	                return catcher.apply(this, _concat([e], arguments));
	            }
	        });
	    });

	    /**
	     * Gives a single-word string description of the (native) type of a value,
	     * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
	     * attempt to distinguish user Object types any further, reporting them all as
	     * 'Object'.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Type
	     * @sig (* -> {*}) -> String
	     * @param {*} val The value to test
	     * @return {String}
	     * @example
	     *
	     *      R.type({}); //=> "Object"
	     *      R.type(1); //=> "Number"
	     *      R.type(false); //=> "Boolean"
	     *      R.type('s'); //=> "String"
	     *      R.type(null); //=> "Null"
	     *      R.type([]); //=> "Array"
	     *      R.type(/[A-z]/); //=> "RegExp"
	     */
	    var type = _curry1(function type(val) {
	        return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
	    });

	    /**
	     * Takes a function `fn`, which takes a single array argument, and returns a
	     * function which:
	     *
	     *   - takes any number of positional arguments;
	     *   - passes these arguments to `fn` as an array; and
	     *   - returns the result.
	     *
	     * In other words, R.unapply derives a variadic function from a function which
	     * takes an array. R.unapply is the inverse of R.apply.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Function
	     * @sig ([*...] -> a) -> (*... -> a)
	     * @param {Function} fn
	     * @return {Function}
	     * @see R.apply
	     * @example
	     *
	     *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
	     */
	    var unapply = _curry1(function unapply(fn) {
	        return function () {
	            return fn(_slice(arguments));
	        };
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts
	     * exactly 1 parameter. Any extraneous parameters will not be passed to the
	     * supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Function
	     * @sig (* -> b) -> (a -> b)
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity 1.
	     * @example
	     *
	     *      var takesTwoArgs = function(a, b) {
	     *        return [a, b];
	     *      };
	     *      takesTwoArgs.length; //=> 2
	     *      takesTwoArgs(1, 2); //=> [1, 2]
	     *
	     *      var takesOneArg = R.unary(takesTwoArgs);
	     *      takesOneArg.length; //=> 1
	     *      // Only 1 argument is passed to the wrapped function
	     *      takesOneArg(1, 2); //=> [1, undefined]
	     */
	    var unary = _curry1(function unary(fn) {
	        return nAry(1, fn);
	    });

	    /**
	     * Returns a function of arity `n` from a (manually) curried function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Function
	     * @sig Number -> (a -> b) -> (a -> c)
	     * @param {Number} length The arity for the returned function.
	     * @param {Function} fn The function to uncurry.
	     * @return {Function} A new function.
	     * @see R.curry
	     * @example
	     *
	     *      var addFour = a => b => c => d => a + b + c + d;
	     *
	     *      var uncurriedAddFour = R.uncurryN(4, addFour);
	     *      uncurriedAddFour(1, 2, 3, 4); //=> 10
	     */
	    var uncurryN = _curry2(function uncurryN(depth, fn) {
	        return curryN(depth, function () {
	            var currentDepth = 1;
	            var value = fn;
	            var idx = 0;
	            var endIdx;
	            while (currentDepth <= depth && typeof value === 'function') {
	                endIdx = currentDepth === depth ? arguments.length : idx + value.length;
	                value = value.apply(this, _slice(arguments, idx, endIdx));
	                currentDepth += 1;
	                idx = endIdx;
	            }
	            return value;
	        });
	    });

	    /**
	     * Builds a list from a seed value. Accepts an iterator function, which returns
	     * either false to stop iteration or an array of length 2 containing the value
	     * to add to the resulting list and the seed to be used in the next call to the
	     * iterator function.
	     *
	     * The iterator function receives one argument: *(seed)*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (a -> [b]) -> * -> [b]
	     * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
	     *        either false to quit iteration or an array of length two to proceed. The element
	     *        at index 0 of this array will be added to the resulting array, and the element
	     *        at index 1 will be passed to the next call to `fn`.
	     * @param {*} seed The seed value.
	     * @return {Array} The final list.
	     * @example
	     *
	     *      var f = n => n > 50 ? false : [-n, n + 10];
	     *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
	     */
	    var unfold = _curry2(function unfold(fn, seed) {
	        var pair = fn(seed);
	        var result = [];
	        while (pair && pair.length) {
	            result[result.length] = pair[0];
	            pair = fn(pair[1]);
	        }
	        return result;
	    });

	    /**
	     * Returns a new list containing only one copy of each element in the original
	     * list, based upon the value returned by applying the supplied predicate to
	     * two list elements. Prefers the first item if two items compare equal based
	     * on the predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      var strEq = R.eqBy(String);
	     *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
	     *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
	     *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
	     *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
	     */
	    var uniqWith = _curry2(function uniqWith(pred, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [];
	        var item;
	        while (idx < len) {
	            item = list[idx];
	            if (!_containsWith(pred, item, result)) {
	                result[result.length] = item;
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Tests the final argument by passing it to the given predicate function. If
	     * the predicate is not satisfied, the function will return the result of
	     * calling the `whenFalseFn` function with the same argument. If the predicate
	     * is satisfied, the argument is returned as is.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Logic
	     * @sig (a -> Boolean) -> (a -> a) -> a -> a
	     * @param {Function} pred        A predicate function
	     * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
	     *                               to a falsy value.
	     * @param {*}        x           An object to test with the `pred` function and
	     *                               pass to `whenFalseFn` if necessary.
	     * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
	     * @see R.ifElse, R.when
	     * @example
	     *
	     *      // coerceArray :: (a|[a]) -> [a]
	     *      var coerceArray = R.unless(R.isArrayLike, R.of);
	     *      coerceArray([1, 2, 3]); //=> [1, 2, 3]
	     *      coerceArray(1);         //=> [1]
	     */
	    var unless = _curry3(function unless(pred, whenFalseFn, x) {
	        return pred(x) ? x : whenFalseFn(x);
	    });

	    /**
	     * Takes a predicate, a transformation function, and an initial value,
	     * and returns a value of the same type as the initial value.
	     * It does so by applying the transformation until the predicate is satisfied,
	     * at which point it returns the satisfactory value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Logic
	     * @sig (a -> Boolean) -> (a -> a) -> a -> a
	     * @param {Function} pred A predicate function
	     * @param {Function} fn The iterator function
	     * @param {*} init Initial value
	     * @return {*} Final value that satisfies predicate
	     * @example
	     *
	     *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
	     */
	    var until = _curry3(function until(pred, fn, init) {
	        var val = init;
	        while (!pred(val)) {
	            val = fn(val);
	        }
	        return val;
	    });

	    /**
	     * Returns a new copy of the array with the element at the provided index
	     * replaced with the given value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig Number -> a -> [a] -> [a]
	     * @param {Number} idx The index to update.
	     * @param {*} x The value to exist at the given index of the returned array.
	     * @param {Array|Arguments} list The source array-like object to be updated.
	     * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
	     * @see R.adjust
	     * @example
	     *
	     *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
	     *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
	     */
	    var update = _curry3(function update(idx, x, list) {
	        return adjust(always(x), idx, list);
	    });

	    /**
	     * Accepts a function `fn` and a list of transformer functions and returns a
	     * new curried function. When the new function is invoked, it calls the
	     * function `fn` with parameters consisting of the result of calling each
	     * supplied handler on successive arguments to the new function.
	     *
	     * If more arguments are passed to the returned function than transformer
	     * functions, those arguments are passed directly to `fn` as additional
	     * parameters. If you expect additional arguments that don't need to be
	     * transformed, although you can ignore them, it's best to pass an identity
	     * function so that the new function reports the correct arity.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
	     * @param {Function} fn The function to wrap.
	     * @param {Array} transformers A list of transformer functions
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
	     *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
	     *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
	     *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
	     */
	    var useWith = _curry2(function useWith(fn, transformers) {
	        return curryN(transformers.length, function () {
	            var args = [];
	            var idx = 0;
	            while (idx < transformers.length) {
	                args.push(transformers[idx].call(this, arguments[idx]));
	                idx += 1;
	            }
	            return fn.apply(this, args.concat(_slice(arguments, transformers.length)));
	        });
	    });

	    /**
	     * Returns a list of all the enumerable own properties of the supplied object.
	     * Note that the order of the output array is not guaranteed across different
	     * JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {k: v} -> [v]
	     * @param {Object} obj The object to extract values from
	     * @return {Array} An array of the values of the object's own properties.
	     * @example
	     *
	     *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
	     */
	    var values = _curry1(function values(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var vals = [];
	        var idx = 0;
	        while (idx < len) {
	            vals[idx] = obj[props[idx]];
	            idx += 1;
	        }
	        return vals;
	    });

	    /**
	     * Returns a list of all the properties, including prototype properties, of the
	     * supplied object.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Object
	     * @sig {k: v} -> [v]
	     * @param {Object} obj The object to extract values from
	     * @return {Array} An array of the values of the object's own and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.valuesIn(f); //=> ['X', 'Y']
	     */
	    var valuesIn = _curry1(function valuesIn(obj) {
	        var prop;
	        var vs = [];
	        for (prop in obj) {
	            vs[vs.length] = obj[prop];
	        }
	        return vs;
	    });

	    /**
	     * Returns a "view" of the given data structure, determined by the given lens.
	     * The lens's focus determines which portion of the data structure is visible.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> s -> a
	     * @param {Lens} lens
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.view(xLens, {x: 1, y: 2});  //=> 1
	     *      R.view(xLens, {x: 4, y: 2});  //=> 4
	     */
	    // `Const` is a functor that effectively ignores the function given to `map`.
	    // Using `Const` effectively ignores the setter function of the `lens`,
	    // leaving the value returned by the getter function unmodified.
	    var view = function () {
	        // `Const` is a functor that effectively ignores the function given to `map`.
	        var Const = function (x) {
	            return {
	                value: x,
	                map: function () {
	                    return this;
	                }
	            };
	        };
	        return _curry2(function view(lens, x) {
	            // Using `Const` effectively ignores the setter function of the `lens`,
	            // leaving the value returned by the getter function unmodified.
	            return lens(Const)(x).value;
	        });
	    }();

	    /**
	     * Tests the final argument by passing it to the given predicate function. If
	     * the predicate is satisfied, the function will return the result of calling
	     * the `whenTrueFn` function with the same argument. If the predicate is not
	     * satisfied, the argument is returned as is.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Logic
	     * @sig (a -> Boolean) -> (a -> a) -> a -> a
	     * @param {Function} pred       A predicate function
	     * @param {Function} whenTrueFn A function to invoke when the `condition`
	     *                              evaluates to a truthy value.
	     * @param {*}        x          An object to test with the `pred` function and
	     *                              pass to `whenTrueFn` if necessary.
	     * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
	     * @see R.ifElse, R.unless
	     * @example
	     *
	     *      // truncate :: String -> String
	     *      var truncate = R.when(
	     *        R.propSatisfies(R.gt(R.__, 10), 'length'),
	     *        R.pipe(R.take(10), R.append('…'), R.join(''))
	     *      );
	     *      truncate('12345');         //=> '12345'
	     *      truncate('0123456789ABC'); //=> '0123456789…'
	     */
	    var when = _curry3(function when(pred, whenTrueFn, x) {
	        return pred(x) ? whenTrueFn(x) : x;
	    });

	    /**
	     * Takes a spec object and a test object; returns true if the test satisfies
	     * the spec. Each of the spec's own properties must be a predicate function.
	     * Each predicate is applied to the value of the corresponding property of the
	     * test object. `where` returns true if all the predicates return true, false
	     * otherwise.
	     *
	     * `where` is well suited to declaratively expressing constraints for other
	     * functions such as `filter` and `find`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category Object
	     * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
	     * @param {Object} spec
	     * @param {Object} testObj
	     * @return {Boolean}
	     * @example
	     *
	     *      // pred :: Object -> Boolean
	     *      var pred = R.where({
	     *        a: R.equals('foo'),
	     *        b: R.complement(R.equals('bar')),
	     *        x: R.gt(_, 10),
	     *        y: R.lt(_, 20)
	     *      });
	     *
	     *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
	     *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
	     */
	    var where = _curry2(function where(spec, testObj) {
	        for (var prop in spec) {
	            if (_has(prop, spec) && !spec[prop](testObj[prop])) {
	                return false;
	            }
	        }
	        return true;
	    });

	    /**
	     * Wrap a function inside another to allow you to make adjustments to the
	     * parameters, or do other processing either before the internal function is
	     * called or with its results.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a... -> b) -> ((a... -> b) -> a... -> c) -> (a... -> c)
	     * @param {Function} fn The function to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      var greet = name => 'Hello ' + name;
	     *
	     *      var shoutedGreet = R.wrap(greet, (gr, name) => gr(name).toUpperCase());
	     *
	     *      shoutedGreet("Kathy"); //=> "HELLO KATHY"
	     *
	     *      var shortenedGreet = R.wrap(greet, function(gr, name) {
	     *        return gr(name.substring(0, 3));
	     *      });
	     *      shortenedGreet("Robert"); //=> "Hello Rob"
	     */
	    var wrap = _curry2(function wrap(fn, wrapper) {
	        return curryN(fn.length, function () {
	            return wrapper.apply(this, _concat([fn], arguments));
	        });
	    });

	    /**
	     * Creates a new list out of the two supplied by creating each possible pair
	     * from the lists.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [b] -> [[a,b]]
	     * @param {Array} as The first list.
	     * @param {Array} bs The second list.
	     * @return {Array} The list made by combining each possible pair from
	     *         `as` and `bs` into pairs (`[a, b]`).
	     * @example
	     *
	     *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
	     */
	    // = xprodWith(prepend); (takes about 3 times as long...)
	    var xprod = _curry2(function xprod(a, b) {
	        // = xprodWith(prepend); (takes about 3 times as long...)
	        var idx = 0;
	        var ilen = a.length;
	        var j;
	        var jlen = b.length;
	        var result = [];
	        while (idx < ilen) {
	            j = 0;
	            while (j < jlen) {
	                result[result.length] = [
	                    a[idx],
	                    b[j]
	                ];
	                j += 1;
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Creates a new list out of the two supplied by pairing up equally-positioned
	     * items from both lists. The returned list is truncated to the length of the
	     * shorter of the two input lists.
	     * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [b] -> [[a,b]]
	     * @param {Array} list1 The first array to consider.
	     * @param {Array} list2 The second array to consider.
	     * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
	     * @example
	     *
	     *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	     */
	    var zip = _curry2(function zip(a, b) {
	        var rv = [];
	        var idx = 0;
	        var len = Math.min(a.length, b.length);
	        while (idx < len) {
	            rv[idx] = [
	                a[idx],
	                b[idx]
	            ];
	            idx += 1;
	        }
	        return rv;
	    });

	    /**
	     * Creates a new object out of a list of keys and a list of values.
	     * Key/value pairing is truncated to the length of the shorter of the two lists.
	     * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig [String] -> [*] -> {String: *}
	     * @param {Array} keys The array that will be properties on the output object.
	     * @param {Array} values The list of values on the output object.
	     * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
	     * @example
	     *
	     *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
	     */
	    var zipObj = _curry2(function zipObj(keys, values) {
	        var idx = 0;
	        var len = Math.min(keys.length, values.length);
	        var out = {};
	        while (idx < len) {
	            out[keys[idx]] = values[idx];
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Creates a new list out of the two supplied by applying the function to each
	     * equally-positioned pair in the lists. The returned list is truncated to the
	     * length of the shorter of the two input lists.
	     *
	     * @function
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a,b -> c) -> [a] -> [b] -> [c]
	     * @param {Function} fn The function used to combine the two elements into one value.
	     * @param {Array} list1 The first array to consider.
	     * @param {Array} list2 The second array to consider.
	     * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
	     *         using `fn`.
	     * @example
	     *
	     *      var f = (x, y) => {
	     *        // ...
	     *      };
	     *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
	     *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
	     */
	    var zipWith = _curry3(function zipWith(fn, a, b) {
	        var rv = [];
	        var idx = 0;
	        var len = Math.min(a.length, b.length);
	        while (idx < len) {
	            rv[idx] = fn(a[idx], b[idx]);
	            idx += 1;
	        }
	        return rv;
	    });

	    /**
	     * A function that always returns `false`. Any passed in parameters are ignored.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig * -> Boolean
	     * @param {*}
	     * @return {Boolean}
	     * @see R.always, R.T
	     * @example
	     *
	     *      R.F(); //=> false
	     */
	    var F = always(false);

	    /**
	     * A function that always returns `true`. Any passed in parameters are ignored.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig * -> Boolean
	     * @param {*}
	     * @return {Boolean}
	     * @see R.always, R.F
	     * @example
	     *
	     *      R.T(); //=> true
	     */
	    var T = always(true);

	    /**
	     * Copies an object.
	     *
	     * @private
	     * @param {*} value The value to be copied
	     * @param {Array} refFrom Array containing the source references
	     * @param {Array} refTo Array containing the copied source references
	     * @param {Boolean} deep Whether or not to perform deep cloning.
	     * @return {*} The copied value.
	     */
	    var _clone = function _clone(value, refFrom, refTo, deep) {
	        var copy = function copy(copiedValue) {
	            var len = refFrom.length;
	            var idx = 0;
	            while (idx < len) {
	                if (value === refFrom[idx]) {
	                    return refTo[idx];
	                }
	                idx += 1;
	            }
	            refFrom[idx + 1] = value;
	            refTo[idx + 1] = copiedValue;
	            for (var key in value) {
	                copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
	            }
	            return copiedValue;
	        };
	        switch (type(value)) {
	        case 'Object':
	            return copy({});
	        case 'Array':
	            return copy([]);
	        case 'Date':
	            return new Date(value.valueOf());
	        case 'RegExp':
	            return _cloneRegExp(value);
	        default:
	            return value;
	        }
	    };

	    var _createPartialApplicator = function _createPartialApplicator(concat) {
	        return _curry2(function (fn, args) {
	            return _arity(Math.max(0, fn.length - args.length), function () {
	                return fn.apply(this, concat(args, arguments));
	            });
	        });
	    };

	    var _dropLast = function dropLast(n, xs) {
	        return take(n < xs.length ? xs.length - n : 0, xs);
	    };

	    // Values of other types are only equal if identical.
	    var _equals = function _equals(a, b, stackA, stackB) {
	        if (identical(a, b)) {
	            return true;
	        }
	        if (type(a) !== type(b)) {
	            return false;
	        }
	        if (a == null || b == null) {
	            return false;
	        }
	        if (typeof a.equals === 'function' || typeof b.equals === 'function') {
	            return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
	        }
	        switch (type(a)) {
	        case 'Arguments':
	        case 'Array':
	        case 'Object':
	            if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
	                return a === b;
	            }
	            break;
	        case 'Boolean':
	        case 'Number':
	        case 'String':
	            if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
	                return false;
	            }
	            break;
	        case 'Date':
	            if (!identical(a.valueOf(), b.valueOf())) {
	                return false;
	            }
	            break;
	        case 'Error':
	            return a.name === b.name && a.message === b.message;
	        case 'RegExp':
	            if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
	                return false;
	            }
	            break;
	        case 'Map':
	        case 'Set':
	            if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
	                return false;
	            }
	            break;
	        case 'Int8Array':
	        case 'Uint8Array':
	        case 'Uint8ClampedArray':
	        case 'Int16Array':
	        case 'Uint16Array':
	        case 'Int32Array':
	        case 'Uint32Array':
	        case 'Float32Array':
	        case 'Float64Array':
	            break;
	        case 'ArrayBuffer':
	            break;
	        default:
	            // Values of other types are only equal if identical.
	            return false;
	        }
	        var keysA = keys(a);
	        if (keysA.length !== keys(b).length) {
	            return false;
	        }
	        var idx = stackA.length - 1;
	        while (idx >= 0) {
	            if (stackA[idx] === a) {
	                return stackB[idx] === b;
	            }
	            idx -= 1;
	        }
	        stackA.push(a);
	        stackB.push(b);
	        idx = keysA.length - 1;
	        while (idx >= 0) {
	            var key = keysA[idx];
	            if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
	                return false;
	            }
	            idx -= 1;
	        }
	        stackA.pop();
	        stackB.pop();
	        return true;
	    };

	    /**
	     * `_makeFlat` is a helper function that returns a one-level or fully recursive
	     * function based on the flag passed in.
	     *
	     * @private
	     */
	    var _makeFlat = function _makeFlat(recursive) {
	        return function flatt(list) {
	            var value, jlen, j;
	            var result = [];
	            var idx = 0;
	            var ilen = list.length;
	            while (idx < ilen) {
	                if (isArrayLike(list[idx])) {
	                    value = recursive ? flatt(list[idx]) : list[idx];
	                    j = 0;
	                    jlen = value.length;
	                    while (j < jlen) {
	                        result[result.length] = value[j];
	                        j += 1;
	                    }
	                } else {
	                    result[result.length] = list[idx];
	                }
	                idx += 1;
	            }
	            return result;
	        };
	    };

	    var _reduce = function () {
	        function _arrayReduce(xf, acc, list) {
	            var idx = 0;
	            var len = list.length;
	            while (idx < len) {
	                acc = xf['@@transducer/step'](acc, list[idx]);
	                if (acc && acc['@@transducer/reduced']) {
	                    acc = acc['@@transducer/value'];
	                    break;
	                }
	                idx += 1;
	            }
	            return xf['@@transducer/result'](acc);
	        }
	        function _iterableReduce(xf, acc, iter) {
	            var step = iter.next();
	            while (!step.done) {
	                acc = xf['@@transducer/step'](acc, step.value);
	                if (acc && acc['@@transducer/reduced']) {
	                    acc = acc['@@transducer/value'];
	                    break;
	                }
	                step = iter.next();
	            }
	            return xf['@@transducer/result'](acc);
	        }
	        function _methodReduce(xf, acc, obj) {
	            return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
	        }
	        var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
	        return function _reduce(fn, acc, list) {
	            if (typeof fn === 'function') {
	                fn = _xwrap(fn);
	            }
	            if (isArrayLike(list)) {
	                return _arrayReduce(fn, acc, list);
	            }
	            if (typeof list.reduce === 'function') {
	                return _methodReduce(fn, acc, list);
	            }
	            if (list[symIterator] != null) {
	                return _iterableReduce(fn, acc, list[symIterator]());
	            }
	            if (typeof list.next === 'function') {
	                return _iterableReduce(fn, acc, list);
	            }
	            throw new TypeError('reduce: list must be array or iterable');
	        };
	    }();

	    var _stepCat = function () {
	        var _stepCatArray = {
	            '@@transducer/init': Array,
	            '@@transducer/step': function (xs, x) {
	                xs.push(x);
	                return xs;
	            },
	            '@@transducer/result': _identity
	        };
	        var _stepCatString = {
	            '@@transducer/init': String,
	            '@@transducer/step': function (a, b) {
	                return a + b;
	            },
	            '@@transducer/result': _identity
	        };
	        var _stepCatObject = {
	            '@@transducer/init': Object,
	            '@@transducer/step': function (result, input) {
	                return _assign(result, isArrayLike(input) ? objOf(input[0], input[1]) : input);
	            },
	            '@@transducer/result': _identity
	        };
	        return function _stepCat(obj) {
	            if (_isTransformer(obj)) {
	                return obj;
	            }
	            if (isArrayLike(obj)) {
	                return _stepCatArray;
	            }
	            if (typeof obj === 'string') {
	                return _stepCatString;
	            }
	            if (typeof obj === 'object') {
	                return _stepCatObject;
	            }
	            throw new Error('Cannot create transformer for ' + obj);
	        };
	    }();

	    var _xdropLastWhile = function () {
	        function XDropLastWhile(fn, xf) {
	            this.f = fn;
	            this.retained = [];
	            this.xf = xf;
	        }
	        XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XDropLastWhile.prototype['@@transducer/result'] = function (result) {
	            this.retained = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.retain(result, input) : this.flush(result, input);
	        };
	        XDropLastWhile.prototype.flush = function (result, input) {
	            result = _reduce(this.xf['@@transducer/step'], result, this.retained);
	            this.retained = [];
	            return this.xf['@@transducer/step'](result, input);
	        };
	        XDropLastWhile.prototype.retain = function (result, input) {
	            this.retained.push(input);
	            return result;
	        };
	        return _curry2(function _xdropLastWhile(fn, xf) {
	            return new XDropLastWhile(fn, xf);
	        });
	    }();

	    var _xgroupBy = function () {
	        function XGroupBy(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.inputs = {};
	        }
	        XGroupBy.prototype['@@transducer/init'] = _xfBase.init;
	        XGroupBy.prototype['@@transducer/result'] = function (result) {
	            var key;
	            for (key in this.inputs) {
	                if (_has(key, this.inputs)) {
	                    result = this.xf['@@transducer/step'](result, this.inputs[key]);
	                    if (result['@@transducer/reduced']) {
	                        result = result['@@transducer/value'];
	                        break;
	                    }
	                }
	            }
	            this.inputs = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XGroupBy.prototype['@@transducer/step'] = function (result, input) {
	            var key = this.f(input);
	            this.inputs[key] = this.inputs[key] || [
	                key,
	                []
	            ];
	            this.inputs[key][1] = append(input, this.inputs[key][1]);
	            return result;
	        };
	        return _curry2(function _xgroupBy(f, xf) {
	            return new XGroupBy(f, xf);
	        });
	    }();

	    /**
	     * Creates a new list iteration function from an existing one by adding two new
	     * parameters to its callback function: the current index, and the entire list.
	     *
	     * This would turn, for instance, Ramda's simple `map` function into one that
	     * more closely resembles `Array.prototype.map`. Note that this will only work
	     * for functions in which the iteration callback function is the first
	     * parameter, and where the list is the last parameter. (This latter might be
	     * unimportant if the list parameter is not used.)
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category Function
	     * @category List
	     * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
	     * @param {Function} fn A list iteration function that does not pass index or list to its callback
	     * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
	     * @example
	     *
	     *      var mapIndexed = R.addIndex(R.map);
	     *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
	     *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
	     */
	    var addIndex = _curry1(function addIndex(fn) {
	        return curryN(fn.length, function () {
	            var idx = 0;
	            var origFn = arguments[0];
	            var list = arguments[arguments.length - 1];
	            var args = _slice(arguments);
	            args[0] = function () {
	                var result = origFn.apply(this, _concat(arguments, [
	                    idx,
	                    list
	                ]));
	                idx += 1;
	                return result;
	            };
	            return fn.apply(this, args);
	        });
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts
	     * exactly 2 parameters. Any extraneous parameters will not be passed to the
	     * supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Function
	     * @sig (* -> c) -> (a, b -> c)
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity 2.
	     * @example
	     *
	     *      var takesThreeArgs = function(a, b, c) {
	     *        return [a, b, c];
	     *      };
	     *      takesThreeArgs.length; //=> 3
	     *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
	     *
	     *      var takesTwoArgs = R.binary(takesThreeArgs);
	     *      takesTwoArgs.length; //=> 2
	     *      // Only 2 arguments are passed to the wrapped function
	     *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
	     */
	    var binary = _curry1(function binary(fn) {
	        return nAry(2, fn);
	    });

	    /**
	     * Creates a deep copy of the value which may contain (nested) `Array`s and
	     * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are not
	     * copied, but assigned by their reference.
	     *
	     * Dispatches to a `clone` method if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {*} -> {*}
	     * @param {*} value The object or array to clone
	     * @return {*} A new object or array.
	     * @example
	     *
	     *      var objects = [{}, {}, {}];
	     *      var objectsClone = R.clone(objects);
	     *      objects[0] === objectsClone[0]; //=> false
	     */
	    var clone = _curry1(function clone(value) {
	        return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
	    });

	    /**
	     * Returns a curried equivalent of the provided function. The curried function
	     * has two unusual capabilities. First, its arguments needn't be provided one
	     * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
	     * following are equivalent:
	     *
	     *   - `g(1)(2)(3)`
	     *   - `g(1)(2, 3)`
	     *   - `g(1, 2)(3)`
	     *   - `g(1, 2, 3)`
	     *
	     * Secondly, the special placeholder value `R.__` may be used to specify
	     * "gaps", allowing partial application of any combination of arguments,
	     * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	     * following are equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (* -> a) -> (* -> a)
	     * @param {Function} fn The function to curry.
	     * @return {Function} A new, curried function.
	     * @see R.curryN
	     * @example
	     *
	     *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
	     *
	     *      var curriedAddFourNumbers = R.curry(addFourNumbers);
	     *      var f = curriedAddFourNumbers(1, 2);
	     *      var g = f(3);
	     *      g(4); //=> 10
	     */
	    var curry = _curry1(function curry(fn) {
	        return curryN(fn.length, fn);
	    });

	    /**
	     * Returns all but the first `n` elements of the given list, string, or
	     * transducer/transformer (or object with a `drop` method).
	     *
	     * Dispatches to the `drop` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n
	     * @param {*} list
	     * @return {*}
	     * @see R.take, R.transduce
	     * @example
	     *
	     *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	     *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
	     *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
	     *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
	     *      R.drop(3, 'ramda');               //=> 'da'
	     */
	    var drop = _curry2(_dispatchable('drop', _xdrop, function drop(n, xs) {
	        return slice(Math.max(0, n), Infinity, xs);
	    }));

	    /**
	     * Returns a list containing all but the last `n` elements of the given `list`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n The number of elements of `xs` to skip.
	     * @param {Array} xs The collection to consider.
	     * @return {Array}
	     * @see R.takeLast
	     * @example
	     *
	     *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	     *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
	     *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
	     *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
	     *      R.dropLast(3, 'ramda');               //=> 'ra'
	     */
	    var dropLast = _curry2(_dispatchable('dropLast', _xdropLast, _dropLast));

	    /**
	     * Returns a new list containing all but last the`n` elements of a given list,
	     * passing each value from the right to the supplied predicate function,
	     * skipping elements while the predicate function returns `true`. The predicate
	     * function is passed one argument: (value)*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.takeLastWhile, R.addIndex
	     * @example
	     *
	     *      var lteThree = x => x <= 3;
	     *
	     *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
	     */
	    var dropLastWhile = _curry2(_dispatchable('dropLastWhile', _xdropLastWhile, _dropLastWhile));

	    /**
	     * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
	     * cyclical data structures.
	     *
	     * Dispatches symmetrically to the `equals` methods of both arguments, if
	     * present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category Relation
	     * @sig a -> b -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @example
	     *
	     *      R.equals(1, 1); //=> true
	     *      R.equals(1, '1'); //=> false
	     *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
	     *
	     *      var a = {}; a.v = a;
	     *      var b = {}; b.v = b;
	     *      R.equals(a, b); //=> true
	     */
	    var equals = _curry2(function equals(a, b) {
	        return _equals(a, b, [], []);
	    });

	    /**
	     * Takes a predicate and a "filterable", and returns a new filterable of the
	     * same type containing the members of the given filterable which satisfy the
	     * given predicate.
	     *
	     * Dispatches to the `filter` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Filterable f => (a -> Boolean) -> f a -> f a
	     * @param {Function} pred
	     * @param {Array} filterable
	     * @return {Array}
	     * @see R.reject, R.transduce, R.addIndex
	     * @example
	     *
	     *      var isEven = n => n % 2 === 0;
	     *
	     *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
	     *
	     *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	     */
	    // else
	    var filter = _curry2(_dispatchable('filter', _xfilter, function (pred, filterable) {
	        return _isObject(filterable) ? _reduce(function (acc, key) {
	            if (pred(filterable[key])) {
	                acc[key] = filterable[key];
	            }
	            return acc;
	        }, {}, keys(filterable)) : // else
	        _filter(pred, filterable);
	    }));

	    /**
	     * Returns a new list by pulling every item out of it (and all its sub-arrays)
	     * and putting them in a new array, depth-first.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [b]
	     * @param {Array} list The array to consider.
	     * @return {Array} The flattened list.
	     * @see R.unnest
	     * @example
	     *
	     *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
	     *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	     */
	    var flatten = _curry1(_makeFlat(true));

	    /**
	     * Returns a new function much like the supplied one, except that the first two
	     * arguments' order is reversed.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
	     * @param {Function} fn The function to invoke with its first two parameters reversed.
	     * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
	     * @example
	     *
	     *      var mergeThree = (a, b, c) => [].concat(a, b, c);
	     *
	     *      mergeThree(1, 2, 3); //=> [1, 2, 3]
	     *
	     *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
	     */
	    var flip = _curry1(function flip(fn) {
	        return curry(function (a, b) {
	            var args = _slice(arguments);
	            args[0] = b;
	            args[1] = a;
	            return fn.apply(this, args);
	        });
	    });

	    /**
	     * Returns the first element of the given list or string. In some libraries
	     * this function is named `first`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> a | Undefined
	     * @sig String -> String
	     * @param {Array|String} list
	     * @return {*}
	     * @see R.tail, R.init, R.last
	     * @example
	     *
	     *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
	     *      R.head([]); //=> undefined
	     *
	     *      R.head('abc'); //=> 'a'
	     *      R.head(''); //=> ''
	     */
	    var head = nth(0);

	    /**
	     * Returns all but the last element of the given list or string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category List
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @see R.last, R.head, R.tail
	     * @example
	     *
	     *      R.init([1, 2, 3]);  //=> [1, 2]
	     *      R.init([1, 2]);     //=> [1]
	     *      R.init([1]);        //=> []
	     *      R.init([]);         //=> []
	     *
	     *      R.init('abc');  //=> 'ab'
	     *      R.init('ab');   //=> 'a'
	     *      R.init('a');    //=> ''
	     *      R.init('');     //=> ''
	     */
	    var init = slice(0, -1);

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of those
	     * elements common to both lists. Duplication is determined according to the
	     * value returned by applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
	     * @param {Function} pred A predicate function that determines whether
	     *        the two supplied elements are equal.
	     * @param {Array} list1 One list of items to compare
	     * @param {Array} list2 A second list of items to compare
	     * @return {Array} A new list containing those elements common to both lists.
	     * @see R.intersection
	     * @example
	     *
	     *      var buffaloSpringfield = [
	     *        {id: 824, name: 'Richie Furay'},
	     *        {id: 956, name: 'Dewey Martin'},
	     *        {id: 313, name: 'Bruce Palmer'},
	     *        {id: 456, name: 'Stephen Stills'},
	     *        {id: 177, name: 'Neil Young'}
	     *      ];
	     *      var csny = [
	     *        {id: 204, name: 'David Crosby'},
	     *        {id: 456, name: 'Stephen Stills'},
	     *        {id: 539, name: 'Graham Nash'},
	     *        {id: 177, name: 'Neil Young'}
	     *      ];
	     *
	     *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
	     *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
	     */
	    var intersectionWith = _curry3(function intersectionWith(pred, list1, list2) {
	        var lookupList, filteredList;
	        if (list1.length > list2.length) {
	            lookupList = list1;
	            filteredList = list2;
	        } else {
	            lookupList = list2;
	            filteredList = list1;
	        }
	        var results = [];
	        var idx = 0;
	        while (idx < filteredList.length) {
	            if (_containsWith(pred, filteredList[idx], lookupList)) {
	                results[results.length] = filteredList[idx];
	            }
	            idx += 1;
	        }
	        return uniqWith(pred, results);
	    });

	    /**
	     * Transforms the items of the list with the transducer and appends the
	     * transformed items to the accumulator using an appropriate iterator function
	     * based on the accumulator type.
	     *
	     * The accumulator can be an array, string, object or a transformer. Iterated
	     * items will be appended to arrays and concatenated to strings. Objects will
	     * be merged directly or 2-item arrays will be merged as key, value pairs.
	     *
	     * The accumulator can also be a transformer object that provides a 2-arity
	     * reducing iterator function, step, 0-arity initial value function, init, and
	     * 1-arity result extraction function result. The step function is used as the
	     * iterator function in reduce. The result function is used to convert the
	     * final accumulator into the return type and in most cases is R.identity. The
	     * init function is used to provide the initial accumulator.
	     *
	     * The iteration is performed with R.reduce after initializing the transducer.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig a -> (b -> b) -> [c] -> a
	     * @param {*} acc The initial accumulator value.
	     * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	     *
	     *      R.into([], transducer, numbers); //=> [2, 3]
	     *
	     *      var intoArray = R.into([]);
	     *      intoArray(transducer, numbers); //=> [2, 3]
	     */
	    var into = _curry3(function into(acc, xf, list) {
	        return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
	    });

	    /**
	     * Same as R.invertObj, however this accounts for objects with duplicate values
	     * by putting the values into an array.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig {s: x} -> {x: [ s, ... ]}
	     * @param {Object} obj The object or array to invert
	     * @return {Object} out A new object with keys
	     * in an array.
	     * @example
	     *
	     *      var raceResultsByFirstName = {
	     *        first: 'alice',
	     *        second: 'jake',
	     *        third: 'alice',
	     *      };
	     *      R.invert(raceResultsByFirstName);
	     *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
	     */
	    var invert = _curry1(function invert(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var idx = 0;
	        var out = {};
	        while (idx < len) {
	            var key = props[idx];
	            var val = obj[key];
	            var list = _has(val, out) ? out[val] : out[val] = [];
	            list[list.length] = key;
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new object with the keys of the given object as values, and the
	     * values of the given object, which are coerced to strings, as keys. Note
	     * that the last key found is preferred when handling the same value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig {s: x} -> {x: s}
	     * @param {Object} obj The object or array to invert
	     * @return {Object} out A new object
	     * @example
	     *
	     *      var raceResults = {
	     *        first: 'alice',
	     *        second: 'jake'
	     *      };
	     *      R.invertObj(raceResults);
	     *      //=> { 'alice': 'first', 'jake':'second' }
	     *
	     *      // Alternatively:
	     *      var raceResults = ['alice', 'jake'];
	     *      R.invertObj(raceResults);
	     *      //=> { 'alice': '0', 'jake':'1' }
	     */
	    var invertObj = _curry1(function invertObj(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var idx = 0;
	        var out = {};
	        while (idx < len) {
	            var key = props[idx];
	            out[obj[key]] = key;
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns `true` if the given value is its type's empty value; `false`
	     * otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig a -> Boolean
	     * @param {*} x
	     * @return {Boolean}
	     * @see R.empty
	     * @example
	     *
	     *      R.isEmpty([1, 2, 3]);   //=> false
	     *      R.isEmpty([]);          //=> true
	     *      R.isEmpty('');          //=> true
	     *      R.isEmpty(null);        //=> false
	     *      R.isEmpty({});          //=> true
	     *      R.isEmpty({length: 0}); //=> false
	     */
	    var isEmpty = _curry1(function isEmpty(x) {
	        return x != null && equals(x, empty(x));
	    });

	    /**
	     * Returns the last element of the given list or string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.4
	     * @category List
	     * @sig [a] -> a | Undefined
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @see R.init, R.head, R.tail
	     * @example
	     *
	     *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
	     *      R.last([]); //=> undefined
	     *
	     *      R.last('abc'); //=> 'c'
	     *      R.last(''); //=> ''
	     */
	    var last = nth(-1);

	    /**
	     * Returns the position of the last occurrence of an item in an array, or -1 if
	     * the item is not included in the array. `R.equals` is used to determine
	     * equality.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> Number
	     * @param {*} target The item to find.
	     * @param {Array} xs The array to search in.
	     * @return {Number} the index of the target, or -1 if the target is not found.
	     * @see R.indexOf
	     * @example
	     *
	     *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
	     *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
	     */
	    var lastIndexOf = _curry2(function lastIndexOf(target, xs) {
	        if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
	            return xs.lastIndexOf(target);
	        } else {
	            var idx = xs.length - 1;
	            while (idx >= 0) {
	                if (equals(xs[idx], target)) {
	                    return idx;
	                }
	                idx -= 1;
	            }
	            return -1;
	        }
	    });

	    /**
	     * Takes a function and
	     * a [functor](https://github.com/fantasyland/fantasy-land#functor),
	     * applies the function to each of the functor's values, and returns
	     * a functor of the same shape.
	     *
	     * Ramda provides suitable `map` implementations for `Array` and `Object`,
	     * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
	     *
	     * Dispatches to the `map` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * Also treats functions as functors and will compose them together.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Functor f => (a -> b) -> f a -> f b
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {Array} list The list to be iterated over.
	     * @return {Array} The new list.
	     * @see R.transduce, R.addIndex
	     * @example
	     *
	     *      var double = x => x * 2;
	     *
	     *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
	     *
	     *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
	     */
	    var map = _curry2(_dispatchable('map', _xmap, function map(fn, functor) {
	        switch (Object.prototype.toString.call(functor)) {
	        case '[object Function]':
	            return curryN(functor.length, function () {
	                return fn.call(this, functor.apply(this, arguments));
	            });
	        case '[object Object]':
	            return _reduce(function (acc, key) {
	                acc[key] = fn(functor[key]);
	                return acc;
	            }, {}, keys(functor));
	        default:
	            return _map(fn, functor);
	        }
	    }));

	    /**
	     * An Object-specific version of `map`. The function is applied to three
	     * arguments: *(value, key, obj)*. If only the value is significant, use
	     * `map` instead.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig ((*, String, Object) -> *) -> Object -> Object
	     * @param {Function} fn
	     * @param {Object} obj
	     * @return {Object}
	     * @see R.map
	     * @example
	     *
	     *      var values = { x: 1, y: 2, z: 3 };
	     *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
	     *
	     *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
	     */
	    var mapObjIndexed = _curry2(function mapObjIndexed(fn, obj) {
	        return _reduce(function (acc, key) {
	            acc[key] = fn(obj[key], key, obj);
	            return acc;
	        }, {}, keys(obj));
	    });

	    /**
	     * Creates a new object with the own properties of the two provided objects. If
	     * a key exists in both objects, the provided function is applied to the values
	     * associated with the key in each object, with the result being used as the
	     * value associated with the key in the returned object. The key will be
	     * excluded from the returned object if the resulting value is `undefined`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Object
	     * @sig (a -> a -> a) -> {a} -> {a} -> {a}
	     * @param {Function} fn
	     * @param {Object} l
	     * @param {Object} r
	     * @return {Object}
	     * @see R.merge, R.mergeWithKey
	     * @example
	     *
	     *      R.mergeWith(R.concat,
	     *                  { a: true, values: [10, 20] },
	     *                  { b: true, values: [15, 35] });
	     *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
	     */
	    var mergeWith = _curry3(function mergeWith(fn, l, r) {
	        return mergeWithKey(function (_, _l, _r) {
	            return fn(_l, _r);
	        }, l, r);
	    });

	    /**
	     * Takes a function `f` and a list of arguments, and returns a function `g`.
	     * When applied, `g` returns the result of applying `f` to the arguments
	     * provided initially followed by the arguments provided to `g`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
	     * @param {Function} f
	     * @param {Array} args
	     * @return {Function}
	     * @see R.partialRight
	     * @example
	     *
	     *      var multiply = (a, b) => a * b;
	     *      var double = R.partial(multiply, [2]);
	     *      double(2); //=> 4
	     *
	     *      var greet = (salutation, title, firstName, lastName) =>
	     *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	     *
	     *      var sayHello = R.partial(greet, ['Hello']);
	     *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
	     *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
	     */
	    var partial = _createPartialApplicator(_concat);

	    /**
	     * Takes a function `f` and a list of arguments, and returns a function `g`.
	     * When applied, `g` returns the result of applying `f` to the arguments
	     * provided to `g` followed by the arguments provided initially.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
	     * @param {Function} f
	     * @param {Array} args
	     * @return {Function}
	     * @see R.partial
	     * @example
	     *
	     *      var greet = (salutation, title, firstName, lastName) =>
	     *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	     *
	     *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
	     *
	     *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
	     */
	    var partialRight = _createPartialApplicator(flip(_concat));

	    /**
	     * Determines whether a nested path on an object has a specific value, in
	     * `R.equals` terms. Most likely used to filter a list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Relation
	     * @sig [String] -> * -> {String: *} -> Boolean
	     * @param {Array} path The path of the nested property to use
	     * @param {*} val The value to compare the nested property with
	     * @param {Object} obj The object to check the nested property in
	     * @return {Boolean} `true` if the value equals the nested object property,
	     *         `false` otherwise.
	     * @example
	     *
	     *      var user1 = { address: { zipCode: 90210 } };
	     *      var user2 = { address: { zipCode: 55555 } };
	     *      var user3 = { name: 'Bob' };
	     *      var users = [ user1, user2, user3 ];
	     *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
	     *      R.filter(isFamous, users); //=> [ user1 ]
	     */
	    var pathEq = _curry3(function pathEq(_path, val, obj) {
	        return equals(path(_path, obj), val);
	    });

	    /**
	     * Returns a new list by plucking the same named property off all objects in
	     * the list supplied.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig k -> [{k: v}] -> [v]
	     * @param {Number|String} key The key name to pluck off of each object.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of values for the given key.
	     * @see R.props
	     * @example
	     *
	     *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
	     *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
	     */
	    var pluck = _curry2(function pluck(p, list) {
	        return map(prop(p), list);
	    });

	    /**
	     * Reasonable analog to SQL `select` statement.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @category Relation
	     * @sig [k] -> [{k: v}] -> [{k: v}]
	     * @param {Array} props The property names to project
	     * @param {Array} objs The objects to query
	     * @return {Array} An array of objects with just the `props` properties.
	     * @example
	     *
	     *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
	     *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
	     *      var kids = [abby, fred];
	     *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
	     */
	    // passing `identity` gives correct arity
	    var project = useWith(_map, [
	        pickAll,
	        identity
	    ]);

	    /**
	     * Returns `true` if the specified object property is equal, in `R.equals`
	     * terms, to the given value; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig String -> a -> Object -> Boolean
	     * @param {String} name
	     * @param {*} val
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.equals, R.propSatisfies
	     * @example
	     *
	     *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
	     *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
	     *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
	     *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
	     *      var kids = [abby, fred, rusty, alois];
	     *      var hasBrownHair = R.propEq('hair', 'brown');
	     *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
	     */
	    var propEq = _curry3(function propEq(name, val, obj) {
	        return propSatisfies(equals(val), name, obj);
	    });

	    /**
	     * Returns `true` if the specified object property is of the given type;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Type
	     * @sig Type -> String -> Object -> Boolean
	     * @param {Function} type
	     * @param {String} name
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.is, R.propSatisfies
	     * @example
	     *
	     *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
	     *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
	     *      R.propIs(Number, 'x', {});            //=> false
	     */
	    var propIs = _curry3(function propIs(type, name, obj) {
	        return propSatisfies(is(type), name, obj);
	    });

	    /**
	     * Returns a single item by iterating through the list, successively calling
	     * the iterator function and passing it an accumulator value and the current
	     * value from the array, and then passing the result to the next call.
	     *
	     * The iterator function receives two values: *(acc, value)*. It may use
	     * `R.reduced` to shortcut the iteration.
	     *
	     * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
	     * arrays), unlike the native `Array.prototype.reduce` method. For more details
	     * on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
	     *
	     * Dispatches to the `reduce` method of the third argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig ((a, b) -> a) -> a -> [b] -> a
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.reduced, R.addIndex
	     * @example
	     *
	     *      var numbers = [1, 2, 3];
	     *      var add = (a, b) => a + b;
	     *
	     *      R.reduce(add, 10, numbers); //=> 16
	     */
	    var reduce = _curry3(_reduce);

	    /**
	     * Groups the elements of the list according to the result of calling
	     * the String-returning function `keyFn` on each element and reduces the elements
	     * of each group to a single value via the reducer function `valueFn`.
	     *
	     * This function is basically a more general `groupBy` function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category List
	     * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
	     * @param {Function} valueFn The function that reduces the elements of each group to a single
	     *        value. Receives two values, accumulator for a particular group and the current element.
	     * @param {*} acc The (initial) accumulator value for each group.
	     * @param {Function} keyFn The function that maps the list's element into a key.
	     * @param {Array} list The array to group.
	     * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
	     *         `valueFn` for elements which produced that key when passed to `keyFn`.
	     * @see R.groupBy, R.reduce
	     * @example
	     *
	     *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
	     *      var namesByGrade = reduceToNamesBy(function(student) {
	     *        var score = student.score;
	     *        return score < 65 ? 'F' :
	     *               score < 70 ? 'D' :
	     *               score < 80 ? 'C' :
	     *               score < 90 ? 'B' : 'A';
	     *      });
	     *      var students = [{name: 'Lucy', score: 92},
	     *                      {name: 'Drew', score: 85},
	     *                      // ...
	     *                      {name: 'Bart', score: 62}];
	     *      namesByGrade(students);
	     *      // {
	     *      //   'A': ['Lucy'],
	     *      //   'B': ['Drew']
	     *      //   // ...,
	     *      //   'F': ['Bart']
	     *      // }
	     */
	    var reduceBy = _curryN(4, [], function reduceBy(valueFn, valueAcc, keyFn, list) {
	        return _reduce(function (acc, elt) {
	            var key = keyFn(elt);
	            acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
	            return acc;
	        }, {}, list);
	    });

	    /**
	     * The complement of `filter`.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Filterable f => (a -> Boolean) -> f a -> f a
	     * @param {Function} pred
	     * @param {Array} filterable
	     * @return {Array}
	     * @see R.filter, R.transduce, R.addIndex
	     * @example
	     *
	     *      var isOdd = (n) => n % 2 === 1;
	     *
	     *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
	     *
	     *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	     */
	    var reject = _curry2(function reject(pred, filterable) {
	        return filter(_complement(pred), filterable);
	    });

	    /**
	     * Returns a fixed list of size `n` containing a specified identical value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig a -> n -> [a]
	     * @param {*} value The value to repeat.
	     * @param {Number} n The desired size of the output list.
	     * @return {Array} A new array containing `n` `value`s.
	     * @example
	     *
	     *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
	     *
	     *      var obj = {};
	     *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
	     *      repeatedObjs[0] === repeatedObjs[1]; //=> true
	     */
	    var repeat = _curry2(function repeat(value, n) {
	        return times(always(value), n);
	    });

	    /**
	     * Adds together all the elements of a list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list An array of numbers
	     * @return {Number} The sum of all the numbers in the list.
	     * @see R.reduce
	     * @example
	     *
	     *      R.sum([2,4,6,8,100,1]); //=> 121
	     */
	    var sum = reduce(add, 0);

	    /**
	     * Returns a new list containing the last `n` elements of the given list.
	     * If `n > list.length`, returns a list of `list.length` elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n The number of elements to return.
	     * @param {Array} xs The collection to consider.
	     * @return {Array}
	     * @see R.dropLast
	     * @example
	     *
	     *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
	     *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	     *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.takeLast(3, 'ramda');               //=> 'mda'
	     */
	    var takeLast = _curry2(function takeLast(n, xs) {
	        return drop(n >= 0 ? xs.length - n : 0, xs);
	    });

	    /**
	     * Initializes a transducer using supplied iterator function. Returns a single
	     * item by iterating through the list, successively calling the transformed
	     * iterator function and passing it an accumulator value and the current value
	     * from the array, and then passing the result to the next call.
	     *
	     * The iterator function receives two values: *(acc, value)*. It will be
	     * wrapped as a transformer to initialize the transducer. A transformer can be
	     * passed directly in place of an iterator function. In both cases, iteration
	     * may be stopped early with the `R.reduced` function.
	     *
	     * A transducer is a function that accepts a transformer and returns a
	     * transformer and can be composed directly.
	     *
	     * A transformer is an an object that provides a 2-arity reducing iterator
	     * function, step, 0-arity initial value function, init, and 1-arity result
	     * extraction function, result. The step function is used as the iterator
	     * function in reduce. The result function is used to convert the final
	     * accumulator into the return type and in most cases is R.identity. The init
	     * function can be used to provide an initial accumulator, but is ignored by
	     * transduce.
	     *
	     * The iteration is performed with R.reduce after initializing the transducer.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig (c -> c) -> (a,b -> a) -> a -> [b] -> a
	     * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array. Wrapped as transformer, if necessary, and used to
	     *        initialize the transducer
	     * @param {*} acc The initial accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.reduce, R.reduced, R.into
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	     *
	     *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
	     */
	    var transduce = curryN(4, function transduce(xf, fn, acc, list) {
	        return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
	    });

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of the elements
	     * of each list. Duplication is determined according to the value returned by
	     * applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The first and second lists concatenated, with
	     *         duplicates removed.
	     * @see R.union
	     * @example
	     *
	     *      var l1 = [{a: 1}, {a: 2}];
	     *      var l2 = [{a: 1}, {a: 4}];
	     *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
	     */
	    var unionWith = _curry3(function unionWith(pred, list1, list2) {
	        return uniqWith(pred, _concat(list1, list2));
	    });

	    /**
	     * Takes a spec object and a test object; returns true if the test satisfies
	     * the spec, false otherwise. An object satisfies the spec if, for each of the
	     * spec's own properties, accessing that property of the object gives the same
	     * value (in `R.equals` terms) as accessing that property of the spec.
	     *
	     * `whereEq` is a specialization of [`where`](#where).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Object
	     * @sig {String: *} -> {String: *} -> Boolean
	     * @param {Object} spec
	     * @param {Object} testObj
	     * @return {Boolean}
	     * @see R.where
	     * @example
	     *
	     *      // pred :: Object -> Boolean
	     *      var pred = R.whereEq({a: 1, b: 2});
	     *
	     *      pred({a: 1});              //=> false
	     *      pred({a: 1, b: 2});        //=> true
	     *      pred({a: 1, b: 2, c: 3});  //=> true
	     *      pred({a: 1, b: 1});        //=> false
	     */
	    var whereEq = _curry2(function whereEq(spec, testObj) {
	        return where(map(equals, spec), testObj);
	    });

	    var _flatCat = function () {
	        var preservingReduced = function (xf) {
	            return {
	                '@@transducer/init': _xfBase.init,
	                '@@transducer/result': function (result) {
	                    return xf['@@transducer/result'](result);
	                },
	                '@@transducer/step': function (result, input) {
	                    var ret = xf['@@transducer/step'](result, input);
	                    return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
	                }
	            };
	        };
	        return function _xcat(xf) {
	            var rxf = preservingReduced(xf);
	            return {
	                '@@transducer/init': _xfBase.init,
	                '@@transducer/result': function (result) {
	                    return rxf['@@transducer/result'](result);
	                },
	                '@@transducer/step': function (result, input) {
	                    return !isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
	                }
	            };
	        };
	    }();

	    // Array.prototype.indexOf doesn't exist below IE9
	    // manually crawl the list to distinguish between +0 and -0
	    // NaN
	    // non-zero numbers can utilise Set
	    // all these types can utilise Set
	    // null can utilise Set
	    // anything else not covered above, defer to R.equals
	    var _indexOf = function _indexOf(list, a, idx) {
	        var inf, item;
	        // Array.prototype.indexOf doesn't exist below IE9
	        if (typeof list.indexOf === 'function') {
	            switch (typeof a) {
	            case 'number':
	                if (a === 0) {
	                    // manually crawl the list to distinguish between +0 and -0
	                    inf = 1 / a;
	                    while (idx < list.length) {
	                        item = list[idx];
	                        if (item === 0 && 1 / item === inf) {
	                            return idx;
	                        }
	                        idx += 1;
	                    }
	                    return -1;
	                } else if (a !== a) {
	                    // NaN
	                    while (idx < list.length) {
	                        item = list[idx];
	                        if (typeof item === 'number' && item !== item) {
	                            return idx;
	                        }
	                        idx += 1;
	                    }
	                    return -1;
	                }
	                // non-zero numbers can utilise Set
	                return list.indexOf(a, idx);
	            // all these types can utilise Set
	            case 'string':
	            case 'boolean':
	            case 'function':
	            case 'undefined':
	                return list.indexOf(a, idx);
	            case 'object':
	                if (a === null) {
	                    // null can utilise Set
	                    return list.indexOf(a, idx);
	                }
	            }
	        }
	        // anything else not covered above, defer to R.equals
	        while (idx < list.length) {
	            if (equals(list[idx], a)) {
	                return idx;
	            }
	            idx += 1;
	        }
	        return -1;
	    };

	    var _xchain = _curry2(function _xchain(f, xf) {
	        return map(f, _flatCat(xf));
	    });

	    /**
	     * Takes a list of predicates and returns a predicate that returns true for a
	     * given list of arguments if every one of the provided predicates is satisfied
	     * by those arguments.
	     *
	     * The function returned is a curried function whose arity matches that of the
	     * highest-arity predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Logic
	     * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	     * @param {Array} preds
	     * @return {Function}
	     * @see R.anyPass
	     * @example
	     *
	     *      var isQueen = R.propEq('rank', 'Q');
	     *      var isSpade = R.propEq('suit', '♠︎');
	     *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
	     *
	     *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
	     *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
	     */
	    var allPass = _curry1(function allPass(preds) {
	        return curryN(reduce(max, 0, pluck('length', preds)), function () {
	            var idx = 0;
	            var len = preds.length;
	            while (idx < len) {
	                if (!preds[idx].apply(this, arguments)) {
	                    return false;
	                }
	                idx += 1;
	            }
	            return true;
	        });
	    });

	    /**
	     * Returns `true` if all elements are unique, in `R.equals` terms, otherwise
	     * `false`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category List
	     * @sig [a] -> Boolean
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if all elements are unique, else `false`.
	     * @deprecated since v0.20.0
	     * @example
	     *
	     *      R.allUniq(['1', 1]); //=> true
	     *      R.allUniq([1, 1]);   //=> false
	     *      R.allUniq([[42], [42]]); //=> false
	     */
	    var allUniq = _curry1(function allUniq(list) {
	        var len = list.length;
	        var idx = 0;
	        while (idx < len) {
	            if (_indexOf(list, list[idx], idx + 1) >= 0) {
	                return false;
	            }
	            idx += 1;
	        }
	        return true;
	    });

	    /**
	     * Takes a list of predicates and returns a predicate that returns true for a
	     * given list of arguments if at least one of the provided predicates is
	     * satisfied by those arguments.
	     *
	     * The function returned is a curried function whose arity matches that of the
	     * highest-arity predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Logic
	     * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	     * @param {Array} preds
	     * @return {Function}
	     * @see R.allPass
	     * @example
	     *
	     *      var gte = R.anyPass([R.gt, R.equals]);
	     *
	     *      gte(3, 2); //=> true
	     *      gte(2, 2); //=> true
	     *      gte(2, 3); //=> false
	     */
	    var anyPass = _curry1(function anyPass(preds) {
	        return curryN(reduce(max, 0, pluck('length', preds)), function () {
	            var idx = 0;
	            var len = preds.length;
	            while (idx < len) {
	                if (preds[idx].apply(this, arguments)) {
	                    return true;
	                }
	                idx += 1;
	            }
	            return false;
	        });
	    });

	    /**
	     * ap applies a list of functions to a list of values.
	     *
	     * Dispatches to the `ap` method of the second argument, if present. Also
	     * treats functions as applicatives.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Function
	     * @sig [f] -> [a] -> [f a]
	     * @param {Array} fns An array of functions
	     * @param {Array} vs An array of values
	     * @return {Array} An array of results of applying each of `fns` to all of `vs` in turn.
	     * @example
	     *
	     *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
	     */
	    // else
	    var ap = _curry2(function ap(applicative, fn) {
	        return typeof applicative.ap === 'function' ? applicative.ap(fn) : typeof applicative === 'function' ? curryN(Math.max(applicative.length, fn.length), function () {
	            return applicative.apply(this, arguments)(fn.apply(this, arguments));
	        }) : // else
	        _reduce(function (acc, f) {
	            return _concat(acc, map(f, fn));
	        }, [], applicative);
	    });

	    /**
	     * Given a spec object recursively mapping properties to functions, creates a
	     * function producing an object of the same structure, by mapping each property
	     * to the result of calling its associated function with the supplied arguments.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Function
	     * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
	     * @param {Object} spec an object recursively mapping properties to functions for
	     *        producing the values for these properties.
	     * @return {Function} A function that returns an object of the same structure
	     * as `spec', with each property set to the value returned by calling its
	     * associated function with the supplied arguments.
	     * @see R.juxt
	     * @example
	     *
	     *      var getMetrics = R.applySpec({
	     *                                      sum: R.add,
	     *                                      nested: { mul: R.multiply }
	     *                                   });
	     *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
	     */
	    var applySpec = _curry1(function applySpec(spec) {
	        spec = map(function (v) {
	            return typeof v == 'function' ? v : applySpec(v);
	        }, spec);
	        return curryN(reduce(max, 0, pluck('length', values(spec))), function () {
	            var args = arguments;
	            return map(function (f) {
	                return apply(f, args);
	            }, spec);
	        });
	    });

	    /**
	     * Returns the result of calling its first argument with the remaining
	     * arguments. This is occasionally useful as a converging function for
	     * `R.converge`: the left branch can produce a function while the right branch
	     * produces a value to be passed to that function as an argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig (*... -> a),*... -> a
	     * @param {Function} fn The function to apply to the remaining arguments.
	     * @param {...*} args Any number of positional arguments.
	     * @return {*}
	     * @see R.apply
	     * @example
	     *
	     *      var indentN = R.pipe(R.times(R.always(' ')),
	     *                           R.join(''),
	     *                           R.replace(/^(?!$)/gm));
	     *
	     *      var format = R.converge(R.call, [
	     *                                  R.pipe(R.prop('indent'), indentN),
	     *                                  R.prop('value')
	     *                              ]);
	     *
	     *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
	     */
	    var call = curry(function call(fn) {
	        return fn.apply(this, _slice(arguments, 1));
	    });

	    /**
	     * `chain` maps a function over a list and concatenates the results. `chain`
	     * is also known as `flatMap` in some libraries
	     *
	     * Dispatches to the `chain` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig (a -> [b]) -> [a] -> [b]
	     * @param {Function} fn
	     * @param {Array} list
	     * @return {Array}
	     * @example
	     *
	     *      var duplicate = n => [n, n];
	     *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
	     */
	    var chain = _curry2(_dispatchable('chain', _xchain, function chain(fn, monad) {
	        if (typeof monad === 'function') {
	            return function () {
	                return monad.call(this, fn.apply(this, arguments)).apply(this, arguments);
	            };
	        }
	        return _makeFlat(false)(map(fn, monad));
	    }));

	    /**
	     * Returns a function, `fn`, which encapsulates if/else-if/else logic.
	     * `R.cond` takes a list of [predicate, transform] pairs. All of the arguments
	     * to `fn` are applied to each of the predicates in turn until one returns a
	     * "truthy" value, at which point `fn` returns the result of applying its
	     * arguments to the corresponding transformer. If none of the predicates
	     * matches, `fn` returns undefined.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category Logic
	     * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
	     * @param {Array} pairs
	     * @return {Function}
	     * @example
	     *
	     *      var fn = R.cond([
	     *        [R.equals(0),   R.always('water freezes at 0°C')],
	     *        [R.equals(100), R.always('water boils at 100°C')],
	     *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
	     *      ]);
	     *      fn(0); //=> 'water freezes at 0°C'
	     *      fn(50); //=> 'nothing special happens at 50°C'
	     *      fn(100); //=> 'water boils at 100°C'
	     */
	    var cond = _curry1(function cond(pairs) {
	        var arity = reduce(max, 0, map(function (pair) {
	            return pair[0].length;
	        }, pairs));
	        return _arity(arity, function () {
	            var idx = 0;
	            while (idx < pairs.length) {
	                if (pairs[idx][0].apply(this, arguments)) {
	                    return pairs[idx][1].apply(this, arguments);
	                }
	                idx += 1;
	            }
	        });
	    });

	    /**
	     * Wraps a constructor function inside a curried function that can be called
	     * with the same arguments and returns the same type. The arity of the function
	     * returned is specified to allow using variadic constructor functions.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.0
	     * @category Function
	     * @sig Number -> (* -> {*}) -> (* -> {*})
	     * @param {Number} n The arity of the constructor function.
	     * @param {Function} Fn The constructor function to wrap.
	     * @return {Function} A wrapped, curried constructor function.
	     * @example
	     *
	     *      // Variadic constructor function
	     *      var Widget = () => {
	     *        this.children = Array.prototype.slice.call(arguments);
	     *        // ...
	     *      };
	     *      Widget.prototype = {
	     *        // ...
	     *      };
	     *      var allConfigs = [
	     *        // ...
	     *      ];
	     *      R.map(R.constructN(1, Widget), allConfigs); // a list of Widgets
	     */
	    var constructN = _curry2(function constructN(n, Fn) {
	        if (n > 10) {
	            throw new Error('Constructor with greater than ten arguments');
	        }
	        if (n === 0) {
	            return function () {
	                return new Fn();
	            };
	        }
	        return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
	            switch (arguments.length) {
	            case 1:
	                return new Fn($0);
	            case 2:
	                return new Fn($0, $1);
	            case 3:
	                return new Fn($0, $1, $2);
	            case 4:
	                return new Fn($0, $1, $2, $3);
	            case 5:
	                return new Fn($0, $1, $2, $3, $4);
	            case 6:
	                return new Fn($0, $1, $2, $3, $4, $5);
	            case 7:
	                return new Fn($0, $1, $2, $3, $4, $5, $6);
	            case 8:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
	            case 9:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
	            case 10:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
	            }
	        }));
	    });

	    /**
	     * Accepts a converging function and a list of branching functions and returns
	     * a new function. When invoked, this new function is applied to some
	     * arguments, each branching function is applied to those same arguments. The
	     * results of each branching function are passed as arguments to the converging
	     * function to produce the return value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.2
	     * @category Function
	     * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
	     * @param {Function} after A function. `after` will be invoked with the return values of
	     *        `fn1` and `fn2` as its arguments.
	     * @param {Array} functions A list of functions.
	     * @return {Function} A new function.
	     * @example
	     *
	     *      var add = (a, b) => a + b;
	     *      var multiply = (a, b) => a * b;
	     *      var subtract = (a, b) => a - b;
	     *
	     *      //≅ multiply( add(1, 2), subtract(1, 2) );
	     *      R.converge(multiply, [add, subtract])(1, 2); //=> -3
	     *
	     *      var add3 = (a, b, c) => a + b + c;
	     *      R.converge(add3, [multiply, add, subtract])(1, 2); //=> 4
	     */
	    var converge = _curry2(function converge(after, fns) {
	        return curryN(reduce(max, 0, pluck('length', fns)), function () {
	            var args = arguments;
	            var context = this;
	            return after.apply(context, _map(function (fn) {
	                return fn.apply(context, args);
	            }, fns));
	        });
	    });

	    /**
	     * Counts the elements of a list according to how many match each value of a
	     * key generated by the supplied function. Returns an object mapping the keys
	     * produced by `fn` to the number of occurrences in the list. Note that all
	     * keys are coerced to strings because of how JavaScript objects work.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> String) -> [a] -> {*}
	     * @param {Function} fn The function used to map values to keys.
	     * @param {Array} list The list to count elements from.
	     * @return {Object} An object mapping keys to number of occurrences in the list.
	     * @example
	     *
	     *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
	     *      var letters = R.split('', 'abcABCaaaBBc');
	     *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
	     *      R.countBy(R.toLower)(letters);   //=> {'a': 5, 'b': 4, 'c': 3}
	     */
	    var countBy = reduceBy(function (acc, elem) {
	        return acc + 1;
	    }, 0);

	    /**
	     * Returns a new list without any consecutively repeating elements. Equality is
	     * determined by applying the supplied predicate two consecutive elements. The
	     * first element in a series of equal element is the one being preserved.
	     *
	     * Dispatches to the `dropRepeatsWith` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list The array to consider.
	     * @return {Array} `list` without repeating elements.
	     * @see R.transduce
	     * @example
	     *
	     *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
	     *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
	     */
	    var dropRepeatsWith = _curry2(_dispatchable('dropRepeatsWith', _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
	        var result = [];
	        var idx = 1;
	        var len = list.length;
	        if (len !== 0) {
	            result[0] = list[0];
	            while (idx < len) {
	                if (!pred(last(result), list[idx])) {
	                    result[result.length] = list[idx];
	                }
	                idx += 1;
	            }
	        }
	        return result;
	    }));

	    /**
	     * Takes a function and two values in its domain and returns `true` if the
	     * values map to the same value in the codomain; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Relation
	     * @sig (a -> b) -> a -> a -> Boolean
	     * @param {Function} f
	     * @param {*} x
	     * @param {*} y
	     * @return {Boolean}
	     * @example
	     *
	     *      R.eqBy(Math.abs, 5, -5); //=> true
	     */
	    var eqBy = _curry3(function eqBy(f, x, y) {
	        return equals(f(x), f(y));
	    });

	    /**
	     * Reports whether two objects have the same value, in `R.equals` terms, for
	     * the specified property. Useful as a curried predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig k -> {k: v} -> {k: v} -> Boolean
	     * @param {String} prop The name of the property to compare
	     * @param {Object} obj1
	     * @param {Object} obj2
	     * @return {Boolean}
	     *
	     * @example
	     *
	     *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
	     *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
	     *      R.eqProps('a', o1, o2); //=> false
	     *      R.eqProps('c', o1, o2); //=> true
	     */
	    var eqProps = _curry3(function eqProps(prop, obj1, obj2) {
	        return equals(obj1[prop], obj2[prop]);
	    });

	    /**
	     * Splits a list into sub-lists stored in an object, based on the result of
	     * calling a String-returning function on each element, and grouping the
	     * results according to values returned.
	     *
	     * Dispatches to the `groupBy` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> String) -> [a] -> {String: [a]}
	     * @param {Function} fn Function :: a -> String
	     * @param {Array} list The array to group
	     * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
	     *         that produced that key when passed to `fn`.
	     * @see R.transduce
	     * @example
	     *
	     *      var byGrade = R.groupBy(function(student) {
	     *        var score = student.score;
	     *        return score < 65 ? 'F' :
	     *               score < 70 ? 'D' :
	     *               score < 80 ? 'C' :
	     *               score < 90 ? 'B' : 'A';
	     *      });
	     *      var students = [{name: 'Abby', score: 84},
	     *                      {name: 'Eddy', score: 58},
	     *                      // ...
	     *                      {name: 'Jack', score: 69}];
	     *      byGrade(students);
	     *      // {
	     *      //   'A': [{name: 'Dianne', score: 99}],
	     *      //   'B': [{name: 'Abby', score: 84}]
	     *      //   // ...,
	     *      //   'F': [{name: 'Eddy', score: 58}]
	     *      // }
	     */
	    var groupBy = _curry2(_dispatchable('groupBy', _xgroupBy, reduceBy(function (acc, item) {
	        if (acc == null) {
	            acc = [];
	        }
	        acc.push(item);
	        return acc;
	    }, null)));

	    /**
	     * Given a function that generates a key, turns a list of objects into an
	     * object indexing the objects by the given key. Note that if multiple
	     * objects generate the same value for the indexing key only the last value
	     * will be included in the generated object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
	     * @param {Function} fn Function :: a -> String
	     * @param {Array} array The array of objects to index
	     * @return {Object} An object indexing each array element by the given property.
	     * @example
	     *
	     *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
	     *      R.indexBy(R.prop('id'), list);
	     *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
	     */
	    var indexBy = reduceBy(function (acc, elem) {
	        return elem;
	    }, null);

	    /**
	     * Returns the position of the first occurrence of an item in an array, or -1
	     * if the item is not included in the array. `R.equals` is used to determine
	     * equality.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> Number
	     * @param {*} target The item to find.
	     * @param {Array} xs The array to search in.
	     * @return {Number} the index of the target, or -1 if the target is not found.
	     * @see R.lastIndexOf
	     * @example
	     *
	     *      R.indexOf(3, [1,2,3,4]); //=> 2
	     *      R.indexOf(10, [1,2,3,4]); //=> -1
	     */
	    var indexOf = _curry2(function indexOf(target, xs) {
	        return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
	    });

	    /**
	     * juxt applies a list of functions to a list of values.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Function
	     * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
	     * @param {Array} fns An array of functions
	     * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
	     * @see R.applySpec
	     * @example
	     *
	     *      var range = R.juxt([Math.min, Math.max]);
	     *      range(3, 4, 9, -3); //=> [-3, 9]
	     */
	    var juxt = _curry1(function juxt(fns) {
	        return converge(_arrayOf, fns);
	    });

	    /**
	     * Returns a lens for the given getter and setter functions. The getter "gets"
	     * the value of the focus; the setter "sets" the value of the focus. The setter
	     * should not mutate the data structure.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
	     * @param {Function} getter
	     * @param {Function} setter
	     * @return {Lens}
	     * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
	     *
	     *      R.view(xLens, {x: 1, y: 2});            //=> 1
	     *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	     *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	     */
	    var lens = _curry2(function lens(getter, setter) {
	        return function (toFunctorFn) {
	            return function (target) {
	                return map(function (focus) {
	                    return setter(focus, target);
	                }, toFunctorFn(getter(target)));
	            };
	        };
	    });

	    /**
	     * Returns a lens whose focus is the specified index.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Number -> Lens s a
	     * @param {Number} n
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var headLens = R.lensIndex(0);
	     *
	     *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
	     *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
	     *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
	     */
	    var lensIndex = _curry1(function lensIndex(n) {
	        return lens(nth(n), update(n));
	    });

	    /**
	     * Returns a lens whose focus is the specified path.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig [String] -> Lens s a
	     * @param {Array} path The path to use.
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var xyLens = R.lensPath(['x', 'y']);
	     *
	     *      R.view(xyLens, {x: {y: 2, z: 3}});            //=> 2
	     *      R.set(xyLens, 4, {x: {y: 2, z: 3}});          //=> {x: {y: 4, z: 3}}
	     *      R.over(xyLens, R.negate, {x: {y: 2, z: 3}});  //=> {x: {y: -2, z: 3}}
	     */
	    var lensPath = _curry1(function lensPath(p) {
	        return lens(path(p), assocPath(p));
	    });

	    /**
	     * Returns a lens whose focus is the specified property.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig String -> Lens s a
	     * @param {String} k
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.view(xLens, {x: 1, y: 2});            //=> 1
	     *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	     *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	     */
	    var lensProp = _curry1(function lensProp(k) {
	        return lens(prop(k), assoc(k));
	    });

	    /**
	     * "lifts" a function to be the specified arity, so that it may "map over" that
	     * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Function
	     * @sig Number -> (*... -> *) -> ([*]... -> [*])
	     * @param {Function} fn The function to lift into higher context
	     * @return {Function} The lifted function.
	     * @see R.lift, R.ap
	     * @example
	     *
	     *      var madd3 = R.liftN(3, R.curryN(3, (...args) => R.sum(args)));
	     *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	     */
	    var liftN = _curry2(function liftN(arity, fn) {
	        var lifted = curryN(arity, fn);
	        return curryN(arity, function () {
	            return _reduce(ap, map(lifted, arguments[0]), _slice(arguments, 1));
	        });
	    });

	    /**
	     * Returns the mean of the given list of numbers.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list
	     * @return {Number}
	     * @example
	     *
	     *      R.mean([2, 7, 9]); //=> 6
	     *      R.mean([]); //=> NaN
	     */
	    var mean = _curry1(function mean(list) {
	        return sum(list) / list.length;
	    });

	    /**
	     * Returns the median of the given list of numbers.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list
	     * @return {Number}
	     * @example
	     *
	     *      R.median([2, 9, 7]); //=> 7
	     *      R.median([7, 2, 10, 9]); //=> 8
	     *      R.median([]); //=> NaN
	     */
	    var median = _curry1(function median(list) {
	        var len = list.length;
	        if (len === 0) {
	            return NaN;
	        }
	        var width = 2 - len % 2;
	        var idx = (len - width) / 2;
	        return mean(_slice(list).sort(function (a, b) {
	            return a < b ? -1 : a > b ? 1 : 0;
	        }).slice(idx, idx + width));
	    });

	    /**
	     * Takes a predicate and a list or other "filterable" object and returns the
	     * pair of filterable objects of the same type of elements which do and do not
	     * satisfy, the predicate, respectively.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.4
	     * @category List
	     * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
	     * @param {Function} pred A predicate to determine which side the element belongs to.
	     * @param {Array} filterable the list (or other filterable) to partition.
	     * @return {Array} An array, containing first the subset of elements that satisfy the
	     *         predicate, and second the subset of elements that do not satisfy.
	     * @see R.filter, R.reject
	     * @example
	     *
	     *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
	     *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
	     *
	     *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
	     *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
	     */
	    var partition = juxt([
	        filter,
	        reject
	    ]);

	    /**
	     * Performs left-to-right function composition. The leftmost function may have
	     * any arity; the remaining functions must be unary.
	     *
	     * In some libraries this function is named `sequence`.
	     *
	     * **Note:** The result of pipe is not automatically curried.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.compose
	     * @example
	     *
	     *      var f = R.pipe(Math.pow, R.negate, R.inc);
	     *
	     *      f(3, 4); // -(3^4) + 1
	     */
	    var pipe = function pipe() {
	        if (arguments.length === 0) {
	            throw new Error('pipe requires at least one argument');
	        }
	        return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
	    };

	    /**
	     * Performs left-to-right composition of one or more Promise-returning
	     * functions. The leftmost function may have any arity; the remaining functions
	     * must be unary.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.composeP
	     * @example
	     *
	     *      //  followersForUser :: String -> Promise [User]
	     *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
	     */
	    var pipeP = function pipeP() {
	        if (arguments.length === 0) {
	            throw new Error('pipeP requires at least one argument');
	        }
	        return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
	    };

	    /**
	     * Multiplies together all the elements of a list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list An array of numbers
	     * @return {Number} The product of all the numbers in the list.
	     * @see R.reduce
	     * @example
	     *
	     *      R.product([2,4,6,8,100,1]); //=> 38400
	     */
	    var product = reduce(multiply, 1);

	    /**
	     * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
	     * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
	     * Applicative of Traversable.
	     *
	     * Dispatches to the `sequence` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
	     * @param {Function} of
	     * @param {*} traversable
	     * @return {*}
	     * @see R.traverse
	     * @example
	     *
	     *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
	     *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
	     *
	     *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
	     *      R.sequence(R.of, Nothing());       //=> [Nothing()]
	     */
	    var sequence = _curry2(function sequence(of, traversable) {
	        return typeof traversable.sequence === 'function' ? traversable.sequence(of) : reduceRight(function (acc, x) {
	            return ap(map(prepend, x), acc);
	        }, of([]), traversable);
	    });

	    /**
	     * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
	     * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
	     * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
	     * into an Applicative of Traversable.
	     *
	     * Dispatches to the `sequence` method of the third argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
	     * @param {Function} of
	     * @param {Function} f
	     * @param {*} traversable
	     * @return {*}
	     * @see R.sequence
	     * @example
	     *
	     *      // Returns `Nothing` if the given divisor is `0`
	     *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
	     *
	     *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
	     *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
	     */
	    var traverse = _curry3(function traverse(of, f, traversable) {
	        return sequence(of, map(f, traversable));
	    });

	    /**
	     * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
	     * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig Chain c => c (c a) -> c a
	     * @param {*} list
	     * @return {*}
	     * @see R.flatten, R.chain
	     * @example
	     *
	     *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
	     *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
	     */
	    var unnest = chain(_identity);

	    var _contains = function _contains(a, list) {
	        return _indexOf(list, a, 0) >= 0;
	    };

	    //  mapPairs :: (Object, [String]) -> [String]
	    var _toString = function _toString(x, seen) {
	        var recur = function recur(y) {
	            var xs = seen.concat([x]);
	            return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
	        };
	        //  mapPairs :: (Object, [String]) -> [String]
	        var mapPairs = function (obj, keys) {
	            return _map(function (k) {
	                return _quote(k) + ': ' + recur(obj[k]);
	            }, keys.slice().sort());
	        };
	        switch (Object.prototype.toString.call(x)) {
	        case '[object Arguments]':
	            return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
	        case '[object Array]':
	            return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
	                return /^\d+$/.test(k);
	            }, keys(x)))).join(', ') + ']';
	        case '[object Boolean]':
	            return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
	        case '[object Date]':
	            return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
	        case '[object Null]':
	            return 'null';
	        case '[object Number]':
	            return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
	        case '[object String]':
	            return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
	        case '[object Undefined]':
	            return 'undefined';
	        default:
	            if (typeof x.toString === 'function') {
	                var repr = x.toString();
	                if (repr !== '[object Object]') {
	                    return repr;
	                }
	            }
	            return '{' + mapPairs(x, keys(x)).join(', ') + '}';
	        }
	    };

	    /**
	     * Performs right-to-left function composition. The rightmost function may have
	     * any arity; the remaining functions must be unary.
	     *
	     * **Note:** The result of compose is not automatically curried.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.pipe
	     * @example
	     *
	     *      var f = R.compose(R.inc, R.negate, Math.pow);
	     *
	     *      f(3, 4); // -(3^4) + 1
	     */
	    var compose = function compose() {
	        if (arguments.length === 0) {
	            throw new Error('compose requires at least one argument');
	        }
	        return pipe.apply(this, reverse(arguments));
	    };

	    /**
	     * Returns the right-to-left Kleisli composition of the provided functions,
	     * each of which must return a value of a type supported by [`chain`](#chain).
	     *
	     * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Function
	     * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (m a -> m z)
	     * @param {...Function}
	     * @return {Function}
	     * @see R.pipeK
	     * @example
	     *
	     *      //  parseJson :: String -> Maybe *
	     *      //  get :: String -> Object -> Maybe *
	     *
	     *      //  getStateCode :: Maybe String -> Maybe String
	     *      var getStateCode = R.composeK(
	     *        R.compose(Maybe.of, R.toUpper),
	     *        get('state'),
	     *        get('address'),
	     *        get('user'),
	     *        parseJson
	     *      );
	     *
	     *      getStateCode(Maybe.of('{"user":{"address":{"state":"ny"}}}'));
	     *      //=> Just('NY')
	     *      getStateCode(Maybe.of('[Invalid JSON]'));
	     *      //=> Nothing()
	     */
	    var composeK = function composeK() {
	        return compose.apply(this, prepend(identity, map(chain, arguments)));
	    };

	    /**
	     * Performs right-to-left composition of one or more Promise-returning
	     * functions. The rightmost function may have any arity; the remaining
	     * functions must be unary.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.pipeP
	     * @example
	     *
	     *      //  followersForUser :: String -> Promise [User]
	     *      var followersForUser = R.composeP(db.getFollowers, db.getUserById);
	     */
	    var composeP = function composeP() {
	        if (arguments.length === 0) {
	            throw new Error('composeP requires at least one argument');
	        }
	        return pipeP.apply(this, reverse(arguments));
	    };

	    /**
	     * Wraps a constructor function inside a curried function that can be called
	     * with the same arguments and returns the same type.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (* -> {*}) -> (* -> {*})
	     * @param {Function} Fn The constructor function to wrap.
	     * @return {Function} A wrapped, curried constructor function.
	     * @example
	     *
	     *      // Constructor function
	     *      var Widget = config => {
	     *        // ...
	     *      };
	     *      Widget.prototype = {
	     *        // ...
	     *      };
	     *      var allConfigs = [
	     *        // ...
	     *      ];
	     *      R.map(R.construct(Widget), allConfigs); // a list of Widgets
	     */
	    var construct = _curry1(function construct(Fn) {
	        return constructN(Fn.length, Fn);
	    });

	    /**
	     * Returns `true` if the specified value is equal, in `R.equals` terms, to at
	     * least one element of the given list; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> Boolean
	     * @param {Object} a The item to compare against.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the item is in the list, `false` otherwise.
	     * @see R.any
	     * @example
	     *
	     *      R.contains(3, [1, 2, 3]); //=> true
	     *      R.contains(4, [1, 2, 3]); //=> false
	     *      R.contains([42], [[42]]); //=> true
	     */
	    var contains = _curry2(_contains);

	    /**
	     * Finds the set (i.e. no duplicates) of all elements in the first list not
	     * contained in the second list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` that are not in `list2`.
	     * @see R.differenceWith
	     * @example
	     *
	     *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
	     *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
	     */
	    var difference = _curry2(function difference(first, second) {
	        var out = [];
	        var idx = 0;
	        var firstLen = first.length;
	        while (idx < firstLen) {
	            if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
	                out[out.length] = first[idx];
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new list without any consecutively repeating elements. `R.equals`
	     * is used to determine equality.
	     *
	     * Dispatches to the `dropRepeats` method of the first argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig [a] -> [a]
	     * @param {Array} list The array to consider.
	     * @return {Array} `list` without repeating elements.
	     * @see R.transduce
	     * @example
	     *
	     *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
	     */
	    var dropRepeats = _curry1(_dispatchable('dropRepeats', _xdropRepeatsWith(equals), dropRepeatsWith(equals)));

	    /**
	     * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
	     * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Function
	     * @sig (*... -> *) -> ([*]... -> [*])
	     * @param {Function} fn The function to lift into higher context
	     * @return {Function} The lifted function.
	     * @see R.liftN
	     * @example
	     *
	     *      var madd3 = R.lift(R.curry((a, b, c) => a + b + c));
	     *
	     *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	     *
	     *      var madd5 = R.lift(R.curry((a, b, c, d, e) => a + b + c + d + e));
	     *
	     *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
	     */
	    var lift = _curry1(function lift(fn) {
	        return liftN(fn.length, fn);
	    });

	    /**
	     * Returns a partial copy of an object omitting the keys specified.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [String] -> {String: *} -> {String: *}
	     * @param {Array} names an array of String property names to omit from the new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with properties from `names` not on it.
	     * @see R.pick
	     * @example
	     *
	     *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
	     */
	    var omit = _curry2(function omit(names, obj) {
	        var result = {};
	        for (var prop in obj) {
	            if (!_contains(prop, names)) {
	                result[prop] = obj[prop];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns the left-to-right Kleisli composition of the provided functions,
	     * each of which must return a value of a type supported by [`chain`](#chain).
	     *
	     * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Function
	     * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (m a -> m z)
	     * @param {...Function}
	     * @return {Function}
	     * @see R.composeK
	     * @example
	     *
	     *      //  parseJson :: String -> Maybe *
	     *      //  get :: String -> Object -> Maybe *
	     *
	     *      //  getStateCode :: Maybe String -> Maybe String
	     *      var getStateCode = R.pipeK(
	     *        parseJson,
	     *        get('user'),
	     *        get('address'),
	     *        get('state'),
	     *        R.compose(Maybe.of, R.toUpper)
	     *      );
	     *
	     *      getStateCode(Maybe.of('{"user":{"address":{"state":"ny"}}}'));
	     *      //=> Just('NY')
	     *      getStateCode(Maybe.of('[Invalid JSON]'));
	     *      //=> Nothing()
	     */
	    var pipeK = function pipeK() {
	        return composeK.apply(this, reverse(arguments));
	    };

	    /**
	     * Returns the string representation of the given value. `eval`'ing the output
	     * should result in a value equivalent to the input value. Many of the built-in
	     * `toString` methods do not satisfy this requirement.
	     *
	     * If the given value is an `[object Object]` with a `toString` method other
	     * than `Object.prototype.toString`, this method is invoked with no arguments
	     * to produce the return value. This means user-defined constructor functions
	     * can provide a suitable `toString` method. For example:
	     *
	     *     function Point(x, y) {
	     *       this.x = x;
	     *       this.y = y;
	     *     }
	     *
	     *     Point.prototype.toString = function() {
	     *       return 'new Point(' + this.x + ', ' + this.y + ')';
	     *     };
	     *
	     *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category String
	     * @sig * -> String
	     * @param {*} val
	     * @return {String}
	     * @example
	     *
	     *      R.toString(42); //=> '42'
	     *      R.toString('abc'); //=> '"abc"'
	     *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
	     *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
	     *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
	     */
	    var toString = _curry1(function toString(val) {
	        return _toString(val, []);
	    });

	    /**
	     * Returns a new list without values in the first argument.
	     * `R.equals` is used to determine equality.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig [a] -> [a] -> [a]
	     * @param {Array} list1 The values to be removed from `list2`.
	     * @param {Array} list2 The array to remove values from.
	     * @return {Array} The new array without values in `list1`.
	     * @see R.transduce
	     * @example
	     *
	     *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
	     */
	    var without = _curry2(function (xs, list) {
	        return reject(flip(_contains)(xs), list);
	    });

	    // A simple Set type that honours R.equals semantics
	    /* globals Set */
	    /**
	       * Combines the logic for checking whether an item is a member of the set and
	       * for adding a new item to the set.
	       *
	       * @param item       The item to check or add to the Set instance.
	       * @param shouldAdd  If true, the item will be added to the set if it doesn't
	       *                   already exist.
	       * @param set        The set instance to check or add to.
	       * @return {boolean} When shouldAdd is true, this will return true when a new
	       *                   item was added otherwise false. When shouldAdd is false,
	       *                   this will return true if the item already exists, otherwise
	       *                   false.
	       */
	    // distinguish between +0 and -0
	    // these types can all utilise Set
	    // set._items['boolean'] holds a two element array
	    // representing [ falseExists, trueExists ]
	    // compare functions for reference equality
	    /* falls through */
	    // reduce the search size of heterogeneous sets by creating buckets
	    // for each type.
	    // scan through all previously applied items
	    var _Set = function () {
	        function _Set() {
	            /* globals Set */
	            this._nativeSet = typeof Set === 'function' ? new Set() : null;
	            this._items = {};
	        }
	        _Set.prototype.add = function (item) {
	            return hasOrAdd(item, true, this);
	        };
	        _Set.prototype.has = function (item) {
	            return hasOrAdd(item, false, this);
	        };
	        /**
	       * Combines the logic for checking whether an item is a member of the set and
	       * for adding a new item to the set.
	       *
	       * @param item       The item to check or add to the Set instance.
	       * @param shouldAdd  If true, the item will be added to the set if it doesn't
	       *                   already exist.
	       * @param set        The set instance to check or add to.
	       * @return {boolean} When shouldAdd is true, this will return true when a new
	       *                   item was added otherwise false. When shouldAdd is false,
	       *                   this will return true if the item already exists, otherwise
	       *                   false.
	       */
	        function hasOrAdd(item, shouldAdd, set) {
	            var type = typeof item;
	            var prevSize, newSize;
	            switch (type) {
	            case 'string':
	            case 'number':
	                // distinguish between +0 and -0
	                if (item === 0 && !set._items['-0'] && 1 / item === -Infinity) {
	                    if (shouldAdd) {
	                        set._items['-0'] = true;
	                    }
	                    return shouldAdd;
	                }
	                // these types can all utilise Set
	                if (set._nativeSet !== null) {
	                    if (shouldAdd) {
	                        prevSize = set._nativeSet.size;
	                        set._nativeSet.add(item);
	                        newSize = set._nativeSet.size;
	                        return newSize > prevSize;
	                    } else {
	                        return set._nativeSet.has(item);
	                    }
	                } else {
	                    if (!(type in set._items)) {
	                        if (shouldAdd) {
	                            set._items[type] = {};
	                            set._items[type][item] = true;
	                        }
	                        return shouldAdd;
	                    } else if (item in set._items[type]) {
	                        return !shouldAdd;
	                    } else {
	                        if (shouldAdd) {
	                            set._items[type][item] = true;
	                        }
	                        return shouldAdd;
	                    }
	                }
	            case 'boolean':
	                // set._items['boolean'] holds a two element array
	                // representing [ falseExists, trueExists ]
	                if (type in set._items) {
	                    var bIdx = item ? 1 : 0;
	                    if (set._items[type][bIdx]) {
	                        return !shouldAdd;
	                    } else {
	                        if (shouldAdd) {
	                            set._items[type][bIdx] = true;
	                        }
	                        return shouldAdd;
	                    }
	                } else {
	                    if (shouldAdd) {
	                        set._items[type] = item ? [
	                            false,
	                            true
	                        ] : [
	                            true,
	                            false
	                        ];
	                    }
	                    return shouldAdd;
	                }
	            case 'function':
	                // compare functions for reference equality
	                if (set._nativeSet !== null) {
	                    if (shouldAdd) {
	                        prevSize = set._nativeSet.size;
	                        set._nativeSet.add(item);
	                        newSize = set._nativeSet.size;
	                        return newSize > prevSize;
	                    } else {
	                        return set._nativeSet.has(item);
	                    }
	                } else {
	                    if (!(type in set._items)) {
	                        if (shouldAdd) {
	                            set._items[type] = [item];
	                        }
	                        return shouldAdd;
	                    }
	                    if (!_contains(item, set._items[type])) {
	                        if (shouldAdd) {
	                            set._items[type].push(item);
	                        }
	                        return shouldAdd;
	                    }
	                }
	                return !shouldAdd;
	            case 'undefined':
	                if (set._items[type]) {
	                    return !shouldAdd;
	                } else {
	                    if (shouldAdd) {
	                        set._items[type] = true;
	                    }
	                    return shouldAdd;
	                }
	            case 'object':
	                if (item === null) {
	                    if (!set._items['null']) {
	                        if (shouldAdd) {
	                            set._items['null'] = true;
	                        }
	                        return shouldAdd;
	                    }
	                    return !shouldAdd;
	                }
	            /* falls through */
	            default:
	                // reduce the search size of heterogeneous sets by creating buckets
	                // for each type.
	                type = Object.prototype.toString.call(item);
	                if (!(type in set._items)) {
	                    if (shouldAdd) {
	                        set._items[type] = [item];
	                    }
	                    return shouldAdd;
	                }
	                // scan through all previously applied items
	                if (!_contains(item, set._items[type])) {
	                    if (shouldAdd) {
	                        set._items[type].push(item);
	                    }
	                    return shouldAdd;
	                }
	                return !shouldAdd;
	            }
	        }
	        return _Set;
	    }();

	    /**
	     * A function wrapping calls to the two functions in an `&&` operation,
	     * returning the result of the first function if it is false-y and the result
	     * of the second function otherwise. Note that this is short-circuited,
	     * meaning that the second function will not be invoked if the first returns a
	     * false-y value.
	     *
	     * In addition to functions, `R.both` also accepts any fantasy-land compatible
	     * applicative functor.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	     * @param {Function} f a predicate
	     * @param {Function} g another predicate
	     * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
	     * @see R.and
	     * @example
	     *
	     *      var gt10 = x => x > 10;
	     *      var even = x => x % 2 === 0;
	     *      var f = R.both(gt10, even);
	     *      f(100); //=> true
	     *      f(101); //=> false
	     */
	    var both = _curry2(function both(f, g) {
	        return _isFunction(f) ? function _both() {
	            return f.apply(this, arguments) && g.apply(this, arguments);
	        } : lift(and)(f, g);
	    });

	    /**
	     * Takes a function `f` and returns a function `g` such that:
	     *
	     *   - applying `g` to zero or more arguments will give __true__ if applying
	     *     the same arguments to `f` gives a logical __false__ value; and
	     *
	     *   - applying `g` to zero or more arguments will give __false__ if applying
	     *     the same arguments to `f` gives a logical __true__ value.
	     *
	     * `R.complement` will work on all other functors as well.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category Logic
	     * @sig (*... -> *) -> (*... -> Boolean)
	     * @param {Function} f
	     * @return {Function}
	     * @see R.not
	     * @example
	     *
	     *      var isEven = n => n % 2 === 0;
	     *      var isOdd = R.complement(isEven);
	     *      isOdd(21); //=> true
	     *      isOdd(42); //=> false
	     */
	    var complement = lift(not);

	    /**
	     * A function wrapping calls to the two functions in an `||` operation,
	     * returning the result of the first function if it is truth-y and the result
	     * of the second function otherwise. Note that this is short-circuited,
	     * meaning that the second function will not be invoked if the first returns a
	     * truth-y value.
	     *
	     * In addition to functions, `R.either` also accepts any fantasy-land compatible
	     * applicative functor.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	     * @param {Function} f a predicate
	     * @param {Function} g another predicate
	     * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
	     * @see R.or
	     * @example
	     *
	     *      var gt10 = x => x > 10;
	     *      var even = x => x % 2 === 0;
	     *      var f = R.either(gt10, even);
	     *      f(101); //=> true
	     *      f(8); //=> true
	     */
	    var either = _curry2(function either(f, g) {
	        return _isFunction(f) ? function _either() {
	            return f.apply(this, arguments) || g.apply(this, arguments);
	        } : lift(or)(f, g);
	    });

	    /**
	     * Turns a named method with a specified arity into a function that can be
	     * called directly supplied with arguments and a target object.
	     *
	     * The returned function is curried and accepts `arity + 1` parameters where
	     * the final parameter is the target object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
	     * @param {Number} arity Number of arguments the returned function should take
	     *        before the target object.
	     * @param {String} method Name of the method to call.
	     * @return {Function} A new curried function.
	     * @example
	     *
	     *      var sliceFrom = R.invoker(1, 'slice');
	     *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
	     *      var sliceFrom6 = R.invoker(2, 'slice')(6);
	     *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
	     */
	    var invoker = _curry2(function invoker(arity, method) {
	        return curryN(arity + 1, function () {
	            var target = arguments[arity];
	            if (target != null && is(Function, target[method])) {
	                return target[method].apply(target, _slice(arguments, 0, arity));
	            }
	            throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
	        });
	    });

	    /**
	     * Returns a string made by inserting the `separator` between each element and
	     * concatenating all the elements into a single string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig String -> [a] -> String
	     * @param {Number|String} separator The string used to separate the elements.
	     * @param {Array} xs The elements to join into a string.
	     * @return {String} str The string made by concatenating `xs` with `separator`.
	     * @see R.split
	     * @example
	     *
	     *      var spacer = R.join(' ');
	     *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
	     *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
	     */
	    var join = invoker(1, 'join');

	    /**
	     * Creates a new function that, when invoked, caches the result of calling `fn`
	     * for a given argument set and returns the result. Subsequent calls to the
	     * memoized `fn` with the same argument set will not result in an additional
	     * call to `fn`; instead, the cached result for that set of arguments will be
	     * returned.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (*... -> a) -> (*... -> a)
	     * @param {Function} fn The function to memoize.
	     * @return {Function} Memoized version of `fn`.
	     * @example
	     *
	     *      var count = 0;
	     *      var factorial = R.memoize(n => {
	     *        count += 1;
	     *        return R.product(R.range(1, n + 1));
	     *      });
	     *      factorial(5); //=> 120
	     *      factorial(5); //=> 120
	     *      factorial(5); //=> 120
	     *      count; //=> 1
	     */
	    var memoize = _curry1(function memoize(fn) {
	        var cache = {};
	        return _arity(fn.length, function () {
	            var key = toString(arguments);
	            if (!_has(key, cache)) {
	                cache[key] = fn.apply(this, arguments);
	            }
	            return cache[key];
	        });
	    });

	    /**
	     * Splits a string into an array of strings based on the given
	     * separator.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category String
	     * @sig (String | RegExp) -> String -> [String]
	     * @param {String|RegExp} sep The pattern.
	     * @param {String} str The string to separate into an array.
	     * @return {Array} The array of strings from `str` separated by `str`.
	     * @see R.join
	     * @example
	     *
	     *      var pathComponents = R.split('/');
	     *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
	     *
	     *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
	     */
	    var split = invoker(1, 'split');

	    /**
	     * Determines whether a given string matches a given regular expression.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category String
	     * @sig RegExp -> String -> Boolean
	     * @param {RegExp} pattern
	     * @param {String} str
	     * @return {Boolean}
	     * @see R.match
	     * @example
	     *
	     *      R.test(/^x/, 'xyz'); //=> true
	     *      R.test(/^y/, 'xyz'); //=> false
	     */
	    var test = _curry2(function test(pattern, str) {
	        if (!_isRegExp(pattern)) {
	            throw new TypeError('\u2018test\u2019 requires a value of type RegExp as its first argument; received ' + toString(pattern));
	        }
	        return _cloneRegExp(pattern).test(str);
	    });

	    /**
	     * The lower case version of a string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to lower case.
	     * @return {String} The lower case version of `str`.
	     * @see R.toUpper
	     * @example
	     *
	     *      R.toLower('XYZ'); //=> 'xyz'
	     */
	    var toLower = invoker(0, 'toLowerCase');

	    /**
	     * The upper case version of a string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to upper case.
	     * @return {String} The upper case version of `str`.
	     * @see R.toLower
	     * @example
	     *
	     *      R.toUpper('abc'); //=> 'ABC'
	     */
	    var toUpper = invoker(0, 'toUpperCase');

	    /**
	     * Returns a new list containing only one copy of each element in the original
	     * list, based upon the value returned by applying the supplied function to
	     * each list element. Prefers the first item if the supplied function produces
	     * the same value on two items. `R.equals` is used for comparison.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig (a -> b) -> [a] -> [a]
	     * @param {Function} fn A function used to produce a value to use during comparisons.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
	     */
	    var uniqBy = _curry2(function uniqBy(fn, list) {
	        var set = new _Set();
	        var result = [];
	        var idx = 0;
	        var appliedItem, item;
	        while (idx < list.length) {
	            item = list[idx];
	            appliedItem = fn(item);
	            if (set.add(appliedItem)) {
	                result.push(item);
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns the result of concatenating the given lists or strings.
	     *
	     * Dispatches to the `concat` method of the first argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a] -> [a]
	     * @sig String -> String -> String
	     * @param {Array|String} a
	     * @param {Array|String} b
	     * @return {Array|String}
	     *
	     * @example
	     *
	     *      R.concat([], []); //=> []
	     *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	     *      R.concat('ABC', 'DEF'); // 'ABCDEF'
	     */
	    var concat = flip(invoker(1, 'concat'));

	    /**
	     * Finds the set (i.e. no duplicates) of all elements contained in the first or
	     * second list, but not both.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` or `list2`, but not both.
	     * @see R.symmetricDifferenceWith
	     * @example
	     *
	     *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
	     *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
	     */
	    var symmetricDifference = _curry2(function symmetricDifference(list1, list2) {
	        return concat(difference(list1, list2), difference(list2, list1));
	    });

	    /**
	     * Finds the set (i.e. no duplicates) of all elements contained in the first or
	     * second list, but not both. Duplication is determined according to the value
	     * returned by applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [a] -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` or `list2`, but not both.
	     * @see R.symmetricDifference
	     * @example
	     *
	     *      var eqA = R.eqBy(R.prop('a'));
	     *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
	     *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
	     *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
	     */
	    var symmetricDifferenceWith = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
	        return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
	    });

	    /**
	     * Returns a new list containing only one copy of each element in the original
	     * list. `R.equals` is used to determine equality.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a]
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
	     *      R.uniq([1, '1']);     //=> [1, '1']
	     *      R.uniq([[42], [42]]); //=> [[42]]
	     */
	    var uniq = uniqBy(identity);

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of those
	     * elements common to both lists.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The list of elements found in both `list1` and `list2`.
	     * @see R.intersectionWith
	     * @example
	     *
	     *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
	     */
	    var intersection = _curry2(function intersection(list1, list2) {
	        var lookupList, filteredList;
	        if (list1.length > list2.length) {
	            lookupList = list1;
	            filteredList = list2;
	        } else {
	            lookupList = list2;
	            filteredList = list1;
	        }
	        return uniq(_filter(flip(_contains)(lookupList), filteredList));
	    });

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of the elements
	     * of each list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} as The first list.
	     * @param {Array} bs The second list.
	     * @return {Array} The first and second lists concatenated, with
	     *         duplicates removed.
	     * @example
	     *
	     *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
	     */
	    var union = _curry2(compose(uniq, _concat));

	    var R = {
	        F: F,
	        T: T,
	        __: __,
	        add: add,
	        addIndex: addIndex,
	        adjust: adjust,
	        all: all,
	        allPass: allPass,
	        allUniq: allUniq,
	        always: always,
	        and: and,
	        any: any,
	        anyPass: anyPass,
	        ap: ap,
	        aperture: aperture,
	        append: append,
	        apply: apply,
	        applySpec: applySpec,
	        assoc: assoc,
	        assocPath: assocPath,
	        binary: binary,
	        bind: bind,
	        both: both,
	        call: call,
	        chain: chain,
	        clamp: clamp,
	        clone: clone,
	        comparator: comparator,
	        complement: complement,
	        compose: compose,
	        composeK: composeK,
	        composeP: composeP,
	        concat: concat,
	        cond: cond,
	        construct: construct,
	        constructN: constructN,
	        contains: contains,
	        converge: converge,
	        countBy: countBy,
	        curry: curry,
	        curryN: curryN,
	        dec: dec,
	        defaultTo: defaultTo,
	        difference: difference,
	        differenceWith: differenceWith,
	        dissoc: dissoc,
	        dissocPath: dissocPath,
	        divide: divide,
	        drop: drop,
	        dropLast: dropLast,
	        dropLastWhile: dropLastWhile,
	        dropRepeats: dropRepeats,
	        dropRepeatsWith: dropRepeatsWith,
	        dropWhile: dropWhile,
	        either: either,
	        empty: empty,
	        eqBy: eqBy,
	        eqProps: eqProps,
	        equals: equals,
	        evolve: evolve,
	        filter: filter,
	        find: find,
	        findIndex: findIndex,
	        findLast: findLast,
	        findLastIndex: findLastIndex,
	        flatten: flatten,
	        flip: flip,
	        forEach: forEach,
	        fromPairs: fromPairs,
	        groupBy: groupBy,
	        groupWith: groupWith,
	        gt: gt,
	        gte: gte,
	        has: has,
	        hasIn: hasIn,
	        head: head,
	        identical: identical,
	        identity: identity,
	        ifElse: ifElse,
	        inc: inc,
	        indexBy: indexBy,
	        indexOf: indexOf,
	        init: init,
	        insert: insert,
	        insertAll: insertAll,
	        intersection: intersection,
	        intersectionWith: intersectionWith,
	        intersperse: intersperse,
	        into: into,
	        invert: invert,
	        invertObj: invertObj,
	        invoker: invoker,
	        is: is,
	        isArrayLike: isArrayLike,
	        isEmpty: isEmpty,
	        isNil: isNil,
	        join: join,
	        juxt: juxt,
	        keys: keys,
	        keysIn: keysIn,
	        last: last,
	        lastIndexOf: lastIndexOf,
	        length: length,
	        lens: lens,
	        lensIndex: lensIndex,
	        lensPath: lensPath,
	        lensProp: lensProp,
	        lift: lift,
	        liftN: liftN,
	        lt: lt,
	        lte: lte,
	        map: map,
	        mapAccum: mapAccum,
	        mapAccumRight: mapAccumRight,
	        mapObjIndexed: mapObjIndexed,
	        match: match,
	        mathMod: mathMod,
	        max: max,
	        maxBy: maxBy,
	        mean: mean,
	        median: median,
	        memoize: memoize,
	        merge: merge,
	        mergeAll: mergeAll,
	        mergeWith: mergeWith,
	        mergeWithKey: mergeWithKey,
	        min: min,
	        minBy: minBy,
	        modulo: modulo,
	        multiply: multiply,
	        nAry: nAry,
	        negate: negate,
	        none: none,
	        not: not,
	        nth: nth,
	        nthArg: nthArg,
	        objOf: objOf,
	        of: of,
	        omit: omit,
	        once: once,
	        or: or,
	        over: over,
	        pair: pair,
	        partial: partial,
	        partialRight: partialRight,
	        partition: partition,
	        path: path,
	        pathEq: pathEq,
	        pathOr: pathOr,
	        pathSatisfies: pathSatisfies,
	        pick: pick,
	        pickAll: pickAll,
	        pickBy: pickBy,
	        pipe: pipe,
	        pipeK: pipeK,
	        pipeP: pipeP,
	        pluck: pluck,
	        prepend: prepend,
	        product: product,
	        project: project,
	        prop: prop,
	        propEq: propEq,
	        propIs: propIs,
	        propOr: propOr,
	        propSatisfies: propSatisfies,
	        props: props,
	        range: range,
	        reduce: reduce,
	        reduceBy: reduceBy,
	        reduceRight: reduceRight,
	        reduced: reduced,
	        reject: reject,
	        remove: remove,
	        repeat: repeat,
	        replace: replace,
	        reverse: reverse,
	        scan: scan,
	        sequence: sequence,
	        set: set,
	        slice: slice,
	        sort: sort,
	        sortBy: sortBy,
	        split: split,
	        splitAt: splitAt,
	        splitEvery: splitEvery,
	        splitWhen: splitWhen,
	        subtract: subtract,
	        sum: sum,
	        symmetricDifference: symmetricDifference,
	        symmetricDifferenceWith: symmetricDifferenceWith,
	        tail: tail,
	        take: take,
	        takeLast: takeLast,
	        takeLastWhile: takeLastWhile,
	        takeWhile: takeWhile,
	        tap: tap,
	        test: test,
	        times: times,
	        toLower: toLower,
	        toPairs: toPairs,
	        toPairsIn: toPairsIn,
	        toString: toString,
	        toUpper: toUpper,
	        transduce: transduce,
	        transpose: transpose,
	        traverse: traverse,
	        trim: trim,
	        tryCatch: tryCatch,
	        type: type,
	        unapply: unapply,
	        unary: unary,
	        uncurryN: uncurryN,
	        unfold: unfold,
	        union: union,
	        unionWith: unionWith,
	        uniq: uniq,
	        uniqBy: uniqBy,
	        uniqWith: uniqWith,
	        unless: unless,
	        unnest: unnest,
	        until: until,
	        update: update,
	        useWith: useWith,
	        values: values,
	        valuesIn: valuesIn,
	        view: view,
	        when: when,
	        where: where,
	        whereEq: whereEq,
	        without: without,
	        wrap: wrap,
	        xprod: xprod,
	        zip: zip,
	        zipObj: zipObj,
	        zipWith: zipWith
	    };
	  /* eslint-env amd */

	  /* TEST_ENTRY_POINT */

	  if (true) {
	    module.exports = R;
	  } else if (typeof define === 'function' && define.amd) {
	    define(function() { return R; });
	  } else {
	    this.R = R;
	  }

	}.call(this));


/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * Knockout JavaScript library v3.4.0
	 * (c) Steven Sanderson - http://knockoutjs.com/
	 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
	 */

	(function(){
	var DEBUG=true;
	(function(undefined){
	    // (0, eval)('this') is a robust way of getting a reference to the global object
	    // For details, see http://stackoverflow.com/questions/14119988/return-this-0-evalthis/14120023#14120023
	    var window = this || (0, eval)('this'),
	        document = window['document'],
	        navigator = window['navigator'],
	        jQueryInstance = window["jQuery"],
	        JSON = window["JSON"];
	(function(factory) {
	    // Support three module loading scenarios
	    if ("function" === 'function' && __webpack_require__(8)['amd']) {
	        // [1] AMD anonymous module
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (true) {
	        // [2] CommonJS/Node.js
	        factory(module['exports'] || exports);  // module.exports is for Node.js
	    } else {
	        // [3] No module loader (plain <script> tag) - put directly in global namespace
	        factory(window['ko'] = {});
	    }
	}(function(koExports, amdRequire){
	// Internally, all KO objects are attached to koExports (even the non-exported ones whose names will be minified by the closure compiler).
	// In the future, the following "ko" variable may be made distinct from "koExports" so that private objects are not externally reachable.
	var ko = typeof koExports !== 'undefined' ? koExports : {};
	// Google Closure Compiler helpers (used only to make the minified file smaller)
	ko.exportSymbol = function(koPath, object) {
	    var tokens = koPath.split(".");

	    // In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
	    // At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)
	    var target = ko;

	    for (var i = 0; i < tokens.length - 1; i++)
	        target = target[tokens[i]];
	    target[tokens[tokens.length - 1]] = object;
	};
	ko.exportProperty = function(owner, publicName, object) {
	    owner[publicName] = object;
	};
	ko.version = "3.4.0";

	ko.exportSymbol('version', ko.version);
	// For any options that may affect various areas of Knockout and aren't directly associated with data binding.
	ko.options = {
	    'deferUpdates': false,
	    'useOnlyNativeEvents': false
	};

	//ko.exportSymbol('options', ko.options);   // 'options' isn't minified
	ko.utils = (function () {
	    function objectForEach(obj, action) {
	        for (var prop in obj) {
	            if (obj.hasOwnProperty(prop)) {
	                action(prop, obj[prop]);
	            }
	        }
	    }

	    function extend(target, source) {
	        if (source) {
	            for(var prop in source) {
	                if(source.hasOwnProperty(prop)) {
	                    target[prop] = source[prop];
	                }
	            }
	        }
	        return target;
	    }

	    function setPrototypeOf(obj, proto) {
	        obj.__proto__ = proto;
	        return obj;
	    }

	    var canSetPrototype = ({ __proto__: [] } instanceof Array);
	    var canUseSymbols = !DEBUG && typeof Symbol === 'function';

	    // Represent the known event types in a compact way, then at runtime transform it into a hash with event name as key (for fast lookup)
	    var knownEvents = {}, knownEventTypesByEventName = {};
	    var keyEventTypeName = (navigator && /Firefox\/2/i.test(navigator.userAgent)) ? 'KeyboardEvent' : 'UIEvents';
	    knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
	    knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
	    objectForEach(knownEvents, function(eventType, knownEventsForType) {
	        if (knownEventsForType.length) {
	            for (var i = 0, j = knownEventsForType.length; i < j; i++)
	                knownEventTypesByEventName[knownEventsForType[i]] = eventType;
	        }
	    });
	    var eventsThatMustBeRegisteredUsingAttachEvent = { 'propertychange': true }; // Workaround for an IE9 issue - https://github.com/SteveSanderson/knockout/issues/406

	    // Detect IE versions for bug workarounds (uses IE conditionals, not UA string, for robustness)
	    // Note that, since IE 10 does not support conditional comments, the following logic only detects IE < 10.
	    // Currently this is by design, since IE 10+ behaves correctly when treated as a standard browser.
	    // If there is a future need to detect specific versions of IE10+, we will amend this.
	    var ieVersion = document && (function() {
	        var version = 3, div = document.createElement('div'), iElems = div.getElementsByTagName('i');

	        // Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment
	        while (
	            div.innerHTML = '<!--[if gt IE ' + (++version) + ']><i></i><![endif]-->',
	            iElems[0]
	        ) {}
	        return version > 4 ? version : undefined;
	    }());
	    var isIe6 = ieVersion === 6,
	        isIe7 = ieVersion === 7;

	    function isClickOnCheckableElement(element, eventType) {
	        if ((ko.utils.tagNameLower(element) !== "input") || !element.type) return false;
	        if (eventType.toLowerCase() != "click") return false;
	        var inputType = element.type;
	        return (inputType == "checkbox") || (inputType == "radio");
	    }

	    // For details on the pattern for changing node classes
	    // see: https://github.com/knockout/knockout/issues/1597
	    var cssClassNameRegex = /\S+/g;

	    function toggleDomNodeCssClass(node, classNames, shouldHaveClass) {
	        var addOrRemoveFn;
	        if (classNames) {
	            if (typeof node.classList === 'object') {
	                addOrRemoveFn = node.classList[shouldHaveClass ? 'add' : 'remove'];
	                ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
	                    addOrRemoveFn.call(node.classList, className);
	                });
	            } else if (typeof node.className['baseVal'] === 'string') {
	                // SVG tag .classNames is an SVGAnimatedString instance
	                toggleObjectClassPropertyString(node.className, 'baseVal', classNames, shouldHaveClass);
	            } else {
	                // node.className ought to be a string.
	                toggleObjectClassPropertyString(node, 'className', classNames, shouldHaveClass);
	            }
	        }
	    }

	    function toggleObjectClassPropertyString(obj, prop, classNames, shouldHaveClass) {
	        // obj/prop is either a node/'className' or a SVGAnimatedString/'baseVal'.
	        var currentClassNames = obj[prop].match(cssClassNameRegex) || [];
	        ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
	            ko.utils.addOrRemoveItem(currentClassNames, className, shouldHaveClass);
	        });
	        obj[prop] = currentClassNames.join(" ");
	    }

	    return {
	        fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],

	        arrayForEach: function (array, action) {
	            for (var i = 0, j = array.length; i < j; i++)
	                action(array[i], i);
	        },

	        arrayIndexOf: function (array, item) {
	            if (typeof Array.prototype.indexOf == "function")
	                return Array.prototype.indexOf.call(array, item);
	            for (var i = 0, j = array.length; i < j; i++)
	                if (array[i] === item)
	                    return i;
	            return -1;
	        },

	        arrayFirst: function (array, predicate, predicateOwner) {
	            for (var i = 0, j = array.length; i < j; i++)
	                if (predicate.call(predicateOwner, array[i], i))
	                    return array[i];
	            return null;
	        },

	        arrayRemoveItem: function (array, itemToRemove) {
	            var index = ko.utils.arrayIndexOf(array, itemToRemove);
	            if (index > 0) {
	                array.splice(index, 1);
	            }
	            else if (index === 0) {
	                array.shift();
	            }
	        },

	        arrayGetDistinctValues: function (array) {
	            array = array || [];
	            var result = [];
	            for (var i = 0, j = array.length; i < j; i++) {
	                if (ko.utils.arrayIndexOf(result, array[i]) < 0)
	                    result.push(array[i]);
	            }
	            return result;
	        },

	        arrayMap: function (array, mapping) {
	            array = array || [];
	            var result = [];
	            for (var i = 0, j = array.length; i < j; i++)
	                result.push(mapping(array[i], i));
	            return result;
	        },

	        arrayFilter: function (array, predicate) {
	            array = array || [];
	            var result = [];
	            for (var i = 0, j = array.length; i < j; i++)
	                if (predicate(array[i], i))
	                    result.push(array[i]);
	            return result;
	        },

	        arrayPushAll: function (array, valuesToPush) {
	            if (valuesToPush instanceof Array)
	                array.push.apply(array, valuesToPush);
	            else
	                for (var i = 0, j = valuesToPush.length; i < j; i++)
	                    array.push(valuesToPush[i]);
	            return array;
	        },

	        addOrRemoveItem: function(array, value, included) {
	            var existingEntryIndex = ko.utils.arrayIndexOf(ko.utils.peekObservable(array), value);
	            if (existingEntryIndex < 0) {
	                if (included)
	                    array.push(value);
	            } else {
	                if (!included)
	                    array.splice(existingEntryIndex, 1);
	            }
	        },

	        canSetPrototype: canSetPrototype,

	        extend: extend,

	        setPrototypeOf: setPrototypeOf,

	        setPrototypeOfOrExtend: canSetPrototype ? setPrototypeOf : extend,

	        objectForEach: objectForEach,

	        objectMap: function(source, mapping) {
	            if (!source)
	                return source;
	            var target = {};
	            for (var prop in source) {
	                if (source.hasOwnProperty(prop)) {
	                    target[prop] = mapping(source[prop], prop, source);
	                }
	            }
	            return target;
	        },

	        emptyDomNode: function (domNode) {
	            while (domNode.firstChild) {
	                ko.removeNode(domNode.firstChild);
	            }
	        },

	        moveCleanedNodesToContainerElement: function(nodes) {
	            // Ensure it's a real array, as we're about to reparent the nodes and
	            // we don't want the underlying collection to change while we're doing that.
	            var nodesArray = ko.utils.makeArray(nodes);
	            var templateDocument = (nodesArray[0] && nodesArray[0].ownerDocument) || document;

	            var container = templateDocument.createElement('div');
	            for (var i = 0, j = nodesArray.length; i < j; i++) {
	                container.appendChild(ko.cleanNode(nodesArray[i]));
	            }
	            return container;
	        },

	        cloneNodes: function (nodesArray, shouldCleanNodes) {
	            for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
	                var clonedNode = nodesArray[i].cloneNode(true);
	                newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
	            }
	            return newNodesArray;
	        },

	        setDomNodeChildren: function (domNode, childNodes) {
	            ko.utils.emptyDomNode(domNode);
	            if (childNodes) {
	                for (var i = 0, j = childNodes.length; i < j; i++)
	                    domNode.appendChild(childNodes[i]);
	            }
	        },

	        replaceDomNodes: function (nodeToReplaceOrNodeArray, newNodesArray) {
	            var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;
	            if (nodesToReplaceArray.length > 0) {
	                var insertionPoint = nodesToReplaceArray[0];
	                var parent = insertionPoint.parentNode;
	                for (var i = 0, j = newNodesArray.length; i < j; i++)
	                    parent.insertBefore(newNodesArray[i], insertionPoint);
	                for (var i = 0, j = nodesToReplaceArray.length; i < j; i++) {
	                    ko.removeNode(nodesToReplaceArray[i]);
	                }
	            }
	        },

	        fixUpContinuousNodeArray: function(continuousNodeArray, parentNode) {
	            // Before acting on a set of nodes that were previously outputted by a template function, we have to reconcile
	            // them against what is in the DOM right now. It may be that some of the nodes have already been removed, or that
	            // new nodes might have been inserted in the middle, for example by a binding. Also, there may previously have been
	            // leading comment nodes (created by rewritten string-based templates) that have since been removed during binding.
	            // So, this function translates the old "map" output array into its best guess of the set of current DOM nodes.
	            //
	            // Rules:
	            //   [A] Any leading nodes that have been removed should be ignored
	            //       These most likely correspond to memoization nodes that were already removed during binding
	            //       See https://github.com/knockout/knockout/pull/440
	            //   [B] Any trailing nodes that have been remove should be ignored
	            //       This prevents the code here from adding unrelated nodes to the array while processing rule [C]
	            //       See https://github.com/knockout/knockout/pull/1903
	            //   [C] We want to output a continuous series of nodes. So, ignore any nodes that have already been removed,
	            //       and include any nodes that have been inserted among the previous collection

	            if (continuousNodeArray.length) {
	                // The parent node can be a virtual element; so get the real parent node
	                parentNode = (parentNode.nodeType === 8 && parentNode.parentNode) || parentNode;

	                // Rule [A]
	                while (continuousNodeArray.length && continuousNodeArray[0].parentNode !== parentNode)
	                    continuousNodeArray.splice(0, 1);

	                // Rule [B]
	                while (continuousNodeArray.length > 1 && continuousNodeArray[continuousNodeArray.length - 1].parentNode !== parentNode)
	                    continuousNodeArray.length--;

	                // Rule [C]
	                if (continuousNodeArray.length > 1) {
	                    var current = continuousNodeArray[0], last = continuousNodeArray[continuousNodeArray.length - 1];
	                    // Replace with the actual new continuous node set
	                    continuousNodeArray.length = 0;
	                    while (current !== last) {
	                        continuousNodeArray.push(current);
	                        current = current.nextSibling;
	                    }
	                    continuousNodeArray.push(last);
	                }
	            }
	            return continuousNodeArray;
	        },

	        setOptionNodeSelectionState: function (optionNode, isSelected) {
	            // IE6 sometimes throws "unknown error" if you try to write to .selected directly, whereas Firefox struggles with setAttribute. Pick one based on browser.
	            if (ieVersion < 7)
	                optionNode.setAttribute("selected", isSelected);
	            else
	                optionNode.selected = isSelected;
	        },

	        stringTrim: function (string) {
	            return string === null || string === undefined ? '' :
	                string.trim ?
	                    string.trim() :
	                    string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
	        },

	        stringStartsWith: function (string, startsWith) {
	            string = string || "";
	            if (startsWith.length > string.length)
	                return false;
	            return string.substring(0, startsWith.length) === startsWith;
	        },

	        domNodeIsContainedBy: function (node, containedByNode) {
	            if (node === containedByNode)
	                return true;
	            if (node.nodeType === 11)
	                return false; // Fixes issue #1162 - can't use node.contains for document fragments on IE8
	            if (containedByNode.contains)
	                return containedByNode.contains(node.nodeType === 3 ? node.parentNode : node);
	            if (containedByNode.compareDocumentPosition)
	                return (containedByNode.compareDocumentPosition(node) & 16) == 16;
	            while (node && node != containedByNode) {
	                node = node.parentNode;
	            }
	            return !!node;
	        },

	        domNodeIsAttachedToDocument: function (node) {
	            return ko.utils.domNodeIsContainedBy(node, node.ownerDocument.documentElement);
	        },

	        anyDomNodeIsAttachedToDocument: function(nodes) {
	            return !!ko.utils.arrayFirst(nodes, ko.utils.domNodeIsAttachedToDocument);
	        },

	        tagNameLower: function(element) {
	            // For HTML elements, tagName will always be upper case; for XHTML elements, it'll be lower case.
	            // Possible future optimization: If we know it's an element from an XHTML document (not HTML),
	            // we don't need to do the .toLowerCase() as it will always be lower case anyway.
	            return element && element.tagName && element.tagName.toLowerCase();
	        },

	        catchFunctionErrors: function (delegate) {
	            return ko['onError'] ? function () {
	                try {
	                    return delegate.apply(this, arguments);
	                } catch (e) {
	                    ko['onError'] && ko['onError'](e);
	                    throw e;
	                }
	            } : delegate;
	        },

	        setTimeout: function (handler, timeout) {
	            return setTimeout(ko.utils.catchFunctionErrors(handler), timeout);
	        },

	        deferError: function (error) {
	            setTimeout(function () {
	                ko['onError'] && ko['onError'](error);
	                throw error;
	            }, 0);
	        },

	        registerEventHandler: function (element, eventType, handler) {
	            var wrappedHandler = ko.utils.catchFunctionErrors(handler);

	            var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];
	            if (!ko.options['useOnlyNativeEvents'] && !mustUseAttachEvent && jQueryInstance) {
	                jQueryInstance(element)['bind'](eventType, wrappedHandler);
	            } else if (!mustUseAttachEvent && typeof element.addEventListener == "function")
	                element.addEventListener(eventType, wrappedHandler, false);
	            else if (typeof element.attachEvent != "undefined") {
	                var attachEventHandler = function (event) { wrappedHandler.call(element, event); },
	                    attachEventName = "on" + eventType;
	                element.attachEvent(attachEventName, attachEventHandler);

	                // IE does not dispose attachEvent handlers automatically (unlike with addEventListener)
	                // so to avoid leaks, we have to remove them manually. See bug #856
	                ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
	                    element.detachEvent(attachEventName, attachEventHandler);
	                });
	            } else
	                throw new Error("Browser doesn't support addEventListener or attachEvent");
	        },

	        triggerEvent: function (element, eventType) {
	            if (!(element && element.nodeType))
	                throw new Error("element must be a DOM node when calling triggerEvent");

	            // For click events on checkboxes and radio buttons, jQuery toggles the element checked state *after* the
	            // event handler runs instead of *before*. (This was fixed in 1.9 for checkboxes but not for radio buttons.)
	            // IE doesn't change the checked state when you trigger the click event using "fireEvent".
	            // In both cases, we'll use the click method instead.
	            var useClickWorkaround = isClickOnCheckableElement(element, eventType);

	            if (!ko.options['useOnlyNativeEvents'] && jQueryInstance && !useClickWorkaround) {
	                jQueryInstance(element)['trigger'](eventType);
	            } else if (typeof document.createEvent == "function") {
	                if (typeof element.dispatchEvent == "function") {
	                    var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
	                    var event = document.createEvent(eventCategory);
	                    event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
	                    element.dispatchEvent(event);
	                }
	                else
	                    throw new Error("The supplied element doesn't support dispatchEvent");
	            } else if (useClickWorkaround && element.click) {
	                element.click();
	            } else if (typeof element.fireEvent != "undefined") {
	                element.fireEvent("on" + eventType);
	            } else {
	                throw new Error("Browser doesn't support triggering events");
	            }
	        },

	        unwrapObservable: function (value) {
	            return ko.isObservable(value) ? value() : value;
	        },

	        peekObservable: function (value) {
	            return ko.isObservable(value) ? value.peek() : value;
	        },

	        toggleDomNodeCssClass: toggleDomNodeCssClass,

	        setTextContent: function(element, textContent) {
	            var value = ko.utils.unwrapObservable(textContent);
	            if ((value === null) || (value === undefined))
	                value = "";

	            // We need there to be exactly one child: a text node.
	            // If there are no children, more than one, or if it's not a text node,
	            // we'll clear everything and create a single text node.
	            var innerTextNode = ko.virtualElements.firstChild(element);
	            if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
	                ko.virtualElements.setDomNodeChildren(element, [element.ownerDocument.createTextNode(value)]);
	            } else {
	                innerTextNode.data = value;
	            }

	            ko.utils.forceRefresh(element);
	        },

	        setElementName: function(element, name) {
	            element.name = name;

	            // Workaround IE 6/7 issue
	            // - https://github.com/SteveSanderson/knockout/issues/197
	            // - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/
	            if (ieVersion <= 7) {
	                try {
	                    element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
	                }
	                catch(e) {} // For IE9 with doc mode "IE9 Standards" and browser mode "IE9 Compatibility View"
	            }
	        },

	        forceRefresh: function(node) {
	            // Workaround for an IE9 rendering bug - https://github.com/SteveSanderson/knockout/issues/209
	            if (ieVersion >= 9) {
	                // For text nodes and comment nodes (most likely virtual elements), we will have to refresh the container
	                var elem = node.nodeType == 1 ? node : node.parentNode;
	                if (elem.style)
	                    elem.style.zoom = elem.style.zoom;
	            }
	        },

	        ensureSelectElementIsRenderedCorrectly: function(selectElement) {
	            // Workaround for IE9 rendering bug - it doesn't reliably display all the text in dynamically-added select boxes unless you force it to re-render by updating the width.
	            // (See https://github.com/SteveSanderson/knockout/issues/312, http://stackoverflow.com/questions/5908494/select-only-shows-first-char-of-selected-option)
	            // Also fixes IE7 and IE8 bug that causes selects to be zero width if enclosed by 'if' or 'with'. (See issue #839)
	            if (ieVersion) {
	                var originalWidth = selectElement.style.width;
	                selectElement.style.width = 0;
	                selectElement.style.width = originalWidth;
	            }
	        },

	        range: function (min, max) {
	            min = ko.utils.unwrapObservable(min);
	            max = ko.utils.unwrapObservable(max);
	            var result = [];
	            for (var i = min; i <= max; i++)
	                result.push(i);
	            return result;
	        },

	        makeArray: function(arrayLikeObject) {
	            var result = [];
	            for (var i = 0, j = arrayLikeObject.length; i < j; i++) {
	                result.push(arrayLikeObject[i]);
	            };
	            return result;
	        },

	        createSymbolOrString: function(identifier) {
	            return canUseSymbols ? Symbol(identifier) : identifier;
	        },

	        isIe6 : isIe6,
	        isIe7 : isIe7,
	        ieVersion : ieVersion,

	        getFormFields: function(form, fieldName) {
	            var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
	            var isMatchingField = (typeof fieldName == 'string')
	                ? function(field) { return field.name === fieldName }
	                : function(field) { return fieldName.test(field.name) }; // Treat fieldName as regex or object containing predicate
	            var matches = [];
	            for (var i = fields.length - 1; i >= 0; i--) {
	                if (isMatchingField(fields[i]))
	                    matches.push(fields[i]);
	            };
	            return matches;
	        },

	        parseJson: function (jsonString) {
	            if (typeof jsonString == "string") {
	                jsonString = ko.utils.stringTrim(jsonString);
	                if (jsonString) {
	                    if (JSON && JSON.parse) // Use native parsing where available
	                        return JSON.parse(jsonString);
	                    return (new Function("return " + jsonString))(); // Fallback on less safe parsing for older browsers
	                }
	            }
	            return null;
	        },

	        stringifyJson: function (data, replacer, space) {   // replacer and space are optional
	            if (!JSON || !JSON.stringify)
	                throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
	            return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
	        },

	        postJson: function (urlOrForm, data, options) {
	            options = options || {};
	            var params = options['params'] || {};
	            var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
	            var url = urlOrForm;

	            // If we were given a form, use its 'action' URL and pick out any requested field values
	            if((typeof urlOrForm == 'object') && (ko.utils.tagNameLower(urlOrForm) === "form")) {
	                var originalForm = urlOrForm;
	                url = originalForm.action;
	                for (var i = includeFields.length - 1; i >= 0; i--) {
	                    var fields = ko.utils.getFormFields(originalForm, includeFields[i]);
	                    for (var j = fields.length - 1; j >= 0; j--)
	                        params[fields[j].name] = fields[j].value;
	                }
	            }

	            data = ko.utils.unwrapObservable(data);
	            var form = document.createElement("form");
	            form.style.display = "none";
	            form.action = url;
	            form.method = "post";
	            for (var key in data) {
	                // Since 'data' this is a model object, we include all properties including those inherited from its prototype
	                var input = document.createElement("input");
	                input.type = "hidden";
	                input.name = key;
	                input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
	                form.appendChild(input);
	            }
	            objectForEach(params, function(key, value) {
	                var input = document.createElement("input");
	                input.type = "hidden";
	                input.name = key;
	                input.value = value;
	                form.appendChild(input);
	            });
	            document.body.appendChild(form);
	            options['submitter'] ? options['submitter'](form) : form.submit();
	            setTimeout(function () { form.parentNode.removeChild(form); }, 0);
	        }
	    }
	}());

	ko.exportSymbol('utils', ko.utils);
	ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
	ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
	ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
	ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
	ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
	ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
	ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
	ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
	ko.exportSymbol('utils.extend', ko.utils.extend);
	ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
	ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
	ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
	ko.exportSymbol('utils.postJson', ko.utils.postJson);
	ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
	ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
	ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
	ko.exportSymbol('utils.range', ko.utils.range);
	ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
	ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
	ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);
	ko.exportSymbol('utils.objectForEach', ko.utils.objectForEach);
	ko.exportSymbol('utils.addOrRemoveItem', ko.utils.addOrRemoveItem);
	ko.exportSymbol('utils.setTextContent', ko.utils.setTextContent);
	ko.exportSymbol('unwrap', ko.utils.unwrapObservable); // Convenient shorthand, because this is used so commonly

	if (!Function.prototype['bind']) {
	    // Function.prototype.bind is a standard part of ECMAScript 5th Edition (December 2009, http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
	    // In case the browser doesn't implement it natively, provide a JavaScript implementation. This implementation is based on the one in prototype.js
	    Function.prototype['bind'] = function (object) {
	        var originalFunction = this;
	        if (arguments.length === 1) {
	            return function () {
	                return originalFunction.apply(object, arguments);
	            };
	        } else {
	            var partialArgs = Array.prototype.slice.call(arguments, 1);
	            return function () {
	                var args = partialArgs.slice(0);
	                args.push.apply(args, arguments);
	                return originalFunction.apply(object, args);
	            };
	        }
	    };
	}

	ko.utils.domData = new (function () {
	    var uniqueId = 0;
	    var dataStoreKeyExpandoPropertyName = "__ko__" + (new Date).getTime();
	    var dataStore = {};

	    function getAll(node, createIfNotFound) {
	        var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
	        var hasExistingDataStore = dataStoreKey && (dataStoreKey !== "null") && dataStore[dataStoreKey];
	        if (!hasExistingDataStore) {
	            if (!createIfNotFound)
	                return undefined;
	            dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
	            dataStore[dataStoreKey] = {};
	        }
	        return dataStore[dataStoreKey];
	    }

	    return {
	        get: function (node, key) {
	            var allDataForNode = getAll(node, false);
	            return allDataForNode === undefined ? undefined : allDataForNode[key];
	        },
	        set: function (node, key, value) {
	            if (value === undefined) {
	                // Make sure we don't actually create a new domData key if we are actually deleting a value
	                if (getAll(node, false) === undefined)
	                    return;
	            }
	            var allDataForNode = getAll(node, true);
	            allDataForNode[key] = value;
	        },
	        clear: function (node) {
	            var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
	            if (dataStoreKey) {
	                delete dataStore[dataStoreKey];
	                node[dataStoreKeyExpandoPropertyName] = null;
	                return true; // Exposing "did clean" flag purely so specs can infer whether things have been cleaned up as intended
	            }
	            return false;
	        },

	        nextKey: function () {
	            return (uniqueId++) + dataStoreKeyExpandoPropertyName;
	        }
	    };
	})();

	ko.exportSymbol('utils.domData', ko.utils.domData);
	ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear); // Exporting only so specs can clear up after themselves fully

	ko.utils.domNodeDisposal = new (function () {
	    var domDataKey = ko.utils.domData.nextKey();
	    var cleanableNodeTypes = { 1: true, 8: true, 9: true };       // Element, Comment, Document
	    var cleanableNodeTypesWithDescendants = { 1: true, 9: true }; // Element, Document

	    function getDisposeCallbacksCollection(node, createIfNotFound) {
	        var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);
	        if ((allDisposeCallbacks === undefined) && createIfNotFound) {
	            allDisposeCallbacks = [];
	            ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
	        }
	        return allDisposeCallbacks;
	    }
	    function destroyCallbacksCollection(node) {
	        ko.utils.domData.set(node, domDataKey, undefined);
	    }

	    function cleanSingleNode(node) {
	        // Run all the dispose callbacks
	        var callbacks = getDisposeCallbacksCollection(node, false);
	        if (callbacks) {
	            callbacks = callbacks.slice(0); // Clone, as the array may be modified during iteration (typically, callbacks will remove themselves)
	            for (var i = 0; i < callbacks.length; i++)
	                callbacks[i](node);
	        }

	        // Erase the DOM data
	        ko.utils.domData.clear(node);

	        // Perform cleanup needed by external libraries (currently only jQuery, but can be extended)
	        ko.utils.domNodeDisposal["cleanExternalData"](node);

	        // Clear any immediate-child comment nodes, as these wouldn't have been found by
	        // node.getElementsByTagName("*") in cleanNode() (comment nodes aren't elements)
	        if (cleanableNodeTypesWithDescendants[node.nodeType])
	            cleanImmediateCommentTypeChildren(node);
	    }

	    function cleanImmediateCommentTypeChildren(nodeWithChildren) {
	        var child, nextChild = nodeWithChildren.firstChild;
	        while (child = nextChild) {
	            nextChild = child.nextSibling;
	            if (child.nodeType === 8)
	                cleanSingleNode(child);
	        }
	    }

	    return {
	        addDisposeCallback : function(node, callback) {
	            if (typeof callback != "function")
	                throw new Error("Callback must be a function");
	            getDisposeCallbacksCollection(node, true).push(callback);
	        },

	        removeDisposeCallback : function(node, callback) {
	            var callbacksCollection = getDisposeCallbacksCollection(node, false);
	            if (callbacksCollection) {
	                ko.utils.arrayRemoveItem(callbacksCollection, callback);
	                if (callbacksCollection.length == 0)
	                    destroyCallbacksCollection(node);
	            }
	        },

	        cleanNode : function(node) {
	            // First clean this node, where applicable
	            if (cleanableNodeTypes[node.nodeType]) {
	                cleanSingleNode(node);

	                // ... then its descendants, where applicable
	                if (cleanableNodeTypesWithDescendants[node.nodeType]) {
	                    // Clone the descendants list in case it changes during iteration
	                    var descendants = [];
	                    ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));
	                    for (var i = 0, j = descendants.length; i < j; i++)
	                        cleanSingleNode(descendants[i]);
	                }
	            }
	            return node;
	        },

	        removeNode : function(node) {
	            ko.cleanNode(node);
	            if (node.parentNode)
	                node.parentNode.removeChild(node);
	        },

	        "cleanExternalData" : function (node) {
	            // Special support for jQuery here because it's so commonly used.
	            // Many jQuery plugins (including jquery.tmpl) store data using jQuery's equivalent of domData
	            // so notify it to tear down any resources associated with the node & descendants here.
	            if (jQueryInstance && (typeof jQueryInstance['cleanData'] == "function"))
	                jQueryInstance['cleanData']([node]);
	        }
	    };
	})();
	ko.cleanNode = ko.utils.domNodeDisposal.cleanNode; // Shorthand name for convenience
	ko.removeNode = ko.utils.domNodeDisposal.removeNode; // Shorthand name for convenience
	ko.exportSymbol('cleanNode', ko.cleanNode);
	ko.exportSymbol('removeNode', ko.removeNode);
	ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
	ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
	ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);
	(function () {
	    var none = [0, "", ""],
	        table = [1, "<table>", "</table>"],
	        tbody = [2, "<table><tbody>", "</tbody></table>"],
	        tr = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	        select = [1, "<select multiple='multiple'>", "</select>"],
	        lookup = {
	            'thead': table,
	            'tbody': table,
	            'tfoot': table,
	            'tr': tbody,
	            'td': tr,
	            'th': tr,
	            'option': select,
	            'optgroup': select
	        },

	        // This is needed for old IE if you're *not* using either jQuery or innerShiv. Doesn't affect other cases.
	        mayRequireCreateElementHack = ko.utils.ieVersion <= 8;

	    function getWrap(tags) {
	        var m = tags.match(/^<([a-z]+)[ >]/);
	        return (m && lookup[m[1]]) || none;
	    }

	    function simpleHtmlParse(html, documentContext) {
	        documentContext || (documentContext = document);
	        var windowContext = documentContext['parentWindow'] || documentContext['defaultView'] || window;

	        // Based on jQuery's "clean" function, but only accounting for table-related elements.
	        // If you have referenced jQuery, this won't be used anyway - KO will use jQuery's "clean" function directly

	        // Note that there's still an issue in IE < 9 whereby it will discard comment nodes that are the first child of
	        // a descendant node. For example: "<div><!-- mycomment -->abc</div>" will get parsed as "<div>abc</div>"
	        // This won't affect anyone who has referenced jQuery, and there's always the workaround of inserting a dummy node
	        // (possibly a text node) in front of the comment. So, KO does not attempt to workaround this IE issue automatically at present.

	        // Trim whitespace, otherwise indexOf won't work as expected
	        var tags = ko.utils.stringTrim(html).toLowerCase(), div = documentContext.createElement("div"),
	            wrap = getWrap(tags),
	            depth = wrap[0];

	        // Go to html and back, then peel off extra wrappers
	        // Note that we always prefix with some dummy text, because otherwise, IE<9 will strip out leading comment nodes in descendants. Total madness.
	        var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";
	        if (typeof windowContext['innerShiv'] == "function") {
	            // Note that innerShiv is deprecated in favour of html5shiv. We should consider adding
	            // support for html5shiv (except if no explicit support is needed, e.g., if html5shiv
	            // somehow shims the native APIs so it just works anyway)
	            div.appendChild(windowContext['innerShiv'](markup));
	        } else {
	            if (mayRequireCreateElementHack) {
	                // The document.createElement('my-element') trick to enable custom elements in IE6-8
	                // only works if we assign innerHTML on an element associated with that document.
	                documentContext.appendChild(div);
	            }

	            div.innerHTML = markup;

	            if (mayRequireCreateElementHack) {
	                div.parentNode.removeChild(div);
	            }
	        }

	        // Move to the right depth
	        while (depth--)
	            div = div.lastChild;

	        return ko.utils.makeArray(div.lastChild.childNodes);
	    }

	    function jQueryHtmlParse(html, documentContext) {
	        // jQuery's "parseHTML" function was introduced in jQuery 1.8.0 and is a documented public API.
	        if (jQueryInstance['parseHTML']) {
	            return jQueryInstance['parseHTML'](html, documentContext) || []; // Ensure we always return an array and never null
	        } else {
	            // For jQuery < 1.8.0, we fall back on the undocumented internal "clean" function.
	            var elems = jQueryInstance['clean']([html], documentContext);

	            // As of jQuery 1.7.1, jQuery parses the HTML by appending it to some dummy parent nodes held in an in-memory document fragment.
	            // Unfortunately, it never clears the dummy parent nodes from the document fragment, so it leaks memory over time.
	            // Fix this by finding the top-most dummy parent element, and detaching it from its owner fragment.
	            if (elems && elems[0]) {
	                // Find the top-most parent element that's a direct child of a document fragment
	                var elem = elems[0];
	                while (elem.parentNode && elem.parentNode.nodeType !== 11 /* i.e., DocumentFragment */)
	                    elem = elem.parentNode;
	                // ... then detach it
	                if (elem.parentNode)
	                    elem.parentNode.removeChild(elem);
	            }

	            return elems;
	        }
	    }

	    ko.utils.parseHtmlFragment = function(html, documentContext) {
	        return jQueryInstance ?
	            jQueryHtmlParse(html, documentContext) :   // As below, benefit from jQuery's optimisations where possible
	            simpleHtmlParse(html, documentContext);  // ... otherwise, this simple logic will do in most common cases.
	    };

	    ko.utils.setHtml = function(node, html) {
	        ko.utils.emptyDomNode(node);

	        // There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it
	        html = ko.utils.unwrapObservable(html);

	        if ((html !== null) && (html !== undefined)) {
	            if (typeof html != 'string')
	                html = html.toString();

	            // jQuery contains a lot of sophisticated code to parse arbitrary HTML fragments,
	            // for example <tr> elements which are not normally allowed to exist on their own.
	            // If you've referenced jQuery we'll use that rather than duplicating its code.
	            if (jQueryInstance) {
	                jQueryInstance(node)['html'](html);
	            } else {
	                // ... otherwise, use KO's own parsing logic.
	                var parsedNodes = ko.utils.parseHtmlFragment(html, node.ownerDocument);
	                for (var i = 0; i < parsedNodes.length; i++)
	                    node.appendChild(parsedNodes[i]);
	            }
	        }
	    };
	})();

	ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
	ko.exportSymbol('utils.setHtml', ko.utils.setHtml);

	ko.memoization = (function () {
	    var memos = {};

	    function randomMax8HexChars() {
	        return (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);
	    }
	    function generateRandomId() {
	        return randomMax8HexChars() + randomMax8HexChars();
	    }
	    function findMemoNodes(rootNode, appendToArray) {
	        if (!rootNode)
	            return;
	        if (rootNode.nodeType == 8) {
	            var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
	            if (memoId != null)
	                appendToArray.push({ domNode: rootNode, memoId: memoId });
	        } else if (rootNode.nodeType == 1) {
	            for (var i = 0, childNodes = rootNode.childNodes, j = childNodes.length; i < j; i++)
	                findMemoNodes(childNodes[i], appendToArray);
	        }
	    }

	    return {
	        memoize: function (callback) {
	            if (typeof callback != "function")
	                throw new Error("You can only pass a function to ko.memoization.memoize()");
	            var memoId = generateRandomId();
	            memos[memoId] = callback;
	            return "<!--[ko_memo:" + memoId + "]-->";
	        },

	        unmemoize: function (memoId, callbackParams) {
	            var callback = memos[memoId];
	            if (callback === undefined)
	                throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");
	            try {
	                callback.apply(null, callbackParams || []);
	                return true;
	            }
	            finally { delete memos[memoId]; }
	        },

	        unmemoizeDomNodeAndDescendants: function (domNode, extraCallbackParamsArray) {
	            var memos = [];
	            findMemoNodes(domNode, memos);
	            for (var i = 0, j = memos.length; i < j; i++) {
	                var node = memos[i].domNode;
	                var combinedParams = [node];
	                if (extraCallbackParamsArray)
	                    ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
	                ko.memoization.unmemoize(memos[i].memoId, combinedParams);
	                node.nodeValue = ""; // Neuter this node so we don't try to unmemoize it again
	                if (node.parentNode)
	                    node.parentNode.removeChild(node); // If possible, erase it totally (not always possible - someone else might just hold a reference to it then call unmemoizeDomNodeAndDescendants again)
	            }
	        },

	        parseMemoText: function (memoText) {
	            var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
	            return match ? match[1] : null;
	        }
	    };
	})();

	ko.exportSymbol('memoization', ko.memoization);
	ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
	ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
	ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
	ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
	ko.tasks = (function () {
	    var scheduler,
	        taskQueue = [],
	        taskQueueLength = 0,
	        nextHandle = 1,
	        nextIndexToProcess = 0;

	    if (window['MutationObserver']) {
	        // Chrome 27+, Firefox 14+, IE 11+, Opera 15+, Safari 6.1+
	        // From https://github.com/petkaantonov/bluebird * Copyright (c) 2014 Petka Antonov * License: MIT
	        scheduler = (function (callback) {
	            var div = document.createElement("div");
	            new MutationObserver(callback).observe(div, {attributes: true});
	            return function () { div.classList.toggle("foo"); };
	        })(scheduledProcess);
	    } else if (document && "onreadystatechange" in document.createElement("script")) {
	        // IE 6-10
	        // From https://github.com/YuzuJS/setImmediate * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola * License: MIT
	        scheduler = function (callback) {
	            var script = document.createElement("script");
	            script.onreadystatechange = function () {
	                script.onreadystatechange = null;
	                document.documentElement.removeChild(script);
	                script = null;
	                callback();
	            };
	            document.documentElement.appendChild(script);
	        };
	    } else {
	        scheduler = function (callback) {
	            setTimeout(callback, 0);
	        };
	    }

	    function processTasks() {
	        if (taskQueueLength) {
	            // Each mark represents the end of a logical group of tasks and the number of these groups is
	            // limited to prevent unchecked recursion.
	            var mark = taskQueueLength, countMarks = 0;

	            // nextIndexToProcess keeps track of where we are in the queue; processTasks can be called recursively without issue
	            for (var task; nextIndexToProcess < taskQueueLength; ) {
	                if (task = taskQueue[nextIndexToProcess++]) {
	                    if (nextIndexToProcess > mark) {
	                        if (++countMarks >= 5000) {
	                            nextIndexToProcess = taskQueueLength;   // skip all tasks remaining in the queue since any of them could be causing the recursion
	                            ko.utils.deferError(Error("'Too much recursion' after processing " + countMarks + " task groups."));
	                            break;
	                        }
	                        mark = taskQueueLength;
	                    }
	                    try {
	                        task();
	                    } catch (ex) {
	                        ko.utils.deferError(ex);
	                    }
	                }
	            }
	        }
	    }

	    function scheduledProcess() {
	        processTasks();

	        // Reset the queue
	        nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
	    }

	    function scheduleTaskProcessing() {
	        ko.tasks['scheduler'](scheduledProcess);
	    }

	    var tasks = {
	        'scheduler': scheduler,     // Allow overriding the scheduler

	        schedule: function (func) {
	            if (!taskQueueLength) {
	                scheduleTaskProcessing();
	            }

	            taskQueue[taskQueueLength++] = func;
	            return nextHandle++;
	        },

	        cancel: function (handle) {
	            var index = handle - (nextHandle - taskQueueLength);
	            if (index >= nextIndexToProcess && index < taskQueueLength) {
	                taskQueue[index] = null;
	            }
	        },

	        // For testing only: reset the queue and return the previous queue length
	        'resetForTesting': function () {
	            var length = taskQueueLength - nextIndexToProcess;
	            nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
	            return length;
	        },

	        runEarly: processTasks
	    };

	    return tasks;
	})();

	ko.exportSymbol('tasks', ko.tasks);
	ko.exportSymbol('tasks.schedule', ko.tasks.schedule);
	//ko.exportSymbol('tasks.cancel', ko.tasks.cancel);  "cancel" isn't minified
	ko.exportSymbol('tasks.runEarly', ko.tasks.runEarly);
	ko.extenders = {
	    'throttle': function(target, timeout) {
	        // Throttling means two things:

	        // (1) For dependent observables, we throttle *evaluations* so that, no matter how fast its dependencies
	        //     notify updates, the target doesn't re-evaluate (and hence doesn't notify) faster than a certain rate
	        target['throttleEvaluation'] = timeout;

	        // (2) For writable targets (observables, or writable dependent observables), we throttle *writes*
	        //     so the target cannot change value synchronously or faster than a certain rate
	        var writeTimeoutInstance = null;
	        return ko.dependentObservable({
	            'read': target,
	            'write': function(value) {
	                clearTimeout(writeTimeoutInstance);
	                writeTimeoutInstance = ko.utils.setTimeout(function() {
	                    target(value);
	                }, timeout);
	            }
	        });
	    },

	    'rateLimit': function(target, options) {
	        var timeout, method, limitFunction;

	        if (typeof options == 'number') {
	            timeout = options;
	        } else {
	            timeout = options['timeout'];
	            method = options['method'];
	        }

	        // rateLimit supersedes deferred updates
	        target._deferUpdates = false;

	        limitFunction = method == 'notifyWhenChangesStop' ?  debounce : throttle;
	        target.limit(function(callback) {
	            return limitFunction(callback, timeout);
	        });
	    },

	    'deferred': function(target, options) {
	        if (options !== true) {
	            throw new Error('The \'deferred\' extender only accepts the value \'true\', because it is not supported to turn deferral off once enabled.')
	        }

	        if (!target._deferUpdates) {
	            target._deferUpdates = true;
	            target.limit(function (callback) {
	                var handle;
	                return function () {
	                    ko.tasks.cancel(handle);
	                    handle = ko.tasks.schedule(callback);
	                    target['notifySubscribers'](undefined, 'dirty');
	                };
	            });
	        }
	    },

	    'notify': function(target, notifyWhen) {
	        target["equalityComparer"] = notifyWhen == "always" ?
	            null :  // null equalityComparer means to always notify
	            valuesArePrimitiveAndEqual;
	    }
	};

	var primitiveTypes = { 'undefined':1, 'boolean':1, 'number':1, 'string':1 };
	function valuesArePrimitiveAndEqual(a, b) {
	    var oldValueIsPrimitive = (a === null) || (typeof(a) in primitiveTypes);
	    return oldValueIsPrimitive ? (a === b) : false;
	}

	function throttle(callback, timeout) {
	    var timeoutInstance;
	    return function () {
	        if (!timeoutInstance) {
	            timeoutInstance = ko.utils.setTimeout(function () {
	                timeoutInstance = undefined;
	                callback();
	            }, timeout);
	        }
	    };
	}

	function debounce(callback, timeout) {
	    var timeoutInstance;
	    return function () {
	        clearTimeout(timeoutInstance);
	        timeoutInstance = ko.utils.setTimeout(callback, timeout);
	    };
	}

	function applyExtenders(requestedExtenders) {
	    var target = this;
	    if (requestedExtenders) {
	        ko.utils.objectForEach(requestedExtenders, function(key, value) {
	            var extenderHandler = ko.extenders[key];
	            if (typeof extenderHandler == 'function') {
	                target = extenderHandler(target, value) || target;
	            }
	        });
	    }
	    return target;
	}

	ko.exportSymbol('extenders', ko.extenders);

	ko.subscription = function (target, callback, disposeCallback) {
	    this._target = target;
	    this.callback = callback;
	    this.disposeCallback = disposeCallback;
	    this.isDisposed = false;
	    ko.exportProperty(this, 'dispose', this.dispose);
	};
	ko.subscription.prototype.dispose = function () {
	    this.isDisposed = true;
	    this.disposeCallback();
	};

	ko.subscribable = function () {
	    ko.utils.setPrototypeOfOrExtend(this, ko_subscribable_fn);
	    ko_subscribable_fn.init(this);
	}

	var defaultEvent = "change";

	// Moved out of "limit" to avoid the extra closure
	function limitNotifySubscribers(value, event) {
	    if (!event || event === defaultEvent) {
	        this._limitChange(value);
	    } else if (event === 'beforeChange') {
	        this._limitBeforeChange(value);
	    } else {
	        this._origNotifySubscribers(value, event);
	    }
	}

	var ko_subscribable_fn = {
	    init: function(instance) {
	        instance._subscriptions = {};
	        instance._versionNumber = 1;
	    },

	    subscribe: function (callback, callbackTarget, event) {
	        var self = this;

	        event = event || defaultEvent;
	        var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;

	        var subscription = new ko.subscription(self, boundCallback, function () {
	            ko.utils.arrayRemoveItem(self._subscriptions[event], subscription);
	            if (self.afterSubscriptionRemove)
	                self.afterSubscriptionRemove(event);
	        });

	        if (self.beforeSubscriptionAdd)
	            self.beforeSubscriptionAdd(event);

	        if (!self._subscriptions[event])
	            self._subscriptions[event] = [];
	        self._subscriptions[event].push(subscription);

	        return subscription;
	    },

	    "notifySubscribers": function (valueToNotify, event) {
	        event = event || defaultEvent;
	        if (event === defaultEvent) {
	            this.updateVersion();
	        }
	        if (this.hasSubscriptionsForEvent(event)) {
	            try {
	                ko.dependencyDetection.begin(); // Begin suppressing dependency detection (by setting the top frame to undefined)
	                for (var a = this._subscriptions[event].slice(0), i = 0, subscription; subscription = a[i]; ++i) {
	                    // In case a subscription was disposed during the arrayForEach cycle, check
	                    // for isDisposed on each subscription before invoking its callback
	                    if (!subscription.isDisposed)
	                        subscription.callback(valueToNotify);
	                }
	            } finally {
	                ko.dependencyDetection.end(); // End suppressing dependency detection
	            }
	        }
	    },

	    getVersion: function () {
	        return this._versionNumber;
	    },

	    hasChanged: function (versionToCheck) {
	        return this.getVersion() !== versionToCheck;
	    },

	    updateVersion: function () {
	        ++this._versionNumber;
	    },

	    limit: function(limitFunction) {
	        var self = this, selfIsObservable = ko.isObservable(self),
	            ignoreBeforeChange, previousValue, pendingValue, beforeChange = 'beforeChange';

	        if (!self._origNotifySubscribers) {
	            self._origNotifySubscribers = self["notifySubscribers"];
	            self["notifySubscribers"] = limitNotifySubscribers;
	        }

	        var finish = limitFunction(function() {
	            self._notificationIsPending = false;

	            // If an observable provided a reference to itself, access it to get the latest value.
	            // This allows computed observables to delay calculating their value until needed.
	            if (selfIsObservable && pendingValue === self) {
	                pendingValue = self();
	            }
	            ignoreBeforeChange = false;
	            if (self.isDifferent(previousValue, pendingValue)) {
	                self._origNotifySubscribers(previousValue = pendingValue);
	            }
	        });

	        self._limitChange = function(value) {
	            self._notificationIsPending = ignoreBeforeChange = true;
	            pendingValue = value;
	            finish();
	        };
	        self._limitBeforeChange = function(value) {
	            if (!ignoreBeforeChange) {
	                previousValue = value;
	                self._origNotifySubscribers(value, beforeChange);
	            }
	        };
	    },

	    hasSubscriptionsForEvent: function(event) {
	        return this._subscriptions[event] && this._subscriptions[event].length;
	    },

	    getSubscriptionsCount: function (event) {
	        if (event) {
	            return this._subscriptions[event] && this._subscriptions[event].length || 0;
	        } else {
	            var total = 0;
	            ko.utils.objectForEach(this._subscriptions, function(eventName, subscriptions) {
	                if (eventName !== 'dirty')
	                    total += subscriptions.length;
	            });
	            return total;
	        }
	    },

	    isDifferent: function(oldValue, newValue) {
	        return !this['equalityComparer'] || !this['equalityComparer'](oldValue, newValue);
	    },

	    extend: applyExtenders
	};

	ko.exportProperty(ko_subscribable_fn, 'subscribe', ko_subscribable_fn.subscribe);
	ko.exportProperty(ko_subscribable_fn, 'extend', ko_subscribable_fn.extend);
	ko.exportProperty(ko_subscribable_fn, 'getSubscriptionsCount', ko_subscribable_fn.getSubscriptionsCount);

	// For browsers that support proto assignment, we overwrite the prototype of each
	// observable instance. Since observables are functions, we need Function.prototype
	// to still be in the prototype chain.
	if (ko.utils.canSetPrototype) {
	    ko.utils.setPrototypeOf(ko_subscribable_fn, Function.prototype);
	}

	ko.subscribable['fn'] = ko_subscribable_fn;


	ko.isSubscribable = function (instance) {
	    return instance != null && typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
	};

	ko.exportSymbol('subscribable', ko.subscribable);
	ko.exportSymbol('isSubscribable', ko.isSubscribable);

	ko.computedContext = ko.dependencyDetection = (function () {
	    var outerFrames = [],
	        currentFrame,
	        lastId = 0;

	    // Return a unique ID that can be assigned to an observable for dependency tracking.
	    // Theoretically, you could eventually overflow the number storage size, resulting
	    // in duplicate IDs. But in JavaScript, the largest exact integral value is 2^53
	    // or 9,007,199,254,740,992. If you created 1,000,000 IDs per second, it would
	    // take over 285 years to reach that number.
	    // Reference http://blog.vjeux.com/2010/javascript/javascript-max_int-number-limits.html
	    function getId() {
	        return ++lastId;
	    }

	    function begin(options) {
	        outerFrames.push(currentFrame);
	        currentFrame = options;
	    }

	    function end() {
	        currentFrame = outerFrames.pop();
	    }

	    return {
	        begin: begin,

	        end: end,

	        registerDependency: function (subscribable) {
	            if (currentFrame) {
	                if (!ko.isSubscribable(subscribable))
	                    throw new Error("Only subscribable things can act as dependencies");
	                currentFrame.callback.call(currentFrame.callbackTarget, subscribable, subscribable._id || (subscribable._id = getId()));
	            }
	        },

	        ignore: function (callback, callbackTarget, callbackArgs) {
	            try {
	                begin();
	                return callback.apply(callbackTarget, callbackArgs || []);
	            } finally {
	                end();
	            }
	        },

	        getDependenciesCount: function () {
	            if (currentFrame)
	                return currentFrame.computed.getDependenciesCount();
	        },

	        isInitial: function() {
	            if (currentFrame)
	                return currentFrame.isInitial;
	        }
	    };
	})();

	ko.exportSymbol('computedContext', ko.computedContext);
	ko.exportSymbol('computedContext.getDependenciesCount', ko.computedContext.getDependenciesCount);
	ko.exportSymbol('computedContext.isInitial', ko.computedContext.isInitial);

	ko.exportSymbol('ignoreDependencies', ko.ignoreDependencies = ko.dependencyDetection.ignore);
	var observableLatestValue = ko.utils.createSymbolOrString('_latestValue');

	ko.observable = function (initialValue) {
	    function observable() {
	        if (arguments.length > 0) {
	            // Write

	            // Ignore writes if the value hasn't changed
	            if (observable.isDifferent(observable[observableLatestValue], arguments[0])) {
	                observable.valueWillMutate();
	                observable[observableLatestValue] = arguments[0];
	                observable.valueHasMutated();
	            }
	            return this; // Permits chained assignments
	        }
	        else {
	            // Read
	            ko.dependencyDetection.registerDependency(observable); // The caller only needs to be notified of changes if they did a "read" operation
	            return observable[observableLatestValue];
	        }
	    }

	    observable[observableLatestValue] = initialValue;

	    // Inherit from 'subscribable'
	    if (!ko.utils.canSetPrototype) {
	        // 'subscribable' won't be on the prototype chain unless we put it there directly
	        ko.utils.extend(observable, ko.subscribable['fn']);
	    }
	    ko.subscribable['fn'].init(observable);

	    // Inherit from 'observable'
	    ko.utils.setPrototypeOfOrExtend(observable, observableFn);

	    if (ko.options['deferUpdates']) {
	        ko.extenders['deferred'](observable, true);
	    }

	    return observable;
	}

	// Define prototype for observables
	var observableFn = {
	    'equalityComparer': valuesArePrimitiveAndEqual,
	    peek: function() { return this[observableLatestValue]; },
	    valueHasMutated: function () { this['notifySubscribers'](this[observableLatestValue]); },
	    valueWillMutate: function () { this['notifySubscribers'](this[observableLatestValue], 'beforeChange'); }
	};

	// Note that for browsers that don't support proto assignment, the
	// inheritance chain is created manually in the ko.observable constructor
	if (ko.utils.canSetPrototype) {
	    ko.utils.setPrototypeOf(observableFn, ko.subscribable['fn']);
	}

	var protoProperty = ko.observable.protoProperty = '__ko_proto__';
	observableFn[protoProperty] = ko.observable;

	ko.hasPrototype = function(instance, prototype) {
	    if ((instance === null) || (instance === undefined) || (instance[protoProperty] === undefined)) return false;
	    if (instance[protoProperty] === prototype) return true;
	    return ko.hasPrototype(instance[protoProperty], prototype); // Walk the prototype chain
	};

	ko.isObservable = function (instance) {
	    return ko.hasPrototype(instance, ko.observable);
	}
	ko.isWriteableObservable = function (instance) {
	    // Observable
	    if ((typeof instance == 'function') && instance[protoProperty] === ko.observable)
	        return true;
	    // Writeable dependent observable
	    if ((typeof instance == 'function') && (instance[protoProperty] === ko.dependentObservable) && (instance.hasWriteFunction))
	        return true;
	    // Anything else
	    return false;
	}

	ko.exportSymbol('observable', ko.observable);
	ko.exportSymbol('isObservable', ko.isObservable);
	ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);
	ko.exportSymbol('isWritableObservable', ko.isWriteableObservable);
	ko.exportSymbol('observable.fn', observableFn);
	ko.exportProperty(observableFn, 'peek', observableFn.peek);
	ko.exportProperty(observableFn, 'valueHasMutated', observableFn.valueHasMutated);
	ko.exportProperty(observableFn, 'valueWillMutate', observableFn.valueWillMutate);
	ko.observableArray = function (initialValues) {
	    initialValues = initialValues || [];

	    if (typeof initialValues != 'object' || !('length' in initialValues))
	        throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");

	    var result = ko.observable(initialValues);
	    ko.utils.setPrototypeOfOrExtend(result, ko.observableArray['fn']);
	    return result.extend({'trackArrayChanges':true});
	};

	ko.observableArray['fn'] = {
	    'remove': function (valueOrPredicate) {
	        var underlyingArray = this.peek();
	        var removedValues = [];
	        var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
	        for (var i = 0; i < underlyingArray.length; i++) {
	            var value = underlyingArray[i];
	            if (predicate(value)) {
	                if (removedValues.length === 0) {
	                    this.valueWillMutate();
	                }
	                removedValues.push(value);
	                underlyingArray.splice(i, 1);
	                i--;
	            }
	        }
	        if (removedValues.length) {
	            this.valueHasMutated();
	        }
	        return removedValues;
	    },

	    'removeAll': function (arrayOfValues) {
	        // If you passed zero args, we remove everything
	        if (arrayOfValues === undefined) {
	            var underlyingArray = this.peek();
	            var allValues = underlyingArray.slice(0);
	            this.valueWillMutate();
	            underlyingArray.splice(0, underlyingArray.length);
	            this.valueHasMutated();
	            return allValues;
	        }
	        // If you passed an arg, we interpret it as an array of entries to remove
	        if (!arrayOfValues)
	            return [];
	        return this['remove'](function (value) {
	            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
	        });
	    },

	    'destroy': function (valueOrPredicate) {
	        var underlyingArray = this.peek();
	        var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
	        this.valueWillMutate();
	        for (var i = underlyingArray.length - 1; i >= 0; i--) {
	            var value = underlyingArray[i];
	            if (predicate(value))
	                underlyingArray[i]["_destroy"] = true;
	        }
	        this.valueHasMutated();
	    },

	    'destroyAll': function (arrayOfValues) {
	        // If you passed zero args, we destroy everything
	        if (arrayOfValues === undefined)
	            return this['destroy'](function() { return true });

	        // If you passed an arg, we interpret it as an array of entries to destroy
	        if (!arrayOfValues)
	            return [];
	        return this['destroy'](function (value) {
	            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
	        });
	    },

	    'indexOf': function (item) {
	        var underlyingArray = this();
	        return ko.utils.arrayIndexOf(underlyingArray, item);
	    },

	    'replace': function(oldItem, newItem) {
	        var index = this['indexOf'](oldItem);
	        if (index >= 0) {
	            this.valueWillMutate();
	            this.peek()[index] = newItem;
	            this.valueHasMutated();
	        }
	    }
	};

	// Note that for browsers that don't support proto assignment, the
	// inheritance chain is created manually in the ko.observableArray constructor
	if (ko.utils.canSetPrototype) {
	    ko.utils.setPrototypeOf(ko.observableArray['fn'], ko.observable['fn']);
	}

	// Populate ko.observableArray.fn with read/write functions from native arrays
	// Important: Do not add any additional functions here that may reasonably be used to *read* data from the array
	// because we'll eval them without causing subscriptions, so ko.computed output could end up getting stale
	ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (methodName) {
	    ko.observableArray['fn'][methodName] = function () {
	        // Use "peek" to avoid creating a subscription in any computed that we're executing in the context of
	        // (for consistency with mutating regular observables)
	        var underlyingArray = this.peek();
	        this.valueWillMutate();
	        this.cacheDiffForKnownOperation(underlyingArray, methodName, arguments);
	        var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
	        this.valueHasMutated();
	        // The native sort and reverse methods return a reference to the array, but it makes more sense to return the observable array instead.
	        return methodCallResult === underlyingArray ? this : methodCallResult;
	    };
	});

	// Populate ko.observableArray.fn with read-only functions from native arrays
	ko.utils.arrayForEach(["slice"], function (methodName) {
	    ko.observableArray['fn'][methodName] = function () {
	        var underlyingArray = this();
	        return underlyingArray[methodName].apply(underlyingArray, arguments);
	    };
	});

	ko.exportSymbol('observableArray', ko.observableArray);
	var arrayChangeEventName = 'arrayChange';
	ko.extenders['trackArrayChanges'] = function(target, options) {
	    // Use the provided options--each call to trackArrayChanges overwrites the previously set options
	    target.compareArrayOptions = {};
	    if (options && typeof options == "object") {
	        ko.utils.extend(target.compareArrayOptions, options);
	    }
	    target.compareArrayOptions['sparse'] = true;

	    // Only modify the target observable once
	    if (target.cacheDiffForKnownOperation) {
	        return;
	    }
	    var trackingChanges = false,
	        cachedDiff = null,
	        arrayChangeSubscription,
	        pendingNotifications = 0,
	        underlyingBeforeSubscriptionAddFunction = target.beforeSubscriptionAdd,
	        underlyingAfterSubscriptionRemoveFunction = target.afterSubscriptionRemove;

	    // Watch "subscribe" calls, and for array change events, ensure change tracking is enabled
	    target.beforeSubscriptionAdd = function (event) {
	        if (underlyingBeforeSubscriptionAddFunction)
	            underlyingBeforeSubscriptionAddFunction.call(target, event);
	        if (event === arrayChangeEventName) {
	            trackChanges();
	        }
	    };
	    // Watch "dispose" calls, and for array change events, ensure change tracking is disabled when all are disposed
	    target.afterSubscriptionRemove = function (event) {
	        if (underlyingAfterSubscriptionRemoveFunction)
	            underlyingAfterSubscriptionRemoveFunction.call(target, event);
	        if (event === arrayChangeEventName && !target.hasSubscriptionsForEvent(arrayChangeEventName)) {
	            arrayChangeSubscription.dispose();
	            trackingChanges = false;
	        }
	    };

	    function trackChanges() {
	        // Calling 'trackChanges' multiple times is the same as calling it once
	        if (trackingChanges) {
	            return;
	        }

	        trackingChanges = true;

	        // Intercept "notifySubscribers" to track how many times it was called.
	        var underlyingNotifySubscribersFunction = target['notifySubscribers'];
	        target['notifySubscribers'] = function(valueToNotify, event) {
	            if (!event || event === defaultEvent) {
	                ++pendingNotifications;
	            }
	            return underlyingNotifySubscribersFunction.apply(this, arguments);
	        };

	        // Each time the array changes value, capture a clone so that on the next
	        // change it's possible to produce a diff
	        var previousContents = [].concat(target.peek() || []);
	        cachedDiff = null;
	        arrayChangeSubscription = target.subscribe(function(currentContents) {
	            // Make a copy of the current contents and ensure it's an array
	            currentContents = [].concat(currentContents || []);

	            // Compute the diff and issue notifications, but only if someone is listening
	            if (target.hasSubscriptionsForEvent(arrayChangeEventName)) {
	                var changes = getChanges(previousContents, currentContents);
	            }

	            // Eliminate references to the old, removed items, so they can be GCed
	            previousContents = currentContents;
	            cachedDiff = null;
	            pendingNotifications = 0;

	            if (changes && changes.length) {
	                target['notifySubscribers'](changes, arrayChangeEventName);
	            }
	        });
	    }

	    function getChanges(previousContents, currentContents) {
	        // We try to re-use cached diffs.
	        // The scenarios where pendingNotifications > 1 are when using rate-limiting or the Deferred Updates
	        // plugin, which without this check would not be compatible with arrayChange notifications. Normally,
	        // notifications are issued immediately so we wouldn't be queueing up more than one.
	        if (!cachedDiff || pendingNotifications > 1) {
	            cachedDiff = ko.utils.compareArrays(previousContents, currentContents, target.compareArrayOptions);
	        }

	        return cachedDiff;
	    }

	    target.cacheDiffForKnownOperation = function(rawArray, operationName, args) {
	        // Only run if we're currently tracking changes for this observable array
	        // and there aren't any pending deferred notifications.
	        if (!trackingChanges || pendingNotifications) {
	            return;
	        }
	        var diff = [],
	            arrayLength = rawArray.length,
	            argsLength = args.length,
	            offset = 0;

	        function pushDiff(status, value, index) {
	            return diff[diff.length] = { 'status': status, 'value': value, 'index': index };
	        }
	        switch (operationName) {
	            case 'push':
	                offset = arrayLength;
	            case 'unshift':
	                for (var index = 0; index < argsLength; index++) {
	                    pushDiff('added', args[index], offset + index);
	                }
	                break;

	            case 'pop':
	                offset = arrayLength - 1;
	            case 'shift':
	                if (arrayLength) {
	                    pushDiff('deleted', rawArray[offset], offset);
	                }
	                break;

	            case 'splice':
	                // Negative start index means 'from end of array'. After that we clamp to [0...arrayLength].
	                // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	                var startIndex = Math.min(Math.max(0, args[0] < 0 ? arrayLength + args[0] : args[0]), arrayLength),
	                    endDeleteIndex = argsLength === 1 ? arrayLength : Math.min(startIndex + (args[1] || 0), arrayLength),
	                    endAddIndex = startIndex + argsLength - 2,
	                    endIndex = Math.max(endDeleteIndex, endAddIndex),
	                    additions = [], deletions = [];
	                for (var index = startIndex, argsIndex = 2; index < endIndex; ++index, ++argsIndex) {
	                    if (index < endDeleteIndex)
	                        deletions.push(pushDiff('deleted', rawArray[index], index));
	                    if (index < endAddIndex)
	                        additions.push(pushDiff('added', args[argsIndex], index));
	                }
	                ko.utils.findMovesInArrayComparison(deletions, additions);
	                break;

	            default:
	                return;
	        }
	        cachedDiff = diff;
	    };
	};
	var computedState = ko.utils.createSymbolOrString('_state');

	ko.computed = ko.dependentObservable = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
	    if (typeof evaluatorFunctionOrOptions === "object") {
	        // Single-parameter syntax - everything is on this "options" param
	        options = evaluatorFunctionOrOptions;
	    } else {
	        // Multi-parameter syntax - construct the options according to the params passed
	        options = options || {};
	        if (evaluatorFunctionOrOptions) {
	            options["read"] = evaluatorFunctionOrOptions;
	        }
	    }
	    if (typeof options["read"] != "function")
	        throw Error("Pass a function that returns the value of the ko.computed");

	    var writeFunction = options["write"];
	    var state = {
	        latestValue: undefined,
	        isStale: true,
	        isBeingEvaluated: false,
	        suppressDisposalUntilDisposeWhenReturnsFalse: false,
	        isDisposed: false,
	        pure: false,
	        isSleeping: false,
	        readFunction: options["read"],
	        evaluatorFunctionTarget: evaluatorFunctionTarget || options["owner"],
	        disposeWhenNodeIsRemoved: options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
	        disposeWhen: options["disposeWhen"] || options.disposeWhen,
	        domNodeDisposalCallback: null,
	        dependencyTracking: {},
	        dependenciesCount: 0,
	        evaluationTimeoutInstance: null
	    };

	    function computedObservable() {
	        if (arguments.length > 0) {
	            if (typeof writeFunction === "function") {
	                // Writing a value
	                writeFunction.apply(state.evaluatorFunctionTarget, arguments);
	            } else {
	                throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
	            }
	            return this; // Permits chained assignments
	        } else {
	            // Reading the value
	            ko.dependencyDetection.registerDependency(computedObservable);
	            if (state.isStale || (state.isSleeping && computedObservable.haveDependenciesChanged())) {
	                computedObservable.evaluateImmediate();
	            }
	            return state.latestValue;
	        }
	    }

	    computedObservable[computedState] = state;
	    computedObservable.hasWriteFunction = typeof writeFunction === "function";

	    // Inherit from 'subscribable'
	    if (!ko.utils.canSetPrototype) {
	        // 'subscribable' won't be on the prototype chain unless we put it there directly
	        ko.utils.extend(computedObservable, ko.subscribable['fn']);
	    }
	    ko.subscribable['fn'].init(computedObservable);

	    // Inherit from 'computed'
	    ko.utils.setPrototypeOfOrExtend(computedObservable, computedFn);

	    if (options['pure']) {
	        state.pure = true;
	        state.isSleeping = true;     // Starts off sleeping; will awake on the first subscription
	        ko.utils.extend(computedObservable, pureComputedOverrides);
	    } else if (options['deferEvaluation']) {
	        ko.utils.extend(computedObservable, deferEvaluationOverrides);
	    }

	    if (ko.options['deferUpdates']) {
	        ko.extenders['deferred'](computedObservable, true);
	    }

	    if (DEBUG) {
	        // #1731 - Aid debugging by exposing the computed's options
	        computedObservable["_options"] = options;
	    }

	    if (state.disposeWhenNodeIsRemoved) {
	        // Since this computed is associated with a DOM node, and we don't want to dispose the computed
	        // until the DOM node is *removed* from the document (as opposed to never having been in the document),
	        // we'll prevent disposal until "disposeWhen" first returns false.
	        state.suppressDisposalUntilDisposeWhenReturnsFalse = true;

	        // disposeWhenNodeIsRemoved: true can be used to opt into the "only dispose after first false result"
	        // behaviour even if there's no specific node to watch. In that case, clear the option so we don't try
	        // to watch for a non-node's disposal. This technique is intended for KO's internal use only and shouldn't
	        // be documented or used by application code, as it's likely to change in a future version of KO.
	        if (!state.disposeWhenNodeIsRemoved.nodeType) {
	            state.disposeWhenNodeIsRemoved = null;
	        }
	    }

	    // Evaluate, unless sleeping or deferEvaluation is true
	    if (!state.isSleeping && !options['deferEvaluation']) {
	        computedObservable.evaluateImmediate();
	    }

	    // Attach a DOM node disposal callback so that the computed will be proactively disposed as soon as the node is
	    // removed using ko.removeNode. But skip if isActive is false (there will never be any dependencies to dispose).
	    if (state.disposeWhenNodeIsRemoved && computedObservable.isActive()) {
	        ko.utils.domNodeDisposal.addDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback = function () {
	            computedObservable.dispose();
	        });
	    }

	    return computedObservable;
	};

	// Utility function that disposes a given dependencyTracking entry
	function computedDisposeDependencyCallback(id, entryToDispose) {
	    if (entryToDispose !== null && entryToDispose.dispose) {
	        entryToDispose.dispose();
	    }
	}

	// This function gets called each time a dependency is detected while evaluating a computed.
	// It's factored out as a shared function to avoid creating unnecessary function instances during evaluation.
	function computedBeginDependencyDetectionCallback(subscribable, id) {
	    var computedObservable = this.computedObservable,
	        state = computedObservable[computedState];
	    if (!state.isDisposed) {
	        if (this.disposalCount && this.disposalCandidates[id]) {
	            // Don't want to dispose this subscription, as it's still being used
	            computedObservable.addDependencyTracking(id, subscribable, this.disposalCandidates[id]);
	            this.disposalCandidates[id] = null; // No need to actually delete the property - disposalCandidates is a transient object anyway
	            --this.disposalCount;
	        } else if (!state.dependencyTracking[id]) {
	            // Brand new subscription - add it
	            computedObservable.addDependencyTracking(id, subscribable, state.isSleeping ? { _target: subscribable } : computedObservable.subscribeToDependency(subscribable));
	        }
	    }
	}

	var computedFn = {
	    "equalityComparer": valuesArePrimitiveAndEqual,
	    getDependenciesCount: function () {
	        return this[computedState].dependenciesCount;
	    },
	    addDependencyTracking: function (id, target, trackingObj) {
	        if (this[computedState].pure && target === this) {
	            throw Error("A 'pure' computed must not be called recursively");
	        }

	        this[computedState].dependencyTracking[id] = trackingObj;
	        trackingObj._order = this[computedState].dependenciesCount++;
	        trackingObj._version = target.getVersion();
	    },
	    haveDependenciesChanged: function () {
	        var id, dependency, dependencyTracking = this[computedState].dependencyTracking;
	        for (id in dependencyTracking) {
	            if (dependencyTracking.hasOwnProperty(id)) {
	                dependency = dependencyTracking[id];
	                if (dependency._target.hasChanged(dependency._version)) {
	                    return true;
	                }
	            }
	        }
	    },
	    markDirty: function () {
	        // Process "dirty" events if we can handle delayed notifications
	        if (this._evalDelayed && !this[computedState].isBeingEvaluated) {
	            this._evalDelayed();
	        }
	    },
	    isActive: function () {
	        return this[computedState].isStale || this[computedState].dependenciesCount > 0;
	    },
	    respondToChange: function () {
	        // Ignore "change" events if we've already scheduled a delayed notification
	        if (!this._notificationIsPending) {
	            this.evaluatePossiblyAsync();
	        }
	    },
	    subscribeToDependency: function (target) {
	        if (target._deferUpdates && !this[computedState].disposeWhenNodeIsRemoved) {
	            var dirtySub = target.subscribe(this.markDirty, this, 'dirty'),
	                changeSub = target.subscribe(this.respondToChange, this);
	            return {
	                _target: target,
	                dispose: function () {
	                    dirtySub.dispose();
	                    changeSub.dispose();
	                }
	            };
	        } else {
	            return target.subscribe(this.evaluatePossiblyAsync, this);
	        }
	    },
	    evaluatePossiblyAsync: function () {
	        var computedObservable = this,
	            throttleEvaluationTimeout = computedObservable['throttleEvaluation'];
	        if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
	            clearTimeout(this[computedState].evaluationTimeoutInstance);
	            this[computedState].evaluationTimeoutInstance = ko.utils.setTimeout(function () {
	                computedObservable.evaluateImmediate(true /*notifyChange*/);
	            }, throttleEvaluationTimeout);
	        } else if (computedObservable._evalDelayed) {
	            computedObservable._evalDelayed();
	        } else {
	            computedObservable.evaluateImmediate(true /*notifyChange*/);
	        }
	    },
	    evaluateImmediate: function (notifyChange) {
	        var computedObservable = this,
	            state = computedObservable[computedState],
	            disposeWhen = state.disposeWhen;

	        if (state.isBeingEvaluated) {
	            // If the evaluation of a ko.computed causes side effects, it's possible that it will trigger its own re-evaluation.
	            // This is not desirable (it's hard for a developer to realise a chain of dependencies might cause this, and they almost
	            // certainly didn't intend infinite re-evaluations). So, for predictability, we simply prevent ko.computeds from causing
	            // their own re-evaluation. Further discussion at https://github.com/SteveSanderson/knockout/pull/387
	            return;
	        }

	        // Do not evaluate (and possibly capture new dependencies) if disposed
	        if (state.isDisposed) {
	            return;
	        }

	        if (state.disposeWhenNodeIsRemoved && !ko.utils.domNodeIsAttachedToDocument(state.disposeWhenNodeIsRemoved) || disposeWhen && disposeWhen()) {
	            // See comment above about suppressDisposalUntilDisposeWhenReturnsFalse
	            if (!state.suppressDisposalUntilDisposeWhenReturnsFalse) {
	                computedObservable.dispose();
	                return;
	            }
	        } else {
	            // It just did return false, so we can stop suppressing now
	            state.suppressDisposalUntilDisposeWhenReturnsFalse = false;
	        }

	        state.isBeingEvaluated = true;
	        try {
	            this.evaluateImmediate_CallReadWithDependencyDetection(notifyChange);
	        } finally {
	            state.isBeingEvaluated = false;
	        }

	        if (!state.dependenciesCount) {
	            computedObservable.dispose();
	        }
	    },
	    evaluateImmediate_CallReadWithDependencyDetection: function (notifyChange) {
	        // This function is really just part of the evaluateImmediate logic. You would never call it from anywhere else.
	        // Factoring it out into a separate function means it can be independent of the try/catch block in evaluateImmediate,
	        // which contributes to saving about 40% off the CPU overhead of computed evaluation (on V8 at least).

	        var computedObservable = this,
	            state = computedObservable[computedState];

	        // Initially, we assume that none of the subscriptions are still being used (i.e., all are candidates for disposal).
	        // Then, during evaluation, we cross off any that are in fact still being used.
	        var isInitial = state.pure ? undefined : !state.dependenciesCount,   // If we're evaluating when there are no previous dependencies, it must be the first time
	            dependencyDetectionContext = {
	                computedObservable: computedObservable,
	                disposalCandidates: state.dependencyTracking,
	                disposalCount: state.dependenciesCount
	            };

	        ko.dependencyDetection.begin({
	            callbackTarget: dependencyDetectionContext,
	            callback: computedBeginDependencyDetectionCallback,
	            computed: computedObservable,
	            isInitial: isInitial
	        });

	        state.dependencyTracking = {};
	        state.dependenciesCount = 0;

	        var newValue = this.evaluateImmediate_CallReadThenEndDependencyDetection(state, dependencyDetectionContext);

	        if (computedObservable.isDifferent(state.latestValue, newValue)) {
	            if (!state.isSleeping) {
	                computedObservable["notifySubscribers"](state.latestValue, "beforeChange");
	            }

	            state.latestValue = newValue;

	            if (state.isSleeping) {
	                computedObservable.updateVersion();
	            } else if (notifyChange) {
	                computedObservable["notifySubscribers"](state.latestValue);
	            }
	        }

	        if (isInitial) {
	            computedObservable["notifySubscribers"](state.latestValue, "awake");
	        }
	    },
	    evaluateImmediate_CallReadThenEndDependencyDetection: function (state, dependencyDetectionContext) {
	        // This function is really part of the evaluateImmediate_CallReadWithDependencyDetection logic.
	        // You'd never call it from anywhere else. Factoring it out means that evaluateImmediate_CallReadWithDependencyDetection
	        // can be independent of try/finally blocks, which contributes to saving about 40% off the CPU
	        // overhead of computed evaluation (on V8 at least).

	        try {
	            var readFunction = state.readFunction;
	            return state.evaluatorFunctionTarget ? readFunction.call(state.evaluatorFunctionTarget) : readFunction();
	        } finally {
	            ko.dependencyDetection.end();

	            // For each subscription no longer being used, remove it from the active subscriptions list and dispose it
	            if (dependencyDetectionContext.disposalCount && !state.isSleeping) {
	                ko.utils.objectForEach(dependencyDetectionContext.disposalCandidates, computedDisposeDependencyCallback);
	            }

	            state.isStale = false;
	        }
	    },
	    peek: function () {
	        // Peek won't re-evaluate, except while the computed is sleeping or to get the initial value when "deferEvaluation" is set.
	        var state = this[computedState];
	        if ((state.isStale && !state.dependenciesCount) || (state.isSleeping && this.haveDependenciesChanged())) {
	            this.evaluateImmediate();
	        }
	        return state.latestValue;
	    },
	    limit: function (limitFunction) {
	        // Override the limit function with one that delays evaluation as well
	        ko.subscribable['fn'].limit.call(this, limitFunction);
	        this._evalDelayed = function () {
	            this._limitBeforeChange(this[computedState].latestValue);

	            this[computedState].isStale = true; // Mark as dirty

	            // Pass the observable to the "limit" code, which will access it when
	            // it's time to do the notification.
	            this._limitChange(this);
	        }
	    },
	    dispose: function () {
	        var state = this[computedState];
	        if (!state.isSleeping && state.dependencyTracking) {
	            ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
	                if (dependency.dispose)
	                    dependency.dispose();
	            });
	        }
	        if (state.disposeWhenNodeIsRemoved && state.domNodeDisposalCallback) {
	            ko.utils.domNodeDisposal.removeDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback);
	        }
	        state.dependencyTracking = null;
	        state.dependenciesCount = 0;
	        state.isDisposed = true;
	        state.isStale = false;
	        state.isSleeping = false;
	        state.disposeWhenNodeIsRemoved = null;
	    }
	};

	var pureComputedOverrides = {
	    beforeSubscriptionAdd: function (event) {
	        // If asleep, wake up the computed by subscribing to any dependencies.
	        var computedObservable = this,
	            state = computedObservable[computedState];
	        if (!state.isDisposed && state.isSleeping && event == 'change') {
	            state.isSleeping = false;
	            if (state.isStale || computedObservable.haveDependenciesChanged()) {
	                state.dependencyTracking = null;
	                state.dependenciesCount = 0;
	                state.isStale = true;
	                computedObservable.evaluateImmediate();
	            } else {
	                // First put the dependencies in order
	                var dependeciesOrder = [];
	                ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
	                    dependeciesOrder[dependency._order] = id;
	                });
	                // Next, subscribe to each one
	                ko.utils.arrayForEach(dependeciesOrder, function (id, order) {
	                    var dependency = state.dependencyTracking[id],
	                        subscription = computedObservable.subscribeToDependency(dependency._target);
	                    subscription._order = order;
	                    subscription._version = dependency._version;
	                    state.dependencyTracking[id] = subscription;
	                });
	            }
	            if (!state.isDisposed) {     // test since evaluating could trigger disposal
	                computedObservable["notifySubscribers"](state.latestValue, "awake");
	            }
	        }
	    },
	    afterSubscriptionRemove: function (event) {
	        var state = this[computedState];
	        if (!state.isDisposed && event == 'change' && !this.hasSubscriptionsForEvent('change')) {
	            ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
	                if (dependency.dispose) {
	                    state.dependencyTracking[id] = {
	                        _target: dependency._target,
	                        _order: dependency._order,
	                        _version: dependency._version
	                    };
	                    dependency.dispose();
	                }
	            });
	            state.isSleeping = true;
	            this["notifySubscribers"](undefined, "asleep");
	        }
	    },
	    getVersion: function () {
	        // Because a pure computed is not automatically updated while it is sleeping, we can't
	        // simply return the version number. Instead, we check if any of the dependencies have
	        // changed and conditionally re-evaluate the computed observable.
	        var state = this[computedState];
	        if (state.isSleeping && (state.isStale || this.haveDependenciesChanged())) {
	            this.evaluateImmediate();
	        }
	        return ko.subscribable['fn'].getVersion.call(this);
	    }
	};

	var deferEvaluationOverrides = {
	    beforeSubscriptionAdd: function (event) {
	        // This will force a computed with deferEvaluation to evaluate when the first subscription is registered.
	        if (event == 'change' || event == 'beforeChange') {
	            this.peek();
	        }
	    }
	};

	// Note that for browsers that don't support proto assignment, the
	// inheritance chain is created manually in the ko.computed constructor
	if (ko.utils.canSetPrototype) {
	    ko.utils.setPrototypeOf(computedFn, ko.subscribable['fn']);
	}

	// Set the proto chain values for ko.hasPrototype
	var protoProp = ko.observable.protoProperty; // == "__ko_proto__"
	ko.computed[protoProp] = ko.observable;
	computedFn[protoProp] = ko.computed;

	ko.isComputed = function (instance) {
	    return ko.hasPrototype(instance, ko.computed);
	};

	ko.isPureComputed = function (instance) {
	    return ko.hasPrototype(instance, ko.computed)
	        && instance[computedState] && instance[computedState].pure;
	};

	ko.exportSymbol('computed', ko.computed);
	ko.exportSymbol('dependentObservable', ko.computed);    // export ko.dependentObservable for backwards compatibility (1.x)
	ko.exportSymbol('isComputed', ko.isComputed);
	ko.exportSymbol('isPureComputed', ko.isPureComputed);
	ko.exportSymbol('computed.fn', computedFn);
	ko.exportProperty(computedFn, 'peek', computedFn.peek);
	ko.exportProperty(computedFn, 'dispose', computedFn.dispose);
	ko.exportProperty(computedFn, 'isActive', computedFn.isActive);
	ko.exportProperty(computedFn, 'getDependenciesCount', computedFn.getDependenciesCount);

	ko.pureComputed = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget) {
	    if (typeof evaluatorFunctionOrOptions === 'function') {
	        return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget, {'pure':true});
	    } else {
	        evaluatorFunctionOrOptions = ko.utils.extend({}, evaluatorFunctionOrOptions);   // make a copy of the parameter object
	        evaluatorFunctionOrOptions['pure'] = true;
	        return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget);
	    }
	}
	ko.exportSymbol('pureComputed', ko.pureComputed);

	(function() {
	    var maxNestedObservableDepth = 10; // Escape the (unlikely) pathalogical case where an observable's current value is itself (or similar reference cycle)

	    ko.toJS = function(rootObject) {
	        if (arguments.length == 0)
	            throw new Error("When calling ko.toJS, pass the object you want to convert.");

	        // We just unwrap everything at every level in the object graph
	        return mapJsObjectGraph(rootObject, function(valueToMap) {
	            // Loop because an observable's value might in turn be another observable wrapper
	            for (var i = 0; ko.isObservable(valueToMap) && (i < maxNestedObservableDepth); i++)
	                valueToMap = valueToMap();
	            return valueToMap;
	        });
	    };

	    ko.toJSON = function(rootObject, replacer, space) {     // replacer and space are optional
	        var plainJavaScriptObject = ko.toJS(rootObject);
	        return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
	    };

	    function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
	        visitedObjects = visitedObjects || new objectLookup();

	        rootObject = mapInputCallback(rootObject);
	        var canHaveProperties = (typeof rootObject == "object") && (rootObject !== null) && (rootObject !== undefined) && (!(rootObject instanceof RegExp)) && (!(rootObject instanceof Date)) && (!(rootObject instanceof String)) && (!(rootObject instanceof Number)) && (!(rootObject instanceof Boolean));
	        if (!canHaveProperties)
	            return rootObject;

	        var outputProperties = rootObject instanceof Array ? [] : {};
	        visitedObjects.save(rootObject, outputProperties);

	        visitPropertiesOrArrayEntries(rootObject, function(indexer) {
	            var propertyValue = mapInputCallback(rootObject[indexer]);

	            switch (typeof propertyValue) {
	                case "boolean":
	                case "number":
	                case "string":
	                case "function":
	                    outputProperties[indexer] = propertyValue;
	                    break;
	                case "object":
	                case "undefined":
	                    var previouslyMappedValue = visitedObjects.get(propertyValue);
	                    outputProperties[indexer] = (previouslyMappedValue !== undefined)
	                        ? previouslyMappedValue
	                        : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
	                    break;
	            }
	        });

	        return outputProperties;
	    }

	    function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
	        if (rootObject instanceof Array) {
	            for (var i = 0; i < rootObject.length; i++)
	                visitorCallback(i);

	            // For arrays, also respect toJSON property for custom mappings (fixes #278)
	            if (typeof rootObject['toJSON'] == 'function')
	                visitorCallback('toJSON');
	        } else {
	            for (var propertyName in rootObject) {
	                visitorCallback(propertyName);
	            }
	        }
	    };

	    function objectLookup() {
	        this.keys = [];
	        this.values = [];
	    };

	    objectLookup.prototype = {
	        constructor: objectLookup,
	        save: function(key, value) {
	            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
	            if (existingIndex >= 0)
	                this.values[existingIndex] = value;
	            else {
	                this.keys.push(key);
	                this.values.push(value);
	            }
	        },
	        get: function(key) {
	            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
	            return (existingIndex >= 0) ? this.values[existingIndex] : undefined;
	        }
	    };
	})();

	ko.exportSymbol('toJS', ko.toJS);
	ko.exportSymbol('toJSON', ko.toJSON);
	(function () {
	    var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__';

	    // Normally, SELECT elements and their OPTIONs can only take value of type 'string' (because the values
	    // are stored on DOM attributes). ko.selectExtensions provides a way for SELECTs/OPTIONs to have values
	    // that are arbitrary objects. This is very convenient when implementing things like cascading dropdowns.
	    ko.selectExtensions = {
	        readValue : function(element) {
	            switch (ko.utils.tagNameLower(element)) {
	                case 'option':
	                    if (element[hasDomDataExpandoProperty] === true)
	                        return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
	                    return ko.utils.ieVersion <= 7
	                        ? (element.getAttributeNode('value') && element.getAttributeNode('value').specified ? element.value : element.text)
	                        : element.value;
	                case 'select':
	                    return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;
	                default:
	                    return element.value;
	            }
	        },

	        writeValue: function(element, value, allowUnset) {
	            switch (ko.utils.tagNameLower(element)) {
	                case 'option':
	                    switch(typeof value) {
	                        case "string":
	                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);
	                            if (hasDomDataExpandoProperty in element) { // IE <= 8 throws errors if you delete non-existent properties from a DOM node
	                                delete element[hasDomDataExpandoProperty];
	                            }
	                            element.value = value;
	                            break;
	                        default:
	                            // Store arbitrary object using DomData
	                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
	                            element[hasDomDataExpandoProperty] = true;

	                            // Special treatment of numbers is just for backward compatibility. KO 1.2.1 wrote numerical values to element.value.
	                            element.value = typeof value === "number" ? value : "";
	                            break;
	                    }
	                    break;
	                case 'select':
	                    if (value === "" || value === null)       // A blank string or null value will select the caption
	                        value = undefined;
	                    var selection = -1;
	                    for (var i = 0, n = element.options.length, optionValue; i < n; ++i) {
	                        optionValue = ko.selectExtensions.readValue(element.options[i]);
	                        // Include special check to handle selecting a caption with a blank string value
	                        if (optionValue == value || (optionValue == "" && value === undefined)) {
	                            selection = i;
	                            break;
	                        }
	                    }
	                    if (allowUnset || selection >= 0 || (value === undefined && element.size > 1)) {
	                        element.selectedIndex = selection;
	                    }
	                    break;
	                default:
	                    if ((value === null) || (value === undefined))
	                        value = "";
	                    element.value = value;
	                    break;
	            }
	        }
	    };
	})();

	ko.exportSymbol('selectExtensions', ko.selectExtensions);
	ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
	ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);
	ko.expressionRewriting = (function () {
	    var javaScriptReservedWords = ["true", "false", "null", "undefined"];

	    // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
	    // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
	    // This also will not properly handle nested brackets (e.g., obj1[obj2['prop']]; see #911).
	    var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

	    function getWriteableValue(expression) {
	        if (ko.utils.arrayIndexOf(javaScriptReservedWords, expression) >= 0)
	            return false;
	        var match = expression.match(javaScriptAssignmentTarget);
	        return match === null ? false : match[1] ? ('Object(' + match[1] + ')' + match[2]) : expression;
	    }

	    // The following regular expressions will be used to split an object-literal string into tokens

	        // These two match strings, either with double quotes or single quotes
	    var stringDouble = '"(?:[^"\\\\]|\\\\.)*"',
	        stringSingle = "'(?:[^'\\\\]|\\\\.)*'",
	        // Matches a regular expression (text enclosed by slashes), but will also match sets of divisions
	        // as a regular expression (this is handled by the parsing loop below).
	        stringRegexp = '/(?:[^/\\\\]|\\\\.)*/\w*',
	        // These characters have special meaning to the parser and must not appear in the middle of a
	        // token, except as part of a string.
	        specials = ',"\'{}()/:[\\]',
	        // Match text (at least two characters) that does not contain any of the above special characters,
	        // although some of the special characters are allowed to start it (all but the colon and comma).
	        // The text can contain spaces, but leading or trailing spaces are skipped.
	        everyThingElse = '[^\\s:,/][^' + specials + ']*[^\\s' + specials + ']',
	        // Match any non-space character not matched already. This will match colons and commas, since they're
	        // not matched by "everyThingElse", but will also match any other single character that wasn't already
	        // matched (for example: in "a: 1, b: 2", each of the non-space characters will be matched by oneNotSpace).
	        oneNotSpace = '[^\\s]',

	        // Create the actual regular expression by or-ing the above strings. The order is important.
	        bindingToken = RegExp(stringDouble + '|' + stringSingle + '|' + stringRegexp + '|' + everyThingElse + '|' + oneNotSpace, 'g'),

	        // Match end of previous token to determine whether a slash is a division or regex.
	        divisionLookBehind = /[\])"'A-Za-z0-9_$]+$/,
	        keywordRegexLookBehind = {'in':1,'return':1,'typeof':1};

	    function parseObjectLiteral(objectLiteralString) {
	        // Trim leading and trailing spaces from the string
	        var str = ko.utils.stringTrim(objectLiteralString);

	        // Trim braces '{' surrounding the whole object literal
	        if (str.charCodeAt(0) === 123) str = str.slice(1, -1);

	        // Split into tokens
	        var result = [], toks = str.match(bindingToken), key, values = [], depth = 0;

	        if (toks) {
	            // Append a comma so that we don't need a separate code block to deal with the last item
	            toks.push(',');

	            for (var i = 0, tok; tok = toks[i]; ++i) {
	                var c = tok.charCodeAt(0);
	                // A comma signals the end of a key/value pair if depth is zero
	                if (c === 44) { // ","
	                    if (depth <= 0) {
	                        result.push((key && values.length) ? {key: key, value: values.join('')} : {'unknown': key || values.join('')});
	                        key = depth = 0;
	                        values = [];
	                        continue;
	                    }
	                // Simply skip the colon that separates the name and value
	                } else if (c === 58) { // ":"
	                    if (!depth && !key && values.length === 1) {
	                        key = values.pop();
	                        continue;
	                    }
	                // A set of slashes is initially matched as a regular expression, but could be division
	                } else if (c === 47 && i && tok.length > 1) {  // "/"
	                    // Look at the end of the previous token to determine if the slash is actually division
	                    var match = toks[i-1].match(divisionLookBehind);
	                    if (match && !keywordRegexLookBehind[match[0]]) {
	                        // The slash is actually a division punctuator; re-parse the remainder of the string (not including the slash)
	                        str = str.substr(str.indexOf(tok) + 1);
	                        toks = str.match(bindingToken);
	                        toks.push(',');
	                        i = -1;
	                        // Continue with just the slash
	                        tok = '/';
	                    }
	                // Increment depth for parentheses, braces, and brackets so that interior commas are ignored
	                } else if (c === 40 || c === 123 || c === 91) { // '(', '{', '['
	                    ++depth;
	                } else if (c === 41 || c === 125 || c === 93) { // ')', '}', ']'
	                    --depth;
	                // The key will be the first token; if it's a string, trim the quotes
	                } else if (!key && !values.length && (c === 34 || c === 39)) { // '"', "'"
	                    tok = tok.slice(1, -1);
	                }
	                values.push(tok);
	            }
	        }
	        return result;
	    }

	    // Two-way bindings include a write function that allow the handler to update the value even if it's not an observable.
	    var twoWayBindings = {};

	    function preProcessBindings(bindingsStringOrKeyValueArray, bindingOptions) {
	        bindingOptions = bindingOptions || {};

	        function processKeyValue(key, val) {
	            var writableVal;
	            function callPreprocessHook(obj) {
	                return (obj && obj['preprocess']) ? (val = obj['preprocess'](val, key, processKeyValue)) : true;
	            }
	            if (!bindingParams) {
	                if (!callPreprocessHook(ko['getBindingHandler'](key)))
	                    return;

	                if (twoWayBindings[key] && (writableVal = getWriteableValue(val))) {
	                    // For two-way bindings, provide a write method in case the value
	                    // isn't a writable observable.
	                    propertyAccessorResultStrings.push("'" + key + "':function(_z){" + writableVal + "=_z}");
	                }
	            }
	            // Values are wrapped in a function so that each value can be accessed independently
	            if (makeValueAccessors) {
	                val = 'function(){return ' + val + ' }';
	            }
	            resultStrings.push("'" + key + "':" + val);
	        }

	        var resultStrings = [],
	            propertyAccessorResultStrings = [],
	            makeValueAccessors = bindingOptions['valueAccessors'],
	            bindingParams = bindingOptions['bindingParams'],
	            keyValueArray = typeof bindingsStringOrKeyValueArray === "string" ?
	                parseObjectLiteral(bindingsStringOrKeyValueArray) : bindingsStringOrKeyValueArray;

	        ko.utils.arrayForEach(keyValueArray, function(keyValue) {
	            processKeyValue(keyValue.key || keyValue['unknown'], keyValue.value);
	        });

	        if (propertyAccessorResultStrings.length)
	            processKeyValue('_ko_property_writers', "{" + propertyAccessorResultStrings.join(",") + " }");

	        return resultStrings.join(",");
	    }

	    return {
	        bindingRewriteValidators: [],

	        twoWayBindings: twoWayBindings,

	        parseObjectLiteral: parseObjectLiteral,

	        preProcessBindings: preProcessBindings,

	        keyValueArrayContainsKey: function(keyValueArray, key) {
	            for (var i = 0; i < keyValueArray.length; i++)
	                if (keyValueArray[i]['key'] == key)
	                    return true;
	            return false;
	        },

	        // Internal, private KO utility for updating model properties from within bindings
	        // property:            If the property being updated is (or might be) an observable, pass it here
	        //                      If it turns out to be a writable observable, it will be written to directly
	        // allBindings:         An object with a get method to retrieve bindings in the current execution context.
	        //                      This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
	        // key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
	        // value:               The value to be written
	        // checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
	        //                      it is !== existing value on that writable observable
	        writeValueToProperty: function(property, allBindings, key, value, checkIfDifferent) {
	            if (!property || !ko.isObservable(property)) {
	                var propWriters = allBindings.get('_ko_property_writers');
	                if (propWriters && propWriters[key])
	                    propWriters[key](value);
	            } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
	                property(value);
	            }
	        }
	    };
	})();

	ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
	ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
	ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
	ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings);

	// Making bindings explicitly declare themselves as "two way" isn't ideal in the long term (it would be better if
	// all bindings could use an official 'property writer' API without needing to declare that they might). However,
	// since this is not, and has never been, a public API (_ko_property_writers was never documented), it's acceptable
	// as an internal implementation detail in the short term.
	// For those developers who rely on _ko_property_writers in their custom bindings, we expose _twoWayBindings as an
	// undocumented feature that makes it relatively easy to upgrade to KO 3.0. However, this is still not an official
	// public API, and we reserve the right to remove it at any time if we create a real public property writers API.
	ko.exportSymbol('expressionRewriting._twoWayBindings', ko.expressionRewriting.twoWayBindings);

	// For backward compatibility, define the following aliases. (Previously, these function names were misleading because
	// they referred to JSON specifically, even though they actually work with arbitrary JavaScript object literal expressions.)
	ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
	ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);
	(function() {
	    // "Virtual elements" is an abstraction on top of the usual DOM API which understands the notion that comment nodes
	    // may be used to represent hierarchy (in addition to the DOM's natural hierarchy).
	    // If you call the DOM-manipulating functions on ko.virtualElements, you will be able to read and write the state
	    // of that virtual hierarchy
	    //
	    // The point of all this is to support containerless templates (e.g., <!-- ko foreach:someCollection -->blah<!-- /ko -->)
	    // without having to scatter special cases all over the binding and templating code.

	    // IE 9 cannot reliably read the "nodeValue" property of a comment node (see https://github.com/SteveSanderson/knockout/issues/186)
	    // but it does give them a nonstandard alternative property called "text" that it can read reliably. Other browsers don't have that property.
	    // So, use node.text where available, and node.nodeValue elsewhere
	    var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";

	    var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/;
	    var endCommentRegex =   commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
	    var htmlTagsWithOptionallyClosingChildren = { 'ul': true, 'ol': true };

	    function isStartComment(node) {
	        return (node.nodeType == 8) && startCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
	    }

	    function isEndComment(node) {
	        return (node.nodeType == 8) && endCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
	    }

	    function getVirtualChildren(startComment, allowUnbalanced) {
	        var currentNode = startComment;
	        var depth = 1;
	        var children = [];
	        while (currentNode = currentNode.nextSibling) {
	            if (isEndComment(currentNode)) {
	                depth--;
	                if (depth === 0)
	                    return children;
	            }

	            children.push(currentNode);

	            if (isStartComment(currentNode))
	                depth++;
	        }
	        if (!allowUnbalanced)
	            throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
	        return null;
	    }

	    function getMatchingEndComment(startComment, allowUnbalanced) {
	        var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);
	        if (allVirtualChildren) {
	            if (allVirtualChildren.length > 0)
	                return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
	            return startComment.nextSibling;
	        } else
	            return null; // Must have no matching end comment, and allowUnbalanced is true
	    }

	    function getUnbalancedChildTags(node) {
	        // e.g., from <div>OK</div><!-- ko blah --><span>Another</span>, returns: <!-- ko blah --><span>Another</span>
	        //       from <div>OK</div><!-- /ko --><!-- /ko -->,             returns: <!-- /ko --><!-- /ko -->
	        var childNode = node.firstChild, captureRemaining = null;
	        if (childNode) {
	            do {
	                if (captureRemaining)                   // We already hit an unbalanced node and are now just scooping up all subsequent nodes
	                    captureRemaining.push(childNode);
	                else if (isStartComment(childNode)) {
	                    var matchingEndComment = getMatchingEndComment(childNode, /* allowUnbalanced: */ true);
	                    if (matchingEndComment)             // It's a balanced tag, so skip immediately to the end of this virtual set
	                        childNode = matchingEndComment;
	                    else
	                        captureRemaining = [childNode]; // It's unbalanced, so start capturing from this point
	                } else if (isEndComment(childNode)) {
	                    captureRemaining = [childNode];     // It's unbalanced (if it wasn't, we'd have skipped over it already), so start capturing
	                }
	            } while (childNode = childNode.nextSibling);
	        }
	        return captureRemaining;
	    }

	    ko.virtualElements = {
	        allowedBindings: {},

	        childNodes: function(node) {
	            return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
	        },

	        emptyNode: function(node) {
	            if (!isStartComment(node))
	                ko.utils.emptyDomNode(node);
	            else {
	                var virtualChildren = ko.virtualElements.childNodes(node);
	                for (var i = 0, j = virtualChildren.length; i < j; i++)
	                    ko.removeNode(virtualChildren[i]);
	            }
	        },

	        setDomNodeChildren: function(node, childNodes) {
	            if (!isStartComment(node))
	                ko.utils.setDomNodeChildren(node, childNodes);
	            else {
	                ko.virtualElements.emptyNode(node);
	                var endCommentNode = node.nextSibling; // Must be the next sibling, as we just emptied the children
	                for (var i = 0, j = childNodes.length; i < j; i++)
	                    endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
	            }
	        },

	        prepend: function(containerNode, nodeToPrepend) {
	            if (!isStartComment(containerNode)) {
	                if (containerNode.firstChild)
	                    containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);
	                else
	                    containerNode.appendChild(nodeToPrepend);
	            } else {
	                // Start comments must always have a parent and at least one following sibling (the end comment)
	                containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
	            }
	        },

	        insertAfter: function(containerNode, nodeToInsert, insertAfterNode) {
	            if (!insertAfterNode) {
	                ko.virtualElements.prepend(containerNode, nodeToInsert);
	            } else if (!isStartComment(containerNode)) {
	                // Insert after insertion point
	                if (insertAfterNode.nextSibling)
	                    containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
	                else
	                    containerNode.appendChild(nodeToInsert);
	            } else {
	                // Children of start comments must always have a parent and at least one following sibling (the end comment)
	                containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
	            }
	        },

	        firstChild: function(node) {
	            if (!isStartComment(node))
	                return node.firstChild;
	            if (!node.nextSibling || isEndComment(node.nextSibling))
	                return null;
	            return node.nextSibling;
	        },

	        nextSibling: function(node) {
	            if (isStartComment(node))
	                node = getMatchingEndComment(node);
	            if (node.nextSibling && isEndComment(node.nextSibling))
	                return null;
	            return node.nextSibling;
	        },

	        hasBindingValue: isStartComment,

	        virtualNodeBindingValue: function(node) {
	            var regexMatch = (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
	            return regexMatch ? regexMatch[1] : null;
	        },

	        normaliseVirtualElementDomStructure: function(elementVerified) {
	            // Workaround for https://github.com/SteveSanderson/knockout/issues/155
	            // (IE <= 8 or IE 9 quirks mode parses your HTML weirdly, treating closing </li> tags as if they don't exist, thereby moving comment nodes
	            // that are direct descendants of <ul> into the preceding <li>)
	            if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)])
	                return;

	            // Scan immediate children to see if they contain unbalanced comment tags. If they do, those comment tags
	            // must be intended to appear *after* that child, so move them there.
	            var childNode = elementVerified.firstChild;
	            if (childNode) {
	                do {
	                    if (childNode.nodeType === 1) {
	                        var unbalancedTags = getUnbalancedChildTags(childNode);
	                        if (unbalancedTags) {
	                            // Fix up the DOM by moving the unbalanced tags to where they most likely were intended to be placed - *after* the child
	                            var nodeToInsertBefore = childNode.nextSibling;
	                            for (var i = 0; i < unbalancedTags.length; i++) {
	                                if (nodeToInsertBefore)
	                                    elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);
	                                else
	                                    elementVerified.appendChild(unbalancedTags[i]);
	                            }
	                        }
	                    }
	                } while (childNode = childNode.nextSibling);
	            }
	        }
	    };
	})();
	ko.exportSymbol('virtualElements', ko.virtualElements);
	ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
	ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode);
	//ko.exportSymbol('virtualElements.firstChild', ko.virtualElements.firstChild);     // firstChild is not minified
	ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter);
	//ko.exportSymbol('virtualElements.nextSibling', ko.virtualElements.nextSibling);   // nextSibling is not minified
	ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
	ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);
	(function() {
	    var defaultBindingAttributeName = "data-bind";

	    ko.bindingProvider = function() {
	        this.bindingCache = {};
	    };

	    ko.utils.extend(ko.bindingProvider.prototype, {
	        'nodeHasBindings': function(node) {
	            switch (node.nodeType) {
	                case 1: // Element
	                    return node.getAttribute(defaultBindingAttributeName) != null
	                        || ko.components['getComponentNameForNode'](node);
	                case 8: // Comment node
	                    return ko.virtualElements.hasBindingValue(node);
	                default: return false;
	            }
	        },

	        'getBindings': function(node, bindingContext) {
	            var bindingsString = this['getBindingsString'](node, bindingContext),
	                parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
	            return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */ false);
	        },

	        'getBindingAccessors': function(node, bindingContext) {
	            var bindingsString = this['getBindingsString'](node, bindingContext),
	                parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node, { 'valueAccessors': true }) : null;
	            return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */ true);
	        },

	        // The following function is only used internally by this default provider.
	        // It's not part of the interface definition for a general binding provider.
	        'getBindingsString': function(node, bindingContext) {
	            switch (node.nodeType) {
	                case 1: return node.getAttribute(defaultBindingAttributeName);   // Element
	                case 8: return ko.virtualElements.virtualNodeBindingValue(node); // Comment node
	                default: return null;
	            }
	        },

	        // The following function is only used internally by this default provider.
	        // It's not part of the interface definition for a general binding provider.
	        'parseBindingsString': function(bindingsString, bindingContext, node, options) {
	            try {
	                var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache, options);
	                return bindingFunction(bindingContext, node);
	            } catch (ex) {
	                ex.message = "Unable to parse bindings.\nBindings value: " + bindingsString + "\nMessage: " + ex.message;
	                throw ex;
	            }
	        }
	    });

	    ko.bindingProvider['instance'] = new ko.bindingProvider();

	    function createBindingsStringEvaluatorViaCache(bindingsString, cache, options) {
	        var cacheKey = bindingsString + (options && options['valueAccessors'] || '');
	        return cache[cacheKey]
	            || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString, options));
	    }

	    function createBindingsStringEvaluator(bindingsString, options) {
	        // Build the source for a function that evaluates "expression"
	        // For each scope variable, add an extra level of "with" nesting
	        // Example result: with(sc1) { with(sc0) { return (expression) } }
	        var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString, options),
	            functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
	        return new Function("$context", "$element", functionBody);
	    }
	})();

	ko.exportSymbol('bindingProvider', ko.bindingProvider);
	(function () {
	    ko.bindingHandlers = {};

	    // The following element types will not be recursed into during binding.
	    var bindingDoesNotRecurseIntoElementTypes = {
	        // Don't want bindings that operate on text nodes to mutate <script> and <textarea> contents,
	        // because it's unexpected and a potential XSS issue.
	        // Also bindings should not operate on <template> elements since this breaks in Internet Explorer
	        // and because such elements' contents are always intended to be bound in a different context
	        // from where they appear in the document.
	        'script': true,
	        'textarea': true,
	        'template': true
	    };

	    // Use an overridable method for retrieving binding handlers so that a plugins may support dynamically created handlers
	    ko['getBindingHandler'] = function(bindingKey) {
	        return ko.bindingHandlers[bindingKey];
	    };

	    // The ko.bindingContext constructor is only called directly to create the root context. For child
	    // contexts, use bindingContext.createChildContext or bindingContext.extend.
	    ko.bindingContext = function(dataItemOrAccessor, parentContext, dataItemAlias, extendCallback) {

	        // The binding context object includes static properties for the current, parent, and root view models.
	        // If a view model is actually stored in an observable, the corresponding binding context object, and
	        // any child contexts, must be updated when the view model is changed.
	        function updateContext() {
	            // Most of the time, the context will directly get a view model object, but if a function is given,
	            // we call the function to retrieve the view model. If the function accesses any observables or returns
	            // an observable, the dependency is tracked, and those observables can later cause the binding
	            // context to be updated.
	            var dataItemOrObservable = isFunc ? dataItemOrAccessor() : dataItemOrAccessor,
	                dataItem = ko.utils.unwrapObservable(dataItemOrObservable);

	            if (parentContext) {
	                // When a "parent" context is given, register a dependency on the parent context. Thus whenever the
	                // parent context is updated, this context will also be updated.
	                if (parentContext._subscribable)
	                    parentContext._subscribable();

	                // Copy $root and any custom properties from the parent context
	                ko.utils.extend(self, parentContext);

	                // Because the above copy overwrites our own properties, we need to reset them.
	                // During the first execution, "subscribable" isn't set, so don't bother doing the update then.
	                if (subscribable) {
	                    self._subscribable = subscribable;
	                }
	            } else {
	                self['$parents'] = [];
	                self['$root'] = dataItem;

	                // Export 'ko' in the binding context so it will be available in bindings and templates
	                // even if 'ko' isn't exported as a global, such as when using an AMD loader.
	                // See https://github.com/SteveSanderson/knockout/issues/490
	                self['ko'] = ko;
	            }
	            self['$rawData'] = dataItemOrObservable;
	            self['$data'] = dataItem;
	            if (dataItemAlias)
	                self[dataItemAlias] = dataItem;

	            // The extendCallback function is provided when creating a child context or extending a context.
	            // It handles the specific actions needed to finish setting up the binding context. Actions in this
	            // function could also add dependencies to this binding context.
	            if (extendCallback)
	                extendCallback(self, parentContext, dataItem);

	            return self['$data'];
	        }
	        function disposeWhen() {
	            return nodes && !ko.utils.anyDomNodeIsAttachedToDocument(nodes);
	        }

	        var self = this,
	            isFunc = typeof(dataItemOrAccessor) == "function" && !ko.isObservable(dataItemOrAccessor),
	            nodes,
	            subscribable = ko.dependentObservable(updateContext, null, { disposeWhen: disposeWhen, disposeWhenNodeIsRemoved: true });

	        // At this point, the binding context has been initialized, and the "subscribable" computed observable is
	        // subscribed to any observables that were accessed in the process. If there is nothing to track, the
	        // computed will be inactive, and we can safely throw it away. If it's active, the computed is stored in
	        // the context object.
	        if (subscribable.isActive()) {
	            self._subscribable = subscribable;

	            // Always notify because even if the model ($data) hasn't changed, other context properties might have changed
	            subscribable['equalityComparer'] = null;

	            // We need to be able to dispose of this computed observable when it's no longer needed. This would be
	            // easy if we had a single node to watch, but binding contexts can be used by many different nodes, and
	            // we cannot assume that those nodes have any relation to each other. So instead we track any node that
	            // the context is attached to, and dispose the computed when all of those nodes have been cleaned.

	            // Add properties to *subscribable* instead of *self* because any properties added to *self* may be overwritten on updates
	            nodes = [];
	            subscribable._addNode = function(node) {
	                nodes.push(node);
	                ko.utils.domNodeDisposal.addDisposeCallback(node, function(node) {
	                    ko.utils.arrayRemoveItem(nodes, node);
	                    if (!nodes.length) {
	                        subscribable.dispose();
	                        self._subscribable = subscribable = undefined;
	                    }
	                });
	            };
	        }
	    }

	    // Extend the binding context hierarchy with a new view model object. If the parent context is watching
	    // any observables, the new child context will automatically get a dependency on the parent context.
	    // But this does not mean that the $data value of the child context will also get updated. If the child
	    // view model also depends on the parent view model, you must provide a function that returns the correct
	    // view model on each update.
	    ko.bindingContext.prototype['createChildContext'] = function (dataItemOrAccessor, dataItemAlias, extendCallback) {
	        return new ko.bindingContext(dataItemOrAccessor, this, dataItemAlias, function(self, parentContext) {
	            // Extend the context hierarchy by setting the appropriate pointers
	            self['$parentContext'] = parentContext;
	            self['$parent'] = parentContext['$data'];
	            self['$parents'] = (parentContext['$parents'] || []).slice(0);
	            self['$parents'].unshift(self['$parent']);
	            if (extendCallback)
	                extendCallback(self);
	        });
	    };

	    // Extend the binding context with new custom properties. This doesn't change the context hierarchy.
	    // Similarly to "child" contexts, provide a function here to make sure that the correct values are set
	    // when an observable view model is updated.
	    ko.bindingContext.prototype['extend'] = function(properties) {
	        // If the parent context references an observable view model, "_subscribable" will always be the
	        // latest view model object. If not, "_subscribable" isn't set, and we can use the static "$data" value.
	        return new ko.bindingContext(this._subscribable || this['$data'], this, null, function(self, parentContext) {
	            // This "child" context doesn't directly track a parent observable view model,
	            // so we need to manually set the $rawData value to match the parent.
	            self['$rawData'] = parentContext['$rawData'];
	            ko.utils.extend(self, typeof(properties) == "function" ? properties() : properties);
	        });
	    };

	    // Returns the valueAccesor function for a binding value
	    function makeValueAccessor(value) {
	        return function() {
	            return value;
	        };
	    }

	    // Returns the value of a valueAccessor function
	    function evaluateValueAccessor(valueAccessor) {
	        return valueAccessor();
	    }

	    // Given a function that returns bindings, create and return a new object that contains
	    // binding value-accessors functions. Each accessor function calls the original function
	    // so that it always gets the latest value and all dependencies are captured. This is used
	    // by ko.applyBindingsToNode and getBindingsAndMakeAccessors.
	    function makeAccessorsFromFunction(callback) {
	        return ko.utils.objectMap(ko.dependencyDetection.ignore(callback), function(value, key) {
	            return function() {
	                return callback()[key];
	            };
	        });
	    }

	    // Given a bindings function or object, create and return a new object that contains
	    // binding value-accessors functions. This is used by ko.applyBindingsToNode.
	    function makeBindingAccessors(bindings, context, node) {
	        if (typeof bindings === 'function') {
	            return makeAccessorsFromFunction(bindings.bind(null, context, node));
	        } else {
	            return ko.utils.objectMap(bindings, makeValueAccessor);
	        }
	    }

	    // This function is used if the binding provider doesn't include a getBindingAccessors function.
	    // It must be called with 'this' set to the provider instance.
	    function getBindingsAndMakeAccessors(node, context) {
	        return makeAccessorsFromFunction(this['getBindings'].bind(this, node, context));
	    }

	    function validateThatBindingIsAllowedForVirtualElements(bindingName) {
	        var validator = ko.virtualElements.allowedBindings[bindingName];
	        if (!validator)
	            throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements")
	    }

	    function applyBindingsToDescendantsInternal (bindingContext, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
	        var currentChild,
	            nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement),
	            provider = ko.bindingProvider['instance'],
	            preprocessNode = provider['preprocessNode'];

	        // Preprocessing allows a binding provider to mutate a node before bindings are applied to it. For example it's
	        // possible to insert new siblings after it, and/or replace the node with a different one. This can be used to
	        // implement custom binding syntaxes, such as {{ value }} for string interpolation, or custom element types that
	        // trigger insertion of <template> contents at that point in the document.
	        if (preprocessNode) {
	            while (currentChild = nextInQueue) {
	                nextInQueue = ko.virtualElements.nextSibling(currentChild);
	                preprocessNode.call(provider, currentChild);
	            }
	            // Reset nextInQueue for the next loop
	            nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
	        }

	        while (currentChild = nextInQueue) {
	            // Keep a record of the next child *before* applying bindings, in case the binding removes the current child from its position
	            nextInQueue = ko.virtualElements.nextSibling(currentChild);
	            applyBindingsToNodeAndDescendantsInternal(bindingContext, currentChild, bindingContextsMayDifferFromDomParentElement);
	        }
	    }

	    function applyBindingsToNodeAndDescendantsInternal (bindingContext, nodeVerified, bindingContextMayDifferFromDomParentElement) {
	        var shouldBindDescendants = true;

	        // Perf optimisation: Apply bindings only if...
	        // (1) We need to store the binding context on this node (because it may differ from the DOM parent node's binding context)
	        //     Note that we can't store binding contexts on non-elements (e.g., text nodes), as IE doesn't allow expando properties for those
	        // (2) It might have bindings (e.g., it has a data-bind attribute, or it's a marker for a containerless template)
	        var isElement = (nodeVerified.nodeType === 1);
	        if (isElement) // Workaround IE <= 8 HTML parsing weirdness
	            ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);

	        var shouldApplyBindings = (isElement && bindingContextMayDifferFromDomParentElement)             // Case (1)
	                               || ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified);       // Case (2)
	        if (shouldApplyBindings)
	            shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, bindingContext, bindingContextMayDifferFromDomParentElement)['shouldBindDescendants'];

	        if (shouldBindDescendants && !bindingDoesNotRecurseIntoElementTypes[ko.utils.tagNameLower(nodeVerified)]) {
	            // We're recursing automatically into (real or virtual) child nodes without changing binding contexts. So,
	            //  * For children of a *real* element, the binding context is certainly the same as on their DOM .parentNode,
	            //    hence bindingContextsMayDifferFromDomParentElement is false
	            //  * For children of a *virtual* element, we can't be sure. Evaluating .parentNode on those children may
	            //    skip over any number of intermediate virtual elements, any of which might define a custom binding context,
	            //    hence bindingContextsMayDifferFromDomParentElement is true
	            applyBindingsToDescendantsInternal(bindingContext, nodeVerified, /* bindingContextsMayDifferFromDomParentElement: */ !isElement);
	        }
	    }

	    var boundElementDomDataKey = ko.utils.domData.nextKey();


	    function topologicalSortBindings(bindings) {
	        // Depth-first sort
	        var result = [],                // The list of key/handler pairs that we will return
	            bindingsConsidered = {},    // A temporary record of which bindings are already in 'result'
	            cyclicDependencyStack = []; // Keeps track of a depth-search so that, if there's a cycle, we know which bindings caused it
	        ko.utils.objectForEach(bindings, function pushBinding(bindingKey) {
	            if (!bindingsConsidered[bindingKey]) {
	                var binding = ko['getBindingHandler'](bindingKey);
	                if (binding) {
	                    // First add dependencies (if any) of the current binding
	                    if (binding['after']) {
	                        cyclicDependencyStack.push(bindingKey);
	                        ko.utils.arrayForEach(binding['after'], function(bindingDependencyKey) {
	                            if (bindings[bindingDependencyKey]) {
	                                if (ko.utils.arrayIndexOf(cyclicDependencyStack, bindingDependencyKey) !== -1) {
	                                    throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + cyclicDependencyStack.join(", "));
	                                } else {
	                                    pushBinding(bindingDependencyKey);
	                                }
	                            }
	                        });
	                        cyclicDependencyStack.length--;
	                    }
	                    // Next add the current binding
	                    result.push({ key: bindingKey, handler: binding });
	                }
	                bindingsConsidered[bindingKey] = true;
	            }
	        });

	        return result;
	    }

	    function applyBindingsToNodeInternal(node, sourceBindings, bindingContext, bindingContextMayDifferFromDomParentElement) {
	        // Prevent multiple applyBindings calls for the same node, except when a binding value is specified
	        var alreadyBound = ko.utils.domData.get(node, boundElementDomDataKey);
	        if (!sourceBindings) {
	            if (alreadyBound) {
	                throw Error("You cannot apply bindings multiple times to the same element.");
	            }
	            ko.utils.domData.set(node, boundElementDomDataKey, true);
	        }

	        // Optimization: Don't store the binding context on this node if it's definitely the same as on node.parentNode, because
	        // we can easily recover it just by scanning up the node's ancestors in the DOM
	        // (note: here, parent node means "real DOM parent" not "virtual parent", as there's no O(1) way to find the virtual parent)
	        if (!alreadyBound && bindingContextMayDifferFromDomParentElement)
	            ko.storedBindingContextForNode(node, bindingContext);

	        // Use bindings if given, otherwise fall back on asking the bindings provider to give us some bindings
	        var bindings;
	        if (sourceBindings && typeof sourceBindings !== 'function') {
	            bindings = sourceBindings;
	        } else {
	            var provider = ko.bindingProvider['instance'],
	                getBindings = provider['getBindingAccessors'] || getBindingsAndMakeAccessors;

	            // Get the binding from the provider within a computed observable so that we can update the bindings whenever
	            // the binding context is updated or if the binding provider accesses observables.
	            var bindingsUpdater = ko.dependentObservable(
	                function() {
	                    bindings = sourceBindings ? sourceBindings(bindingContext, node) : getBindings.call(provider, node, bindingContext);
	                    // Register a dependency on the binding context to support observable view models.
	                    if (bindings && bindingContext._subscribable)
	                        bindingContext._subscribable();
	                    return bindings;
	                },
	                null, { disposeWhenNodeIsRemoved: node }
	            );

	            if (!bindings || !bindingsUpdater.isActive())
	                bindingsUpdater = null;
	        }

	        var bindingHandlerThatControlsDescendantBindings;
	        if (bindings) {
	            // Return the value accessor for a given binding. When bindings are static (won't be updated because of a binding
	            // context update), just return the value accessor from the binding. Otherwise, return a function that always gets
	            // the latest binding value and registers a dependency on the binding updater.
	            var getValueAccessor = bindingsUpdater
	                ? function(bindingKey) {
	                    return function() {
	                        return evaluateValueAccessor(bindingsUpdater()[bindingKey]);
	                    };
	                } : function(bindingKey) {
	                    return bindings[bindingKey];
	                };

	            // Use of allBindings as a function is maintained for backwards compatibility, but its use is deprecated
	            function allBindings() {
	                return ko.utils.objectMap(bindingsUpdater ? bindingsUpdater() : bindings, evaluateValueAccessor);
	            }
	            // The following is the 3.x allBindings API
	            allBindings['get'] = function(key) {
	                return bindings[key] && evaluateValueAccessor(getValueAccessor(key));
	            };
	            allBindings['has'] = function(key) {
	                return key in bindings;
	            };

	            // First put the bindings into the right order
	            var orderedBindings = topologicalSortBindings(bindings);

	            // Go through the sorted bindings, calling init and update for each
	            ko.utils.arrayForEach(orderedBindings, function(bindingKeyAndHandler) {
	                // Note that topologicalSortBindings has already filtered out any nonexistent binding handlers,
	                // so bindingKeyAndHandler.handler will always be nonnull.
	                var handlerInitFn = bindingKeyAndHandler.handler["init"],
	                    handlerUpdateFn = bindingKeyAndHandler.handler["update"],
	                    bindingKey = bindingKeyAndHandler.key;

	                if (node.nodeType === 8) {
	                    validateThatBindingIsAllowedForVirtualElements(bindingKey);
	                }

	                try {
	                    // Run init, ignoring any dependencies
	                    if (typeof handlerInitFn == "function") {
	                        ko.dependencyDetection.ignore(function() {
	                            var initResult = handlerInitFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);

	                            // If this binding handler claims to control descendant bindings, make a note of this
	                            if (initResult && initResult['controlsDescendantBindings']) {
	                                if (bindingHandlerThatControlsDescendantBindings !== undefined)
	                                    throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
	                                bindingHandlerThatControlsDescendantBindings = bindingKey;
	                            }
	                        });
	                    }

	                    // Run update in its own computed wrapper
	                    if (typeof handlerUpdateFn == "function") {
	                        ko.dependentObservable(
	                            function() {
	                                handlerUpdateFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
	                            },
	                            null,
	                            { disposeWhenNodeIsRemoved: node }
	                        );
	                    }
	                } catch (ex) {
	                    ex.message = "Unable to process binding \"" + bindingKey + ": " + bindings[bindingKey] + "\"\nMessage: " + ex.message;
	                    throw ex;
	                }
	            });
	        }

	        return {
	            'shouldBindDescendants': bindingHandlerThatControlsDescendantBindings === undefined
	        };
	    };

	    var storedBindingContextDomDataKey = ko.utils.domData.nextKey();
	    ko.storedBindingContextForNode = function (node, bindingContext) {
	        if (arguments.length == 2) {
	            ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
	            if (bindingContext._subscribable)
	                bindingContext._subscribable._addNode(node);
	        } else {
	            return ko.utils.domData.get(node, storedBindingContextDomDataKey);
	        }
	    }

	    function getBindingContext(viewModelOrBindingContext) {
	        return viewModelOrBindingContext && (viewModelOrBindingContext instanceof ko.bindingContext)
	            ? viewModelOrBindingContext
	            : new ko.bindingContext(viewModelOrBindingContext);
	    }

	    ko.applyBindingAccessorsToNode = function (node, bindings, viewModelOrBindingContext) {
	        if (node.nodeType === 1) // If it's an element, workaround IE <= 8 HTML parsing weirdness
	            ko.virtualElements.normaliseVirtualElementDomStructure(node);
	        return applyBindingsToNodeInternal(node, bindings, getBindingContext(viewModelOrBindingContext), true);
	    };

	    ko.applyBindingsToNode = function (node, bindings, viewModelOrBindingContext) {
	        var context = getBindingContext(viewModelOrBindingContext);
	        return ko.applyBindingAccessorsToNode(node, makeBindingAccessors(bindings, context, node), context);
	    };

	    ko.applyBindingsToDescendants = function(viewModelOrBindingContext, rootNode) {
	        if (rootNode.nodeType === 1 || rootNode.nodeType === 8)
	            applyBindingsToDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
	    };

	    ko.applyBindings = function (viewModelOrBindingContext, rootNode) {
	        // If jQuery is loaded after Knockout, we won't initially have access to it. So save it here.
	        if (!jQueryInstance && window['jQuery']) {
	            jQueryInstance = window['jQuery'];
	        }

	        if (rootNode && (rootNode.nodeType !== 1) && (rootNode.nodeType !== 8))
	            throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
	        rootNode = rootNode || window.document.body; // Make "rootNode" parameter optional

	        applyBindingsToNodeAndDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
	    };

	    // Retrieving binding context from arbitrary nodes
	    ko.contextFor = function(node) {
	        // We can only do something meaningful for elements and comment nodes (in particular, not text nodes, as IE can't store domdata for them)
	        switch (node.nodeType) {
	            case 1:
	            case 8:
	                var context = ko.storedBindingContextForNode(node);
	                if (context) return context;
	                if (node.parentNode) return ko.contextFor(node.parentNode);
	                break;
	        }
	        return undefined;
	    };
	    ko.dataFor = function(node) {
	        var context = ko.contextFor(node);
	        return context ? context['$data'] : undefined;
	    };

	    ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
	    ko.exportSymbol('applyBindings', ko.applyBindings);
	    ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
	    ko.exportSymbol('applyBindingAccessorsToNode', ko.applyBindingAccessorsToNode);
	    ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
	    ko.exportSymbol('contextFor', ko.contextFor);
	    ko.exportSymbol('dataFor', ko.dataFor);
	})();
	(function(undefined) {
	    var loadingSubscribablesCache = {}, // Tracks component loads that are currently in flight
	        loadedDefinitionsCache = {};    // Tracks component loads that have already completed

	    ko.components = {
	        get: function(componentName, callback) {
	            var cachedDefinition = getObjectOwnProperty(loadedDefinitionsCache, componentName);
	            if (cachedDefinition) {
	                // It's already loaded and cached. Reuse the same definition object.
	                // Note that for API consistency, even cache hits complete asynchronously by default.
	                // You can bypass this by putting synchronous:true on your component config.
	                if (cachedDefinition.isSynchronousComponent) {
	                    ko.dependencyDetection.ignore(function() { // See comment in loaderRegistryBehaviors.js for reasoning
	                        callback(cachedDefinition.definition);
	                    });
	                } else {
	                    ko.tasks.schedule(function() { callback(cachedDefinition.definition); });
	                }
	            } else {
	                // Join the loading process that is already underway, or start a new one.
	                loadComponentAndNotify(componentName, callback);
	            }
	        },

	        clearCachedDefinition: function(componentName) {
	            delete loadedDefinitionsCache[componentName];
	        },

	        _getFirstResultFromLoaders: getFirstResultFromLoaders
	    };

	    function getObjectOwnProperty(obj, propName) {
	        return obj.hasOwnProperty(propName) ? obj[propName] : undefined;
	    }

	    function loadComponentAndNotify(componentName, callback) {
	        var subscribable = getObjectOwnProperty(loadingSubscribablesCache, componentName),
	            completedAsync;
	        if (!subscribable) {
	            // It's not started loading yet. Start loading, and when it's done, move it to loadedDefinitionsCache.
	            subscribable = loadingSubscribablesCache[componentName] = new ko.subscribable();
	            subscribable.subscribe(callback);

	            beginLoadingComponent(componentName, function(definition, config) {
	                var isSynchronousComponent = !!(config && config['synchronous']);
	                loadedDefinitionsCache[componentName] = { definition: definition, isSynchronousComponent: isSynchronousComponent };
	                delete loadingSubscribablesCache[componentName];

	                // For API consistency, all loads complete asynchronously. However we want to avoid
	                // adding an extra task schedule if it's unnecessary (i.e., the completion is already
	                // async).
	                //
	                // You can bypass the 'always asynchronous' feature by putting the synchronous:true
	                // flag on your component configuration when you register it.
	                if (completedAsync || isSynchronousComponent) {
	                    // Note that notifySubscribers ignores any dependencies read within the callback.
	                    // See comment in loaderRegistryBehaviors.js for reasoning
	                    subscribable['notifySubscribers'](definition);
	                } else {
	                    ko.tasks.schedule(function() {
	                        subscribable['notifySubscribers'](definition);
	                    });
	                }
	            });
	            completedAsync = true;
	        } else {
	            subscribable.subscribe(callback);
	        }
	    }

	    function beginLoadingComponent(componentName, callback) {
	        getFirstResultFromLoaders('getConfig', [componentName], function(config) {
	            if (config) {
	                // We have a config, so now load its definition
	                getFirstResultFromLoaders('loadComponent', [componentName, config], function(definition) {
	                    callback(definition, config);
	                });
	            } else {
	                // The component has no config - it's unknown to all the loaders.
	                // Note that this is not an error (e.g., a module loading error) - that would abort the
	                // process and this callback would not run. For this callback to run, all loaders must
	                // have confirmed they don't know about this component.
	                callback(null, null);
	            }
	        });
	    }

	    function getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders) {
	        // On the first call in the stack, start with the full set of loaders
	        if (!candidateLoaders) {
	            candidateLoaders = ko.components['loaders'].slice(0); // Use a copy, because we'll be mutating this array
	        }

	        // Try the next candidate
	        var currentCandidateLoader = candidateLoaders.shift();
	        if (currentCandidateLoader) {
	            var methodInstance = currentCandidateLoader[methodName];
	            if (methodInstance) {
	                var wasAborted = false,
	                    synchronousReturnValue = methodInstance.apply(currentCandidateLoader, argsExceptCallback.concat(function(result) {
	                        if (wasAborted) {
	                            callback(null);
	                        } else if (result !== null) {
	                            // This candidate returned a value. Use it.
	                            callback(result);
	                        } else {
	                            // Try the next candidate
	                            getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
	                        }
	                    }));

	                // Currently, loaders may not return anything synchronously. This leaves open the possibility
	                // that we'll extend the API to support synchronous return values in the future. It won't be
	                // a breaking change, because currently no loader is allowed to return anything except undefined.
	                if (synchronousReturnValue !== undefined) {
	                    wasAborted = true;

	                    // Method to suppress exceptions will remain undocumented. This is only to keep
	                    // KO's specs running tidily, since we can observe the loading got aborted without
	                    // having exceptions cluttering up the console too.
	                    if (!currentCandidateLoader['suppressLoaderExceptions']) {
	                        throw new Error('Component loaders must supply values by invoking the callback, not by returning values synchronously.');
	                    }
	                }
	            } else {
	                // This candidate doesn't have the relevant handler. Synchronously move on to the next one.
	                getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
	            }
	        } else {
	            // No candidates returned a value
	            callback(null);
	        }
	    }

	    // Reference the loaders via string name so it's possible for developers
	    // to replace the whole array by assigning to ko.components.loaders
	    ko.components['loaders'] = [];

	    ko.exportSymbol('components', ko.components);
	    ko.exportSymbol('components.get', ko.components.get);
	    ko.exportSymbol('components.clearCachedDefinition', ko.components.clearCachedDefinition);
	})();
	(function(undefined) {

	    // The default loader is responsible for two things:
	    // 1. Maintaining the default in-memory registry of component configuration objects
	    //    (i.e., the thing you're writing to when you call ko.components.register(someName, ...))
	    // 2. Answering requests for components by fetching configuration objects
	    //    from that default in-memory registry and resolving them into standard
	    //    component definition objects (of the form { createViewModel: ..., template: ... })
	    // Custom loaders may override either of these facilities, i.e.,
	    // 1. To supply configuration objects from some other source (e.g., conventions)
	    // 2. Or, to resolve configuration objects by loading viewmodels/templates via arbitrary logic.

	    var defaultConfigRegistry = {};

	    ko.components.register = function(componentName, config) {
	        if (!config) {
	            throw new Error('Invalid configuration for ' + componentName);
	        }

	        if (ko.components.isRegistered(componentName)) {
	            throw new Error('Component ' + componentName + ' is already registered');
	        }

	        defaultConfigRegistry[componentName] = config;
	    };

	    ko.components.isRegistered = function(componentName) {
	        return defaultConfigRegistry.hasOwnProperty(componentName);
	    };

	    ko.components.unregister = function(componentName) {
	        delete defaultConfigRegistry[componentName];
	        ko.components.clearCachedDefinition(componentName);
	    };

	    ko.components.defaultLoader = {
	        'getConfig': function(componentName, callback) {
	            var result = defaultConfigRegistry.hasOwnProperty(componentName)
	                ? defaultConfigRegistry[componentName]
	                : null;
	            callback(result);
	        },

	        'loadComponent': function(componentName, config, callback) {
	            var errorCallback = makeErrorCallback(componentName);
	            possiblyGetConfigFromAmd(errorCallback, config, function(loadedConfig) {
	                resolveConfig(componentName, errorCallback, loadedConfig, callback);
	            });
	        },

	        'loadTemplate': function(componentName, templateConfig, callback) {
	            resolveTemplate(makeErrorCallback(componentName), templateConfig, callback);
	        },

	        'loadViewModel': function(componentName, viewModelConfig, callback) {
	            resolveViewModel(makeErrorCallback(componentName), viewModelConfig, callback);
	        }
	    };

	    var createViewModelKey = 'createViewModel';

	    // Takes a config object of the form { template: ..., viewModel: ... }, and asynchronously convert it
	    // into the standard component definition format:
	    //    { template: <ArrayOfDomNodes>, createViewModel: function(params, componentInfo) { ... } }.
	    // Since both template and viewModel may need to be resolved asynchronously, both tasks are performed
	    // in parallel, and the results joined when both are ready. We don't depend on any promises infrastructure,
	    // so this is implemented manually below.
	    function resolveConfig(componentName, errorCallback, config, callback) {
	        var result = {},
	            makeCallBackWhenZero = 2,
	            tryIssueCallback = function() {
	                if (--makeCallBackWhenZero === 0) {
	                    callback(result);
	                }
	            },
	            templateConfig = config['template'],
	            viewModelConfig = config['viewModel'];

	        if (templateConfig) {
	            possiblyGetConfigFromAmd(errorCallback, templateConfig, function(loadedConfig) {
	                ko.components._getFirstResultFromLoaders('loadTemplate', [componentName, loadedConfig], function(resolvedTemplate) {
	                    result['template'] = resolvedTemplate;
	                    tryIssueCallback();
	                });
	            });
	        } else {
	            tryIssueCallback();
	        }

	        if (viewModelConfig) {
	            possiblyGetConfigFromAmd(errorCallback, viewModelConfig, function(loadedConfig) {
	                ko.components._getFirstResultFromLoaders('loadViewModel', [componentName, loadedConfig], function(resolvedViewModel) {
	                    result[createViewModelKey] = resolvedViewModel;
	                    tryIssueCallback();
	                });
	            });
	        } else {
	            tryIssueCallback();
	        }
	    }

	    function resolveTemplate(errorCallback, templateConfig, callback) {
	        if (typeof templateConfig === 'string') {
	            // Markup - parse it
	            callback(ko.utils.parseHtmlFragment(templateConfig));
	        } else if (templateConfig instanceof Array) {
	            // Assume already an array of DOM nodes - pass through unchanged
	            callback(templateConfig);
	        } else if (isDocumentFragment(templateConfig)) {
	            // Document fragment - use its child nodes
	            callback(ko.utils.makeArray(templateConfig.childNodes));
	        } else if (templateConfig['element']) {
	            var element = templateConfig['element'];
	            if (isDomElement(element)) {
	                // Element instance - copy its child nodes
	                callback(cloneNodesFromTemplateSourceElement(element));
	            } else if (typeof element === 'string') {
	                // Element ID - find it, then copy its child nodes
	                var elemInstance = document.getElementById(element);
	                if (elemInstance) {
	                    callback(cloneNodesFromTemplateSourceElement(elemInstance));
	                } else {
	                    errorCallback('Cannot find element with ID ' + element);
	                }
	            } else {
	                errorCallback('Unknown element type: ' + element);
	            }
	        } else {
	            errorCallback('Unknown template value: ' + templateConfig);
	        }
	    }

	    function resolveViewModel(errorCallback, viewModelConfig, callback) {
	        if (typeof viewModelConfig === 'function') {
	            // Constructor - convert to standard factory function format
	            // By design, this does *not* supply componentInfo to the constructor, as the intent is that
	            // componentInfo contains non-viewmodel data (e.g., the component's element) that should only
	            // be used in factory functions, not viewmodel constructors.
	            callback(function (params /*, componentInfo */) {
	                return new viewModelConfig(params);
	            });
	        } else if (typeof viewModelConfig[createViewModelKey] === 'function') {
	            // Already a factory function - use it as-is
	            callback(viewModelConfig[createViewModelKey]);
	        } else if ('instance' in viewModelConfig) {
	            // Fixed object instance - promote to createViewModel format for API consistency
	            var fixedInstance = viewModelConfig['instance'];
	            callback(function (params, componentInfo) {
	                return fixedInstance;
	            });
	        } else if ('viewModel' in viewModelConfig) {
	            // Resolved AMD module whose value is of the form { viewModel: ... }
	            resolveViewModel(errorCallback, viewModelConfig['viewModel'], callback);
	        } else {
	            errorCallback('Unknown viewModel value: ' + viewModelConfig);
	        }
	    }

	    function cloneNodesFromTemplateSourceElement(elemInstance) {
	        switch (ko.utils.tagNameLower(elemInstance)) {
	            case 'script':
	                return ko.utils.parseHtmlFragment(elemInstance.text);
	            case 'textarea':
	                return ko.utils.parseHtmlFragment(elemInstance.value);
	            case 'template':
	                // For browsers with proper <template> element support (i.e., where the .content property
	                // gives a document fragment), use that document fragment.
	                if (isDocumentFragment(elemInstance.content)) {
	                    return ko.utils.cloneNodes(elemInstance.content.childNodes);
	                }
	        }

	        // Regular elements such as <div>, and <template> elements on old browsers that don't really
	        // understand <template> and just treat it as a regular container
	        return ko.utils.cloneNodes(elemInstance.childNodes);
	    }

	    function isDomElement(obj) {
	        if (window['HTMLElement']) {
	            return obj instanceof HTMLElement;
	        } else {
	            return obj && obj.tagName && obj.nodeType === 1;
	        }
	    }

	    function isDocumentFragment(obj) {
	        if (window['DocumentFragment']) {
	            return obj instanceof DocumentFragment;
	        } else {
	            return obj && obj.nodeType === 11;
	        }
	    }

	    function possiblyGetConfigFromAmd(errorCallback, config, callback) {
	        if (typeof config['require'] === 'string') {
	            // The config is the value of an AMD module
	            if (amdRequire || window['require']) {
	                (amdRequire || window['require'])([config['require']], callback);
	            } else {
	                errorCallback('Uses require, but no AMD loader is present');
	            }
	        } else {
	            callback(config);
	        }
	    }

	    function makeErrorCallback(componentName) {
	        return function (message) {
	            throw new Error('Component \'' + componentName + '\': ' + message);
	        };
	    }

	    ko.exportSymbol('components.register', ko.components.register);
	    ko.exportSymbol('components.isRegistered', ko.components.isRegistered);
	    ko.exportSymbol('components.unregister', ko.components.unregister);

	    // Expose the default loader so that developers can directly ask it for configuration
	    // or to resolve configuration
	    ko.exportSymbol('components.defaultLoader', ko.components.defaultLoader);

	    // By default, the default loader is the only registered component loader
	    ko.components['loaders'].push(ko.components.defaultLoader);

	    // Privately expose the underlying config registry for use in old-IE shim
	    ko.components._allRegisteredComponents = defaultConfigRegistry;
	})();
	(function (undefined) {
	    // Overridable API for determining which component name applies to a given node. By overriding this,
	    // you can for example map specific tagNames to components that are not preregistered.
	    ko.components['getComponentNameForNode'] = function(node) {
	        var tagNameLower = ko.utils.tagNameLower(node);
	        if (ko.components.isRegistered(tagNameLower)) {
	            // Try to determine that this node can be considered a *custom* element; see https://github.com/knockout/knockout/issues/1603
	            if (tagNameLower.indexOf('-') != -1 || ('' + node) == "[object HTMLUnknownElement]" || (ko.utils.ieVersion <= 8 && node.tagName === tagNameLower)) {
	                return tagNameLower;
	            }
	        }
	    };

	    ko.components.addBindingsForCustomElement = function(allBindings, node, bindingContext, valueAccessors) {
	        // Determine if it's really a custom element matching a component
	        if (node.nodeType === 1) {
	            var componentName = ko.components['getComponentNameForNode'](node);
	            if (componentName) {
	                // It does represent a component, so add a component binding for it
	                allBindings = allBindings || {};

	                if (allBindings['component']) {
	                    // Avoid silently overwriting some other 'component' binding that may already be on the element
	                    throw new Error('Cannot use the "component" binding on a custom element matching a component');
	                }

	                var componentBindingValue = { 'name': componentName, 'params': getComponentParamsFromCustomElement(node, bindingContext) };

	                allBindings['component'] = valueAccessors
	                    ? function() { return componentBindingValue; }
	                    : componentBindingValue;
	            }
	        }

	        return allBindings;
	    }

	    var nativeBindingProviderInstance = new ko.bindingProvider();

	    function getComponentParamsFromCustomElement(elem, bindingContext) {
	        var paramsAttribute = elem.getAttribute('params');

	        if (paramsAttribute) {
	            var params = nativeBindingProviderInstance['parseBindingsString'](paramsAttribute, bindingContext, elem, { 'valueAccessors': true, 'bindingParams': true }),
	                rawParamComputedValues = ko.utils.objectMap(params, function(paramValue, paramName) {
	                    return ko.computed(paramValue, null, { disposeWhenNodeIsRemoved: elem });
	                }),
	                result = ko.utils.objectMap(rawParamComputedValues, function(paramValueComputed, paramName) {
	                    var paramValue = paramValueComputed.peek();
	                    // Does the evaluation of the parameter value unwrap any observables?
	                    if (!paramValueComputed.isActive()) {
	                        // No it doesn't, so there's no need for any computed wrapper. Just pass through the supplied value directly.
	                        // Example: "someVal: firstName, age: 123" (whether or not firstName is an observable/computed)
	                        return paramValue;
	                    } else {
	                        // Yes it does. Supply a computed property that unwraps both the outer (binding expression)
	                        // level of observability, and any inner (resulting model value) level of observability.
	                        // This means the component doesn't have to worry about multiple unwrapping. If the value is a
	                        // writable observable, the computed will also be writable and pass the value on to the observable.
	                        return ko.computed({
	                            'read': function() {
	                                return ko.utils.unwrapObservable(paramValueComputed());
	                            },
	                            'write': ko.isWriteableObservable(paramValue) && function(value) {
	                                paramValueComputed()(value);
	                            },
	                            disposeWhenNodeIsRemoved: elem
	                        });
	                    }
	                });

	            // Give access to the raw computeds, as long as that wouldn't overwrite any custom param also called '$raw'
	            // This is in case the developer wants to react to outer (binding) observability separately from inner
	            // (model value) observability, or in case the model value observable has subobservables.
	            if (!result.hasOwnProperty('$raw')) {
	                result['$raw'] = rawParamComputedValues;
	            }

	            return result;
	        } else {
	            // For consistency, absence of a "params" attribute is treated the same as the presence of
	            // any empty one. Otherwise component viewmodels need special code to check whether or not
	            // 'params' or 'params.$raw' is null/undefined before reading subproperties, which is annoying.
	            return { '$raw': {} };
	        }
	    }

	    // --------------------------------------------------------------------------------
	    // Compatibility code for older (pre-HTML5) IE browsers

	    if (ko.utils.ieVersion < 9) {
	        // Whenever you preregister a component, enable it as a custom element in the current document
	        ko.components['register'] = (function(originalFunction) {
	            return function(componentName) {
	                document.createElement(componentName); // Allows IE<9 to parse markup containing the custom element
	                return originalFunction.apply(this, arguments);
	            }
	        })(ko.components['register']);

	        // Whenever you create a document fragment, enable all preregistered component names as custom elements
	        // This is needed to make innerShiv/jQuery HTML parsing correctly handle the custom elements
	        document.createDocumentFragment = (function(originalFunction) {
	            return function() {
	                var newDocFrag = originalFunction(),
	                    allComponents = ko.components._allRegisteredComponents;
	                for (var componentName in allComponents) {
	                    if (allComponents.hasOwnProperty(componentName)) {
	                        newDocFrag.createElement(componentName);
	                    }
	                }
	                return newDocFrag;
	            };
	        })(document.createDocumentFragment);
	    }
	})();(function(undefined) {

	    var componentLoadingOperationUniqueId = 0;

	    ko.bindingHandlers['component'] = {
	        'init': function(element, valueAccessor, ignored1, ignored2, bindingContext) {
	            var currentViewModel,
	                currentLoadingOperationId,
	                disposeAssociatedComponentViewModel = function () {
	                    var currentViewModelDispose = currentViewModel && currentViewModel['dispose'];
	                    if (typeof currentViewModelDispose === 'function') {
	                        currentViewModelDispose.call(currentViewModel);
	                    }
	                    currentViewModel = null;
	                    // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
	                    currentLoadingOperationId = null;
	                },
	                originalChildNodes = ko.utils.makeArray(ko.virtualElements.childNodes(element));

	            ko.utils.domNodeDisposal.addDisposeCallback(element, disposeAssociatedComponentViewModel);

	            ko.computed(function () {
	                var value = ko.utils.unwrapObservable(valueAccessor()),
	                    componentName, componentParams;

	                if (typeof value === 'string') {
	                    componentName = value;
	                } else {
	                    componentName = ko.utils.unwrapObservable(value['name']);
	                    componentParams = ko.utils.unwrapObservable(value['params']);
	                }

	                if (!componentName) {
	                    throw new Error('No component name specified');
	                }

	                var loadingOperationId = currentLoadingOperationId = ++componentLoadingOperationUniqueId;
	                ko.components.get(componentName, function(componentDefinition) {
	                    // If this is not the current load operation for this element, ignore it.
	                    if (currentLoadingOperationId !== loadingOperationId) {
	                        return;
	                    }

	                    // Clean up previous state
	                    disposeAssociatedComponentViewModel();

	                    // Instantiate and bind new component. Implicitly this cleans any old DOM nodes.
	                    if (!componentDefinition) {
	                        throw new Error('Unknown component \'' + componentName + '\'');
	                    }
	                    cloneTemplateIntoElement(componentName, componentDefinition, element);
	                    var componentViewModel = createViewModel(componentDefinition, element, originalChildNodes, componentParams),
	                        childBindingContext = bindingContext['createChildContext'](componentViewModel, /* dataItemAlias */ undefined, function(ctx) {
	                            ctx['$component'] = componentViewModel;
	                            ctx['$componentTemplateNodes'] = originalChildNodes;
	                        });
	                    currentViewModel = componentViewModel;
	                    ko.applyBindingsToDescendants(childBindingContext, element);
	                });
	            }, null, { disposeWhenNodeIsRemoved: element });

	            return { 'controlsDescendantBindings': true };
	        }
	    };

	    ko.virtualElements.allowedBindings['component'] = true;

	    function cloneTemplateIntoElement(componentName, componentDefinition, element) {
	        var template = componentDefinition['template'];
	        if (!template) {
	            throw new Error('Component \'' + componentName + '\' has no template');
	        }

	        var clonedNodesArray = ko.utils.cloneNodes(template);
	        ko.virtualElements.setDomNodeChildren(element, clonedNodesArray);
	    }

	    function createViewModel(componentDefinition, element, originalChildNodes, componentParams) {
	        var componentViewModelFactory = componentDefinition['createViewModel'];
	        return componentViewModelFactory
	            ? componentViewModelFactory.call(componentDefinition, componentParams, { 'element': element, 'templateNodes': originalChildNodes })
	            : componentParams; // Template-only component
	    }

	})();
	var attrHtmlToJavascriptMap = { 'class': 'className', 'for': 'htmlFor' };
	ko.bindingHandlers['attr'] = {
	    'update': function(element, valueAccessor, allBindings) {
	        var value = ko.utils.unwrapObservable(valueAccessor()) || {};
	        ko.utils.objectForEach(value, function(attrName, attrValue) {
	            attrValue = ko.utils.unwrapObservable(attrValue);

	            // To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
	            // when someProp is a "no value"-like value (strictly null, false, or undefined)
	            // (because the absence of the "checked" attr is how to mark an element as not checked, etc.)
	            var toRemove = (attrValue === false) || (attrValue === null) || (attrValue === undefined);
	            if (toRemove)
	                element.removeAttribute(attrName);

	            // In IE <= 7 and IE8 Quirks Mode, you have to use the Javascript property name instead of the
	            // HTML attribute name for certain attributes. IE8 Standards Mode supports the correct behavior,
	            // but instead of figuring out the mode, we'll just set the attribute through the Javascript
	            // property for IE <= 8.
	            if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
	                attrName = attrHtmlToJavascriptMap[attrName];
	                if (toRemove)
	                    element.removeAttribute(attrName);
	                else
	                    element[attrName] = attrValue;
	            } else if (!toRemove) {
	                element.setAttribute(attrName, attrValue.toString());
	            }

	            // Treat "name" specially - although you can think of it as an attribute, it also needs
	            // special handling on older versions of IE (https://github.com/SteveSanderson/knockout/pull/333)
	            // Deliberately being case-sensitive here because XHTML would regard "Name" as a different thing
	            // entirely, and there's no strong reason to allow for such casing in HTML.
	            if (attrName === "name") {
	                ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
	            }
	        });
	    }
	};
	(function() {

	ko.bindingHandlers['checked'] = {
	    'after': ['value', 'attr'],
	    'init': function (element, valueAccessor, allBindings) {
	        var checkedValue = ko.pureComputed(function() {
	            // Treat "value" like "checkedValue" when it is included with "checked" binding
	            if (allBindings['has']('checkedValue')) {
	                return ko.utils.unwrapObservable(allBindings.get('checkedValue'));
	            } else if (allBindings['has']('value')) {
	                return ko.utils.unwrapObservable(allBindings.get('value'));
	            }

	            return element.value;
	        });

	        function updateModel() {
	            // This updates the model value from the view value.
	            // It runs in response to DOM events (click) and changes in checkedValue.
	            var isChecked = element.checked,
	                elemValue = useCheckedValue ? checkedValue() : isChecked;

	            // When we're first setting up this computed, don't change any model state.
	            if (ko.computedContext.isInitial()) {
	                return;
	            }

	            // We can ignore unchecked radio buttons, because some other radio
	            // button will be getting checked, and that one can take care of updating state.
	            if (isRadio && !isChecked) {
	                return;
	            }

	            var modelValue = ko.dependencyDetection.ignore(valueAccessor);
	            if (valueIsArray) {
	                var writableValue = rawValueIsNonArrayObservable ? modelValue.peek() : modelValue;
	                if (oldElemValue !== elemValue) {
	                    // When we're responding to the checkedValue changing, and the element is
	                    // currently checked, replace the old elem value with the new elem value
	                    // in the model array.
	                    if (isChecked) {
	                        ko.utils.addOrRemoveItem(writableValue, elemValue, true);
	                        ko.utils.addOrRemoveItem(writableValue, oldElemValue, false);
	                    }

	                    oldElemValue = elemValue;
	                } else {
	                    // When we're responding to the user having checked/unchecked a checkbox,
	                    // add/remove the element value to the model array.
	                    ko.utils.addOrRemoveItem(writableValue, elemValue, isChecked);
	                }
	                if (rawValueIsNonArrayObservable && ko.isWriteableObservable(modelValue)) {
	                    modelValue(writableValue);
	                }
	            } else {
	                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'checked', elemValue, true);
	            }
	        };

	        function updateView() {
	            // This updates the view value from the model value.
	            // It runs in response to changes in the bound (checked) value.
	            var modelValue = ko.utils.unwrapObservable(valueAccessor());

	            if (valueIsArray) {
	                // When a checkbox is bound to an array, being checked represents its value being present in that array
	                element.checked = ko.utils.arrayIndexOf(modelValue, checkedValue()) >= 0;
	            } else if (isCheckbox) {
	                // When a checkbox is bound to any other value (not an array), being checked represents the value being trueish
	                element.checked = modelValue;
	            } else {
	                // For radio buttons, being checked means that the radio button's value corresponds to the model value
	                element.checked = (checkedValue() === modelValue);
	            }
	        };

	        var isCheckbox = element.type == "checkbox",
	            isRadio = element.type == "radio";

	        // Only bind to check boxes and radio buttons
	        if (!isCheckbox && !isRadio) {
	            return;
	        }

	        var rawValue = valueAccessor(),
	            valueIsArray = isCheckbox && (ko.utils.unwrapObservable(rawValue) instanceof Array),
	            rawValueIsNonArrayObservable = !(valueIsArray && rawValue.push && rawValue.splice),
	            oldElemValue = valueIsArray ? checkedValue() : undefined,
	            useCheckedValue = isRadio || valueIsArray;

	        // IE 6 won't allow radio buttons to be selected unless they have a name
	        if (isRadio && !element.name)
	            ko.bindingHandlers['uniqueName']['init'](element, function() { return true });

	        // Set up two computeds to update the binding:

	        // The first responds to changes in the checkedValue value and to element clicks
	        ko.computed(updateModel, null, { disposeWhenNodeIsRemoved: element });
	        ko.utils.registerEventHandler(element, "click", updateModel);

	        // The second responds to changes in the model value (the one associated with the checked binding)
	        ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });

	        rawValue = undefined;
	    }
	};
	ko.expressionRewriting.twoWayBindings['checked'] = true;

	ko.bindingHandlers['checkedValue'] = {
	    'update': function (element, valueAccessor) {
	        element.value = ko.utils.unwrapObservable(valueAccessor());
	    }
	};

	})();var classesWrittenByBindingKey = '__ko__cssValue';
	ko.bindingHandlers['css'] = {
	    'update': function (element, valueAccessor) {
	        var value = ko.utils.unwrapObservable(valueAccessor());
	        if (value !== null && typeof value == "object") {
	            ko.utils.objectForEach(value, function(className, shouldHaveClass) {
	                shouldHaveClass = ko.utils.unwrapObservable(shouldHaveClass);
	                ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
	            });
	        } else {
	            value = ko.utils.stringTrim(String(value || '')); // Make sure we don't try to store or set a non-string value
	            ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
	            element[classesWrittenByBindingKey] = value;
	            ko.utils.toggleDomNodeCssClass(element, value, true);
	        }
	    }
	};
	ko.bindingHandlers['enable'] = {
	    'update': function (element, valueAccessor) {
	        var value = ko.utils.unwrapObservable(valueAccessor());
	        if (value && element.disabled)
	            element.removeAttribute("disabled");
	        else if ((!value) && (!element.disabled))
	            element.disabled = true;
	    }
	};

	ko.bindingHandlers['disable'] = {
	    'update': function (element, valueAccessor) {
	        ko.bindingHandlers['enable']['update'](element, function() { return !ko.utils.unwrapObservable(valueAccessor()) });
	    }
	};
	// For certain common events (currently just 'click'), allow a simplified data-binding syntax
	// e.g. click:handler instead of the usual full-length event:{click:handler}
	function makeEventHandlerShortcut(eventName) {
	    ko.bindingHandlers[eventName] = {
	        'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
	            var newValueAccessor = function () {
	                var result = {};
	                result[eventName] = valueAccessor();
	                return result;
	            };
	            return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindings, viewModel, bindingContext);
	        }
	    }
	}

	ko.bindingHandlers['event'] = {
	    'init' : function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var eventsToHandle = valueAccessor() || {};
	        ko.utils.objectForEach(eventsToHandle, function(eventName) {
	            if (typeof eventName == "string") {
	                ko.utils.registerEventHandler(element, eventName, function (event) {
	                    var handlerReturnValue;
	                    var handlerFunction = valueAccessor()[eventName];
	                    if (!handlerFunction)
	                        return;

	                    try {
	                        // Take all the event args, and prefix with the viewmodel
	                        var argsForHandler = ko.utils.makeArray(arguments);
	                        viewModel = bindingContext['$data'];
	                        argsForHandler.unshift(viewModel);
	                        handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
	                    } finally {
	                        if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
	                            if (event.preventDefault)
	                                event.preventDefault();
	                            else
	                                event.returnValue = false;
	                        }
	                    }

	                    var bubble = allBindings.get(eventName + 'Bubble') !== false;
	                    if (!bubble) {
	                        event.cancelBubble = true;
	                        if (event.stopPropagation)
	                            event.stopPropagation();
	                    }
	                });
	            }
	        });
	    }
	};
	// "foreach: someExpression" is equivalent to "template: { foreach: someExpression }"
	// "foreach: { data: someExpression, afterAdd: myfn }" is equivalent to "template: { foreach: someExpression, afterAdd: myfn }"
	ko.bindingHandlers['foreach'] = {
	    makeTemplateValueAccessor: function(valueAccessor) {
	        return function() {
	            var modelValue = valueAccessor(),
	                unwrappedValue = ko.utils.peekObservable(modelValue);    // Unwrap without setting a dependency here

	            // If unwrappedValue is the array, pass in the wrapped value on its own
	            // The value will be unwrapped and tracked within the template binding
	            // (See https://github.com/SteveSanderson/knockout/issues/523)
	            if ((!unwrappedValue) || typeof unwrappedValue.length == "number")
	                return { 'foreach': modelValue, 'templateEngine': ko.nativeTemplateEngine.instance };

	            // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
	            ko.utils.unwrapObservable(modelValue);
	            return {
	                'foreach': unwrappedValue['data'],
	                'as': unwrappedValue['as'],
	                'includeDestroyed': unwrappedValue['includeDestroyed'],
	                'afterAdd': unwrappedValue['afterAdd'],
	                'beforeRemove': unwrappedValue['beforeRemove'],
	                'afterRender': unwrappedValue['afterRender'],
	                'beforeMove': unwrappedValue['beforeMove'],
	                'afterMove': unwrappedValue['afterMove'],
	                'templateEngine': ko.nativeTemplateEngine.instance
	            };
	        };
	    },
	    'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
	        return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
	    },
	    'update': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
	        return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindings, viewModel, bindingContext);
	    }
	};
	ko.expressionRewriting.bindingRewriteValidators['foreach'] = false; // Can't rewrite control flow bindings
	ko.virtualElements.allowedBindings['foreach'] = true;
	var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
	var hasfocusLastValue = '__ko_hasfocusLastValue';
	ko.bindingHandlers['hasfocus'] = {
	    'init': function(element, valueAccessor, allBindings) {
	        var handleElementFocusChange = function(isFocused) {
	            // Where possible, ignore which event was raised and determine focus state using activeElement,
	            // as this avoids phantom focus/blur events raised when changing tabs in modern browsers.
	            // However, not all KO-targeted browsers (Firefox 2) support activeElement. For those browsers,
	            // prevent a loss of focus when changing tabs/windows by setting a flag that prevents hasfocus
	            // from calling 'blur()' on the element when it loses focus.
	            // Discussion at https://github.com/SteveSanderson/knockout/pull/352
	            element[hasfocusUpdatingProperty] = true;
	            var ownerDoc = element.ownerDocument;
	            if ("activeElement" in ownerDoc) {
	                var active;
	                try {
	                    active = ownerDoc.activeElement;
	                } catch(e) {
	                    // IE9 throws if you access activeElement during page load (see issue #703)
	                    active = ownerDoc.body;
	                }
	                isFocused = (active === element);
	            }
	            var modelValue = valueAccessor();
	            ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'hasfocus', isFocused, true);

	            //cache the latest value, so we can avoid unnecessarily calling focus/blur in the update function
	            element[hasfocusLastValue] = isFocused;
	            element[hasfocusUpdatingProperty] = false;
	        };
	        var handleElementFocusIn = handleElementFocusChange.bind(null, true);
	        var handleElementFocusOut = handleElementFocusChange.bind(null, false);

	        ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
	        ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn); // For IE
	        ko.utils.registerEventHandler(element, "blur",  handleElementFocusOut);
	        ko.utils.registerEventHandler(element, "focusout",  handleElementFocusOut); // For IE
	    },
	    'update': function(element, valueAccessor) {
	        var value = !!ko.utils.unwrapObservable(valueAccessor());

	        if (!element[hasfocusUpdatingProperty] && element[hasfocusLastValue] !== value) {
	            value ? element.focus() : element.blur();

	            // In IE, the blur method doesn't always cause the element to lose focus (for example, if the window is not in focus).
	            // Setting focus to the body element does seem to be reliable in IE, but should only be used if we know that the current
	            // element was focused already.
	            if (!value && element[hasfocusLastValue]) {
	                element.ownerDocument.body.focus();
	            }

	            // For IE, which doesn't reliably fire "focus" or "blur" events synchronously
	            ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]);
	        }
	    }
	};
	ko.expressionRewriting.twoWayBindings['hasfocus'] = true;

	ko.bindingHandlers['hasFocus'] = ko.bindingHandlers['hasfocus']; // Make "hasFocus" an alias
	ko.expressionRewriting.twoWayBindings['hasFocus'] = true;
	ko.bindingHandlers['html'] = {
	    'init': function() {
	        // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
	        return { 'controlsDescendantBindings': true };
	    },
	    'update': function (element, valueAccessor) {
	        // setHtml will unwrap the value if needed
	        ko.utils.setHtml(element, valueAccessor());
	    }
	};
	// Makes a binding like with or if
	function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
	    ko.bindingHandlers[bindingKey] = {
	        'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
	            var didDisplayOnLastUpdate,
	                savedNodes;
	            ko.computed(function() {
	                var dataValue = ko.utils.unwrapObservable(valueAccessor()),
	                    shouldDisplay = !isNot !== !dataValue, // equivalent to isNot ? !dataValue : !!dataValue
	                    isFirstRender = !savedNodes,
	                    needsRefresh = isFirstRender || isWith || (shouldDisplay !== didDisplayOnLastUpdate);

	                if (needsRefresh) {
	                    // Save a copy of the inner nodes on the initial update, but only if we have dependencies.
	                    if (isFirstRender && ko.computedContext.getDependenciesCount()) {
	                        savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true /* shouldCleanNodes */);
	                    }

	                    if (shouldDisplay) {
	                        if (!isFirstRender) {
	                            ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(savedNodes));
	                        }
	                        ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, dataValue) : bindingContext, element);
	                    } else {
	                        ko.virtualElements.emptyNode(element);
	                    }

	                    didDisplayOnLastUpdate = shouldDisplay;
	                }
	            }, null, { disposeWhenNodeIsRemoved: element });
	            return { 'controlsDescendantBindings': true };
	        }
	    };
	    ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false; // Can't rewrite control flow bindings
	    ko.virtualElements.allowedBindings[bindingKey] = true;
	}

	// Construct the actual binding handlers
	makeWithIfBinding('if');
	makeWithIfBinding('ifnot', false /* isWith */, true /* isNot */);
	makeWithIfBinding('with', true /* isWith */, false /* isNot */,
	    function(bindingContext, dataValue) {
	        return bindingContext['createChildContext'](dataValue);
	    }
	);
	var captionPlaceholder = {};
	ko.bindingHandlers['options'] = {
	    'init': function(element) {
	        if (ko.utils.tagNameLower(element) !== "select")
	            throw new Error("options binding applies only to SELECT elements");

	        // Remove all existing <option>s.
	        while (element.length > 0) {
	            element.remove(0);
	        }

	        // Ensures that the binding processor doesn't try to bind the options
	        return { 'controlsDescendantBindings': true };
	    },
	    'update': function (element, valueAccessor, allBindings) {
	        function selectedOptions() {
	            return ko.utils.arrayFilter(element.options, function (node) { return node.selected; });
	        }

	        var selectWasPreviouslyEmpty = element.length == 0,
	            multiple = element.multiple,
	            previousScrollTop = (!selectWasPreviouslyEmpty && multiple) ? element.scrollTop : null,
	            unwrappedArray = ko.utils.unwrapObservable(valueAccessor()),
	            valueAllowUnset = allBindings.get('valueAllowUnset') && allBindings['has']('value'),
	            includeDestroyed = allBindings.get('optionsIncludeDestroyed'),
	            arrayToDomNodeChildrenOptions = {},
	            captionValue,
	            filteredArray,
	            previousSelectedValues = [];

	        if (!valueAllowUnset) {
	            if (multiple) {
	                previousSelectedValues = ko.utils.arrayMap(selectedOptions(), ko.selectExtensions.readValue);
	            } else if (element.selectedIndex >= 0) {
	                previousSelectedValues.push(ko.selectExtensions.readValue(element.options[element.selectedIndex]));
	            }
	        }

	        if (unwrappedArray) {
	            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
	                unwrappedArray = [unwrappedArray];

	            // Filter out any entries marked as destroyed
	            filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
	                return includeDestroyed || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
	            });

	            // If caption is included, add it to the array
	            if (allBindings['has']('optionsCaption')) {
	                captionValue = ko.utils.unwrapObservable(allBindings.get('optionsCaption'));
	                // If caption value is null or undefined, don't show a caption
	                if (captionValue !== null && captionValue !== undefined) {
	                    filteredArray.unshift(captionPlaceholder);
	                }
	            }
	        } else {
	            // If a falsy value is provided (e.g. null), we'll simply empty the select element
	        }

	        function applyToObject(object, predicate, defaultValue) {
	            var predicateType = typeof predicate;
	            if (predicateType == "function")    // Given a function; run it against the data value
	                return predicate(object);
	            else if (predicateType == "string") // Given a string; treat it as a property name on the data value
	                return object[predicate];
	            else                                // Given no optionsText arg; use the data value itself
	                return defaultValue;
	        }

	        // The following functions can run at two different times:
	        // The first is when the whole array is being updated directly from this binding handler.
	        // The second is when an observable value for a specific array entry is updated.
	        // oldOptions will be empty in the first case, but will be filled with the previously generated option in the second.
	        var itemUpdate = false;
	        function optionForArrayItem(arrayEntry, index, oldOptions) {
	            if (oldOptions.length) {
	                previousSelectedValues = !valueAllowUnset && oldOptions[0].selected ? [ ko.selectExtensions.readValue(oldOptions[0]) ] : [];
	                itemUpdate = true;
	            }
	            var option = element.ownerDocument.createElement("option");
	            if (arrayEntry === captionPlaceholder) {
	                ko.utils.setTextContent(option, allBindings.get('optionsCaption'));
	                ko.selectExtensions.writeValue(option, undefined);
	            } else {
	                // Apply a value to the option element
	                var optionValue = applyToObject(arrayEntry, allBindings.get('optionsValue'), arrayEntry);
	                ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue));

	                // Apply some text to the option element
	                var optionText = applyToObject(arrayEntry, allBindings.get('optionsText'), optionValue);
	                ko.utils.setTextContent(option, optionText);
	            }
	            return [option];
	        }

	        // By using a beforeRemove callback, we delay the removal until after new items are added. This fixes a selection
	        // problem in IE<=8 and Firefox. See https://github.com/knockout/knockout/issues/1208
	        arrayToDomNodeChildrenOptions['beforeRemove'] =
	            function (option) {
	                element.removeChild(option);
	            };

	        function setSelectionCallback(arrayEntry, newOptions) {
	            if (itemUpdate && valueAllowUnset) {
	                // The model value is authoritative, so make sure its value is the one selected
	                // There is no need to use dependencyDetection.ignore since setDomNodeChildrenFromArrayMapping does so already.
	                ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
	            } else if (previousSelectedValues.length) {
	                // IE6 doesn't like us to assign selection to OPTION nodes before they're added to the document.
	                // That's why we first added them without selection. Now it's time to set the selection.
	                var isSelected = ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[0])) >= 0;
	                ko.utils.setOptionNodeSelectionState(newOptions[0], isSelected);

	                // If this option was changed from being selected during a single-item update, notify the change
	                if (itemUpdate && !isSelected) {
	                    ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
	                }
	            }
	        }

	        var callback = setSelectionCallback;
	        if (allBindings['has']('optionsAfterRender') && typeof allBindings.get('optionsAfterRender') == "function") {
	            callback = function(arrayEntry, newOptions) {
	                setSelectionCallback(arrayEntry, newOptions);
	                ko.dependencyDetection.ignore(allBindings.get('optionsAfterRender'), null, [newOptions[0], arrayEntry !== captionPlaceholder ? arrayEntry : undefined]);
	            }
	        }

	        ko.utils.setDomNodeChildrenFromArrayMapping(element, filteredArray, optionForArrayItem, arrayToDomNodeChildrenOptions, callback);

	        ko.dependencyDetection.ignore(function () {
	            if (valueAllowUnset) {
	                // The model value is authoritative, so make sure its value is the one selected
	                ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
	            } else {
	                // Determine if the selection has changed as a result of updating the options list
	                var selectionChanged;
	                if (multiple) {
	                    // For a multiple-select box, compare the new selection count to the previous one
	                    // But if nothing was selected before, the selection can't have changed
	                    selectionChanged = previousSelectedValues.length && selectedOptions().length < previousSelectedValues.length;
	                } else {
	                    // For a single-select box, compare the current value to the previous value
	                    // But if nothing was selected before or nothing is selected now, just look for a change in selection
	                    selectionChanged = (previousSelectedValues.length && element.selectedIndex >= 0)
	                        ? (ko.selectExtensions.readValue(element.options[element.selectedIndex]) !== previousSelectedValues[0])
	                        : (previousSelectedValues.length || element.selectedIndex >= 0);
	                }

	                // Ensure consistency between model value and selected option.
	                // If the dropdown was changed so that selection is no longer the same,
	                // notify the value or selectedOptions binding.
	                if (selectionChanged) {
	                    ko.utils.triggerEvent(element, "change");
	                }
	            }
	        });

	        // Workaround for IE bug
	        ko.utils.ensureSelectElementIsRenderedCorrectly(element);

	        if (previousScrollTop && Math.abs(previousScrollTop - element.scrollTop) > 20)
	            element.scrollTop = previousScrollTop;
	    }
	};
	ko.bindingHandlers['options'].optionValueDomDataKey = ko.utils.domData.nextKey();
	ko.bindingHandlers['selectedOptions'] = {
	    'after': ['options', 'foreach'],
	    'init': function (element, valueAccessor, allBindings) {
	        ko.utils.registerEventHandler(element, "change", function () {
	            var value = valueAccessor(), valueToWrite = [];
	            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
	                if (node.selected)
	                    valueToWrite.push(ko.selectExtensions.readValue(node));
	            });
	            ko.expressionRewriting.writeValueToProperty(value, allBindings, 'selectedOptions', valueToWrite);
	        });
	    },
	    'update': function (element, valueAccessor) {
	        if (ko.utils.tagNameLower(element) != "select")
	            throw new Error("values binding applies only to SELECT elements");

	        var newValue = ko.utils.unwrapObservable(valueAccessor()),
	            previousScrollTop = element.scrollTop;

	        if (newValue && typeof newValue.length == "number") {
	            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
	                var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
	                if (node.selected != isSelected) {      // This check prevents flashing of the select element in IE
	                    ko.utils.setOptionNodeSelectionState(node, isSelected);
	                }
	            });
	        }

	        element.scrollTop = previousScrollTop;
	    }
	};
	ko.expressionRewriting.twoWayBindings['selectedOptions'] = true;
	ko.bindingHandlers['style'] = {
	    'update': function (element, valueAccessor) {
	        var value = ko.utils.unwrapObservable(valueAccessor() || {});
	        ko.utils.objectForEach(value, function(styleName, styleValue) {
	            styleValue = ko.utils.unwrapObservable(styleValue);

	            if (styleValue === null || styleValue === undefined || styleValue === false) {
	                // Empty string removes the value, whereas null/undefined have no effect
	                styleValue = "";
	            }

	            element.style[styleName] = styleValue;
	        });
	    }
	};
	ko.bindingHandlers['submit'] = {
	    'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        if (typeof valueAccessor() != "function")
	            throw new Error("The value for a submit binding must be a function");
	        ko.utils.registerEventHandler(element, "submit", function (event) {
	            var handlerReturnValue;
	            var value = valueAccessor();
	            try { handlerReturnValue = value.call(bindingContext['$data'], element); }
	            finally {
	                if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
	                    if (event.preventDefault)
	                        event.preventDefault();
	                    else
	                        event.returnValue = false;
	                }
	            }
	        });
	    }
	};
	ko.bindingHandlers['text'] = {
	    'init': function() {
	        // Prevent binding on the dynamically-injected text node (as developers are unlikely to expect that, and it has security implications).
	        // It should also make things faster, as we no longer have to consider whether the text node might be bindable.
	        return { 'controlsDescendantBindings': true };
	    },
	    'update': function (element, valueAccessor) {
	        ko.utils.setTextContent(element, valueAccessor());
	    }
	};
	ko.virtualElements.allowedBindings['text'] = true;
	(function () {

	if (window && window.navigator) {
	    var parseVersion = function (matches) {
	        if (matches) {
	            return parseFloat(matches[1]);
	        }
	    };

	    // Detect various browser versions because some old versions don't fully support the 'input' event
	    var operaVersion = window.opera && window.opera.version && parseInt(window.opera.version()),
	        userAgent = window.navigator.userAgent,
	        safariVersion = parseVersion(userAgent.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
	        firefoxVersion = parseVersion(userAgent.match(/Firefox\/([^ ]*)/));
	}

	// IE 8 and 9 have bugs that prevent the normal events from firing when the value changes.
	// But it does fire the 'selectionchange' event on many of those, presumably because the
	// cursor is moving and that counts as the selection changing. The 'selectionchange' event is
	// fired at the document level only and doesn't directly indicate which element changed. We
	// set up just one event handler for the document and use 'activeElement' to determine which
	// element was changed.
	if (ko.utils.ieVersion < 10) {
	    var selectionChangeRegisteredName = ko.utils.domData.nextKey(),
	        selectionChangeHandlerName = ko.utils.domData.nextKey();
	    var selectionChangeHandler = function(event) {
	        var target = this.activeElement,
	            handler = target && ko.utils.domData.get(target, selectionChangeHandlerName);
	        if (handler) {
	            handler(event);
	        }
	    };
	    var registerForSelectionChangeEvent = function (element, handler) {
	        var ownerDoc = element.ownerDocument;
	        if (!ko.utils.domData.get(ownerDoc, selectionChangeRegisteredName)) {
	            ko.utils.domData.set(ownerDoc, selectionChangeRegisteredName, true);
	            ko.utils.registerEventHandler(ownerDoc, 'selectionchange', selectionChangeHandler);
	        }
	        ko.utils.domData.set(element, selectionChangeHandlerName, handler);
	    };
	}

	ko.bindingHandlers['textInput'] = {
	    'init': function (element, valueAccessor, allBindings) {

	        var previousElementValue = element.value,
	            timeoutHandle,
	            elementValueBeforeEvent;

	        var updateModel = function (event) {
	            clearTimeout(timeoutHandle);
	            elementValueBeforeEvent = timeoutHandle = undefined;

	            var elementValue = element.value;
	            if (previousElementValue !== elementValue) {
	                // Provide a way for tests to know exactly which event was processed
	                if (DEBUG && event) element['_ko_textInputProcessedEvent'] = event.type;
	                previousElementValue = elementValue;
	                ko.expressionRewriting.writeValueToProperty(valueAccessor(), allBindings, 'textInput', elementValue);
	            }
	        };

	        var deferUpdateModel = function (event) {
	            if (!timeoutHandle) {
	                // The elementValueBeforeEvent variable is set *only* during the brief gap between an
	                // event firing and the updateModel function running. This allows us to ignore model
	                // updates that are from the previous state of the element, usually due to techniques
	                // such as rateLimit. Such updates, if not ignored, can cause keystrokes to be lost.
	                elementValueBeforeEvent = element.value;
	                var handler = DEBUG ? updateModel.bind(element, {type: event.type}) : updateModel;
	                timeoutHandle = ko.utils.setTimeout(handler, 4);
	            }
	        };

	        // IE9 will mess up the DOM if you handle events synchronously which results in DOM changes (such as other bindings);
	        // so we'll make sure all updates are asynchronous
	        var ieUpdateModel = ko.utils.ieVersion == 9 ? deferUpdateModel : updateModel;

	        var updateView = function () {
	            var modelValue = ko.utils.unwrapObservable(valueAccessor());

	            if (modelValue === null || modelValue === undefined) {
	                modelValue = '';
	            }

	            if (elementValueBeforeEvent !== undefined && modelValue === elementValueBeforeEvent) {
	                ko.utils.setTimeout(updateView, 4);
	                return;
	            }

	            // Update the element only if the element and model are different. On some browsers, updating the value
	            // will move the cursor to the end of the input, which would be bad while the user is typing.
	            if (element.value !== modelValue) {
	                previousElementValue = modelValue;  // Make sure we ignore events (propertychange) that result from updating the value
	                element.value = modelValue;
	            }
	        };

	        var onEvent = function (event, handler) {
	            ko.utils.registerEventHandler(element, event, handler);
	        };

	        if (DEBUG && ko.bindingHandlers['textInput']['_forceUpdateOn']) {
	            // Provide a way for tests to specify exactly which events are bound
	            ko.utils.arrayForEach(ko.bindingHandlers['textInput']['_forceUpdateOn'], function(eventName) {
	                if (eventName.slice(0,5) == 'after') {
	                    onEvent(eventName.slice(5), deferUpdateModel);
	                } else {
	                    onEvent(eventName, updateModel);
	                }
	            });
	        } else {
	            if (ko.utils.ieVersion < 10) {
	                // Internet Explorer <= 8 doesn't support the 'input' event, but does include 'propertychange' that fires whenever
	                // any property of an element changes. Unlike 'input', it also fires if a property is changed from JavaScript code,
	                // but that's an acceptable compromise for this binding. IE 9 does support 'input', but since it doesn't fire it
	                // when using autocomplete, we'll use 'propertychange' for it also.
	                onEvent('propertychange', function(event) {
	                    if (event.propertyName === 'value') {
	                        ieUpdateModel(event);
	                    }
	                });

	                if (ko.utils.ieVersion == 8) {
	                    // IE 8 has a bug where it fails to fire 'propertychange' on the first update following a value change from
	                    // JavaScript code. It also doesn't fire if you clear the entire value. To fix this, we bind to the following
	                    // events too.
	                    onEvent('keyup', updateModel);      // A single keystoke
	                    onEvent('keydown', updateModel);    // The first character when a key is held down
	                }
	                if (ko.utils.ieVersion >= 8) {
	                    // Internet Explorer 9 doesn't fire the 'input' event when deleting text, including using
	                    // the backspace, delete, or ctrl-x keys, clicking the 'x' to clear the input, dragging text
	                    // out of the field, and cutting or deleting text using the context menu. 'selectionchange'
	                    // can detect all of those except dragging text out of the field, for which we use 'dragend'.
	                    // These are also needed in IE8 because of the bug described above.
	                    registerForSelectionChangeEvent(element, ieUpdateModel);  // 'selectionchange' covers cut, paste, drop, delete, etc.
	                    onEvent('dragend', deferUpdateModel);
	                }
	            } else {
	                // All other supported browsers support the 'input' event, which fires whenever the content of the element is changed
	                // through the user interface.
	                onEvent('input', updateModel);

	                if (safariVersion < 5 && ko.utils.tagNameLower(element) === "textarea") {
	                    // Safari <5 doesn't fire the 'input' event for <textarea> elements (it does fire 'textInput'
	                    // but only when typing). So we'll just catch as much as we can with keydown, cut, and paste.
	                    onEvent('keydown', deferUpdateModel);
	                    onEvent('paste', deferUpdateModel);
	                    onEvent('cut', deferUpdateModel);
	                } else if (operaVersion < 11) {
	                    // Opera 10 doesn't always fire the 'input' event for cut, paste, undo & drop operations.
	                    // We can try to catch some of those using 'keydown'.
	                    onEvent('keydown', deferUpdateModel);
	                } else if (firefoxVersion < 4.0) {
	                    // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
	                    onEvent('DOMAutoComplete', updateModel);

	                    // Firefox <=3.5 doesn't fire the 'input' event when text is dropped into the input.
	                    onEvent('dragdrop', updateModel);       // <3.5
	                    onEvent('drop', updateModel);           // 3.5
	                }
	            }
	        }

	        // Bind to the change event so that we can catch programmatic updates of the value that fire this event.
	        onEvent('change', updateModel);

	        ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });
	    }
	};
	ko.expressionRewriting.twoWayBindings['textInput'] = true;

	// textinput is an alias for textInput
	ko.bindingHandlers['textinput'] = {
	    // preprocess is the only way to set up a full alias
	    'preprocess': function (value, name, addBinding) {
	        addBinding('textInput', value);
	    }
	};

	})();ko.bindingHandlers['uniqueName'] = {
	    'init': function (element, valueAccessor) {
	        if (valueAccessor()) {
	            var name = "ko_unique_" + (++ko.bindingHandlers['uniqueName'].currentIndex);
	            ko.utils.setElementName(element, name);
	        }
	    }
	};
	ko.bindingHandlers['uniqueName'].currentIndex = 0;
	ko.bindingHandlers['value'] = {
	    'after': ['options', 'foreach'],
	    'init': function (element, valueAccessor, allBindings) {
	        // If the value binding is placed on a radio/checkbox, then just pass through to checkedValue and quit
	        if (element.tagName.toLowerCase() == "input" && (element.type == "checkbox" || element.type == "radio")) {
	            ko.applyBindingAccessorsToNode(element, { 'checkedValue': valueAccessor });
	            return;
	        }

	        // Always catch "change" event; possibly other events too if asked
	        var eventsToCatch = ["change"];
	        var requestedEventsToCatch = allBindings.get("valueUpdate");
	        var propertyChangedFired = false;
	        var elementValueBeforeEvent = null;

	        if (requestedEventsToCatch) {
	            if (typeof requestedEventsToCatch == "string") // Allow both individual event names, and arrays of event names
	                requestedEventsToCatch = [requestedEventsToCatch];
	            ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
	            eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
	        }

	        var valueUpdateHandler = function() {
	            elementValueBeforeEvent = null;
	            propertyChangedFired = false;
	            var modelValue = valueAccessor();
	            var elementValue = ko.selectExtensions.readValue(element);
	            ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'value', elementValue);
	        }

	        // Workaround for https://github.com/SteveSanderson/knockout/issues/122
	        // IE doesn't fire "change" events on textboxes if the user selects a value from its autocomplete list
	        var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text"
	                                       && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");
	        if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
	            ko.utils.registerEventHandler(element, "propertychange", function () { propertyChangedFired = true });
	            ko.utils.registerEventHandler(element, "focus", function () { propertyChangedFired = false });
	            ko.utils.registerEventHandler(element, "blur", function() {
	                if (propertyChangedFired) {
	                    valueUpdateHandler();
	                }
	            });
	        }

	        ko.utils.arrayForEach(eventsToCatch, function(eventName) {
	            // The syntax "after<eventname>" means "run the handler asynchronously after the event"
	            // This is useful, for example, to catch "keydown" events after the browser has updated the control
	            // (otherwise, ko.selectExtensions.readValue(this) will receive the control's value *before* the key event)
	            var handler = valueUpdateHandler;
	            if (ko.utils.stringStartsWith(eventName, "after")) {
	                handler = function() {
	                    // The elementValueBeforeEvent variable is non-null *only* during the brief gap between
	                    // a keyX event firing and the valueUpdateHandler running, which is scheduled to happen
	                    // at the earliest asynchronous opportunity. We store this temporary information so that
	                    // if, between keyX and valueUpdateHandler, the underlying model value changes separately,
	                    // we can overwrite that model value change with the value the user just typed. Otherwise,
	                    // techniques like rateLimit can trigger model changes at critical moments that will
	                    // override the user's inputs, causing keystrokes to be lost.
	                    elementValueBeforeEvent = ko.selectExtensions.readValue(element);
	                    ko.utils.setTimeout(valueUpdateHandler, 0);
	                };
	                eventName = eventName.substring("after".length);
	            }
	            ko.utils.registerEventHandler(element, eventName, handler);
	        });

	        var updateFromModel = function () {
	            var newValue = ko.utils.unwrapObservable(valueAccessor());
	            var elementValue = ko.selectExtensions.readValue(element);

	            if (elementValueBeforeEvent !== null && newValue === elementValueBeforeEvent) {
	                ko.utils.setTimeout(updateFromModel, 0);
	                return;
	            }

	            var valueHasChanged = (newValue !== elementValue);

	            if (valueHasChanged) {
	                if (ko.utils.tagNameLower(element) === "select") {
	                    var allowUnset = allBindings.get('valueAllowUnset');
	                    var applyValueAction = function () {
	                        ko.selectExtensions.writeValue(element, newValue, allowUnset);
	                    };
	                    applyValueAction();

	                    if (!allowUnset && newValue !== ko.selectExtensions.readValue(element)) {
	                        // If you try to set a model value that can't be represented in an already-populated dropdown, reject that change,
	                        // because you're not allowed to have a model value that disagrees with a visible UI selection.
	                        ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
	                    } else {
	                        // Workaround for IE6 bug: It won't reliably apply values to SELECT nodes during the same execution thread
	                        // right after you've changed the set of OPTION nodes on it. So for that node type, we'll schedule a second thread
	                        // to apply the value as well.
	                        ko.utils.setTimeout(applyValueAction, 0);
	                    }
	                } else {
	                    ko.selectExtensions.writeValue(element, newValue);
	                }
	            }
	        };

	        ko.computed(updateFromModel, null, { disposeWhenNodeIsRemoved: element });
	    },
	    'update': function() {} // Keep for backwards compatibility with code that may have wrapped value binding
	};
	ko.expressionRewriting.twoWayBindings['value'] = true;
	ko.bindingHandlers['visible'] = {
	    'update': function (element, valueAccessor) {
	        var value = ko.utils.unwrapObservable(valueAccessor());
	        var isCurrentlyVisible = !(element.style.display == "none");
	        if (value && !isCurrentlyVisible)
	            element.style.display = "";
	        else if ((!value) && isCurrentlyVisible)
	            element.style.display = "none";
	    }
	};
	// 'click' is just a shorthand for the usual full-length event:{click:handler}
	makeEventHandlerShortcut('click');
	// If you want to make a custom template engine,
	//
	// [1] Inherit from this class (like ko.nativeTemplateEngine does)
	// [2] Override 'renderTemplateSource', supplying a function with this signature:
	//
	//        function (templateSource, bindingContext, options) {
	//            // - templateSource.text() is the text of the template you should render
	//            // - bindingContext.$data is the data you should pass into the template
	//            //   - you might also want to make bindingContext.$parent, bindingContext.$parents,
	//            //     and bindingContext.$root available in the template too
	//            // - options gives you access to any other properties set on "data-bind: { template: options }"
	//            // - templateDocument is the document object of the template
	//            //
	//            // Return value: an array of DOM nodes
	//        }
	//
	// [3] Override 'createJavaScriptEvaluatorBlock', supplying a function with this signature:
	//
	//        function (script) {
	//            // Return value: Whatever syntax means "Evaluate the JavaScript statement 'script' and output the result"
	//            //               For example, the jquery.tmpl template engine converts 'someScript' to '${ someScript }'
	//        }
	//
	//     This is only necessary if you want to allow data-bind attributes to reference arbitrary template variables.
	//     If you don't want to allow that, you can set the property 'allowTemplateRewriting' to false (like ko.nativeTemplateEngine does)
	//     and then you don't need to override 'createJavaScriptEvaluatorBlock'.

	ko.templateEngine = function () { };

	ko.templateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
	    throw new Error("Override renderTemplateSource");
	};

	ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function (script) {
	    throw new Error("Override createJavaScriptEvaluatorBlock");
	};

	ko.templateEngine.prototype['makeTemplateSource'] = function(template, templateDocument) {
	    // Named template
	    if (typeof template == "string") {
	        templateDocument = templateDocument || document;
	        var elem = templateDocument.getElementById(template);
	        if (!elem)
	            throw new Error("Cannot find template with ID " + template);
	        return new ko.templateSources.domElement(elem);
	    } else if ((template.nodeType == 1) || (template.nodeType == 8)) {
	        // Anonymous template
	        return new ko.templateSources.anonymousTemplate(template);
	    } else
	        throw new Error("Unknown template type: " + template);
	};

	ko.templateEngine.prototype['renderTemplate'] = function (template, bindingContext, options, templateDocument) {
	    var templateSource = this['makeTemplateSource'](template, templateDocument);
	    return this['renderTemplateSource'](templateSource, bindingContext, options, templateDocument);
	};

	ko.templateEngine.prototype['isTemplateRewritten'] = function (template, templateDocument) {
	    // Skip rewriting if requested
	    if (this['allowTemplateRewriting'] === false)
	        return true;
	    return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
	};

	ko.templateEngine.prototype['rewriteTemplate'] = function (template, rewriterCallback, templateDocument) {
	    var templateSource = this['makeTemplateSource'](template, templateDocument);
	    var rewritten = rewriterCallback(templateSource['text']());
	    templateSource['text'](rewritten);
	    templateSource['data']("isRewritten", true);
	};

	ko.exportSymbol('templateEngine', ko.templateEngine);

	ko.templateRewriting = (function () {
	    var memoizeDataBindingAttributeSyntaxRegex = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;
	    var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;

	    function validateDataBindValuesForRewriting(keyValueArray) {
	        var allValidators = ko.expressionRewriting.bindingRewriteValidators;
	        for (var i = 0; i < keyValueArray.length; i++) {
	            var key = keyValueArray[i]['key'];
	            if (allValidators.hasOwnProperty(key)) {
	                var validator = allValidators[key];

	                if (typeof validator === "function") {
	                    var possibleErrorMessage = validator(keyValueArray[i]['value']);
	                    if (possibleErrorMessage)
	                        throw new Error(possibleErrorMessage);
	                } else if (!validator) {
	                    throw new Error("This template engine does not support the '" + key + "' binding within its templates");
	                }
	            }
	        }
	    }

	    function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, nodeName, templateEngine) {
	        var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
	        validateDataBindValuesForRewriting(dataBindKeyValueArray);
	        var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray, {'valueAccessors':true});

	        // For no obvious reason, Opera fails to evaluate rewrittenDataBindAttributeValue unless it's wrapped in an additional
	        // anonymous function, even though Opera's built-in debugger can evaluate it anyway. No other browser requires this
	        // extra indirection.
	        var applyBindingsToNextSiblingScript =
	            "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()},'" + nodeName.toLowerCase() + "')";
	        return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
	    }

	    return {
	        ensureTemplateIsRewritten: function (template, templateEngine, templateDocument) {
	            if (!templateEngine['isTemplateRewritten'](template, templateDocument))
	                templateEngine['rewriteTemplate'](template, function (htmlString) {
	                    return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
	                }, templateDocument);
	        },

	        memoizeBindingAttributeSyntax: function (htmlString, templateEngine) {
	            return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function () {
	                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[4], /* tagToRetain: */ arguments[1], /* nodeName: */ arguments[2], templateEngine);
	            }).replace(memoizeVirtualContainerBindingSyntaxRegex, function() {
	                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[1], /* tagToRetain: */ "<!-- ko -->", /* nodeName: */ "#comment", templateEngine);
	            });
	        },

	        applyMemoizedBindingsToNextSibling: function (bindings, nodeName) {
	            return ko.memoization.memoize(function (domNode, bindingContext) {
	                var nodeToBind = domNode.nextSibling;
	                if (nodeToBind && nodeToBind.nodeName.toLowerCase() === nodeName) {
	                    ko.applyBindingAccessorsToNode(nodeToBind, bindings, bindingContext);
	                }
	            });
	        }
	    }
	})();


	// Exported only because it has to be referenced by string lookup from within rewritten template
	ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);
	(function() {
	    // A template source represents a read/write way of accessing a template. This is to eliminate the need for template loading/saving
	    // logic to be duplicated in every template engine (and means they can all work with anonymous templates, etc.)
	    //
	    // Two are provided by default:
	    //  1. ko.templateSources.domElement       - reads/writes the text content of an arbitrary DOM element
	    //  2. ko.templateSources.anonymousElement - uses ko.utils.domData to read/write text *associated* with the DOM element, but
	    //                                           without reading/writing the actual element text content, since it will be overwritten
	    //                                           with the rendered template output.
	    // You can implement your own template source if you want to fetch/store templates somewhere other than in DOM elements.
	    // Template sources need to have the following functions:
	    //   text() 			- returns the template text from your storage location
	    //   text(value)		- writes the supplied template text to your storage location
	    //   data(key)			- reads values stored using data(key, value) - see below
	    //   data(key, value)	- associates "value" with this template and the key "key". Is used to store information like "isRewritten".
	    //
	    // Optionally, template sources can also have the following functions:
	    //   nodes()            - returns a DOM element containing the nodes of this template, where available
	    //   nodes(value)       - writes the given DOM element to your storage location
	    // If a DOM element is available for a given template source, template engines are encouraged to use it in preference over text()
	    // for improved speed. However, all templateSources must supply text() even if they don't supply nodes().
	    //
	    // Once you've implemented a templateSource, make your template engine use it by subclassing whatever template engine you were
	    // using and overriding "makeTemplateSource" to return an instance of your custom template source.

	    ko.templateSources = {};

	    // ---- ko.templateSources.domElement -----

	    // template types
	    var templateScript = 1,
	        templateTextArea = 2,
	        templateTemplate = 3,
	        templateElement = 4;

	    ko.templateSources.domElement = function(element) {
	        this.domElement = element;

	        if (element) {
	            var tagNameLower = ko.utils.tagNameLower(element);
	            this.templateType =
	                tagNameLower === "script" ? templateScript :
	                tagNameLower === "textarea" ? templateTextArea :
	                    // For browsers with proper <template> element support, where the .content property gives a document fragment
	                tagNameLower == "template" && element.content && element.content.nodeType === 11 ? templateTemplate :
	                templateElement;
	        }
	    }

	    ko.templateSources.domElement.prototype['text'] = function(/* valueToWrite */) {
	        var elemContentsProperty = this.templateType === templateScript ? "text"
	                                 : this.templateType === templateTextArea ? "value"
	                                 : "innerHTML";

	        if (arguments.length == 0) {
	            return this.domElement[elemContentsProperty];
	        } else {
	            var valueToWrite = arguments[0];
	            if (elemContentsProperty === "innerHTML")
	                ko.utils.setHtml(this.domElement, valueToWrite);
	            else
	                this.domElement[elemContentsProperty] = valueToWrite;
	        }
	    };

	    var dataDomDataPrefix = ko.utils.domData.nextKey() + "_";
	    ko.templateSources.domElement.prototype['data'] = function(key /*, valueToWrite */) {
	        if (arguments.length === 1) {
	            return ko.utils.domData.get(this.domElement, dataDomDataPrefix + key);
	        } else {
	            ko.utils.domData.set(this.domElement, dataDomDataPrefix + key, arguments[1]);
	        }
	    };

	    var templatesDomDataKey = ko.utils.domData.nextKey();
	    function getTemplateDomData(element) {
	        return ko.utils.domData.get(element, templatesDomDataKey) || {};
	    }
	    function setTemplateDomData(element, data) {
	        ko.utils.domData.set(element, templatesDomDataKey, data);
	    }

	    ko.templateSources.domElement.prototype['nodes'] = function(/* valueToWrite */) {
	        var element = this.domElement;
	        if (arguments.length == 0) {
	            var templateData = getTemplateDomData(element),
	                containerData = templateData.containerData;
	            return containerData || (
	                this.templateType === templateTemplate ? element.content :
	                this.templateType === templateElement ? element :
	                undefined);
	        } else {
	            var valueToWrite = arguments[0];
	            setTemplateDomData(element, {containerData: valueToWrite});
	        }
	    };

	    // ---- ko.templateSources.anonymousTemplate -----
	    // Anonymous templates are normally saved/retrieved as DOM nodes through "nodes".
	    // For compatibility, you can also read "text"; it will be serialized from the nodes on demand.
	    // Writing to "text" is still supported, but then the template data will not be available as DOM nodes.

	    ko.templateSources.anonymousTemplate = function(element) {
	        this.domElement = element;
	    }
	    ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
	    ko.templateSources.anonymousTemplate.prototype.constructor = ko.templateSources.anonymousTemplate;
	    ko.templateSources.anonymousTemplate.prototype['text'] = function(/* valueToWrite */) {
	        if (arguments.length == 0) {
	            var templateData = getTemplateDomData(this.domElement);
	            if (templateData.textData === undefined && templateData.containerData)
	                templateData.textData = templateData.containerData.innerHTML;
	            return templateData.textData;
	        } else {
	            var valueToWrite = arguments[0];
	            setTemplateDomData(this.domElement, {textData: valueToWrite});
	        }
	    };

	    ko.exportSymbol('templateSources', ko.templateSources);
	    ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
	    ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
	})();
	(function () {
	    var _templateEngine;
	    ko.setTemplateEngine = function (templateEngine) {
	        if ((templateEngine != undefined) && !(templateEngine instanceof ko.templateEngine))
	            throw new Error("templateEngine must inherit from ko.templateEngine");
	        _templateEngine = templateEngine;
	    }

	    function invokeForEachNodeInContinuousRange(firstNode, lastNode, action) {
	        var node, nextInQueue = firstNode, firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);
	        while (nextInQueue && ((node = nextInQueue) !== firstOutOfRangeNode)) {
	            nextInQueue = ko.virtualElements.nextSibling(node);
	            action(node, nextInQueue);
	        }
	    }

	    function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
	        // To be used on any nodes that have been rendered by a template and have been inserted into some parent element
	        // Walks through continuousNodeArray (which *must* be continuous, i.e., an uninterrupted sequence of sibling nodes, because
	        // the algorithm for walking them relies on this), and for each top-level item in the virtual-element sense,
	        // (1) Does a regular "applyBindings" to associate bindingContext with this node and to activate any non-memoized bindings
	        // (2) Unmemoizes any memos in the DOM subtree (e.g., to activate bindings that had been memoized during template rewriting)

	        if (continuousNodeArray.length) {
	            var firstNode = continuousNodeArray[0],
	                lastNode = continuousNodeArray[continuousNodeArray.length - 1],
	                parentNode = firstNode.parentNode,
	                provider = ko.bindingProvider['instance'],
	                preprocessNode = provider['preprocessNode'];

	            if (preprocessNode) {
	                invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node, nextNodeInRange) {
	                    var nodePreviousSibling = node.previousSibling;
	                    var newNodes = preprocessNode.call(provider, node);
	                    if (newNodes) {
	                        if (node === firstNode)
	                            firstNode = newNodes[0] || nextNodeInRange;
	                        if (node === lastNode)
	                            lastNode = newNodes[newNodes.length - 1] || nodePreviousSibling;
	                    }
	                });

	                // Because preprocessNode can change the nodes, including the first and last nodes, update continuousNodeArray to match.
	                // We need the full set, including inner nodes, because the unmemoize step might remove the first node (and so the real
	                // first node needs to be in the array).
	                continuousNodeArray.length = 0;
	                if (!firstNode) { // preprocessNode might have removed all the nodes, in which case there's nothing left to do
	                    return;
	                }
	                if (firstNode === lastNode) {
	                    continuousNodeArray.push(firstNode);
	                } else {
	                    continuousNodeArray.push(firstNode, lastNode);
	                    ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
	                }
	            }

	            // Need to applyBindings *before* unmemoziation, because unmemoization might introduce extra nodes (that we don't want to re-bind)
	            // whereas a regular applyBindings won't introduce new memoized nodes
	            invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
	                if (node.nodeType === 1 || node.nodeType === 8)
	                    ko.applyBindings(bindingContext, node);
	            });
	            invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
	                if (node.nodeType === 1 || node.nodeType === 8)
	                    ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
	            });

	            // Make sure any changes done by applyBindings or unmemoize are reflected in the array
	            ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
	        }
	    }

	    function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
	        return nodeOrNodeArray.nodeType ? nodeOrNodeArray
	                                        : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0]
	                                        : null;
	    }

	    function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
	        options = options || {};
	        var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
	        var templateDocument = (firstTargetNode || template || {}).ownerDocument;
	        var templateEngineToUse = (options['templateEngine'] || _templateEngine);
	        ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
	        var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument);

	        // Loosely check result is an array of DOM nodes
	        if ((typeof renderedNodesArray.length != "number") || (renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number"))
	            throw new Error("Template engine must return an array of DOM nodes");

	        var haveAddedNodesToParent = false;
	        switch (renderMode) {
	            case "replaceChildren":
	                ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
	                haveAddedNodesToParent = true;
	                break;
	            case "replaceNode":
	                ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
	                haveAddedNodesToParent = true;
	                break;
	            case "ignoreTargetNode": break;
	            default:
	                throw new Error("Unknown renderMode: " + renderMode);
	        }

	        if (haveAddedNodesToParent) {
	            activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
	            if (options['afterRender'])
	                ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
	        }

	        return renderedNodesArray;
	    }

	    function resolveTemplateName(template, data, context) {
	        // The template can be specified as:
	        if (ko.isObservable(template)) {
	            // 1. An observable, with string value
	            return template();
	        } else if (typeof template === 'function') {
	            // 2. A function of (data, context) returning a string
	            return template(data, context);
	        } else {
	            // 3. A string
	            return template;
	        }
	    }

	    ko.renderTemplate = function (template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
	        options = options || {};
	        if ((options['templateEngine'] || _templateEngine) == undefined)
	            throw new Error("Set a template engine before calling renderTemplate");
	        renderMode = renderMode || "replaceChildren";

	        if (targetNodeOrNodeArray) {
	            var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);

	            var whenToDispose = function () { return (!firstTargetNode) || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode); }; // Passive disposal (on next evaluation)
	            var activelyDisposeWhenNodeIsRemoved = (firstTargetNode && renderMode == "replaceNode") ? firstTargetNode.parentNode : firstTargetNode;

	            return ko.dependentObservable( // So the DOM is automatically updated when any dependency changes
	                function () {
	                    // Ensure we've got a proper binding context to work with
	                    var bindingContext = (dataOrBindingContext && (dataOrBindingContext instanceof ko.bindingContext))
	                        ? dataOrBindingContext
	                        : new ko.bindingContext(ko.utils.unwrapObservable(dataOrBindingContext));

	                    var templateName = resolveTemplateName(template, bindingContext['$data'], bindingContext),
	                        renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);

	                    if (renderMode == "replaceNode") {
	                        targetNodeOrNodeArray = renderedNodesArray;
	                        firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
	                    }
	                },
	                null,
	                { disposeWhen: whenToDispose, disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved }
	            );
	        } else {
	            // We don't yet have a DOM node to evaluate, so use a memo and render the template later when there is a DOM node
	            return ko.memoization.memoize(function (domNode) {
	                ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
	            });
	        }
	    };

	    ko.renderTemplateForEach = function (template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
	        // Since setDomNodeChildrenFromArrayMapping always calls executeTemplateForArrayItem and then
	        // activateBindingsCallback for added items, we can store the binding context in the former to use in the latter.
	        var arrayItemContext;

	        // This will be called by setDomNodeChildrenFromArrayMapping to get the nodes to add to targetNode
	        var executeTemplateForArrayItem = function (arrayValue, index) {
	            // Support selecting template as a function of the data being rendered
	            arrayItemContext = parentBindingContext['createChildContext'](arrayValue, options['as'], function(context) {
	                context['$index'] = index;
	            });

	            var templateName = resolveTemplateName(template, arrayValue, arrayItemContext);
	            return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
	        }

	        // This will be called whenever setDomNodeChildrenFromArrayMapping has added nodes to targetNode
	        var activateBindingsCallback = function(arrayValue, addedNodesArray, index) {
	            activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
	            if (options['afterRender'])
	                options['afterRender'](addedNodesArray, arrayValue);

	            // release the "cache" variable, so that it can be collected by
	            // the GC when its value isn't used from within the bindings anymore.
	            arrayItemContext = null;
	        };

	        return ko.dependentObservable(function () {
	            var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
	            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
	                unwrappedArray = [unwrappedArray];

	            // Filter out any entries marked as destroyed
	            var filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
	                return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
	            });

	            // Call setDomNodeChildrenFromArrayMapping, ignoring any observables unwrapped within (most likely from a callback function).
	            // If the array items are observables, though, they will be unwrapped in executeTemplateForArrayItem and managed within setDomNodeChildrenFromArrayMapping.
	            ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);

	        }, null, { disposeWhenNodeIsRemoved: targetNode });
	    };

	    var templateComputedDomDataKey = ko.utils.domData.nextKey();
	    function disposeOldComputedAndStoreNewOne(element, newComputed) {
	        var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
	        if (oldComputed && (typeof(oldComputed.dispose) == 'function'))
	            oldComputed.dispose();
	        ko.utils.domData.set(element, templateComputedDomDataKey, (newComputed && newComputed.isActive()) ? newComputed : undefined);
	    }

	    ko.bindingHandlers['template'] = {
	        'init': function(element, valueAccessor) {
	            // Support anonymous templates
	            var bindingValue = ko.utils.unwrapObservable(valueAccessor());
	            if (typeof bindingValue == "string" || bindingValue['name']) {
	                // It's a named template - clear the element
	                ko.virtualElements.emptyNode(element);
	            } else if ('nodes' in bindingValue) {
	                // We've been given an array of DOM nodes. Save them as the template source.
	                // There is no known use case for the node array being an observable array (if the output
	                // varies, put that behavior *into* your template - that's what templates are for), and
	                // the implementation would be a mess, so assert that it's not observable.
	                var nodes = bindingValue['nodes'] || [];
	                if (ko.isObservable(nodes)) {
	                    throw new Error('The "nodes" option must be a plain, non-observable array.');
	                }
	                var container = ko.utils.moveCleanedNodesToContainerElement(nodes); // This also removes the nodes from their current parent
	                new ko.templateSources.anonymousTemplate(element)['nodes'](container);
	            } else {
	                // It's an anonymous template - store the element contents, then clear the element
	                var templateNodes = ko.virtualElements.childNodes(element),
	                    container = ko.utils.moveCleanedNodesToContainerElement(templateNodes); // This also removes the nodes from their current parent
	                new ko.templateSources.anonymousTemplate(element)['nodes'](container);
	            }
	            return { 'controlsDescendantBindings': true };
	        },
	        'update': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	            var value = valueAccessor(),
	                dataValue,
	                options = ko.utils.unwrapObservable(value),
	                shouldDisplay = true,
	                templateComputed = null,
	                templateName;

	            if (typeof options == "string") {
	                templateName = value;
	                options = {};
	            } else {
	                templateName = options['name'];

	                // Support "if"/"ifnot" conditions
	                if ('if' in options)
	                    shouldDisplay = ko.utils.unwrapObservable(options['if']);
	                if (shouldDisplay && 'ifnot' in options)
	                    shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);

	                dataValue = ko.utils.unwrapObservable(options['data']);
	            }

	            if ('foreach' in options) {
	                // Render once for each data point (treating data set as empty if shouldDisplay==false)
	                var dataArray = (shouldDisplay && options['foreach']) || [];
	                templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
	            } else if (!shouldDisplay) {
	                ko.virtualElements.emptyNode(element);
	            } else {
	                // Render once for this single data point (or use the viewModel if no data was provided)
	                var innerBindingContext = ('data' in options) ?
	                    bindingContext['createChildContext'](dataValue, options['as']) :  // Given an explitit 'data' value, we create a child binding context for it
	                    bindingContext;                                                        // Given no explicit 'data' value, we retain the same binding context
	                templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
	            }

	            // It only makes sense to have a single template computed per element (otherwise which one should have its output displayed?)
	            disposeOldComputedAndStoreNewOne(element, templateComputed);
	        }
	    };

	    // Anonymous templates can't be rewritten. Give a nice error message if you try to do it.
	    ko.expressionRewriting.bindingRewriteValidators['template'] = function(bindingValue) {
	        var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);

	        if ((parsedBindingValue.length == 1) && parsedBindingValue[0]['unknown'])
	            return null; // It looks like a string literal, not an object literal, so treat it as a named template (which is allowed for rewriting)

	        if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name"))
	            return null; // Named templates can be rewritten, so return "no error"
	        return "This template engine does not support anonymous templates nested within its templates";
	    };

	    ko.virtualElements.allowedBindings['template'] = true;
	})();

	ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
	ko.exportSymbol('renderTemplate', ko.renderTemplate);
	// Go through the items that have been added and deleted and try to find matches between them.
	ko.utils.findMovesInArrayComparison = function (left, right, limitFailedCompares) {
	    if (left.length && right.length) {
	        var failedCompares, l, r, leftItem, rightItem;
	        for (failedCompares = l = 0; (!limitFailedCompares || failedCompares < limitFailedCompares) && (leftItem = left[l]); ++l) {
	            for (r = 0; rightItem = right[r]; ++r) {
	                if (leftItem['value'] === rightItem['value']) {
	                    leftItem['moved'] = rightItem['index'];
	                    rightItem['moved'] = leftItem['index'];
	                    right.splice(r, 1);         // This item is marked as moved; so remove it from right list
	                    failedCompares = r = 0;     // Reset failed compares count because we're checking for consecutive failures
	                    break;
	                }
	            }
	            failedCompares += r;
	        }
	    }
	};

	ko.utils.compareArrays = (function () {
	    var statusNotInOld = 'added', statusNotInNew = 'deleted';

	    // Simple calculation based on Levenshtein distance.
	    function compareArrays(oldArray, newArray, options) {
	        // For backward compatibility, if the third arg is actually a bool, interpret
	        // it as the old parameter 'dontLimitMoves'. Newer code should use { dontLimitMoves: true }.
	        options = (typeof options === 'boolean') ? { 'dontLimitMoves': options } : (options || {});
	        oldArray = oldArray || [];
	        newArray = newArray || [];

	        if (oldArray.length < newArray.length)
	            return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, options);
	        else
	            return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, options);
	    }

	    function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, options) {
	        var myMin = Math.min,
	            myMax = Math.max,
	            editDistanceMatrix = [],
	            smlIndex, smlIndexMax = smlArray.length,
	            bigIndex, bigIndexMax = bigArray.length,
	            compareRange = (bigIndexMax - smlIndexMax) || 1,
	            maxDistance = smlIndexMax + bigIndexMax + 1,
	            thisRow, lastRow,
	            bigIndexMaxForRow, bigIndexMinForRow;

	        for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
	            lastRow = thisRow;
	            editDistanceMatrix.push(thisRow = []);
	            bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
	            bigIndexMinForRow = myMax(0, smlIndex - 1);
	            for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
	                if (!bigIndex)
	                    thisRow[bigIndex] = smlIndex + 1;
	                else if (!smlIndex)  // Top row - transform empty array into new array via additions
	                    thisRow[bigIndex] = bigIndex + 1;
	                else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1])
	                    thisRow[bigIndex] = lastRow[bigIndex - 1];                  // copy value (no edit)
	                else {
	                    var northDistance = lastRow[bigIndex] || maxDistance;       // not in big (deletion)
	                    var westDistance = thisRow[bigIndex - 1] || maxDistance;    // not in small (addition)
	                    thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
	                }
	            }
	        }

	        var editScript = [], meMinusOne, notInSml = [], notInBig = [];
	        for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex;) {
	            meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;
	            if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex-1]) {
	                notInSml.push(editScript[editScript.length] = {     // added
	                    'status': statusNotInSml,
	                    'value': bigArray[--bigIndex],
	                    'index': bigIndex });
	            } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
	                notInBig.push(editScript[editScript.length] = {     // deleted
	                    'status': statusNotInBig,
	                    'value': smlArray[--smlIndex],
	                    'index': smlIndex });
	            } else {
	                --bigIndex;
	                --smlIndex;
	                if (!options['sparse']) {
	                    editScript.push({
	                        'status': "retained",
	                        'value': bigArray[bigIndex] });
	                }
	            }
	        }

	        // Set a limit on the number of consecutive non-matching comparisons; having it a multiple of
	        // smlIndexMax keeps the time complexity of this algorithm linear.
	        ko.utils.findMovesInArrayComparison(notInBig, notInSml, !options['dontLimitMoves'] && smlIndexMax * 10);

	        return editScript.reverse();
	    }

	    return compareArrays;
	})();

	ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);
	(function () {
	    // Objective:
	    // * Given an input array, a container DOM node, and a function from array elements to arrays of DOM nodes,
	    //   map the array elements to arrays of DOM nodes, concatenate together all these arrays, and use them to populate the container DOM node
	    // * Next time we're given the same combination of things (with the array possibly having mutated), update the container DOM node
	    //   so that its children is again the concatenation of the mappings of the array elements, but don't re-map any array elements that we
	    //   previously mapped - retain those nodes, and just insert/delete other ones

	    // "callbackAfterAddingNodes" will be invoked after any "mapping"-generated nodes are inserted into the container node
	    // You can use this, for example, to activate bindings on those nodes.

	    function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
	        // Map this array value inside a dependentObservable so we re-map when any dependency changes
	        var mappedNodes = [];
	        var dependentObservable = ko.dependentObservable(function() {
	            var newMappedNodes = mapping(valueToMap, index, ko.utils.fixUpContinuousNodeArray(mappedNodes, containerNode)) || [];

	            // On subsequent evaluations, just replace the previously-inserted DOM nodes
	            if (mappedNodes.length > 0) {
	                ko.utils.replaceDomNodes(mappedNodes, newMappedNodes);
	                if (callbackAfterAddingNodes)
	                    ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
	            }

	            // Replace the contents of the mappedNodes array, thereby updating the record
	            // of which nodes would be deleted if valueToMap was itself later removed
	            mappedNodes.length = 0;
	            ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
	        }, null, { disposeWhenNodeIsRemoved: containerNode, disposeWhen: function() { return !ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes); } });
	        return { mappedNodes : mappedNodes, dependentObservable : (dependentObservable.isActive() ? dependentObservable : undefined) };
	    }

	    var lastMappingResultDomDataKey = ko.utils.domData.nextKey(),
	        deletedItemDummyValue = ko.utils.domData.nextKey();

	    ko.utils.setDomNodeChildrenFromArrayMapping = function (domNode, array, mapping, options, callbackAfterAddingNodes) {
	        // Compare the provided array against the previous one
	        array = array || [];
	        options = options || {};
	        var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
	        var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
	        var lastArray = ko.utils.arrayMap(lastMappingResult, function (x) { return x.arrayEntry; });
	        var editScript = ko.utils.compareArrays(lastArray, array, options['dontLimitMoves']);

	        // Build the new mapping result
	        var newMappingResult = [];
	        var lastMappingResultIndex = 0;
	        var newMappingResultIndex = 0;

	        var nodesToDelete = [];
	        var itemsToProcess = [];
	        var itemsForBeforeRemoveCallbacks = [];
	        var itemsForMoveCallbacks = [];
	        var itemsForAfterAddCallbacks = [];
	        var mapData;

	        function itemMovedOrRetained(editScriptIndex, oldPosition) {
	            mapData = lastMappingResult[oldPosition];
	            if (newMappingResultIndex !== oldPosition)
	                itemsForMoveCallbacks[editScriptIndex] = mapData;
	            // Since updating the index might change the nodes, do so before calling fixUpContinuousNodeArray
	            mapData.indexObservable(newMappingResultIndex++);
	            ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode);
	            newMappingResult.push(mapData);
	            itemsToProcess.push(mapData);
	        }

	        function callCallback(callback, items) {
	            if (callback) {
	                for (var i = 0, n = items.length; i < n; i++) {
	                    if (items[i]) {
	                        ko.utils.arrayForEach(items[i].mappedNodes, function(node) {
	                            callback(node, i, items[i].arrayEntry);
	                        });
	                    }
	                }
	            }
	        }

	        for (var i = 0, editScriptItem, movedIndex; editScriptItem = editScript[i]; i++) {
	            movedIndex = editScriptItem['moved'];
	            switch (editScriptItem['status']) {
	                case "deleted":
	                    if (movedIndex === undefined) {
	                        mapData = lastMappingResult[lastMappingResultIndex];

	                        // Stop tracking changes to the mapping for these nodes
	                        if (mapData.dependentObservable) {
	                            mapData.dependentObservable.dispose();
	                            mapData.dependentObservable = undefined;
	                        }

	                        // Queue these nodes for later removal
	                        if (ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode).length) {
	                            if (options['beforeRemove']) {
	                                newMappingResult.push(mapData);
	                                itemsToProcess.push(mapData);
	                                if (mapData.arrayEntry === deletedItemDummyValue) {
	                                    mapData = null;
	                                } else {
	                                    itemsForBeforeRemoveCallbacks[i] = mapData;
	                                }
	                            }
	                            if (mapData) {
	                                nodesToDelete.push.apply(nodesToDelete, mapData.mappedNodes);
	                            }
	                        }
	                    }
	                    lastMappingResultIndex++;
	                    break;

	                case "retained":
	                    itemMovedOrRetained(i, lastMappingResultIndex++);
	                    break;

	                case "added":
	                    if (movedIndex !== undefined) {
	                        itemMovedOrRetained(i, movedIndex);
	                    } else {
	                        mapData = { arrayEntry: editScriptItem['value'], indexObservable: ko.observable(newMappingResultIndex++) };
	                        newMappingResult.push(mapData);
	                        itemsToProcess.push(mapData);
	                        if (!isFirstExecution)
	                            itemsForAfterAddCallbacks[i] = mapData;
	                    }
	                    break;
	            }
	        }

	        // Store a copy of the array items we just considered so we can difference it next time
	        ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);

	        // Call beforeMove first before any changes have been made to the DOM
	        callCallback(options['beforeMove'], itemsForMoveCallbacks);

	        // Next remove nodes for deleted items (or just clean if there's a beforeRemove callback)
	        ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode);

	        // Next add/reorder the remaining items (will include deleted items if there's a beforeRemove callback)
	        for (var i = 0, nextNode = ko.virtualElements.firstChild(domNode), lastNode, node; mapData = itemsToProcess[i]; i++) {
	            // Get nodes for newly added items
	            if (!mapData.mappedNodes)
	                ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable));

	            // Put nodes in the right place if they aren't there already
	            for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
	                if (node !== nextNode)
	                    ko.virtualElements.insertAfter(domNode, node, lastNode);
	            }

	            // Run the callbacks for newly added nodes (for example, to apply bindings, etc.)
	            if (!mapData.initialized && callbackAfterAddingNodes) {
	                callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
	                mapData.initialized = true;
	            }
	        }

	        // If there's a beforeRemove callback, call it after reordering.
	        // Note that we assume that the beforeRemove callback will usually be used to remove the nodes using
	        // some sort of animation, which is why we first reorder the nodes that will be removed. If the
	        // callback instead removes the nodes right away, it would be more efficient to skip reordering them.
	        // Perhaps we'll make that change in the future if this scenario becomes more common.
	        callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks);

	        // Replace the stored values of deleted items with a dummy value. This provides two benefits: it marks this item
	        // as already "removed" so we won't call beforeRemove for it again, and it ensures that the item won't match up
	        // with an actual item in the array and appear as "retained" or "moved".
	        for (i = 0; i < itemsForBeforeRemoveCallbacks.length; ++i) {
	            if (itemsForBeforeRemoveCallbacks[i]) {
	                itemsForBeforeRemoveCallbacks[i].arrayEntry = deletedItemDummyValue;
	            }
	        }

	        // Finally call afterMove and afterAdd callbacks
	        callCallback(options['afterMove'], itemsForMoveCallbacks);
	        callCallback(options['afterAdd'], itemsForAfterAddCallbacks);
	    }
	})();

	ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);
	ko.nativeTemplateEngine = function () {
	    this['allowTemplateRewriting'] = false;
	}

	ko.nativeTemplateEngine.prototype = new ko.templateEngine();
	ko.nativeTemplateEngine.prototype.constructor = ko.nativeTemplateEngine;
	ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
	    var useNodesIfAvailable = !(ko.utils.ieVersion < 9), // IE<9 cloneNode doesn't work properly
	        templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
	        templateNodes = templateNodesFunc ? templateSource['nodes']() : null;

	    if (templateNodes) {
	        return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
	    } else {
	        var templateText = templateSource['text']();
	        return ko.utils.parseHtmlFragment(templateText, templateDocument);
	    }
	};

	ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
	ko.setTemplateEngine(ko.nativeTemplateEngine.instance);

	ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);
	(function() {
	    ko.jqueryTmplTemplateEngine = function () {
	        // Detect which version of jquery-tmpl you're using. Unfortunately jquery-tmpl
	        // doesn't expose a version number, so we have to infer it.
	        // Note that as of Knockout 1.3, we only support jQuery.tmpl 1.0.0pre and later,
	        // which KO internally refers to as version "2", so older versions are no longer detected.
	        var jQueryTmplVersion = this.jQueryTmplVersion = (function() {
	            if (!jQueryInstance || !(jQueryInstance['tmpl']))
	                return 0;
	            // Since it exposes no official version number, we use our own numbering system. To be updated as jquery-tmpl evolves.
	            try {
	                if (jQueryInstance['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
	                    // Since 1.0.0pre, custom tags should append markup to an array called "__"
	                    return 2; // Final version of jquery.tmpl
	                }
	            } catch(ex) { /* Apparently not the version we were looking for */ }

	            return 1; // Any older version that we don't support
	        })();

	        function ensureHasReferencedJQueryTemplates() {
	            if (jQueryTmplVersion < 2)
	                throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
	        }

	        function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
	            return jQueryInstance['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
	        }

	        this['renderTemplateSource'] = function(templateSource, bindingContext, options, templateDocument) {
	            templateDocument = templateDocument || document;
	            options = options || {};
	            ensureHasReferencedJQueryTemplates();

	            // Ensure we have stored a precompiled version of this template (don't want to reparse on every render)
	            var precompiled = templateSource['data']('precompiled');
	            if (!precompiled) {
	                var templateText = templateSource['text']() || "";
	                // Wrap in "with($whatever.koBindingContext) { ... }"
	                templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";

	                precompiled = jQueryInstance['template'](null, templateText);
	                templateSource['data']('precompiled', precompiled);
	            }

	            var data = [bindingContext['$data']]; // Prewrap the data in an array to stop jquery.tmpl from trying to unwrap any arrays
	            var jQueryTemplateOptions = jQueryInstance['extend']({ 'koBindingContext': bindingContext }, options['templateOptions']);

	            var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
	            resultNodes['appendTo'](templateDocument.createElement("div")); // Using "appendTo" forces jQuery/jQuery.tmpl to perform necessary cleanup work

	            jQueryInstance['fragments'] = {}; // Clear jQuery's fragment cache to avoid a memory leak after a large number of template renders
	            return resultNodes;
	        };

	        this['createJavaScriptEvaluatorBlock'] = function(script) {
	            return "{{ko_code ((function() { return " + script + " })()) }}";
	        };

	        this['addTemplate'] = function(templateName, templateMarkup) {
	            document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
	        };

	        if (jQueryTmplVersion > 0) {
	            jQueryInstance['tmpl']['tag']['ko_code'] = {
	                open: "__.push($1 || '');"
	            };
	            jQueryInstance['tmpl']['tag']['ko_with'] = {
	                open: "with($1) {",
	                close: "} "
	            };
	        }
	    };

	    ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();
	    ko.jqueryTmplTemplateEngine.prototype.constructor = ko.jqueryTmplTemplateEngine;

	    // Use this one by default *only if jquery.tmpl is referenced*
	    var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
	    if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0)
	        ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);

	    ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
	})();
	}));
	}());
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }
/******/ ]);