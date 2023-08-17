# Mynecraft Website

## 使用について

好き勝手にしてどうぞ

## 使用ライブラリ

- TypeScript
- Tailwind CSS
- Next.js
  など

## 起動方法

開発は`npm i`してから`npm run dev`

## デバックについて

VScode を使用したら`.vscode/launch.json`に以下のファイルを追加することでデバックしやすいです。

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "firefox",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "console": "integratedTerminal",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

場合によっては client-side の type を変更してください
