# fifth-week--main-task

12/1修改<br>
共同建議：<br>
<ol>
  <li>所有 icon 與 a 連結都可增添 hover 效果，優化使用者體驗。</li>
  <li>body 不需設定 min-height: 100vh，.mainNav 使用就可以了，最外層的 div 不需設定 .h-100。</li>
  <li>.container 建議可以參考 Bootstrap 設定 max-width 和 padding，不建議使用 % 表示。</li>
  <li>logo 可使用圖片取代文字技巧。</li>
  <li>.user-photo 建議設定 object-fit: cover，可避免圖片變形。</li>
</ol>

Assignment：
「∨ All Coursesｍ」、「All(4) ∨」建議用下拉式選單製作。
「Please check this file for me, thanks!」、「My Homework」等其他文章標題可使用標題標籤，比如 h3。

Admin：
#modal-new 內 「Name」、「Email」 label for 和 input 的 id 名稱跟 #modal-edit 內的重複了，所以無法正確對應。
同共同建議第三點，.prsonal-photo > img 可以加上 object-fit: cover。（小提醒：「個人」英文正確拼寫為 personal）
#modal-prsonal 的「Emir Wicks」可使用標題標籤呈現。
點擊 #modal-prsonal 的 edit 按鈕，需連至 #modal-edit。

SCSS 部分：
main.scss 請移到 scss 資料夾內哦。
_rest.scss 的正確拼寫應為 _reset.scss。
_base.scss 的 .position-re 可以移到 _utilities.scss，_base.scss 可以移至 base 資料夾，_typography.scss 的內容可以都放到 _base.scss。
