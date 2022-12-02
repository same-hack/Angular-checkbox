import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  checkbox1: Boolean = false;
  checkbox2: Boolean = false;
  checkbox3: Boolean = false;

  isToggle(event: any) {
    // イベントが全て取得される
    // HTMLのid属性を取得したいのでngModelChangeではなくchangeを使用
    const element = event.target;
    console.log('element', element);

    switch (element.id) {
      // チェックボックス①を操作
      case 'id1':
        if (element.checked) {
          // 何もしない
        } else {
          // ②③のチェックを外す
          this.checkbox2 = false;
          this.checkbox3 = false;
        }
        break;
      // チェックボックス②を操作
      case 'id2':
        if (element.checked) {
          // ①をチェックドに
          this.checkbox1 = true;
        } else {
          // ③のチェックを外す
          this.checkbox3 = false;
        }
        break;
      // チェックボックス③を操作
      case 'id3':
        if (element.checked) {
          // ①②をチェックドに
          this.checkbox1 = true;
          this.checkbox2 = true;
        } else {
          // なにもしない
        }
        break;
    }
  }
}
