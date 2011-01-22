// ThreeExtras.js r32 - http://github.com/mrdoob/three.js
/**
 * @author mr.doob / http://mrdoob.com/
 */

var THREE = THREE || {};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Color = function ( hex ) {

	this.autoUpdate = true;
	this.setHex( hex );

};

THREE.Color.prototype = {

	setRGB: function ( r, g, b ) {

		this.r = r;
		this.g = g;
		this.b = b;

		if ( this.autoUpdate ) {

			this.updateHex();
			this.updateStyleString();

		}

	},

	setHex: function ( hex ) {

		this.hex = ( ~~ hex ) & 0xffffff;

		if ( this.autoUpdate ) {

			this.updateRGBA();
			this.updateStyleString();

		}

	},

	updateHex: function () {

		this.hex = ~~( this.r * 255 ) << 16 ^ ~~( this.g * 255 ) << 8 ^ ~~( this.b * 255 );

	},

	updateRGBA: function () {

		this.r = ( this.hex >> 16 & 255 ) / 255;
		this.g = ( this.hex >> 8 & 255 ) / 255;
		this.b = ( this.hex & 255 ) / 255;

	},

	updateStyleString: function () {

		this.__styleString = 'rgb(' + ~~( this.r * 255 ) + ',' + ~~( this.g * 255 ) + ',' + ~~( this.b * 255 ) + ')';

	},

	clone: function () {

		return new THREE.Color( this.hex );

	},


	toString: function () {

		return 'THREE.Color ( r: ' + this.r + ', g: ' + this.g + ', b: ' + this.b + ', hex: ' + this.hex + ' )';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 * @author philogb / http://blog.thejit.org/
 */

THREE.Vector2 = function ( x, y ) {

	this.x = x || 0;
	this.y = y || 0;

};

THREE.Vector2.prototype = {

	set: function ( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	},

	copy: function ( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	},

	addSelf: function ( v ) {

		this.x += v.x;
		this.y += v.y;

		return this;

	},

	add: function ( v1, v2 ) {

		this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;

		return this;

	},

	subSelf: function ( v ) {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	},

	sub: function ( v1, v2 ) {

		this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;

		return this;

	},

	multiplyScalar: function ( s ) {

		this.x *= s;
		this.y *= s;

		return this;

	},

	unit: function () {

		this.multiplyScalar( 1 / this.length() );

		return this;

	},

	length: function () {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	},

	lengthSq: function () {

		return this.x * this.x + this.y * this.y;

	},

	negate: function() {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	},

	clone: function () {

		return new THREE.Vector2( this.x, this.y );

	},

	toString: function () {

		return 'THREE.Vector2 (' + this.x + ', ' + this.y + ')';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 */

THREE.Vector3 = function ( x, y, z ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;

};

THREE.Vector3.prototype = {

	set: function ( x, y, z ) {

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	},

	copy: function ( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	},

	add: function ( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	},

	addSelf: function ( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	},

	addScalar: function ( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	},

	sub: function( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	},

	subSelf: function ( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	},

	cross: function ( a, b ) {

		this.x = a.y * b.z - a.z * b.y;
		this.y = a.z * b.x - a.x * b.z;
		this.z = a.x * b.y - a.y * b.x;

		return this;

	},

	crossSelf: function ( v ) {

		var tx = this.x, ty = this.y, tz = this.z;

		this.x = ty * v.z - tz * v.y;
		this.y = tz * v.x - tx * v.z;
		this.z = tx * v.y - ty * v.x;

		return this;

	},

	multiply: function ( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	},

	multiplySelf: function ( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	},

	multiplyScalar: function ( s ) {

		this.x *= s;
		this.y *= s;
		this.z *= s;

		return this;

	},

	divideSelf: function ( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	},

	divideScalar: function ( s ) {

		this.x /= s;
		this.y /= s;
		this.z /= s;

		return this;

	},

	dot: function ( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	},

	distanceTo: function ( v ) {

		var dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
		return Math.sqrt( dx * dx + dy * dy + dz * dz );

	},

	distanceToSquared: function ( v ) {

		var dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
		return dx * dx + dy * dy + dz * dz;

	},

	length: function () {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	},

	lengthSq: function () {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	},

	negate: function () {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	},

	normalize: function () {

		var length = Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

		length > 0 ? this.multiplyScalar( 1 / length ) : this.set( 0, 0, 0 );

		return this;

	},

	setLength: function( len ) {

		return this.normalize().multiplyScalar( len );

	},

	isZero: function () {

		var almostZero = 0.0001;
		return ( Math.abs( this.x ) < almostZero ) && ( Math.abs( this.y ) < almostZero ) && ( Math.abs( this.z ) < almostZero );

	},

	clone: function () {

		return new THREE.Vector3( this.x, this.y, this.z );

	},

	toString: function () {

		return 'THREE.Vector3 ( ' + this.x + ', ' + this.y + ', ' + this.z + ' )';

	}

};
/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 */

THREE.Vector4 = function ( x, y, z, w ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = w || 1;

};

THREE.Vector4.prototype = {

	set: function ( x, y, z, w ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		return this;

	},

	copy: function ( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = v.w || 1.0;

		return this;

	},

	add: function ( v1, v2 ) {

		this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;
		this.z = v1.z + v2.z;
		this.w = v1.w + v2.w;

		return this;

	},

	addSelf: function ( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;

		return this;

	},

	sub: function ( v1, v2 ) {

		this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;
		this.z = v1.z - v2.z;
		this.w = v1.w - v2.w;

		return this;

	},

	subSelf: function ( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;

		return this;

	},

	multiplyScalar: function ( s ) {

		this.x *= s;
		this.y *= s;
		this.z *= s;
		this.w *= s;

		return this;

	},

	divideScalar: function ( s ) {

		this.x /= s;
		this.y /= s;
		this.z /= s;
		this.w /= s;

		return this;

	},

	lerpSelf: function ( v, alpha ) {

		this.x = this.x + (v.x - this.x) * alpha;
		this.y = this.y + (v.y - this.y) * alpha;
		this.z = this.z + (v.z - this.z) * alpha;
		this.w = this.w + (v.w - this.w) * alpha;
	},

	clone: function () {

		return new THREE.Vector4( this.x, this.y, this.z, this.w );

	},

	toString: function () {

		return 'THREE.Vector4 (' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Ray = function ( origin, direction ) {

	this.origin = origin || new THREE.Vector3();
	this.direction = direction || new THREE.Vector3();

}

THREE.Ray.prototype = {

	intersectScene: function ( scene ) {

		var i, l, object,
		objects = scene.objects,
		intersects = [];

		for ( i = 0, l = objects.length; i < l; i++ ) {

			object = objects[i];

			if ( object instanceof THREE.Mesh ) {

				intersects = intersects.concat( this.intersectObject( object ) );

			}

		}

		intersects.sort( function ( a, b ) { return a.distance - b.distance; } );

		return intersects;

	},

	intersectObject: function ( object ) {

		var f, fl, face, a, b, c, d, normal,
		dot, scalar,
		origin, direction,
		geometry = object.geometry,
		vertices = geometry.vertices,
		intersect, intersects = [],
		intersectPoint;

		for ( f = 0, fl = geometry.faces.length; f < fl; f ++ ) {

			face = geometry.faces[ f ];

			origin = this.origin.clone();
			direction = this.direction.clone();

			a = object.matrix.multiplyVector3( vertices[ face.a ].position.clone() );
			b = object.matrix.multiplyVector3( vertices[ face.b ].position.clone() );
			c = object.matrix.multiplyVector3( vertices[ face.c ].position.clone() );
			d = face instanceof THREE.Face4 ? object.matrix.multiplyVector3( vertices[ face.d ].position.clone() ) : null;

			normal = object.rotationMatrix.multiplyVector3( face.normal.clone() );
			dot = direction.dot( normal );

			if ( dot < 0 ) { // Math.abs( dot ) > 0.0001

				scalar = normal.dot( new THREE.Vector3().sub( a, origin ) ) / dot;
				intersectPoint = origin.addSelf( direction.multiplyScalar( scalar ) );

				if ( face instanceof THREE.Face3 ) {

					if ( pointInFace3( intersectPoint, a, b, c ) ) {

						intersect = {

							distance: this.origin.distanceTo( intersectPoint ),
							point: intersectPoint,
							face: face,
							object: object

						};

						intersects.push( intersect );

					}

				} else if ( face instanceof THREE.Face4 ) {

					if ( pointInFace3( intersectPoint, a, b, d ) || pointInFace3( intersectPoint, b, c, d ) ) {

						intersect = {

							distance: this.origin.distanceTo( intersectPoint ),
							point: intersectPoint,
							face: face,
							object: object

						};

						intersects.push( intersect );

					}

				}

			}

		}

		return intersects;

		// http://www.blackpawn.com/texts/pointinpoly/default.html

		function pointInFace3( p, a, b, c ) {

			var v0 = c.clone().subSelf( a ), v1 = b.clone().subSelf( a ), v2 = p.clone().subSelf( a ),
			dot00 = v0.dot( v0 ), dot01 = v0.dot( v1 ), dot02 = v0.dot( v2 ), dot11 = v1.dot( v1 ), dot12 = v1.dot( v2 ),

			invDenom = 1 / ( dot00 * dot11 - dot01 * dot01 ),
			u = ( dot11 * dot02 - dot01 * dot12 ) * invDenom,
			v = ( dot00 * dot12 - dot01 * dot02 ) * invDenom;

			return ( u > 0 ) && ( v > 0 ) && ( u + v < 1 );

		}

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Rectangle = function () {

	var _left, _top, _right, _bottom,
	_width, _height, _isEmpty = true;

	function resize() {

		_width = _right - _left;
		_height = _bottom - _top;

	}

	this.getX = function () {

		return _left;

	};

	this.getY = function () {

		return _top;

	};

	this.getWidth = function () {

		return _width;

	};

	this.getHeight = function () {

		return _height;

	};

	this.getLeft = function() {

		return _left;

	};

	this.getTop = function() {

		return _top;

	};

	this.getRight = function() {

		return _right;

	};

	this.getBottom = function() {

		return _bottom;

	};

	this.set = function ( left, top, right, bottom ) {

		_isEmpty = false;

		_left = left; _top = top;
		_right = right; _bottom = bottom;

		resize();

	};

	this.addPoint = function ( x, y ) {

		if ( _isEmpty ) {

			_isEmpty = false;
			_left = x; _top = y;
			_right = x; _bottom = y;

			resize();

		} else {

			_left = _left < x ? _left : x; // Math.min( _left, x );
			_top = _top < y ? _top : y; // Math.min( _top, y );
			_right = _right > x ? _right : x; // Math.max( _right, x );
			_bottom = _bottom > y ? _bottom : y; // Math.max( _bottom, y );

			resize();
		}

	};

	this.add3Points = function ( x1, y1, x2, y2, x3, y3 ) {

		if (_isEmpty) {

			_isEmpty = false;
			_left = x1 < x2 ? ( x1 < x3 ? x1 : x3 ) : ( x2 < x3 ? x2 : x3 );
			_top = y1 < y2 ? ( y1 < y3 ? y1 : y3 ) : ( y2 < y3 ? y2 : y3 );
			_right = x1 > x2 ? ( x1 > x3 ? x1 : x3 ) : ( x2 > x3 ? x2 : x3 );
			_bottom = y1 > y2 ? ( y1 > y3 ? y1 : y3 ) : ( y2 > y3 ? y2 : y3 );

			resize();

		} else {

			_left = x1 < x2 ? ( x1 < x3 ? ( x1 < _left ? x1 : _left ) : ( x3 < _left ? x3 : _left ) ) : ( x2 < x3 ? ( x2 < _left ? x2 : _left ) : ( x3 < _left ? x3 : _left ) );
			_top = y1 < y2 ? ( y1 < y3 ? ( y1 < _top ? y1 : _top ) : ( y3 < _top ? y3 : _top ) ) : ( y2 < y3 ? ( y2 < _top ? y2 : _top ) : ( y3 < _top ? y3 : _top ) );
			_right = x1 > x2 ? ( x1 > x3 ? ( x1 > _right ? x1 : _right ) : ( x3 > _right ? x3 : _right ) ) : ( x2 > x3 ? ( x2 > _right ? x2 : _right ) : ( x3 > _right ? x3 : _right ) );
			_bottom = y1 > y2 ? ( y1 > y3 ? ( y1 > _bottom ? y1 : _bottom ) : ( y3 > _bottom ? y3 : _bottom ) ) : ( y2 > y3 ? ( y2 > _bottom ? y2 : _bottom ) : ( y3 > _bottom ? y3 : _bottom ) );

			resize();

		};

	};

	this.addRectangle = function ( r ) {

		if ( _isEmpty ) {

			_isEmpty = false;
			_left = r.getLeft(); _top = r.getTop();
			_right = r.getRight(); _bottom = r.getBottom();

			resize();

		} else {

			_left = _left < r.getLeft() ? _left : r.getLeft(); // Math.min(_left, r.getLeft() );
			_top = _top < r.getTop() ? _top : r.getTop(); // Math.min(_top, r.getTop() );
			_right = _right > r.getRight() ? _right : r.getRight(); // Math.max(_right, r.getRight() );
			_bottom = _bottom > r.getBottom() ? _bottom : r.getBottom(); // Math.max(_bottom, r.getBottom() );

			resize();

		}

	};

	this.inflate = function ( v ) {

		_left -= v; _top -= v;
		_right += v; _bottom += v;

		resize();

	};

	this.minSelf = function ( r ) {

		_left = _left > r.getLeft() ? _left : r.getLeft(); // Math.max( _left, r.getLeft() );
		_top = _top > r.getTop() ? _top : r.getTop(); // Math.max( _top, r.getTop() );
		_right = _right < r.getRight() ? _right : r.getRight(); // Math.min( _right, r.getRight() );
		_bottom = _bottom < r.getBottom() ? _bottom : r.getBottom(); // Math.min( _bottom, r.getBottom() );

		resize();

	};

	/*
	this.contains = function ( x, y ) {

		return x > _left && x < _right && y > _top && y < _bottom;

	};
	*/

	this.instersects = function ( r ) {

		// return this.contains( r.getLeft(), r.getTop() ) || this.contains( r.getRight(), r.getTop() ) || this.contains( r.getLeft(), r.getBottom() ) || this.contains( r.getRight(), r.getBottom() );

		return Math.min( _right, r.getRight() ) - Math.max( _left, r.getLeft() ) >= 0 &&
		        Math.min( _bottom, r.getBottom() ) - Math.max( _top, r.getTop() ) >= 0;

	};

	this.empty = function () {

		_isEmpty = true;

		_left = 0; _top = 0;
		_right = 0; _bottom = 0;

		resize();

	};

	this.isEmpty = function () {

		return _isEmpty;

	};

	this.toString = function () {

		return "THREE.Rectangle ( left: " + _left + ", right: " + _right + ", top: " + _top + ", bottom: " + _bottom + ", width: " + _width + ", height: " + _height + " )";

	};

};
THREE.Matrix3 = function () {

	this.m = [];

};

THREE.Matrix3.prototype = {

	transpose: function () {

		var tmp;

		tmp = this.m[1]; this.m[1] = this.m[3]; this.m[3] = tmp;
		tmp = this.m[2]; this.m[2] = this.m[6]; this.m[6] = tmp;
		tmp = this.m[5]; this.m[5] = this.m[7]; this.m[7] = tmp;

		return this;

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author jordi_ros / http://plattsoft.com
 * @author D1plo1d / http://github.com/D1plo1d
 */

THREE.Matrix4 = function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

	this.n11 = n11 || 1; this.n12 = n12 || 0; this.n13 = n13 || 0; this.n14 = n14 || 0;
	this.n21 = n21 || 0; this.n22 = n22 || 1; this.n23 = n23 || 0; this.n24 = n24 || 0;
	this.n31 = n31 || 0; this.n32 = n32 || 0; this.n33 = n33 || 1; this.n34 = n34 || 0;
	this.n41 = n41 || 0; this.n42 = n42 || 0; this.n43 = n43 || 0; this.n44 = n44 || 1;

	this.flat = new Array( 16 );
	this.m33 = new THREE.Matrix3();

};

THREE.Matrix4.prototype = {

	identity: function () {

		this.n11 = 1; this.n12 = 0; this.n13 = 0; this.n14 = 0;
		this.n21 = 0; this.n22 = 1; this.n23 = 0; this.n24 = 0;
		this.n31 = 0; this.n32 = 0; this.n33 = 1; this.n34 = 0;
		this.n41 = 0; this.n42 = 0; this.n43 = 0; this.n44 = 1;

		return this;

	},

	set: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		this.n11 = n11; this.n12 = n12; this.n13 = n13; this.n14 = n14;
		this.n21 = n21; this.n22 = n22; this.n23 = n23; this.n24 = n24;
		this.n31 = n31; this.n32 = n32; this.n33 = n33; this.n34 = n34;
		this.n41 = n41; this.n42 = n42; this.n43 = n43; this.n44 = n44;

		return this;

	},

	copy: function ( m ) {

		this.n11 = m.n11; this.n12 = m.n12; this.n13 = m.n13; this.n14 = m.n14;
		this.n21 = m.n21; this.n22 = m.n22; this.n23 = m.n23; this.n24 = m.n24;
		this.n31 = m.n31; this.n32 = m.n32; this.n33 = m.n33; this.n34 = m.n34;
		this.n41 = m.n41; this.n42 = m.n42; this.n43 = m.n43; this.n44 = m.n44;

		return this;

	},

	lookAt: function ( eye, center, up ) {

		var x = THREE.Matrix4.__tmpVec1, y = THREE.Matrix4.__tmpVec2, z = THREE.Matrix4.__tmpVec3;

		z.sub( eye, center ).normalize();
		x.cross( up, z ).normalize();
		y.cross( z, x ).normalize();

		this.n11 = x.x; this.n12 = x.y; this.n13 = x.z; this.n14 = - x.dot( eye );
		this.n21 = y.x; this.n22 = y.y; this.n23 = y.z; this.n24 = - y.dot( eye );
		this.n31 = z.x; this.n32 = z.y; this.n33 = z.z; this.n34 = - z.dot( eye );
		this.n41 = 0; this.n42 = 0; this.n43 = 0; this.n44 = 1;

		return this;

	},

	multiplyVector3: function ( v ) {

		var vx = v.x, vy = v.y, vz = v.z,
		d = 1 / ( this.n41 * vx + this.n42 * vy + this.n43 * vz + this.n44 );

		v.x = ( this.n11 * vx + this.n12 * vy + this.n13 * vz + this.n14 ) * d;
		v.y = ( this.n21 * vx + this.n22 * vy + this.n23 * vz + this.n24 ) * d;
		v.z = ( this.n31 * vx + this.n32 * vy + this.n33 * vz + this.n34 ) * d;

		return v;

	},

	multiplyVector4: function ( v ) {

		var vx = v.x, vy = v.y, vz = v.z, vw = v.w;

		v.x = this.n11 * vx + this.n12 * vy + this.n13 * vz + this.n14 * vw;
		v.y = this.n21 * vx + this.n22 * vy + this.n23 * vz + this.n24 * vw;
		v.z = this.n31 * vx + this.n32 * vy + this.n33 * vz + this.n34 * vw;
		v.w = this.n41 * vx + this.n42 * vy + this.n43 * vz + this.n44 * vw;

		return v;

	},

	crossVector: function ( a ) {

		var v = new THREE.Vector4();

		v.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 * a.w;
		v.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 * a.w;
		v.z = this.n31 * a.x + this.n32 * a.y + this.n33 * a.z + this.n34 * a.w;

		v.w = ( a.w ) ? this.n41 * a.x + this.n42 * a.y + this.n43 * a.z + this.n44 * a.w : 1;

		return v;

	},

	multiply: function ( a, b ) {

		var a11 = a.n11, a12 = a.n12, a13 = a.n13, a14 = a.n14,
		a21 = a.n21, a22 = a.n22, a23 = a.n23, a24 = a.n24,
		a31 = a.n31, a32 = a.n32, a33 = a.n33, a34 = a.n34,
		a41 = a.n41, a42 = a.n42, a43 = a.n43, a44 = a.n44,

		b11 = b.n11, b12 = b.n12, b13 = b.n13, b14 = b.n14,
		b21 = b.n21, b22 = b.n22, b23 = b.n23, b24 = b.n24,
		b31 = b.n31, b32 = b.n32, b33 = b.n33, b34 = b.n34,
		b41 = b.n41, b42 = b.n42, b43 = b.n43, b44 = b.n44;

		this.n11 = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		this.n12 = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		this.n13 = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		this.n14 = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		this.n21 = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		this.n22 = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		this.n23 = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		this.n24 = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		this.n31 = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		this.n32 = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		this.n33 = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		this.n34 = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		this.n41 = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		this.n42 = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		this.n43 = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		this.n44 = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;

	},

	multiplySelf: function ( m ) {

		var n11 = this.n11, n12 = this.n12, n13 = this.n13, n14 = this.n14,
		n21 = this.n21, n22 = this.n22, n23 = this.n23, n24 = this.n24,
		n31 = this.n31, n32 = this.n32, n33 = this.n33, n34 = this.n34,
		n41 = this.n41, n42 = this.n42, n43 = this.n43, n44 = this.n44,
		mn11 = m.n11, mn21 = m.n21, mn31 = m.n31, mn41 = m.n41,
		mn12 = m.n12, mn22 = m.n22, mn32 = m.n32, mn42 = m.n42,
		mn13 = m.n13, mn23 = m.n23, mn33 = m.n33, mn43 = m.n43,
		mn14 = m.n14, mn24 = m.n24, mn34 = m.n34, mn44 = m.n44;

		this.n11 = n11 * mn11 + n12 * mn21 + n13 * mn31 + n14 * mn41;
		this.n12 = n11 * mn12 + n12 * mn22 + n13 * mn32 + n14 * mn42;
		this.n13 = n11 * mn13 + n12 * mn23 + n13 * mn33 + n14 * mn43;
		this.n14 = n11 * mn14 + n12 * mn24 + n13 * mn34 + n14 * mn44;

		this.n21 = n21 * mn11 + n22 * mn21 + n23 * mn31 + n24 * mn41;
		this.n22 = n21 * mn12 + n22 * mn22 + n23 * mn32 + n24 * mn42;
		this.n23 = n21 * mn13 + n22 * mn23 + n23 * mn33 + n24 * mn43;
		this.n24 = n21 * mn14 + n22 * mn24 + n23 * mn34 + n24 * mn44;

		this.n31 = n31 * mn11 + n32 * mn21 + n33 * mn31 + n34 * mn41;
		this.n32 = n31 * mn12 + n32 * mn22 + n33 * mn32 + n34 * mn42;
		this.n33 = n31 * mn13 + n32 * mn23 + n33 * mn33 + n34 * mn43;
		this.n34 = n31 * mn14 + n32 * mn24 + n33 * mn34 + n34 * mn44;

		this.n41 = n41 * mn11 + n42 * mn21 + n43 * mn31 + n44 * mn41;
		this.n42 = n41 * mn12 + n42 * mn22 + n43 * mn32 + n44 * mn42;
		this.n43 = n41 * mn13 + n42 * mn23 + n43 * mn33 + n44 * mn43;
		this.n44 = n41 * mn14 + n42 * mn24 + n43 * mn34 + n44 * mn44;

		return this;

	},

	multiplyScalar: function ( s ) {

		this.n11 *= s; this.n12 *= s; this.n13 *= s; this.n14 *= s;
		this.n21 *= s; this.n22 *= s; this.n23 *= s; this.n24 *= s;
		this.n31 *= s; this.n32 *= s; this.n33 *= s; this.n34 *= s;
		this.n41 *= s; this.n42 *= s; this.n43 *= s; this.n44 *= s;

		return this;

	},

	determinant: function () {

		var n11 = this.n11, n12 = this.n12, n13 = this.n13, n14 = this.n14,
		n21 = this.n21, n22 = this.n22, n23 = this.n23, n24 = this.n24,
		n31 = this.n31, n32 = this.n32, n33 = this.n33, n34 = this.n34,
		n41 = this.n41, n42 = this.n42, n43 = this.n43, n44 = this.n44;

		//TODO: make this more efficient
		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )
		return (
			n14 * n23 * n32 * n41-
			n13 * n24 * n32 * n41-
			n14 * n22 * n33 * n41+
			n12 * n24 * n33 * n41+

			n13 * n22 * n34 * n41-
			n12 * n23 * n34 * n41-
			n14 * n23 * n31 * n42+
			n13 * n24 * n31 * n42+

			n14 * n21 * n33 * n42-
			n11 * n24 * n33 * n42-
			n13 * n21 * n34 * n42+
			n11 * n23 * n34 * n42+

			n14 * n22 * n31 * n43-
			n12 * n24 * n31 * n43-
			n14 * n21 * n32 * n43+
			n11 * n24 * n32 * n43+

			n12 * n21 * n34 * n43-
			n11 * n22 * n34 * n43-
			n13 * n22 * n31 * n44+
			n12 * n23 * n31 * n44+

			n13 * n21 * n32 * n44-
			n11 * n23 * n32 * n44-
			n12 * n21 * n33 * n44+
			n11 * n22 * n33 * n44 );

	},

	transpose: function () {

		function swap( obj, p1, p2 ) {

			var aux = obj[ p1 ];
			obj[ p1 ] = obj[ p2 ];
			obj[ p2 ] = aux;

		}

		swap( this, 'n21', 'n12' );
		swap( this, 'n31', 'n13' );
		swap( this, 'n32', 'n23' );
		swap( this, 'n41', 'n14' );
		swap( this, 'n42', 'n24' );
		swap( this, 'n43', 'n34' );

		return this;

	},

	clone: function () {

		var m = new THREE.Matrix4();

		m.n11 = this.n11; m.n12 = this.n12; m.n13 = this.n13; m.n14 = this.n14;
		m.n21 = this.n21; m.n22 = this.n22; m.n23 = this.n23; m.n24 = this.n24;
		m.n31 = this.n31; m.n32 = this.n32; m.n33 = this.n33; m.n34 = this.n34;
		m.n41 = this.n41; m.n42 = this.n42; m.n43 = this.n43; m.n44 = this.n44;

		return m;

	},

	flatten: function() {

		this.flat[ 0 ] = this.n11;
		this.flat[ 1 ] = this.n21;
		this.flat[ 2 ] = this.n31;
		this.flat[ 3 ] = this.n41;

		this.flat[ 4 ] = this.n12;
		this.flat[ 5 ] = this.n22;
		this.flat[ 6 ] = this.n32;
		this.flat[ 7 ] = this.n42;

		this.flat[ 8 ]  = this.n13;
		this.flat[ 9 ]  = this.n23;
		this.flat[ 10 ] = this.n33;
		this.flat[ 11 ] = this.n43;

		this.flat[ 12 ] = this.n14;
		this.flat[ 13 ] = this.n24;
		this.flat[ 14 ] = this.n34;
		this.flat[ 15 ] = this.n44;

		return this.flat;

	},

	setTranslation: function( x, y, z ) {

		this.set( 1, 0, 0, x,
				  0, 1, 0, y,
				  0, 0, 1, z,
				  0, 0, 0, 1 );

		return this;

	},

	setScale: function( x, y, z ) {

		this.set( x, 0, 0, 0,
				  0, y, 0, 0,
				  0, 0, z, 0,
				  0, 0, 0, 1 );

		return this;

	},

	setRotX: function( theta ) {

		var c = Math.cos( theta ), s = Math.sin( theta );

		this.set( 1, 0,  0, 0,
				  0, c, -s, 0,
				  0, s,  c, 0,
				  0, 0,  0, 1 );

		return this;

	},

	setRotY: function( theta ) {

		var c = Math.cos( theta ), s = Math.sin( theta );

		this.set( c, 0, s, 0,
				  0, 1, 0, 0,
				 -s, 0, c, 0,
				  0, 0, 0, 1 );

		return this;

	},

	setRotZ: function( theta ) {

		var c = Math.cos( theta ), s = Math.sin( theta );

		this.set( c, -s, 0, 0,
				  s,  c, 0, 0,
				  0,  0, 1, 0,
				  0,  0, 0, 1 );

		return this;

	},

	setRotAxis: function( axis, angle ) {

		//Based on http://www.gamedev.net/reference/articles/article1199.asp

		var c = Math.cos( angle ),
			s = Math.sin( angle ),
			t = 1 - c,
			x = axis.x, y = axis.y, z = axis.z,
			tx = t * x, ty = t * y;

		 this.set( tx * x + c, tx * y - s * z, tx * z + s * y, 0,
				  tx * y + s * z, ty * y + c, ty * z - s * x, 0,
				  tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
				  0, 0, 0, 1 );

		 return this;

	},

	toString: function() {

		return  "| " + this.n11 + " " + this.n12 + " " + this.n13 + " " + this.n14 + " |\n" +
			"| " + this.n21 + " " + this.n22 + " " + this.n23 + " " + this.n24 + " |\n" +
			"| " + this.n31 + " " + this.n32 + " " + this.n33 + " " + this.n34 + " |\n" +
			"| " + this.n41 + " " + this.n42 + " " + this.n43 + " " + this.n44 + " |";

	}

};

THREE.Matrix4.translationMatrix = function ( x, y, z ) {

	var m = new THREE.Matrix4();

	m.setTranslation( x, y, z );

	return m;

};

THREE.Matrix4.scaleMatrix = function ( x, y, z ) {

	var m = new THREE.Matrix4();

	m.setScale( x, y, z );

	return m;

};

THREE.Matrix4.rotationXMatrix = function ( theta ) {

	var m = new THREE.Matrix4();

	m.setRotX( theta );

	return m;

};

THREE.Matrix4.rotationYMatrix = function ( theta ) {

	var m = new THREE.Matrix4();

	m.setRotY( theta );

	return m;

};

THREE.Matrix4.rotationZMatrix = function ( theta ) {

	var m = new THREE.Matrix4();

	m.setRotZ( theta );

	return m;

};

THREE.Matrix4.rotationAxisAngleMatrix = function ( axis, angle ) {

	var m = new THREE.Matrix4();

	setRotAxis( axis, angle );

	return m;

};

THREE.Matrix4.makeInvert = function ( m1 ) {

	var n11 = m1.n11, n12 = m1.n12, n13 = m1.n13, n14 = m1.n14,
		n21 = m1.n21, n22 = m1.n22, n23 = m1.n23, n24 = m1.n24,
		n31 = m1.n31, n32 = m1.n32, n33 = m1.n33, n34 = m1.n34,
		n41 = m1.n41, n42 = m1.n42, n43 = m1.n43, n44 = m1.n44;

	//TODO: make this more efficient
	//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )
	var m2 = new THREE.Matrix4();

	m2.n11 = n23*n34*n42 - n24*n33*n42 + n24*n32*n43 - n22*n34*n43 - n23*n32*n44 + n22*n33*n44;
	m2.n12 = n14*n33*n42 - n13*n34*n42 - n14*n32*n43 + n12*n34*n43 + n13*n32*n44 - n12*n33*n44;
	m2.n13 = n13*n24*n42 - n14*n23*n42 + n14*n22*n43 - n12*n24*n43 - n13*n22*n44 + n12*n23*n44;
	m2.n14 = n14*n23*n32 - n13*n24*n32 - n14*n22*n33 + n12*n24*n33 + n13*n22*n34 - n12*n23*n34;
	m2.n21 = n24*n33*n41 - n23*n34*n41 - n24*n31*n43 + n21*n34*n43 + n23*n31*n44 - n21*n33*n44;
	m2.n22 = n13*n34*n41 - n14*n33*n41 + n14*n31*n43 - n11*n34*n43 - n13*n31*n44 + n11*n33*n44;
	m2.n23 = n14*n23*n41 - n13*n24*n41 - n14*n21*n43 + n11*n24*n43 + n13*n21*n44 - n11*n23*n44;
	m2.n24 = n13*n24*n31 - n14*n23*n31 + n14*n21*n33 - n11*n24*n33 - n13*n21*n34 + n11*n23*n34;
	m2.n31 = n22*n34*n41 - n24*n32*n41 + n24*n31*n42 - n21*n34*n42 - n22*n31*n44 + n21*n32*n44;
	m2.n32 = n14*n32*n41 - n12*n34*n41 - n14*n31*n42 + n11*n34*n42 + n12*n31*n44 - n11*n32*n44;
	m2.n33 = n13*n24*n41 - n14*n22*n41 + n14*n21*n42 - n11*n24*n42 - n12*n21*n44 + n11*n22*n44;
	m2.n34 = n14*n22*n31 - n12*n24*n31 - n14*n21*n32 + n11*n24*n32 + n12*n21*n34 - n11*n22*n34;
	m2.n41 = n23*n32*n41 - n22*n33*n41 - n23*n31*n42 + n21*n33*n42 + n22*n31*n43 - n21*n32*n43;
	m2.n42 = n12*n33*n41 - n13*n32*n41 + n13*n31*n42 - n11*n33*n42 - n12*n31*n43 + n11*n32*n43;
	m2.n43 = n13*n22*n41 - n12*n23*n41 - n13*n21*n42 + n11*n23*n42 + n12*n21*n43 - n11*n22*n43;
	m2.n44 = n12*n23*n31 - n13*n22*n31 + n13*n21*n32 - n11*n23*n32 - n12*n21*n33 + n11*n22*n33;
	m2.multiplyScalar( 1 / m1.determinant() );

	return m2;

};

THREE.Matrix4.makeInvert3x3 = function ( m1 ) {

	// input:  THREE.Matrix4, output: THREE.Matrix3
	// ( based on http://code.google.com/p/webgl-mjs/ )

	var m = m1.flatten(),
	m2 = m1.m33,

	a11 = m[ 10 ] * m[ 5 ] - m[ 6 ] * m[ 9 ],
	a21 = - m[ 10 ] * m[ 1 ] + m[ 2 ] * m[ 9 ],
	a31 = m[ 6 ] * m[ 1 ] - m[ 2 ] * m[ 5 ],
	a12 = - m[ 10 ] * m[ 4 ] + m[ 6 ] * m[ 8 ],
	a22 = m[ 10 ] * m[ 0 ] - m[ 2 ] * m[ 8 ],
	a32 = - m[ 6 ] * m[ 0 ] + m[ 2 ] * m[ 4 ],
	a13 = m[ 9 ] * m[ 4 ] - m[ 5 ] * m[ 8 ],
	a23 = - m[ 9 ] * m[ 0 ] + m[ 1 ] * m[ 8 ],
	a33 = m[ 5 ] * m[ 0 ] - m[ 1 ] * m[ 4 ],
	det = m[ 0 ] * ( a11 ) + m[ 1 ] * ( a12 ) + m[ 2 ] * ( a13 ),
	idet;

	// no inverse
	if (det == 0) throw "matrix not invertible";

	idet = 1.0 / det;

	m2.m[ 0 ] = idet * a11; m2.m[ 1 ] = idet * a21; m2.m[ 2 ] = idet * a31;
	m2.m[ 3 ] = idet * a12; m2.m[ 4 ] = idet * a22; m2.m[ 5 ] = idet * a32;
	m2.m[ 6 ] = idet * a13; m2.m[ 7 ] = idet * a23; m2.m[ 8 ] = idet * a33;

	return m2;

}

THREE.Matrix4.makeFrustum = function ( left, right, bottom, top, near, far ) {

	var m, x, y, a, b, c, d;

	m = new THREE.Matrix4();
	x = 2 * near / ( right - left );
	y = 2 * near / ( top - bottom );
	a = ( right + left ) / ( right - left );
	b = ( top + bottom ) / ( top - bottom );
	c = - ( far + near ) / ( far - near );
	d = - 2 * far * near / ( far - near );

	m.n11 = x;  m.n12 = 0;  m.n13 = a;   m.n14 = 0;
	m.n21 = 0;  m.n22 = y;  m.n23 = b;   m.n24 = 0;
	m.n31 = 0;  m.n32 = 0;  m.n33 = c;   m.n34 = d;
	m.n41 = 0;  m.n42 = 0;  m.n43 = - 1; m.n44 = 0;

	return m;

};

THREE.Matrix4.makePerspective = function ( fov, aspect, near, far ) {

	var ymax, ymin, xmin, xmax;

	ymax = near * Math.tan( fov * Math.PI / 360 );
	ymin = - ymax;
	xmin = ymin * aspect;
	xmax = ymax * aspect;

	return THREE.Matrix4.makeFrustum( xmin, xmax, ymin, ymax, near, far );

};

THREE.Matrix4.makeOrtho = function ( left, right, top, bottom, near, far ) {

	var m, x, y, z, w, h, p;

	m = new THREE.Matrix4();
	w = right - left;
	h = top - bottom;
	p = far - near;
	x = ( right + left ) / w;
	y = ( top + bottom ) / h;
	z = ( far + near ) / p;

	m.n11 = 2 / w; m.n12 = 0;     m.n13 = 0;      m.n14 = -x;
	m.n21 = 0;     m.n22 = 2 / h; m.n23 = 0;      m.n24 = -y;
	m.n31 = 0;     m.n32 = 0;     m.n33 = -2 / p; m.n34 = -z;
	m.n41 = 0;     m.n42 = 0;     m.n43 = 0;      m.n44 = 1;

	return m;

};

THREE.Matrix4.__tmpVec1 = new THREE.Vector3();
THREE.Matrix4.__tmpVec2 = new THREE.Vector3();
THREE.Matrix4.__tmpVec3 = new THREE.Vector3();
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Vertex = function ( position, normal ) {

	this.position = position || new THREE.Vector3();
	this.positionWorld = new THREE.Vector3();
	this.positionScreen = new THREE.Vector4();

	this.normal = normal || new THREE.Vector3();
	this.normalWorld = new THREE.Vector3();
	this.normalScreen = new THREE.Vector3();

	this.tangent = new THREE.Vector4();

	this.__visible = true;

};

THREE.Vertex.prototype = {

	toString: function () {

		return 'THREE.Vertex ( position: ' + this.position + ', normal: ' + this.normal + ' )';
	}
};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Face3 = function ( a, b, c, normal, materials ) {

	this.a = a;
	this.b = b;
	this.c = c;

	this.centroid = new THREE.Vector3();
	this.normal = normal instanceof THREE.Vector3 ? normal : new THREE.Vector3();
	this.vertexNormals = normal instanceof Array ? normal : [];

	this.materials = materials instanceof Array ? materials : [ materials ];

};

THREE.Face3.prototype = {

	toString: function () {

		return 'THREE.Face3 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Face4 = function ( a, b, c, d, normal, materials ) {

	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;

	this.centroid = new THREE.Vector3();
	this.normal = normal instanceof THREE.Vector3 ? normal : new THREE.Vector3();
	this.vertexNormals = normal instanceof Array ? normal : [];

	this.materials = materials instanceof Array ? materials : [ materials ];

};


THREE.Face4.prototype = {

	toString: function () {

		return 'THREE.Face4 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' ' + this.d + ' )';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.UV = function ( u, v ) {

	this.u = u || 0;
	this.v = v || 0;

};

THREE.UV.prototype = {

	copy: function ( uv ) {

		this.u = uv.u;
		this.v = uv.v;

	},

	toString: function () {

		return 'THREE.UV (' + this.u + ', ' + this.v + ')';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author alteredq / http://alteredqualia.com/
 */

THREE.Geometry = function () {

	this.vertices = [];
	this.faces = [];
	this.uvs = [];

	this.boundingBox = null;
	this.boundingSphere = null;

	this.geometryChunks = {};

	this.hasTangents = false;

};

THREE.Geometry.prototype = {

	computeCentroids: function () {

		var f, fl, face;

		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

			face = this.faces[ f ];
			face.centroid.set( 0, 0, 0 );

			if ( face instanceof THREE.Face3 ) {

				face.centroid.addSelf( this.vertices[ face.a ].position );
				face.centroid.addSelf( this.vertices[ face.b ].position );
				face.centroid.addSelf( this.vertices[ face.c ].position );
				face.centroid.divideScalar( 3 );

			} else if ( face instanceof THREE.Face4 ) {

				face.centroid.addSelf( this.vertices[ face.a ].position );
				face.centroid.addSelf( this.vertices[ face.b ].position );
				face.centroid.addSelf( this.vertices[ face.c ].position );
				face.centroid.addSelf( this.vertices[ face.d ].position );
				face.centroid.divideScalar( 4 );

			}

		}

	},

	computeFaceNormals: function ( useVertexNormals ) {

		var n, nl, v, vl, vertex, f, fl, face, vA, vB, vC,
		cb = new THREE.Vector3(), ab = new THREE.Vector3();

		for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

			vertex = this.vertices[ v ];
			vertex.normal.set( 0, 0, 0 );

		}

		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

			face = this.faces[ f ];

			if ( useVertexNormals && face.vertexNormals.length  ) {

				cb.set( 0, 0, 0 );

				for ( n = 0, nl = face.normal.length; n < nl; n++ ) {

					cb.addSelf( face.vertexNormals[n] );

				}

				cb.divideScalar( 3 );

				if ( ! cb.isZero() ) {

					cb.normalize();

				}

				face.normal.copy( cb );

			} else {

				vA = this.vertices[ face.a ];
				vB = this.vertices[ face.b ];
				vC = this.vertices[ face.c ];

				cb.sub( vC.position, vB.position );
				ab.sub( vA.position, vB.position );
				cb.crossSelf( ab );

				if ( !cb.isZero() ) {

					cb.normalize();

				}

				face.normal.copy( cb );

			}

		}

	},

	computeVertexNormals: function () {

		var v, vl, f, fl, face, vertices;

		// create internal buffers for reuse when calling this method repeatedly
		// (otherwise memory allocation / deallocation every frame is big resource hog)

		if ( this.__tmpVertices == undefined ) {

			this.__tmpVertices = new Array( this.vertices.length );
			vertices = this.__tmpVertices;

			for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

				vertices[ v ] = new THREE.Vector3();

			}

			for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

				face = this.faces[ f ];

				if ( face instanceof THREE.Face3 ) {

					face.vertexNormals = [ new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3() ];

				} else if ( face instanceof THREE.Face4 ) {

					face.vertexNormals = [ new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3() ];

				}

			}

		} else {

			vertices = this.__tmpVertices;

			for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

				vertices[ v ].set( 0, 0, 0 );

			}

		}


		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

			face = this.faces[ f ];

			if ( face instanceof THREE.Face3 ) {

				vertices[ face.a ].addSelf( face.normal );
				vertices[ face.b ].addSelf( face.normal );
				vertices[ face.c ].addSelf( face.normal );

			} else if ( face instanceof THREE.Face4 ) {

				vertices[ face.a ].addSelf( face.normal );
				vertices[ face.b ].addSelf( face.normal );
				vertices[ face.c ].addSelf( face.normal );
				vertices[ face.d ].addSelf( face.normal );

			}

		}

		for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

			vertices[ v ].normalize();

		}

		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

			face = this.faces[ f ];

			if ( face instanceof THREE.Face3 ) {

				face.vertexNormals[ 0 ].copy( vertices[ face.a ] );
				face.vertexNormals[ 1 ].copy( vertices[ face.b ] );
				face.vertexNormals[ 2 ].copy( vertices[ face.c ] );

			} else if ( face instanceof THREE.Face4 ) {

				face.vertexNormals[ 0 ].copy( vertices[ face.a ] );
				face.vertexNormals[ 1 ].copy( vertices[ face.b ] );
				face.vertexNormals[ 2 ].copy( vertices[ face.c ] );
				face.vertexNormals[ 3 ].copy( vertices[ face.d ] );

			}

		}

	},

	computeTangents: function() {

		// based on http://www.terathon.com/code/tangent.html
		// tangents go to vertices

		var f, fl, v, vl, face, uv, vA, vB, vC, uvA, uvB, uvC,
			x1, x2, y1, y2, z1, z2,
			s1, s2, t1, t2, r, t, test,
			tan1 = [], tan2 = [],
			sdir = new THREE.Vector3(), tdir = new THREE.Vector3(),
			tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(),
			n = new THREE.Vector3(), w;

		for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

			tan1[ v ] = new THREE.Vector3();
			tan2[ v ] = new THREE.Vector3();

		}

		function handleTriangle( context, a, b, c, ua, ub, uc ) {

			vA = context.vertices[ a ].position;
			vB = context.vertices[ b ].position;
			vC = context.vertices[ c ].position;

			uvA = uv[ ua ];
			uvB = uv[ ub ];
			uvC = uv[ uc ];

			x1 = vB.x - vA.x;
			x2 = vC.x - vA.x;
			y1 = vB.y - vA.y;
			y2 = vC.y - vA.y;
			z1 = vB.z - vA.z;
			z2 = vC.z - vA.z;

			s1 = uvB.u - uvA.u;
			s2 = uvC.u - uvA.u;
			t1 = uvB.v - uvA.v;
			t2 = uvC.v - uvA.v;

			r = 1.0 / ( s1 * t2 - s2 * t1 );
			sdir.set( ( t2 * x1 - t1 * x2 ) * r,
					  ( t2 * y1 - t1 * y2 ) * r,
					  ( t2 * z1 - t1 * z2 ) * r );
			tdir.set( ( s1 * x2 - s2 * x1 ) * r,
					  ( s1 * y2 - s2 * y1 ) * r,
					  ( s1 * z2 - s2 * z1 ) * r );

			tan1[ a ].addSelf( sdir );
			tan1[ b ].addSelf( sdir );
			tan1[ c ].addSelf( sdir );

			tan2[ a ].addSelf( tdir );
			tan2[ b ].addSelf( tdir );
			tan2[ c ].addSelf( tdir );

		}

		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

			face = this.faces[ f ];
			uv = this.uvs[ f ];

			if ( face instanceof THREE.Face3 ) {

				handleTriangle( this, face.a, face.b, face.c, 0, 1, 2 );

				this.vertices[ face.a ].normal.copy( face.vertexNormals[ 0 ] );
				this.vertices[ face.b ].normal.copy( face.vertexNormals[ 1 ] );
				this.vertices[ face.c ].normal.copy( face.vertexNormals[ 2 ] );


			} else if ( face instanceof THREE.Face4 ) {

				handleTriangle( this, face.a, face.b, face.c, 0, 1, 2 );
				handleTriangle( this, face.a, face.b, face.d, 0, 1, 3 );

				this.vertices[ face.a ].normal.copy( face.vertexNormals[ 0 ] );
				this.vertices[ face.b ].normal.copy( face.vertexNormals[ 1 ] );
				this.vertices[ face.c ].normal.copy( face.vertexNormals[ 2 ] );
				this.vertices[ face.d ].normal.copy( face.vertexNormals[ 3 ] );

			}

		}

		for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

			n.copy( this.vertices[ v ].normal );
			t = tan1[ v ];

			// Gram-Schmidt orthogonalize

			tmp.copy( t );
			tmp.subSelf( n.multiplyScalar( n.dot( t ) ) ).normalize();

			// Calculate handedness

			tmp2.cross( this.vertices[ v ].normal, t );
			test = tmp2.dot( tan2[ v ] );
			w = (test < 0.0) ? -1.0 : 1.0;

			this.vertices[ v ].tangent.set( tmp.x, tmp.y, tmp.z, w );

		}

		this.hasTangents = true;

	},

	computeBoundingBox: function () {

		var vertex;

		if ( this.vertices.length > 0 ) {

			this.boundingBox = { 'x': [ this.vertices[ 0 ].position.x, this.vertices[ 0 ].position.x ],
			'y': [ this.vertices[ 0 ].position.y, this.vertices[ 0 ].position.y ],
			'z': [ this.vertices[ 0 ].position.z, this.vertices[ 0 ].position.z ] };

			for ( var v = 1, vl = this.vertices.length; v < vl; v ++ ) {

				vertex = this.vertices[ v ];

				if ( vertex.position.x < this.boundingBox.x[ 0 ] ) {

					this.boundingBox.x[ 0 ] = vertex.position.x;

				} else if ( vertex.position.x > this.boundingBox.x[ 1 ] ) {

					this.boundingBox.x[ 1 ] = vertex.position.x;

				}

				if ( vertex.position.y < this.boundingBox.y[ 0 ] ) {

					this.boundingBox.y[ 0 ] = vertex.position.y;

				} else if ( vertex.position.y > this.boundingBox.y[ 1 ] ) {

					this.boundingBox.y[ 1 ] = vertex.position.y;

				}

				if ( vertex.position.z < this.boundingBox.z[ 0 ] ) {

					this.boundingBox.z[ 0 ] = vertex.position.z;

				} else if ( vertex.position.z > this.boundingBox.z[ 1 ] ) {

					this.boundingBox.z[ 1 ] = vertex.position.z;

				}

			}

		}

	},

	computeBoundingSphere: function () {

		var radius = this.boundingSphere === null ? 0 : this.boundingSphere.radius;

		for ( var v = 0, vl = this.vertices.length; v < vl; v ++ ) {

			radius = Math.max( radius, this.vertices[ v ].position.length() );

		}

		this.boundingSphere = { radius: radius };

	},

	sortFacesByMaterial: function () {

		// TODO
		// Should optimize by grouping faces with ColorFill / ColorStroke materials
		// which could then use vertex color attributes instead of each being
		// in its separate VBO

		var i, l, f, fl, face, material, materials, vertices, mhash, ghash, hash_map = {};

		function materialHash( material ) {

			var hash_array = [];

			for ( i = 0, l = material.length; i < l; i++ ) {

				if ( material[ i ] == undefined ) {

					hash_array.push( "undefined" );

				} else {

					hash_array.push( material[ i ].toString() );

				}

			}

			return hash_array.join( '_' );

		}

		for ( f = 0, fl = this.faces.length; f < fl; f++ ) {

			face = this.faces[ f ];
			materials = face.materials;

			mhash = materialHash( materials );

			if ( hash_map[ mhash ] == undefined ) {

				hash_map[ mhash ] = { 'hash': mhash, 'counter': 0 };

			}

			ghash = hash_map[ mhash ].hash + '_' + hash_map[ mhash ].counter;

			if ( this.geometryChunks[ ghash ] == undefined ) {

				this.geometryChunks[ ghash ] = { 'faces': [], 'materials': materials, 'vertices': 0 };

			}

			vertices = face instanceof THREE.Face3 ? 3 : 4;

			if ( this.geometryChunks[ ghash ].vertices + vertices > 65535 ) {

				hash_map[ mhash ].counter += 1;
				ghash = hash_map[ mhash ].hash + '_' + hash_map[ mhash ].counter;

				if ( this.geometryChunks[ ghash ] == undefined ) {

					this.geometryChunks[ ghash ] = { 'faces': [], 'materials': materials, 'vertices': 0 };

				}

			}

			this.geometryChunks[ ghash ].faces.push( f );
			this.geometryChunks[ ghash ].vertices += vertices;

		}

	},

	toString: function () {

		return 'THREE.Geometry ( vertices: ' + this.vertices + ', faces: ' + this.faces + ', uvs: ' + this.uvs + ' )';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Camera = function ( fov, aspect, near, far ) {

	this.fov = fov;
	this.aspect = aspect;
	this.near = near;
	this.far = far;

	this.position = new THREE.Vector3();
	this.target = { position: new THREE.Vector3() };

	this.autoUpdateMatrix = true;

	this.projectionMatrix = null;
	this.matrix = new THREE.Matrix4();

	this.up = new THREE.Vector3( 0, 1, 0 );

	this.tmpVec = new THREE.Vector3();

	this.translateX = function ( amount ) {

		this.tmpVec.sub( this.target.position, this.position ).normalize().multiplyScalar( amount );
		this.tmpVec.crossSelf( this.up );

		this.position.addSelf( this.tmpVec );
		this.target.position.addSelf( this.tmpVec );

	};

	/* TODO
	this.translateY = function ( amount ) {

	};
	*/

	this.translateZ = function ( amount ) {

		this.tmpVec.sub( this.target.position, this.position ).normalize().multiplyScalar( amount );

		this.position.subSelf( this.tmpVec );
		this.target.position.subSelf( this.tmpVec );

	};

	this.updateMatrix = function () {

		this.matrix.lookAt( this.position, this.target.position, this.up );

	};

	this.updateProjectionMatrix = function () {

		this.projectionMatrix = THREE.Matrix4.makePerspective( this.fov, this.aspect, this.near, this.far );

	};

	this.updateProjectionMatrix();

};

THREE.Camera.prototype = {

	toString: function () {

		return 'THREE.Camera ( ' + this.position + ', ' + this.target.position + ' )';

	}

};
THREE.Light = function ( hex ) {

	this.color = new THREE.Color( hex );

};
THREE.AmbientLight = function ( hex ) {

	THREE.Light.call( this, hex );

};

THREE.AmbientLight.prototype = new THREE.Light();
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function ( hex, intensity ) {

	THREE.Light.call( this, hex );

	this.position = new THREE.Vector3( 0, 1, 0 );
	this.intensity = intensity || 1;

};

THREE.DirectionalLight.prototype = new THREE.Light();
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function ( hex, intensity ) {

	THREE.Light.call( this, hex );

	this.position = new THREE.Vector3();
	this.intensity = intensity || 1;

};

THREE.DirectionalLight.prototype = new THREE.Light();
THREE.DirectionalLight.prototype.constructor = THREE.PointLight;
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Object3D = function () {

	this.id = THREE.Object3DCounter.value ++;

	this.position = new THREE.Vector3();
	this.rotation = new THREE.Vector3();
	this.scale = new THREE.Vector3( 1, 1, 1 );

	this.matrix = new THREE.Matrix4();
	this.rotationMatrix = new THREE.Matrix4();
	this.tmpMatrix = new THREE.Matrix4();

	this.screen = new THREE.Vector3();

	this.autoUpdateMatrix = true;
	this.visible = true;

};

THREE.Object3D.prototype = {

	updateMatrix: function () {

		var p = this.position, r = this.rotation, s = this.scale, m = this.tmpMatrix;

		this.matrix.setTranslation( p.x, p.y, p.z );

		this.rotationMatrix.setRotX( r.x );

		if ( r.y != 0 ) {
		       m.setRotY( r.y );
		       this.rotationMatrix.multiplySelf( m );
		}

		if ( r.z != 0 ) {
		       m.setRotZ( r.z );
		       this.rotationMatrix.multiplySelf( m );
		}

		this.matrix.multiplySelf( this.rotationMatrix );

		if ( s.x != 0 || s.y != 0 || s.z != 0 ) {
		       m.setScale( s.x, s.y, s.z );
		       this.matrix.multiplySelf( m );
		}

	}

};

THREE.Object3DCounter = { value: 0 };
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Particle = function ( materials ) {

	THREE.Object3D.call( this );

	this.materials = materials instanceof Array ? materials : [ materials ];

	this.autoUpdateMatrix = false;

};

THREE.Particle.prototype = new THREE.Object3D();
THREE.Particle.prototype.constructor = THREE.Particle;
/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ParticleSystem = function ( geometry, materials ) {

	THREE.Object3D.call( this );

	this.geometry = geometry;
	this.materials = materials instanceof Array ? materials : [ materials ];

	this.autoUpdateMatrix = false;

};

THREE.ParticleSystem.prototype = new THREE.Object3D();
THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Line = function ( geometry, materials, type ) {

	THREE.Object3D.call( this );

	this.geometry = geometry;
	this.materials = materials instanceof Array ? materials : [ materials ];

	this.type = ( type != undefined ) ? type : THREE.LineStrip;

};

THREE.LineStrip = 0;
THREE.LinePieces = 1;

THREE.Line.prototype = new THREE.Object3D();
THREE.Line.prototype.constructor = THREE.Line;
/**
 * @author mr.doob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

THREE.Mesh = function ( geometry, materials ) {

	THREE.Object3D.call( this );

	this.geometry = geometry;
	this.materials = materials instanceof Array ? materials : [ materials ];

	this.flipSided = false;
	this.doubleSided = false;

	this.overdraw = false; // TODO: Move to material?

	this.geometry.boundingSphere || this.geometry.computeBoundingSphere();

};

THREE.Mesh.prototype = new THREE.Object3D();
THREE.Mesh.prototype.constructor = THREE.Mesh;
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.FlatShading = 0;
THREE.SmoothShading = 1;

THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
/**
 * @author mr.doob / http://mrdoob.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  blending: THREE.NormalBlending,
 *  linewidth: <float>
 * }
 */

THREE.LineBasicMaterial = function ( parameters ) {

	this.color = new THREE.Color( 0xffffff );
	this.opacity = 1;
	this.blending = THREE.NormalBlending;
	this.linewidth = 1;
	this.linecap = 'round';
	this.linejoin = 'round';

	if ( parameters ) {

		if ( parameters.color !== undefined ) this.color.setHex( parameters.color );
		if ( parameters.opacity !== undefined ) this.opacity  = parameters.opacity;
		if ( parameters.blending !== undefined ) this.blending = parameters.blending;
		if ( parameters.linewidth !== undefined ) this.linewidth = parameters.linewidth;
		if ( parameters.linecap !== undefined ) this.linecap = parameters.linecap;
		if ( parameters.linejoin !== undefined ) this.linejoin = parameters.linejoin;
	}

};

THREE.LineBasicMaterial.prototype = {

	toString: function () {

		return 'THREE.LineBasicMaterial (<br/>' +
			'color: ' + this.color + '<br/>' +
			'opacity: ' + this.opacity + '<br/>' +
			'blending: ' + this.blending + '<br/>' +
			'linewidth: ' + this.linewidth +'<br/>' +
			'linecap: ' + this.linecap +'<br/>' +
			'linejoin: ' + this.linejoin +'<br/>' +
			')';

	}

}
/**
 * @author mr.doob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  map: new THREE.Texture( <Image> ),

 *  env_map: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refraction_ratio: <float>,

 *  opacity: <float>,
 *  shading: THREE.SmoothShading,
 *  blending: THREE.NormalBlending,
 *  wireframe: <boolean>,
 *  wireframe_linewidth: <float>
 * }
 */

THREE.MeshBasicMaterial = function ( parameters ) {

	this.id = THREE.MeshBasicMaterialCounter.value ++;

	this.color = new THREE.Color( 0xffffff );
	this.map = null;

	this.env_map = null;
	this.combine = THREE.MultiplyOperation;
	this.reflectivity = 1;
	this.refraction_ratio = 0.98;

	this.fog = true;

	this.opacity = 1;
	this.shading = THREE.SmoothShading;
	this.blending = THREE.NormalBlending;

	this.wireframe = false;
	this.wireframe_linewidth = 1;
	this.wireframe_linecap = 'round';
	this.wireframe_linejoin = 'round';

	if ( parameters ) {

		if ( parameters.color !== undefined ) this.color.setHex( parameters.color );
		if ( parameters.map !== undefined ) this.map = parameters.map;

		if ( parameters.env_map !== undefined ) this.env_map = parameters.env_map;
		if ( parameters.combine !== undefined ) this.combine = parameters.combine;
		if ( parameters.reflectivity !== undefined ) this.reflectivity  = parameters.reflectivity;
		if ( parameters.refraction_ratio !== undefined ) this.refraction_ratio  = parameters.refraction_ratio;

		if ( parameters.fog !== undefined ) this.fog  = parameters.fog;

		if ( parameters.opacity !== undefined ) this.opacity  = parameters.opacity;
		if ( parameters.shading !== undefined ) this.shading = parameters.shading;
		if ( parameters.blending !== undefined ) this.blending = parameters.blending;

		if ( parameters.wireframe !== undefined ) this.wireframe = parameters.wireframe;
		if ( parameters.wireframe_linewidth !== undefined ) this.wireframe_linewidth = parameters.wireframe_linewidth;
		if ( parameters.wireframe_linecap !== undefined ) this.wireframe_linecap = parameters.wireframe_linecap;
		if ( parameters.wireframe_linejoin !== undefined ) this.wireframe_linejoin = parameters.wireframe_linejoin;

	}

};

THREE.MeshBasicMaterial.prototype = {

	toString: function () {

		return 'THREE.MeshBasicMaterial (<br/>' +
			'id: ' + this.id + '<br/>' +
			'color: ' + this.color + '<br/>' +
			'map: ' + this.map + '<br/>' +

			'env_map: ' + this.env_map + '<br/>' +
			'combine: ' + this.combine + '<br/>' +
			'reflectivity: ' + this.reflectivity + '<br/>' +
			'refraction_ratio: ' + this.refraction_ratio + '<br/>' +

			'opacity: ' + this.opacity + '<br/>' +
			'blending: ' + this.blending + '<br/>' +

			'wireframe: ' + this.wireframe + '<br/>' +
			'wireframe_linewidth: ' + this.wireframe_linewidth +'<br/>' +
			'wireframe_linecap: ' + this.wireframe_linecap +'<br/>' +
			'wireframe_linejoin: ' + this.wireframe_linejoin +'<br/>' +
			')';

	}

};

THREE.MeshBasicMaterialCounter = { value: 0 };
/**
 * @author mr.doob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  map: new THREE.Texture( <Image> ),

 *  env_map: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refraction_ratio: <float>,

 *  opacity: <float>,
 *  shading: THREE.SmoothShading,
 *  blending: THREE.NormalBlending,
 *  wireframe: <boolean>,
 *  wireframe_linewidth: <float>
 * }
 */

THREE.MeshLambertMaterial = function ( parameters ) {

	this.id = THREE.MeshLambertMaterialCounter.value ++;

	this.color = new THREE.Color( 0xffffff );
	this.map = null;

	this.env_map = null;
	this.combine = THREE.MultiplyOperation;
	this.reflectivity = 1;
	this.refraction_ratio = 0.98;

	this.fog = true;

	this.opacity = 1;
	this.shading = THREE.SmoothShading;
	this.blending = THREE.NormalBlending;

	this.wireframe = false;
	this.wireframe_linewidth = 1;
	this.wireframe_linecap = 'round';
	this.wireframe_linejoin = 'round';

	if ( parameters ) {

		if ( parameters.color !== undefined ) this.color.setHex( parameters.color );
		if ( parameters.map !== undefined ) this.map = parameters.map;

		if ( parameters.env_map !== undefined ) this.env_map = parameters.env_map;
		if ( parameters.combine !== undefined ) this.combine = parameters.combine;
		if ( parameters.reflectivity !== undefined ) this.reflectivity  = parameters.reflectivity;
		if ( parameters.refraction_ratio !== undefined ) this.refraction_ratio  = parameters.refraction_ratio;

		if ( parameters.fog !== undefined ) this.fog  = parameters.fog;

		if ( parameters.opacity !== undefined ) this.opacity  = parameters.opacity;
		if ( parameters.shading !== undefined ) this.shading = parameters.shading;
		if ( parameters.blending !== undefined ) this.blending = parameters.blending;

		if ( parameters.wireframe !== undefined ) this.wireframe = parameters.wireframe;
		if ( parameters.wireframe_linewidth !== undefined ) this.wireframe_linewidth = parameters.wireframe_linewidth;
		if ( parameters.wireframe_linecap !== undefined ) this.wireframe_linecap = parameters.wireframe_linecap;
		if ( parameters.wireframe_linejoin !== undefined ) this.wireframe_linejoin = parameters.wireframe_linejoin;

	}

};

THREE.MeshLambertMaterial.prototype = {

	toString: function () {

		return 'THREE.MeshLambertMaterial (<br/>' +
			'id: ' + this.id + '<br/>' +
			'color: ' + this.color + '<br/>' +
			'map: ' + this.map + '<br/>' +

			'env_map: ' + this.env_map + '<br/>' +
			'combine: ' + this.combine + '<br/>' +
			'reflectivity: ' + this.reflectivity + '<br/>' +
			'refraction_ratio: ' + this.refraction_ratio + '<br/>' +

			'opacity: ' + this.opacity + '<br/>' +
			'shading: ' + this.shading + '<br/>' +
			'blending: ' + this.blending + '<br/>' +

			'wireframe: ' + this.wireframe + '<br/>' +
			'wireframe_linewidth: ' + this.wireframe_linewidth +'<br/>' +
			'wireframe_linecap: ' + this.wireframe_linecap +'<br/>' +
			'wireframe_linejoin: ' + this.wireframe_linejoin +'<br/>' +
			' )';

	}

};

THREE.MeshLambertMaterialCounter = { value: 0 };
/**
 * @author mr.doob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  ambient: <hex>,
 *  specular: <hex>,
 *  shininess: <float>,

 *  map: new THREE.Texture( <Image> ),
 *  specular_map: new THREE.Texture( <Image> ),

 *  env_map: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refraction_ratio: <float>,

 *  opacity: <float>,
 *  shading: THREE.SmoothShading,
 *  blending: THREE.NormalBlending,
 *  wireframe: <boolean>,
 *  wireframe_linewidth: <float>
 * }
 */

THREE.MeshPhongMaterial = function ( parameters ) {

	this.id = THREE.MeshPhongMaterialCounter.value ++;

	this.color = new THREE.Color( 0xffffff );
	this.ambient = new THREE.Color( 0x050505 );
	this.specular = new THREE.Color( 0x111111 );
	this.shininess = 30;

	this.map = null;
	this.specular_map = null;

	this.env_map = null;
	this.combine = THREE.MultiplyOperation;
	this.reflectivity = 1;
	this.refraction_ratio = 0.98;

	this.fog = true;

	this.opacity = 1;
	this.shading = THREE.SmoothShading;
	this.blending = THREE.NormalBlending;

	this.wireframe = false;
	this.wireframe_linewidth = 1;
	this.wireframe_linecap = 'round';
	this.wireframe_linejoin = 'round';

	if ( parameters ) {

		if ( parameters.color !== undefined ) this.color = new THREE.Color( parameters.color );
		if ( parameters.ambient !== undefined ) this.ambient = new THREE.Color( parameters.ambient );
		if ( parameters.specular !== undefined ) this.specular = new THREE.Color( parameters.specular );
		if ( parameters.shininess !== undefined ) this.shininess = parameters.shininess;

		if ( parameters.map !== undefined ) this.map = parameters.map;
		if ( parameters.specular_map !== undefined ) this.specular_map = parameters.specular_map;

		if ( parameters.env_map !== undefined ) this.env_map = parameters.env_map;
		if ( parameters.combine !== undefined ) this.combine = parameters.combine;
		if ( parameters.reflectivity !== undefined ) this.reflectivity  = parameters.reflectivity;
		if ( parameters.refraction_ratio !== undefined ) this.refraction_ratio  = parameters.refraction_ratio;

		if ( parameters.fog !== undefined ) this.fog  = parameters.fog;

		if ( parameters.opacity !== undefined ) this.opacity = parameters.opacity;
		if ( parameters.shading !== undefined ) this.shading = parameters.shading;
		if ( parameters.blending !== undefined ) this.blending = parameters.blending;

		if ( parameters.wireframe !== undefined ) this.wireframe = parameters.wireframe;
		if ( parameters.wireframe_linewidth !== undefined ) this.wireframe_linewidth = parameters.wireframe_linewidth;
		if ( parameters.wireframe_linecap !== undefined ) this.wireframe_linecap = parameters.wireframe_linecap;
		if ( parameters.wireframe_linejoin !== undefined ) this.wireframe_linejoin = parameters.wireframe_linejoin;

	}

};

THREE.MeshPhongMaterial.prototype = {

	toString: function () {

		return 'THREE.MeshPhongMaterial (<br/>' +
			'id: ' + this.id + '<br/>' +
			'color: ' + this.color + '<br/>' +
			'ambient: ' + this.ambient + '<br/>' +
			'specular: ' + this.specular + '<br/>' +
			'shininess: ' + this.shininess + '<br/>' +

			'map: ' + this.map + '<br/>' +
			'specular_map: ' + this.specular_map + '<br/>' +

			'env_map: ' + this.env_map + '<br/>' +
			'combine: ' + this.combine + '<br/>' +
			'reflectivity: ' + this.reflectivity + '<br/>' +
			'refraction_ratio: ' + this.refraction_ratio + '<br/>' +

			'opacity: ' + this.opacity + '<br/>' +
			'shading: ' + this.shading + '<br/>' +

			'wireframe: ' + this.wireframe + '<br/>' +
			'wireframe_linewidth: ' + this.wireframe_linewidth + '<br/>' +
			'wireframe_linecap: ' + this.wireframe_linecap +'<br/>' +
			'wireframe_linejoin: ' + this.wireframe_linejoin +'<br/>' +
			')';

	}

};

THREE.MeshPhongMaterialCounter = { value: 0 };
/**
 * @author mr.doob / http://mrdoob.com/
 *
 * parameters = {
 *  opacity: <float>,
 *  blending: THREE.NormalBlending
 * }
 */

THREE.MeshDepthMaterial = function ( parameters ) {

	this.opacity = 1;
	this.shading = THREE.SmoothShading;
	this.blending = THREE.NormalBlending;

	this.wireframe = false;
	this.wireframe_linewidth = 1;
	this.wireframe_linecap = 'round';
	this.wireframe_linejoin = 'round';

	if ( parameters ) {

		if ( parameters.opacity !== undefined ) this.opacity  = parameters.opacity;
		if ( parameters.blending !== undefined ) this.blending = parameters.blending;

	}

};

THREE.MeshDepthMaterial.prototype = {

	toString: function () {

		return 'THREE.MeshDepthMaterial';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 *
 * parameters = {
 *  opacity: <float>,
 *  shading: THREE.FlatShading,
 *  blending: THREE.NormalBlending
 * }
 */

THREE.MeshNormalMaterial = function ( parameters ) {

	this.opacity = 1;
	this.shading = THREE.FlatShading;
	this.blending = THREE.NormalBlending;

	if ( parameters ) {

		if ( parameters.opacity !== undefined ) this.opacity  = parameters.opacity;
		if ( parameters.shading !== undefined ) this.shading  = parameters.shading;
		if ( parameters.blending !== undefined ) this.blending = parameters.blending;

	}

};

THREE.MeshNormalMaterial.prototype = {

	toString: function () {

		return 'THREE.MeshNormalMaterial';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.MeshFaceMaterial = function () {

};

THREE.MeshFaceMaterial.prototype = {

	toString: function () {

		return 'THREE.MeshFaceMaterial';

	}

};
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  fragment_shader: <string>,
 *  vertex_shader: <string>,
 *  uniforms: { "parameter1": { type: "f", value: 1.0 }, "parameter2": { type: "i" value2: 2 } },
 *  shading: THREE.SmoothShading,
 *  blending: THREE.NormalBlending,
 *  wireframe: <boolean>,
 *  wireframe_linewidth: <float>
 * }
 */

THREE.MeshShaderMaterial = function ( parameters ) {

	this.id = THREE.MeshShaderMaterialCounter.value ++;

	this.fragment_shader = "void main() {}";
	this.vertex_shader = "void main() {}";
	this.uniforms = {};

	this.opacity = 1;
	this.shading = THREE.SmoothShading;
	this.blending = THREE.NormalBlending;

	this.wireframe = false;
	this.wireframe_linewidth = 1;
	this.wireframe_linecap = 'round';
	this.wireframe_linejoin = 'round';

	if ( parameters ) {

		if ( parameters.fragment_shader !== undefined ) this.fragment_shader = parameters.fragment_shader;
		if ( parameters.vertex_shader !== undefined ) this.vertex_shader = parameters.vertex_shader;

		if ( parameters.uniforms !== undefined ) this.uniforms = parameters.uniforms;

		if ( parameters.shading !== undefined ) this.shading = parameters.shading;
		if ( parameters.blending !== undefined ) this.blending = parameters.blending;

		if ( parameters.wireframe !== undefined ) this.wireframe = parameters.wireframe;
		if ( parameters.wireframe_linewidth !== undefined ) this.wireframe_linewidth = parameters.wireframe_linewidth;
		if ( parameters.wireframe_linecap !== undefined ) this.wireframe_linecap = parameters.wireframe_linecap;
		if ( parameters.wireframe_linejoin !== undefined ) this.wireframe_linejoin = parameters.wireframe_linejoin;

	}

};

THREE.MeshShaderMaterial.prototype = {

	toString: function () {

		return 'THREE.MeshShaderMaterial (<br/>' +
			'id: ' + this.id + '<br/>' +

			'blending: ' + this.blending + '<br/>' +
			'wireframe: ' + this.wireframe + '<br/>' +
			'wireframe_linewidth: ' + this.wireframe_linewidth +'<br/>' +
			'wireframe_linecap: ' + this.wireframe_linecap +'<br/>' +
			'wireframe_linejoin: ' + this.wireframe_linejoin +'<br/>' +
			')';

	}

};

THREE.MeshShaderMaterialCounter = { value: 0 };
/**
 * @author mr.doob / http://mrdoob.com/
 *
 * parameters = {
 *  color: <hex>,
 *  map: new THREE.Texture( <Image> ),
 *  opacity: <float>,
 *  blending: THREE.NormalBlending
 * }
 */

THREE.ParticleBasicMaterial = function ( parameters ) {

	this.color = new THREE.Color( 0xffffff );
	this.map = null;
	this.opacity = 1;
	this.blending = THREE.NormalBlending;

	this.offset = new THREE.Vector2(); // TODO: expose to parameters

	if ( parameters ) {

		if ( parameters.color !== undefined ) this.color.setHex( parameters.color );
		if ( parameters.map !== undefined ) this.map = parameters.map;
		if ( parameters.opacity !== undefined ) this.opacity  = parameters.opacity;
		if ( parameters.blending !== undefined ) this.blending = parameters.blending;

	}

};

THREE.ParticleBasicMaterial.prototype = {

	toString: function () {

		return 'THREE.ParticleBasicMaterial (<br/>' +
			'color: ' + this.color + '<br/>' +
			'map: ' + this.map + '<br/>' +
			'opacity: ' + this.opacity + '<br/>' +
			'blending: ' + this.blending + '<br/>' +
			')';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  blending: THREE.NormalBlending
 * }
 */

THREE.ParticleCircleMaterial = function ( parameters ) {

	this.color = new THREE.Color( 0xffffff );
	this.opacity = 1;
	this.blending = THREE.NormalBlending;

	if ( parameters ) {

		if ( parameters.color !== undefined ) this.color.setHex( parameters.color );
		if ( parameters.opacity !== undefined ) this.opacity = parameters.opacity;
		if ( parameters.blending !== undefined ) this.blending = parameters.blending;

	}

};

THREE.ParticleCircleMaterial.prototype = {

	toString: function () {

		return 'THREE.ParticleCircleMaterial (<br/>' +
			'color: ' + this.color + '<br/>' +
			'opacity: ' + this.opacity + '<br/>' +
			'blending: ' + this.blending + '<br/>' +
			')';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.ParticleDOMMaterial = function ( domElement ) {

	this.domElement = domElement;

};


THREE.ParticleDOMMaterial.prototype = {

	toString: function () {

		return 'THREE.ParticleDOMMaterial ( domElement: ' + this.domElement + ' )';

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 */

THREE.Texture = function ( image, mapping, wrap_s, wrap_t, mag_filter, min_filter ) {

	this.image = image;

	this.mapping = mapping !== undefined ? mapping : new THREE.UVMapping();

	this.wrap_s = wrap_s !== undefined ? wrap_s : THREE.ClampToEdgeWrapping;
	this.wrap_t = wrap_t !== undefined ? wrap_t : THREE.ClampToEdgeWrapping;

	this.mag_filter = mag_filter !== undefined ? mag_filter : THREE.LinearFilter;
	this.min_filter = min_filter !== undefined ? min_filter : THREE.LinearMipMapLinearFilter;

};

THREE.Texture.prototype = {

	clone: function () {

		return new THREE.Texture( this.image, this.mapping, this.wrap_s, this.wrap_t, this.mag_filter, this.min_filter );

	},

	toString: function () {

		return 'THREE.Texture (<br/>' +
			'image: ' + this.image + '<br/>' +
			'wrap_s: ' + this.wrap_s + '<br/>' +
			'wrap_t: ' + this.wrap_t + '<br/>' +
			'mag_filter: ' + this.mag_filter + '<br/>' +
			'min_filter: ' + this.min_filter + '<br/>' +
			')';

	}

};

THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;

// Wrapping modes

THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;

// Filters

THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;

// Types

THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;

// Formats

THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
/**
 * @author szimek / https://github.com/szimek/
 */

THREE.RenderTarget = function ( width, height, options ) {

	this.width = width;
	this.height = height;

	options = options || {};

	this.wrap_s = options.wrap_s !== undefined ? options.wrap_s : THREE.ClampToEdgeWrapping;
	this.wrap_t = options.wrap_t !== undefined ? options.wrap_t : THREE.ClampToEdgeWrapping;

	this.mag_filter = options.mag_filter !== undefined ? options.mag_filter : THREE.LinearFilter;
	this.min_filter = options.min_filter !== undefined ? options.min_filter : THREE.LinearMipMapLinearFilter;

	this.format = options.format !== undefined ? options.format : THREE.RGBFormat;
	this.type = options.type !== undefined ? options.type : THREE.UnsignedByteType;

};
var Uniforms = {

	clone: function( uniforms_src ) {

		var u, p, parameter, parameter_src, uniforms_dst = {};

		for ( u in uniforms_src ) {

			uniforms_dst[ u ] = {};

			for ( p in uniforms_src[ u ] ) {

				parameter_src = uniforms_src[ u ][ p ];

				if ( parameter_src instanceof THREE.Color ||
					 parameter_src instanceof THREE.Vector3 ||
					 parameter_src instanceof THREE.Texture ) {

					uniforms_dst[ u ][ p ] = parameter_src.clone();

				} else {

					uniforms_dst[ u ][ p ] = parameter_src;

				}

			}

		}

		return uniforms_dst;

	},

	merge: function( uniforms ) {

		var u, p, tmp, merged = {};

		for( u = 0; u < uniforms.length; u++ ) {

			tmp = this.clone( uniforms[ u ] );

			for ( p in tmp ) {

				merged[ p ] = tmp[ p ];

			}

		}

		return merged;

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.CubeReflectionMapping = function () {



};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.CubeRefractionMapping = function () {



};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.LatitudeReflectionMapping = function () {



};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.LatitudeRefractionMapping = function () {



};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.SphericalReflectionMapping = function () {



};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.SphericalRefractionMapping = function () {



};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.UVMapping = function () {



};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.Scene = function () {

	this.objects = [];
	this.lights = [];
	this.fog = null;

	this.addObject = function ( object ) {

		var i = this.objects.indexOf( object );

		if ( i === -1 ) {

			this.objects.push( object );

		}

	};

	this.removeObject = function ( object ) {

		var i = this.objects.indexOf( object );

		if ( i !== -1 ) {

			this.objects.splice( i, 1 );

		}

	};

	this.addLight = function ( light ) {

		var i = this.lights.indexOf( light );

		if ( i === -1 ) {

			this.lights.push( light );

		}

	};

	this.removeLight = function ( light ) {

		var i = this.lights.indexOf( light );

		if ( i !== -1 ) {

			this.lights.splice( i, 1 );

		}

	};

	this.toString = function () {

		return 'THREE.Scene ( ' + this.objects + ' )';

	};

};
/**
 * @author mr.doob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

THREE.Fog = function ( hex, near, far ) {

	this.color = new THREE.Color( hex );
	this.near = near || 1;
	this.far = far || 1000;

};
/**
 * @author mr.doob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

THREE.FogExp2 = function ( hex, density ) {

	this.color = new THREE.Color( hex );
	this.density = density || 0.00025;

};
/**
 * @author mr.doob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author julianwa / https://github.com/julianwa
 */

THREE.Projector = function() {

	var _object, _objectCount, _objectPool = [],
	_face3, _face32, _face3Count, _face3Pool = [],
	_line, _lineCount, _linePool = [],
	_particle, _particleCount, _particlePool = [],

	_vector3 = new THREE.Vector4(),
	_vector4 = new THREE.Vector4(),
	_projScreenMatrix = new THREE.Matrix4(),
	_projScreenObjectMatrix = new THREE.Matrix4(),
	_frustum = [],

	_clippedVertex1PositionScreen = new THREE.Vector4(),
	_clippedVertex2PositionScreen = new THREE.Vector4(),

	_face3VertexNormals;

	this.projectObjects = function ( scene, camera, sort ) {

		var renderList = [],
		o, ol, objects, object;

		_objectCount = 0;
		_projScreenMatrix.multiply( camera.projectionMatrix, camera.matrix );

		computeFrustum( _projScreenMatrix );

		objects = scene.objects;

		for ( o = 0, ol = objects.length; o < ol; o ++ ) {

			object = objects[ o ];

			if ( !object.visible || ( object instanceof THREE.Mesh && !isInFrustum( object ) ) ) continue;

			_object = _objectPool[ _objectCount ] = _objectPool[ _objectCount ] || new THREE.RenderableObject();

			_vector3.copy( object.position );
			_projScreenMatrix.multiplyVector3( _vector3 );

			_object.object = object;
			_object.z = _vector3.z;

			renderList.push( _object );

			_objectCount ++;

		}

		sort && renderList.sort( painterSort );

		return renderList;

	};

	// TODO: Rename to projectElements? Test also using it with projectObjects to speed up sorting?

	this.projectScene = function ( scene, camera, sort ) {

		var renderList = [], near = camera.near, far = camera.far,
		o, ol, v, vl, f, fl, n, nl, objects, object,
		objectMatrix, objectRotationMatrix, objectMaterials, objectOverdraw,
		geometry, vertices, vertex, vertexPositionScreen,
		faces, face, faceVertexNormals, normal, v1, v2, v3, v4;

		_face3Count = _lineCount = _particleCount = 0;

		camera.autoUpdateMatrix && camera.updateMatrix();

		_projScreenMatrix.multiply( camera.projectionMatrix, camera.matrix );

		objects = this.projectObjects( scene, camera, true ); // scene.objects;

		for ( o = 0, ol = objects.length; o < ol; o++ ) {

			object = objects[ o ].object;

			if ( !object.visible ) continue;

			object.autoUpdateMatrix && object.updateMatrix();

			objectMatrix = object.matrix;
			objectRotationMatrix = object.rotationMatrix;
			objectMaterials = object.materials;
			objectOverdraw = object.overdraw;

			if ( object instanceof THREE.Mesh ) {

				geometry = object.geometry;

				// vertices

				vertices = geometry.vertices;

				for ( v = 0, vl = vertices.length; v < vl; v ++ ) {

					vertex = vertices[ v ];

					vertex.positionWorld.copy( vertex.position );
					objectMatrix.multiplyVector3( vertex.positionWorld );

					vertexPositionScreen = vertex.positionScreen;
					vertexPositionScreen.copy( vertex.positionWorld );
					_projScreenMatrix.multiplyVector4( vertexPositionScreen );

					vertexPositionScreen.x /= vertexPositionScreen.w;
					vertexPositionScreen.y /= vertexPositionScreen.w;

					vertex.__visible = vertexPositionScreen.z > near && vertexPositionScreen.z < far;

				}

				// faces

				faces = geometry.faces;

				for ( f = 0, fl = faces.length; f < fl; f ++ ) {

					face = faces[ f ];

					if ( face instanceof THREE.Face3 ) {

						v1 = vertices[ face.a ]; v2 = vertices[ face.b ]; v3 = vertices[ face.c ];

						if ( v1.__visible && v2.__visible && v3.__visible ) {

							if ( ( object.doubleSided || ( object.flipSided !=
							   ( v3.positionScreen.x - v1.positionScreen.x ) * ( v2.positionScreen.y - v1.positionScreen.y ) -
							   ( v3.positionScreen.y - v1.positionScreen.y ) * ( v2.positionScreen.x - v1.positionScreen.x ) < 0 ) ) ) {

								_face3 = _face3Pool[ _face3Count ] = _face3Pool[ _face3Count ] || new THREE.RenderableFace3();

								_face3.v1.positionWorld.copy( v1.positionWorld );
								_face3.v2.positionWorld.copy( v2.positionWorld );
								_face3.v3.positionWorld.copy( v3.positionWorld );

								_face3.v1.positionScreen.copy( v1.positionScreen );
								_face3.v2.positionScreen.copy( v2.positionScreen );
								_face3.v3.positionScreen.copy( v3.positionScreen );

								_face3.normalWorld.copy( face.normal );
								objectRotationMatrix.multiplyVector3( _face3.normalWorld );

								_face3.centroidWorld.copy( face.centroid );
								objectMatrix.multiplyVector3( _face3.centroidWorld );

								_face3.centroidScreen.copy( _face3.centroidWorld );
								_projScreenMatrix.multiplyVector3( _face3.centroidScreen );

								faceVertexNormals = face.vertexNormals;
								_face3VertexNormals = _face3.vertexNormalsWorld;

								for ( n = 0, nl = faceVertexNormals.length; n < nl; n ++ ) {

									normal = _face3VertexNormals[ n ] = _face3VertexNormals[ n ] || new THREE.Vector3();
									normal.copy( faceVertexNormals[ n ] );
									objectRotationMatrix.multiplyVector3( normal );

								}

								_face3.z = _face3.centroidScreen.z;

								_face3.meshMaterials = objectMaterials;
								_face3.faceMaterials = face.materials;
								_face3.overdraw = objectOverdraw;

								if ( object.geometry.uvs[ f ] ) {

									_face3.uvs[ 0 ] = object.geometry.uvs[ f ][ 0 ];
									_face3.uvs[ 1 ] = object.geometry.uvs[ f ][ 1 ];
									_face3.uvs[ 2 ] = object.geometry.uvs[ f ][ 2 ];

								}

								renderList.push( _face3 );

								_face3Count ++;

							}

						}

					} else if ( face instanceof THREE.Face4 ) {

						v1 = vertices[ face.a ]; v2 = vertices[ face.b ]; v3 = vertices[ face.c ]; v4 = vertices[ face.d ];

						if ( v1.__visible && v2.__visible && v3.__visible && v4.__visible ) {

							if ( ( object.doubleSided || ( object.flipSided !=
							   ( ( v4.positionScreen.x - v1.positionScreen.x ) * ( v2.positionScreen.y - v1.positionScreen.y ) -
							   ( v4.positionScreen.y - v1.positionScreen.y ) * ( v2.positionScreen.x - v1.positionScreen.x ) < 0 ||
							   ( v2.positionScreen.x - v3.positionScreen.x ) * ( v4.positionScreen.y - v3.positionScreen.y ) -
							   ( v2.positionScreen.y - v3.positionScreen.y ) * ( v4.positionScreen.x - v3.positionScreen.x ) < 0 ) ) ) ) {

								_face3 = _face3Pool[ _face3Count ] = _face3Pool[ _face3Count ] || new THREE.RenderableFace3();

								_face3.v1.positionWorld.copy( v1.positionWorld );
								_face3.v2.positionWorld.copy( v2.positionWorld );
								_face3.v3.positionWorld.copy( v4.positionWorld );

								_face3.v1.positionScreen.copy( v1.positionScreen );
								_face3.v2.positionScreen.copy( v2.positionScreen );
								_face3.v3.positionScreen.copy( v4.positionScreen );

								_face3.normalWorld.copy( face.normal );
								objectRotationMatrix.multiplyVector3( _face3.normalWorld );

								_face3.centroidWorld.copy( face.centroid );
								objectMatrix.multiplyVector3( _face3.centroidWorld );

								_face3.centroidScreen.copy( _face3.centroidWorld );
								_projScreenMatrix.multiplyVector3( _face3.centroidScreen );

								// TODO: Handle vertex normals

								_face3.z = _face3.centroidScreen.z;

								_face3.meshMaterials = objectMaterials;
								_face3.faceMaterials = face.materials;
								_face3.overdraw = objectOverdraw;

								if ( object.geometry.uvs[ f ] ) {

									_face3.uvs[ 0 ] = object.geometry.uvs[ f ][ 0 ];
									_face3.uvs[ 1 ] = object.geometry.uvs[ f ][ 1 ];
									_face3.uvs[ 2 ] = object.geometry.uvs[ f ][ 3 ];

								}

								renderList.push( _face3 );

								_face3Count ++;

								//

								_face32 = _face3Pool[ _face3Count ] = _face3Pool[ _face3Count ] || new THREE.RenderableFace3();

								_face32.v1.positionWorld.copy( v2.positionWorld );
								_face32.v2.positionWorld.copy( v3.positionWorld );
								_face32.v3.positionWorld.copy( v4.positionWorld );

								_face32.v1.positionScreen.copy( v2.positionScreen );
								_face32.v2.positionScreen.copy( v3.positionScreen );
								_face32.v3.positionScreen.copy( v4.positionScreen );

								_face32.normalWorld.copy( _face3.normalWorld );
								_face32.centroidWorld.copy( _face3.centroidWorld );
								_face32.centroidScreen.copy( _face3.centroidScreen );

								// TODO: Handle vertex normals

								_face32.z = _face32.centroidScreen.z;

								_face32.meshMaterials = objectMaterials;
								_face32.faceMaterials = face.materials;
								_face32.overdraw = objectOverdraw;

								if ( object.geometry.uvs[ f ] ) {

									_face32.uvs[ 0 ] = object.geometry.uvs[ f ][ 1 ];
									_face32.uvs[ 1 ] = object.geometry.uvs[ f ][ 2 ];
									_face32.uvs[ 2 ] = object.geometry.uvs[ f ][ 3 ];

								}

								renderList.push( _face32 );

								_face3Count ++;

							}

						}

					}

				}

			} else if ( object instanceof THREE.Line ) {

				_projScreenObjectMatrix.multiply( _projScreenMatrix, objectMatrix );

				vertices = object.geometry.vertices;

				vertex = vertices[ 0 ];
				vertex.positionScreen.copy( vertex.position );
				_projScreenObjectMatrix.multiplyVector4( vertex.positionScreen );

				for ( v = 1, vl = vertices.length; v < vl; v++ ) {

					v1 = vertices[ v ];

					v1.positionScreen.copy( v1.position );
					_projScreenObjectMatrix.multiplyVector4( v1.positionScreen );

					v2 = vertices[ v - 1 ];

					_clippedVertex1PositionScreen.copy( v1.positionScreen );
					_clippedVertex2PositionScreen.copy( v2.positionScreen );

					if ( clipLine( _clippedVertex1PositionScreen, _clippedVertex2PositionScreen ) ) {

						// Perform the perspective divide
						_clippedVertex1PositionScreen.multiplyScalar( 1 / _clippedVertex1PositionScreen.w );
						_clippedVertex2PositionScreen.multiplyScalar( 1 / _clippedVertex2PositionScreen.w );

						_line = _linePool[ _lineCount ] = _linePool[ _lineCount ] || new THREE.RenderableLine();
						_line.v1.positionScreen.copy( _clippedVertex1PositionScreen );
						_line.v2.positionScreen.copy( _clippedVertex2PositionScreen );

						_line.z = Math.max( _clippedVertex1PositionScreen.z, _clippedVertex2PositionScreen.z );

						_line.materials = object.materials;

						renderList.push( _line );

						_lineCount ++;
					}
				}

			} else if ( object instanceof THREE.Particle ) {

				_vector4.set( object.position.x, object.position.y, object.position.z, 1 );

				_projScreenMatrix.multiplyVector4( _vector4 );

				_vector4.z /= _vector4.w;

				if ( _vector4.z > 0 && _vector4.z < 1 ) {

					_particle = _particlePool[ _particleCount ] = _particlePool[ _particleCount ] || new THREE.RenderableParticle();
					_particle.x = _vector4.x / _vector4.w;
					_particle.y = _vector4.y / _vector4.w;
					_particle.z = _vector4.z;

					_particle.rotation = object.rotation.z;

					_particle.scale.x = object.scale.x * Math.abs( _particle.x - ( _vector4.x + camera.projectionMatrix.n11 ) / ( _vector4.w + camera.projectionMatrix.n14 ) );
					_particle.scale.y = object.scale.y * Math.abs( _particle.y - ( _vector4.y + camera.projectionMatrix.n22 ) / ( _vector4.w + camera.projectionMatrix.n24 ) );

					_particle.materials = object.materials;

					renderList.push( _particle );

					_particleCount ++;

				}

			}

		}

		sort && renderList.sort( painterSort );

		return renderList;

	};

	this.unprojectVector = function ( vector, camera ) {

		var matrix = new THREE.Matrix4();

		matrix.multiply( THREE.Matrix4.makeInvert( camera.matrix ), THREE.Matrix4.makeInvert( camera.projectionMatrix ) );
		matrix.multiplyVector3( vector );

		return vector;

	};

	function painterSort( a, b ) {

		return b.z - a.z;

	}

	function computeFrustum( m ) {

		_frustum[ 0 ] = new THREE.Vector4( m.n41 - m.n11, m.n42 - m.n12, m.n43 - m.n13, m.n44 - m.n14 );
		_frustum[ 1 ] = new THREE.Vector4( m.n41 + m.n11, m.n42 + m.n12, m.n43 + m.n13, m.n44 + m.n14 );
		_frustum[ 2 ] = new THREE.Vector4( m.n41 + m.n21, m.n42 + m.n22, m.n43 + m.n23, m.n44 + m.n24 );
		_frustum[ 3 ] = new THREE.Vector4( m.n41 - m.n21, m.n42 - m.n22, m.n43 - m.n23, m.n44 - m.n24 );
		_frustum[ 4 ] = new THREE.Vector4( m.n41 - m.n31, m.n42 - m.n32, m.n43 - m.n33, m.n44 - m.n34 );
		_frustum[ 5 ] = new THREE.Vector4( m.n41 + m.n31, m.n42 + m.n32, m.n43 + m.n33, m.n44 + m.n34 );

		for ( var i = 0, l = _frustum.length; i < l; i ++ ) {

			var plane = _frustum[ i ];
			plane.divideScalar( Math.sqrt( plane.x * plane.x + plane.y * plane.y + plane.z * plane.z ) );

		}

	}

	function isInFrustum( object ) {

		var d, position = object.position,
		radius = - object.geometry.boundingSphere.radius * Math.max( object.scale.x, Math.max( object.scale.y, object.scale.z ) );

		for ( var i = 0; i < 6; i ++ ) {

			d = _frustum[ i ].x * position.x + _frustum[ i ].y * position.y + _frustum[ i ].z * position.z + _frustum[ i ].w;
			if ( d <= radius ) return false;

		}

		return true;

	}

	function clipLine( s1, s2 ) {

		var alpha1 = 0, alpha2 = 1,

		// Calculate the boundary coordinate of each vertex for the near and far clip planes,
		// Z = -1 and Z = +1, respectively.
		bc1near =  s1.z + s1.w,
		bc2near =  s2.z + s2.w,
		bc1far =  - s1.z + s1.w,
		bc2far =  - s2.z + s2.w;

		if ( bc1near >= 0 && bc2near >= 0 && bc1far >= 0 && bc2far >= 0 ) {

			// Both vertices lie entirely within all clip planes.
			return true;

		} else if ( ( bc1near < 0 && bc2near < 0) || (bc1far < 0 && bc2far < 0 ) ) {

			// Both vertices lie entirely outside one of the clip planes.
			return false;

		} else {

			// The line segment spans at least one clip plane.

			if ( bc1near < 0 ) {

				// v1 lies outside the near plane, v2 inside
				alpha1 = Math.max( alpha1, bc1near / ( bc1near - bc2near ) );

			} else if ( bc2near < 0 ) {

				// v2 lies outside the near plane, v1 inside
				alpha2 = Math.min( alpha2, bc1near / ( bc1near - bc2near ) );

			}

			if ( bc1far < 0 ) {

				// v1 lies outside the far plane, v2 inside
				alpha1 = Math.max( alpha1, bc1far / ( bc1far - bc2far ) );

			} else if ( bc2far < 0 ) {

				// v2 lies outside the far plane, v2 inside
				alpha2 = Math.min( alpha2, bc1far / ( bc1far - bc2far ) );

			}

			if ( alpha2 < alpha1 ) {

				// The line segment spans two boundaries, but is outside both of them.
				// (This can't happen when we're only clipping against just near/far but good
				//  to leave the check here for future usage if other clip planes are added.)
				return false;

			} else {

				// Update the s1 and s2 vertices to match the clipped line segment.
				s1.lerpSelf( s2, alpha1 );
				s2.lerpSelf( s1, 1 - alpha2 );

				return true;

			}

		}

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.DOMRenderer = function () {

	THREE.Renderer.call( this );

	var _renderList = null,
	_projector = new THREE.Projector(),
	_div = document.createElement( 'div' ),
	_width, _height, _widthHalf, _heightHalf;

	this.domElement = _div;

	this.setSize = function ( width, height ) {

		_width = width; _height = height;
		_widthHalf = _width / 2; _heightHalf = _height / 2;

	};

	this.render = function ( scene, camera ) {

		var e, el, m, ml, element, material, dom, v1x, v1y;

		_renderList = _projector.projectScene( scene, camera );

		for ( e = 0, el = _renderList.length; e < el; e++ ) {

			element = _renderList[ e ];

			if ( element instanceof THREE.RenderableParticle ) {

				v1x = element.x * _widthHalf + _widthHalf; v1y = element.y * _heightHalf + _heightHalf;

				for ( m = 0, ml = element.material.length; m < ml; m++ ) {

					material = element.material[ m ];

					if ( material instanceof THREE.ParticleDOMMaterial ) {

						dom = material.domElement;
						dom.style.left = v1x + 'px';
						dom.style.top = v1y + 'px';

					}

				}

			}

		}

	};

}
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.CanvasRenderer = function () {

	var _renderList = null,
	_projector = new THREE.Projector(),

	_canvas = document.createElement( 'canvas' ),
	_canvasWidth, _canvasHeight, _canvasWidthHalf, _canvasHeightHalf,
	_context = _canvas.getContext( '2d' ),

	_clearColor = null,
	_clearOpacity = null,

	_contextGlobalAlpha = 1,
	_contextGlobalCompositeOperation = 0,
	_contextStrokeStyle = null,
	_contextFillStyle = null,
	_contextLineWidth = 1,

	_v1, _v2, _v3,
	_v1x, _v1y, _v2x, _v2y, _v3x, _v3y,

	_color = new THREE.Color(),
	_color1 = new THREE.Color(),
	_color2 = new THREE.Color(),
	_color3 = new THREE.Color(),
	_color4 = new THREE.Color(),

	_near, _far,

	_bitmap,
	_uv1x, _uv1y, _uv2x, _uv2y, _uv3x, _uv3y,

	_clipRect = new THREE.Rectangle(),
	_clearRect = new THREE.Rectangle(),
	_bboxRect = new THREE.Rectangle(),

	_enableLighting = false,
	_light = new THREE.Color(),
	_ambientLight = new THREE.Color(),
	_directionalLights = new THREE.Color(),
	_pointLights = new THREE.Color(),

	_pi2 = Math.PI * 2,
	_vector3 = new THREE.Vector3(), // Needed for PointLight

	_pixelMap, _pixelMapContext, _pixelMapImage, _pixelMapData,
	_gradientMap, _gradientMapContext, _gradientMapQuality = 16;

	_pixelMap = document.createElement( 'canvas' );
	_pixelMap.width = _pixelMap.height = 2;

	_pixelMapContext = _pixelMap.getContext( '2d' );
	_pixelMapContext.fillStyle = 'rgba(0,0,0,1)';
	_pixelMapContext.fillRect( 0, 0, 2, 2 );

	_pixelMapImage = _pixelMapContext.getImageData( 0, 0, 2, 2 );
	_pixelMapData = _pixelMapImage.data;

	_gradientMap = document.createElement( 'canvas' );
	_gradientMap.width = _gradientMap.height = _gradientMapQuality;

	_gradientMapContext = _gradientMap.getContext( '2d' );
	_gradientMapContext.translate( - _gradientMapQuality / 2, - _gradientMapQuality / 2 );
	_gradientMapContext.scale( _gradientMapQuality, _gradientMapQuality );

	_gradientMapQuality --; // Fix UVs

	this.domElement = _canvas;

	this.autoClear = true;
	this.sortObjects = true;
	this.sortElements = true;

	this.setSize = function ( width, height ) {

		_canvasWidth = width;
		_canvasHeight = height;
		_canvasWidthHalf = _canvasWidth / 2;
		_canvasHeightHalf = _canvasHeight / 2;

		_canvas.width = _canvasWidth;
		_canvas.height = _canvasHeight;

		_clipRect.set( - _canvasWidthHalf, - _canvasHeightHalf, _canvasWidthHalf, _canvasHeightHalf );

		_contextGlobalAlpha = 1;
		_contextGlobalCompositeOperation = 0;
		_contextStrokeStyle = null;
		_contextFillStyle = null;
		_contextLineWidth = 1;
	};

	this.setClearColor = function( hex, opacity ) {

		_clearColor = hex !== null ? new THREE.Color( hex ) : null;
		_clearOpacity = opacity;

		_clearRect.set( - _canvasWidthHalf, - _canvasHeightHalf, _canvasWidthHalf, _canvasHeightHalf );
		_context.setTransform( 1, 0, 0, - 1, _canvasWidthHalf, _canvasHeightHalf );
		this.clear();
	};

	this.clear = function () {

		if ( !_clearRect.isEmpty() ) {

			_clearRect.inflate( 1 );
			_clearRect.minSelf( _clipRect );

			if ( _clearColor !== null ) {

				setBlending( THREE.NormalBlending );
				setOpacity( 1 );

				_context.fillStyle = 'rgba(' + Math.floor( _clearColor.r * 255 ) + ',' + Math.floor( _clearColor.g * 255 ) + ',' + Math.floor( _clearColor.b * 255 ) + ',' + _clearOpacity + ')';
				_context.fillRect( _clearRect.getX(), _clearRect.getY(), _clearRect.getWidth(), _clearRect.getHeight() );

			} else {

				_context.clearRect( _clearRect.getX(), _clearRect.getY(), _clearRect.getWidth(), _clearRect.getHeight() );

			}

			_clearRect.empty();

		}
	};

	this.render = function ( scene, camera ) {

		var e, el, element, m, ml, fm, fml, material;

		_context.setTransform( 1, 0, 0, - 1, _canvasWidthHalf, _canvasHeightHalf );

		this.autoClear && this.clear();

		_renderList = _projector.projectScene( scene, camera, this.sortElements );

		/* DEBUG
		_context.fillStyle = 'rgba( 0, 255, 255, 0.5 )';
		_context.fillRect( _clipRect.getX(), _clipRect.getY(), _clipRect.getWidth(), _clipRect.getHeight() );
		*/

		_enableLighting = scene.lights.length > 0;

		if ( _enableLighting ) {

			 calculateLights( scene );

		}

		for ( e = 0, el = _renderList.length; e < el; e++ ) {

			element = _renderList[ e ];

			_bboxRect.empty();

			if ( element instanceof THREE.RenderableParticle ) {

				_v1 = element;
				_v1.x *= _canvasWidthHalf; _v1.y *= _canvasHeightHalf;

				for ( m = 0, ml = element.materials.length; m < ml; m++ ) {

					renderParticle( _v1, element, element.materials[ m ], scene );

				}

			} else if ( element instanceof THREE.RenderableLine ) {

				_v1 = element.v1; _v2 = element.v2;

				_v1.positionScreen.x *= _canvasWidthHalf; _v1.positionScreen.y *= _canvasHeightHalf;
				_v2.positionScreen.x *= _canvasWidthHalf; _v2.positionScreen.y *= _canvasHeightHalf;

				_bboxRect.addPoint( _v1.positionScreen.x, _v1.positionScreen.y );
				_bboxRect.addPoint( _v2.positionScreen.x, _v2.positionScreen.y );

				if ( _clipRect.instersects( _bboxRect ) ) {

					m = 0; ml = element.materials.length;

					while ( m < ml ) {

						renderLine( _v1, _v2, element, element.materials[ m ++ ], scene );

					}

				}


			} else if ( element instanceof THREE.RenderableFace3 ) {

				_v1 = element.v1; _v2 = element.v2; _v3 = element.v3;

				_v1.positionScreen.x *= _canvasWidthHalf; _v1.positionScreen.y *= _canvasHeightHalf;
				_v2.positionScreen.x *= _canvasWidthHalf; _v2.positionScreen.y *= _canvasHeightHalf;
				_v3.positionScreen.x *= _canvasWidthHalf; _v3.positionScreen.y *= _canvasHeightHalf;

				if ( element.overdraw ) {

					expand( _v1.positionScreen, _v2.positionScreen );
					expand( _v2.positionScreen, _v3.positionScreen );
					expand( _v3.positionScreen, _v1.positionScreen );

				}

				_bboxRect.add3Points( _v1.positionScreen.x, _v1.positionScreen.y,
						      _v2.positionScreen.x, _v2.positionScreen.y,
						      _v3.positionScreen.x, _v3.positionScreen.y );

				if ( _clipRect.instersects( _bboxRect ) ) {

					m = 0; ml = element.meshMaterials.length;

					while ( m < ml ) {

						material = element.meshMaterials[ m ++ ];

						if ( material instanceof THREE.MeshFaceMaterial ) {

							fm = 0; fml = element.faceMaterials.length;

							while ( fm < fml ) {

								material = element.faceMaterials[ fm ++ ];
								material && renderFace3( _v1, _v2, _v3, element, material, scene );

							}

							continue;

						}

						renderFace3( _v1, _v2, _v3, element, material, scene );

					}

				}

			}

			/*
			_context.lineWidth = 1;
			_context.strokeStyle = 'rgba( 0, 255, 0, 0.5 )';
			_context.strokeRect( _bboxRect.getX(), _bboxRect.getY(), _bboxRect.getWidth(), _bboxRect.getHeight() );
			*/

			_clearRect.addRectangle( _bboxRect );


		}

		/* DEBUG
		_context.lineWidth = 1;
		_context.strokeStyle = 'rgba( 255, 0, 0, 0.5 )';
		_context.strokeRect( _clearRect.getX(), _clearRect.getY(), _clearRect.getWidth(), _clearRect.getHeight() );
		*/

		_context.setTransform( 1, 0, 0, 1, 0, 0 );

		//

		function calculateLights( scene ) {

			var l, ll, light, lightColor,
			lights = scene.lights;

			_ambientLight.setRGB( 0, 0, 0 );
			_directionalLights.setRGB( 0, 0, 0 );
			_pointLights.setRGB( 0, 0, 0 );

			for ( l = 0, ll = lights.length; l < ll; l ++ ) {

				light = lights[ l ];
				lightColor = light.color;

				if ( light instanceof THREE.AmbientLight ) {

					_ambientLight.r += lightColor.r;
					_ambientLight.g += lightColor.g;
					_ambientLight.b += lightColor.b;

				} else if ( light instanceof THREE.DirectionalLight ) {

					_directionalLights.r += lightColor.r;
					_directionalLights.g += lightColor.g;
					_directionalLights.b += lightColor.b;

				} else if ( light instanceof THREE.PointLight ) {

					_pointLights.r += lightColor.r;
					_pointLights.g += lightColor.g;
					_pointLights.b += lightColor.b;

				}

			}

		}

		function calculateLight( scene, position, normal, color ) {

			var l, ll, light, lightColor, lightIntensity,
			amount, lights = scene.lights;

			for ( l = 0, ll = lights.length; l < ll; l ++ ) {

				light = lights[ l ];
				lightColor = light.color;
				lightIntensity = light.intensity;

				if ( light instanceof THREE.DirectionalLight ) {

					amount = normal.dot( light.position ) * lightIntensity;

					if ( amount > 0 ) {

						color.r += lightColor.r * amount;
						color.g += lightColor.g * amount;
						color.b += lightColor.b * amount;

					}

				} else if ( light instanceof THREE.PointLight ) {

					_vector3.sub( light.position, position );
					_vector3.normalize();

					amount = normal.dot( _vector3 ) * lightIntensity;

					if ( amount > 0 ) {

						color.r += lightColor.r * amount;
						color.g += lightColor.g * amount;
						color.b += lightColor.b * amount;

					}

				}

			}

		}

		function renderParticle ( v1, element, material, scene ) {

			if ( material.opacity == 0 ) return;

			setOpacity( material.opacity );
			setBlending( material.blending );

			var width, height, scaleX, scaleY,
			bitmap, bitmapWidth, bitmapHeight;

			if ( material instanceof THREE.ParticleBasicMaterial ) {

				if ( material.map ) {

					bitmap = material.map;
					bitmapWidth = bitmap.width >> 1;
					bitmapHeight = bitmap.height >> 1;

					scaleX = element.scale.x * _canvasWidthHalf;
					scaleY = element.scale.y * _canvasHeightHalf;

					width = scaleX * bitmapWidth;
					height = scaleY * bitmapHeight;

					// TODO: Rotations break this...

					_bboxRect.set( v1.x - width, v1.y - height, v1.x  + width, v1.y + height );

					if ( !_clipRect.instersects( _bboxRect ) ) {

						return;

					}

					_context.save();
					_context.translate( v1.x, v1.y );
					_context.rotate( - element.rotation );
					_context.scale( scaleX, - scaleY );
					_context.translate( - bitmapWidth, - bitmapHeight );

					_context.drawImage( bitmap, 0, 0 );

					_context.restore();

				}

				/* DEBUG
				_context.beginPath();
				_context.moveTo( v1.x - 10, v1.y );
				_context.lineTo( v1.x + 10, v1.y );
				_context.moveTo( v1.x, v1.y - 10 );
				_context.lineTo( v1.x, v1.y + 10 );
				_context.closePath();
				_context.strokeStyle = 'rgb(255,255,0)';
				_context.stroke();
				*/

			} else if ( material instanceof THREE.ParticleCircleMaterial ) {

				if ( _enableLighting ) {

					_light.r = _ambientLight.r + _directionalLights.r + _pointLights.r;
					_light.g = _ambientLight.g + _directionalLights.g + _pointLights.g;
					_light.b = _ambientLight.b + _directionalLights.b + _pointLights.b;

					_color.r = material.color.r * _light.r;
					_color.g = material.color.g * _light.g;
					_color.b = material.color.b * _light.b;

					_color.updateStyleString();

				} else {

					_color.__styleString = material.color.__styleString;

				}

				width = element.scale.x * _canvasWidthHalf;
				height = element.scale.y * _canvasHeightHalf;

				_bboxRect.set( v1.x - width, v1.y - height, v1.x + width, v1.y + height );

				if ( !_clipRect.instersects( _bboxRect ) ) {

					return;

				}

				setFillStyle( _color.__styleString );

				_context.save();
				_context.translate( v1.x, v1.y );
				_context.rotate( - element.rotation );
				_context.scale( width, height );

				_context.beginPath();
				_context.arc( 0, 0, 1, 0, _pi2, true );
				_context.closePath();

				_context.fill();
				_context.restore();

			}

		}

		function renderLine( v1, v2, element, material, scene ) {

			if ( material.opacity == 0 ) return;

			setOpacity( material.opacity );
			setBlending( material.blending );

			_context.beginPath();
			_context.moveTo( v1.positionScreen.x, v1.positionScreen.y );
			_context.lineTo( v2.positionScreen.x, v2.positionScreen.y );
			_context.closePath();

			if ( material instanceof THREE.LineBasicMaterial ) {

				_color.__styleString = material.color.__styleString;

				setLineWidth( material.linewidth );
				setStrokeStyle( _color.__styleString );

				_context.stroke();
				_bboxRect.inflate( material.linewidth * 2 );

			}

		}

		function renderFace3( v1, v2, v3, element, material, scene ) {

			if ( material.opacity == 0 ) return;

			setOpacity( material.opacity );
			setBlending( material.blending );

			_v1x = v1.positionScreen.x; _v1y = v1.positionScreen.y;
			_v2x = v2.positionScreen.x; _v2y = v2.positionScreen.y;
			_v3x = v3.positionScreen.x; _v3y = v3.positionScreen.y;

			drawTriangle( _v1x, _v1y, _v2x, _v2y, _v3x, _v3y );

			if ( material instanceof THREE.MeshBasicMaterial ) {

				if ( material.map/* && !material.wireframe*/ ) {

					if ( material.map.image.loaded ) {

						if ( material.map.mapping instanceof THREE.UVMapping ) {

							texturePath( _v1x, _v1y, _v2x, _v2y, _v3x, _v3y, material.map.image, element.uvs[ 0 ].u, element.uvs[ 0 ].v, element.uvs[ 1 ].u, element.uvs[ 1 ].v, element.uvs[ 2 ].u, element.uvs[ 2 ].v );

						}

					}

				} else if ( material.env_map ) {

					if ( material.env_map.image.loaded ) {

						if ( material.env_map.mapping instanceof THREE.SphericalReflectionMapping ) {

							var cameraMatrix = camera.matrix;

							_vector3.copy( element.vertexNormalsWorld[ 0 ] );
							_uv1x = ( _vector3.x * cameraMatrix.n11 + _vector3.y * cameraMatrix.n12 + _vector3.z * cameraMatrix.n13 ) * 0.5 + 0.5;
							_uv1y = - ( _vector3.x * cameraMatrix.n21 + _vector3.y * cameraMatrix.n22 + _vector3.z * cameraMatrix.n23 ) * 0.5 + 0.5;

							_vector3.copy( element.vertexNormalsWorld[ 1 ] );
							_uv2x = ( _vector3.x * cameraMatrix.n11 + _vector3.y * cameraMatrix.n12 + _vector3.z * cameraMatrix.n13 ) * 0.5 + 0.5;
							_uv2y = - ( _vector3.x * cameraMatrix.n21 + _vector3.y * cameraMatrix.n22 + _vector3.z * cameraMatrix.n23 ) * 0.5 + 0.5;

							_vector3.copy( element.vertexNormalsWorld[ 2 ] );
							_uv3x = ( _vector3.x * cameraMatrix.n11 + _vector3.y * cameraMatrix.n12 + _vector3.z * cameraMatrix.n13 ) * 0.5 + 0.5;
							_uv3y = - ( _vector3.x * cameraMatrix.n21 + _vector3.y * cameraMatrix.n22 + _vector3.z * cameraMatrix.n23 ) * 0.5 + 0.5;

							texturePath( _v1x, _v1y, _v2x, _v2y, _v3x, _v3y, material.env_map.image, _uv1x, _uv1y, _uv2x, _uv2y, _uv3x, _uv3y );

						}/* else if ( material.env_map.mapping == THREE.RefractionMapping ) {



						}*/

					}

				} else {

					material.wireframe ? strokePath( material.color.__styleString, material.wireframe_linewidth ) : fillPath( material.color.__styleString );

				}

			} else if ( material instanceof THREE.MeshLambertMaterial ) {

				if ( material.map && !material.wireframe ) {

					if ( material.map.mapping instanceof THREE.UVMapping ) {

						texturePath( _v1x, _v1y, _v2x, _v2y, _v3x, _v3y, material.map.image, element.uvs[ 0 ].u, element.uvs[ 0 ].v, element.uvs[ 1 ].u, element.uvs[ 1 ].v, element.uvs[ 2 ].u, element.uvs[ 2 ].v );

					}

					setBlending( THREE.SubtractiveBlending );

				}

				if ( _enableLighting ) {

					if ( !material.wireframe && material.shading == THREE.SmoothShading && element.vertexNormalsWorld.length == 3 ) {

						_color1.r = _color2.r = _color3.r = _ambientLight.r;
						_color1.g = _color2.g = _color3.g = _ambientLight.g;
						_color1.b = _color2.b = _color3.b = _ambientLight.b;

						calculateLight( scene, element.v1.positionWorld, element.vertexNormalsWorld[ 0 ], _color1 );
						calculateLight( scene, element.v2.positionWorld, element.vertexNormalsWorld[ 1 ], _color2 );
						calculateLight( scene, element.v3.positionWorld, element.vertexNormalsWorld[ 2 ], _color3 );

						_color4.r = ( _color2.r + _color3.r ) * 0.5;
						_color4.g = ( _color2.g + _color3.g ) * 0.5;
						_color4.b = ( _color2.b + _color3.b ) * 0.5;

						_bitmap = getGradientTexture( _color1, _color2, _color3, _color4 );

						texturePath( _v1x, _v1y, _v2x, _v2y, _v3x, _v3y, _bitmap, 0, 0, 1, 0, 0, 1 );

					} else {

						_light.r = _ambientLight.r;
						_light.g = _ambientLight.g;
						_light.b = _ambientLight.b;

						calculateLight( scene, element.centroidWorld, element.normalWorld, _light );

						_color.r = material.color.r * _light.r;
						_color.g = material.color.g * _light.g;
						_color.b = material.color.b * _light.b;

						_color.updateStyleString();
						material.wireframe ? strokePath( _color.__styleString, material.wireframe_linewidth ) : fillPath( _color.__styleString );

					}

				} else {

					material.wireframe ? strokePath( material.color.__styleString, material.wireframe_linewidth ) : fillPath( material.color.__styleString );

				}

			} else if ( material instanceof THREE.MeshDepthMaterial ) {

				/*
				_w = 1 - ( material.__2near / (material.__farPlusNear - element.z * material.__farMinusNear ) );
				_color.setRGB( _w, _w, _w );
				*/

				_near = camera.near;
				_far = camera.far;

				_color1.r = _color1.g = _color1.b = 1 - smoothstep( v1.positionScreen.z, _near, _far );
				_color2.r = _color2.g = _color2.b = 1 - smoothstep( v2.positionScreen.z, _near, _far );
				_color3.r = _color3.g = _color3.b = 1 - smoothstep( v3.positionScreen.z, _near, _far );

				_color4.r = ( _color2.r + _color3.r ) * 0.5;
				_color4.g = ( _color2.g + _color3.g ) * 0.5;
				_color4.b = ( _color2.b + _color3.b ) * 0.5;

				_bitmap = getGradientTexture( _color1, _color2, _color3, _color4 );

				texturePath( _v1x, _v1y, _v2x, _v2y, _v3x, _v3y, _bitmap, 0, 0, 1, 0, 0, 1 );

			} else if ( material instanceof THREE.MeshNormalMaterial ) {

				_color.r = normalToComponent( element.normalWorld.x );
				_color.g = normalToComponent( element.normalWorld.y );
				_color.b = normalToComponent( element.normalWorld.z );
				_color.updateStyleString();

				material.wireframe ? strokePath( _color.__styleString, material.wireframe_linewidth ) : fillPath( _color.__styleString );

			}

		}

		function drawTriangle( x0, y0, x1, y1, x2, y2 ) {

			_context.beginPath();
			_context.moveTo( x0, y0 );
			_context.lineTo( x1, y1 );
			_context.lineTo( x2, y2 );
			_context.lineTo( x0, y0 );
			_context.closePath();

		}

		/*
		function drawQuad( x0, y0, x1, y1, x2, y2, x3, y3 ) {

			_context.beginPath();
			_context.moveTo( x0, y0 );
			_context.lineTo( x1, y1 );
			_context.lineTo( x2, y2 );
			_context.lineTo( x3, y3 );
			_context.lineTo( x0, y0 );
			_context.closePath();

		}
		*/

		function strokePath( color, linewidth ) {

			setStrokeStyle( color );
			setLineWidth( linewidth );

			_context.stroke();

			_bboxRect.inflate( linewidth * 2 );

		}

		function fillPath( color ) {

			setFillStyle( color );
			_context.fill();

		}

		function texturePath( x0, y0, x1, y1, x2, y2, bitmap, u0, v0, u1, v1, u2, v2 ) {

			// http://extremelysatisfactorytotalitarianism.com/blog/?p=2120

			var a, b, c, d, e, f, det,
			width = bitmap.width - 1,
			height = bitmap.height - 1;

			u0 *= width; v0 *= height;
			u1 *= width; v1 *= height;
			u2 *= width; v2 *= height;

			x1 -= x0; y1 -= y0;
			x2 -= x0; y2 -= y0;

			u1 -= u0; v1 -= v0;
			u2 -= u0; v2 -= v0;

			det = 1 / ( u1 * v2 - u2 * v1 ),

			a = ( v2 * x1 - v1 * x2 ) * det,
			b = ( v2 * y1 - v1 * y2 ) * det,
			c = ( u1 * x2 - u2 * x1 ) * det,
			d = ( u1 * y2 - u2 * y1 ) * det,

			e = x0 - a * u0 - c * v0,
			f = y0 - b * u0 - d * v0;

			_context.save();
			_context.transform( a, b, c, d, e, f );
			_context.clip();
			_context.drawImage( bitmap, 0, 0 );
			_context.restore();

		}

		function getGradientTexture( color1, color2, color3, color4 ) {

			// http://mrdoob.com/blog/post/710

			var c1r = ~~ ( color1.r * 255 ), c1g = ~~ ( color1.g * 255 ), c1b = ~~ ( color1.b * 255 ),
			c2r = ~~ ( color2.r * 255 ), c2g = ~~ ( color2.g * 255 ), c2b = ~~ ( color2.b * 255 ),
			c3r = ~~ ( color3.r * 255 ), c3g = ~~ ( color3.g * 255 ), c3b = ~~ ( color3.b * 255 ),
			c4r = ~~ ( color4.r * 255 ), c4g = ~~ ( color4.g * 255 ), c4b = ~~ ( color4.b * 255 );

			_pixelMapData[ 0 ] = c1r < 0 ? 0 : c1r > 255 ? 255 : c1r;
			_pixelMapData[ 1 ] = c1g < 0 ? 0 : c1g > 255 ? 255 : c1g;
			_pixelMapData[ 2 ] = c1b < 0 ? 0 : c1b > 255 ? 255 : c1b;

			_pixelMapData[ 4 ] = c2r < 0 ? 0 : c2r > 255 ? 255 : c2r;
			_pixelMapData[ 5 ] = c2g < 0 ? 0 : c2g > 255 ? 255 : c2g;
			_pixelMapData[ 6 ] = c2b < 0 ? 0 : c2b > 255 ? 255 : c2b;

			_pixelMapData[ 8 ] = c3r < 0 ? 0 : c3r > 255 ? 255 : c3r;
			_pixelMapData[ 9 ] = c3g < 0 ? 0 : c3g > 255 ? 255 : c3g;
			_pixelMapData[ 10 ] = c3b < 0 ? 0 : c3b > 255 ? 255 : c3b;

			_pixelMapData[ 12 ] = c4r < 0 ? 0 : c4r > 255 ? 255 : c4r;
			_pixelMapData[ 13 ] = c4g < 0 ? 0 : c4g > 255 ? 255 : c4g;
			_pixelMapData[ 14 ] = c4b < 0 ? 0 : c4b > 255 ? 255 : c4b;

			_pixelMapContext.putImageData( _pixelMapImage, 0, 0 );
			_gradientMapContext.drawImage( _pixelMap, 0, 0 );

			return _gradientMap;

		}

		function smoothstep( value, min, max ) {

			/*
			if ( value <= min ) return 0;
			if ( value >= max ) return 1;
			*/

			var x = ( value - min ) / ( max - min );
			return x * x * ( 3 - 2 * x );

		}

		function normalToComponent( normal ) {

			var component = ( normal + 1 ) * 0.5;
			return component < 0 ? 0 : ( component > 1 ? 1 : component );

		}

		// Hide anti-alias gaps

		function expand( v1, v2 ) {

			var x = v2.x - v1.x, y =  v2.y - v1.y,
			unit = 1 / Math.sqrt( x * x + y * y );

			x *= unit; y *= unit;

			v2.x += x; v2.y += y;
			v1.x -= x; v1.y -= y;

		}

	};

	// Context cached methods.

	function setOpacity( value ) {

		if ( _contextGlobalAlpha != value ) {

			_context.globalAlpha = _contextGlobalAlpha = value;

		}

	}

	function setBlending( value ) {

		if ( _contextGlobalCompositeOperation != value ) {

			switch ( value ) {

				case THREE.NormalBlending:

					_context.globalCompositeOperation = 'source-over';

					break;

				case THREE.AdditiveBlending:

					_context.globalCompositeOperation = 'lighter';

					break;

				case THREE.SubtractiveBlending:

					_context.globalCompositeOperation = 'darker';

					break;

			}

			_contextGlobalCompositeOperation = value;

		}

	}

	function setLineWidth( value ) {

		if ( _contextLineWidth != value ) {

			_context.lineWidth = _contextLineWidth = value;

		}

	}

	function setStrokeStyle( value ) {

		if ( _contextStrokeStyle != value ) {

			_context.strokeStyle = _contextStrokeStyle  = value;

		}

	}

	function setFillStyle( value ) {

		if ( _contextFillStyle != value ) {

			_context.fillStyle = _contextFillStyle = value;

		}

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.SVGRenderer = function () {

	var _renderList = null,
	_projector = new THREE.Projector(),
	_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
	_svgWidth, _svgHeight, _svgWidthHalf, _svgHeightHalf,

	_v1, _v2, _v3, _v4,

	_clipRect = new THREE.Rectangle(),
	_bboxRect = new THREE.Rectangle(),

	_enableLighting = false,
	_color = new THREE.Color( 0xffffff ),
	_light = new THREE.Color( 0xffffff ),
	_ambientLight = new THREE.Color( 0x000000 ),
	_directionalLights = new THREE.Color( 0x000000 ),
	_pointLights = new THREE.Color( 0x000000 ),

	_w, // z-buffer to w-buffer
	_vector3 = new THREE.Vector3(), // Needed for PointLight

	_svgPathPool = [], _svgCirclePool = [], _svgLinePool = [],
	_svgNode, _pathCount, _circleCount, _lineCount,
	_quality = 1;

	this.domElement = _svg;

	this.autoClear = true;
	this.sortObjects = true;
	this.sortElements = true;

	this.setQuality = function( quality ) {

		switch(quality) {

			case "high": _quality = 1; break;
			case "low": _quality = 0; break;

		}

	};

	this.setSize = function( width, height ) {

		_svgWidth = width; _svgHeight = height;
		_svgWidthHalf = _svgWidth / 2; _svgHeightHalf = _svgHeight / 2;

		_svg.setAttribute( 'viewBox', ( - _svgWidthHalf ) + ' ' + ( - _svgHeightHalf ) + ' ' + _svgWidth + ' ' + _svgHeight );
		_svg.setAttribute( 'width', _svgWidth );
		_svg.setAttribute( 'height', _svgHeight );

		_clipRect.set( - _svgWidthHalf, - _svgHeightHalf, _svgWidthHalf, _svgHeightHalf );

	};

	this.clear = function () {

		while ( _svg.childNodes.length > 0 ) {

			_svg.removeChild( _svg.childNodes[ 0 ] );

		}

	};

	this.render = function( scene, camera ) {

		var e, el, m, ml, fm, fml, element, material;

		if ( this.autoClear ) {

			this.clear();

		}

		_renderList = _projector.projectScene( scene, camera, this.sortElements );

		_pathCount = 0; _circleCount = 0; _lineCount = 0;

		_enableLighting = scene.lights.length > 0;

		if ( _enableLighting ) {

			calculateLights( scene );

		}

		for ( e = 0, el = _renderList.length; e < el; e ++ ) {

			element = _renderList[ e ];

			_bboxRect.empty();

			if ( element instanceof THREE.RenderableParticle ) {

				_v1 = element;
				_v1.x *= _svgWidthHalf; _v1.y *= -_svgHeightHalf;

				for ( m = 0, ml = element.materials.length; m < ml; m++ ) {

					material = element.materials[ m ];
					material && renderParticle( _v1, element, material, scene );

				}

			} else if ( element instanceof THREE.RenderableLine ) {

				_v1 = element.v1; _v2 = element.v2;

				_v1.positionScreen.x *= _svgWidthHalf; _v1.positionScreen.y *= - _svgHeightHalf;
				_v2.positionScreen.x *= _svgWidthHalf; _v2.positionScreen.y *= - _svgHeightHalf;

				_bboxRect.addPoint( _v1.positionScreen.x, _v1.positionScreen.y );
				_bboxRect.addPoint( _v2.positionScreen.x, _v2.positionScreen.y );

				if ( !_clipRect.instersects( _bboxRect ) ) {

					continue;

				}

				m = 0; ml = element.materials.length;

				while ( m < ml ) {

					material = element.materials[ m ++ ];
					material && renderLine( _v1, _v2, element, material, scene );

				}

			} else if ( element instanceof THREE.RenderableFace3 ) {

				_v1 = element.v1; _v2 = element.v2; _v3 = element.v3;

				_v1.positionScreen.x *= _svgWidthHalf; _v1.positionScreen.y *= - _svgHeightHalf;
				_v2.positionScreen.x *= _svgWidthHalf; _v2.positionScreen.y *= - _svgHeightHalf;
				_v3.positionScreen.x *= _svgWidthHalf; _v3.positionScreen.y *= - _svgHeightHalf;

				_bboxRect.addPoint( _v1.positionScreen.x, _v1.positionScreen.y );
				_bboxRect.addPoint( _v2.positionScreen.x, _v2.positionScreen.y );
				_bboxRect.addPoint( _v3.positionScreen.x, _v3.positionScreen.y );

				if ( !_clipRect.instersects( _bboxRect ) ) {

					continue;

				}

				m = 0; ml = element.meshMaterials.length;

				while ( m < ml ) {

					material = element.meshMaterials[ m ++ ];

					if ( material instanceof THREE.MeshFaceMaterial ) {

						fm = 0; fml = element.faceMaterials.length;

						while ( fm < fml ) {

							material = element.faceMaterials[ fm ++ ];
							material && renderFace3( _v1, _v2, _v3, element, material, scene );

						}

						continue;

					}

					material && renderFace3( _v1, _v2, _v3, element, material, scene );

				}

			} else if ( element instanceof THREE.RenderableFace4 ) {

				_v1 = element.v1; _v2 = element.v2; _v3 = element.v3; _v4 = element.v4;

				_v1.positionScreen.x *= _svgWidthHalf; _v1.positionScreen.y *= -_svgHeightHalf;
				_v2.positionScreen.x *= _svgWidthHalf; _v2.positionScreen.y *= -_svgHeightHalf;
				_v3.positionScreen.x *= _svgWidthHalf; _v3.positionScreen.y *= -_svgHeightHalf;
				_v4.positionScreen.x *= _svgWidthHalf; _v4.positionScreen.y *= -_svgHeightHalf;

				_bboxRect.addPoint( _v1.positionScreen.x, _v1.positionScreen.y );
				_bboxRect.addPoint( _v2.positionScreen.x, _v2.positionScreen.y );
				_bboxRect.addPoint( _v3.positionScreen.x, _v3.positionScreen.y );
				_bboxRect.addPoint( _v4.positionScreen.x, _v4.positionScreen.y );

				if ( !_clipRect.instersects( _bboxRect) ) {

					continue;

				}

				m = 0; ml = element.meshMaterials.length;

				while ( m < ml ) {

					material = element.meshMaterials[ m ++ ];

					if ( material instanceof THREE.MeshFaceMaterial ) {

						fm = 0; fml = element.faceMaterials.length;

						while ( fm < fml ) {

							material = element.faceMaterials[ fm ++ ];
							material && renderFace4( _v1, _v2, _v3, _v4, element, material, scene );

						}

						continue;

					}

					material && renderFace4( _v1, _v2, _v3, _v4, element, material, scene );

				}

			}

		}

	};

	function calculateLights( scene ) {

		var l, ll, light, lightColor,
		lights = scene.lights;

		_ambientLight.setRGB( 0, 0, 0 );
		_directionalLights.setRGB( 0, 0, 0 );
		_pointLights.setRGB( 0, 0, 0 );

		for ( l = 0, ll = lights.length; l < ll; l++ ) {

			light = lights[ l ];
			lightColor = light.color;

			if ( light instanceof THREE.AmbientLight ) {

				_ambientLight.r += lightColor.r;
				_ambientLight.g += lightColor.g;
				_ambientLight.b += lightColor.b;

			} else if ( light instanceof THREE.DirectionalLight ) {

				_directionalLights.r += lightColor.r;
				_directionalLights.g += lightColor.g;
				_directionalLights.b += lightColor.b;

			} else if ( light instanceof THREE.PointLight ) {

				_pointLights.r += lightColor.r;
				_pointLights.g += lightColor.g;
				_pointLights.b += lightColor.b;

			}

		}

	}

	function calculateFaceLight( scene, element, color ) {

		var l, ll, light, amount;

		for ( l = 0, ll = scene.lights.length; l < ll; l++ ) {

			light = scene.lights[ l ];

			if ( light instanceof THREE.DirectionalLight ) {

				amount = element.normalWorld.dot( light.position ) * light.intensity;

				if ( amount > 0 ) {

					color.r += light.color.r * amount;
					color.g += light.color.g * amount;
					color.b += light.color.b * amount;

				}

			} else if ( light instanceof THREE.PointLight ) {

				_vector3.sub( light.position, element.centroidWorld );
				_vector3.normalize();

				amount = element.normalWorld.dot( _vector3 ) * light.intensity;

				if ( amount > 0 ) {

					color.r += light.color.r * amount;
					color.g += light.color.g * amount;
					color.b += light.color.b * amount;

				}

			}

		}

	}

	function renderParticle( v1, element, material, scene ) {

		_svgNode = getCircleNode( _circleCount++ );
		_svgNode.setAttribute( 'cx', v1.x );
		_svgNode.setAttribute( 'cy', v1.y );
		_svgNode.setAttribute( 'r', element.scale.x * _svgWidthHalf );

		if ( material instanceof THREE.ParticleCircleMaterial ) {

			if ( _enableLighting ) {

				_light.r = _ambientLight.r + _directionalLights.r + _pointLights.r;
				_light.g = _ambientLight.g + _directionalLights.g + _pointLights.g;
				_light.b = _ambientLight.b + _directionalLights.b + _pointLights.b;

				_color.r = material.color.r * _light.r;
				_color.g = material.color.g * _light.g;
				_color.b = material.color.b * _light.b;

				_color.updateStyleString();

			} else {

				_color = material.color;

			}

			_svgNode.setAttribute( 'style', 'fill: ' + _color.__styleString );

		}

		_svg.appendChild( _svgNode );

	}

	function renderLine ( v1, v2, element, material, scene ) {

		_svgNode = getLineNode( _lineCount ++ );

		_svgNode.setAttribute( 'x1', v1.positionScreen.x );
		_svgNode.setAttribute( 'y1', v1.positionScreen.y );
		_svgNode.setAttribute( 'x2', v2.positionScreen.x );
		_svgNode.setAttribute( 'y2', v2.positionScreen.y );

		if ( material instanceof THREE.LineBasicMaterial ) {

			_color.__styleString = material.color.__styleString;

			_svgNode.setAttribute( 'style', 'fill: none; stroke: ' + _color.__styleString + '; stroke-width: ' + material.linewidth + '; stroke-opacity: ' + material.opacity + '; stroke-linecap: ' + material.linecap + '; stroke-linejoin: ' + material.linejoin );

			_svg.appendChild( _svgNode );

		}

	}

	function renderFace3( v1, v2, v3, element, material, scene ) {

		_svgNode = getPathNode( _pathCount ++ );
		_svgNode.setAttribute( 'd', 'M ' + v1.positionScreen.x + ' ' + v1.positionScreen.y + ' L ' + v2.positionScreen.x + ' ' + v2.positionScreen.y + ' L ' + v3.positionScreen.x + ',' + v3.positionScreen.y + 'z' );

		if ( material instanceof THREE.MeshBasicMaterial ) {

			_color.__styleString = material.color.__styleString;

		} else if ( material instanceof THREE.MeshLambertMaterial ) {

			if ( _enableLighting ) {

				_light.r = _ambientLight.r;
				_light.g = _ambientLight.g;
				_light.b = _ambientLight.b;

				calculateFaceLight( scene, element, _light );

				_color.r = material.color.r * _light.r;
				_color.g = material.color.g * _light.g;
				_color.b = material.color.b * _light.b;

				_color.updateStyleString();

			} else {

				_color.__styleString = material.color.__styleString;

			}

		} else if ( material instanceof THREE.MeshDepthMaterial ) {

			_w = 1 - ( material.__2near / (material.__farPlusNear - element.z * material.__farMinusNear) );
			_color.setRGB( _w, _w, _w );

		} else if ( material instanceof THREE.MeshNormalMaterial ) {

			_color.setRGB( normalToComponent( element.normalWorld.x ), normalToComponent( element.normalWorld.y ), normalToComponent( element.normalWorld.z ) );

		}

		if ( material.wireframe ) {

			_svgNode.setAttribute( 'style', 'fill: none; stroke: ' + _color.__styleString + '; stroke-width: ' + material.wireframe_linewidth + '; stroke-opacity: ' + material.opacity + '; stroke-linecap: ' + material.wireframe_linecap + '; stroke-linejoin: ' + material.wireframe_linejoin );

		} else {

			_svgNode.setAttribute( 'style', 'fill: ' + _color.__styleString + '; fill-opacity: ' + material.opacity );

		}

		_svg.appendChild( _svgNode );

	}

	function renderFace4( v1, v2, v3, v4, element, material, scene ) {

		_svgNode = getPathNode( _pathCount ++ );
		_svgNode.setAttribute( 'd', 'M ' + v1.positionScreen.x + ' ' + v1.positionScreen.y + ' L ' + v2.positionScreen.x + ' ' + v2.positionScreen.y + ' L ' + v3.positionScreen.x + ',' + v3.positionScreen.y + ' L ' + v4.positionScreen.x + ',' + v4.positionScreen.y + 'z' );

		if ( material instanceof THREE.MeshBasicMaterial ) {

			_color.__styleString = material.color.__styleString;

		} else if ( material instanceof THREE.MeshLambertMaterial ) {

			if ( _enableLighting ) {

				_light.r = _ambientLight.r;
				_light.g = _ambientLight.g;
				_light.b = _ambientLight.b;

				calculateFaceLight( scene, element, _light );

				_color.r = material.color.r * _light.r;
				_color.g = material.color.g * _light.g;
				_color.b = material.color.b * _light.b;

				_color.updateStyleString();

			} else {

				_color.__styleString = material.color.__styleString;

			}

		} else if ( material instanceof THREE.MeshDepthMaterial ) {

			_w = 1 - ( material.__2near / (material.__farPlusNear - element.z * material.__farMinusNear) );
			_color.setRGB( _w, _w, _w );

		} else if ( material instanceof THREE.MeshNormalMaterial ) {

			_color.setRGB( normalToComponent( element.normalWorld.x ), normalToComponent( element.normalWorld.y ), normalToComponent( element.normalWorld.z ) );

		}

		if ( material.wireframe ) {

			_svgNode.setAttribute( 'style', 'fill: none; stroke: ' + _color.__styleString + '; stroke-width: ' + material.wireframe_linewidth + '; stroke-opacity: ' + material.opacity + '; stroke-linecap: ' + material.wireframe_linecap + '; stroke-linejoin: ' + material.wireframe_linejoin );

		} else {

			_svgNode.setAttribute( 'style', 'fill: ' + _color.__styleString + '; fill-opacity: ' + material.opacity );

		}

		_svg.appendChild( _svgNode );

	}

	function getLineNode( id ) {

		if ( _svgLinePool[ id ] == null ) {

			_svgLinePool[ id ] = document.createElementNS( 'http://www.w3.org/2000/svg', 'line' );

			if ( _quality == 0 ) {

				_svgLinePool[ id ].setAttribute( 'shape-rendering', 'crispEdges' ); //optimizeSpeed

			}

			return _svgLinePool[ id ];

		}

		return _svgLinePool[ id ];

	}

	function getPathNode( id ) {

		if ( _svgPathPool[ id ] == null ) {

			_svgPathPool[ id ] = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );

			if ( _quality == 0 ) {

				_svgPathPool[ id ].setAttribute( 'shape-rendering', 'crispEdges' ); //optimizeSpeed

			}

			return _svgPathPool[ id ];

		}

		return _svgPathPool[ id ];

	}

	function getCircleNode( id ) {

		if ( _svgCirclePool[id] == null ) {

			_svgCirclePool[ id ] = document.createElementNS( 'http://www.w3.org/2000/svg', 'circle' );

			if ( _quality == 0 ) {

				_svgCirclePool[id].setAttribute( 'shape-rendering', 'crispEdges' ); //optimizeSpeed

			}

			return _svgCirclePool[ id ];

		}

		return _svgCirclePool[ id ];

	}

	function normalToComponent( normal ) {

		// https://gist.github.com/665829

		return normal < 0 ? Math.min( ( 1 + normal ) * 0.5, 0.5 ) : 0.5 + Math.min( normal * 0.5, 0.5 );

	}

};
/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 */

THREE.WebGLRenderer = function ( parameters ) {

	// Currently you can use just up to 4 directional / point lights total.
	// Chrome barfs on shader linking when there are more than 4 lights :(

	// The problem comes from shader using too many varying vectors.

	// This is not GPU limitation as the same shader works ok in Firefox
	// and Chrome with "--use-gl=desktop" flag.

	// Difference comes from Chrome on Windows using by default ANGLE,
	// thus going DirectX9 route (while FF uses OpenGL).

	// See http://code.google.com/p/chromium/issues/detail?id=63491

	var _canvas = document.createElement( 'canvas' ), _gl,
	_oldProgram = null,
	_oldFramebuffer = null,
	_modelViewMatrix = new THREE.Matrix4(), _normalMatrix,

	_viewMatrixArray = new Float32Array(16),
	_modelViewMatrixArray = new Float32Array(16),
	_projectionMatrixArray = new Float32Array(16),
	_normalMatrixArray = new Float32Array(9),
	_objectMatrixArray = new Float32Array(16),

	// parameters defaults

	antialias = true,
	clearColor = new THREE.Color( 0x000000 ),
	clearAlpha = 0;

	if ( parameters ) {

		if ( parameters.antialias !== undefined ) antialias = parameters.antialias;
		if ( parameters.clearColor !== undefined ) clearColor.setHex( parameters.clearColor );
		if ( parameters.clearAlpha !== undefined ) clearAlpha = parameters.clearAlpha;

	}

	this.domElement = _canvas;
	this.autoClear = true;

	initGL( antialias, clearColor, clearAlpha );

	this.context = _gl;

	//alert( dumpObject( getGLParams() ) );

	this.lights = {

		ambient: 	 [ 0, 0, 0 ],
		directional: { length: 0, colors: new Array(), positions: new Array() },
		point: 		 { length: 0, colors: new Array(), positions: new Array() }

	};


	this.setSize = function ( width, height ) {

		_canvas.width = width;
		_canvas.height = height;
		_gl.viewport( 0, 0, _canvas.width, _canvas.height );

	};

	this.setClearColor = function( hex, alpha ) {

		var color = new THREE.Color( hex );
		_gl.clearColor( color.r, color.g, color.b, alpha );

	};

	this.clear = function () {

		_gl.clear( _gl.COLOR_BUFFER_BIT | _gl.DEPTH_BUFFER_BIT );

	};


	this.setupLights = function ( program, lights ) {

		var l, ll, light, r = 0, g = 0, b = 0,
			color, position, intensity,

			zlights = this.lights,

			dcolors    = zlights.directional.colors,
			dpositions = zlights.directional.positions,

			pcolors    = zlights.point.colors,
			ppositions = zlights.point.positions,

			dlength = 0,
			plength = 0;

		for ( l = 0, ll = lights.length; l < ll; l++ ) {

			light = lights[ l ];
			color = light.color;
			position = light.position;
			intensity = light.intensity;

			if ( light instanceof THREE.AmbientLight ) {

				r += color.r;
				g += color.g;
				b += color.b;

			} else if ( light instanceof THREE.DirectionalLight ) {

				dcolors[ dlength*3 ]     = color.r * intensity;
				dcolors[ dlength*3 + 1 ] = color.g * intensity;
				dcolors[ dlength*3 + 2 ] = color.b * intensity;

				dpositions[ dlength*3 ]     = position.x;
				dpositions[ dlength*3 + 1 ] = position.y;
				dpositions[ dlength*3 + 2 ] = position.z;

				dlength += 1;

			} else if( light instanceof THREE.PointLight ) {

				pcolors[ plength*3 ]     = color.r * intensity;
				pcolors[ plength*3 + 1 ] = color.g * intensity;
				pcolors[ plength*3 + 2 ] = color.b * intensity;

				ppositions[ plength*3 ]     = position.x;
				ppositions[ plength*3 + 1 ] = position.y;
				ppositions[ plength*3 + 2 ] = position.z;

				plength += 1;

			}

		}

		zlights.point.length = plength;
		zlights.directional.length = dlength;

		zlights.ambient[ 0 ] = r;
		zlights.ambient[ 1 ] = g;
		zlights.ambient[ 2 ] = b;

	};

	this.createParticleBuffers = function( geometry ) {

		geometry.__webGLVertexBuffer = _gl.createBuffer();
		geometry.__webGLFaceBuffer = _gl.createBuffer();

	};

	this.createLineBuffers = function( geometry ) {

		geometry.__webGLVertexBuffer = _gl.createBuffer();
		geometry.__webGLLineBuffer = _gl.createBuffer();

	};

	this.createMeshBuffers = function( geometryChunk ) {

		geometryChunk.__webGLVertexBuffer = _gl.createBuffer();
		geometryChunk.__webGLNormalBuffer = _gl.createBuffer();
		geometryChunk.__webGLTangentBuffer = _gl.createBuffer();
		geometryChunk.__webGLUVBuffer = _gl.createBuffer();
		geometryChunk.__webGLFaceBuffer = _gl.createBuffer();
		geometryChunk.__webGLLineBuffer = _gl.createBuffer();

	};

	this.initLineBuffers = function( geometry ) {

		var nvertices = geometry.vertices.length;

		geometry.__vertexArray = new Float32Array( nvertices * 3 );
		geometry.__lineArray = new Uint16Array( nvertices );

		geometry.__webGLLineCount = nvertices;

	};

	this.initMeshBuffers = function( geometryChunk, object ) {

		var f, fl, nvertices = 0, ntris = 0, nlines = 0,
			obj_faces = object.geometry.faces,
			chunk_faces = geometryChunk.faces;

		for ( f = 0, fl = chunk_faces.length; f < fl; f++ ) {

			fi = chunk_faces[ f ];
			face = obj_faces[ fi ];

			if ( face instanceof THREE.Face3 ) {

				nvertices += 3;
				ntris += 1;
				nlines += 3;

			} else if ( face instanceof THREE.Face4 ) {

				nvertices += 4;
				ntris += 2;
				nlines += 4;

			}

		}

		// TODO: only create arrays for attributes existing in the object

		geometryChunk.__vertexArray  = new Float32Array( nvertices * 3 );
		geometryChunk.__normalArray  = new Float32Array( nvertices * 3 );
		geometryChunk.__tangentArray = new Float32Array( nvertices * 4 );
		geometryChunk.__uvArray = new Float32Array( nvertices * 2 );

		geometryChunk.__faceArray = new Uint16Array( ntris * 3 );
		geometryChunk.__lineArray = new Uint16Array( nlines * 2 );

		geometryChunk.__needsSmoothNormals = bufferNeedsSmoothNormals ( geometryChunk, object );

		geometryChunk.__webGLFaceCount = ntris * 3;
		geometryChunk.__webGLLineCount = nlines * 2;

	};

	this.setMeshBuffers = function ( geometryChunk, object, hint, dirtyVertices, dirtyElements, dirtyUvs, dirtyNormals, dirtyTangents ) {

		var f, fl, fi, face, vertexNormals, faceNormal, normal, uv, v1, v2, v3, v4, t1, t2, t3, t4, m, ml, i,
			vn, uvi,

		vertexIndex = 0,

		offset = 0,
		offset_uv = 0,
		offset_face = 0,
		offset_normal = 0,
		offset_tangent = 0,
		offset_line = 0,

		vertexArray = geometryChunk.__vertexArray,
		uvArray = geometryChunk.__uvArray,
		normalArray = geometryChunk.__normalArray,
		tangentArray = geometryChunk.__tangentArray,

		faceArray = geometryChunk.__faceArray,
		lineArray = geometryChunk.__lineArray,

		needsSmoothNormals = geometryChunk.__needsSmoothNormals,

		geometry = object.geometry,
		vertices = geometry.vertices,
		chunk_faces = geometryChunk.faces,
		obj_faces = geometry.faces,
		obj_uvs = geometry.uvs;

		for ( f = 0, fl = chunk_faces.length; f < fl; f++ ) {

			fi = chunk_faces[ f ];
			face = obj_faces[ fi ];
			uv = obj_uvs[ fi ];

			vertexNormals = face.vertexNormals;
			faceNormal = face.normal;

			if ( face instanceof THREE.Face3 ) {

				if ( dirtyVertices ) {

					v1 = vertices[ face.a ].position;
					v2 = vertices[ face.b ].position;
					v3 = vertices[ face.c ].position;

					vertexArray[ offset ]     = v1.x;
					vertexArray[ offset + 1 ] = v1.y;
					vertexArray[ offset + 2 ] = v1.z;

					vertexArray[ offset + 3 ] = v2.x;
					vertexArray[ offset + 4 ] = v2.y;
					vertexArray[ offset + 5 ] = v2.z;

					vertexArray[ offset + 6 ] = v3.x;
					vertexArray[ offset + 7 ] = v3.y;
					vertexArray[ offset + 8 ] = v3.z;

					offset += 9;

				}

				if ( dirtyTangents && geometry.hasTangents ) {

					t1 = vertices[ face.a ].tangent;
					t2 = vertices[ face.b ].tangent;
					t3 = vertices[ face.c ].tangent;

					tangentArray[ offset_tangent ]     = t1.x;
					tangentArray[ offset_tangent + 1 ] = t1.y;
					tangentArray[ offset_tangent + 2 ] = t1.z;
					tangentArray[ offset_tangent + 3 ] = t1.w;

					tangentArray[ offset_tangent + 4 ] = t2.x;
					tangentArray[ offset_tangent + 5 ] = t2.y;
					tangentArray[ offset_tangent + 6 ] = t2.z;
					tangentArray[ offset_tangent + 7 ] = t2.w;

					tangentArray[ offset_tangent + 8 ]  = t3.x;
					tangentArray[ offset_tangent + 9 ]  = t3.y;
					tangentArray[ offset_tangent + 10 ] = t3.z;
					tangentArray[ offset_tangent + 11 ] = t3.w;

					offset_tangent += 12;

				}

				if( dirtyNormals ) {

					if ( vertexNormals.length == 3 && needsSmoothNormals ) {


						for ( i = 0; i < 3; i ++ ) {

							vn = vertexNormals[ i ];

							normalArray[ offset_normal ]     = vn.x;
							normalArray[ offset_normal + 1 ] = vn.y;
							normalArray[ offset_normal + 2 ] = vn.z;

							offset_normal += 3;

						}

					} else {

						for ( i = 0; i < 3; i ++ ) {

							normalArray[ offset_normal ]     = faceNormal.x;
							normalArray[ offset_normal + 1 ] = faceNormal.y;
							normalArray[ offset_normal + 2 ] = faceNormal.z;

							offset_normal += 3;

						}

					}

				}

				if ( dirtyUvs && uv ) {

					for ( i = 0; i < 3; i ++ ) {

						uvi = uv[ i ];

						uvArray[ offset_uv ]     = uvi.u;
						uvArray[ offset_uv + 1 ] = uvi.v;

						offset_uv += 2;

					}

				}

				if( dirtyElements ) {

					faceArray[ offset_face ] = vertexIndex;
					faceArray[ offset_face + 1 ] = vertexIndex + 1;
					faceArray[ offset_face + 2 ] = vertexIndex + 2;

					offset_face += 3;

					lineArray[ offset_line ]     = vertexIndex;
					lineArray[ offset_line + 1 ] = vertexIndex + 1;

					lineArray[ offset_line + 2 ] = vertexIndex;
					lineArray[ offset_line + 3 ] = vertexIndex + 2;

					lineArray[ offset_line + 4 ] = vertexIndex + 1;
					lineArray[ offset_line + 5 ] = vertexIndex + 2;

					offset_line += 6;

					vertexIndex += 3;

				}


			} else if ( face instanceof THREE.Face4 ) {

				if ( dirtyVertices ) {

					v1 = vertices[ face.a ].position;
					v2 = vertices[ face.b ].position;
					v3 = vertices[ face.c ].position;
					v4 = vertices[ face.d ].position;

					vertexArray[ offset ]     = v1.x;
					vertexArray[ offset + 1 ] = v1.y;
					vertexArray[ offset + 2 ] = v1.z;

					vertexArray[ offset + 3 ] = v2.x;
					vertexArray[ offset + 4 ] = v2.y;
					vertexArray[ offset + 5 ] = v2.z;

					vertexArray[ offset + 6 ] = v3.x;
					vertexArray[ offset + 7 ] = v3.y;
					vertexArray[ offset + 8 ] = v3.z;

					vertexArray[ offset + 9 ] = v4.x;
					vertexArray[ offset + 10 ] = v4.y;
					vertexArray[ offset + 11 ] = v4.z;

					offset += 12;

				}

				if ( dirtyTangents && geometry.hasTangents ) {

					t1 = vertices[ face.a ].tangent;
					t2 = vertices[ face.b ].tangent;
					t3 = vertices[ face.c ].tangent;
					t4 = vertices[ face.d ].tangent;

					tangentArray[ offset_tangent ]     = t1.x;
					tangentArray[ offset_tangent + 1 ] = t1.y;
					tangentArray[ offset_tangent + 2 ] = t1.z;
					tangentArray[ offset_tangent + 3 ] = t1.w;

					tangentArray[ offset_tangent + 4 ] = t2.x;
					tangentArray[ offset_tangent + 5 ] = t2.y;
					tangentArray[ offset_tangent + 6 ] = t2.z;
					tangentArray[ offset_tangent + 7 ] = t2.w;

					tangentArray[ offset_tangent + 8 ] = t3.x;
					tangentArray[ offset_tangent + 9 ] = t3.y;
					tangentArray[ offset_tangent + 10 ] = t3.z;
					tangentArray[ offset_tangent + 11 ] = t3.w;

					tangentArray[ offset_tangent + 12 ] = t4.x;
					tangentArray[ offset_tangent + 13 ] = t4.y;
					tangentArray[ offset_tangent + 14 ] = t4.z;
					tangentArray[ offset_tangent + 15 ] = t4.w;

					offset_tangent += 16;

				}

				if( dirtyNormals ) {

					if ( vertexNormals.length == 4 && needsSmoothNormals ) {

						for ( i = 0; i < 4; i ++ ) {

							vn = vertexNormals[ i ];

							normalArray[ offset_normal ]     = vn.x;
							normalArray[ offset_normal + 1 ] = vn.y;
							normalArray[ offset_normal + 2 ] = vn.z;

							offset_normal += 3;

						}

					} else {

						for ( i = 0; i < 4; i ++ ) {

							normalArray[ offset_normal ]     = faceNormal.x;
							normalArray[ offset_normal + 1 ] = faceNormal.y;
							normalArray[ offset_normal + 2 ] = faceNormal.z;

							offset_normal += 3;

						}

					}

				}

				if ( dirtyUvs && uv ) {

					for ( i = 0; i < 4; i ++ ) {

						uvi = uv[ i ];

						uvArray[ offset_uv ]     = uvi.u;
						uvArray[ offset_uv + 1 ] = uvi.v;

						offset_uv += 2;

					}

				}

				if( dirtyElements ) {

					faceArray[ offset_face ]     = vertexIndex;
					faceArray[ offset_face + 1 ] = vertexIndex + 1;
					faceArray[ offset_face + 2 ] = vertexIndex + 2;

					faceArray[ offset_face + 3 ] = vertexIndex;
					faceArray[ offset_face + 4 ] = vertexIndex + 2;
					faceArray[ offset_face + 5 ] = vertexIndex + 3;

					offset_face += 6;

					lineArray[ offset_line ]     = vertexIndex;
					lineArray[ offset_line + 1 ] = vertexIndex + 1;

					lineArray[ offset_line + 2 ] = vertexIndex;
					lineArray[ offset_line + 3 ] = vertexIndex + 3;

					lineArray[ offset_line + 4 ] = vertexIndex + 1;
					lineArray[ offset_line + 5 ] = vertexIndex + 2;

					lineArray[ offset_line + 6 ] = vertexIndex + 2;
					lineArray[ offset_line + 7 ] = vertexIndex + 3;

					offset_line += 8;

					vertexIndex += 4;

				}

			}

		}

		if ( dirtyVertices ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryChunk.__webGLVertexBuffer );
			_gl.bufferData( _gl.ARRAY_BUFFER, vertexArray, hint );

		}

		if ( dirtyNormals ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryChunk.__webGLNormalBuffer );
			_gl.bufferData( _gl.ARRAY_BUFFER, normalArray, hint );

		}

		if ( dirtyTangents && geometry.hasTangents ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryChunk.__webGLTangentBuffer );
			_gl.bufferData( _gl.ARRAY_BUFFER, tangentArray, hint );

		}

		if ( dirtyUvs && offset_uv > 0 ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryChunk.__webGLUVBuffer );
			_gl.bufferData( _gl.ARRAY_BUFFER, uvArray, hint );

		}

		if( dirtyElements ) {

			_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, geometryChunk.__webGLFaceBuffer );
			_gl.bufferData( _gl.ELEMENT_ARRAY_BUFFER, faceArray, hint );

			_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, geometryChunk.__webGLLineBuffer );
			_gl.bufferData( _gl.ELEMENT_ARRAY_BUFFER, lineArray, hint );

		}

	};

	this.setLineBuffers = function( geometry, hint, dirtyVertices, dirtyElements ) {

		var v, vertex, offset,
			vertices = geometry.vertices,
			vl = vertices.length,

			vertexArray = geometry.__vertexArray,
			lineArray = geometry.__lineArray;

		if ( dirtyVertices ) {

			for ( v = 0; v < vl; v++ ) {

				vertex = vertices[ v ].position;

				offset = v * 3;

				vertexArray[ offset ]     = vertex.x;
				vertexArray[ offset + 1 ] = vertex.y;
				vertexArray[ offset + 2 ] = vertex.z;

			}

		}

		// yeah, this is silly as order of element indices is currently fixed
		// though this could change if some use case arises

		if ( dirtyElements ) {

			for ( v = 0; v < vl; v++ ) {

				lineArray[ v ] = v;

			}

		}

		_gl.bindBuffer( _gl.ARRAY_BUFFER, geometry.__webGLVertexBuffer );
		_gl.bufferData( _gl.ARRAY_BUFFER, vertexArray, hint );

		_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, geometry.__webGLLineBuffer );
		_gl.bufferData( _gl.ELEMENT_ARRAY_BUFFER, lineArray, hint );

	};

	this.setParticleBuffers = function( geometry, hint, dirtyVertices, dirtyElements ) {
	};

	function setMaterialShaders( material, shaders ) {

		material.fragment_shader = shaders.fragment_shader;
		material.vertex_shader = shaders.vertex_shader;
		material.uniforms = Uniforms.clone( shaders.uniforms );

	};

	function refreshUniformsCommon( material, fog ) {

		// premultiply alpha
		material.uniforms.color.value.setRGB( material.color.r * material.opacity, material.color.g * material.opacity, material.color.b * material.opacity );

		// pure color
		//material.uniforms.color.value.setHex( material.color.hex );

		material.uniforms.opacity.value = material.opacity;
		material.uniforms.map.texture = material.map;

		material.uniforms.env_map.texture = material.env_map;
		material.uniforms.reflectivity.value = material.reflectivity;
		material.uniforms.refraction_ratio.value = material.refraction_ratio;
		material.uniforms.combine.value = material.combine;
		material.uniforms.useRefract.value = material.env_map && material.env_map.mapping instanceof THREE.CubeRefractionMapping;

		if ( fog ) {

			material.uniforms.fogColor.value.setHex( fog.color.hex );

			if ( fog instanceof THREE.Fog ) {

				material.uniforms.fogNear.value = fog.near;
				material.uniforms.fogFar.value = fog.far;

			} else if ( fog instanceof THREE.FogExp2 ) {

				material.uniforms.fogDensity.value = fog.density;

			}

		}

	};

	function refreshUniformsLine( material, fog ) {

		material.uniforms.color.value.setRGB( material.color.r * material.opacity, material.color.g * material.opacity, material.color.b * material.opacity );
		material.uniforms.opacity.value = material.opacity;

		if ( fog ) {

			material.uniforms.fogColor.value.setHex( fog.color.hex );

			if ( fog instanceof THREE.Fog ) {

				material.uniforms.fogNear.value = fog.near;
				material.uniforms.fogFar.value = fog.far;

			} else if ( fog instanceof THREE.FogExp2 ) {

				material.uniforms.fogDensity.value = fog.density;

			}

		}

	};

	function refreshUniformsPhong( material ) {

		//material.uniforms.ambient.value.setHex( material.ambient.hex );
		//material.uniforms.specular.value.setHex( material.specular.hex );
		material.uniforms.ambient.value.setRGB( material.ambient.r, material.ambient.g, material.ambient.b );
		material.uniforms.specular.value.setRGB( material.specular.r, material.specular.g, material.specular.b );
		material.uniforms.shininess.value = material.shininess;

	};


	function refreshLights( material, lights ) {

		material.uniforms.enableLighting.value = lights.directional.length + lights.point.length;
		material.uniforms.ambientLightColor.value = lights.ambient;
		material.uniforms.directionalLightColor.value = lights.directional.colors;
		material.uniforms.directionalLightDirection.value = lights.directional.positions;
		material.uniforms.pointLightColor.value = lights.point.colors;
		material.uniforms.pointLightPosition.value = lights.point.positions;

	};

	this.renderBuffer = function ( camera, lights, fog, material, geometryChunk, object ) {

		var program, u, identifiers, attributes, parameters, maxLightCount, linewidth, primitives;

		if ( !material.program ) {

			if ( material instanceof THREE.MeshDepthMaterial ) {

				setMaterialShaders( material, THREE.ShaderLib[ 'depth' ] );

				material.uniforms.mNear.value = camera.near;
				material.uniforms.mFar.value = camera.far;

			} else if ( material instanceof THREE.MeshNormalMaterial ) {

				setMaterialShaders( material, THREE.ShaderLib[ 'normal' ] );

			} else if ( material instanceof THREE.MeshBasicMaterial ) {

				setMaterialShaders( material, THREE.ShaderLib[ 'basic' ] );

				refreshUniformsCommon( material, fog );

			} else if ( material instanceof THREE.MeshLambertMaterial ) {

				setMaterialShaders( material, THREE.ShaderLib[ 'lambert' ] );

				refreshUniformsCommon( material, fog );

			} else if ( material instanceof THREE.MeshPhongMaterial ) {

				setMaterialShaders( material, THREE.ShaderLib[ 'phong' ] );

				refreshUniformsCommon( material, fog );

			} else if ( material instanceof THREE.LineBasicMaterial ) {

				setMaterialShaders( material, THREE.ShaderLib[ 'basic' ] );

				refreshUniformsLine( material, fog );

			}

			// heuristics to create shader parameters according to lights in the scene
			// (not to blow over maxLights budget)

			maxLightCount = allocateLights( lights, 4 );

			parameters = { fog: fog, map: material.map, env_map: material.env_map, maxDirLights: maxLightCount.directional, maxPointLights: maxLightCount.point };
			material.program = buildProgram( material.fragment_shader, material.vertex_shader, parameters );

			identifiers = [ 'viewMatrix', 'modelViewMatrix', 'projectionMatrix', 'normalMatrix', 'objectMatrix', 'cameraPosition' ];
			for( u in material.uniforms ) {

				identifiers.push(u);

			}

			cacheUniformLocations( material.program, identifiers );
			cacheAttributeLocations( material.program, [ "position", "normal", "uv", "tangent" ] );

		}

		program = material.program;

		if( program != _oldProgram ) {

			_gl.useProgram( program );
			_oldProgram = program;

		}

		this.loadCamera( program, camera );
		this.loadMatrices( program );

		if ( material instanceof THREE.MeshPhongMaterial ||
			 material instanceof THREE.MeshLambertMaterial ) {

			this.setupLights( program, lights );
			refreshLights( material, this.lights );

		}

		if ( material instanceof THREE.MeshBasicMaterial ||
			 material instanceof THREE.MeshLambertMaterial ||
			 material instanceof THREE.MeshPhongMaterial ) {

			refreshUniformsCommon( material, fog );

		}

		if ( material instanceof THREE.LineBasicMaterial ) {

			refreshUniformsLine( material, fog );
		}

		if ( material instanceof THREE.MeshPhongMaterial ) {

			refreshUniformsPhong( material );

		}

		setUniforms( program, material.uniforms );

		attributes = program.attributes;

		// vertices

		_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryChunk.__webGLVertexBuffer );
		_gl.vertexAttribPointer( attributes.position, 3, _gl.FLOAT, false, 0, 0 );
		_gl.enableVertexAttribArray( attributes.position );

		// normals

		if ( attributes.normal >= 0 ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryChunk.__webGLNormalBuffer );
			_gl.vertexAttribPointer( attributes.normal, 3, _gl.FLOAT, false, 0, 0 );
			_gl.enableVertexAttribArray( attributes.normal );

		}

		// tangents

		if ( attributes.tangent >= 0 ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryChunk.__webGLTangentBuffer );
			_gl.vertexAttribPointer( attributes.tangent, 4, _gl.FLOAT, false, 0, 0 );
			_gl.enableVertexAttribArray( attributes.tangent );

		}

		// uvs

		if ( attributes.uv >= 0 ) {

			if ( geometryChunk.__webGLUVBuffer ) {

				_gl.bindBuffer( _gl.ARRAY_BUFFER, geometryChunk.__webGLUVBuffer );
				_gl.vertexAttribPointer( attributes.uv, 2, _gl.FLOAT, false, 0, 0 );

				_gl.enableVertexAttribArray( attributes.uv );

			} else {

				_gl.disableVertexAttribArray( attributes.uv );

			}

		}

		// render lines

		if ( material.wireframe || material instanceof THREE.LineBasicMaterial ) {

			linewidth = material.wireframe_linewidth !== undefined ? material.wireframe_linewidth :
						material.linewidth !== undefined ? material.linewidth : 1;

			primitives = material instanceof THREE.LineBasicMaterial && object.type == THREE.LineStrip ? _gl.LINE_STRIP : _gl.LINES;

			_gl.lineWidth( linewidth );
			_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, geometryChunk.__webGLLineBuffer );
			_gl.drawElements( primitives, geometryChunk.__webGLLineCount, _gl.UNSIGNED_SHORT, 0 );

		// render triangles

		} else {

			_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, geometryChunk.__webGLFaceBuffer );
			_gl.drawElements( _gl.TRIANGLES, geometryChunk.__webGLFaceCount, _gl.UNSIGNED_SHORT, 0 );

		}

	};

	this.renderPass = function ( camera, lights, fog, object, geometryChunk, blending, transparent ) {

		var i, l, m, ml, material, meshMaterial;

		for ( m = 0, ml = object.materials.length; m < ml; m++ ) {

			meshMaterial = object.materials[ m ];

			if ( meshMaterial instanceof THREE.MeshFaceMaterial ) {

				for ( i = 0, l = geometryChunk.materials.length; i < l; i++ ) {

					material = geometryChunk.materials[ i ];

					if ( material && material.blending == blending && ( material.opacity < 1.0 == transparent ) ) {

						this.setBlending( material.blending );
						this.renderBuffer( camera, lights, fog, material, geometryChunk, object );

					}

				}

			} else {

				material = meshMaterial;
				if ( material && material.blending == blending && ( material.opacity < 1.0 == transparent ) ) {

					this.setBlending( material.blending );
					this.renderBuffer( camera, lights, fog, material, geometryChunk, object );

				}

			}

		}

	};

	this.render = function( scene, camera, renderTarget, clear ) {

		var o, ol, webGLObject, object, buffer,
			lights = scene.lights,
			fog = scene.fog;

		this.initWebGLObjects( scene );

		setRenderTarget( renderTarget, clear !== undefined ? clear : true );

		if ( this.autoClear ) {

			this.clear();

		}

		camera.autoUpdateMatrix && camera.updateMatrix();

		_viewMatrixArray.set( camera.matrix.flatten() );
		_projectionMatrixArray.set( camera.projectionMatrix.flatten() );

		// opaque pass

		for ( o = 0, ol = scene.__webGLObjects.length; o < ol; o++ ) {

			webGLObject = scene.__webGLObjects[ o ];

			object = webGLObject.object;
			buffer = webGLObject.buffer;

			if ( object.visible ) {

				this.setupMatrices( object, camera );
				this.renderPass( camera, lights, fog, object, buffer, THREE.NormalBlending, false );

			}

		}

		// transparent pass

		for ( o = 0, ol = scene.__webGLObjects.length; o < ol; o++ ) {

			webGLObject = scene.__webGLObjects[ o ];

			object = webGLObject.object;
			buffer = webGLObject.buffer;

			if ( object.visible ) {

				this.setupMatrices( object, camera );

				if( object.doubleSided ) {

					_gl.disable( _gl.CULL_FACE );

				} else {

					_gl.enable( _gl.CULL_FACE );

					if( object.flipSided ) {

						_gl.frontFace( _gl.CW );

					}
					else {

						_gl.frontFace( _gl.CCW );

					}

				}

				// opaque blended materials

				this.renderPass( camera, lights, fog, object, buffer, THREE.AdditiveBlending, false );
				this.renderPass( camera, lights, fog, object, buffer, THREE.SubtractiveBlending, false );

				// transparent blended materials

				this.renderPass( camera, lights, fog, object, buffer, THREE.AdditiveBlending, true );
				this.renderPass( camera, lights, fog, object, buffer, THREE.SubtractiveBlending, true );

				// transparent normal materials

				this.renderPass( camera, lights, fog, object, buffer, THREE.NormalBlending, true );

			}

		}

		// Generate mipmap if we're using any kind of mipmap filtering

		if ( renderTarget && renderTarget.min_filter !== THREE.NearestFilter && renderTarget.min_filter !== THREE.LinearFilter ) {

			updateRenderTargetMipmap( renderTarget );

		}

	};

	this.initWebGLObjects = function( scene ) {

		function add_buffer( objmap, id, buffer, object ) {

			if ( objmap[ id ] == undefined ) {

				scene.__webGLObjects.push( { buffer: buffer, object: object } );
				objmap[ id ] = 1;

			}

		};

		var o, ol, object, g, geometry, geometryChunk, objmap;

		if ( !scene.__webGLObjects ) {

			scene.__webGLObjects = [];
			scene.__webGLObjectsMap = {};

		}

		for ( o = 0, ol = scene.objects.length; o < ol; o++ ) {

			object = scene.objects[ o ];
			geometry = object.geometry;

			if ( scene.__webGLObjectsMap[ object.id ] == undefined ) {

				scene.__webGLObjectsMap[ object.id ] = {};

			}

			objmap = scene.__webGLObjectsMap[ object.id ];

			if ( object instanceof THREE.Mesh ) {

				// create separate VBOs per geometry chunk

				for ( g in geometry.geometryChunks ) {

					geometryChunk = geometry.geometryChunks[ g ];

					// initialise VBO on the first access

					if( ! geometryChunk.__webGLVertexBuffer ) {

						this.createMeshBuffers( geometryChunk );
						this.initMeshBuffers( geometryChunk, object );

						geometry.__dirtyVertices = true;
						geometry.__dirtyElements = true;
						geometry.__dirtyUvs = true;
						geometry.__dirtyNormals = true;
						geometry.__dirtyTangents = true;

					}

					if( geometry.__dirtyVertices || geometry.__dirtyElements || geometry.__dirtyUvs ) {

						this.setMeshBuffers( geometryChunk, object, _gl.DYNAMIC_DRAW,
										 geometry.__dirtyVertices, geometry.__dirtyElements, geometry.__dirtyUvs,
										 geometry.__dirtyNormals, geometry.__dirtyTangents );


					}

					// create separate wrapper per each use of VBO

					add_buffer( objmap, g, geometryChunk, object );

				}

				geometry.__dirtyVertices = false;
				geometry.__dirtyElements = false;
				geometry.__dirtyUvs = false;
				geometry.__dirtyNormals = false;
				geometry.__dirtyTangents = false;

			} else if ( object instanceof THREE.Line ) {


				if( ! geometry.__webGLVertexBuffer ) {

					this.createLineBuffers( geometry );
					this.initLineBuffers( geometry );

					geometry.__dirtyVertices = true;
					geometry.__dirtyElements = true;

				}

				if( geometry.__dirtyVertices ) {

					this.setLineBuffers( geometry, _gl.DYNAMIC_DRAW, geometry.__dirtyVertices, geometry.__dirtyElements );

				}

				add_buffer( objmap, 0, geometry, object );

				geometry.__dirtyVertices = false;
				geometry.__dirtyElements = false;

			} else if ( object instanceof THREE.ParticleSystem ) {

				if( ! geometry.__webGLVertexBuffer ) {

					this.createParticleBuffers( geometry );

				}

				add_buffer( objmap, 0, geometry, object );


			}/*else if ( object instanceof THREE.Particle ) {

			}*/

		}

	};

	this.removeObject = function ( scene, object ) {

		var o, ol, zobject;

		for ( o = scene.__webGLObjects.length - 1; o >= 0; o-- ) {

			zobject = scene.__webGLObjects[ o ].object;

			if ( object == zobject ) {

				scene.__webGLObjects.splice( o, 1 );

			}

		}

	};

	this.setupMatrices = function ( object, camera ) {

		object.autoUpdateMatrix && object.updateMatrix();

		_modelViewMatrix.multiply( camera.matrix, object.matrix );
		_modelViewMatrixArray.set( _modelViewMatrix.flatten() );

		_normalMatrix = THREE.Matrix4.makeInvert3x3( _modelViewMatrix ).transpose();
		_normalMatrixArray.set( _normalMatrix.m );

		_objectMatrixArray.set( object.matrix.flatten() );

	};

	this.loadMatrices = function ( program ) {

		_gl.uniformMatrix4fv( program.uniforms.viewMatrix, false, _viewMatrixArray );
		_gl.uniformMatrix4fv( program.uniforms.modelViewMatrix, false, _modelViewMatrixArray );
		_gl.uniformMatrix4fv( program.uniforms.projectionMatrix, false, _projectionMatrixArray );
		_gl.uniformMatrix3fv( program.uniforms.normalMatrix, false, _normalMatrixArray );
		_gl.uniformMatrix4fv( program.uniforms.objectMatrix, false, _objectMatrixArray );

	};

	this.loadCamera = function( program, camera ) {

		_gl.uniform3f( program.uniforms.cameraPosition, camera.position.x, camera.position.y, camera.position.z );

	};

	this.setBlending = function( blending ) {

		switch ( blending ) {

			case THREE.AdditiveBlending:

				_gl.blendEquation( _gl.FUNC_ADD );
				_gl.blendFunc( _gl.ONE, _gl.ONE );

				break;

			case THREE.SubtractiveBlending:

				//_gl.blendEquation( _gl.FUNC_SUBTRACT );
				_gl.blendFunc( _gl.DST_COLOR, _gl.ZERO );

				break;

			default:

				_gl.blendEquation( _gl.FUNC_ADD );
				_gl.blendFunc( _gl.ONE, _gl.ONE_MINUS_SRC_ALPHA );

				break;
		}

	};

	this.setFaceCulling = function ( cullFace, frontFace ) {

		if ( cullFace ) {

			if ( !frontFace || frontFace == "ccw" ) {

				_gl.frontFace( _gl.CCW );

			} else {

				_gl.frontFace( _gl.CW );

			}

			if( cullFace == "back" ) {

				_gl.cullFace( _gl.BACK );

			} else if( cullFace == "front" ) {

				_gl.cullFace( _gl.FRONT );

			} else {

				_gl.cullFace( _gl.FRONT_AND_BACK );

			}

			_gl.enable( _gl.CULL_FACE );

		} else {

			_gl.disable( _gl.CULL_FACE );

		}

	};

	this.supportsVertexTextures = function() {

		return maxVertexTextures() > 0;

	};

	function maxVertexTextures() {

		return _gl.getParameter( _gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS );

	};

	function initGL( antialias, clearColor, clearAlpha ) {

		try {

			_gl = _canvas.getContext( 'experimental-webgl', { antialias: antialias } );

		} catch(e) { }

		if (!_gl) {

			alert("WebGL not supported");
			throw "cannot create webgl context";

		}

		_gl.clearColor( 0, 0, 0, 1 );
		_gl.clearDepth( 1 );

		_gl.enable( _gl.DEPTH_TEST );
		_gl.depthFunc( _gl.LEQUAL );

		_gl.frontFace( _gl.CCW );
		_gl.cullFace( _gl.BACK );
		_gl.enable( _gl.CULL_FACE );

		_gl.enable( _gl.BLEND );
		_gl.blendFunc( _gl.ONE, _gl.ONE_MINUS_SRC_ALPHA );
		_gl.clearColor( clearColor.r, clearColor.g, clearColor.b, clearAlpha );

	};

	function buildProgram( fragment_shader, vertex_shader, parameters ) {

		var program = _gl.createProgram(),

		prefix_fragment = [
			"#ifdef GL_ES",
			"precision highp float;",
			"#endif",

			"#define MAX_DIR_LIGHTS " + parameters.maxDirLights,
			"#define MAX_POINT_LIGHTS " + parameters.maxPointLights,

			parameters.fog ? "#define USE_FOG" : "",
			parameters.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "",

			parameters.map ? "#define USE_MAP" : "",
			parameters.env_map ? "#define USE_ENVMAP" : "",

			"uniform mat4 viewMatrix;",
			"uniform vec3 cameraPosition;",
			""
		].join("\n"),

		prefix_vertex = [
			maxVertexTextures() > 0 ? "#define VERTEX_TEXTURES" : "",

			"#define MAX_DIR_LIGHTS " + parameters.maxDirLights,
			"#define MAX_POINT_LIGHTS " + parameters.maxPointLights,

			parameters.map ? "#define USE_MAP" : "",
			parameters.env_map ? "#define USE_ENVMAP" : "",

			"uniform mat4 objectMatrix;",
			"uniform mat4 modelViewMatrix;",
			"uniform mat4 projectionMatrix;",
			"uniform mat4 viewMatrix;",
			"uniform mat3 normalMatrix;",
			"uniform vec3 cameraPosition;",
			"attribute vec3 position;",
			"attribute vec3 normal;",
			"attribute vec2 uv;",
			""
		].join("\n");

		_gl.attachShader( program, getShader( "fragment", prefix_fragment + fragment_shader ) );
		_gl.attachShader( program, getShader( "vertex", prefix_vertex + vertex_shader ) );

		_gl.linkProgram( program );

		if ( !_gl.getProgramParameter( program, _gl.LINK_STATUS ) ) {

			alert( "Could not initialise shaders\n"+
					"VALIDATE_STATUS: " + _gl.getProgramParameter( program, _gl.VALIDATE_STATUS ) + ", gl error [" + _gl.getError() + "]" );

			//console.log( prefix_fragment + fragment_shader );
			//console.log( prefix_vertex + vertex_shader );

		}

		program.uniforms = {};
		program.attributes = {};

		return program;

	};

	function setUniforms( program, uniforms ) {

		var u, uniform, value, type, location, texture;

		for( u in uniforms ) {

			location = program.uniforms[u];
			if ( !location ) continue;

			uniform = uniforms[u];

			type = uniform.type;
			value = uniform.value;

			if( type == "i" ) {

				_gl.uniform1i( location, value );

			} else if( type == "f" ) {

				_gl.uniform1f( location, value );

			} else if( type == "fv1" ) {

				_gl.uniform1fv( location, value );

			} else if( type == "fv" ) {

				_gl.uniform3fv( location, value );

			} else if( type == "v2" ) {

				_gl.uniform2f( location, value.x, value.y );

			} else if( type == "v3" ) {

				_gl.uniform3f( location, value.x, value.y, value.z );

			} else if( type == "c" ) {

				_gl.uniform3f( location, value.r, value.g, value.b );

			} else if( type == "t" ) {

				_gl.uniform1i( location, value );

				texture = uniform.texture;

				if ( !texture ) continue;

				if ( texture.image instanceof Array && texture.image.length == 6 ) {

					setCubeTexture( texture, value );

				} else {

					setTexture( texture, value );

				}

			}

		}

	};

	function setCubeTexture( texture, slot ) {

		if ( texture.image.length == 6 ) {

			if ( !texture.image.__webGLTextureCube &&
				 !texture.image.__cubeMapInitialized && texture.image.loadCount == 6 ) {

				texture.image.__webGLTextureCube = _gl.createTexture();

				_gl.bindTexture( _gl.TEXTURE_CUBE_MAP, texture.image.__webGLTextureCube );

				_gl.texParameteri( _gl.TEXTURE_CUBE_MAP, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE );
				_gl.texParameteri( _gl.TEXTURE_CUBE_MAP, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE );

				_gl.texParameteri( _gl.TEXTURE_CUBE_MAP, _gl.TEXTURE_MAG_FILTER, _gl.LINEAR );
				_gl.texParameteri( _gl.TEXTURE_CUBE_MAP, _gl.TEXTURE_MIN_FILTER, _gl.LINEAR_MIPMAP_LINEAR );

				for ( var i = 0; i < 6; ++i ) {

					_gl.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, _gl.RGBA, _gl.RGBA, _gl.UNSIGNED_BYTE, texture.image[ i ] );

				}

				_gl.generateMipmap( _gl.TEXTURE_CUBE_MAP );

				_gl.bindTexture( _gl.TEXTURE_CUBE_MAP, null );

				texture.image.__cubeMapInitialized = true;

			}

			_gl.activeTexture( _gl.TEXTURE0 + slot );
			_gl.bindTexture( _gl.TEXTURE_CUBE_MAP, texture.image.__webGLTextureCube );

		}

	};

	function setTexture( texture, slot ) {

		if ( !texture.__webGLTexture && texture.image.loaded ) {

			texture.__webGLTexture = _gl.createTexture();
			_gl.bindTexture( _gl.TEXTURE_2D, texture.__webGLTexture );
			_gl.texImage2D( _gl.TEXTURE_2D, 0, _gl.RGBA, _gl.RGBA, _gl.UNSIGNED_BYTE, texture.image );

			_gl.texParameteri( _gl.TEXTURE_2D, _gl.TEXTURE_WRAP_S, paramThreeToGL( texture.wrap_s ) );
			_gl.texParameteri( _gl.TEXTURE_2D, _gl.TEXTURE_WRAP_T, paramThreeToGL( texture.wrap_t ) );

			_gl.texParameteri( _gl.TEXTURE_2D, _gl.TEXTURE_MAG_FILTER, paramThreeToGL( texture.mag_filter ) );
			_gl.texParameteri( _gl.TEXTURE_2D, _gl.TEXTURE_MIN_FILTER, paramThreeToGL( texture.min_filter ) );
			_gl.generateMipmap( _gl.TEXTURE_2D );
			_gl.bindTexture( _gl.TEXTURE_2D, null );

		}

		_gl.activeTexture( _gl.TEXTURE0 + slot );
		_gl.bindTexture( _gl.TEXTURE_2D, texture.__webGLTexture );

	};

	function setRenderTarget( renderTexture, clear ) {

		if ( renderTexture && !renderTexture.__webGLFramebuffer ) {

			renderTexture.__webGLFramebuffer = _gl.createFramebuffer();
			renderTexture.__webGLRenderbuffer = _gl.createRenderbuffer();
			renderTexture.__webGLTexture = _gl.createTexture();

			// Setup renderbuffer

			_gl.bindRenderbuffer( _gl.RENDERBUFFER, renderTexture.__webGLRenderbuffer );
			_gl.renderbufferStorage( _gl.RENDERBUFFER, _gl.DEPTH_COMPONENT16, renderTexture.width, renderTexture.height );

			// Setup texture

			_gl.bindTexture( _gl.TEXTURE_2D, renderTexture.__webGLTexture );
			_gl.texParameteri( _gl.TEXTURE_2D, _gl.TEXTURE_WRAP_S, paramThreeToGL( renderTexture.wrap_s ) );
			_gl.texParameteri( _gl.TEXTURE_2D, _gl.TEXTURE_WRAP_T, paramThreeToGL( renderTexture.wrap_t ) );
			_gl.texParameteri( _gl.TEXTURE_2D, _gl.TEXTURE_MAG_FILTER, paramThreeToGL( renderTexture.mag_filter ) );
			_gl.texParameteri( _gl.TEXTURE_2D, _gl.TEXTURE_MIN_FILTER, paramThreeToGL( renderTexture.min_filter ) );
			_gl.texImage2D( _gl.TEXTURE_2D, 0, paramThreeToGL( renderTexture.format ), renderTexture.width, renderTexture.height, 0, paramThreeToGL( renderTexture.format ), paramThreeToGL( renderTexture.type ), null );

			// Setup framebuffer

			_gl.bindFramebuffer( _gl.FRAMEBUFFER, renderTexture.__webGLFramebuffer );
			_gl.framebufferTexture2D( _gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_2D, renderTexture.__webGLTexture, 0 );
			_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderTexture.__webGLRenderbuffer );

			// Release everything

			_gl.bindTexture( _gl.TEXTURE_2D, null );
			_gl.bindRenderbuffer( _gl.RENDERBUFFER, null );
			_gl.bindFramebuffer( _gl.FRAMEBUFFER, null);

		}

		var framebuffer, width, height;

		if ( renderTexture ) {

			framebuffer = renderTexture.__webGLFramebuffer;
			width = renderTexture.width;
			height = renderTexture.height;

		} else {

			framebuffer = null;
			width = _canvas.width;
			height = _canvas.height;

		}

		if( framebuffer != _oldFramebuffer ) {

			_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );
			_gl.viewport( 0, 0, width, height );

			if ( clear ) {

				_gl.clear( _gl.COLOR_BUFFER_BIT | _gl.DEPTH_BUFFER_BIT );

			}

			_oldFramebuffer = framebuffer;

		}

	};

	function updateRenderTargetMipmap( renderTarget ) {

		_gl.bindTexture( _gl.TEXTURE_2D, renderTarget.__webGLTexture );
		_gl.generateMipmap( _gl.TEXTURE_2D );
		_gl.bindTexture( _gl.TEXTURE_2D, null );

	};

	function cacheUniformLocations( program, identifiers ) {

		var i, l, id;

		for( i = 0, l = identifiers.length; i < l; i++ ) {

			id = identifiers[ i ];
			program.uniforms[ id ] = _gl.getUniformLocation( program, id );

		}

	};

	function cacheAttributeLocations( program, identifiers ) {

		var i, l, id;

		for( i = 0, l = identifiers.length; i < l; i++ ) {

			id = identifiers[ i ];
			program.attributes[ id ] = _gl.getAttribLocation( program, id );

		}

	};

	function getShader( type, string ) {

		var shader;

		if ( type == "fragment" ) {

			shader = _gl.createShader( _gl.FRAGMENT_SHADER );

		} else if ( type == "vertex" ) {

			shader = _gl.createShader( _gl.VERTEX_SHADER );

		}

		_gl.shaderSource( shader, string );
		_gl.compileShader( shader );

		if ( !_gl.getShaderParameter( shader, _gl.COMPILE_STATUS ) ) {

			alert( _gl.getShaderInfoLog( shader ) );
			return null;

		}

		return shader;

	};

	function paramThreeToGL( p ) {

		switch ( p ) {

			case THREE.RepeatWrapping: return _gl.REPEAT; break;
			case THREE.ClampToEdgeWrapping: return _gl.CLAMP_TO_EDGE; break;
			case THREE.MirroredRepeatWrapping: return _gl.MIRRORED_REPEAT; break;

			case THREE.NearestFilter: return _gl.NEAREST; break;
			case THREE.NearestMipMapNearestFilter: return _gl.NEAREST_MIPMAP_NEAREST; break;
			case THREE.NearestMipMapLinearFilter: return _gl.NEAREST_MIPMAP_LINEAR; break;

			case THREE.LinearFilter: return _gl.LINEAR; break;
			case THREE.LinearMipMapNearestFilter: return _gl.LINEAR_MIPMAP_NEAREST; break;
			case THREE.LinearMipMapLinearFilter: return _gl.LINEAR_MIPMAP_LINEAR; break;

			case THREE.ByteType: return _gl.BYTE; break;
			case THREE.UnsignedByteType: return _gl.UNSIGNED_BYTE; break;
			case THREE.ShortType: return _gl.SHORT; break;
			case THREE.UnsignedShortType: return _gl.UNSIGNED_SHORT; break;
			case THREE.IntType: return _gl.INT; break;
			case THREE.UnsignedShortType: return _gl.UNSIGNED_INT; break;
			case THREE.FloatType: return _gl.FLOAT; break;

			case THREE.AlphaFormat: return _gl.ALPHA; break;
			case THREE.RGBFormat: return _gl.RGB; break;
			case THREE.RGBAFormat: return _gl.RGBA; break;
			case THREE.LuminanceFormat: return _gl.LUMINANCE; break;
			case THREE.LuminanceAlphaFormat: return _gl.LUMINANCE_ALPHA; break;

		}

		return 0;

	};

	function materialNeedsSmoothNormals( material ) {

		return material && material.shading != undefined && material.shading == THREE.SmoothShading;

	};

	function bufferNeedsSmoothNormals( geometryChunk, object ) {

		var m, ml, i, l, meshMaterial, needsSmoothNormals = false;

		for ( m = 0, ml = object.materials.length; m < ml; m++ ) {

			meshMaterial = object.materials[ m ];

			if ( meshMaterial instanceof THREE.MeshFaceMaterial ) {

				for ( i = 0, l = geometryChunk.materials.length; i < l; i++ ) {

					if ( materialNeedsSmoothNormals( geometryChunk.materials[ i ] ) ) {

						needsSmoothNormals = true;
						break;

					}

				}

			} else {

				if ( materialNeedsSmoothNormals( meshMaterial ) ) {

					needsSmoothNormals = true;
					break;

				}

			}

			if ( needsSmoothNormals ) break;

		}

		return needsSmoothNormals;

	};

	function allocateLights( lights, maxLights ) {

		var l, ll, light, dirLights, pointLights, maxDirLights, maxPointLights;
		dirLights = pointLights = maxDirLights = maxPointLights = 0;

		for ( l = 0, ll = lights.length; l < ll; l++ ) {

			light = lights[ l ];

			if ( light instanceof THREE.DirectionalLight ) dirLights++;
			if ( light instanceof THREE.PointLight ) pointLights++;

		}

		if ( ( pointLights + dirLights ) <= maxLights ) {

			maxDirLights = dirLights;
			maxPointLights = pointLights;

		} else {

			maxDirLights = Math.ceil( maxLights * dirLights / ( pointLights + dirLights ) );
			maxPointLights = maxLights - maxDirLights;

		}

		return { 'directional' : maxDirLights, 'point' : maxPointLights };

	};

	/* DEBUG
	function getGLParams() {

		var params  = {

			'MAX_VARYING_VECTORS': _gl.getParameter( _gl.MAX_VARYING_VECTORS ),
			'MAX_VERTEX_ATTRIBS': _gl.getParameter( _gl.MAX_VERTEX_ATTRIBS ),

			'MAX_TEXTURE_IMAGE_UNITS': _gl.getParameter( _gl.MAX_TEXTURE_IMAGE_UNITS ),
			'MAX_VERTEX_TEXTURE_IMAGE_UNITS': _gl.getParameter( _gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS ),
			'MAX_COMBINED_TEXTURE_IMAGE_UNITS' : _gl.getParameter( _gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS ),

			'MAX_VERTEX_UNIFORM_VECTORS': _gl.getParameter( _gl.MAX_VERTEX_UNIFORM_VECTORS ),
			'MAX_FRAGMENT_UNIFORM_VECTORS': _gl.getParameter( _gl.MAX_FRAGMENT_UNIFORM_VECTORS )
		}

		return params;
	};

	function dumpObject( obj ) {

		var p, str = "";
		for ( p in obj ) {

			str += p + ": " + obj[p] + "\n";

		}

		return str;
	}
	*/

};

