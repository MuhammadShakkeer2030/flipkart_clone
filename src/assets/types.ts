type HeaderCategoriesProps = {
  title: string;
  img: string;
}[];

type RowProductsProps = {
  id: number;
  title: string;
  img: string;
  offerAvailable: boolean;
}[];
type ProductDetailsProps = {
  id: number;
  title: string;
  img: string;
  offerAvailable: boolean;
};
interface FooterDataItem {
  heading: string;
  content: string;
}

interface FooterDataProps {
  [section: string]: FooterDataItem;
}

type headerCategoriesProps = {
  category: string;
  title: string;
  subItems: {
    name: string;
    id: string;
  }[];
}[];

export type {
  HeaderCategoriesProps,
  RowProductsProps,
  ProductDetailsProps,
  FooterDataProps,
  headerCategoriesProps
};
