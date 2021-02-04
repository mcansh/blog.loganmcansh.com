import * as somebody from 'somebody';

import pkgJSON from '~/package.json';

const { name, email, url } = somebody.parse(pkgJSON.author);

export { name, email, url };
