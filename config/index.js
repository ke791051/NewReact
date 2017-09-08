import dev from './development';
import prod from './production';

module.exports = process.env.NODE_ENV === 'production' ? prod : dev