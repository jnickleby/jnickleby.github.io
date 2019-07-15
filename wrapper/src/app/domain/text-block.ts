import {TextForm} from './text-form';

export class TextBlock {

  constructor(
    public metaTextForm: TextForm[] = [],
    public forms: TextForm[] = []
  ) {}
}
