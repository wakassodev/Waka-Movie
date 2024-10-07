// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "browser": true,
        "es6": true
       },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    rules: {
        'react/react-in-jsx-scope': 0,
        'import/extensions': 0,
        'react/prop-types': 0,
        'linebreak-style': 0,
        'react/state-in-constructor': 0,
        'import/prefer-default-export': 0,
    },
}
