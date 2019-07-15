import {TextForm} from './text-form';

export class Rune {

  constructor(
    public expression: string,
    public name: string,
    public description: string,
    public parentGroup?: Rune,
    public atomicGroup?: string,
    public atomic: boolean = false,
    public overview?: string
  ) {
    if (this.name !== 'not' && !atomic) {
      this.docLink += `${this.parentGroup.name}#${this.name}`;
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
  '=', 'tis', 'Modifies the subject', NOT, 'Subject Modification', true,
    `
      To create a variable in Hoon, you bind a name to a value and combine it with the subject in a cell. 
      The name/value pair resides in the head while the subject resides in the tail.
      
      <ul>Example
        <li><span class="glossary">name</span>: <span class="code">a</span></li>
        <li>value: <span class="code">12</span></li>
        <li><span class="glossary">subject</span>: <span class="code">p</span></li>
        <li>form: <span class="code">[a=12 p]</span></li>
        <li><span class="code">[a=12 p] -> [b=2 a]</span></li>
      </ul>
    `
  );

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

export const BAN = new Rune(
  '>', 'ban', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

export const CAB = new Rune(
  '_', 'cab', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

export const COM = new Rune(
  ',', 'com', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

export const FAS = new Rune(
  '/', 'fas', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

export const HEP = new Rune(
  '-', 'hep', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

export const LED = new Rune(
  '<', 'led', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

export const NET = new Rune(
  '/', 'net', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

export const PAD = new Rune(
  '&', 'pad', 'Used to make glyphs', NOT, 'Glyph Combinator', true);

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

// region KEY

export const KETBAR = KET.combineRune(BAR, 'Converts a gold core to an iron core');

export const KETCOL = KET.combineRune(COL, 'Creates a factory gate for a specified type');

export const KETDOT = KET.combineRune(DOT, 'Performs a typecast on value produces from p to q');

export const KETHEP = KET.combineRune(HEP, 'Performs a typecast by an explicit type label');

export const KETLUS = KET.combineRune(LUS, 'Perform typecast by inferred type');

export const KETPAD = KET.combineRune(PAD, 'Converts a core to a zinc core (covariant)');

export const KETSIG = KET.combineRune(SIG, 'Folds input as constant at compile time if possible');

export const KETTAR = KET.combineRune(TAR, 'Produces an example type value');

export const KETTIS = KET.combineRune(TIS, 'Binds a name to a value');

export const KETWUT = KET.combineRune(WUT, 'Converts any core to a lead core (bivariant)');

// endregion KEY

export const KET_SET = {
  parent: KET,
  children: [KETBAR, KETCOL, KETDOT, KETHEP, KETLUS, KETPAD, KETSIG, KETTAR, KETTIS, KETWUT]
};

// region LUS

export const LUSBAR = LUS.combineRune(BAR, 'Creates a chapter label');

export const LUSBUC = LUS.combineRune(BUC, 'Produces a structure arm (type definition)');

export const LUSLUS = LUS.combineRune(LUS, 'Produces a normal arm');

export const LUSTAR = LUS.combineRune(TAR, 'Produces a type constructor arm');

// endregion LUS

export const LUS_SET = {
  parent: LUS,
  children: [LUSBAR, LUSBUC, LUSLUS, LUSTAR]
};

// region MIC

export const MICCOL = MIC.combineRune(COL, 'Calls a binary function as an n-ary function');

export const MICLUS = MIC.combineRune(LUS, 'Makes a single XML node (Sail)');

export const MICMIC = MIC.combineRune(MIC, 'Normalizes with a mold, asserting fixpoint');

export const MICFAS = MIC.combineRune(FAS, 'Tape as XML element');

export const MICSIG = MIC.combineRune(SIG, 'Glues a pipeline together with a product-sample adapter');

export const MICTAR = MIC.combineRune(TAR, 'Makes a list of XML nodes from complex Hoon expression (Sail)');

export const MICTIS = MIC.combineRune(TIS, 'Makes a list of XML nodes (Sail)');

// endregion MIC

export const MIC_SET = {
  parent: MIC,
  children: [MICCOL, MICLUS, MICMIC, MICFAS, MICSIG, MICTAR, MICTIS]
};

// region SIG

export const SIGBAN = SIG.combineRune(BAN, 'Creates a raw hint applied to computation');

export const SIGBAR = SIG.combineRune(BAR, 'Creates a tracing printf');

export const SIGBUC = SIG.combineRune(BUC, 'Creates a profiling hit counter');

export const SIGCAB = SIG.combineRune(CAB, 'Creates a user-formatted tracing printf');

export const SIGCEN = SIG.combineRune(CEN, 'Creates a jet registration');

export const SIGLED = SIG.combineRune(LED, 'Creates a raw hint applied to product');

export const SIGLUS = SIG.combineRune(LUS, 'Caches a computation');

export const SIGNET = SIG.combineRune(NET, 'Creates a jet registration for gate with registered context');

export const SIGPAD = SIG.combineRune(PAD, 'Creates a debugging printf');

export const SIGTIS = SIG.combineRune(TIS, 'Detects duplicate');

export const SIGWUT = SIG.combineRune(WUT, 'Creates a conditional debug printf');

export const SIGZAP = SIG.combineRune(ZAP, 'Sets print type on compilation fail');

// endregion SIG

export const SIG_SET = {
  parent: SIG,
  children: [SIGBAN, SIGBAR, SIGBUC, SIGCAB, SIGCEN, SIGLED, SIGLUS, SIGNET, SIGPAD, SIGTIS, SIGWUT, SIGZAP]
};

// region TIS

export const TISBAN = TIS.combineRune(BAN, 'Composes two expressions');

export const TISBAR = TIS.combineRune(BAR, 'Combines a default type value with the subject');

export const TISCOL = TIS.combineRune(COL, 'Changes multiple legs in the subject');

export const TISCOM = TIS.combineRune(COM, 'Exposes a namespace');

export const TISDOT = TIS.combineRune(DOT, 'Changes one leg in the subject');

export const TISFAS = TIS.combineRune(FAS, 'Combines a named noun with the subject, possibly with type annotation');

export const TISHEP = TIS.combineRune(HEP, 'Combines a new noun with the subject, inverted');

export const TISKET = TIS.combineRune(KET, 'Pins the head of a pair and changes a leg with a tail');

export const TISLED = TIS.combineRune(LED, 'Composes two expressions, inverted');

export const TISLUS = TIS.combineRune(LUS, 'Combines a new noun with the subject');

export const TISMIC = TIS.combineRune(MIC, 'Combines a named noun with the subject, possibly with type annotation; inverted order');

export const TISSIG = TIS.combineRune(SIG, 'Composes many expressions');

export const TISTAR = TIS.combineRune(TAR, 'Defines an alias');

export const TISWUT = TIS.combineRune(WUT, 'Conditionally changes one leg in the subject');

// endregion TIS

export const TIS_SET = {
  parent: TIS,
  children: [TISBAN, TISBAR, TISCOL, TISCOM, TISDOT, TISFAS, TISHEP, TISKET, TISLED, TISLUS, TISMIC, TISSIG, TISTAR, TISWUT]
};

// region WUT

export const WUTBAN = WUT.combineRune(BAN, 'Creates a positive assertion');

export const WUTBAR = WUT.combineRune(BAR, 'Creates logical OR');

export const WUTCOL = WUT.combineRune(COL, 'Creates a branch on a boolean test');

export const WUTDOT = WUT.combineRune(DOT, 'Branches on a boolean test, inverted');

export const WUTHEP = WUT.combineRune(HEP, 'Switches against a union, with no default');

export const WUTKET = WUT.combineRune(KET, 'Branches on whether a wing of the subject evaluates as a cell');

export const WUTLED = WUT.combineRune(LED, 'Creates a negative assertion');

export const WUTLUS = WUT.combineRune(LUS, 'Switches against a union, with a default');

export const WUTPAD = WUT.combineRune(PAD, 'Creates logical AND');

export const WUTSIG = WUT.combineRune(SIG, 'Branches on whether a wing of the subject evaluates to null');

export const WUTTIS = WUT.combineRune(TIS, 'Tests pattern match');

export const WUTVAT = WUT.combineRune(VAT, 'Branches on whether a wing of the subject evaluates to an atom');

export const WUTZAP = WUT.combineRune(ZAP, 'Creates logical NOT');

// endregion WUT

export const WUT_SET = {
  parent: WUT,
  children: [WUTBAN, WUTBAR, WUTCOL, WUTDOT, WUTHEP, WUTKET, WUTLED, WUTLUS, WUTPAD, WUTSIG, WUTTIS, WUTVAT, WUTZAP]
};

// region ZAP

export const ZAPBAN = ZAP.combineRune(BAN, 'Wraps a noun in its type');

export const ZAPCOL = ZAP.combineRune(COL, 'Turns on stack trace');

export const ZAPDOT = ZAP.combineRune(DOT, 'Turns off stack trace for a subexpression p');

export const ZAPTIS = ZAP.combineRune(TIS, 'Makes the Nock formula for a Hoon expression');

export const ZAPWUT = ZAP.combineRune(WUT, 'Restricts Hoon version');

export const ZAPZAP = ZAP.combineRune(ZAP, 'Crashes program');

// endregion ZAP

export const ZAP_SET = {
  parent: ZAP,
  children: [ZAPBAN, ZAPCOL, ZAPDOT, ZAPTIS, ZAPWUT, ZAPZAP]
};

// endregion GLYPHS

export const RUNE_SETS = [
  BAR_SET, BUC_SET, CEN_SET, COL_SET, DOT_SET, KET_SET, LUS_SET, MIC_SET, SIG_SET, TIS_SET, WUT_SET, ZAP_SET
];

