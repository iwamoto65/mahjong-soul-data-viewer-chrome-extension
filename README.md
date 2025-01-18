### 概要
本プロジェクトはオンライン麻雀ゲーム「雀魂」の牌譜を取得するためのGoogle拡張機能です。
また、※1 データ閲覧専用サイトと連携しており、専用サイトで取得したデータを詳細に見ることができます。
![data-viewer-image](https://github.com/iwamoto65/github-images/raw/main/mahjong-data-viewer-page.png)

※1 website: https://www.mahjong-data-viewer.com/game/latest/demo, github: https://github.com/iwamoto65/mahjong-soul-data-viewer

### 作成した動機
麻雀に興味を持った人がより麻雀を楽しみ、強くなるきっかけを掴んでほしいと思いこのサービスを構想しました。  
リアル麻雀に抵抗がある人はオンラインで麻雀の面白さを知って欲しい。オンライン麻雀サービスは天鳳や麻雀一番街、麻雀格闘倶楽部Sp、NET麻雀　MJモバイルなど様々存在しますが、「雀魂」は麻雀プロやストリーマーと相性がよくユーザー数も多いので採用する決め手となりました。  
また、本プロジェクトで扱っているデータは和了率・放銃率・副露率など一般的なものであり、ルールを覚えてきた初心者（雀傑）から上級者（魂天）まで幅広い層が見て楽しめるデータを揃えました。  
業界全体が大小関わらず、様々な角度から盛り上がっていければ良いと願っております。

### 補足事項
外部サービス「雀魂」を使用したサービスであることを踏まえ、chrome web storeでの不特定多数への公開を控えております。（公式の許可が取れ次第公開を検討します）  
「雀魂」アカウントをお持ちの方はコードをダウンロードし、拡張機能ページ(chrome://extensions/) でファイルをアップロードすることで利用できます。詳細は「拡張機能を使うためには」をご覧ください。

### 拡張機能を使うためには
①Codeページからコードをダウンロード  
②chromeを開き拡張機能ページ(chrome://extensions/)を開く  
③パッケージ化されていない拡張機能を読み込むから①でダウンロードしたコードをアップロードする  
![chrome-extension-page-image](https://github.com/iwamoto65/github-images/raw/main/chrome-extension-import-page.png)
④雀魂で牌譜を選択し拡張機能アイコンをクリックすると専用ページに遷移する
![data-viewer-icon](https://github.com/iwamoto65/github-images/raw/main/mahjong-data-viewer-extension-icon.png)
![mahjong-paifu-image](https://github.com/iwamoto65/github-images/raw/main/mahjong-soul-paifu.png)
⑤完了
