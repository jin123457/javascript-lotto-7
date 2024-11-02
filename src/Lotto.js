import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#printNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #printNumbers() {
    return Console.print(`[${this.#numbers.join(', ')}]`);
  }

  getNumbers() {
    return this.#numbers;
  }

  matchRank(RANK_TABLE, winNumbers, isWinningBouns) {
    const matchCount = 12 - new Set([...this.#numbers, ...winNumbers]).size;
    const winningbouns = this.#numbers.some((number) => number === isWinningBouns);
    const rank = RANK_TABLE[matchCount];
    
    if (matchCount === 5 && winningbouns) return rank[0];

    if (matchCount === 5 && !winningbouns) return rank[1];

    return rank;
  }
}

export default Lotto;