THREE.Snippets = {

	fog_pars_fragment: [

	"#ifdef USE_FOG",

		"uniform vec3 fogColor;",

		"#ifdef FOG_EXP2",
			"uniform float fogDensity;",
		"#else",
			"uniform float fogNear;",
			"uniform float fogFar;",
		"#endif",

	"#endif"

	].join("\n"),

	fog_fragment: [

	"#ifdef USE_FOG",

		"float depth = gl_FragCoord.z / gl_FragCoord.w;",

		"#ifdef FOG_EXP2",
			"const float LOG2 = 1.442695;",
			"float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );",
			"fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );",
		"#else",
			"float fogFactor = smoothstep( fogNear, fogFar, depth );",
		"#endif",

		"gl_FragColor = mix( gl_FragColor, vec4( fogColor, 1.0 ), fogFactor );",

	"#endif"

	].join("\n"),

	envmap_pars_fragment: [

	"#ifdef USE_ENVMAP",

		"varying vec3 vReflect;",
		"uniform float reflectivity;",
		"uniform samplerCube env_map;",
		"uniform int combine;",

	"#endif"

	].join("\n"),

	envmap_fragment: [

	"#ifdef USE_ENVMAP",

		"cubeColor = textureCube( env_map, vec3( -vReflect.x, vReflect.yz ) );",

		"if ( combine == 1 ) {",

			"gl_FragColor = mix( gl_FragColor, cubeColor, reflectivity );",

		"} else {",

			"gl_FragColor = gl_FragColor * cubeColor;",

		"}",

	"#endif"

	].join("\n"),

	envmap_pars_vertex: [

	"#ifdef USE_ENVMAP",

		"varying vec3 vReflect;",
		"uniform float refraction_ratio;",
		"uniform bool useRefract;",

	"#endif"

	].join("\n"),

	envmap_vertex : [

	"#ifdef USE_ENVMAP",

		"vec4 mPosition = objectMatrix * vec4( position, 1.0 );",
		"vec3 nWorld = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;",

		"if ( useRefract ) {",

			"vReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refraction_ratio );",

		"} else {",

			"vReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );",

		"}",

	"#endif"

	].join("\n"),

	map_pars_fragment: [

	"#ifdef USE_MAP",

		"varying vec2 vUv;",
		"uniform sampler2D map;",

	"#endif"

	].join("\n"),

	map_pars_vertex: [

	"#ifdef USE_MAP",

		"varying vec2 vUv;",

	"#endif"

	].join("\n"),

	map_fragment: [

	"#ifdef USE_MAP",

		"mapColor = texture2D( map, vUv );",

	"#endif"

	].join("\n"),

	map_vertex: [

	"#ifdef USE_MAP",

		"vUv = uv;",

	"#endif"

	].join("\n"),

	lights_pars_vertex: [

	"uniform bool enableLighting;",
	"uniform vec3 ambientLightColor;",

	"#if MAX_DIR_LIGHTS > 0",

		"uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];",
		"uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];",

	"#endif",

	"#if MAX_POINT_LIGHTS > 0",

		"uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];",
		"uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];",

		"#ifdef PHONG",
			"varying vec3 vPointLightVector[ MAX_POINT_LIGHTS ];",
		"#endif",

	"#endif"

	].join("\n"),

	lights_vertex: [

	"if ( !enableLighting ) {",

		"vLightWeighting = vec3( 1.0 );",

	"} else {",

		"vLightWeighting = ambientLightColor;",

		"#if MAX_DIR_LIGHTS > 0",

		"for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {",

			"vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );",
			"float directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );",
			"vLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;",

		"}",

		"#endif",

		"#if MAX_POINT_LIGHTS > 0",

		"for( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {",

			"vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );",
			"vec3 pointLightVector = normalize( lPosition.xyz - mvPosition.xyz );",
			"float pointLightWeighting = max( dot( transformedNormal, pointLightVector ), 0.0 );",
			"vLightWeighting += pointLightColor[ i ] * pointLightWeighting;",

			"#ifdef PHONG",
				"vPointLightVector[ i ] = pointLightVector;",
			"#endif",

		"}",

		"#endif",

	"}"

	].join("\n"),

	lights_pars_fragment: [

	"#if MAX_DIR_LIGHTS > 0",
		"uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];",
	"#endif",

	"#if MAX_POINT_LIGHTS > 0",
		"varying vec3 vPointLightVector[ MAX_POINT_LIGHTS ];",
	"#endif",

	"varying vec3 vViewPosition;",
	"varying vec3 vNormal;"

	].join("\n"),

	lights_fragment: [

	"vec3 normal = normalize( vNormal );",
	"vec3 viewPosition = normalize( vViewPosition );",

	"vec4 mSpecular = vec4( specular, opacity );",

	"#if MAX_POINT_LIGHTS > 0",

		"vec4 pointDiffuse  = vec4( 0.0 );",
		"vec4 pointSpecular = vec4( 0.0 );",

		"for( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {",

			"vec3 pointVector = normalize( vPointLightVector[ i ] );",
			"vec3 pointHalfVector = normalize( vPointLightVector[ i ] + vViewPosition );",

			"float pointDotNormalHalf = dot( normal, pointHalfVector );",
			"float pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );",

			"float pointSpecularWeight = 0.0;",
			"if ( pointDotNormalHalf >= 0.0 )",
				"pointSpecularWeight = pow( pointDotNormalHalf, shininess );",

			"pointDiffuse  += mColor * pointDiffuseWeight;",
			"pointSpecular += mSpecular * pointSpecularWeight;",

			"}",

	"#endif",

	"#if MAX_DIR_LIGHTS > 0",

		"vec4 dirDiffuse  = vec4( 0.0 );",
		"vec4 dirSpecular = vec4( 0.0 );" ,

		"for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {",

			"vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );",

			"vec3 dirVector = normalize( lDirection.xyz );",
			"vec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );",

			"float dirDotNormalHalf = dot( normal, dirHalfVector );",

			"float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );",

			"float dirSpecularWeight = 0.0;",
			"if ( dirDotNormalHalf >= 0.0 )",
				"dirSpecularWeight = pow( dirDotNormalHalf, shininess );",

			"dirDiffuse  += mColor * dirDiffuseWeight;",
			"dirSpecular += mSpecular * dirSpecularWeight;",

		"}",

	"#endif",

	"vec4 totalLight = vec4( ambient, opacity );",

	"#if MAX_DIR_LIGHTS > 0",
		"totalLight += dirDiffuse + dirSpecular;",
	"#endif",

	"#if MAX_POINT_LIGHTS > 0",
		"totalLight += pointDiffuse + pointSpecular;",
	"#endif"

	].join("\n")

};

