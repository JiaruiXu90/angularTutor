import { Component } from '@angular/core';
import {Recipe} from '../../shared/recipe.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  selectedFood: Set<String> = new Set<String>();
  meals: Set<String> = new Set<String>();
  canCook = false;

  food: String[] = ['西红柿', '豆腐', '土豆', '洋葱', '青椒', '牛腩', '鸡蛋', '猪肉', '鸡胸肉','羊肉'];
  // recipes: Recipe[] = [new Recipe('西红柿炖牛腩', new Set<String>(['西红柿', '牛腩'])),
  //   new Recipe('番茄炒蛋', new Set<String>(['西红柿', '鸡蛋'])),
  //   new Recipe('土豆炖牛腩', new Set<String>(['土豆', '牛腩'])),
  //   new Recipe('麻辣香锅', new Set<String>(['牛腩', '猪肉', '土豆', '洋葱'])) ];

  addFood(fo) {
    if (this.selectedFood.has(fo)) {
      this.selectedFood.delete(fo);
    } else {
      this.selectedFood.add(fo);
    }
  }
  showRecipes() {
    this.canCook = false;
    this.meals.clear();

    if (this.selectedFood.has('西红柿') && this.selectedFood.has('鸡蛋')) {
      this.meals.add('番茄炒蛋');
      this.canCook = true;
    }


    if (this.selectedFood.has('西红柿') && this.selectedFood.has('牛腩')) {
      this.meals.add('西红柿炖牛腩');
      this.canCook = true;
    }

    if (this.selectedFood.has('牛腩') && this.selectedFood.has('土豆')) {
      this.meals.add('土豆炖牛腩');
      this.canCook = true;
    }

    if (this.selectedFood.has('猪肉') && this.selectedFood.has('土豆')) {
      this.meals.add('红烧肉');
      this.canCook = true;
    }

    if (this.selectedFood.has('鸡胸肉') && this.selectedFood.has('洋葱')) {
      this.meals.add('碳烤鸡胸肉');
      this.canCook = true;
    }

    if (this.selectedFood.has('豆腐') && this.selectedFood.has('猪肉')) {
      this.meals.add('烂肉豆腐');
      this.canCook = true;
    }
  }
}
