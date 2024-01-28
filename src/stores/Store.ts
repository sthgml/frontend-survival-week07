import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';

// Import reflect-metatdata 써줘라!
// 그래도 @ (decorator)에서 문제 발생!
// 얘를 전역인것 처럼 쓸것
// > tsconfig.json으로 이동! decorator관련 2개 주석 풀기!
/** usestore-ts */
@singleton()
@Store()
export default class OrderStore { // Extends ObjectStore
  order = {};

  @Action()
  setTogo(toGo: boolean) {
    this.order = {
      ...this.order,
      toGo,
    };
  }
}