THREE.UniformsLib = {

	common: {

	"color"   : { type: "c", value: new THREE.Color( 0xeeeeee ) },
	"opacity" : { type: "f", value: 1 },
	"map"     : { type: "t", value: 0, texture: null },

	"env_map" 		  : { type: "t", value: 1, texture: null },
	"useRefract"	  : { type: "i", value: 0 },
	"reflectivity"    : { type: "f", value: 1 },
	"refraction_ratio": { type: "f", value: 0.98 },
	"combine"		  : { type: "i", value: 0 },

	"fogDensity": { type: "f", value: 0.00025 },
	"fogNear"	: { type: "f", value: 1 },
	"fogFar"	: { type: "f", value: 2000 },
	"fogColor"	: { type: "c", value: new THREE.Color( 0xffffff ) }

	},

	lights: {

	"enableLighting" 			: { type: "i", value: 1 },
	"ambientLightColor" 		: { type: "fv", value: [] },
	"directionalLightDirection" : { type: "fv", value: [] },
	"directionalLightColor" 	: { type: "fv", value: [] },
	"pointLightPosition"		: { type: "fv", value: [] },
	"pointLightColor"			: { type: "fv", value: [] }

	}

};

THREE.ShaderLib = {

	'depth': {

		uniforms: { "mNear": { type: "f", value: 1.0 },
					"mFar" : { type: "f", value: 2000.0 } },

		fragment_shader: [

			"uniform float mNear;",
			"uniform float mFar;",

			"void main() {",

				"float depth = gl_FragCoord.z / gl_FragCoord.w;",
				"float color = 1.0 - smoothstep( mNear, mFar, depth );",
				"gl_FragColor = vec4( vec3( color ), 1.0 );",

			"}"

		].join("\n"),

		vertex_shader: [

			"void main() {",

				"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"}"

		].join("\n")

	},

	'normal': {

		uniforms: { },

		fragment_shader: [

			"varying vec3 vNormal;",

			"void main() {",

				"gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, 1.0 );",

			"}"

		].join("\n"),

		vertex_shader: [

			"varying vec3 vNormal;",

			"void main() {",

				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
				"vNormal = normalize( normalMatrix * normal );",

				"gl_Position = projectionMatrix * mvPosition;",

			"}"

		].join("\n")

	},

	'basic': {

		uniforms: THREE.UniformsLib[ "common" ],

		fragment_shader: [

			"uniform vec3 color;",
			"uniform float opacity;",

			THREE.Snippets[ "map_pars_fragment" ],
			THREE.Snippets[ "envmap_pars_fragment" ],
			THREE.Snippets[ "fog_pars_fragment" ],

			"void main() {",

				"vec4 mColor = vec4( color, opacity );",
				"vec4 mapColor = vec4( 1.0 );",
				"vec4 cubeColor = vec4( 1.0 );",

				THREE.Snippets[ "map_fragment" ],

				"gl_FragColor = mColor * mapColor;",

				THREE.Snippets[ "envmap_fragment" ],
				THREE.Snippets[ "fog_fragment" ],

			"}"

		].join("\n"),

		vertex_shader: [

			THREE.Snippets[ "map_pars_vertex" ],
			THREE.Snippets[ "envmap_pars_vertex" ],

			"void main() {",

				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",

				THREE.Snippets[ "map_vertex" ],
				THREE.Snippets[ "envmap_vertex" ],

				"gl_Position = projectionMatrix * mvPosition;",

			"}"

		].join("\n")

	},

	'lambert': {

		uniforms: Uniforms.merge( [ THREE.UniformsLib[ "common" ],
									THREE.UniformsLib[ "lights" ] ] ),

		fragment_shader: [

			"uniform vec3 color;",
			"uniform float opacity;",

			"varying vec3 vLightWeighting;",

			THREE.Snippets[ "map_pars_fragment" ],
			THREE.Snippets[ "envmap_pars_fragment" ],
			THREE.Snippets[ "fog_pars_fragment" ],

			"void main() {",

				"vec4 mColor = vec4( color, opacity );",
				"vec4 mapColor = vec4( 1.0 );",
				"vec4 cubeColor = vec4( 1.0 );",

				THREE.Snippets[ "map_fragment" ],

				"gl_FragColor =  mColor * mapColor * vec4( vLightWeighting, 1.0 );",

				THREE.Snippets[ "envmap_fragment" ],
				THREE.Snippets[ "fog_fragment" ],

			"}"

		].join("\n"),

		vertex_shader: [

			"varying vec3 vLightWeighting;",

			THREE.Snippets[ "map_pars_vertex" ],
			THREE.Snippets[ "envmap_pars_vertex" ],
			THREE.Snippets[ "lights_pars_vertex" ],

			"void main() {",

				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",

				THREE.Snippets[ "map_vertex" ],
				THREE.Snippets[ "envmap_vertex" ],

				"vec3 transformedNormal = normalize( normalMatrix * normal );",

				THREE.Snippets[ "lights_vertex" ],

				"gl_Position = projectionMatrix * mvPosition;",

			"}"

		].join("\n")

	},

	'phong': {

		uniforms: Uniforms.merge( [ THREE.UniformsLib[ "common" ],
									THREE.UniformsLib[ "lights" ],

									{ "ambient"  : { type: "c", value: new THREE.Color( 0x050505 ) },
									  "specular" : { type: "c", value: new THREE.Color( 0x111111 ) },
									  "shininess": { type: "f", value: 30 }
									}

								] ),

		fragment_shader: [

			"uniform vec3 color;",
			"uniform float opacity;",

			"uniform vec3 ambient;",
			"uniform vec3 specular;",
			"uniform float shininess;",

			"varying vec3 vLightWeighting;",

			THREE.Snippets[ "map_pars_fragment" ],
			THREE.Snippets[ "envmap_pars_fragment" ],
			THREE.Snippets[ "fog_pars_fragment" ],
			THREE.Snippets[ "lights_pars_fragment" ],

			"void main() {",

				"vec4 mColor = vec4( color, opacity );",
				"vec4 mapColor = vec4( 1.0 );",
				"vec4 cubeColor = vec4( 1.0 );",

				THREE.Snippets[ "map_fragment" ],
				THREE.Snippets[ "lights_fragment" ],

				"gl_FragColor =  mapColor * totalLight * vec4( vLightWeighting, 1.0 );",

				THREE.Snippets[ "envmap_fragment" ],
				THREE.Snippets[ "fog_fragment" ],

			"}"

		].join("\n"),

		vertex_shader: [

			"#define PHONG",

			"varying vec3 vLightWeighting;",
			"varying vec3 vViewPosition;",
			"varying vec3 vNormal;",

			THREE.Snippets[ "map_pars_vertex" ],
			THREE.Snippets[ "envmap_pars_vertex" ],
			THREE.Snippets[ "lights_pars_vertex" ],

			"void main() {",

				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",

				THREE.Snippets[ "map_vertex" ],
				THREE.Snippets[ "envmap_vertex" ],

				"#ifndef USE_ENVMAP",
					"vec4 mPosition = objectMatrix * vec4( position, 1.0 );",
				"#endif",

				"vViewPosition = cameraPosition - mPosition.xyz;",

				"vec3 transformedNormal = normalize( normalMatrix * normal );",
				"vNormal = transformedNormal;",

				THREE.Snippets[ "lights_vertex" ],

				"gl_Position = projectionMatrix * mvPosition;",

			"}"

		].join("\n")

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.RenderableObject = function () {

	this.object = null;
	this.z = null;

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.RenderableFace3 = function () {

	this.z = null;

	this.v1 = new THREE.Vertex();
	this.v2 = new THREE.Vertex();
	this.v3 = new THREE.Vertex();

	this.centroidWorld = new THREE.Vector3();
	this.centroidScreen = new THREE.Vector3();

	this.normalWorld = new THREE.Vector3();
	this.vertexNormalsWorld = [];

	this.meshMaterials = null;
	this.faceMaterials = null;
	this.overdraw = false;
	this.uvs = [ null, null, null ];

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.RenderableParticle = function () {

	this.x = null;
	this.y = null;
	this.z = null;

	this.rotation = null;
	this.scale = new THREE.Vector2();

	this.materials = null;

};
/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.RenderableLine = function () {

	this.z = null;

	this.v1 = new THREE.Vertex();
	this.v2 = new THREE.Vertex();

	this.materials = null;

};
var GeometryUtils = {

	merge: function ( geometry1, object2 /* mesh | geometry */ ) {

		var isMesh = object2 instanceof THREE.Mesh,
		vertexPosition = geometry1.vertices.length,
		facePosition = geometry1.faces.length,
		uvPosition = geometry1.uvs.length,
		geometry2 = isMesh ? object2.geometry : object2,
		vertices1 = geometry1.vertices,
		vertices2 = geometry2.vertices,
		faces1 = geometry1.faces,
		faces2 = geometry2.faces,
		uvs1 = geometry1.uvs,
		uvs2 = geometry2.uvs;

		isMesh && object2.autoUpdateMatrix && object2.updateMatrix();

		for ( var i = 0, il = vertices2.length; i < il; i ++ ) {

			var vertex = vertices2[ i ];

			var vertexCopy = new THREE.Vertex( vertex.position.clone() );

			isMesh && object2.matrix.multiplyVector3( vertexCopy.position );

			vertices1.push( vertexCopy );

		}

		for ( i = 0, il = faces2.length; i < il; i ++ ) {

			var face = faces2[ i ], faceCopy, normal,
			faceVertexNormals = face.vertexNormals;

			if ( face instanceof THREE.Face3 ) {

				faceCopy = new THREE.Face3( face.a + vertexPosition, face.b + vertexPosition, face.c + vertexPosition );

			} else if ( face instanceof THREE.Face4 ) {

				faceCopy = new THREE.Face4( face.a + vertexPosition, face.b + vertexPosition, face.c + vertexPosition, face.d + vertexPosition );

			}

			faceCopy.centroid.copy( face.centroid );
			faceCopy.normal.copy( face.normal );

			for ( var j = 0, jl = faceVertexNormals.length; j < jl; j ++ ) {

				normal = faceVertexNormals[ j ];
				faceCopy.vertexNormals.push( normal.clone() );

			}

			faceCopy.materials = face.materials.slice();

			faces1.push( faceCopy );

		}

		for ( i = 0, il = uvs2.length; i < il; i ++ ) {

			var uv = uvs2[ i ], uvCopy = [];

			for ( var j = 0, jl = uv.length; j < jl; j ++ ) {

				uvCopy.push( new THREE.UV( uv[ j ].u, uv[ j ].v ) );

			}

			uvs1.push( uvCopy );

		}

	}

};
var ImageUtils = {

	loadTexture: function ( path, mapping ) {

		var image = new Image();
		image.onload = function () { this.loaded = true; };
		image.src = path;

		return new THREE.Texture( image, mapping );

	},

	loadArray: function ( array ) {

		var i, l, images = [];

		images.loadCount = 0;

		for ( i = 0, l = array.length; i < l; ++i ) {

			images[ i ] = new Image();
			images[ i ].loaded = 0;
			images[ i ].onload = function () { images.loadCount += 1; this.loaded = true; };
			images[ i ].src = array[ i ];

		}

		return images;

	}

};
var SceneUtils = {

	addMesh: function ( scene, geometry, scale, x, y, z, rx, ry, rz, material ) {

		var mesh = new THREE.Mesh( geometry, material );
		mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
		mesh.position.x = x;
		mesh.position.y = y;
		mesh.position.z = z;
		mesh.rotation.x = rx;
		mesh.rotation.y = ry;
		mesh.rotation.z = rz;
		scene.addObject( mesh );

		return mesh;

	},

	addPanoramaCubeWebGL: function ( scene, size, textureCube ) {

		var shader = ShaderUtils.lib["cube"];
		shader.uniforms["tCube"].texture = textureCube;

		var material = new THREE.MeshShaderMaterial( { fragment_shader: shader.fragment_shader,
													   vertex_shader: shader.vertex_shader,
													   uniforms: shader.uniforms
													} ),

			mesh = new THREE.Mesh( new Cube( size, size, size, 1, 1, null, true ), material );

		scene.addObject( mesh );

		return mesh;

	},

	addPanoramaCube: function( scene, size, images ) {

		var materials = [], mesh;
		materials.push( new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[0] ) } ) );
		materials.push( new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[1] ) } ) );
		materials.push( new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[2] ) } ) );
		materials.push( new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[3] ) } ) );
		materials.push( new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[4] ) } ) );
		materials.push( new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[5] ) } ) );

		mesh = new THREE.Mesh( new Cube( size, size, size, 1, 1, materials, true ), new THREE.MeshFaceMaterial() );
		scene.addObject( mesh );

		return mesh;

	},

	addPanoramaCubePlanes: function ( scene, size, images ) {


		var hsize = size/2, plane = new Plane( size, size ), pi2 = Math.PI/2, pi = Math.PI;

		SceneUtils.addMesh( scene, plane, 1,      0,     0,  -hsize,  0,      0,  0, new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[5] ) } ) );
		SceneUtils.addMesh( scene, plane, 1, -hsize,     0,       0,  0,    pi2,  0, new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[0] ) } ) );
		SceneUtils.addMesh( scene, plane, 1,  hsize,     0,       0,  0,   -pi2,  0, new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[1] ) } ) );
		SceneUtils.addMesh( scene, plane, 1,     0,  hsize,       0,  pi2,    0, pi, new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[2] ) } ) );
		SceneUtils.addMesh( scene, plane, 1,     0, -hsize,       0, -pi2,    0, pi, new THREE.MeshBasicMaterial( { map: new THREE.Texture( images[3] ) } ) );

	}

};
var ShaderUtils = {

	lib: { 'fresnel': {

			uniforms: {

			"mRefractionRatio": { type: "f", value: 1.02 },
			"mFresnelBias": { type: "f", value: 0.1 },
			"mFresnelPower": { type: "f", value: 2.0 },
			"mFresnelScale": { type: "f", value: 1.0 },
			"tCube": { type: "t", value: 1, texture: null }

			},

			fragment_shader: [

			"uniform samplerCube tCube;",

			"varying vec3 vReflect;",
			"varying vec3 vRefract[3];",
			"varying float vReflectionFactor;",

			"void main() {",
				"vec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );",
				"vec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );",

				"refractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;",
				"refractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;",
				"refractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;",
				"refractedColor.a = 1.0;",

				"gl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );",
			"}"

			].join("\n"),

			vertex_shader: [

			"uniform float mRefractionRatio;",
			"uniform float mFresnelBias;",
			"uniform float mFresnelScale;",
			"uniform float mFresnelPower;",

			"varying vec3 vReflect;",
			"varying vec3 vRefract[3];",
			"varying float vReflectionFactor;",

			"void main(void) {",
				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
				"vec4 mPosition = objectMatrix * vec4( position, 1.0 );",

				"vec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );",

				"vec3 I = mPosition.xyz - cameraPosition;",

				"vReflect = reflect( I, nWorld );",
				"vRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );",
				"vRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );",
				"vRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );",
				"vReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );",

				"gl_Position = projectionMatrix * mvPosition;",
			"}"

			].join("\n")

		},

		'normal' : {

			uniforms: {

			"enableAO": { type: "i", value: 0 },
			"enableDiffuse": { type: "i", value: 0 },

			"tDiffuse": { type: "t", value: 0, texture: null },
			"tNormal": { type: "t", value: 2, texture: null },
			"tAO": { type: "t", value: 3, texture: null },

			"uNormalScale": { type: "f", value: 1.0 },

			"tDisplacement": { type: "t", value: 4, texture: null },
			"uDisplacementBias": { type: "f", value: -0.5 },
			"uDisplacementScale": { type: "f", value: 2.5 },

			"uPointLightPos": { type: "v3", value: new THREE.Vector3() },
			"uPointLightColor": { type: "c", value: new THREE.Color( 0xeeeeee ) },

			"uDirLightPos":	{ type: "v3", value: new THREE.Vector3() },
			"uDirLightColor": { type: "c", value: new THREE.Color( 0xeeeeee ) },

			"uAmbientLightColor": { type: "c", value: new THREE.Color( 0x050505 ) },

			"uDiffuseColor": { type: "c", value: new THREE.Color( 0xeeeeee ) },
			"uSpecularColor": { type: "c", value: new THREE.Color( 0x111111 ) },
			"uAmbientColor": { type: "c", value: new THREE.Color( 0x050505 ) },
			"uShininess": { type: "f", value: 30 }

			},

			fragment_shader: [

			"uniform vec3 uDirLightPos;",

			"uniform vec3 uAmbientLightColor;",
			"uniform vec3 uDirLightColor;",
			"uniform vec3 uPointLightColor;",

			"uniform vec3 uAmbientColor;",
			"uniform vec3 uDiffuseColor;",
			"uniform vec3 uSpecularColor;",
			"uniform float uShininess;",

			"uniform bool enableDiffuse;",
			"uniform bool enableAO;",

			"uniform sampler2D tDiffuse;",
			"uniform sampler2D tNormal;",
			"uniform sampler2D tAO;",

			"uniform float uNormalScale;",

			"varying vec3 vTangent;",
			"varying vec3 vBinormal;",
			"varying vec3 vNormal;",
			"varying vec2 vUv;",

			"varying vec3 vPointLightVector;",
			"varying vec3 vViewPosition;",

			"void main() {",

				"vec3 diffuseTex = vec3( 1.0, 1.0, 1.0 );",
				"vec3 aoTex = vec3( 1.0, 1.0, 1.0 );",

				"vec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;",
				"normalTex.xy *= uNormalScale;",
				"normalTex = normalize( normalTex );",

				"if( enableDiffuse )",
					"diffuseTex = texture2D( tDiffuse, vUv ).xyz;",

				"if( enableAO )",
					"aoTex = texture2D( tAO, vUv ).xyz;",

				"mat3 tsb = mat3( vTangent, vBinormal, vNormal );",
				"vec3 finalNormal = tsb * normalTex;",

				"vec3 normal = normalize( finalNormal );",
				"vec3 viewPosition = normalize( vViewPosition );",

				// point light

				"vec4 pointDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );",
				"vec4 pointSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );",

				"vec3 pointVector = normalize( vPointLightVector );",
				"vec3 pointHalfVector = normalize( vPointLightVector + vViewPosition );",

				"float pointDotNormalHalf = dot( normal, pointHalfVector );",
				"float pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );",

				"float pointSpecularWeight = 0.0;",
				"if ( pointDotNormalHalf >= 0.0 )",
					"pointSpecularWeight = pow( pointDotNormalHalf, uShininess );",

				"pointDiffuse  += vec4( uDiffuseColor, 1.0 ) * pointDiffuseWeight;",
				"pointSpecular += vec4( uSpecularColor, 1.0 ) * pointSpecularWeight;",

				// directional light

				"vec4 dirDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );",
				"vec4 dirSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );",

				"vec4 lDirection = viewMatrix * vec4( uDirLightPos, 0.0 );",

				"vec3 dirVector = normalize( lDirection.xyz );",
				"vec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );",

				"float dirDotNormalHalf = dot( normal, dirHalfVector );",
				"float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );",

				"float dirSpecularWeight = 0.0;",
				"if ( dirDotNormalHalf >= 0.0 )",
					"dirSpecularWeight = pow( dirDotNormalHalf, uShininess );",

				"dirDiffuse  += vec4( uDiffuseColor, 1.0 ) * dirDiffuseWeight;",
				"dirSpecular += vec4( uSpecularColor, 1.0 ) * dirSpecularWeight;",

				// all lights contribution summation

				"vec4 totalLight = vec4( uAmbientLightColor * uAmbientColor, 1.0 );",
				"totalLight += vec4( uDirLightColor, 1.0 ) * ( dirDiffuse + dirSpecular );",
				"totalLight += vec4( uPointLightColor, 1.0 ) * ( pointDiffuse + pointSpecular );",

				"gl_FragColor = vec4( totalLight.xyz * aoTex * diffuseTex, 1.0 );",

			"}"
			].join("\n"),

			vertex_shader: [

			"attribute vec4 tangent;",

			"uniform vec3 uPointLightPos;",

			"#ifdef VERTEX_TEXTURES",

				"uniform sampler2D tDisplacement;",
				"uniform float uDisplacementScale;",
				"uniform float uDisplacementBias;",

			"#endif",

			"varying vec3 vTangent;",
			"varying vec3 vBinormal;",
			"varying vec3 vNormal;",
			"varying vec2 vUv;",

			"varying vec3 vPointLightVector;",
			"varying vec3 vViewPosition;",

			"void main() {",

				"vec4 mPosition = objectMatrix * vec4( position, 1.0 );",
				"vViewPosition = cameraPosition - mPosition.xyz;",

				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
				"vNormal = normalize( normalMatrix * normal );",

				// tangent and binormal vectors

				"vTangent = normalize( normalMatrix * tangent.xyz );",

				"vBinormal = cross( vNormal, vTangent ) * tangent.w;",
				"vBinormal = normalize( vBinormal );",

				"vUv = uv;",

				// point light

				"vec4 lPosition = viewMatrix * vec4( uPointLightPos, 1.0 );",
				"vPointLightVector = normalize( lPosition.xyz - mvPosition.xyz );",

				// displacement mapping

				"#ifdef VERTEX_TEXTURES",

					"vec3 dv = texture2D( tDisplacement, uv ).xyz;",
					"float df = uDisplacementScale * dv.x + uDisplacementBias;",
					"vec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;",
					"gl_Position = projectionMatrix * displacedPosition;",

				"#else",

					"gl_Position = projectionMatrix * mvPosition;",

				"#endif",

			"}"

			].join("\n")

		},

		'cube': {

			uniforms: { "tCube": { type: "t", value: 1, texture: null } },

			vertex_shader: [

				"varying vec3 vViewPosition;",

				"void main() {",

					"vec4 mPosition = objectMatrix * vec4( position, 1.0 );",
					"vViewPosition = cameraPosition - mPosition.xyz;",

					"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

				"}"

			].join("\n"),

			fragment_shader: [

				"uniform samplerCube tCube;",

				"varying vec3 vViewPosition;",

				"void main() {",

					"vec3 wPos = cameraPosition - vViewPosition;",
					"gl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );",

				"}"

			].join("\n")

		},

		'basic': {

			uniforms: {},

			vertex_shader: [

				"void main() {",

					"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

				"}"

			].join("\n"),

			fragment_shader: [

				"void main() {",

					"gl_FragColor = vec4(1.0, 0.0, 0.0, 0.5);",

				"}"

			].join("\n")

		}

	}

};
/**
 * @author mr.doob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Cube.as
 */

