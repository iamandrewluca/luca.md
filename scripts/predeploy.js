const fs = require('fs')

fs.copyFileSync('CNAME', 'dist/CNAME')

const splitbee = `<script src="https://cdn.splitbee.io/sb.js"></script>`
const indexHtml = fs.readFileSync('dist/index.html', 'utf8').replace('</body>', splitbee + '</body>')
fs.writeFileSync('dist/index.html', indexHtml)

// <use xlink:href="/icons.38d394c2.svg#twitter"/>
const twitterIconIndex = indexHtml.search(new RegExp(`<use xlink:href="/icons.[0-9a-z]{8}.svg#twitter"/>`))

const iconsFile = indexHtml
    .substring(twitterIconIndex, twitterIconIndex + 47)
    .replace('<use xlink:href="/', '')
    .replace('#twitter"/>', '')

fs.copyFileSync('assets/icons.svg', `dist/${iconsFile}`)
