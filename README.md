# Nodejs Cpu Usage (for linux)

Eg of use:

```
var libCpuUsage = require( './cpuusage.js' );

libCpuUsage( function( load ) {
	process.stdout.write( "\r" + load + "%   " );
} );
```
