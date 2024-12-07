<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '1181080029' );

/** Database hostname */
define( 'DB_HOST', 'w-db' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'y.P[ #=bjoXS|8BwbT9[g#`*?q5g[q]eKU211vzg 3f:[5+=]U4QC#]Ku;a5fnne' );
define( 'SECURE_AUTH_KEY',  ')4N<IsOq{X, #tfE),%5g@5h%aO#sLYWeBn3AUiW(>5B z|<.55pp9_kgCNOqDm+' );
define( 'LOGGED_IN_KEY',    'HW2CS/FlS!S$JB(ceQByadUnhV|HcAz2p_4|<KDpLqZw4zNt9P>T%X<zrQ:O3s5F' );
define( 'NONCE_KEY',        '5Fuzi:Vi*}knp3dAz=L22w93W@IJ#S:_j>^NP}%K$4~KaG9VqfI,sc2v[]SFG pJ' );
define( 'AUTH_SALT',        '&b*q6M<qJ#SVQK>2J:5~ZtRw+<IylVK<;Z<p!k_C[m#g^Asbx]zG{5(#;:vWp+$~' );
define( 'SECURE_AUTH_SALT', '@f^FZ@e&{=9FLWxS:xZwJ{dZ? E@T-QBfSg0#qAXPv;oI-I20,mV8B2;Q6g4>bXg' );
define( 'LOGGED_IN_SALT',   '1^1qu=KyaC+bMJ=(PD]*u4qo{0q!Z,u$w[6qD`9R G+zpnV(:B-4:-LAx`j)L1o!' );
define( 'NONCE_SALT',       'Aq83aiA7GM$<-U(}S8t<dP!z9K}}|:)}g/`&gOs:n|;myT_~$E>S=q>mq-&n`P[O' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