var Cube = function ( width, height, depth, segments_width, segments_height, materials, flipped, sides ) {

	THREE.Geometry.call( this );

	var scope = this,
	width_half = width / 2,
	height_half = height / 2,
	depth_half = depth / 2,
	flip = flipped ? - 1 : 1;

	if ( materials !== undefined ) {

		if ( materials instanceof Array ) {

			this.materials = materials;

		} else {

			this.materials = [];

			for ( var i = 0; i < 6; i ++ ) {

				this.materials.push( [ materials ] );

			}

		}

	} else {

		this.materials = [];

	}

	this.sides = { px: true, nx: true, py: true, ny: true, pz: true, nz: true };

	if( sides != undefined ) {

		for( var s in sides ) {

			if ( this.sides[ s ] != undefined ) {

				this.sides[ s ] = sides[ s ];

			}

		}

	}

	this.sides.px && buildPlane( 'z', 'y',   1 * flip, - 1, depth, height, - width_half, this.materials[ 0 ] ); // px
	this.sides.nx && buildPlane( 'z', 'y', - 1 * flip, - 1, depth, height, width_half, this.materials[ 1 ] );   // nx
	this.sides.py && buildPlane( 'x', 'z',   1 * flip,   1, width, depth, height_half, this.materials[ 2 ] );   // py
	this.sides.ny && buildPlane( 'x', 'z',   1 * flip, - 1, width, depth, - height_half, this.materials[ 3 ] ); // ny
	this.sides.pz && buildPlane( 'x', 'y',   1 * flip, - 1, width, height, depth_half, this.materials[ 4 ] );   // pz
	this.sides.nz && buildPlane( 'x', 'y', - 1 * flip, - 1, width, height, - depth_half, this.materials[ 5 ] ); // nz

	mergeVertices();

	function buildPlane( u, v, udir, vdir, width, height, depth, material ) {

		var w, ix, iy,
		gridX = segments_width || 1,
		gridY = segments_height || 1,
		gridX1 = gridX + 1,
		gridY1 = gridY + 1,
		width_half = width / 2,
		height_half = height / 2,
		segment_width = width / gridX,
		segment_height = height / gridY,
		offset = scope.vertices.length;

		if ( ( u == 'x' && v == 'y' ) || ( u == 'y' && v == 'x' ) ) {

			w = 'z';

		} else if ( ( u == 'x' && v == 'z' ) || ( u == 'z' && v == 'x' ) ) {

			w = 'y';

		} else if ( ( u == 'z' && v == 'y' ) || ( u == 'y' && v == 'z' ) ) {

			w = 'x';

		}


		for( iy = 0; iy < gridY1; iy++ ) {

			for( ix = 0; ix < gridX1; ix++ ) {

				var vector = new THREE.Vector3();
				vector[ u ] = ( ix * segment_width - width_half ) * udir;
				vector[ v ] = ( iy * segment_height - height_half ) * vdir;
				vector[ w ] = depth;

				scope.vertices.push( new THREE.Vertex( vector ) );

			}

		}

		for( iy = 0; iy < gridY; iy++ ) {

			for( ix = 0; ix < gridX; ix++ ) {

				var a = ix + gridX1 * iy;
				var b = ix + gridX1 * ( iy + 1 );
				var c = ( ix + 1 ) + gridX1 * ( iy + 1 );
				var d = ( ix + 1 ) + gridX1 * iy;

				scope.faces.push( new THREE.Face4( a + offset, b + offset, c + offset, d + offset, null, material ) );
				scope.uvs.push( [
							new THREE.UV( ix / gridX, iy / gridY ),
							new THREE.UV( ix / gridX, ( iy + 1 ) / gridY ),
							new THREE.UV( ( ix + 1 ) / gridX, ( iy + 1 ) / gridY ),
							new THREE.UV( ( ix + 1 ) / gridX, iy / gridY )
						] );

			}

		}

	}

	function mergeVertices() {

		var unique = [], changes = [];

		for ( var i = 0, il = scope.vertices.length; i < il; i ++ ) {

			var v = scope.vertices[ i ],
			duplicate = false;

			for ( var j = 0, jl = unique.length; j < jl; j ++ ) {

				var vu = unique[ j ];

				if( v.position.x == vu.position.x && v.position.y == vu.position.y && v.position.z == vu.position.z ) {

					changes[ i ] = j;
					duplicate = true;
					break;

				}

			}

			if ( ! duplicate ) {

				changes[ i ] = unique.length;
				unique.push( new THREE.Vertex( v.position.clone() ) );

			}

		}

		for ( i = 0, il = scope.faces.length; i < il; i ++ ) {

			var face = scope.faces[ i ];

			face.a = changes[ face.a ];
			face.b = changes[ face.b ];
			face.c = changes[ face.c ];
			face.d = changes[ face.d ];

		}

		scope.vertices = unique;

	}

	this.computeCentroids();
	this.computeFaceNormals();
	this.sortFacesByMaterial();

};

