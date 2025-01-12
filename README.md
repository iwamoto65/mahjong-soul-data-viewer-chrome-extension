### 概要
本プロジェクトはオンライン麻雀ゲーム「雀魂」の牌譜を取得するためのGoogle拡張機能です。
また、※1 データ閲覧専用サイトと連携しており、専用サイトで取得したデータを詳細に見ることができます。
![スクリーンショット 2025-01-13 1 05 36](https://github.com/user-attachments/assets/62a1b6de-9c7d-4090-bf82-d49d7b451e62)

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
![スクリーンショット 2025-01-13 1 09 08](https://github.com/user-attachments/assets/8f6d05c6-5665-43b1-a852-80cbb5df9ecd)
④雀魂で牌譜を選択し拡張機能アイコンをクリックすると専用ページに遷移する
![スクリーンショット 2025-01-13 1 13 47](https://github.com/user-attachments/assets/70ab97da-380a-4a90-9bed-e10320244036)
![スクリーンショット 2025-01-12 3 41 12](https://github.com/user-attachments/assets/f27d9a1a-1ffa-43c8-b605-b47b02783357)
⑤完了
