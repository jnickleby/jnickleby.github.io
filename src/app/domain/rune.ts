export class Rune {

  constructor(
    public expression: string,
    public name: string,
    public description: string,
    public parentGroup?: Rune,
    public atomicGroup?: string,
    public atomic: boolean = false
  ) {
    if (this.name !== 'not' && !atomic) {
      this.docLink += `${this.parentGroup.name}/${this.name}`;
    }
  }

  public docLink = 'https://urbit.org/docs/reference/hoon-expressions/rune/';

  static createSpace(): Rune { return new Rune('', 'not', 'Creates existence'); }

  combineOptions(expression: string, name: string, description: string): Rune {
    return new Rune(this.expression + expression, this.name + name, description, this);
  }

  combineRune(rune: Rune, description: string): Rune {
    return new Rune(this.expression + rune.expression, this.name + rune.name, description, this);
  }
}

// region PRIME RUNES

export const NOT = Rune.createSpace();

export const BAR = new Rune(
  '|', 'bar', 'Produces core(s)', NOT, 'Cores', true);

export const BUC = new Rune(
  '$', 'buc', 'Defines custom type(s)', NOT, 'Structures', true);

export const CEN = new Rune(
  '%', 'cen', 'Makes function calls in Hoon', NOT, 'Calls', true);

export const COL = new Rune(
  ':', 'col', 'Produces cell(s)', NOT, 'Cells', true);

export const DOT = new Rune(
  '.', 'dot', 'Carries out Nock operations in Hoon', NOT, 'Nock', true);

export const KET = new Rune(
  '^', 'ket', 'Adjusts types without violating type constraints', NOT, 'Cast', true);

export const LUS = new Rune(
  '+', 'lus', 'Defines arms in a core', NOT, 'Arms', true);

export const MIC = new Rune(
  ';', 'mic', 'Handles useful macros', NOT, 'Make', true);

export const SIG = new Rune(
  '~', 'sig', 'Passes non-semantic info to the interpreter', NOT, 'Hints', true);

export const TIS = new Rune(
  '=', 'tis', 'Modifies the subject', NOT, 'Subject Modification', true);

export const WUT = new Rune(
  '?', 'wut', 'Processes branching on conditionals',  NOT, 'Conditionals', true);

export const ZAP = new Rune(
  '!', 'zap', 'Handles wildcard expressions', NOT, 'Wild', true);

export const TEM = new Rune(
  '--', '', 'Terminates expressions', NOT, 'Terminators', true);

export const TER = new Rune(
  '==', '', 'Terminates expression', NOT, 'Terminators', true);

export const PRIME_RUNES = [BAR, BUC, CEN, COL, DOT, KET, LUS, MIC, SIG, TIS, WUT, ZAP, TEM, TER];

// endregion PRIME RUNES

// region SECONDARY RUNES