Cube.prototype = new THREE.Geometry();
Cube.prototype.constructor = Cube;
/**
 * @author kile / http://kile.stravaganza.org/
 */

var Cylinder = function ( numSegs, topRad, botRad, height, topOffset, botOffset ) {

	THREE.Geometry.call( this );

	var scope = this,
	pi = Math.PI, i;

	// VERTICES

	// Top circle vertices
	for ( i = 0; i < numSegs; i ++ ) {

		v( Math.sin( 2 * pi * i / numSegs ) * topRad, Math.cos( 2 * pi * i / numSegs ) * topRad, 0 );

	}

	// Bottom circle vertices
	for ( i = 0; i < numSegs; i ++ ) {

		v( Math.sin( 2 * pi * i / numSegs ) * botRad, Math.cos( 2 * pi * i / numSegs ) * botRad, height );

	}


	// FACES

	// Body
	for ( i = 0; i < numSegs; i++ ) {

		f4( i, i + numSegs, numSegs + ( i + 1 ) % numSegs, ( i + 1 ) % numSegs, '#ff0000' );
	}

	// Bottom circle
	if ( botRad != 0 ) {

		v( 0, 0, - topOffset );

		for ( i = numSegs; i < numSegs + ( numSegs / 2 ); i++ ) {

			f4( 2 * numSegs, ( 2 * i - 2 * numSegs ) % numSegs, ( 2 * i - 2 * numSegs + 1 ) % numSegs, ( 2 * i - 2 * numSegs + 2 ) % numSegs );

		}

	}

	// Top circle
	if ( topRad != 0 ) {

		v( 0, 0, height + topOffset );

		for ( i = numSegs + ( numSegs / 2 ); i < 2 * numSegs; i ++ ) {

			f4( ( 2 * i - 2 * numSegs + 2 ) % numSegs + numSegs, ( 2 * i - 2 * numSegs + 1 ) % numSegs + numSegs, ( 2 * i - 2 * numSegs ) % numSegs+numSegs, 2 * numSegs + 1 );

		}

	}

	this.computeCentroids();
	this.computeFaceNormals();
	this.sortFacesByMaterial();

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f4( a, b, c, d ) {

		scope.faces.push( new THREE.Face4( a, b, c, d ) );

	}

};

