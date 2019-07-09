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

// region BAR

export const BARCAB = new Rune('|_', 'barcab',
  'Produces a door (a core with a sample)', Rune.docLink('bar', 'barcab'), BAR);

export const BARCEN = new Rune('|%', 'barcen',
  'Produces a core ([battery, payload])', Rune.docLink('bar', 'barcen'), BAR);

export const BARCOL = new Rune('|:', 'barcol',
  'Produces a gate with a custom sample', Rune.docLink('bar', 'barcol'), BAR);

export const BARDOT = new Rune('|.', 'bardot',
  'Produces a trap (core with one arm = $)', Rune.docLink('bar', 'bardot'), BAR);

export const BARHEP = new Rune('|-', 'barhep',
  'Produces a trap (core with one arm = $) and evaluate it', Rune.docLink('bar', 'barhep'), BAR);

export const BARKET = new Rune('|^', 'barket',
  'Produce a core whose battery includes a $ arm and computer the latter', Rune.docLink('bar', 'barket'), BAR);

export const BARSIG = new Rune('|~', 'barsig',
  'Produce an iron gate', Rune.docLink('bar', 'barsig'), BAR);

export const BARTAR = new Rune('|*', 'bartar',
  'Produces a wet gate (one-armed core with sample)', Rune.docLink('bar', 'bartar'), BAR);

export const BARTIS = new Rune('|=', 'bartis',
  'Produce a gate (one-armed core with a sample', Rune.docLink('bar', 'bartis'), BAR);

export const BARVAT = new Rune('|@', 'barvat',
  'Produces a wet core ([batter payload])', Rune.docLink('bar', 'barvat'), BAR);

export const BARWUT = new Rune('|?', 'barwut',
  'Produces a lead trap', Rune.docLink('bar', 'barwut'), BAR);

// endregion BAR

export const BAR_SET = {
  parent: BAR,
  children: [BARCAB, BARCEN, BARCOL, BARDOT, BARHEP, BARKET, BARSIG, BARTAR, BARTIS, BARVAT, BARWUT]
};

// region BUC

export const BUCCAB = new Rune('$_', 'buccab',
  'Normalizes the structure to an example', Rune.docLink('buc', 'buccab'), BUC);

export const BUCCEN = new Rune('$%', 'buccen',
  'Recognizes a union tagged by the head atom', Rune.docLink('buc', 'buccen'), BUC);

export const BUCCOL = new Rune('$:', 'buccol',
  'Forms a cell type', Rune.docLink('buc', 'buccol'), BUC);

export const BUCHEP = new Rune('$-', 'buchep',
  'Normalizes the structure to an example gate', Rune.docLink('buc', 'buchep'), BUC);

export const BUCKET = new Rune('$^', 'bucket',
  'Normalizes the structure to a union tagged by head depth (cell)', Rune.docLink('buc', 'bucket'), BUC);

export const BUCSIG = new Rune('$~', 'bucsig',
  'Define a custom type default value', Rune.docLink('buc', 'bucsig'), BUC);

export const BUCVAT = new Rune('$@', 'bucvat',
  'Normalizes the structure to a union tagged by head depth (atom)', Rune.docLink('buc', 'bucvat'), BUC);

// endregion BUC

export const BUC_SET = {
  parent: BUC,
  children: [BUCCAB, BUCCEN, BUCCOL, BUCHEP, BUCKET, BUCSIG, BUCVAT]
};

export const CEN_SET = {
  parent: CEN,
  children: []
};

export const COL_SET = {
  parent: COL,
  children: []
};

// region DOT

export const DOTKET = new Rune('.^', 'dotket',
  'Loads from the Arvo namespace with a fake Nock instruction with Nock 12', Rune.docLink('dot', 'dotket'), DOT);

export const DOTLUS = new Rune('.+', 'dotlus',
  'Increments an atom by 1 with Nock 4', Rune.docLink('dot', 'dotlus'));

export const DOTTAR = new Rune('.*', 'dottar',
  'Evaluates with Nock 2', Rune.docLink('dot', 'dottar'));

export const DOTTIS = new Rune('.=', 'dottis',
  'Tests for equality with Nock 5', Rune.docLink('dot', 'dottis'));

export const DOTWUT = new Rune('.?', 'dotwut',
  'Tests for cell or atom with Nock 3', Rune.docLink('dot', 'dotwut'));

// endregion DOT

export const DOT_SET = {
  parent: DOT,
  children: [DOTKET, DOTLUS, DOTTAR, DOTTIS, DOTWUT]
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
  parent: MIC,
  children: []
};

export const SIG_SET = {
  parent: SIG,
  children: []
};

export const TIS_SET = {
  parent: TIS,
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

