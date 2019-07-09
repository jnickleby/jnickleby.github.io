export class Rune {

  constructor(
    public expression: string,
    public name: string,
    public description: string,
    public parentGroup?: Rune,
    public atomicGroup?: string,
    public atomic: boolean = false,
  ) {}

  static createSpace(): Rune { return new Rune('', 'not', 'Creates existence'); }
}

export const BAR = new Rune(
  '|', 'bar', 'Produces core(s)', Rune.createSpace(), 'Cores', true);

export const DOT = new Rune(
  '.', 'dot', 'Carries out Nock operations in Hoon', Rune.createSpace(), 'Nock', true);

export const PRIME_RUNES = [BAR, DOT];