Cylinder.prototype = new THREE.Geometry();
Cylinder.prototype.constructor = Cylinder;
/**
 * @author mr.doob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Plane.as
 */

var Plane = function ( width, height, segments_width, segments_height ) {

	THREE.Geometry.call( this );

	var ix, iy,
	width_half = width / 2,
	height_half = height / 2,
	gridX = segments_width || 1,
	gridY = segments_height || 1,
	gridX1 = gridX + 1,
	gridY1 = gridY + 1,
	segment_width = width / gridX,
	segment_height = height / gridY;


	for( iy = 0; iy < gridY1; iy++ ) {

		for( ix = 0; ix < gridX1; ix++ ) {

			var x = ix * segment_width - width_half;
			var y = iy * segment_height - height_half;

			this.vertices.push( new THREE.Vertex( new THREE.Vector3( x, - y, 0 ) ) );

		}

	}

	for( iy = 0; iy < gridY; iy++ ) {

		for( ix = 0; ix < gridX; ix++ ) {

			var a = ix + gridX1 * iy;
			var b = ix + gridX1 * ( iy + 1 );
			var c = ( ix + 1 ) + gridX1 * ( iy + 1 );
			var d = ( ix + 1 ) + gridX1 * iy;

			this.faces.push( new THREE.Face4( a, b, c, d ) );
			this.uvs.push( [
						new THREE.UV( ix / gridX, iy / gridY ),
						new THREE.UV( ix / gridX, ( iy + 1 ) / gridY ),
						new THREE.UV( ( ix + 1 ) / gridX, ( iy + 1 ) / gridY ),
						new THREE.UV( ( ix + 1 ) / gridX, iy / gridY )
					] );

		}

	}

	this.computeCentroids();
	this.computeFaceNormals();
	this.sortFacesByMaterial();

};