export const CAB = new Rune(
  '_', 'cab', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

export const HEP = new Rune(
  '-', 'hep', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

export const TAR = new Rune(
  '*', 'tar', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

export const VAT = new Rune(
  '@', 'vat', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

// endregion SECONDARY RUNES



// region GLYPHS

// region BAR

export const BARCAB = BAR.combineRune(CAB, 'Produces a door (a core with a sample)');

export const BARCEN = BAR.combineRune(CEN, 'Produces a core ([battery, payload])');

export const BARCOL = BAR.combineRune(COL, 'Produces a gate with a custom sample');

export const BARDOT = BAR.combineRune(DOT, 'Produces a trap (core with one arm = $)');

export const BARHEP = BAR.combineRune(HEP, 'Produces a trap (core with one arm = $) and evaluate it');

export const BARKET = BAR.combineRune(KET, 'Produce a core whose battery includes a $ arm and computer the latter');

export const BARSIG = BAR.combineRune(SIG, 'Produce an iron gate');

export const BARTAR = BAR.combineRune(TAR, 'Produces a wet gate (one-armed core with sample)');

export const BARTIS = BAR.combineRune(TIS, 'Produce a gate (one-armed core with a sample');

export const BARVAT = BAR.combineRune(VAT, 'Produces a wet core ([battery payload])');

export const BARWUT = BAR.combineRune(WUT, 'Produces a lead trap');

// endregion BAR

export const BAR_SET = {
  parent: BAR,
  children: [BARCAB, BARCEN, BARCOL, BARDOT, BARHEP, BARKET, BARSIG, BARTAR, BARTIS, BARVAT, BARWUT]
};

// region BUC

export const BUCCAB = BUC.combineRune(CAB, 'Normalizes the structure to an example');

export const BUCCEN = BUC.combineRune(CEN, 'Recognizes a union tagged by the head atom');

export const BUCCOL = BUC.combineRune(COL, 'Forms a cell type');

export const BUCHEP = BUC.combineRune(HEP, 'Normalizes the structure to an example gate');

export const BUCKET = BUC.combineRune(KET, 'Normalizes the structure to a union tagged by head depth (cell)');

export const BUCSIG = BUC.combineRune(SIG, 'Define a custom type default value');

export const BUCVAT = BUC.combineRune(VAT, 'Normalizes the structure to a union tagged by head depth (atom)');

// endregion BUC

export const BUC_SET = {
  parent: BUC,
  children: [BUCCAB, BUCCEN, BUCCOL, BUCHEP, BUCKET, BUCSIG, BUCVAT]
};

// region CEN

export const CENCAB = CEN.combineRune(CAB, 'Resolves a wing with changes; preserves type');

export const CENCOL = CEN.combineRune(COL, 'Calls a gate with many arguments');

export const CENDOT = CEN.combineRune(DOT, 'Calls a gate (function) inverted');

export const CENHEP = CEN.combineRune(HEP, 'Calls a gate (function)');

export const CENKET = CEN.combineRune(KET, 'Calls gate with triple sample');

export const CENLUS = CEN.combineRune(LUS, 'Call gate with a cell sample');

export const CENSIG = CEN.combineRune(SIG, 'Evaluates an arm in a door');

export const CENTAR = CEN.combineRune(TAR, 'Evaluates an expression and then resolves a wing with changes');

export const CENTIS = CEN.combineRune(TIS, 'Resolves a wing with changes');

// endregion CEN

export const CEN_SET = {
  parent: CEN,
  children: [CENCAB, CENCOL, CENDOT, CENHEP, CENKET, CENLUS, CENSIG, CENTAR, CENTIS]
};

// region COL

export const COLCAB = COL.combineRune(CAB, 'Resolves a wing with changes; preserves type');

export const COLHEP = COL.combineRune(HEP, 'Constructs a tuple cell');

export const COLKET = COL.combineRune(KET, 'Constructs a quadruple cell');

export const COLLUS = COL.combineRune(LUS, 'Constructs a triple cell');

export const COLSIG = COL.combineRune(SIG, 'Constructs a null-terminated list');

export const COLTAR = COL.combineRune(TAR, 'Constructs an n-tuple cell');

// endregion COL

export const COL_SET = {
  parent: COL,
  children: [COLCAB, COLHEP, COLKET, COLLUS, COLSIG, COLTAR]
};

// region DOT

export const DOTKET = DOT.combineRune(KET, 'Loads from the Arvo namespace with a fake Nock instruction with Nock 12');

export const DOTLUS = DOT.combineRune(LUS, 'Increments an atom by 1 with Nock 4');

export const DOTTAR = DOT.combineRune(TAR, 'Evaluates with Nock 2');

export const DOTTIS = DOT.combineRune(TIS, 'Tests for equality with Nock 5');

export const DOTWUT = DOT.combineRune(WUT, 'Tests for cell or atom with Nock 3');

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

// endregion GLYPHS

export const RUNE_SETS = [
  BAR_SET, BUC_SET, CEN_SET, COL_SET, DOT_SET, KET_SET, LUS_SET, MIC_SET, SIG_SET, TIS_SET, WUT_SET, ZAP_SET
];

