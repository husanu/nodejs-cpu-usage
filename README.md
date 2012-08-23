[![build status](https://secure.travis-ci.org/husanu/nodejs-cpu-usage.png)](http://travis-ci.org/husanu/nodejs-cpu-usage)
# Nodejs Cpu Usage (for linux)

Module read file /proc/stat and calculate Cpu Usage.

Declaration:

```
/*
 * frequency - how often CpuLoad will be calculated (optional, default = 1000 (= 1 second))
 * callback - function that will be called when a new value is calculated for CpuLoad 
 */

function cpuUsage( [ frequency, ] callback );
```

Install:

```
npm install cpu-usage
```

Eg of use:

```
var libCpuUsage = require( 'cpu-usage' );

libCpuUsage( 1000, function( load ) {
	process.stdout.write( "\r" + load + "%   " );
} );
```

