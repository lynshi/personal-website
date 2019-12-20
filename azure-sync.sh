#!/bin/bash
for css in css/*; do
    az storage blob upload --account-name lynshiwebsite --container-name \$web -n ${css} -f ${css}
done

for img in img/*; do
    az storage blob upload --account-name lynshiwebsite --container-name \$web -n ${img} -f ${img}
done

for html in *.html; do
    az storage blob upload --account-name lynshiwebsite --container-name \$web -n ${html} -f ${html}
done

az storage blob upload --account-name lynshiwebsite --container-name \$web -f bundle.js -n bundle.js