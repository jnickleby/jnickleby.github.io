export class Rune {

  constructor(
    public expression: string,
    public name: string,
    public description: string,
    public docs?: string,
    public parentGroup?: Rune,
    public atomicGroup?: string,
    public atomic: boolean = false
  ) {}

  static parentUrl = 'https://urbit.org/docs/reference/hoon-expressions/rune/';

  static createSpace(): Rune { return new Rune('', 'not', 'Creates existence'); }

  static docLink(...additionalUrls: string[]): string {
    return `${this.parentUrl}${additionalUrls.join('/')}/`;
  }
}

// region PRIME RUNES

export const NOT = Rune.createSpace();

export const BAR = new Rune(
  '|', 'bar', 'Produces core(s)', Rune.parentUrl, NOT, 'Cores', true);

export const BUC = new Rune(
  '$', 'buc', 'Defines custom type(s)', Rune.parentUrl, NOT, 'Structures', true);

export const CEN = new Rune(
  '%', 'cen', 'Makes function calls in Hoon', Rune.parentUrl, NOT, 'Calls', true);

export const COL = new Rune(
  ':', 'col', 'Produces cell(s)', Rune.parentUrl, NOT, 'Cells', true);

export const DOT = new Rune(
  '.', 'dot', 'Carries out Nock operations in Hoon', Rune.parentUrl, NOT, 'Nock', true);

export const KET = new Rune(
  '^', 'ket', 'Adjusts types without violating type constraints', Rune.parentUrl, NOT, 'Cast', true);

export const LUS = new Rune(
  '+', 'lus', 'Defines arms in a core', Rune.parentUrl, NOT, 'Arms', true);

export const MIC = new Rune(
  ';', 'mic', 'Handles useful macros', Rune.parentUrl, NOT, 'Make', true);

export const SIG = new Rune(
  '~', 'sig', 'Passes non-semantic info to the interpreter', Rune.parentUrl, NOT, 'Hints', true);

export const TIS = new Rune(
  '=', 'tis', 'Modifies the subject', Rune.parentUrl, NOT, 'Subject Modification', true);

export const WUT = new Rune(
  '?', 'wut', 'Processes branching on conditionals', Rune.parentUrl, NOT, 'Conditionals', true);

export const ZAP = new Rune(
  '!', 'zap', 'Handles wildcard expressions', Rune.parentUrl, NOT, 'Wild', true);

export const TEM = new Rune(
  '--', '', 'Terminates expressions', Rune.parentUrl, NOT, 'Terminators', true);

export const TER = new Rune(
  '==', '', 'Terminates expression', Rune.parentUrl, NOT, 'Terminates', true);

export const PRIME_RUNES = [BAR, BUC, CEN, COL, DOT, KET, LUS, MIC, SIG, TIS, WUT, ZAP, TEM, TER];

// endregion PRIME RUNES

// region SECONDARY RUNES

// region DOT

export const DOTKET = new Rune('.^', 'dotket',
  'Loads from the Arvo namespace with a fake Nock instruction', Rune.docLink('dot', 'dotket'), DOT);

export const DOTLUS = new Rune('.+', 'dotlus',
  'Increments an atom by 1', Rune.docLink('dot', 'dotlus'));

// endregion DOT

export const BAR_SET = {
  parent: BAR,
  children: []
};

export const BUC_SET = {
  parent: BUC,
  children: []
};

export const CEN_SET = {
  parent: CEN,
  children: []
};

export const COL_SET = {
  parent: COL,
  children: []
};

export const DOT_SET = {
  parent: DOT,
  children: [DOTKET, DOTLUS]
};


export const KET_SET = {
  parent: KET,
  children: []
};

export const LUS_SET = {
  parent: LUS,
  children: []
};

export const MIC_SET = {
  parent: KET,
  children: []
};

export const SIG_SET = {
  parent: KET,
  children: []
};

export const TIS_SET = {
  parent: KET,
  children: []
};

export const WUT_SET = {
  parent: WUT,
  children: []
};

export const ZAP_SET = {
  parent: ZAP,
  children: []
};

// endregion SECONDARY RUNES

export const RUNE_SETS = [
  BAR_SET, BUC_SET, CEN_SET, COL_SET, DOT_SET, KET_SET, LUS_SET, MIC_SET, SIG_SET, TIS_SET, WUT_SET, ZAP_SET
];

