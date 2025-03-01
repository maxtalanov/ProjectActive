export enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export type Src = `http${'s' | ''}://${string}` | `/${string}` | `./${string}` | `../${string}`;

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    title: string;
    src: Src;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export enum ArticleType {
    IT = 'IT',
    SCIENCES = 'SCIENCES',
    ECONOMIC = 'ECONOMIC',
}

export interface Article {
    id: string;
    title: string,
    subtitle: string;
    img: string;
    views: number;
    createdAt: number;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