Plane.prototype = new THREE.Geometry();
Plane.prototype.constructor = Plane;
/**
 * @author mr.doob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Sphere.as
 */

var Sphere = function ( radius, segments_width, segments_height ) {

	THREE.Geometry.call( this );

	var gridX = segments_width || 8,
	gridY = segments_height || 6;

	var i, j, pi = Math.PI;
	var iHor = Math.max( 3, gridX );
	var iVer = Math.max( 2, gridY );
	var aVtc = [];

	for ( j = 0; j < ( iVer + 1 ) ; j++ ) {

		var fRad1 = j / iVer;
		var fZ = radius * Math.cos( fRad1 * pi );
		var fRds = radius * Math.sin( fRad1 * pi );
		var aRow = [];
		var oVtx = 0;

		for ( i = 0; i < iHor; i++ ) {

			var fRad2 = 2 * i / iHor;
			var fX = fRds * Math.sin( fRad2 * pi );
			var fY = fRds * Math.cos( fRad2 * pi );

			if ( !( ( j == 0 || j == iVer ) && i > 0 ) ) {

				oVtx = this.vertices.push( new THREE.Vertex( new THREE.Vector3( fY, fZ, fX ) ) ) - 1;

			}

			aRow.push( oVtx );

		}

		aVtc.push( aRow );

	}

	var n1, n2, n3, iVerNum = aVtc.length;

	for ( j = 0; j < iVerNum; j++ ) {

		var iHorNum = aVtc[ j ].length;

		if ( j > 0 ) {

			for ( i = 0; i < iHorNum; i++ ) {

				var bEnd = i == ( iHorNum - 1 );
				var aP1 = aVtc[ j ][ bEnd ? 0 : i + 1 ];
				var aP2 = aVtc[ j ][ ( bEnd ? iHorNum - 1 : i ) ];
				var aP3 = aVtc[ j - 1 ][ ( bEnd ? iHorNum - 1 : i ) ];
				var aP4 = aVtc[ j - 1 ][ bEnd ? 0 : i + 1 ];

				var fJ0 = j / ( iVerNum - 1 );
				var fJ1 = ( j - 1 ) / ( iVerNum - 1 );
				var fI0 = ( i + 1 ) / iHorNum;
				var fI1 = i / iHorNum;

				var aP1uv = new THREE.UV( 1 - fI0, fJ0 );
				var aP2uv = new THREE.UV( 1 - fI1, fJ0 );
				var aP3uv = new THREE.UV( 1 - fI1, fJ1 );
				var aP4uv = new THREE.UV( 1 - fI0, fJ1 );

				if ( j < ( aVtc.length - 1 ) ) {

					n1 = this.vertices[ aP1 ].position.clone();
					n2 = this.vertices[ aP2 ].position.clone();
					n3 = this.vertices[ aP3 ].position.clone();
					n1.normalize();
					n2.normalize();
					n3.normalize();

					this.faces.push( new THREE.Face3( aP1, aP2, aP3, [ new THREE.Vector3( n1.x, n1.y, n1.z ), new THREE.Vector3( n2.x, n2.y, n2.z ), new THREE.Vector3( n3.x, n3.y, n3.z ) ] ) );

					this.uvs.push( [ aP1uv, aP2uv, aP3uv ] );

				}

				if ( j > 1 ) {

					n1 = this.vertices[aP1].position.clone();
					n2 = this.vertices[aP3].position.clone();
					n3 = this.vertices[aP4].position.clone();
					n1.normalize();
					n2.normalize();
					n3.normalize();

					this.faces.push( new THREE.Face3( aP1, aP3, aP4, [ new THREE.Vector3( n1.x, n1.y, n1.z ), new THREE.Vector3( n2.x, n2.y, n2.z ), new THREE.Vector3( n3.x, n3.y, n3.z ) ] ) );

					this.uvs.push( [ aP1uv, aP3uv, aP4uv ] );

				}

			}
		}
	}

	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals();
	this.sortFacesByMaterial();

	this.boundingSphere = { radius: radius };

};

Sphere.prototype = new THREE.Geometry();
Sphere.prototype.constructor = Sphere;
/**
 * @author astrodud / http://astrodud.isgreat.org/
 */

function LathedObject( verts, nsteps, latheAngle ) {
   THREE.Geometry.call( this );
   nsteps = nsteps || 12;
   latheAngle = latheAngle || 2 * Math.PI;
   var stepSize = latheAngle / nsteps;
   var newV = [], oldInds = [], newInds = [], startInds = [];
   for ( var j = 0; j < verts.length; j ++ ) {
      this.vertices.push( new THREE.Vertex( verts[ j ] ) );
      oldInds[ j ] = this.vertices.length - 1;
      newV[ j ] = new THREE.Vector3( verts[ j ].x, verts[ j ].y, verts[ j ].z );
   }
   var m = THREE.Matrix4.rotationZMatrix( stepSize );
   for ( var r = 0; r <= latheAngle + 0.001; r += stepSize ) { // need the +0.001 for it go up to latheAngle
      for ( var j = 0; j < newV.length; j ++ ) {
	 if ( r < latheAngle ) {
	    newV[ j ] = m.multiplyVector3( newV[ j ].clone() );
	    this.vertices.push( new THREE.Vertex( newV[ j ] ) );
	    newInds[ j ] = this.vertices.length - 1;
	 } else {
	    newInds = startInds; // wrap it up!
	 }
      }
      if ( r == 0 ) startInds = oldInds;
      for ( var j = 0; j < oldInds.length - 1; j ++ ) {
	 this.faces.push( new THREE.Face4( newInds[ j ], newInds[ j + 1 ], oldInds[ j + 1 ], oldInds[ j ] ) );
	 this.uvs.push( [ new THREE.UV( r / latheAngle, j / verts.length ),
			  new THREE.UV( r / latheAngle, ( j + 1 ) / verts.length ),
			  new THREE.UV( ( r - stepSize ) / latheAngle, ( j + 1 ) / verts.length ),
			  new THREE.UV( ( r - stepSize ) / latheAngle, j / verts.length ) ] );
      }
      oldInds = newInds;
      newInds = [];
   }
   this.computeCentroids();
   this.computeFaceNormals();
   this.computeVertexNormals();
   this.sortFacesByMaterial();
};

LathedObject.prototype = new THREE.Geometry();
LathedObject.prototype.constructor = LathedObject;
/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.Loader = function( showStatus ) {
	
	this.showStatus = showStatus;
	
	this.statusDomElement = showStatus ? this.addStatusElement() : null;

};

