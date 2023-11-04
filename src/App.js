import { MissionUtils } from "@woowacourse/mission-utils";
import {
  LOTTO_INPUT_MESSAGE,
  LOTTO_OUTPUT_MESSAGE,
  ERROR_MESSAGE,
} from "./constants.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const purchaseCost = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.inputCost
    );

    if (purchaseCost % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.isInvaildUnit);
    }

    await this.createLotto(purchaseCost);

    const winningNum = enterWinnigNum.split(",");

    if (winningNum.length == !6) {
      throw new Error(`${ERROR_MESSAGE.isOnlySixNum}`);
    }

    const bonusNum = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.inputBonusNum
    );
  }

  async createLotto(purchaseCost) {
    const numOfLotto = purchaseCost / 1000;
    const tellNumOfLotto = await MissionUtils.Console.print(
      `${numOfLotto}${LOTTO_OUTPUT_MESSAGE.numOfLotto}`
    );

    for (let i = 0; i < numOfLotto; i++) {
      let lottoNum = await MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );

      const printLottNum = await MissionUtils.Console.print(lottoNum);

      const lotto = new Lotto(lottoNum);
    }
  }
}

export default App;
