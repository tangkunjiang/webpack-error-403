# webpack-error-403

## The following are my reproduction steps
+ (1) pnpm i (npm is ok)
+ (2) pnpm run start (then it will start a webpack dev server in 127.0.0.1, make sure it runs in port 8080)
+ (3) open ./src/index.html with 'localhost' domain in chrome browser ( I use live-server vscode plugin )
+ (4) you will get this error

![alt text](./image.png)

## Other instructions
When I update webpack-dev-server from 5.2.1 to 5.2.2, it works well

## Environmental description

nodejs: 20.18.2

platform: window 10

package manager: pnpm@10