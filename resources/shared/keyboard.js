/* eslint-disable no-undef */
class Keyboard {
	get b() { return $('~b');}
	get o() { return $('~o');}
	get c() { return $('~c');}
	get e() { return $('~e');}
	get x() { return $('~x');}
	get a() { return $('~a');}
	get m() { return $('~m');}
	get p() { return $('~p');}
	get l() { return $('~l');}
	get i() { return $('~i');}
	get dot() { return $('~.');}
	get at() { return $('~@');}
	get one() { return $('~1');}
	get zero() { return $('~0');}
	get two() { return $('~2');}
	get three() { return $('~3');}
	get four() { return $('~4');}
	get more() { return $('~more');}
	get returnKey() { return $('~Return');}
	}

module.exports = new Keyboard();