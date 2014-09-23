Run PHP on heroku
============================


How to obtain binary of PHP

https://stackoverflow.com/questions/24173906/compile-php-into-static-binary

Get PHP source from here [http://php.net/downloads.php](http://php.net/downloads.php)

Build it staticaly

```shell
   
   $ ./configure --enable-static --enable-cli --disable-all
   $ make
   
```

The binary needed will be in `PHP_DIR/sapi/cli/php`

Add binary to project.