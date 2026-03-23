import type { Schema, Struct } from '@strapi/strapi';

export interface AttractionAttractionSection extends Struct.ComponentSchema {
  collectionName: 'components_attraction_attraction_sections';
  info: {
    displayName: 'section';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    first_icom: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    first_point: Schema.Attribute.String & Schema.Attribute.Required;
    fourth_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    fourth_point: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    second_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    second_point: Schema.Attribute.String & Schema.Attribute.Required;
    third_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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

export interface FoodItem extends Struct.ComponentSchema {
  collectionName: 'components_food_items';
  info: {
    displayName: 'item';
  };
  attributes: {};
}

export interface FoodMenu extends Struct.ComponentSchema {
  collectionName: 'components_food_menus';
  info: {
    displayName: 'menu';
    icon: 'clock';
  };
  attributes: {
    category: Schema.Attribute.Component<'food.menu-category', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FoodMenuCategory extends Struct.ComponentSchema {
  collectionName: 'components_food_menu_categories';
  info: {
    displayName: 'menu-category';
  };
  attributes: {
    category: Schema.Attribute.String;
    item: Schema.Attribute.Component<'food.item', true>;
  };
}

export interface FoodStallCard extends Struct.ComponentSchema {
  collectionName: 'components_food_stall_cards';
  info: {
    displayName: 'stall_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    stall_menu: Schema.Attribute.Component<'food.stall-menu', true>;
  };
}

export interface FoodStallMenu extends Struct.ComponentSchema {
  collectionName: 'components_food_stall_menus';
  info: {
    displayName: 'stall-menu';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface FoodStalls extends Struct.ComponentSchema {
  collectionName: 'components_food_stalls';
  info: {
    displayName: 'stalls';
  };
  attributes: {
    card: Schema.Attribute.Component<'food.stall-card', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface HomeComments extends Struct.ComponentSchema {
  collectionName: 'components_home_comments';
  info: {
    displayName: 'comments';
    icon: 'dashboard';
  };
  attributes: {
    comment: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface HomeDestination extends Struct.ComponentSchema {
  collectionName: 'components_home_destinations';
  info: {
    displayName: 'destination';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeEats extends Struct.ComponentSchema {
  collectionName: 'components_home_eats';
  info: {
    displayName: 'eats';
    icon: 'dashboard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface HomeIndoor extends Struct.ComponentSchema {
  collectionName: 'components_home_indoors';
  info: {
    displayName: 'indoor';
    icon: 'dashboard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub: Schema.Attribute.String;
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

export interface HomeInstagram extends Struct.ComponentSchema {
  collectionName: 'components_home_instagrams';
  info: {
    displayName: 'instagram';
    icon: 'dashboard';
  };
  attributes: {
    followers: Schema.Attribute.String;
    handle_name: Schema.Attribute.String;
    handle_sub: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    reel: Schema.Attribute.Component<'home.reel', true>;
  };
}

export interface HomeLink extends Struct.ComponentSchema {
  collectionName: 'components_home_links';
  info: {
    displayName: 'link';
    icon: 'dashboard';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeReel extends Struct.ComponentSchema {
  collectionName: 'components_home_reels';
  info: {
    displayName: 'reel';
  };
  attributes: {
    link: Schema.Attribute.String;
    reel: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    upload_date: Schema.Attribute.DateTime;
  };
}

export interface HomeReview extends Struct.ComponentSchema {
  collectionName: 'components_home_reviews';
  info: {
    displayName: 'review';
    icon: 'dashboard';
  };
  attributes: {
    comments: Schema.Attribute.Component<'home.comments', true>;
    heading: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface HomeSamadhi extends Struct.ComponentSchema {
  collectionName: 'components_home_samadhis';
  info: {
    displayName: 'samadhi';
    icon: 'dashboard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeStories extends Struct.ComponentSchema {
  collectionName: 'components_home_stories';
  info: {
    displayName: 'stories';
    icon: 'dashboard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub: Schema.Attribute.String;
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

export interface HomeYoutube extends Struct.ComponentSchema {
  collectionName: 'components_home_youtubes';
  info: {
    displayName: 'youtube';
    icon: 'dashboard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'home.link', true>;
    sub: Schema.Attribute.String;
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

export interface NearbyCities extends Struct.ComponentSchema {
  collectionName: 'components_nearby_cities';
  info: {
    displayName: 'cities';
  };
  attributes: {
    city_name: Schema.Attribute.String;
    distance: Schema.Attribute.String;
  };
}

export interface NearbyNearbyCities extends Struct.ComponentSchema {
  collectionName: 'components_nearby_nearby_cities';
  info: {
    displayName: 'nearby_cities';
  };
  attributes: {
    cities: Schema.Attribute.Component<'nearby.cities', true>;
    cta_description: Schema.Attribute.Text;
    cta_heading: Schema.Attribute.String;
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

export interface OffersNotes extends Struct.ComponentSchema {
  collectionName: 'components_offers_notes';
  info: {
    displayName: 'notes';
    icon: 'dashboard';
  };
  attributes: {
    point: Schema.Attribute.String;
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

export interface OffersTickets extends Struct.ComponentSchema {
  collectionName: 'components_offers_tickets';
  info: {
    displayName: 'tickets';
    icon: 'dashboard';
  };
  attributes: {
    height: Schema.Attribute.String;
    name: Schema.Attribute.String;
    weekday_price: Schema.Attribute.String;
    weekend_price: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'attraction.attraction-section': AttractionAttractionSection;
      'attraction.cta': AttractionCta;
      'food.item': FoodItem;
      'food.menu': FoodMenu;
      'food.menu-category': FoodMenuCategory;
      'food.stall-card': FoodStallCard;
      'food.stall-menu': FoodStallMenu;
      'food.stalls': FoodStalls;
      'home.comments': HomeComments;
      'home.destination': HomeDestination;
      'home.eats': HomeEats;
      'home.indoor': HomeIndoor;
      'home.insta': HomeInsta;
      'home.instagram': HomeInstagram;
      'home.link': HomeLink;
      'home.reel': HomeReel;
      'home.review': HomeReview;
      'home.samadhi': HomeSamadhi;
      'home.stories': HomeStories;
      'home.testimonial': HomeTestimonial;
      'home.youtube': HomeYoutube;
      'home.yt': HomeYt;
      'nearby.cities': NearbyCities;
      'nearby.nearby-cities': NearbyNearbyCities;
      'offers.details': OffersDetails;
      'offers.faq': OffersFaq;
      'offers.notes': OffersNotes;
      'offers.point': OffersPoint;
      'offers.steps': OffersSteps;
      'offers.tickets': OffersTickets;
    }
  }
}
