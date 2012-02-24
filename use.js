var lg = console.log;
var dmp = require( 'util' ).inspect;

var libCpuUsage = require( './cpuusage.js' );

libCpuUsage( function( load ) {
	process.stdout.write( "\r" + load + "%   " );
} );



