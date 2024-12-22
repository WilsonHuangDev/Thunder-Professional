if (typeof Object.assign != 'function') {
	Object.assign = function(target) {
		'use strict';
		if (target === null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		target = Object(target);
		for (var index = 1; index < arguments.length; index++) {
			var source = arguments[index];
			if (source !== null) {
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
		}
		return target;
	};
}
if (typeof JSON !== "object") {
	JSON = {};
}
(function() {
	"use strict";

	var rx_one = /^[\],:{}\s]*$/;
	var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
	var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

	function f(n) {
		return n < 10 ? "0" + n : n;
	}

	function this_value() {
		return this.valueOf();
	}

	if (typeof Date.prototype.toJSON !== "function") {

		Date.prototype.toJSON = function() {

			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" +
				f(this.getUTCMonth() + 1) + "-" +
				f(this.getUTCDate()) + "T" +
				f(this.getUTCHours()) + ":" +
				f(this.getUTCMinutes()) + ":" +
				f(this.getUTCSeconds()) + "Z" : null;
		};

		Boolean.prototype.toJSON = this_value;
		Number.prototype.toJSON = this_value;
		String.prototype.toJSON = this_value;
	}

	var gap;
	var indent;
	var meta;
	var rep;


	function quote(string) {
		rx_escapable.lastIndex = 0;
		return rx_escapable.test(string) ? "\"" + string.replace(rx_escapable, function(a) {
			var c = meta[a];
			return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
		}) + "\"" : "\"" + string + "\"";
	}


	function str(key, holder) {

		var i; // The loop counter.
		var k; // The member key.
		var v; // The member value.
		var length;
		var mind = gap;
		var partial;
		var value = holder[key];

		if (value && typeof value === "object" &&
			typeof value.toJSON === "function") {
			value = value.toJSON(key);
		}
		if (typeof rep === "function") {
			value = rep.call(holder, key, value);
		}
		switch (typeof value) {
			case "string":
				return quote(value);

			case "number":
				return isFinite(value) ? String(value) : "null";

			case "boolean":
			case "null":

				return String(value);

			case "object":
				if (!value) {
					return "null";
				}

				gap += indent;
				partial = [];

				if (Object.prototype.toString.apply(value) === "[object Array]") {
					length = value.length;
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || "null";
					}
					v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
					gap = mind;
					return v;
				}

				if (rep && typeof rep === "object") {
					length = rep.length;
					for (i = 0; i < length; i += 1) {
						if (typeof rep[i] === "string") {
							k = rep[i];
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (
									gap ? ": " : ":"
								) + v);
							}
						}
					}
				} else {

					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (
									gap ? ": " : ":"
								) + v);
							}
						}
					}
				}

				v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
				gap = mind;
				return v;
		}
	}

	if (typeof JSON.stringify !== "function") {
		meta = { // table of character substitutions
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			"\"": "\\\"",
			"\\": "\\\\"
		};
		JSON.stringify = function(value, replacer, space) {

			var i;
			gap = "";
			indent = "";

			if (typeof space === "number") {
				for (i = 0; i < space; i += 1) {
					indent += " ";
				}

			} else if (typeof space === "string") {
				indent = space;
			}

			rep = replacer;
			if (replacer && typeof replacer !== "function" &&
				(typeof replacer !== "object" ||
					typeof replacer.length !== "number")) {
				throw new Error("JSON.stringify");
			}

			return str("", {
				"": value
			});
		};
	}


	if (typeof JSON.parse !== "function") {
		JSON.parse = function(text, reviver) {

			var j;

			function walk(holder, key) {

				var k;
				var v;
				var value = holder[key];
				if (value && typeof value === "object") {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v;
							} else {
								delete value[k];
							}
						}
					}
				}
				return reviver.call(holder, key, value);
			}

			text = String(text);
			rx_dangerous.lastIndex = 0;
			if (rx_dangerous.test(text)) {
				text = text.replace(rx_dangerous, function(a) {
					return "\\u" +
						("0000" + a.charCodeAt(0).toString(16)).slice(-4);
				});
			}

			if (
				rx_one.test(
					text
					.replace(rx_two, "@")
					.replace(rx_three, "]")
					.replace(rx_four, "")
				)
			) {

				j = eval("(" + text + ")");

				return (typeof reviver === "function") ? walk({
					"": j
				}, "") : j;
			}

			throw new SyntaxError("JSON.parse");
		};
	}
}());
(function($) {
	'use strict';

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt) {
		return (num << cnt) | (num >>> (32 - cnt));
	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t) {
		return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	}

	function md5_ff(a, b, c, d, x, s, t) {
		return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}

	function md5_gg(a, b, c, d, x, s, t) {
		return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}

	function md5_hh(a, b, c, d, x, s, t) {
		return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}

	function md5_ii(a, b, c, d, x, s, t) {
		return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length.
	 */
	function binl_md5(x, len) {
		/* append padding */
		x[len >> 5] |= 0x80 << (len % 32);
		x[(((len + 64) >>> 9) << 4) + 14] = len;

		var i;
		var olda;
		var oldb;
		var oldc;
		var oldd;
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;

		for (i = 0; i < x.length; i += 16) {
			olda = a;
			oldb = b;
			oldc = c;
			oldd = d;

			a = md5_ff(a, b, c, d, x[i], 7, -680876936);
			d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
			c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
			b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
			a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
			d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
			c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
			b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
			a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
			d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
			c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
			b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
			a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
			d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
			c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
			b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

			a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
			d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
			c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
			b = md5_gg(b, c, d, a, x[i], 20, -373897302);
			a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
			d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
			c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
			b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
			a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
			d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
			c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
			b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
			a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
			d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
			b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
			c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);

			a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
			d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
			c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
			b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
			a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
			d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
			c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
			b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
			a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
			d = md5_hh(d, a, b, c, x[i], 11, -358537222);
			c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
			b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
			a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
			d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
			c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
			b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

			a = md5_ii(a, b, c, d, x[i], 6, -198630844);
			d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
			c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
			b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
			a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
			d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
			c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
			b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
			a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
			d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
			c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
			b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
			a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
			d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
			c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
			b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

			a = safe_add(a, olda);
			b = safe_add(b, oldb);
			c = safe_add(c, oldc);
			d = safe_add(d, oldd);
		}
		return [a, b, c, d];
	}

	/*
	 * Convert an array of little-endian words to a string
	 */
	function binl2rstr(input) {
		var i;
		var output = '';
		for (i = 0; i < input.length * 32; i += 8) {
			output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
		}
		return output;
	}

	/*
	 * Convert a raw string to an array of little-endian words
	 * Characters >255 have their high-byte silently ignored.
	 */
	function rstr2binl(input) {
		var i;
		var output = [];
		output[(input.length >> 2) - 1] = undefined;
		for (i = 0; i < output.length; i += 1) {
			output[i] = 0;
		}
		for (i = 0; i < input.length * 8; i += 8) {
			output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
		}
		return output;
	}

	/*
	 * Calculate the MD5 of a raw string
	 */
	function rstr_md5(s) {
		return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
	}

	/*
	 * Calculate the HMAC-MD5, of a key and some data (raw strings)
	 */
	function rstr_hmac_md5(key, data) {
		var i;
		var bkey = rstr2binl(key);
		var ipad = [];
		var opad = [];
		var hash;
		ipad[15] = opad[15] = undefined;
		if (bkey.length > 16) {
			bkey = binl_md5(bkey, key.length * 8);
		}
		for (i = 0; i < 16; i += 1) {
			ipad[i] = bkey[i] ^ 0x36363636;
			opad[i] = bkey[i] ^ 0x5C5C5C5C;
		}
		hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
		return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
	}

	/*
	 * Convert a raw string to a hex string
	 */
	function rstr2hex(input) {
		var hex_tab = '0123456789abcdef';
		var output = '';
		var x;
		var i;
		for (i = 0; i < input.length; i += 1) {
			x = input.charCodeAt(i);
			output += hex_tab.charAt((x >>> 4) & 0x0F) +
				hex_tab.charAt(x & 0x0F);
		}
		return output;
	}

	/*
	 * Encode a string as utf-8
	 */
	function str2rstr_utf8(input) {
		return unescape(encodeURIComponent(input));
	}

	/*
	 * Take string arguments and return either raw or hex encoded strings
	 */
	function raw_md5(s) {
		return rstr_md5(str2rstr_utf8(s));
	}

	function hex_md5(s) {
		return rstr2hex(raw_md5(s));
	}

	function raw_hmac_md5(k, d) {
		return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
	}

	function hex_hmac_md5(k, d) {
		return rstr2hex(raw_hmac_md5(k, d));
	}

	function md5(string, key, raw) {
		if (!key) {
			if (!raw) {
				return hex_md5(string);
			}
			return raw_md5(string);
		}
		if (!raw) {
			return hex_hmac_md5(key, string);
		}
		return raw_hmac_md5(key, string);
	}

	// if (typeof define === 'function' && define.amd) {
	// define(function() {
	// return md5;
	// });
	// } else if (typeof module === 'object' && module.exports) {
	// module.exports = md5;
	// } else {
	$.md5 = md5;
	// }
}(this));
(function(name, context, definition) {
	context[name] = definition();
})('Fingerprint', this, function() {
	'use strict';

	var Fingerprint = function(options) {
		var nativeForEach, nativeMap;
		nativeForEach = Array.prototype.forEach;
		nativeMap = Array.prototype.map;

		this.each = function(obj, iterator, context) {
			if (obj === null) {
				return;
			}
			if (nativeForEach && obj.forEach === nativeForEach) {
				obj.forEach(iterator, context);
			} else if (obj.length === +obj.length) {
				for (var i = 0, l = obj.length; i < l; i++) {
					if (iterator.call(context, obj[i], i, obj) === {}) return;
				}
			} else {
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						if (iterator.call(context, obj[key], key, obj) === {}) return;
					}
				}
			}
		};

		this.map = function(obj, iterator, context) {
			var results = [];
			// Not using strict equality so that this acts as a
			// shortcut to checking for `null` and `undefined`.
			if (obj === null) return results;
			if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
			this.each(obj, function(value, index, list) {
				results[results.length] = iterator.call(context, value, index, list);
			});
			return results;
		};

		if (typeof options == 'object') {
			this.hasher = options.hasher;
			this.screen_resolution = options.screen_resolution;
			this.screen_orientation = options.screen_orientation;
			this.canvas = options.canvas;
			this.ie_activex = options.ie_activex;
		} else if (typeof options == 'function') {
			this.hasher = options;
		}
	};

	Fingerprint.prototype = {
		get: function() {
			var keys = [];
			keys.push(navigator.userAgent);
			keys.push(navigator.language);
			keys.push(screen.colorDepth);
			if (this.screen_resolution) {
				var resolution = this.getScreenResolution();
				if (typeof resolution !== 'undefined') { // headless browsers, such as phantomjs
					keys.push(resolution.join('x'));
				}
			}
			keys.push(new Date().getTimezoneOffset());
			keys.push(this.hasSessionStorage());
			keys.push(this.hasLocalStorage());
			keys.push(!!window.indexedDB);
			//body might not be defined at this point or removed programmatically
			if (document.body) {
				keys.push(typeof(document.body.addBehavior));
			} else {
				keys.push(typeof undefined);
			}
			keys.push(typeof(window.openDatabase));
			keys.push(navigator.cpuClass);
			keys.push(navigator.platform);
			keys.push(navigator.doNotTrack);
			keys.push(this.getPluginsString());
			if (this.canvas && this.isCanvasSupported()) {
				keys.push(this.getCanvasFingerprint());
			}
			return keys.join('###');
		},

		// https://bugzilla.mozilla.org/show_bug.cgi?id=781447
		hasLocalStorage: function() {
			try {
				return !!window.localStorage;
			} catch (e) {
				return true; // SecurityError when referencing it means it exists
			}
		},

		hasSessionStorage: function() {
			try {
				return !!window.sessionStorage;
			} catch (e) {
				return true; // SecurityError when referencing it means it exists
			}
		},

		isCanvasSupported: function() {
			var elem = document.createElement('canvas');
			return !!(elem.getContext && elem.getContext('2d'));
		},

		isIE: function() {
			if (navigator.appName === 'Microsoft Internet Explorer') {
				return true;
			} else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { // IE 11
				return true;
			}
			return false;
		},

		getPluginsString: function() {
			if (this.isIE() && this.ie_activex) {
				return this.getIEPluginsString();
			} else {
				return this.getRegularPluginsString();
			}
		},

		getRegularPluginsString: function() {
			return this.map(navigator.plugins, function(p) {
				var mimeTypes = this.map(p, function(mt) {
					return [mt.type, mt.suffixes].join('~');
				}).join(',');
				return [p.name, p.description, mimeTypes].join('::');
			}, this).join(';');
		},

		getIEPluginsString: function() {
			if (window.ActiveXObject) {
				var names = ['ShockwaveFlash.ShockwaveFlash', //flash plugin
					'AcroPDF.PDF', // Adobe PDF reader 7+
					'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
					'QuickTime.QuickTime', // QuickTime
					// 5 versions of real players
					'rmocx.RealPlayer G2 Control',
					'rmocx.RealPlayer G2 Control.1',
					'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
					'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
					'RealPlayer',
					'SWCtl.SWCtl', // ShockWave player
					'WMPlayer.OCX', // Windows media player
					'AgControl.AgControl', // Silverlight
					'Skype.Detection'
				];

				// starting to detect plugins in IE
				return this.map(names, function(name) {
					try {
						new ActiveXObject(name);
						return name;
					} catch (e) {
						return null;
					}
				}).join(';');
			} else {
				return ""; // behavior prior version 0.5.0, not breaking backwards compat.
			}
		},

		getScreenResolution: function() {
			var resolution;
			if (this.screen_orientation) {
				resolution = (screen.height > screen.width) ? [screen.height, screen.width] : [screen.width, screen.height];
			} else {
				resolution = [screen.height, screen.width];
			}
			return resolution;
		},

		getCanvasFingerprint: function() {
			try {
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				var txt = 'thunder network';
				ctx.textBaseline = "top";
				ctx.font = "14px Arial";
				ctx.textBaseline = "alphabetic";
				ctx.fillStyle = "#f60";
				ctx.fillRect(125, 1, 62, 20);
				ctx.fillStyle = "#069";
				ctx.fillText(txt, 2, 15);
				ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
				ctx.fillText(txt, 4, 17);
				return md5(canvas.toDataURL());
			} catch (e) {
				return '';
			}
		}
	};


	return Fingerprint;

});
(function() {
	'use strict';

	// 获取引入脚本的配置
	// 返回当前运行的脚本，currentScript或者前一个，也就是当前xreport.js
    function t() {
        var e = document.currentScript;
        if (!e) {
            var t = document.scripts;
            e = t[t.length - 1]
        }
        return e
    }
	var Fe = {}; // 脚本配置
	var FeConf = t();
	Fe.server = FeConf.getAttribute("server") || '';



	var Config = {
		SERVER: 'https://analysis-acc-ssl.xunlei.com/',
		DOMAIN: 'xunlei.com'
	};
	var Utils = (function() {
		var binders = [],
			self;
		self = {
			uuid: function() {
				var s = [];
				var hexDigits = "0123456789abcdef";
				for (var i = 0; i < 36; i++) {
					s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
				}
				s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
				s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
				s[8] = s[13] = s[18] = s[23] = "-";

				var uuid = s.join("");
				return uuid;
			},
			queryCookie: function(keyword) {
				var cookieArr, cookie = document.cookie, key , kv, ret = new Array();
				cookieArr = cookie.split('; ') ;
				for (var i = 0; i < cookieArr.length; i++) {
					kv = cookieArr[i].split('=');
					key = kv[0];
					if(key.indexOf(keyword)==0){
						ret.push(key);
					}
				}
				return ret;
			},
			getCookie: function(param) {
				var c, cookie = document.cookie,
					t, i, l;
				if (param) {
					c = cookie.match(new RegExp("(^| )" + param + "=([^;]*)")) === null ? void 0 : (RegExp.$2);
					if (c !== void 0) {
						try {
							c = decodeURIComponent(c);
						} catch (e) {
							c = unescape(c);
						}
					}
					return c?c:'';
				} else {
					var obj = {};
					cookie = cookie.split("; ");
					for (i = 0, l = cookie.length; i < l; ++i) {
						t = cookie[i].split("=");
						c = t.pop();
						if (c !== void 0) {
							try {
								c = decodeURIComponent(c);
							} catch (e) {
								c = unescape(c);
							}
						}
						obj[t.shift()] = c;
					}
					return obj;
				}
			},
			setCookie: function(name, value, expire, domain, path, secure) {
				var cookie, expire = expire ? new Date(new Date().getTime() + expire).toGMTString() : false;
				cookie = name + "=" + escape(value);
				cookie += "; path=" + (path ? path : "/");
				if (domain) {
					cookie += "; domain=" + domain;
				}
				if (secure) {
					cookie += "; secure";
				}
				if (expire) {
					cookie += "; expires=" + expire;
				}
				document.cookie = cookie;
			},

			delCookie: function(name, domain, path, secure) {
				var cookie;
				cookie = name + "=";
				cookie += "; path=" + (path ? path : "/");
				if (domain) {
					cookie += "; domain=" + domain;
				}
				if (secure) {
					cookie += "; secure";
				}
				cookie += "; expires=Thu, 01 Jan 1970 00:00:01 GMT";
				document.cookie = cookie;
			},

			bind: function(obj, type, func, scope) {
				if (typeof func !== "function") {
					return;
				}
				if (typeof obj === "string") {
					obj = document.getElementById(obj);
				}
				if (!obj) {
					throw new Error("bind on an undefined target");
				}

				function handler(e) {
					e = e || window.event;
					if (!e.target) {
						e.target = e.srcElement;
						e.preventDefault = function() {
							this.returnValue = false;
						};
						e.stopPropagation = function() {
							this.cancelBubble = true;
						};
					}
					if (false === func.call(scope || this, e)) {
						e.preventDefault();
						e.stopPropagation();
					}
				}
				var true_type = type.split(".").shift();
				binders.push({
					obj: obj,
					handler: handler,
					type: type
				});
				if (obj.attachEvent) {
					obj.attachEvent("on" + true_type, handler);
				} else {
					if (obj.addEventListener) {
						obj.addEventListener(true_type, handler, false);
					}
				}
			},
			unbind: function(obj, type) {
				if (typeof obj === "string") {
					obj = document.getElementById(obj);
				}
				if (!obj) {
					throw new Error("unbind on an undefined target");
				}
				var binder, ts, t1, t2, i;
				for (i = binders.length - 1; i >= 0; i--) {
					binder = binders[i];
					if (binder.obj !== obj) {
						continue;
					}
					ts = binder.type.split(".");
					t1 = ts.shift();
					t2 = ts.length > 0 ? ts.join(".") : false;
					if (binder.type === type || type === t1 || (t2 !== false && t2 === type)) {
						binders.splice(i, 1);
						if (obj.detachEvent) {
							obj.detachEvent("on" + t1, binder.handler);
						} else {
							if (obj.removeEventListener) {
								obj.removeEventListener(t1, binder.handler, false);
							}
						}
					}
				}
			},
			_GET: (function() {
				var qs = (location.search.length > 0 ? location.search.substring(1) : '');
				var args = {};
				var items = qs.length ? qs.split('&') : [];
				var item = null;
				var name = null;
				var val = null;
				var i = 0;
				var len = items.length;

				for (i = 0; i < len; ++i) {
					item = items[i].split('=');
					name = decodeURIComponent(item[0]);
					val = decodeURIComponent(item[1]);

					if (name.length) {
						args[name] = val;
					}
				}
				return args;
			})(),
			randString: function(length, max) {
				var random_string_chars = "abcdefghijklmnopqrstuvwxyz0123456789",
					len = random_string_chars.length;
				max = max ? Math.min(max, len) : len;
				var i, ret = [];
				for (i = 0; i < length; i++) {
					ret.push(random_string_chars.charAt(Math.floor(Math.random() * max)));
				}
				return ret.join("");
			},
			ajax: function(url, method, async, params, callback) {
				params = params || null;
				async = async || true;
				method = method || 'post';
				/**
				 * 得到ajax对象
				 */
				function _getAjaxHttp() {
					var xmlHttp;
					try {
						// Firefox, Opera 8.0+, Safari
						xmlHttp = new XMLHttpRequest();
					} catch (e) {
						// Internet Explorer
						try {
							xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
						} catch (e) {
							xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
						}
					}
					return xmlHttp;
				}
				var xmlhttp = _getAjaxHttp();
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4) {
						if (xmlhttp.status == 200) {
							var data = decodeURI(xmlhttp.responseText);
							callback && callback(data);
						}
					}
				};
				xmlhttp.open(method, url, async);
				xmlhttp.send(params);
			},
			imageRequest: function(url, data, cb) {
				if (!url || !data) {
					return;
				}
				// 自定义上传的服务器
				if(!data.server || data.server == '') {
					data.server = Fe.server;
				}
				url += data.server;
				delete data['server'];
				// 自定义上传app的flowid
				if(!!data.flowID) {
					data.flowid = data.flowID;
					delete data['flowID'];
				}
				// @see http://blog.csdn.net/fudesign2008/article/details/6772108 防止浏览器回收对象
				var n = 'xreport_log_'+(+new Date()) + Math.floor(Math.random()*1000);
				// @see http://jsperf.com/new-image-vs-createelement-img
				var image = window[n] = document.createElement('img');
				var items = [];
				for (var key in data) {
					if (data[key]) {
						items.push(key + '=' + encodeURIComponent(data[key]));
					}
				}
				image.onload = image.onerror = function () {
					window[n] = image = image.onload = image.onerror = null;
					cb && cb();
				};
				image.src = url + (url.indexOf('?') < 0 ? '?' : '&') + items.join('&');
			},
			reportHelper : function(url, data, retry) {
				if(retry && retry === true){
					retry = 1;
					var requestId = (+new Date()) + Math.floor(Math.random()*1000) + '-' + retry;
				}
				if(!requestId){
					requestId = data['reqid'].split('-');
					requestId = requestId[0] + '-' + retry;
				}
				data['reqid'] = requestId;
				if(retry>1){
					var sid = setTimeout(function(){
						clearTimeout(sid);
						_report();
					},600);
				}else{
					_report();
				}
				function _report(){
					self.imageRequest(url, data, function(){
						// var result = self.getCookie('r_s_'+requestId);
						// self.delCookie('r_s_'+requestId,"xunlei.com");
						// if(!result && retry && retry < 3){
						// 	self.reportHelper(url, data, ++retry);
						// }
					});
				}
			},
			iframeRequest: function(method, url, data, cb, timeout) {
				if (!method || !url) {
					throw new Error("loginRequest can't accept empty method and url as param");
				}
				var k, iframe, id, area, form, params = [],
					hash = "",
					sid;
				method = method.toUpperCase();
				form = document.createElement("form");
				form.style.display = "none";
				form.style.position = "absolute";
				form.method = method;
				form.enctype = "application/x-www-form-urlencoded";
				form.acceptCharset = "UTF-8";
				data = data || {};
				data.cachetime = new Date().getTime();
				if (method === "_GET") {
					for (k in data) {
						params.push(k + "=" + data[k])
					}
					if (url.indexOf("#") > 0) {
						hash = "#" + url.split("#").pop();
						url = url.split("#").shift()
					}
					url += (url.indexOf("?") >= 0 ? "&" : "?") + params.join("&") + hash
				} else {
					for (k in data) {
						area = document.createElement("textarea");
						area.name = k;
						area.value = data[k];
						form.appendChild(area)
					}
				}
				document.body.appendChild(form);
				id = "f" + this.randString(8);
				form.target = id;
				try{
					form.action = url;
				} catch(e) {
					form.setAttribute('action',url);
				}
				try {
					iframe = document.createElement('<iframe name="' + id + '">');
				} catch (x) {
					iframe = document.createElement("iframe");
					iframe.name = id;
				}
				iframe.id = id;
				iframe.style.display = "none";
				form.appendChild(iframe);

				function completed(e) {
					if (!iframe.onerror) {
						return;
					}
					iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
					setTimeout(function() {
						iframe = null;
						form = null;
					}, 500);
					sid && clearTimeout(sid);
					e = typeof e === "string" ? e : void 0;
					(typeof cb === "function") && cb(e);
				}
				if (timeout > 0) {
					sid = setTimeout(function() {
						completed("TIMEOUT");
					}, timeout);
				}
				iframe.onerror = iframe.onload = completed;
				iframe.onreadystatechange = function(e) {
					if (iframe.readyState == "complete") {
						completed();
					}
				};
				if (method === "_GET") {
					iframe.src = url;
				} else {
					try {
						form.submit();
					} catch (e) {
						var k, s = "";
						for (k in e) {
							s += k + ":" + e[k] + ";";
						}
						alert(s);
					}
				}
			}

		};
		return self;
	})();
	var startTime = new Date().getTime();
	var inited = false;
	var isIE6 = !!(("ActiveXObject" in window) && !("XMLHttpRequest" in window));
	/*<ie>*/
    var ie = window.attachEvent && !window.opera;
    var closing,clickJsLinkTime;
    /*<ie>*/
    if (ie) {
        Utils.bind(document, 'mouseup', function (e) {
            var target = e.target || e.srcElement;
            if (target.nodeType === 1 && /^ajavascript:/i.test(target.tagName + target.href)) {
                clickJsLinkTime = new Date();
            }
        });
    }
	var XReport = {
		clearCookie: function(){
			var needClear = Utils.queryCookie('r_s_');
			for(var i=0;i<needClear.length;i++){
				Utils.delCookie(needClear[i],'xunlei.com');
			}
		},
		init: function(opts) {
			var k, elements, allowOpts = {
				'elements': 1,
				'default': 1,
				'global': 1
			};
			if (typeof opts !== "object") {
				return;
			}
			for (k in opts) {
				if (!opts.hasOwnProperty(k))
					continue;
				if (k in allowOpts) {
					Config[k] = opts[k];
				}
			}
			if (!opts.hasOwnProperty('elements')) {
				return;
			}
			elements = Config['elements'];
			for (k in elements) {
				XReport.reportByElement(elements[k]);
			}
		},
		push: function(params) {
			if (params.type == 'conf') {
				XReport.init(params);
			} else if (params.type == 'event') {
				XReport.pushEvent(params);
			} else if (params.type == 'now') {
				XReport.pushNow(params);
			}
		},
		getFinalData : function(data) {
			var defParams = Config['default'] || {},
				globalParams = Config['global'] || {};
			defParams = XReport.getDefParams(defParams);
			data = Object.assign(defParams, globalParams, data);
			data = XReport.formatData(data);
			return data;
		},
		bindReport: function(element, eventType, data) {
			if (typeof element === 'string')
				element = document.getElementById(element);
			if (!element)
				throw new Error("配置有误,请参阅相关文档");
			data = XReport.getFinalData(data);
			if(element === window && eventType === 'load'){
				XReport.report(data);
				return ;
			}
			XReport.bindElements(element, eventType, data);
		},
		nowReport: function(data){
			data = XReport.getFinalData(data);
			XReport.report(data);
			return ;
		},
		pushEvent: function(params) {
			var i, requireOption = ['element', 'event', 'data'];
			for (i in requireOption) {
				if (requireOption.hasOwnProperty(i) && !(requireOption[i] in params)) {
					throw new Error("配置有误,请参阅相关文档"+i);
				}
			}
			XReport.bindReport(params['element'], params['event'], params['data']);
		},
		pushNow: function(params) {
			var i, requireOption = ['data'];
			for (i in requireOption) {
				if (requireOption.hasOwnProperty(i) && !(requireOption[i] in params)) {
					throw new Error("配置有误,请参阅相关文档"+i);
				}
			}
			XReport.nowReport(params['data']);
		},
		reportByElement: function(element) {
			var k, attrObj, eventType, data = {};
			if (typeof element === 'string')
				element = document.getElementById(element);
			if (!element)
				return;
			for (k in element.attributes) {
				if (typeof(element.attributes[k]) == 'object' && element.attributes[k].name.indexOf('xr-') === 0) {
					eventType = element.attributes[k].name.replace(/xr-/g, '');
					attrObj = eval("(" + element.attributes[k].value + ")");
					if (typeof(attrObj) !== 'object') {
						throw new Error("元素属性配置有误,请参阅相关文档");
					}
					XReport.bindReport(element, eventType, attrObj);
				}
			}
		},
		getDefParams: function(defParams) {
			var _defParams = {},
				k;
			for (k in defParams) {
				if (k === 'cookie')
					_defParams = XReport.getDefaultByCookie(defParams[k]);
				else if (k === 'query')
					_defParams = XReport.getDefaultByQuery(defParams[k]);
				else
					throw new Error("默认属性配置有误,请参阅相关文档"+k);
			}
			return _defParams;
		},
		formatData: function(data) {
			var globalParamNames = {
					'category': 1,
					'action': 1,
					'bussiness': 1,
					'server': '',
					'flowID': ''
				},
				key, retData = {};
			for (key in data) {
				if (!data.hasOwnProperty(key))
					continue;
				if (key in globalParamNames) {
					retData[key] = data[key];
					delete data[key];
				}
			}
			retData['extdata'] = JSON.stringify(data);
			return retData;
		},
		getDefaultByCookie: function(params) {
			var ret = {},
				i;
			for (i = 0; i < params.length; i++) {
				ret[params[i]] = Utils.getCookie(params[i]);
			}
			return ret;
		},
		getDefaultByQuery: function(params) {
			var ret = {},
				get = Utils._GET,
				i;
			for (i = 0; i < params.length; i++) {
				if (get.hasOwnProperty(params[i]))
					ret[params[i]] = get[params[i]];
			}
			return ret;
		},
		bindElements: function(element, type, data) {
			Utils.bind(element, type, function() {
				XReport.report(data);
			});
		},
		generateFlowId: function() {
			var flowid = Utils.uuid();
			Utils.setCookie('flowid', flowid, false, Config.DOMAIN);
			return flowid;
		},
		report: function(data) {
			var fp_raw = new Fingerprint({
				screen_resolution: true,
				canvas: true,
				ie_activex: true
			}).get();
			var fp = md5(fp_raw);
			var flowid = Utils.getCookie('flowid');
			data['createtime'] = new Date().getTime();
			data['flowid'] = flowid ? flowid : XReport.generateFlowId();
			data['fingerprint'] = fp;
			Utils.reportHelper(Config.SERVER, data, true);
		}
	};
	
	/*clear cookie*/
	XReport.clearCookie();

	var _xreport = {
		push: XReport.push
	};
	function unloadHandle(){
		/*<ie>*/
        // @see http://msdn.microsoft.com/en-us/library/ms536907(VS.85).aspx
        // Click an anchor that refers to another document.
        // 修复 IE 中点击 `<a href="javascript:">...</a>` 也会触发 beforeunload 事件的问题
        if (ie && (new Date() - clickJsLinkTime < 50)) {
            return;
        }
        if (closing) {
            return;
        }
		closing = true;
		var stayTime = new Date().getTime()- startTime;
		stayTime = stayTime/1000;
		XReport.pushNow({
			'data': {
				'category':'page_close',
				'action'  :'page_close_succ',
				'stayTime':stayTime,
				'pageUrl' : location.href,
				'pageUa' : navigator.userAgent
			}
		});
	}
	Utils.bind(window,'beforeunload',unloadHandle);
	Utils.bind(window,'unload',unloadHandle);


	// 前端bugs自动上报逻辑 start
	// 参考了 fundebug [https://docs.fundebug.com/notifier/javascript/]
	// Fe参数配置
	// Fe.febug: 设置为true即开启前端错误上报
	// Fe.silentResource: 设置为true即不上报资源加载错误
	// Fe.silentHttp: 设置为true即不上报HTTP请求错误
	// Fe.maxEventNumber: 设置当次页面可以上报错误的总次数，默认为10，超出不上报
	// Fe.filters: 过滤掉一些不需要捕获的错误
	// Fe方法
	// Fe.notify, Fe.notifyError, Fe.notifyHttpError
	// Fe对象合并到window.Xreport
	var w = !1;
	Fe.febug = FeConf.getAttribute("febug") || !1,
	Fe.maxEventNumber = FeConf.getAttribute("maxEventNumber") || 10,
	Fe.silentResource = FeConf.getAttribute("silentResource") || !1,
	Fe.silentHttp = FeConf.getAttribute("silentHttp") || !1,
	Fe.silentConsole = FeConf.getAttribute("silentConsole") || !1;

	// 用函数r更改对象e的属性t，用于改写处理window.onerror
    function feR(e, t, r) {
        var n = e[t];
        e[t] = r(n)
    }

	function feN(e) {
        return "function" != typeof e ? e : (e.__injected__ || (e.__injected__ = function () {
            try {
                return e.apply(this, arguments)
            } catch (e) {
                throw s(e), w = !0, e
            }
        }), e.__injected__)
    }
	function feIsReq(t) {
        if (!t) return null;
        var r = {};
        return window.XMLHttpRequest ? r = {
            name: t.name,
            message: t.message,
            fileName: t.fileName || t.sourceURL,
            lineNumber: t.lineNumber || t.line,
            columnNumber: t.columnNumber || t.column
        } : r.message = t.message, r
    }
	function feStack() {
        var e;
        try {
            throw new Error("")
        } catch (t) {
            e = t.stack
        }
        if (e) return e = e.replace(/(.*?)bugs(.*?)\.js(.*)\n?/gm, ""), e = e.replace(/^Error\n/g, ""), e = "generated-stack:\n" + e
    }
	function feU() {
        for (var e, t = [], r = arguments.callee.caller.caller; r && t.length < 10;) {
            var n = r.toString().match(/function\s*([\w\_$]+)?\s*\(/i);
            e = n && n[1] || "[anonymous]", t.push(e), r = r.caller
        }
        return "generated-stack:\n" + t.join("\n")
    }
	// 加载出错的资源
    function feLoad(t) {
        if (!Fe.silentResource && !t.message) {
            var r;
            r = t.target ? t.target : t.srcElement;
            var n = r && r.outerHTML;
            n && n.length > 200 && (n = n.slice(0, 200));
            var a = {
                type: "resourceError",
                target: {
                    outerHTML: n,
                    src: r && r.src,
                    tagName: r && r.tagName,
                    id: r && r.id,
                    className: r && r.className,
                    name: r && r.name,
                    type: r && r.type,
                    XPath: feNode(r),
                    selector: feTag(r),
                    timeStamp: t.timeStamp
                }
            };
            if (r.src !== window.location.href && (!r.src || !r.src.match(/.*\/(.*)$/) || r.src.match(/.*\/(.*)$/)[1]) && a.target.src && window.XMLHttpRequest) {
                var i = new XMLHttpRequest;
                i.Fundebug = !0, i.open("HEAD", a.target.src), i.send(), i.onload = function (e) {
                    200 !== e.target.status && (a.target.status = e.target.status, a.target.statusText = e.target.statusText), _FeReport(a)
                }
            }
        }
    }
	// 事件出错的元素节点
    function feNode(e) {
        for (var t = []; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
            var r, n = 0,
                a = !1;
            for (r = e.previousSibling; r; r = r.previousSibling) r.nodeType != Node.DOCUMENT_TYPE_NODE && r.nodeName == e.nodeName && ++n;
            for (r = e.nextSibling; r && !a; r = r.nextSibling) r.nodeName == e.nodeName && (a = !0);
            var i = (e.prefix ? e.prefix + ":" : "") + e.localName,
                o = n || a ? "[" + (n + 1) + "]" : "";
            t.splice(0, 0, i + o)
        }
        return t.length ? "/" + t.join("/") : null
    }
	// 处理节点
    function feTag(e) {
        for (var t = []; e.parentNode;) {
            if (e.id) {
                t.unshift("#" + e.id);
                break
            }
            if (e == e.ownerDocument.documentElement) t.unshift(e.tagName);
            else {
                for (var r = 1, n = e; n.previousElementSibling; n = n.previousElementSibling, r++);
                t.unshift(e.tagName + ":nth-child(" + r + ")")
            }
            e = e.parentNode
        }
        return t.join(" > ")
    }
	function feFe(e) {
        FEs.push(e), FEs.length > 20 && FEs.shift()
    }
	// 点击事件的问题
    function fePo(t) {
        var r;
        r = t.target ? t.target : t.srcElement;
        var n = r && r.outerHTML;
        n && n.length > 200 && (n = n.slice(0, 200)), feFe({
            type: "click",
            page: {
                url: window.location.href,
                title: document.title
            },
            detail: {
                outerHTML: n,
                tagName: r && r.tagName,
                id: r && r.id,
                className: r && r.className,
                name: r && r.name
            },
            time: (new Date).getTime()
        })
	}
	function feNav(e, t) {
        FEhref = t;
        var r = {
            type: "navigation",
            detail: {
                from: e,
                to: t
            },
            time: (new Date).getTime()
        };
        feFe(r)
	}
	// function feCons(t) {
    //     var r = console[t];
    //     console[t] = function () {
    //         var n = {
    //             type: "console",
    //             page: {
    //                 url: window.location.href,
    //                 title: document.title
    //             },
    //             detail: {
    //                 level: t,
    //                 arguments: Array.prototype.slice.apply(arguments).join(" ")
    //             },
    //             time: (new Date).getTime()
    //         };
    //         if (Fe.silentConsole || feFe(n), "function" == typeof r)
    //             if (r.apply) r.apply(console, arguments);
    //             else {
    //                 var a = Array.prototype.slice.apply(arguments).join(" ");
    //                 feR(a)
    //             }
    //     }
    // }
	function feVer(e) {
        return !Fe.silentHttp && ((0 !== e.detail.status || !/^file:\/\/\//.test(e.detail.url)) && 2 !== parseInt(e.detail.status / 100))
    }
	// 脚本的配置 FeConf, 用户配置 Fe, t为错误信息
    function _FeReport(t) {
        if (Fe.maxEventNumber && Fe.febug) {
			Fe.maxEventNumber -= 1;
            var r = {
                // userAgent: window.navigator.userAgent,
                // locale: window.navigator.language || window.navigator.userLanguage,
                // url: window.location.href,
                // title: document.title,
                metaData: t.metaData || Fe.metaData,
                user: t.user || Fe.user,
                name: t.name,
                // time: (new Date).getTime(),
                message: t.message,
                fileName: t.fileName,
                lineNumber: t.lineNumber,
                columnNumber: t.columnNumber,
				stacktrace: t.stacktrace,
				clientVersion: localStorage.getItem('clientVersion') || 'unknown',
                type: t.type,
                severity: t.severity,
                target: t.target,
                req: t.req,
                res: t.res,
                breadcrumbs: FEs
			};
            r.userAgent && r.userAgent.match(/Googlebot/) || feFilt(r) || FeReport(r)
        }
    }
	// 过滤掉一些不需要捕获的错误
    function feFilt(e) {
        var t = Fe.filters;
        if (!t || !t.length) return !1;
        for (var r = 0; r < t.length; r++)
            if (feBord(e, t[r])) return !0;
        return !1
	}
	function feBord(e, t) {
        if (!e) return !1;
        if (Object.keys && !Object.keys(t).length) return !1;
        for (var r in t)
            if (t.hasOwnProperty(r))
                if (t[r].constructor === RegExp) {
                    if (!t[r].test(e[r])) return !1
                } else {
                    if (t[r].constructor !== Object) return !1;
                    if (!feBord(e[r], t[r])) return !1
                }
        return !0
	}
	// 改写为XReport来上报
    function FeReport(t) {
		var _data = Object.assign(t, {'action': 'bug', 'category': 'xdas_bugs'});
        if (t) {
			XReport.nowReport(_data)
        }
	}
	// 处理window.onerror
	feR(window, "onerror", function () {
        return function (t, r, n, a, o) {
            if (w) return void(w = !1);
            void 0 === a && window.event && (a = window.event.errorCharacter);
            var s;
            s = r && r !== window.location.href ? r : null;
			var l = feIsReq(o);
            return _FeReport({
                message: t,
                lineNumber: n,
                columnNumber: a,
                fileName: s || l && l.fileName,
                name: l && l.name || "uncaught error",
                stacktrace: o && o.stack || feU(),
                severity: "error",
                type: "uncaught"
            }), !1
        }
    });
    var H = !0;
    if (window.atob) {
        if (window.ErrorEvent) try {
            window.ErrorEvent.prototype.hasOwnProperty("error") && (H = !1)
        } catch (e) {}
    } else H = !1;
	// 监听改写原生事件
    "EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g, function (t) {
        if (H) {
            var a = window[t] && window[t].prototype;
            a && a.hasOwnProperty && a.hasOwnProperty("addEventListener") && (feR(a, "addEventListener", function (e) {
                return function (t, r, a, i) {
                    return r && r.handleEvent && (r.handleEvent = feN(r.handleEvent)), e.call(this, t, feN(r), a, i)
                }
            }), feR(a, "removeEventListener", function (e) {
                return function (t, r, a) {
                    return e.call(this, t, r, a), e.call(this, t, feN(r), a)
                }
            }))
        }
    }), Fe.notify = function (e, t, r) {
        if (e) {
            var n = {
                    name: e || r && r.name,
                    message: t || r && r.message,
                    severity: r && r.message || "warning",
                    stacktrace: feStack(),
                    type: "notification",
                    user: r && r.user,
                    metaData: r && r.metaData
                };
            return _FeReport(n)
        }
    }, Fe.notifyError = function (t, r) {
        if (t) {
            // window.console && console.error(t);
            var n = feIsReq(t);
            _FeReport({
                name: n.name || r && r.name || "caught error",
                message: n.message || r && r.message,
                stacktrace: t.stack,
                fileName: n.fileName,
                lineNumber: n.lineNumber,
                columnNumber: n.columnNumber,
                severity: r && r.severity || "error",
                type: "caught",
                user: r && r.user,
                metaData: r && r.metaData
            })
        }
    }, Fe.notifyHttpError = function (e, t, r) {
        _FeReport({
            type: "httpError",
            req: e,
            res: t,
            user: r && r.user,
            metaData: r && r.metaData
        })
    }, window.addEventListener && window.addEventListener("unhandledrejection", function (e) {
        Fe.notifyError(e.reason)
    }), window.addEventListener && window.addEventListener("error", feLoad, !0);
    var FEs = [];
	window.addEventListener ? window.addEventListener("click", fePo, !0) : document.attachEvent("onclick", fePo);
    var FEhref = {
        url: window.location.href
    };
    document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
        FEhref = {
            url: window.location.href,
            title: document.title
        }
    }) : document.attachEvent("onreadystatechange", function () {
        FEhref = {
            url: window.location.href,
            title: document.title
        }
    });
	var FEreload = window.onpopstate;
    window.onpopstate = function () {
        var t = {
            url: window.location.href
        };
        if (FEhref.title || (FEhref.title = document.title), FEhref.url !== t.url && feNav(FEhref, t), FEreload) return FEreload.apply(this, arguments)
    };
    var FEhistory = window.history.pushState;
    FEhistory && (window.history.pushState = function () {
        FEhref = {
            url: window.location.href,
            title: document.title
        };
        var t = {};
        if (3 === arguments.length && (t.url = arguments[2]), FEhref.url !== t.url && feNav(FEhref, t), FEhistory) return FEhistory.apply(this, arguments)
    });
    var FEhash = window.onhashchange;
    window.onhashchange, window.onhashchange = function () {
        var t = {
            url: window.location.href,
            title: document.title
        };
        if (FEhref.url !== t.url && feNav(FEhref, t), FEhash) return FEhash.apply(this, arguments)
    };
    // for (var j = ["log", "warn", "error", "debug", "info"], q = 0; q < j.length; q++) window.console && feCons(j[q]);
	// 前端bugs自动上报逻辑 end


	if (window.Xreport instanceof Array) {
		for (var i = 0; i < window.Xreport.length; i++) {
			_xreport.push(window.Xreport[i]);
		}
	}
	_xreport = Object.assign({}, _xreport, Fe);
	window.Xreport = _xreport;
})();