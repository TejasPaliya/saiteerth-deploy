import type { Schema, Struct } from '@strapi/strapi';

export interface AttractionAttractionSection extends Struct.ComponentSchema {
  collectionName: 'components_attraction_attraction_sections';
  info: {
    displayName: 'section';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    first_point: Schema.Attribute.String & Schema.Attribute.Required;
    fourth_point: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    second_point: Schema.Attribute.String & Schema.Attribute.Required;
    third_point: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AttractionCta extends Struct.ComponentSchema {
  collectionName: 'components_attraction_ctas';
  info: {
    displayName: 'cta';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeDestination extends Struct.ComponentSchema {
  collectionName: 'components_home_destinations';
  info: {
    displayName: 'destination';
    icon: 'dashboard';
  };
  attributes: {
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeInsta extends Struct.ComponentSchema {
  collectionName: 'components_home_instas';
  info: {
    displayName: 'insta';
  };
  attributes: {
    posting_date: Schema.Attribute.DateTime;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    review: Schema.Attribute.Text;
  };
}

export interface HomeYt extends Struct.ComponentSchema {
  collectionName: 'components_home_yts';
  info: {
    displayName: 'yt';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface OffersDetails extends Struct.ComponentSchema {
  collectionName: 'components_offers_details';
  info: {
    displayName: 'details';
    icon: 'dashboard';
  };
  attributes: {
    age: Schema.Attribute.String;
    end_date: Schema.Attribute.DateTime;
    mode: Schema.Attribute.String;
  };
}

export interface OffersFaq extends Struct.ComponentSchema {
  collectionName: 'components_offers_faqs';
  info: {
    displayName: 'faq';
    icon: 'dashboard';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface OffersPoint extends Struct.ComponentSchema {
  collectionName: 'components_offers_points';
  info: {
    displayName: 'point';
    icon: 'dashboard';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface OffersSteps extends Struct.ComponentSchema {
  collectionName: 'components_offers_steps';
  info: {
    displayName: 'steps';
    icon: 'dashboard';
  };
  attributes: {
    first: Schema.Attribute.String;
    second: Schema.Attribute.String;
    third: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'attraction.attraction-section': AttractionAttractionSection;
      'attraction.cta': AttractionCta;
      'home.destination': HomeDestination;
      'home.insta': HomeInsta;
      'home.testimonial': HomeTestimonial;
      'home.yt': HomeYt;
      'offers.details': OffersDetails;
      'offers.faq': OffersFaq;
      'offers.point': OffersPoint;
      'offers.steps': OffersSteps;
    }
  }
}