THREE.Loader.prototype = {

	addStatusElement: function ( ) {
		
		var e = document.createElement( "div" );
		
		e.style.fontSize = "0.8em"; 
		e.style.textAlign = "left";
		e.style.background = "#b00"; 
		e.style.color = "#fff"; 
		e.style.width = "140px"; 
		e.style.padding = "0.25em 0.25em 0.25em 0.5em"; 
		e.style.position = "absolute"; 
		e.style.right = "0px"; 
		e.style.top = "0px"; 
		e.style.zIndex = 1000;
		
		e.innerHTML = "Loading ...";
		
		return e;
		
	},
	
	updateProgress: function ( progress ) {

		var message = "Loaded ";

		if ( progress.total ) {

			message += ( 100 * progress.loaded / progress.total ).toFixed(0) + "%";


		} else {

			message += ( progress.loaded / 1000 ).toFixed(2) + " KB";

		}

		this.statusDomElement.innerHTML = message;

	},
	
	// Load models generated by Blender exporter and original OBJ converter (converter_obj_three.py)

	loadAsciiOld: function( url, callback ) {

		var element = document.createElement( 'script' );
		element.type = 'text/javascript';
		element.onload = callback;
		element.src = url;
		document.getElementsByTagName( "head" )[ 0 ].appendChild( element );

	},

	// Load models generated by slim OBJ converter with ASCII option (converter_obj_three_slim.py -t ascii)
	//  - parameters
	//		- model (required)
	//		- callback (required)
	//		- texture_path (optional: if not specified, textures will be assumed to be in the same folder as JS model file)

	loadAscii: function ( parameters ) {

		var url = parameters.model,
			callback = parameters.callback, 
		    texture_path = parameters.texture_path ? parameters.texture_path : THREE.Loader.prototype.extractUrlbase( url ),
		
			s = (new Date).getTime(),
			worker = new Worker( url );

		worker.onmessage = function( event ) {

			THREE.Loader.prototype.createModel( event.data, callback, texture_path );

		};

		worker.postMessage( s );

	},

	// Load models generated by slim OBJ converter with BINARY option (converter_obj_three_slim.py -t binary)
	//  - binary models consist of two files: JS and BIN
	//  - parameters
	//		- model (required)
	//		- callback (required)
	//		- bin_path (optional: if not specified, binary file will be assumed to be in the same folder as JS model file)
	//		- texture_path (optional: if not specified, textures will be assumed to be in the same folder as JS model file)

	loadBinary: function( parameters ) {
	
		// #1 load JS part via web worker

		//  This isn't really necessary, JS part is tiny,
		//  could be done by more ordinary means.

		var url = parameters.model,
			callback = parameters.callback, 
		    texture_path = parameters.texture_path ? parameters.texture_path : THREE.Loader.prototype.extractUrlbase( url ),
			bin_path = parameters.bin_path ? parameters.bin_path : THREE.Loader.prototype.extractUrlbase( url ),

			s = (new Date).getTime(),
			worker = new Worker( url ),
			callback_progress = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
		
		worker.onmessage = function( event ) {

			var materials = event.data.materials,
				buffers = event.data.buffers;

			// #2 load BIN part via Ajax

			//  For some reason it is faster doing loading from here than from within the worker.
			//  Maybe passing of ginormous string as message between threads is costly? 
			//  Also, worker loading huge data by Ajax still freezes browser. Go figure, 
			//  worker with baked ascii JSON data keeps browser more responsive.

			THREE.Loader.prototype.loadAjaxBuffers( buffers, materials, callback, bin_path, texture_path, callback_progress );

		};

		worker.onerror = function (event) {

			alert( "worker.onerror: " + event.message + "\n" + event.data );
			event.preventDefault();

		};

		worker.postMessage( s );

	},

	// Binary AJAX parser based on Magi binary loader
	// https://github.com/kig/magi

	// Should look more into HTML5 File API
	// See also other suggestions by Gregg Tavares
	// https://groups.google.com/group/o3d-discuss/browse_thread/thread/a8967bc9ce1e0978

	loadAjaxBuffers: function( buffers, materials, callback, bin_path, texture_path, callback_progress ) {

		var xhr = new XMLHttpRequest(),
			url = bin_path + "/" + buffers;

		var length = 0;
		
		xhr.onreadystatechange = function() {
			
			if ( xhr.readyState == 4 ) {

				if ( xhr.status == 200 || xhr.status == 0 ) {

					THREE.Loader.prototype.createBinModel( xhr.responseText, callback, texture_path, materials );

				} else {

					alert( "Couldn't load [" + url + "] [" + xhr.status + "]" );

				}
						
			} else if ( xhr.readyState == 3 ) {
				
				if ( callback_progress ) {
				
					if ( length == 0 ) {
						
						length = xhr.getResponseHeader( "Content-Length" );
						
					}
					
					callback_progress( { total: length, loaded: xhr.responseText.length } );
					
				}
				
			} else if ( xhr.readyState == 2 ) {
				
				length = xhr.getResponseHeader( "Content-Length" );
				
			}
			
		}

		xhr.open("GET", url, true);
		xhr.overrideMimeType("text/plain; charset=x-user-defined");
		xhr.setRequestHeader("Content-Type", "text/plain");
		xhr.send(null);

	},

	createBinModel: function ( data, callback, texture_path, materials ) {

		var Model = function ( texture_path ) {

			//var s = (new Date).getTime();

			var scope = this,
				currentOffset = 0, 
				md,
				normals = [],
				uvs = [],
				tri_b, tri_c, tri_m, tri_na, tri_nb, tri_nc,
				quad_b, quad_c, quad_d, quad_m, quad_na, quad_nb, quad_nc, quad_nd,
				tri_uvb, tri_uvc, quad_uvb, quad_uvc, quad_uvd,
				start_tri_flat, start_tri_smooth, start_tri_flat_uv, start_tri_smooth_uv,
				start_quad_flat, start_quad_smooth, start_quad_flat_uv, start_quad_smooth_uv,
				tri_size, quad_size,
				len_tri_flat, len_tri_smooth, len_tri_flat_uv, len_tri_smooth_uv,
				len_quad_flat, len_quad_smooth, len_quad_flat_uv, len_quad_smooth_uv;


			THREE.Geometry.call(this);

			THREE.Loader.prototype.init_materials( scope, materials, texture_path );

			md = parseMetaData( data, currentOffset );
			currentOffset += md.header_bytes;

			// cache offsets
			
			tri_b   = md.vertex_index_bytes, 
			tri_c   = md.vertex_index_bytes*2, 
			tri_m   = md.vertex_index_bytes*3,
			tri_na  = md.vertex_index_bytes*3 + md.material_index_bytes,
			tri_nb  = md.vertex_index_bytes*3 + md.material_index_bytes + md.normal_index_bytes,
			tri_nc  = md.vertex_index_bytes*3 + md.material_index_bytes + md.normal_index_bytes*2,
		
			quad_b  = md.vertex_index_bytes,
			quad_c  = md.vertex_index_bytes*2,
			quad_d  = md.vertex_index_bytes*3,
			quad_m  = md.vertex_index_bytes*4,
			quad_na = md.vertex_index_bytes*4 + md.material_index_bytes,
			quad_nb = md.vertex_index_bytes*4 + md.material_index_bytes + md.normal_index_bytes,
			quad_nc = md.vertex_index_bytes*4 + md.material_index_bytes + md.normal_index_bytes*2,
			quad_nd = md.vertex_index_bytes*4 + md.material_index_bytes + md.normal_index_bytes*3,
		
			tri_uvb = md.uv_index_bytes,
			tri_uvc = md.uv_index_bytes * 2,
		
			quad_uvb = md.uv_index_bytes,
			quad_uvc = md.uv_index_bytes * 2,
			quad_uvd = md.uv_index_bytes * 3;
			
			// buffers sizes
			
			tri_size =  md.vertex_index_bytes * 3 + md.material_index_bytes;
			quad_size = md.vertex_index_bytes * 4 + md.material_index_bytes;

			len_tri_flat      = md.ntri_flat      * ( tri_size );
			len_tri_smooth    = md.ntri_smooth    * ( tri_size + md.normal_index_bytes * 3 );
			len_tri_flat_uv   = md.ntri_flat_uv   * ( tri_size + md.uv_index_bytes * 3 );
			len_tri_smooth_uv = md.ntri_smooth_uv * ( tri_size + md.normal_index_bytes * 3 + md.uv_index_bytes * 3 );

			len_quad_flat      = md.nquad_flat      * ( quad_size );
			len_quad_smooth    = md.nquad_smooth    * ( quad_size + md.normal_index_bytes * 4 );
			len_quad_flat_uv   = md.nquad_flat_uv   * ( quad_size + md.uv_index_bytes * 4 );
			len_quad_smooth_uv = md.nquad_smooth_uv * ( quad_size + md.normal_index_bytes * 4 + md.uv_index_bytes * 4 );
			
			// read buffers
			
			currentOffset += init_vertices( currentOffset );
			currentOffset += init_normals( currentOffset );
			currentOffset += init_uvs( currentOffset );

			start_tri_flat 		= currentOffset; 
			start_tri_smooth    = start_tri_flat    + len_tri_flat;
			start_tri_flat_uv   = start_tri_smooth  + len_tri_smooth;
			start_tri_smooth_uv = start_tri_flat_uv + len_tri_flat_uv;
			
			start_quad_flat     = start_tri_smooth_uv + len_tri_smooth_uv;
			start_quad_smooth   = start_quad_flat     + len_quad_flat;
			start_quad_flat_uv  = start_quad_smooth   + len_quad_smooth;
			start_quad_smooth_uv= start_quad_flat_uv  +len_quad_flat_uv;

			// have to first process faces with uvs
			// so that face and uv indices match
			
			init_triangles_flat_uv( start_tri_flat_uv );
			init_triangles_smooth_uv( start_tri_smooth_uv );

			init_quads_flat_uv( start_quad_flat_uv );
			init_quads_smooth_uv( start_quad_smooth_uv );

			// now we can process untextured faces
			
			init_triangles_flat( start_tri_flat );
			init_triangles_smooth( start_tri_smooth );

			init_quads_flat( start_quad_flat );
			init_quads_smooth( start_quad_smooth );

			this.computeCentroids();
			this.computeFaceNormals();
			this.sortFacesByMaterial();

			//var e = (new Date).getTime();

			//log( "binary data parse time: " + (e-s) + " ms" );

			function parseMetaData( data, offset ) {

				var metaData = {

					'signature'               :parseString( data, offset, 8 ),
					'header_bytes'            :parseUChar8( data, offset + 8 ),

					'vertex_coordinate_bytes' :parseUChar8( data, offset + 9 ),
					'normal_coordinate_bytes' :parseUChar8( data, offset + 10 ),
					'uv_coordinate_bytes'     :parseUChar8( data, offset + 11 ),

					'vertex_index_bytes'      :parseUChar8( data, offset + 12 ),
					'normal_index_bytes'      :parseUChar8( data, offset + 13 ),
					'uv_index_bytes'          :parseUChar8( data, offset + 14 ),
					'material_index_bytes'    :parseUChar8( data, offset + 15 ),

					'nvertices'    :parseUInt32( data, offset + 16 ),
					'nnormals'     :parseUInt32( data, offset + 16 + 4*1 ),
					'nuvs'         :parseUInt32( data, offset + 16 + 4*2 ),

					'ntri_flat'      :parseUInt32( data, offset + 16 + 4*3 ),
					'ntri_smooth'    :parseUInt32( data, offset + 16 + 4*4 ),
					'ntri_flat_uv'   :parseUInt32( data, offset + 16 + 4*5 ),
					'ntri_smooth_uv' :parseUInt32( data, offset + 16 + 4*6 ),

					'nquad_flat'      :parseUInt32( data, offset + 16 + 4*7 ),
					'nquad_smooth'    :parseUInt32( data, offset + 16 + 4*8 ),
					'nquad_flat_uv'   :parseUInt32( data, offset + 16 + 4*9 ),
					'nquad_smooth_uv' :parseUInt32( data, offset + 16 + 4*10 )

				};

				/*
				log( "signature: " + metaData.signature );

				log( "header_bytes: " + metaData.header_bytes );
				log( "vertex_coordinate_bytes: " + metaData.vertex_coordinate_bytes );
				log( "normal_coordinate_bytes: " + metaData.normal_coordinate_bytes );
				log( "uv_coordinate_bytes: " + metaData.uv_coordinate_bytes );

				log( "vertex_index_bytes: " + metaData.vertex_index_bytes );
				log( "normal_index_bytes: " + metaData.normal_index_bytes );
				log( "uv_index_bytes: " + metaData.uv_index_bytes );
				log( "material_index_bytes: " + metaData.material_index_bytes );

				log( "nvertices: " + metaData.nvertices );
				log( "nnormals: " + metaData.nnormals );
				log( "nuvs: " + metaData.nuvs );

				log( "ntri_flat: " + metaData.ntri_flat );
				log( "ntri_smooth: " + metaData.ntri_smooth );
				log( "ntri_flat_uv: " + metaData.ntri_flat_uv );
				log( "ntri_smooth_uv: " + metaData.ntri_smooth_uv );

				log( "nquad_flat: " + metaData.nquad_flat );
				log( "nquad_smooth: " + metaData.nquad_smooth );
				log( "nquad_flat_uv: " + metaData.nquad_flat_uv );
				log( "nquad_smooth_uv: " + metaData.nquad_smooth_uv );

				var total = metaData.header_bytes
						  + metaData.nvertices * metaData.vertex_coordinate_bytes * 3
						  + metaData.nnormals * metaData.normal_coordinate_bytes * 3
						  + metaData.nuvs * metaData.uv_coordinate_bytes * 2
						  + metaData.ntri_flat * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes )
						  + metaData.ntri_smooth * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes + metaData.normal_index_bytes*3 )
						  + metaData.ntri_flat_uv * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes + metaData.uv_index_bytes*3 )
						  + metaData.ntri_smooth_uv * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes + metaData.normal_index_bytes*3 + metaData.uv_index_bytes*3 )
						  + metaData.nquad_flat * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes )
						  + metaData.nquad_smooth * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes + metaData.normal_index_bytes*4 )
						  + metaData.nquad_flat_uv * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes + metaData.uv_index_bytes*4 )
						  + metaData.nquad_smooth_uv * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes + metaData.normal_index_bytes*4 + metaData.uv_index_bytes*4 );
				log( "total bytes: " + total );
				*/

				return metaData;

			}

			function parseString( data, offset, length ) {

				return data.substr( offset, length );

			}

			function parseFloat32( data, offset ) {

				var b3 = parseUChar8( data, offset ),
					b2 = parseUChar8( data, offset + 1 ),
					b1 = parseUChar8( data, offset + 2 ),
					b0 = parseUChar8( data, offset + 3 ),

					sign = 1 - ( 2 * ( b0 >> 7 ) ),
					exponent = ((( b0 << 1 ) & 0xff) | ( b1 >> 7 )) - 127,
					mantissa = (( b1 & 0x7f ) << 16) | (b2 << 8) | b3;

					if (mantissa == 0 && exponent == -127)
						return 0.0;

					return sign * ( 1 + mantissa * Math.pow( 2, -23 ) ) * Math.pow( 2, exponent );

			}

			function parseUInt32( data, offset ) {

				var b0 = parseUChar8( data, offset ),
					b1 = parseUChar8( data, offset + 1 ),
					b2 = parseUChar8( data, offset + 2 ),
					b3 = parseUChar8( data, offset + 3 );

				return (b3 << 24) + (b2 << 16) + (b1 << 8) + b0;
			}

			function parseUInt16( data, offset ) {

				var b0 = parseUChar8( data, offset ),
					b1 = parseUChar8( data, offset + 1 );

				return (b1 << 8) + b0;

			}

			function parseSChar8( data, offset ) {

				var b = parseUChar8( data, offset );
				return b > 127 ? b - 256 : b;

			}

			function parseUChar8( data, offset ) {

				return data.charCodeAt( offset ) & 0xff;
			}

			function init_vertices( start ) {

				var i, x, y, z, 
					stride = md.vertex_coordinate_bytes * 3,
					end = start + md.nvertices * stride;

				for( i = start; i < end; i += stride ) {

					x = parseFloat32( data, i );
					y = parseFloat32( data, i + md.vertex_coordinate_bytes );
					z = parseFloat32( data, i + md.vertex_coordinate_bytes*2 );

					THREE.Loader.prototype.v( scope, x, y, z );

				}

				return md.nvertices * stride;

			}

			function init_normals( start ) {

				var i, x, y, z, 
					stride = md.normal_coordinate_bytes * 3,
					end = start + md.nnormals * stride;

				for( i = start; i < end; i += stride ) {

					x = parseSChar8( data, i );
					y = parseSChar8( data, i + md.normal_coordinate_bytes );
					z = parseSChar8( data, i + md.normal_coordinate_bytes*2 );

					normals.push( x/127, y/127, z/127 );

				}

				return md.nnormals * stride;

			}

			function init_uvs( start ) {

				var i, u, v, 
					stride = md.uv_coordinate_bytes * 2,
					end = start + md.nuvs * stride;

				for( i = start; i < end; i += stride ) {

					u = parseFloat32( data, i );
					v = parseFloat32( data, i + md.uv_coordinate_bytes );

					uvs.push( u, v );

				}
				
				return md.nuvs * stride;

			}			
			
			function add_tri( i ) {

				var a, b, c, m;

				a = parseUInt32( data, i );
				b = parseUInt32( data, i + tri_b );
				c = parseUInt32( data, i + tri_c );

				m = parseUInt16( data, i + tri_m );

				THREE.Loader.prototype.f3( scope, a, b, c, m );

			}

			function add_tri_n( i ) {

				var a, b, c, m, na, nb, nc;

				a  = parseUInt32( data, i );
				b  = parseUInt32( data, i + tri_b );
				c  = parseUInt32( data, i + tri_c );

				m  = parseUInt16( data, i + tri_m );

				na = parseUInt32( data, i + tri_na );
				nb = parseUInt32( data, i + tri_nb );
				nc = parseUInt32( data, i + tri_nc );

				THREE.Loader.prototype.f3n( scope, normals, a, b, c, m, na, nb, nc );

			}

			function add_quad( i ) {

				var a, b, c, d, m;

				a = parseUInt32( data, i );
				b = parseUInt32( data, i + quad_b );
				c = parseUInt32( data, i + quad_c );
				d = parseUInt32( data, i + quad_d );

				m = parseUInt16( data, i + quad_m );

				THREE.Loader.prototype.f4( scope, a, b, c, d, m );

			}

			function add_quad_n( i ) {

				var a, b, c, d, m, na, nb, nc, nd;

				a  = parseUInt32( data, i );
				b  = parseUInt32( data, i + quad_b );
				c  = parseUInt32( data, i + quad_c );
				d  = parseUInt32( data, i + quad_d );

				m  = parseUInt16( data, i + quad_m );

				na = parseUInt32( data, i + quad_na );
				nb = parseUInt32( data, i + quad_nb );
				nc = parseUInt32( data, i + quad_nc );
				nd = parseUInt32( data, i + quad_nd );

				THREE.Loader.prototype.f4n( scope, normals, a, b, c, d, m, na, nb, nc, nd );

			}

			function add_uv3( i ) {

				var uva, uvb, uvc, u1, u2, u3, v1, v2, v3;

				uva = parseUInt32( data, i );
				uvb = parseUInt32( data, i + tri_uvb );
				uvc = parseUInt32( data, i + tri_uvc );

				u1 = uvs[ uva*2 ];
				v1 = uvs[ uva*2 + 1 ];

				u2 = uvs[ uvb*2 ];
				v2 = uvs[ uvb*2 + 1 ];

				u3 = uvs[ uvc*2 ];
				v3 = uvs[ uvc*2 + 1 ];

				THREE.Loader.prototype.uv3( scope, u1, v1, u2, v2, u3, v3 );

			}

			function add_uv4( i ) {

				var uva, uvb, uvc, uvd, u1, u2, u3, u4, v1, v2, v3, v4;

				uva = parseUInt32( data, i );
				uvb = parseUInt32( data, i + quad_uvb );
				uvc = parseUInt32( data, i + quad_uvc );
				uvd = parseUInt32( data, i + quad_uvd );

				u1 = uvs[ uva*2 ];
				v1 = uvs[ uva*2 + 1 ];

				u2 = uvs[ uvb*2 ];
				v2 = uvs[ uvb*2 + 1 ];

				u3 = uvs[ uvc*2 ];
				v3 = uvs[ uvc*2 + 1 ];

				u4 = uvs[ uvd*2 ];
				v4 = uvs[ uvd*2 + 1 ];

				THREE.Loader.prototype.uv4( scope, u1, v1, u2, v2, u3, v3, u4, v4 );

			}

			function init_triangles_flat( start ) {

				var i, stride = md.vertex_index_bytes * 3 + md.material_index_bytes,
					end = start + md.ntri_flat * stride;

				for( i = start; i < end; i += stride ) {

					add_tri( i );

				}

				return end - start;

			}

			function init_triangles_flat_uv( start ) {

				var i, offset = md.vertex_index_bytes * 3 + md.material_index_bytes,
					stride = offset + md.uv_index_bytes * 3,
					end = start + md.ntri_flat_uv * stride;

				for( i = start; i < end; i += stride ) {

					add_tri( i );
					add_uv3( i + offset );

				}

				return end - start;

			}

			function init_triangles_smooth( start ) {

				var i, stride = md.vertex_index_bytes * 3 + md.material_index_bytes + md.normal_index_bytes * 3,
					end = start + md.ntri_smooth * stride;

				for( i = start; i < end; i += stride ) {

					add_tri_n( i );

				}

				return end - start;

			}

			function init_triangles_smooth_uv( start ) {

				var i, offset = md.vertex_index_bytes * 3 + md.material_index_bytes + md.normal_index_bytes * 3,
					stride = offset + md.uv_index_bytes * 3,
					end = start + md.ntri_smooth_uv * stride;

				for( i = start; i < end; i += stride ) {

					add_tri_n( i );
					add_uv3( i + offset );

				}

				return end - start;

			}

			function init_quads_flat( start ) {

				var i, stride = md.vertex_index_bytes * 4 + md.material_index_bytes,
					end = start + md.nquad_flat * stride;

				for( i = start; i < end; i += stride ) {

					add_quad( i );

				}

				return end - start;

			}

			function init_quads_flat_uv( start ) {

				var i, offset = md.vertex_index_bytes * 4 + md.material_index_bytes,
					stride = offset + md.uv_index_bytes * 4,
					end = start + md.nquad_flat_uv * stride;

				for( i = start; i < end; i += stride ) {

					add_quad( i );
					add_uv4( i + offset );

				}

				return end - start;

			}

			function init_quads_smooth( start ) {

				var i, stride = md.vertex_index_bytes * 4 + md.material_index_bytes + md.normal_index_bytes * 4,
					end = start + md.nquad_smooth * stride;

				for( i = start; i < end; i += stride ) {

					add_quad_n( i );
				}

				return end - start;

			}

			function init_quads_smooth_uv( start ) {

				var i, offset = md.vertex_index_bytes * 4 + md.material_index_bytes + md.normal_index_bytes * 4, 
					stride =  offset + md.uv_index_bytes * 4,
					end = start + md.nquad_smooth_uv * stride;

				for( i = start; i < end; i += stride ) {

					add_quad_n( i );
					add_uv4( i + offset );

				}

				return end - start;

			}

		}

		Model.prototype = new THREE.Geometry();
		Model.prototype.constructor = Model;

		callback( new Model( texture_path ) );

	},

	createModel: function ( data, callback, texture_path ) {

		var Model = function ( texture_path ) {

			var scope = this;

			THREE.Geometry.call( this );

			THREE.Loader.prototype.init_materials( scope, data.materials, texture_path );

			init_vertices();
			init_faces();

			this.computeCentroids();
			this.computeFaceNormals();
			this.sortFacesByMaterial();

			function init_vertices() {

				var i, l, x, y, z;

				for( i = 0, l = data.vertices.length; i < l; i += 3 ) {

					x = data.vertices[ i     ];
					y = data.vertices[ i + 1 ];
					z = data.vertices[ i + 2 ];

					THREE.Loader.prototype.v( scope, x, y, z );

				}

			}

			function init_faces() {

				function add_tri( src, i ) {

					var a, b, c, m;

					a = src[ i ];
					b = src[ i + 1 ];
					c = src[ i + 2 ];

					m = src[ i + 3 ];

					THREE.Loader.prototype.f3( scope, a, b, c, m );

				}

				function add_tri_n( src, i ) {

					var a, b, c, m, na, nb, nc;

					a  = src[ i ];
					b  = src[ i + 1 ];
					c  = src[ i + 2 ];

					m  = src[ i + 3 ];

					na = src[ i + 4 ];
					nb = src[ i + 5 ];
					nc = src[ i + 6 ];

					THREE.Loader.prototype.f3n( scope, data.normals, a, b, c, m, na, nb, nc );

				}

				function add_quad( src, i ) {

					var a, b, c, d, m;

					a = src[ i ];
					b = src[ i + 1 ];
					c = src[ i + 2 ];
					d = src[ i + 3 ];

					m = src[ i + 4 ];

					THREE.Loader.prototype.f4( scope, a, b, c, d, m );

				}

				function add_quad_n( src, i ) {

					var a, b, c, d, m, na, nb, nc, nd;

					a  = src[ i ];
					b  = src[ i + 1 ];
					c  = src[ i + 2 ];
					d  = src[ i + 3 ];

					m  = src[ i + 4 ];

					na = src[ i + 5 ];
					nb = src[ i + 6 ];
					nc = src[ i + 7 ];
					nd = src[ i + 8 ];

					THREE.Loader.prototype.f4n( scope, data.normals, a, b, c, d, m, na, nb, nc, nd );

				}

				function add_uv3( src, i ) {

					var uva, uvb, uvc, u1, u2, u3, v1, v2, v3;

					uva = src[ i ];
					uvb = src[ i + 1 ];
					uvc = src[ i + 2 ];

					u1 = data.uvs[ uva * 2 ];
					v1 = data.uvs[ uva * 2 + 1 ];

					u2 = data.uvs[ uvb * 2 ];
					v2 = data.uvs[ uvb * 2 + 1 ];

					u3 = data.uvs[ uvc * 2 ];
					v3 = data.uvs[ uvc * 2 + 1 ];

					THREE.Loader.prototype.uv3( scope, u1, v1, u2, v2, u3, v3 );

				}

				function add_uv4( src, i ) {

					var uva, uvb, uvc, uvd, u1, u2, u3, u4, v1, v2, v3, v4;

					uva = src[ i ];
					uvb = src[ i + 1 ];
					uvc = src[ i + 2 ];
					uvd = src[ i + 3 ];

					u1 = data.uvs[ uva * 2 ];
					v1 = data.uvs[ uva * 2 + 1 ];

					u2 = data.uvs[ uvb * 2 ];
					v2 = data.uvs[ uvb * 2 + 1 ];

					u3 = data.uvs[ uvc * 2 ];
					v3 = data.uvs[ uvc * 2 + 1 ];

					u4 = data.uvs[ uvd * 2 ];
					v4 = data.uvs[ uvd * 2 + 1 ];

					THREE.Loader.prototype.uv4( scope, u1, v1, u2, v2, u3, v3, u4, v4 );

				}

				var i, l;
				
				// need to process first faces with uvs
				// as uvs are indexed by face indices
				
				for ( i = 0, l = data.triangles_uv.length; i < l; i+= 7 ) {

					add_tri( data.triangles_uv, i );
					add_uv3( data.triangles_uv, i + 4 );

				}

				for ( i = 0, l = data.triangles_n_uv.length; i < l; i += 10 ) {

					add_tri_n( data.triangles_n_uv, i );
					add_uv3( data.triangles_n_uv, i + 7 );

				}
				
				for ( i = 0, l = data.quads_uv.length; i < l; i += 9 ) {

					add_quad( data.quads_uv, i );
					add_uv4( data.quads_uv, i + 5 );

				}
				
				for ( i = 0, l = data.quads_n_uv.length; i < l; i += 13 ) {

					add_quad_n( data.quads_n_uv, i );
					add_uv4( data.quads_n_uv, i + 9 );

				}
				
				// now can process untextured faces
				
				for ( i = 0, l = data.triangles.length; i < l; i += 4 ) {

					add_tri( data.triangles, i );

				}

				for ( i = 0, l = data.triangles_n.length; i < l; i += 7 ) {

					add_tri_n( data.triangles_n, i );

				}

				for ( i = 0, l = data.quads.length; i < l; i += 5 ) {

					add_quad( data.quads, i );

				}

				for ( i = 0, l = data.quads_n.length; i < l; i += 9 ) {

					add_quad_n( data.quads_n, i );

				}

			}

		}

		Model.prototype = new THREE.Geometry();
		Model.prototype.constructor = Model;

		callback( new Model( texture_path ) );

	},

	v: function( scope, x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	},

	f3: function( scope, a, b, c, mi ) {

		var material = scope.materials[ mi ];
		scope.faces.push( new THREE.Face3( a, b, c, null, material ) );

	},

	f4: function( scope, a, b, c, d, mi ) {

		var material = scope.materials[ mi ];
		scope.faces.push( new THREE.Face4( a, b, c, d, null, material ) );

	},

	f3n: function( scope, normals, a, b, c, mi, na, nb, nc ) {

		var material = scope.materials[ mi ],
			nax = normals[ na*3     ],
			nay = normals[ na*3 + 1 ],
			naz = normals[ na*3 + 2 ],

			nbx = normals[ nb*3     ],
			nby = normals[ nb*3 + 1 ],
			nbz = normals[ nb*3 + 2 ],

			ncx = normals[ nc*3     ],
			ncy = normals[ nc*3 + 1 ],
			ncz = normals[ nc*3 + 2 ];

		scope.faces.push( new THREE.Face3( a, b, c, 
						  [new THREE.Vector3( nax, nay, naz ), 
						   new THREE.Vector3( nbx, nby, nbz ), 
						   new THREE.Vector3( ncx, ncy, ncz )], 
						  material ) );

	},

	f4n: function( scope, normals, a, b, c, d, mi, na, nb, nc, nd ) {

		var material = scope.materials[ mi ],
			nax = normals[ na*3     ],
			nay = normals[ na*3 + 1 ],
			naz = normals[ na*3 + 2 ],

			nbx = normals[ nb*3     ],
			nby = normals[ nb*3 + 1 ],
			nbz = normals[ nb*3 + 2 ],

			ncx = normals[ nc*3     ],
			ncy = normals[ nc*3 + 1 ],
			ncz = normals[ nc*3 + 2 ],

			ndx = normals[ nd*3     ],
			ndy = normals[ nd*3 + 1 ],
			ndz = normals[ nd*3 + 2 ];

		scope.faces.push( new THREE.Face4( a, b, c, d,
						  [new THREE.Vector3( nax, nay, naz ), 
						   new THREE.Vector3( nbx, nby, nbz ), 
						   new THREE.Vector3( ncx, ncy, ncz ), 
						   new THREE.Vector3( ndx, ndy, ndz )], 
						  material ) );

	},

	uv3: function( scope, u1, v1, u2, v2, u3, v3 ) {

		var uv = [];
		uv.push( new THREE.UV( u1, v1 ) );
		uv.push( new THREE.UV( u2, v2 ) );
		uv.push( new THREE.UV( u3, v3 ) );
		scope.uvs.push( uv );

	},

	uv4: function( scope, u1, v1, u2, v2, u3, v3, u4, v4 ) {

		var uv = [];
		uv.push( new THREE.UV( u1, v1 ) );
		uv.push( new THREE.UV( u2, v2 ) );
		uv.push( new THREE.UV( u3, v3 ) );
		uv.push( new THREE.UV( u4, v4 ) );
		scope.uvs.push( uv );

	},

	init_materials: function( scope, materials, texture_path ) {

		scope.materials = [];

		for ( var i = 0; i < materials.length; ++i ) {

			scope.materials[i] = [ THREE.Loader.prototype.createMaterial( materials[i], texture_path ) ];

		}

	},

	createMaterial: function ( m, texture_path ) {

		function is_pow2( n ) {

			var l = Math.log(n) / Math.LN2;
			return Math.floor(l) == l;

		}

		function nearest_pow2( n ) {

			var l = Math.log(n) / Math.LN2;
			return Math.pow( 2, Math.round(l) );

		}

		var material, texture, image, color;

		if ( m.map_diffuse && texture_path ) {

			texture = document.createElement( 'canvas' );
			material = new THREE.MeshLambertMaterial( { map: new THREE.Texture( texture ) } );

			image = new Image();
			image.onload = function () {

				if ( !is_pow2( this.width ) || !is_pow2( this.height ) ) {

					var w = nearest_pow2( this.width ),
						h = nearest_pow2( this.height );

					material.map.image.width = w;
					material.map.image.height = h;
					material.map.image.getContext("2d").drawImage( this, 0, 0, w, h );

				} else {

					material.map.image = this;

				}

				material.map.image.loaded = 1;

			};

			image.src = texture_path + "/" + m.map_diffuse;

		} else if ( m.col_diffuse ) {

			color = (m.col_diffuse[0]*255 << 16) + (m.col_diffuse[1]*255 << 8) + m.col_diffuse[2]*255;
			material = new THREE.MeshLambertMaterial( { color: color, opacity: m.transparency } );

		} else if ( m.a_dbg_color ) {

			material = new THREE.MeshLambertMaterial( { color: m.a_dbg_color } );

		} else {

			material = new THREE.MeshLambertMaterial( { color: 0xeeeeee } );

		}

		return material;

	},
	
	extractUrlbase: function( url ) {
		
		var chunks = url.split( "/" );
		chunks.pop();
		return chunks.join( "/" );
		
	}

};
