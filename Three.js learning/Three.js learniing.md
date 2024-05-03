Three.js 學習筆記
=== 

##### 2024/05/03

## 基礎知識
### Three.js 基本元素：

* ### 場景（Scene）：供其他元素設置的空間。
* ### 相機（Camera）：在場景中建立觀察點，並確定觀察方向、角度。
* ### 物體（Objects）：在場景中添加被觀察的物體。
* ### 光源（Light）：在場景中用來照亮物體的光。
* ### 渲染器（Renderer）：將所要呈現的場景渲染到畫面上。
### **1. 引入 Three.js 的 library**
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/96/three.min.js"></script>
```
或者
```JS
import * as THREE from 'https://cdn.skypack.dev/three@0.130.0';
```
### **2. 創建場景 `scene`**
```JS
const scene = new THREE.Scene();
```
### **3. 建立相機 `Camera`**
```JS
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
```
#### 每一個參數依序代表：
* #### 視角（fov, field of view）：又稱為視野、視場，指的是我們能從畫面上看到的視野範圍，一般在遊戲中會設定在 60 ~ 90 度。
* #### 畫面寬高比（aspect）：渲染結果的畫面比例，一般都是使用 window.innerWidth / window.innerHeight 。
* #### 近面距離（near）：從距離相機多近的地方開始渲染，一般推薦使用 0.1。
* #### 遠面距離（far）：相機能看得多遠，一般使用 1000，可視需求調整，設置過大會影響效能。
```JS
camera.position.set(10, 10, 10) // 相機位置
```
```JS
camera.lookAt(scene.position) // 相機焦點
```
