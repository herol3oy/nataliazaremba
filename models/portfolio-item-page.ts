export interface PortfolioItemPage {
  _id: string;
  category: string[];
  description: [
    {
      _key: string;
      _type: string;
      children: [
        {
          _key: string;
          _type: string;
          marks: [];
          text: string;
        }
      ];
      markDefs: [];
      style: string;
    }
  ];
  images: [
    {
      _key: string;
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    }
  ];
  slug: {
    _type: string;
    current: string;
  };
  title: string;
}
