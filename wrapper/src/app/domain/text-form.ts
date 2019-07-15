
export class TextForm {

  constructor(
    context: 'standard' | 'code' | 'blank',
    content: string
  ) {}

  static of(context: 'standard' | 'code' | 'blank', content: string) {
    return new TextForm(context, content);
  }
}
