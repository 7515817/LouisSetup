# 我的電腦設備介紹網站

這是一個簡單的靜態網站範本，包含背景音樂與用於介紹你電腦設備的動態卡片。

檔案說明
- `index.html`：主頁，包含音樂播放器與設備清單顯示區。
- `styles.css`：樣式檔。
- `script.js`：載入 `data.json` 並將設備渲染成卡片，同時提供音樂控制行為。
- `data.json`：設備資料（請以實際硬體資料替換）。
- `music/your-music.mp3`：背景音樂（你需建立 `music` 資料夾並放入 mp3，或將 index.html 中的 audio src 指向外部音檔網址）。

如何自訂
1. 換音樂：
   - 建議將音檔放到 `music/` 資料夾，並命名為 `your-music.mp3`，
   - 或修改 `index.html` 的 `<audio id="bg-audio" src="...">` 屬性指向你的音檔網址。
2. 編輯設備資訊：
   - 編輯 `data.json`，根據範例調整每個 device 的 `name`、`description` 與 `specs`。
   - `specs` 是 key-value 格式，將會顯示為小標籤。
3. 更改樣式：
   - 修改 `styles.css`。

部署到 GitHub Pages（快速步驟）
1. 把所有檔案推到你的倉庫主分支（例如 `main`）或放到 `docs/` 資料夾。
2. 到 GitHub 倉庫頁面 -> Settings -> Pages：
   - 選擇 branch（例如 `main`）和資料夾（root 或 /docs），點 Save。
3. 幾分鐘後，你的網站會在 pages 提供的 URL 可見。

注意事項
- 現代瀏覽器通常需要使用者互動（例如點擊）才能播放自動背景音樂；此範本包含一個按鈕以啟動播放。
- 若你要上傳受版權保護的音樂，請確保你有使用權。
- 若檔案太大 (>100MB)，GitHub 不允許直接上傳，你需使用 Git LFS 或放到外部檔案託管（並把 index.html 指向該公開 URL）。