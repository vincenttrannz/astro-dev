export type ImageDataType = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number | null;
      height: number | null;
      formats: null | {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          path: string;
          url: string;
        };
        medium: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          path: string;
          url: string;
        };
        small: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          path: string;
          url: string;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string;
      provider: string;
      provider_metadata: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
};

export type Photo = {
  id: number;
  attributes: {
    PhotoTitle: string;
    PhotoLocation: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    PhotoImage: ImageDataType;
  };
};

export type Homepage = {
  id: number;
  attributes: {
    AboutSectionDescription: string;
    AboutSectionImage: ImageDataType;
    Skills: SkillType[];
    TypeTexts: TypeText[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type Project = {
  id: number;
  attributes: {
    createdAt: Date;
    description: string;
    location: Location;
    technologies: {
      data: Technology[];
    };
    project_gallery: {
      data: ImageDataType['data'][];
    };
    project_thumbnail: ImageDataType;
    project_link: string;
    publishedAt: Date;
    pull_quote: string;
    slug: string;
    title: string
    updatedAt: Date;
  }
}

export type Location = {
  id: number;
  attributes: {
    LocationColor: string;
    LocationLatitude: string;
    LocationLongitude: string;
    LocationName: string;
    createdAt: Date;
    projects: {
      data: Project[];
    }
    publishedAt: Date;
    updatedAt: Date;
  }
}

export type Technology = {
  id: number;
  attributes: {
    TechIcon: ImageDataType;
    TechName: string;
    createdAt: Date;
    publishedAt: Date;
    updatedAt: Date;
  }
}

// Other component type
export type SeoDataType = {
  id: number;
  MetaTitle: string;
  MetaDescription: string;
  ShareImage: ImageDataType;
};

export type SkillType = {
  id: number;
  DataIcon: string;
  SkillTitle: string;
  SkillDescription: string;
};

export type TypeText = {
  id: number;
  Text: string;
};
